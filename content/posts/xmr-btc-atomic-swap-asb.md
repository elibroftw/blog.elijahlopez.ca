---
title: "XMR-BTC Atomic Swap ASB Guide"
date: 2022-05-10T17:07:56-04:00
draft: false
tags: [
    "monero",
    "bitcoin",
    "cryptocurrency",
]
---

A tutorial made for myself, not really others because
the [docs](https://github.com/comit-network/xmr-btc-swap/blob/master/docs/asb/README.md)
aren't straight forward!

1. Download [ASB and Swap zips](https://github.com/comit-network/xmr-btc-swap/releases/latest)
2. Extract to `C:\Users\%USERNAME%\Documents\Monero` or `~/Documents/Monero`
3. Run the monero-rpc-wallet (pre-req: add monero install location to PATH)
    - [Find stagenet node](https://monero.fail/?nettype=stagenet)
    - Use port 28088 if mainnet/production
    - Security risk: rpc-login is disabled
    - wallet-dir: directory of an existing wallet (match to stagenet or mainnet)
    ```
    C:\Users\maste\Documents\Monero>monero-wallet-rpc --stagenet --daemon-host http://stagenet.melo.tools:38081 --rpc-bind-port 38083 --disable-rpc-login --wallet-dir wallets/stagenet_one
    ```
4. Make sure this guide is readable with your terminal open
5. Run `asb --testnet start` in a new terminal window and press enter for everything. Do not use Ctrl or Alt.
6. A wallet will be created in 10 seconds
7. Do not send XMR to this wallet because the asb breaks on the next launch
