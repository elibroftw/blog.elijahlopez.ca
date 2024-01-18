---
title: "BU 423 Options, Futures & Swaps"
date: 2024-01-09T14:26:54-05:00
draft: true
tags: [
  'university'
]
---

Derivative: financial instruments that depend on an underlying asset. Everything in finance could be considered a derivative.
In finance, there is no wealth generation, only wealth redistribution.

- [Lecture slides](https://rotman.utoronto.ca/~hull)
- Textbook: [Fundamentals of Futures and Options 9th edition by John C. Hull](http://libgen.li/index.php?req=Fundamentals+of+Futures+and+Options&columns%5B%5D=t&columns%5B%5D=a&columns%5B%5D=s&columns%5B%5D=y&columns%5B%5D=p&columns%5B%5D=i&objects%5B%5D=f&objects%5B%5D=e&objects%5B%5D=s&objects%5B%5D=a&objects%5B%5D=p&objects%5B%5D=w&topics%5B%5D=l&topics%5B%5D=c&topics%5B%5D=f&topics%5B%5D=a&topics%5B%5D=m&topics%5B%5D=r&topics%5B%5D=s&res=25&filesuns=all&curtab=f&order=year&ordermode=desc)

- Four Quizzes 40%
- Midterm Exam 25%
- Final Exam 35%

## Naturel of Derivatives

- Return = Risk Free + Risk Premium
- Risk can be transferred for a price. One sufficient manner is through the use of derivatives

Building Blocks / Examples

- Futures Contracts
- Forward Contracts
- Swaps
- Options

### Why are Derivates Used

- Hedging
- Speculation
- Locking in arbitrage
- Changing nature of a liability
  - Fixed rate loan and you want to change that into a variable one
  - You can either pay back the loan and take a variable rate (transaction costs)
  - Or you can use a derivate
- Change the nature of an investment without incurring the costs of selling one portfolio and buying another
  - Something about using a forwards contract

### Futures Contracts Introduction

F = S (1 + r) ^ T

- Agreement to buy or sell underlying asset at some point in the future for a certain price
- Spot contract is buying or selling immediately
- An example. Spot price of $100, risk-free of 5%, Expected price in a year is $110. F0 is 105 if there is no risk?
- Selling = short position. Buying = long position
- Exchanges Trading Futures
  - CME Group
  - Intercontinental Exchange

### Over-the Contract markets

- More important alternative than exchanges because anything goes
- In the exchange-traded market, there are standardized contracts

### Lehman Bankruptcy

- Active participant in OTC derivative market
- Took high risk and couldn't roll into short-term funding
- Sold protection for debt instruments for mortgage backed securities
  - Sold Credit Default Swaps which is a protection instrument for mortgage backed securities
- Long Term Capital (hedge fund). Proprietary trading models, promising investors 20%+ but as it got larger it was harder to attain the returns
  - Then they levered their fund
  - Systematic Risk
  - Placed bet on USSR and USA interest model
    - When USSR collapsed, they went bankrupt
    - [1998 Russian financial crisis](https://www.investopedia.com/terms/l/longtermcapital.asp)

### New Regulations for OTC

- Standard OTC products must be traded on swap execution facilities
- Central clearing party must be used
- Trades must be reported to a central registry

### OTC Systemic Risk

- Default by one large financial institution can lead to losses in other financial institution

### Forward Contracts Introduction

- Trade in OTC market
- Popular on currencies and interest rates
- Forward Price = delivery price if negotiated today

### Options

- Call = option to buy at strike price by a certain date
- Put = option to sell at strike price by a certain date
- American style = exercised any time during its life
- European style = exercised only at maturity

Profit = (Stock Price - Strike Price - Purchase Price)

Examples:

- 100 put options short
  - Losses limited to strike price + price paid for the option
- 100 call options long at strike price of $550 for $29 per option
  - Profit increases as stock price increases

Options vs. Futures/Forwards

Holder has an obligation vs. option

### Hedge Funds

- Not same regulations as mutual funds
- Mutual funds
  - Disclose investment policies
  - Redeemable at any time
  - Limited use of leverage
- Hedge fund fee: 2 plus 20%

### Arbitrage Examples

- stock price is quoted in 100 pounds in London and $152 in New York
- exchange rate is 1.55 for pounds to USD
- therefore, short the stock in london, buy in new york

---

- risk-free rate is 5%
- spot price of gold is US$100 per ounce
- 1-year futures is 105
- expected spot price in 1 year is $110 (does not matter)
- F = S (1 + r) ^ T

---

- spot price of oil s US$40
- 1-year futures price of oil is US$35 (or $50)
- risk-free is 2% per annum
- storage cost is 1% per annum

---

## Futures Contracts (Chapter 2)

- Formula =  F = S (1 + r) ^ T
- Exchange traded
- Wide range of underlyings
- Specs need to be defined
  - What can be delivered
  - Where to deliver
  - When to deliver
- Settled daily (mark to market)
- Closing out futures is easy, it's just an opposite trade
- Most contracts are closed out before maturity

### Convergence

As time goes on, the future's price converges to the spot price

### Margin

- Margin is cash or marketable securities deposited by an investor with his or her broker
- The balance in the margin account is adjusted to reflect daily settlement
- Margin minimizes the possibility of a loss through a default on a contract
- Retail traders provide **initial margin** and, when the balance in the margin account falls below a **maintenance margin level**, they must provide variation margin bringing balance back up to initial margin level.

---

- Short futures contract
- Want to sell the asset later before maturity
- Revenue = Spot Price + Price at T = 0 MINUS Price at T = 1
- Example sold asset at spot price of 110 + shorted future at price of 105 - bought back future at price of 112 = 103

### OTC Markets: Bilateral Clearing

- Transaction between two parties typically governed by ISDA Master Agreement
- Credit Support Annex (CSA) defines the collateral that has to be posted
- After Financial Crisis of 2007-2007, centralized counterparties (CPP) have to be used to avoid financial institutions from chain reacting defaults
- Companies can clear its transaction through a member

### Terminology

- open interest: outstanding contracts
- settlement price: price before final bell
- volume of trading: number of trades for a day

### Forward Contracts

- Private contract between 2 parties
- Non-standard contract
- Usually 1 specified delivery date (futures are a range)
- Settled at end of contract
- Delivery usually occurs
- Some credit risk (risk of counterparty default)

## Hedging Strategies

- Long hedge is when you know you will lock in the price for an asset you know you will buy in the future
- Short hedge is when you know you will sell an asset in the future and want to lock in the price

### Arguments For Hedging

- Take steps to minimize risks arising from interest rates, exchange rates, and other market variables

### Arguments Against Hedging

- Shareholders can make their own hedging decisions
- May increase risk if competitors do not hedge
- Loss on hedge but gain in the underlying is hard to explain

### Basis Risk

- Difference between spot and futures
- Arises because uncertainty about basis when hedge is closed out

### Long Hedge for Purchase of an Asset

- F1: Futures price at time hedge is set up
- F2: Futures price at time asset is purchased
- S2: Asset price at time of purchase (Cost)
- b2: Basis at time of purchase
- Net Amount paid =S2 - (F2 - F1) = F1 + b2
- Net Amount received = S2 + (F1 - F2) = F1 + b2

### Choice of Contract

- Choose delivery month as close to life of the hedge
- When there is no futures contract on the asset being hedged, choose teh most highly correlated with the asset price. 2 basis components

### Optimal Hedge Ratio

<img class=equation-tall src="https://latex.codecogs.com/svg.image?h^*=p\frac{\sigma_S}{\sigma_F}">

- change in standard deviation of change in spot price
- change in standard deviation of the future price
- price coefficient between two assets

- Airline will purchase 2 million gallons of jet fuel in one month and hedges using heating oil futures
- From historical data
  - `h^* = 0.928 * 0.0263 / 0.0313 = 0.78`
  - Therefore optimal number of contracts is 0.78 times 2,000,000  / 42,000 \[units per contract] = 37

### Hedging Using Index Futures

Beta times value of the portfolio divided by value of one index futures contract.

Example 1

- 1,000 S&P futures price
- $5MM portfolio
- 1.5 Beta
- One contract is $250 times the index
- `1.5 * 5,000,000 / 250,000 = 30

Example 2

- Index level of 1,000. Future price of 1,010, 250x per contract
- Portfolio value of $5,050,000
- risk-free = 4%
- Dividend = 1% per year
- Beta = 1.5
- 3 month horizon
- Future exit in 4 months
- `1.5 \* (5,050,000 / (250 * 1,010)) = 30 contracts`
- in 3 months, index is at 900 and the future is at 902
- What's the net value?
- R = (P1 - P0 + D) / P0 = (P1 - P0) / P0 + D / P0
- R = Rf + Beta (Rm - Rf)
- Gain from short position = `(1010 - 902) * 30 * 250= 810,000`
- `Loss from index = (900 - 1000 + 1% * 1000 / 12 * 4) / 1000 = -97.5 / 1000 = -9.75%`
- `Rp = 4% / 4+ 1.5 (-0.0975 - 0.04 / 4) = -15.125%`
  - Notice that we divided risk free rate to account for 3 month
- `Vp = 5,050,000 (1 - 15.125%) + 810,000 = 5,096,187.50`

### Hedging to non-Zero beta

- If beta < 1, Number of contracts to sell = (Beta - Beta you want) Vp / Vi
- If beta > 1, Number of contracts to buy = (Beta you want - Beta) Vp / Vi

### Reasoning

- You think your stocks will outperform the market
- Hedging ensure the return you earn is the risk-free rate plus the excess over the market (or minus the underperformance over the market)

### Stack and Roll

- Roll futures forward to hedge future exposures
- Just before maturity, close them out and replace them with new contract reflect the new exposure

### Liqduity Issues

- In any hedging situation there is a danger that losses will be realized on the hedge while the gains on the underlying exposure are unrealized
- Example: Metallgesellschaft which sold long term fixed-price contracts on heating oil and gasoline and hedged using stack and roll

## Interest Rates

### Treasury Rates

- Instruments issued by government in its own currency

### LIBOR

- London Interbank Offered Rate
- Based on submissions by banks
- Why would banks collude for this?

### U.S. Fed Funds Rate

- Unsecured interbank overnight rate of interest
- Allows banks to adjust the cash (i.e., reserves) on deposit with the Federal Reserve at the end of each day
- = average rate on brokered transactions
- central bank can intervene

### Repo Rates

- Financial institution agreeing to purchase back **securities** it sold now for a higher price
- It's a loan?
- The rate of interest is calculated between X and Y

### LIBOR Swaps

- LIBOR is exchanged for a fixed rate
- 3 month LIBOR swap is same risk as continually refreshed 3 month AA-rated banks

### OIS Rate

- Overnight Indexed Swap
- Fixed rate for a period is exchanged for the geometric average of overnight rates
- Single exchange for up to one year maturity
- Periodic exchange for over one year, e.g. quarterly
- OIS rate is a continually refresh overnight rate

### Risk-Free Rate

- Treasury rate is artificially low because Banks do not keep capital for Treasury instruments
- Treasury instruments have favourable tax treatements
- OIS rates is a proxy for the risk-free rates

> For example, suppose that in a U.S. three-month OIS the notional principal is $100 million and the fixed rate (i.e., the OIS rate) is 3% per annum. If the geometric average of overnight effective federal funds rates during the three months proves to be 2.8% per annum, the fixed rate payer has to pay 0.25 × (0.030 − 0.028) × $100,000,000 or $50,000 to the floating rate payer. (This calculation does not take account of the impact of day count conventions.)

### Measuring Interest Rates

- Principal e^(RT)
  - R = continuously compounded rate for time T

### Conversion Formulas

- Rc : continuously compounded rate
- Rm: same rate with compounding m times per year
- Rc: m ln ( 1 + Rm / m)
- Rm: m (e^(Rc / m) - 1)

```txt
10% with semiannual compounding is equivalent to 2ln(1.05)=9.758% with continuous compounding
8% with continuous compounding is equivalent to 4(e0.08/4 -1)=8.08% with quarterly compounding
Rates used in option pricing are usually expressed with continuous compounding
```

### Zero Rates

- A zero rate (or spot rate), for maturity T is the rate of interest earned on an investment that provides a payoff only at time T
