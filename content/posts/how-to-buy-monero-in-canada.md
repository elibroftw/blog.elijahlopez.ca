---
title: "How to Buy Monero in Canada"
date: 2022-02-25T22:56:02-05:00
draft: false
---

I'll be testing all of these methods except LocalMonero since the actual fee there is at least 20% as of 2022/4/21.
Testing is done by using converting the received XMR to CAD using the currency pair rates at the start of each new pair transaction.

## Fixed Float

Assuming you can purchase XLM via [Newton](https://web.newton.co/r/YREHXA), use [Fixed Float](https://fixedfloat.com/XLM/XMR?ref=dybjhjrb) for 0.5% - 1% fee per trade.

## Kraken

### CAD -> USD -> XMR

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

### XLM -> USD -> XMR

Depositing XLM only incurs network fees. Selling to USD has a 0.16% fee for a post limit order, and a post limit order on XMR is another 0.16%.
That's 0.34% as a 2x maker and 0.52% as a 2x taker.

### USD -> XMR

You'll need a USD bank account for this and you'll need Etana which is another KYC hurdle. Theoretically this method results in
a 0.16% fee as a maker and a 0.26% fee as a taker. I say theoretically though since I don't know if there's any fee from Etana's side and
it's not practical as like I said before, you need to have USD beforehand without a conversion fee.

## Local Monero

[Local Monero](https://localmonero.co/?rc=nde2) is less private than FixedFloat and more than exchanges but costs way more (20%+ via CAD, 4.4%+ via XLM),
requires greater level of trust, and takes a longer time than exchanges ignoring the inital KYC time.

- [Local Monero TOR](http://nehdddktmhvqklsnkjqcbpmb63htee2iznpcbs5tgzctipxykpj6yrid.onion/?rc=nde2)
- [Local Monero I2P](http://lm.i2p/?rc=nde2)

## Conclusion

In conclusion, it's better to buy XLM on Newton, sell it for USD on Kraken, and then buy XMR with the USD.
