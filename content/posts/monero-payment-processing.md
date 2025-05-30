---
title: "How to Create a Monero Payment Processor"
date: 2022-06-10T20:13:16-04:00
draft: false
tags:
  - monero
  - cryptocurrency
  - programming
  - tutorial
  - python
summary: "Design document for creating a monero processor, based on the payment processor I implemented on lenerva.com. These days, I'd recommend spinning up monero-pay on a server, although support for mempool webhooks is a missing feature."
---

## Preface

These days, I'd recommend spinning up monero-pay on a server, although support for mempool webhooks is a missing feature. In January 2022, I created my very own [ecommerce store](https://lenerva.com/store/) with the following features:

- From scratch
- JavaScript-free
- Monero acceptance via my custom processor
- Credit-Card acceptance via Stripe Sessions
- Drop-shipping integrated

This is more of a design document than a copy-paste solution.

At the end I mention an alternative, more long-term solution than the short-term kinda complicated cost-effective solution I made.

{{< toc >}}

## Introduction

For an MVP, you need to set environment variables for each backend server, such that each server has a corresponding ACCOUNT number for your Monero wallet. Each of these servers will have the same view-wallet opened through monero-wallet-rpc. [Logistics for backend](#logistics).

## Supporting Monero Payment Method

In your backend, when a user creates an order and selects Monero as the payment method, you should send an API request the monero-wallet-rpc that is running. Here is a snippet of my code. The relevant portion is the request as well as the error checking.

```py
############
# Defined in modules/monero.py
# two undefined func/var are os.environ related
XMR_RPC_PORT = '38088' if is_dev() and STAGENET_IN_DEV else '18088'
# TODO: v1.5 use ipv6
XMR_RPC_ENDPOINT = f'http://127.0.0.1:{XMR_RPC_PORT}/json_rpc'

def xmr_rpc_api(method_name, **params):
    rpc_defaults = {'jsonrpc': '2.0', 'id': '0'}
    if '_in' in params:
        params['in'] = params.pop('_in')
    return requests.post(XMR_RPC_ENDPOINT, json={**rpc_defaults, 'method': method_name, 'params': params}, auth=XMR_RPC_AUTH)
########

# called in the payment_method == monero order creation method
def finish_order_monero(order):
    """ Updates base order for paying with Monero """
    assert order['payment_method'] == 'monero'
    # Monero orders expire after one hour
    server_num = int(os.environ['SERVER_NUM'])
    try:
        # https://monerodocs.org/interacting/monero-wallet-rpc-reference/#create_address
        # create a new address for account idx server_num
        # PITFALL: it is imperative that the wallet file is not replaced, to avoid create_address returning an already used address
        # if the wallet is ever replaced, before starting the server, either change the account number or create addresses until it matches the address used by the last monero order
        r = xmr_rpc_api('create_address', account_index=server_num, label='lenerva-store-payment').json()
        while r.get('error'):
            if r['error']['code'] == -14:  # account index is out of bound (not created yet)
                account_created = False
                while not account_created:
                    r = xmr_rpc_api('create_account', label='lenerva-store').json()
                    account_created = r['result']['account_index'] == server_num
                r = xmr_rpc_api('create_address', account_index=server_num, label='lenerva-store-payment').json()
        address, address_idx = r['result']['address'], r['result']['address_index']
        total_xmr = usd_to_xmr(order['total_usd'])
        order.update({'xmr_address': address, 'xmr_address_idx': address_idx,
                      'total_xmr': total_xmr, 'total_xmr_atomic': total_xmr * 1e12})
    except Exception as e:
        raise MoneroError(repr(e)) from e

# showing order page to user
xmr_qr_data = f"monero:{order['xmr_address']}?tx_amount={order['total_xmr']}" \
              f"&tx_description=Goods%20and%20Services&recipient_name=LENERVA"

```

Great, so users can now create an order with monero as the payment method. But how do they pay? When the order is created, in contrast to Stripe's Session, you can redirect the user to the order page and show them a QR code of `xmr_qr_data`. You will need to create the qr code yourself. If you use Python, install pyqrcode and pypng.

## My Processing Code

Moving on to processing. This processing function is on a different thread/process. I used multiprocessing in Python to ensure that whenever the backend starts up, this function gets called. Modify to fit your needs. Important things in this function are: double spend protection, > 1 confirmations required, 1 cent tolerance, sums all payments to an address instead of just one. When the order is marked as paid, your order processing task/service can take care of it.

```py
def monitor_xmr_payments(run_file: str):
    """
    Monitor Monero Payments Here
    Started from on_starting: multiprocessing
    One Monero Node per Server (Droplet)
    Unique Account per Server (Droplet)
    `run_file` implies that the main process is still running
    """
    # one hour order expiration
    XMR_ORDER_TIMEOUT = int(os.environ.get('XMR_ORDER_TIMEOUT', '3600'))
    XMR_EXTRA_TIME = int(os.environ.get('XMR_EXTRA_TIME', '3600'))
    ACCOUNT_IDX = int(os.environ['SERVER_NUM'])
    print('XMR Monitoring service started')
    update_check_time = 0
    while os.path.exists(run_file):
        time_start = time.monotonic()
        orders_to_check = Db.orders.find({'payment_method': 'monero', 'payment_confirmed': False,
                                          'expired': False, 'server_num': ACCOUNT_IDX})
        subaddr_indices = []
        expired_orders = []  # ids
        address_idx_orders = {}  # payment_addr_idx: order_doc
        for order in orders_to_check:
            addr_idx = order['xmr_address_idx']
            address_idx_orders[addr_idx] = order
            subaddr_indices.append(addr_idx)
            if order['timestamp'] + XMR_ORDER_TIMEOUT < time.time() and order['xmr_received'] == 0:
                # don't want to expire orders where payments have already started
                expired_orders.append(order['_id'])
            elif order['timestamp'] + XMR_ORDER_TIMEOUT + XMR_EXTRA_TIME < time.time():
                # expire orders that took too long to complete
                expired_orders.append(order['_id'])
        if expired_orders:
            Db.orders.update_one({'_id': {'$in': expired_orders}}, {'$set': {'expired': True}})
        balances = {}  # xmr_address_idx: {total_xmr_received ($set), total_confirmed_xmr ($set)}
        # check for payments (transfers)
        try:
            # https://monerodocs.org/interacting/monero-wallet-rpc-reference/#get_transfers
            if not subaddr_indices:
                raise StopIteration('No addresses to monitor')
            r = xmr_rpc_api('get_transfers', _in=True, out=False, pending=True, pool=True,
                            account_index=ACCOUNT_IDX, subaddr_indices=subaddr_indices).json()
            for transfer in chain(r['result'].get('in', []), r['result'].get('pending', [])):
                addr_idx = transfer['subaddr_index']['minor']
                if addr_idx not in address_idx_orders:
                    continue
                order = address_idx_orders[addr_idx]
                if addr_idx not in balances:
                    balances[addr_idx] = {'xmr_received': 0, 'xmr_confirmed': 0}
                balance = balances[addr_idx]
                # check timestamp just in case, double_spend_seen just in case,
                if (transfer['timestamp'] > order['timestamp'] and not transfer['double_spend_seen']
                        and addr_idx in address_idx_orders):
                    balance['xmr_received'] += transfer['amount']
                    if transfer['confirmations'] >= transfer['suggested_confirmations_threshold'] and transfer['confirmations'] > transfer.get('unlock_time', 0):
                        balance['xmr_confirmed'] += transfer['amount']
                        # check if confirmation resulted in order payment being fulfilled
                        # no need for buffer since fees are taken in addition to amount being sent
                        if balance['xmr_confirmed'] >= order['total_xmr_atomic']:
                            # payment confirmed, therefore, we can update the database
                            Db.orders.find_one_and_update({'_id': order['_id']}, {'$set': {
                                'xmr_received': round(balance['xmr_received'] / 1e12, 12),
                                'xmr_confirmed': round(balance['xmr_confirmed'] / 1e12, 12),
                                'payment_confirmed': True
                            }})
                            # del addr_idx from balances since we don't need to update this order again
                            del address_idx_orders[addr_idx]
                            del balances[addr_idx]
                            # quick exit for fast restarts
                            if not os.path.exists(run_file):
                                return
            for addr_idx in balances:
                # convert from atomic
                xmr_received = round(balances[addr_idx]['xmr_received'] / 1e12, 12)
                xmr_confirmed = round(balances[addr_idx]['xmr_confirmed'] / 1e12, 12)
                order = address_idx_orders[addr_idx]
                if xmr_received > order['xmr_received'] or xmr_confirmed > order['xmr_confirmed']:
                    # update xmr_* values for order
                    enough_xmr_sent = xmr_received >= order['total_xmr_atomic']
                    Db.orders.update_one({'_id': order['_id']}, {'$set': {
                        'xmr_received': xmr_received,
                        'xmr_confirmed': xmr_confirmed,
                        'enough_xmr_sent': enough_xmr_sent,
                    }})
        except StopIteration:
            pass
        except requests.RequestException:
            print('XMR RPC Connection Error - wallet is probably still syncing')
        # check for updates, and start update procedure
        if not is_dev() and update_check_time < time.time():
            # check for an update every 10 minutes
            update_monero_rpc()
            update_check_time = time.time() + 600
        # sleep to conserve resources
        if (time_taken := time.monotonic() - time_start) < INTERVAL:
            time.sleep(INTERVAL - time_taken)
```

## Logistics

### Prerequisites

- Monero view-wallet (derived from full wallet)
- Monero-wallet-rpc running on server with wallet open
- A monero node (daemon) url. You can either use your own
or a public one. I use my own to ensure uptime

### Monero-Wallet-RPC

To install monero on a Linux server, you can use my bash script.
`install_monero()` can also be called if you need to update monero on a
server, like a remote node.

```bash
add_to_path() {
  # if .env_path DNE or the parser has not been added to ~/.bashrc,
  if [ ! -f ~/.env_path ] && ! grep -Fq ".env_path" ~/.bashrc; then
    # shellcheck disable=SC2129
    echo "if [ -f ~/.env_path ]; then" >> ~/.bashrc
    # shellcheck disable=SC2140
    echo "    export PATH=\$PATH:\$(python3 -c "\""import os; from pathlib import Path; print(':'.join((line.strip() for line in open(f'{Path.home()}/.env_path').readlines() if line.strip())))"\"")" >> ~/.bashrc
    echo "fi" >> ~/.bashrc
  fi
  # add directories to path
  for path in "$@"; do
    if [ ! -f ~/.env_path ]  || ! grep -Fq "$path" ~/.env_path; then
      # .env_path DNE or string not in .env_path
      echo "$path" >> ~/.env_path
      echo "Added $path to PATH"
    fi
  done
  source ~/.bashrc
}

# shellcheck disable=SC2120,SC2164
install_monero() {
  # Install Monero (download and extract to ~/bin/monero)
  if [ ! -f ~/bin/monero/monerod ] || [ ! $1 = "--force" ]; then
    mkdir -p ~/Downloads && cd ~/Downloads
    echo "Downloading and extracting Monero binaries"
    curl -L https://downloads.getmonero.org/cli/linux64 | tar xj
    rm -r -f ~/bin/monero && mkdir -p ~/bin
    mv monero-*-linux-* monero
    mv monero ~/bin
    echo "Downloaded Monero binaries to" ~/bin
  else
    echo "INFO: Monero binaries already installed"
  fi
  add_to_path ~/bin/monero
  source ~/.bashrc
}
```

To ensure the RPC-wallet is running, you can add a "start if not already running" function to your backend. I'll share the code I use myself in the future, but these are the arguments for running your RPC. For development, ask the user to enter the wallet password since that wallet would most likely be spendable.

Create a file `configs/monero-rpc.common.conf` to contain the base configuaration of the RPC. Other parameters are based upon whether we are running the website in devevelopment or production.

```conf
non-interactive=1
log-file="monero-wallet-rpc.log"
max-log-file-size=5000000
max-log-files=2
log-level=0
```

```py
monero_rpc_cmd = [str(monero_rpc), '--config-file', 'other_files/monero-rpc.common.conf',
                      '--rpc-login', 'monero:' + os.environ['XMR_RPC_PW'],
                      '--trusted-daemon' if TRUSTED_DAEMON else '--untrusted-daemon',
                      '--rpc-bind-port', XMR_RPC_PORT, '--wallet-file', wallet_file, '--password']
# production only: (requires XMR_WALLET_PW set in .env or system environemnt variable)
monero_rpc_cmd.extend((os.environ['XMR_WALLET_PW'], '--daemon-address', MAINNET_DAEMON))
```

## Limitations

Each account index actually corresponds to the view wallet history on each server. If those wallets ever get replaced, the servers need to be assigned new account numbers. You can avoid this pitfall by adding a database check to see if the address was in use, but I didn't do that for performance reasons. It's better to have a table in your database for
determining which account index was last assigned t a server, and then use a script that increase this number whenever a view-wallet needs to be transferred onto a server. This way, you avoid having to remember the pitfall.

`monero-wallet-rpc` would need to be manually updated, but since the scanning largely depends on the daemon, which I have an update script for, this issue is not as severe.

When I get back to prioritizing the ecommerce store, I will a) add more items to sell b) automation.

