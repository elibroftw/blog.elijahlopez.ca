---
title: "How to Buy Monero (XMR) in Canada"
date: 2022-02-25T22:56:02-05:00
tags:
  - monero
  - cryptocurrency
  - canada
---

- When buying $4,000 or more, prefer to pay for a direct wire transfer to Kraken
- When buying $3,000 or less, prefer to use Kraken's eTransfer
- When buying more than $3,000, prefer to buy USDC on Coinbase (0.5%), and then sending it to Kraken where you can use their convert feature

## Exchanges and Fees (USDC)

- Coinbase: 0.5% for USDC spread
- Newton: 1%
- Wealthsimple: 2% for Core, 1% for Premium, 0.5% for Generation

## Kraken

### CAD &rarr; USD &rarr; XMR

Total fee percentage: 1.3574%

This method is possibly the cheapest if you are a liquidity taker, however there is deposit limit of $3,000 per day compared to Coinbase which allows for $10,000 at once.

A deposit fee of 0.1% for etransfers (3k limit), a USD conversion fee of 0.2%, and a 0.16% post limit order fee to buy XMR, and a flat network fee to withdraw (not counted). In total, that's 0.46% as a maker and a 0.56% fee as a taker. You can use Etana to forgo the deposit fee, but I'm unsure if Etana has its
own fees and it does require KYC. A wire transfer requires being in-persona which might have its own fees; it does for my business account!

My own results for the etransfer deposit method are:

- CAD/USD = 1.25625
- XMR/USD = 285.48
- an etransfer of 3,000 CAD becomes 2,970 CAD converted to 2,359.45 USD bought 8.2648521800 XMR withdrew and received 8.25152 XMR
- Fee = 3,000 - 8.2648521800 \* 285.48 \* 1.25625 = 35.94... = 1.198%

Make sure to set the limit order one cent less than market with **post** selected unless you are treating it as a security.

The etransfer deposit fee took the largest chunk! I'll have to test the other methods to compare.

### XLM &rarr; USD &rarr; XMR

Total fee percentage: 1.32% - 2.03%, 1% just from Newton

Bought for C$0.119274 (1% margin), sold for US$0.089 (lucky), monero for $137.95.

Buying XLM on Newton costed me a margin of 1%. I'm thoroughly disappointed with Newton. I'll try USDT methods.

Transferring XLM to Kraken was free. Selling to USD has a 0.16% fee for a post limit order, and a post limit order on XMR is another 0.16%.
So this method would result in fees of 1.32% for makers to 2.03% for takers.

### USDC &rarr; XMR

Next time I buy Monero, I'll try this method.

### USD &rarr; XMR

You'll need a USD bank account for this and you'll need Etana which is another KYC hurdle. Theoretically this method results in
a 0.16% fee as a maker and a 0.26% fee as a taker. I say theoretically though since I don't know if there's any fee from Etana's side and
it's not practical as like I said before, you need to have USD beforehand without a conversion fee.

## Fixed Float (XLM:XMR)

Assuming you can purchase XLM via [Newton](https://web.newton.co/r/YREHXA), use [Fixed Float](https://fixedfloat.com/XLM/XMR?ref=dybjhjrb) for 0.5% - 1% fee per trade.

## TradeOgre (USDT:XMR)

Not worth trying to do because USDT cannot be purchased on NewToon

TODO because I'll have to do the trades to see how much the "fee" is. The steps are to buy USDT from
Newton and then deposit that USDT in TradeOgre and create an XMR limit-buy order on TradeOgre. Afterwards,
simply withdraw from TradeOgre. TradeOgre has a horrible UI, especially for mobile so in the future I want
to create a better crypto:crypto exchange (all currency pairs).

## ~~Local Monero~~

[Local Monero](https://localmonero.co/?rc=nde2) is less private than FixedFloat and more than exchanges but costs way more (20%+ via CAD, 4.4%+ via XLM),
requires greater level of trust, and takes a longer time than exchanges ignoring the initial KYC time.

- [Local Monero TOR](http://nehdddktmhvqklsnkjqcbpmb63htee2iznpcbs5tgzctipxykpj6yrid.onion/?rc=nde2)
- [Local Monero I2P](http://lm.i2p/?rc=nde2)

### Newton Spread Table

Currency | Spread
------------ | ----------
USDC | 1.058%
SOL | 1.432%
XLM | 1.473%
ADA | 0.962% - 1.92%
BTC | 1.161%

Spread: Buy price divided by Live price minus 1

Moral: use ADA if you can buy at one cent less than buy price.
