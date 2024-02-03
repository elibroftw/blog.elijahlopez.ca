---
title: "BU 423 Options, Futures & Swaps"
date: 2024-01-09T14:26:54-05:00
draft: false
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
    - For many futures contracts, the delivery period is the whole month
- Settled daily (mark to market)
- Closing out futures is easy, it's just an opposite trade
- Most contracts are closed out before maturity
- When used for hedging, profits are not recorded for accounting purposes until the contract is closed (pg. 59). If not for hedging, then the books would note the gain/loss in the year end even if the contract will not be closed until the next year

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
- An improvement (increases) in the basis benefits the short position

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
- 1.5 * 5,000,000 / 250,000 = 30 contracts short

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

### Liquidity Issues

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

```py
import math
def convert_interest_rate(m_old, m_new, rate):
  rc = math.log(1 + rate/m_old) * m_old
  print(f'Continuous compounding rate: {rc * 100:.4f}')
  rm = m_new * (math.e ** (rc / m_new) - 1)
  print(f'New rate: {rm * 100:.4f}')
```

```txt
10% with semiannual compounding is equivalent to 2ln(1.05)=9.758% with continuous compounding
8% with continuous compounding is equivalent to 4(e0.08/4 -1)=8.08% with quarterly compounding
Rates used in option pricing are usually expressed with continuous compounding
```

### Zero Rates

- A zero rate (or spot rate), for maturity T is the rate of interest earned on an investment that provides a payoff only at time T

Maturity (years) | Zero Rate with Continuous Compounding
---------------------- | ------------------------------------------------------
0.5 | 5.0
1.0 | 5.8
1.5 | 6.4
2.0 | 6.8

Template

COUPON_FOR_PERIOD e^(-HALF_YEAR_CTN_CMPDNG * 0.5) + 3e^(-r*1) = 97

### Bond Pricing (Continuous)

- theoretical price of a two-year bond providing a 6% coupon semi-annually is: `3e^(-0.05 * 0.5) + 3e^(-0.058*1)+ 3e^(-0.064*1.5) +103e^(-0.068*2.0)= 98.39`
- yield when you replace all the different rates above with a single rate to make the PV equal the price

### Par Yield

- coupon rate that causes the bond price to equal its face value
- similar to solving for bond yield, but set the price to the face value
- c = (100 - 100d)m / A

### Data to Determine Treasury Zero Curve

- Bootstrap Method
- `BOND_PRICE * e % (RATE * MATURITY_IN_YEARS) = FACE_VALUE`
- For the coupon bonds, we can use the zero rates from before and just solve for the lump-sum rate R

### Forward Rates

- (R2T2 - R1T1) / (T2 - T1)
- Approximately true when rates are not expressed with continuous compounding

### Forward Rate Agreement (FRA)

- OTC agreement that a certain LIBOR rate will apply to a certain principal during a certain future time period
- Predetermined rate RK is exchanged for interest at the LIBOR rate
- FRA can be valued by assuming the forward LIBOR interest rate RF is certain to be realized
- Value = Present Value of the difference between the forward LIBOR interest rate (RF) and the interest paid at the FRA rate RK
- `(RF - RK) * Price * length of the contract / (T2 - T1)` and then discount to 0 from T2
- Use case: floating rate payment in the future but you want to make sure you are paying a fixed rate
  - the receiver will want a premium for receiving

A company has agreed that it will receive 4% on $100 million for 3 months starting in 3 years. The forward rate for the period between 3 and 3.25 years is 3%. The value of the contract to the company is +$250,000 discounted from time 3.25 years to time zero at the OIS rate.

`(0.04 - 0.03) * 100_000_000 * 0.25 / (1.03^3.25) = 250_000 / (1.03 ^ 3.25)`

Suppose rate proves to be 4.5% (with quarterly compounding). The payoff is –$125,000 at the 3.25 year point. Often the FRA is settled at time 3 years for the present value of the known cash flow at time 3.25 years.

`-125_000 / (1 + (0.045 * 0.25)) = -123_609.39`

- 3x6 FRA: starts in 3 months (90 days) and ends in 6 months (180 days)
- 6x9 FRA: starts in 6 months (180 days) and ends in 9 months (270 days)
- Question: rate of 3.10% for 6x9. 3% right now. What is the fixed rate in the agreement?
  - `(1 + (0.031 * 0.75)) / (1 + 0.03 * 0.5) = (1 + R * 0.25)`
  - RF = 3.251%
