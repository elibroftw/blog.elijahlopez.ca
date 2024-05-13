---
title: "BU 430 Financial Markets and Securities Trading"
date: 2024-05-07T09:41:44-04:00
draft: false
---

Point based system. Participation based, quizzes, group.

### Assumption

True price of the stock is the mid-point of hte bid-ask. Market price is the price on the order last executed.

## First Week

["These Teenagers Know More About Investing Than You Do"](https://on.wsj.com/44kCymS)

["Robinhood Faces Wrongful-Death Lawsuit Over Young Trader’s Suicide"](https://on.wsj.com/3QtUANN)

The Introduction to "Flash Boys" by M. Lewis.

["He Was a Quant at Citadel. Now He Agitates for GameStop Investors"](https://on.wsj.com/3y47VGn)

["Do You Get the Best Prices Trading Stocks? The SEC is facing off against Citadel Securities and other firms over who gets to execute - and profit from - individuals’ trades"](https://on.wsj.com/3WoJFsE)

"Pricing of Stock Trades Varies Widely Among Popular Brokers, Study Finds" - https://on.wsj.com/3UhfXTG

"Will Auctions Help Investors Get Better Prices? Traders Are Skeptical" - https://on.wsj.com/3wkR6qc

What happens when a retail investor creates an order? It goes to the retail brokerage, and then gets sold to a wholesaler (marketmaker).

We can't sell directly to wholesaler or brokerage because there's capital requirements for the exchanges/wholesalers. Registered **broker-dealer status** to connect to an exchange.

- sane, sophisticated, experienced
- brokerages exist to prevent incorrect trades to break the market
- each exchange has their own engines
- as fast as possible to execute trades (e.g. HFT)
- colocation to the exchange (physically located)
  - buying space right beside the exchange servers (no metre of advantage)
  - servers are located in the same servers as the exchanges
  - Most located in New Jersey
  - TSX servers located in Markham
  - Electricity crisis/costs in big cities are higher
- In US, there are 3-4 data centres (NYSE, NASDAQ, NYSEARCA, CBOE which controls DirectEdge, BAT)
- Why does CBOE own DirectEdge and BAT
  - Economies of scale (technology sharing)
  - Fixed costs: very high technology costs, software engineering labour, strategy costs
  - Tends to favour larger companies
- Exchanges do no trade, invest, participate
- All intermediaries benefit from ?
- Intermediation costs $1T per year to run
- FINRA ADF
  - Trades that occur off the exchange (retail and wholesalers)
  - Dark pools
- Wholesalers
  - Citadel
  - Virtu (between C & V, 71% of all retail flow)
  - G1
  - Two Sigma
  - UBS
  - Jane Street
  - Merrill Lynch
  - Morgan Stanley
- In Canada, there are no wholesalers, retail brokers send orders directly to the exchange
  - US system is unique

Bid-Ask Spread

- Ask (higher price)
- Bid (lower price)
  - If there is a bid-ask spread of 0.01, how can a bid at the lower price be filled?
- Aggressive and Passive Orders (vice-versa for buying and selling)
  - Aggressive buy at higher price
    - US retailers are mostly market buy orders
    - Brokerages might try to dark pattern market orders instead of limit orders
      - Why? Payment for order flow incentivizes market orders
      - Why does SEC allow it? wholesalers have handshake agreements to price-improve the current spread. Brokers regularly evaluate.
    - Slippage: different in market price and market fill price
  - Passive, buy at lower price, takes longer, might not execute
- Spreads have been widening since 2010 but we have higher liquidity
  - this is due to higher prices
- Why are spreads wider for higher priced stocks (not market cap)
  - Professional investors set the spreads: market making firms who also do wholesaling

### Exchanges

- Revenue sources:
  - 1. Shaving off teeny tiny haircuts from every share that is traded
  - 2. IPOs
  - 3. ?

### Market Makers

- They do more than just wholesaling
- Determine what spreads are going to be and how wide
  - Other entities do exist but will learn later
- Main line of business is liquidity provisioning (impatient to patient investors)
- Market makers put up capital to make the market
  - Capital gets locked up while waiting for buyers to come
  - Since capital that gets locked up is greater per share, and there is a required rate of return, the spread is higher
  - Holding inventories of stock that they have bought from impatient sellers or had sold to patient buyers
- How does fractional trading play into this?
  - Berkshire Hathaway notorious for not splitting
  - retail investors: "idiocratic volatility"
  - commitment with retail brokerage to share cashflow of the share
- Two big costs
  - Adverse Selection
    - A phenomena/cost when taking the other side of the trade with an informed entity at a large scale (institutional investor, hedge fund, insider trader)
  - Inventory cost: movement against you
- Costs are high for institutional and low for retail
- When there is mixed flow, the exchange costs are lower
- When there is only institutional flow, there is only high costs

### Hedge Funds

When a hedge fund buys a stock, the price goes up, the liquidity is eaten up. Suppose the market maker has a short inventory position. That's a terrible place to be.

### Payment for Order Flow (PFOF)

- retail investors are the products for payment for order flow (PFOF) brokerages
- payment is called
- PFOF goes from wholesaler to the brokerage
- Retail sentiment
  - Generally less informed than institutional investors
  - Price improvement
  - Why retail specifically? lower adverse selection costs since retail investors aren't as informed and inventory since order flow is balanced
  - Wholesaler expects order flow to be balanced from retail customers
- Revenue: Spread of 10.00 and 10.06. The price improvement is 10.05 or 10.01 meaning the revenue is 4 cents. On the exchange, they would make a higher spread, however there is higher adverse selection and inventory costs.
- The difference between the market price and the true price (midpoint), is the price for liquidity
- Who is losing?
  - 20% of all volume is diverted away from exchanges, so the exchanges lose out
  - People who put limit orders into exchange are providing liquidity also lose out since they don't get it
  - Institutional investors are pissed because the market markers have costs to set the spread so that the costs are covered plus profit.

### Institutional Investors

- Argue that without PFOF, there is lower liquidity costs for everyone since market maker costs are lower
