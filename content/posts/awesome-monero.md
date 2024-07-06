---
title: "Awesome Monero"
date: 2024-07-04T08:48:18-04:00
draft: false
tags:
  - monero
  - cryptocurrency
---

{{< toc >}}

## Wallets

1. [Monero GUI](https://github.com/monero-project/monero-gui)
    - Desktop
    - Annoyingly doesn't open monero URIs in existing
2. [Stack Wallet](https://stackwallet.com/)
    - Best mobile wallet
    - Annoyingly doesn't support monero URIs
3. [Cake Wallet](https://cakewallet.com/)
    - Mobile and Desktop
    - Although the app is very polished, it was prone to crash for me
    - Annoyingly doesn't support monero URIs
4. [Monerujo](https://www.monerujo.io/)
    - Android
    - Last time I checked, I didn't like how it looked
5. [Trust Wallet](https://trustwallet.com/monero-wallet)
    - Mobile and Cross Platform Desktop
    - Proprietary
    - Multi coin wallet
6. [Exodus](https://www.exodus.com/monero-wallet-xmr)
    - Mobile and Cross Platform Desktop
    - Proprietary
    - Multi coin wallet
    - You need the seed for the app, not only the monero seed to restore the wallet on Exodus. That's 2 seeds you need to save to your KeePassXC database or write on paper and store somewhere safe
7. [MyMonero](https://mymonero.com/)
    - Mobile and Cross Platform Desktop
    - Uses a different way to sync wallet, I can't recommend it
    - Can corrupt the wallet save file, just not good for beginners

## Monero Payment Gateways

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

- [Custom Python Implementation](https://blog.elijahlopez.ca/posts/monero-payment-processing/)
  - Concise code to adapt to any language
  - Untested support for mempool (if it doesn't work, it's the fault of  monero-wallet-rpc)
  - No timelock bug (my code always considered the possibility of rogue actors)
  - Live on [lenerva.com/store](https://lenerva.com/store/). The reason I put it in proof-of-concept is because I bundle the processing code with my backend, thereby making this a stingy solution. There's also no monero-wallet-rpc update mechanism and it's not dockerized. monero-pay was implemented thinking of the bigger picture, whereas I was thinking of tailoring.
- [HotShop by CryptoGrampy](https://github.com/CryptoGrampy/HotShop)
  - Small business types of shops that don't have an integrated inventory-POS software
  - Unsure if timelock issue is taken care of
  - Unsure if mempool is seen
- [AcceptXMR](https://github.com/busyboredom/acceptxmr/)
  - Unmaintained?
  - Unsure if timelock issue is taken care of
  - Unsure if mempool is seen

### CMS Integration

that uses CMS or ecommerce plugins: WordPress, Shopify, WooCommerce, Clover.

- Shopify: TODO, however it's just BtcPay
- WordPress without WooCommerce: TODO, however it's also BtcPay
- WordPress with WooCommerce: TODO, however it's also BtcPay

### Point of Sale Integrations

This section will be on how to integrate Monero processing in stores that already use a POS system such as Square and Clover. This section is empty because apparently only I care to think of closing this gap in terms of usability. The work for Clover would involve Android development.