- Question: 3 months have passed, and the rate has gone to 3.25% for 3 months and 3.3% for 6 months. what is the value of the FRA
  - `(1 + (0.033 * 0.5)) / (1 + 0.0325 * 0.25) = (1 + R * 0.25)`
  - RF = 3.323%
  - `FRA = (0.03323 - 0.03251) * 0.25 / (1 + 0.033 * 0.5)`
  - FRA = 0.00017710154273060686 of the loan amount

A financial manager needs to hedge against a possible decrease in short-term interest rates. he decides to hedge his risk exposure by going short on a 3X6 FRA that expires in 90 days and is based on a 90-day LIBOR. The current LIBOR spot rates are observed: 30-day 5.83%, 90-day 6.00%, 180-day 6.14% and 360-day 6.51%. What is the rate the manager would receive on this FRA:

- Interest paid on $1 for 180 days: 0.0614 * 0.5 = 0.0307
- Interest paid on $1 for 90 days: 0.06 * 0.25 = 0.015
- Expected interest paid on $1 from 3x6 (compounded from 90-day): (1.0307 / 1.015 - 1)
- Expected interest rate for 3x6 (compounded from 90): (1.0307 / 1.015 - 1) / 0.25 + 1 = 6.19%

### Theories of the Term Structure

- Expectations theory: forward rates equal expected future zero rates
- Market Segmentation: short, medium, and long rates determined independently of each other
- Liquidity Preference Theory: forward rates higher than expected future zero rate
  - To manage these preferences, banks offer different rates for depositors and borrowers depending on the maturity

## Determination of Forward and Futures Prices

Unit: Domestic Currency / Foreign Currency

### Intro and Types of Contracts

- Futures contract
- Forward contract
  - Even an airline ticket is a forward contract
  - There should be a model/marketplace for this sort of thing for each airline and etc.
- we have three times: 0, t, and T (maturity)

Types

- forward contracts on investment assets that provide no income
  - discount bills, bonds, stocks without dividends
- forward contracts on investment assets that provide a known dividend yield
  - coupon bonds, indices, currency
- forward contracts on investment assets that provide a known cash income
  - coupon bonds, indices

### Valuing Forward Contracts

For all these equations, T is the time till maturity in years from the present. r is the continuous compounding rate for the period of time.

When first negotiated, a forward contract is worth 0 because neither party is actually paying for the contract to exist.

But later, when there is a contract with delivery price K and a contract with delivery price F0, we can show that the value of the contract is:

Long forward contract

<img class=equation src="https://latex.codecogs.com/svg.image?f=(F_0-K)e^{-rT}" alt="f=(F_0-K)e^{-rT}">

Short forward contract

<img class=equation src="https://latex.codecogs.com/svg.image?f=(K-F_0)e^{-rT}" alt="f=(K-F_0)e^{-rT}">

So in this case, a rate of say 8% continuous compounding for 3 month period requires multiplying the rate by the months.

### The Forward Price

<img class=equation src="https://latex.codecogs.com/svg.image?F_0=S_0(1+r)^T" alt="F_0=S_0(1+r)^T">

### Forward Price with Continuous Compounding

<img class=equation src="https://latex.codecogs.com/svg.image?F_0=S_0e^{rT}" alt="F_0=S_0e^{rT}">

Value:

0 + 100e^(-5%)

### Known Dollar Income

<img class=equation src="https://latex.codecogs.com/svg.image?F_0=(S_0-I)e^{rt}" alt="F_0=(S_0-I)e^{rt}">

Where I is the present value of the income during life of forward contract

### Know Yield

<img class=equation src="https://latex.codecogs.com/svg.image?F_0=S_0e^{(r-q)T}" alt="F_0=S_0e^{(r-q)T}">

Where q is the average yield during the life of the contract (continuous compounding), For storage costs, use(+u) instead of (-q). Use q = rf (foreign) for currencies. For cost of carry, use c (storage cost plus interest cost) in place of r.

### Forward Pricing Example 1

