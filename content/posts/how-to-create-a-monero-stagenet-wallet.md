---
title: "How to Create a Monero Stagenet Wallet"
date: 2022-02-21T17:04:11-05:00
draft: false
tags:
  - tutorial
  - monero
  - cryptocurrency
---

{{< youtube MlYorZQTmV4 >}}

I'm making this tutorial because there's currently a bug in the GUI that won't let
you make a stagenet wallet if you have already used a mainnet wallet.

## Add to PATH Environment Variable

This is optional but will help you in accessing the CLI in a terminal with any working directory

## Creating the Wallet Directory

### Windows

`cd %HOMEPATH%/Documents/Monero/wallets && mkdir stagenet_one && cd stagenet_one`

#### Unix

`cd ~/Documents/Monero/wallets && mkdir stagenet_one && cd stagenet_one`

## Creating the Wallet

```bash
monero-wallet-cli --stagenet --daemon-address=http://stagenet.xmr-tw.org:38081 --untrusted-daemon
Enter wallet name: stagenet_one
For the next input: y
```

## Open Wallet from GUI

Now you can open the stagenet wallet from your GUI
