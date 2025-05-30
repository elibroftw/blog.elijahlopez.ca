---
title: "How to Buy Monero (XMR) in Canada"
date: 2022-02-25T22:56:02-05:00
tags:
  - monero
  - cryptocurrency
  - canada
summary: The easiest way to buy Monero in Canada is to first buy USDC on Coinbase and then use Trocador.app to swap USDC Arbitrum One for Monero. For those who are savvy, there are a variety of  methods depending on how sensitive you are to fees
---

## Optimal Methods

All amounts are in CAD. Maker / Taker convention. When sending USDC, choose **Arbitrum network**.

Amount | Wire Transfer Fee | Method | Fee Estimate
---------- | ------------------------- | ----------- | ------
$0 - $3,000 | N/A  | Kraken e-Transfer | 1.3574%
$3,001 - $7,999 | $40 | Coinbase USDC (0.5%) and send to Kraken | 0.82% / 1.53%
$3,001 - $8,999  | $45 | Coinbase USDC (0.5%) and send to Kraken | 0.82% / 1.53%
$6,000+ | $30 | Kraken wire transfer | ~0.52% / ~1.23%
$8,000+ | $40 | Kraken wire transfer | ~0.52% / ~1.23%
$9,000+ | $45 | Kraken wire transfer | ~0.52% / ~1.23%
$10,000 | N/A | Coinbase USDC (0.5%)  + [Trocador](#trocador-usdc--xmr) (FixedFloat) | 0.7075%
$13,818 | N/A | Coinbase USDC (0.5%)  + Trocador (FixedFloat) | 0.9704%
$10,000+ | $50 | Kraken wire transfer | ~0.52% / ~1.23%
$16,000+ | $80 | Kraken wire transfer | ~0.52% / ~1.23%

Referral Links

- [Coinbase](https://coinbase.com/join/BMNW52M) ($10 in BTC after first trade)
- [Kraken](https://invite.kraken.com/JDNW/kpdi6rez) ($100 when you trade $200) [Code: 3zh45fpb]

## Canadian Bank Outgoing Wire Transfer Fees

Bank | Wire Transfer Fee | Source
------- | ------------------------ | ----------
RBC | $45 | [Additional Account Services - Outgoing Wire Payments](https://www.rbcroyalbank.com/banking-services/additional-account-services.html#outgoing-wire-payments)
BMO | $40 | [Fees for Everyday Banking - Page 11](https://www.bmo.com/pdf/Agreements_Bank_Plans_and_Fees_for_Everyday_Banking.pdf)
TD | $30 | [Personal Fee Schedule](https://www.td.com/content/dam/tdb/document/pdf/personal-banking/1-fees-en.pdf)
CIBC  | $30 (<10k), $50 (<50k), $80 (> 50k) | [Wire transfer fees](https://www.cibc.com/en/personal-banking/ways-to-bank/sending-receiving-wire-transfers.html)
Scotiabank | $1.99 | Can't find one
WealthSimple | Not Supported | Google it

{{< toc >}}

## Exchanges and Fees (USDC)

- Coinbase: 0.5% for USDC spread
- Newton: 1%
- Wealthsimple: 2% for Core, 1% for Premium, 0.5% for Generation

If you know an exchange other than Kraken that has less than a 0.5% spread, let me know

## Kraken

### Kraken USDC &rarr; XMR

Buy USDC on Coinbase and send it to Kraken via the Arbitrum network. Knowing that it's 0.5% cheaper than the Newton XLM method, we get 0.82% for makers and 1.53% for takers. If you don't have patience to place a limit order at the market price, I recommend using FixedFloat which takes a 0.65% fees for swaps.

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

Buying XLM on Newton costed me a margin of 1%. I'm thoroughly disappointed with Newton.

Transferring XLM to Kraken was free. Selling to USD has a 0.16% fee for a post limit order, and a post limit order on XMR is another 0.16%.
So this method would result in fees of 1.32% for makers to 2.03% for takers.

### USD &rarr; XMR

You'll need a USD bank account for this and you'll need Etana which is another KYC hurdle. Theoretically this method results in
a 0.16% fee as a maker and a 0.26% fee as a taker. I say theoretically though since I don't know if there's any fee from Etana's side and
it's not practical as like I said before, you need to have USD beforehand without a conversion fee.

## Swap Services

Use [Trocador](https://trocador.app/en/exchange/EdSLsoJ7Z6) which will show you the exchange with the lowest fees, sometimes less than 0.5% for the swap!

- Send: _USD Coin (Arbitrum One)_ (not the e one)
- Trade for: _Monero_

![Trocador Screenshot](/posts/how-to-buy-monero-in-canada/trocador-screenshot.webp)

### Trocador USDC &rarr; XMR

Assuming 0.5% to buy USDC on Coinbase, here are the fees are two USDC amounts. The lower the amount to trade, the cheaper the fees.

USDC | Swap Fee | Total Fees
---------- | ------------- | --------
10,000 | 0.4704% | 0.9704%
7,200 | 0.2075% | 0.7075%

## TradeOgre (USDT:XMR)

Not worth trying to do because USDT (Tether USD) cannot be purchased on Newton (or in Canada apparently?)

## ~~Local Monero~~

Got shut down and the fees were significant.

## Newton Spread Table

Currency | Spread
------------ | ----------
USDC | 1.058%
SOL | 1.432%
XLM | 1.473%
ADA | 0.962% - 1.92%
BTC | 1.161%

Spread: Buy price divided by Live price minus 1

Conclusion: if you can't use Coinbase to buy USDC, use ADA if you can buy at one cent less than buy price.