- Stock without dividend
- spot price = $40
- risk free for 3 months is 5% per annum (5% / 4 = 1.25%)
- Ft = 40(e ^ 0.0125) = $40.50
- Suppose that F0 = $43
- How to execute the overpriced arbitrage strategy?
- Short the forward, borrow at risk-free (isn't this the margin rate) to buy the underlying
- at T, deliver the underlying and close the short forward and pay off the loan

### Futures Pricing

<img class=equation src="https://latex.codecogs.com/svg.image?F_t=S_0e^{(r-q)T}" alt="F_t=(S_0-I)e^{rt}">

Example

- Spot: 400
- yield of 3% p.a
- rm = 8%

### Index Arbitrage and Program Trading

- simultaneous purchase/sale of at least 15 stocks with total value > $1MM
- Black Monday: arbitrage opportunities

### Interest Rate Futures

- day count convention
- unit of time for calculating accrued interest when instruments are traded
- Treasury: Actual / Actual
- Corporate Bonds: 30 / 360
- Money Market Instruments (e.g, LIBOR) Actual / 360

### Bond Prices Between Coupons

- Cash Price = Quoted Price + Accrued Interest
- quoted price is flat price
- invoice or total price paid is called the dirty price or cash price
- `Accrued Interest = Coupon * (days since last coupon / coupon period)`
  - Actually count the days in the coupon period instead of dividing by two

```example
A semi-annual coupon bond with 8% coupon rate
Days passed since last coupon payment is 30
Accrued interest = $80/2  * (30/182.5) = 6.58
coupon rate * par value * (days / 365)
Invoice = 990 (quoted) + 6.58 = $996.58
```

### Treasury Bill Prices in the US

P = 360/n (100 - Y)

Quoted based on annualized discount. So if the quoted price is 8 for 3 month, then the cash price is 100 - (8/4) = 98.

### Canadian Treasury Bills

Quoted on yield. Actual/Actual

365/n * (100 - Y) / Y

### Treasury Bond Futures

For each $100 face value of bond,

Cash Price received by short party = most recent settlement price \* conversion factor + accrued interest.

- 10-year Treasury note futures contract quotes are to the nearest half of a thirty-second (0.5/32ths). 127-015 means 127 + 1.5/32 and 90-08 means 90 + 8/32.
- 5-year and 2-year Treasury note contracts are quoted to nearest quarter of a thirty-second (0.25/32ths). 119-197 means 119 + 19.75 / 32

Settlement is priced on a 6% bond and delivery can be any bond with a maturity of more than 15 years but less
than 25 years. The conversion factor is unique to each bond.

Example

Each contract is delivery of $100,000 face value of bonds. Suppose recent settlement price is 90-00, there's a conversion factor of 1.3800, and the accrued interest is $3 per $100 face value.

Therefore, (1.3800 × 90.00) + 3.00 = $127.20. Since $100,000 face value is delivered (x1000), the total cash received is $127,200.

### Conversion Factors

- Quoted price the bond would have on the first day of delivery month assuming interest rate is 6% with semi-annual compounding and the maturity is rounded down to a multiple of 3 months. If the maturity is no a multiple of 6 months, assume a coupon is paid in three months meaning that accrued interest of 3 months has to be subtracted.

Example

As a first example of these rules, consider a 10% coupon bond with 20 years and two months to maturity. For the purposes of calculating the conversion factor, the bond is assumed to have exactly 20 years to maturity. The first coupon payment is assumed to be made after six months. Coupon payments are then assumed to be made at six-month intervals until the end of the 20 years when the principal payment is made. Assume that the face value is $100. When the discount rate is 6% per annum with semiannual compounding (or 3% per six months), the value of the bond is

- Sum from i=1 to i=40 { 5/1.03^i } + 100 / 1.03^40 = 146.23
- Divided by the face value to get a conversion factor of 1.4623

Consider an 8% coupon bond with 18 years and 4 months to maturity. For the purposes of calculating the conversion factor, the bond is assumed to have exactly 18 years and 3 months to maturity. Discounting all the payments back to a point in time three months from today at 6% per annum (compounded semiannually) gives a value of

- 3 months from today, the value is 4 (for the last coupon?) + sum from i=1 to i=36 {4 / 1.03^i} + 100 / 1.03^36 = 125.83
- Discounting to today is 125.83 / (1.03^0.5) = 123.99. Subtract the accrued interest of 2 (3/6 * 4) to get 121.99

### Determining Treasury Futures Price

- 115 quoted bond price, 12% coupon, conversion factor of 1.6, 60 days since last coupon payment, 122 till next coupon payment, 148 after that till contract Maturity
- S0 is the CASH VALUE not the quoted value
- S0 = 115 + (60/182) * 6 = 116.978
- I = 6e^(-0.1 * (122/365)) = 5.803
- F0 = (S0 - I)e^(rT)
- F0 = (116.987 - 5.803)e^(0.1 * (270/360)) = 119.211
- Quoted F0 = 119.711 - total accrued interest = 119.711 - 148/183 * 6 = 114.851
- Now we need to divide by the conversion factor to get 71.79

### Eurodollar

- a eurodollar is a dollar deposited in a bank outside the USA
- futures on 3-month LIBOR rate (eurodollar deposit rate)
- rate earned on $1 million
- a change in one basis point (0.01) in a eurodollar futures quotes corresponds to a contract price change of $25 (x2500)
