---
title: "How to Buy Monero in Canada"
date: 2022-02-25T22:56:02-05:00
tags: [
    "monero",
    "cryptocurrency",
    "canada",
]
---

I'll be testing all of these methods except LocalMonero since the actual fee there is at least 20% as of 2022/4/21.
Testing is done by using converting the received XMR to CAD using the currency pair rates at the start of each new pair transaction.

## Fixed Float (XLM:XMR)

Assuming you can purchase XLM via [Newton](https://web.newton.co/r/YREHXA), use [Fixed Float](https://fixedfloat.com/XLM/XMR?ref=dybjhjrb) for 0.5% - 1% fee per trade.

## TODO: TradeOgre (USDT:XMR)

TODO because I'll have to do the trades to see how much the "fee" is. The steps are to buy USDT from
Newton and then deposit that USDT in TradeOgre and create an XMR limit-buy order on TradeOgre. Afterwards,
simply withdraw from TradeOgre. TradeOgre has a horrible UI, especially for mobile so in the future I want
to create a better crypto:crypto exchange (all currency pairs).

## Kraken

### CAD &rarr; USD &rarr; XMR

A deposit fee of 0.1% for etransfer (3k limit), a USD conversion fee of 0.2%, and a 0.16% post limit order fee to buy XMR, and a flat network fee to withdraw.
In total, that's 0.46% as a maker and a 0.56% fee as a taker. You can use Etana to forgo the deposit fee, but I'm unsure if Etana has its
own fees and it does require KYC. A wire transfer requires being in-persona which might have its own fees; it does for my business account!

My own results for the etransfer deposit method are:

- CAD/USD = 1.25625
- XMR/USD = 285.48
- a etransfer of 3,000 CAD becomes 2,970 CAD converted to 2,359.45 USD bought 8.2648521800 XMR withdrew and received 8.25152 XMR
- Fee = 3,000 - 8.25152 \* 285.48 \* 1.25625 = 40.72... = 1.3574%

Make sure to set the limit order one cent less than market with **post** selected unless you are treating it as a security.

The etransfer deposit fee took the largest chunk! I'll have to test the other methods to compare.

### TODO: USDT &rarr; XMR

Next time I buy Monero, I'll try this method.

### XLM &rarr; USD &rarr; XMR

Bought for C$0.119274 (1% margin), sold for US$0.089 (lucky), monero for $137.95.

Buying XLM on Newton costed me a margin of 1%. I'm thoroughly disappointed with Newton. I'll try USDT methods.

Transferring XLM to Kraken was free. Selling to USD has a 0.16% fee for a post limit order, and a post limit order on XMR is another 0.16%.
So this method would result in fees of 1.32% for makers to 2.03% for takers.

### USD &rarr; XMR

You'll need a USD bank account for this and you'll need Etana which is another KYC hurdle. Theoretically this method results in
a 0.16% fee as a maker and a 0.26% fee as a taker. I say theoretically though since I don't know if there's any fee from Etana's side and
it's not practical as like I said before, you need to have USD beforehand without a conversion fee.

## Local Monero

[Local Monero](https://localmonero.co/?rc=nde2) is less private than FixedFloat and more than exchanges but costs way more (20%+ via CAD, 4.4%+ via XLM),
requires greater level of trust, and takes a longer time than exchanges ignoring the initial KYC time.

- [Local Monero TOR](http://nehdddktmhvqklsnkjqcbpmb63htee2iznpcbs5tgzctipxykpj6yrid.onion/?rc=nde2)
- [Local Monero I2P](http://lm.i2p/?rc=nde2)

## Conclusion

In conclusion, it's better to buy XLM on Newton, sell it for USD on Kraken, and then buy XMR with the USD.