## Micro-Service Approach

Obviously, my method is complicated, but it does save me $5/month. If I was a manager at Google, I'd do it the following way.

Create a payment processor API that can horizontally scale. Instead of assigning an account number to each app server, only assign it to API servers. There should be at least one API server per data centre region in use (DigitalOcean reference).

This API would encapsulate the following

- create_invoice(amount, expiry=3600, currency='XMR', qrCode=false)
  - returns an address, the payment URI, and optionally the png data for the QR code, possibly even an invoice id (positive number).
- check_invoice(address=None, invoice_id=None)
  - returns amount_in_mempool, amount_received (1 to X confirmations), amount_confirmed (X confirmations), and paid which is a boolean.
- when a user registers for the API, they can either provide a view-wallet, or a wallet is created for them
- if no view-wallet is provided, there should be functionality to transfer upon payments, through a UI, or through a more restrictive API

A non-custodian processing service does not exist as far as I know, so I might create one and charge a monthly $5 fee.

### Pros

- allows using the same architecture across a multitude of apps
- good for enterprise
- decouples processing from application code
- long-term perfection

### Cons

- requires additional servers and calls to said server
- bad for short-term


## Donation

Feel free to donate some Monero.
[84PR6SkYd5zaFLKDjAFrQfbaAg2c7SV3q3XDZ15QCpEZUggrN4YzY7n8m9XC3deXjo41yWHTm1LrsUpPTYGnRQbD9Cwp8En](monero:84PR6SkYd5zaFLKDjAFrQfbaAg2c7SV3q3XDZ15QCpEZUggrN4YzY7n8m9XC3deXjo41yWHTm1LrsUpPTYGnRQbD9Cwp8En)

![monero:84PR6SkYd5zaFLKDjAFrQfbaAg2c7SV3q3XDZ15QCpEZUggrN4YzY7n8m9XC3deXjo41yWHTm1LrsUpPTYGnRQbD9Cwp8En](https://elijahlopez.ca/static/images/monero.png)
