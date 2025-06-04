---
title: "Awesome Monero"
date: 2024-07-04T08:48:18-04:00
draft: false
tags:
  - monero
  - cryptocurrency
summary: "A curated list of Monero resources, including recommended wallets, payment gateways, exchanges, funding opportunities, and libraries with insights on open-source options and integrations."
---

{{< toc >}}

If you want to know why I believe in Monero, feel free to read [Why monero is the best crypto CURRENCY](/posts/why-monero-is-the-best-crypto-currency).

## Staying Up to Date

- [Official Monero blog](https://www.getmonero.org/blog/)
- [The Monero Moon](https://www.themoneromoon.com/)
- [Monero Observer](https://monero.observer/)
  - Dedicates a post for everything important in Monero
  - Blitz Reports are released at the end of every month
  - [Non-Curated Resources directory](https://monero.observer/resources/)
- [Revuo](https://www.revuo-xmr.com/)
  - Supports weekly publications

## Wallets

1. [Feather Wallet](https://docs.featherwallet.org/)
    - Desktop
    - Small UI but at least the wallet works
2. [Monerujo](https://www.monerujo.io/)
    - Android
    - Best mobile wallet
3. [Monero GUI](https://github.com/monero-project/monero-gui)
    - Desktop
    - Annoyingly doesn't open monero URIs in existing
4. [Stack Wallet](https://stackwallet.com/)
    - Annoyingly doesn't support monero URIs
5. [Cake Wallet](https://cakewallet.com/)
    - Mobile and Desktop
    - Although the app is very polished, it was prone to crash for me
    - Annoyingly doesn't support monero URIs

[monero.fail](https://monero.fail/): a list of remote nodes (be sure to vet the node)

<details><summary>Other wallets that I do not recommend</summary>

- [Trust Wallet](https://trustwallet.com/monero-wallet)
  - Mobile and Cross Platform Desktop
  - **Proprietary**
  - Multi coin wallet
- [MyMonero](https://mymonero.com/)
  - Mobile and Cross Platform Desktop
  - Desktop app hasn't been updated since November 2022
  - Android app hasn't been updated since September 2023
  - Uses a different way to sync wallet, I can't recommend it
  - Can corrupt the wallet save file, just not good for beginners

</details>

### Blockchain Explorer

- [Monero blocks](https://localmonero.co/blocks/)

## Exchanges and Swap Services

- Swaps
  - [Trocador.app](https://trocador.app/)
  - [OrangeFren](https://orangefren.com/)
- Centralized
  - Kraken
    - [How to buy Monero in Canada](/posts/how-to-buy-monero-in-canada)
- Decentralized
  - [RetoSwap - Haveno](https://retoswap.com/)
  - [Serai](https://serai.exchange/) (not yet launched)
  - Bisq
  - Atomic swaps
    - [Unstoppable Swaps](https://unstoppableswap.net/)
- [ATMs](https://coinatmradar.com/)

## Mining Monero

- [Gupax: P2Pool and XMRig manager](https://github.com/hinto-janai/gupax?tab=readme-ov-file#what-is-monerop2poolxmriggupax)

## Commerce

- [xmr.directory/](https://xmr.directory/)
- [xmrbazaar.com/](https://xmrbazaar.com/)
- [Cryptwerk](https://cryptwerk.com/coinmap/xmr/)
- [Monerica](https://monerica.com/)

## Monero Events

- [Monerotopia](https://monerotopia.com/)
- [Monero Kon](https://www.monerokon.org/)

## Accepting Monero

### Monero Payment Gateways

For this section, I will list both the ideal way and the easier ways to accept Monero. I will rank the items based on open-source (and thus self-hosted) and the ability to accept only monero. The ease of deployment will be used as a tie-breaker.

Security notes: (a) a good monero gateway must handle timelocks. (b) As a bonus, instructions should prevent unauthorized access to the password file that will be passed to `monero-wallet-rpc`. I'm not sure if it's overkill, but if someone stole your ssh private key, you would want them to need your server's user password too in order to read the file, whereas you don't want to force the `monero-wallet-rpc` program to require a password. (c) it would be good to provide some form of auto-update mechanism whenever Monero updates to reduce downtime.

1. [MoneroPay](https://github.com/moneropay/moneropay)
      - Pro: never had a time-lock bug
      - Pro: similar to Stripe's API (REST + webhook architecture)
      - Con: Does not forward mempool detections (I will try to contribute this myself)
      - Con: deployment instructions are not service based (manual only)
2. [BtcPay](https://sethforprivacy.com/guides/accepting-monero-via-btcpay-server/)
    - The biggest pain point of BtcPay is that all these tutorials force you to accept Bitcoin, which is definitely not what I'm about. Bitcoin has significant privacy issues making it very unattractive to me from the beginning of my Crypto experience. I definitely dislike that the tutorials, including this one by Seth, force you to accept Bitcoin. It's ridiculous. The other thing, is that you are forced to use the "BTCPAY" branding.
3. [bitpay](https://bitpay.com/business/)
    - Proprietary processing
    - Percentage fees
4. [NOWPayments](https://nowpayments.io/)
    - Proprietary processing
    - Percentage fees
    - The only reason I put it below bitpay is because it confuses first time crypto-currency users. If you want to send 4 XMR, the receiver gets 4 XMR, however the sender pays a network fee. Therefore, you spend more than 4 XMR, and the receiver receives exactly 4 XMR. Only in the case where there are not enough funds is it possible for the receiver to receive less than 4 XMR. NOWPayments fear mongers saying that you have to send enough to cover the fees. This confuses users because now users may believe they need to send more than 4 XMR and that the fee is taken from the amount being sent.

Proof of Concepts

- [Custom Python Implementation](/posts/monero-payment-processing/)
  - Concise code to adapt to any language
  - Untested support for mempool (if it doesn't work, it's the fault of  monero-wallet-rpc)
  - No timelock bug (my code always considered the possibility of rogue actors)
  - Live on [lenerva.com/store](https://lenerva.com/store/). The reason I put it in proof-of-concept is because I bundle the processing code with my backend, thereby making this a stingy solution. There's also no monero-wallet-rpc update mechanism and it's not dockerized. monero-pay was implemented thinking of the bigger picture, whereas I was thinking of tailoring.
- [HotShop by CryptoGrampy](https://github.com/CryptoGrampy/HotShop)
  - Small business types of shops that don't have an integrated inventory-POS software
  - Unsure if timelock issue is taken care of
  - Unsure if mempool is seen
- [AcceptXMR](https://github.com/busyboredom/acceptxmr/)
  - Unsure if mempool is seen

### CMS Integration

that uses CMS or ecommerce plugins: WordPress, Shopify, WooCommerce, Clover.

- Shopify: TODO, however it's just BtcPay
- WordPress without WooCommerce: TODO, however it's also BtcPay
- WordPress with WooCommerce: TODO, however it's also BtcPay

### Point of Sale Integrations

This section will be on how to integrate Monero processing in stores that already use a POS system such as Square and Clover. This section is empty because apparently only I care to think of closing this gap in terms of usability. The work for Clover would involve Android development.

### Accepting Monero as a Creator

[XMRChat](https://xmrchat.com/)

## Funding Monero Projects

- [Monero Community Crowdfunding System (CCS)](https://ccs.getmonero.org/)
- [Monero Bounties](https://bounties.monero.social/)
- [Magic Grants](https://donate.magicgrants.org/monero)

## Monero Libraries

- [Original C++ Monero](https://github.com/monero-project/monero)
- [serai monero transaction library](https://github.com/serai-dex/serai/tree/develop/networks/monero)
- [serai monero wallet](https://github.com/serai-dex/serai/tree/develop/networks/monero/wallet)
- [monero cuprate](https://github.com/Cuprate/cuprate)

## Deploying Monero Node on VPS

I recommend finding a server with 300GB+ SSD storage using [serverhunter](https://www.serverhunter.com/#query=storage_capacity:%3E=525+stock:(in_stock+OR+unknown)). Alternative, you can use OVHCloud or Vultr.

- Ansible Playbooks
  - I will make my own since these are unmaintained and require a lot of maintenance.
  - Ideally you just need [docker-monero-node](https://github.com/lalanza808/docker-monero-node?tab=readme-ov-file#docker-monero-node) and every time you get notified that Monero has updated, you can just run the same ansible playbook with a password and without changing anything. A password will be required to inject ENV variables.
  - [lalvarezguillen/monerod-node-vps](https://github.com/lalvarezguillen/monerod-node-vps)
  - [Al13n0/monero-nodes-ansible](https://github.com/Al13n0/monero-nodes-ansible)

## What's Missing

- Vouchers like [Azteco bitcoin vouchers](https://azte.co/learn/articles/what-are-azteco-bitcoin-vouchers#What-are-Azteco-bitcoin-vouchers)
