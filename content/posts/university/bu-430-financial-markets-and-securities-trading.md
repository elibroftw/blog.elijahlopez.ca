---
title: "BU 430 Financial Markets and Securities Trading"
date: 2024-05-07T09:41:44-04:00
draft: false
---

Point based system. Participation based, quizzes, group.

### Assumption

True price of the stock is the mid-point of hte bid-ask. Market price is the price on the order last executed.

## Flash Boys Notes

### Flash Boys Chapter 1

- Dave Spivey
- Milliseconds matters (millions of dollars)
- Connecting Chicago futures exchange (CME in Aurora) to NASDAQ exchange
  - E-Mini Futures: smaller than the future price meant for anybody
  - SP500 E-Mini futures is one of the most frequently traded asset and definitely the most traded futures contract
  - Arbitrage: shorting futures contract not required
  - we buy the SPY ETF, but now what?
  - **Latency arbitrage**: buying the ETF very quickly when the futures contract moves, and sell when the ETF moves
  - Futures contract lead the market and are traded with leverage
  - This arbitrage hurts market makers (adverse selection), therefore, market makers also want to get on the most optimal fiber optic cable
  - market maker has always made money
- Went through mountain which was difficult
- Telecommunication companies (Verizon) had no idea the power they had

## First Week

["These Teenagers Know More About Investing Than You Do"](https://on.wsj.com/44kCymS)

["Robinhood Faces Wrongful-Death Lawsuit Over Young Trader’s Suicide"](https://on.wsj.com/3QtUANN)

The Introduction to "Flash Boys" by M. Lewis.

["He Was a Quant at Citadel. Now He Agitates for GameStop Investors"](https://on.wsj.com/3y47VGn)

["Do You Get the Best Prices Trading Stocks? The SEC is facing off against Citadel Securities and other firms over who gets to execute - and profit from - individuals’ trades"](https://on.wsj.com/3WoJFsE)

["Pricing of Stock Trades Varies Widely Among Popular Brokers, Study Finds"](https://on.wsj.com/3UhfXTG)

["Will Auctions Help Investors Get Better Prices? Traders Are Skeptical"](https://on.wsj.com/3wkR6qc)

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
- Retail brokerages will send all flow, not just a subsect of the flow
- So something like Citadel has to accept flow from GME
- PFOF is 1% of spread whereas price improvement is 27%

### Institutional Investors

- Argue that without PFOF, there is lower liquidity costs for everyone since market maker costs are lower

### Brokerages

- Most brokers only have a channel to a wholesaler
- At the end of the day, the broker evaluates (price improvement) the wholesaler to continue sending the flow
- Incentive to go with the highest PFOF payer
- Higher the PFOF, the worse the price improvement
- There's a rule that all wholesalers that a brokerage is dealing with, are charged the same amount which eliminates the conflict of interest
- Brokerages like Fidelity and Vanguard don't accept PFOF but still send it to wholesalers because there's price improvement for clients
- Why doesn't brokerages like TD Ameritrade and Charles Schwab do their own wholesaling?
- They realized they don't have the expertise as Virtu and Citadel do (no proprietary tech)
- 0 commission
  - No PFOF, no 0 commissions
  - RobinHood and few other startup brokerages lowered commissions until it got to $0
  - RobinHood finances $0 commissions via PFOF
  - Brokerages can finance it through other business divisions and margin interest

### Wholesaler

- They don't have to run the flow against their balance, they can forward it to the exchange
- Very high fixed costs, so Citadel and Virtu have the lowest per order cost
- There's a transfer of the savings of the economies of scale to retailers due to brokerages evaluating the performance of each wholesaler
- Brokerages are very big players (TD Ameritrade is the biggest)
- Citadel is vertically integrated and technologically advanced with billions invested to be the highest efficiency, and it has diversification
- Proponents of PFOF: 27-28% price improvement over the spread
- People against PFOF: Benchmark of using the spread is flawed in the first place
  - Exchanges are deprived of ability to interact with retail flow
  - Therefore, the spread is a flawed benchmark
  - Argument is wrong because there are other market participants that can place bids and ask to narrow the spread
  - If the market orders went directly to the exchange, the spread would narrow but not as much because there is flow from both institutions and retailers

### Auctions

Instead of removing PFOF, want to increase the competition of wholesalers. SEC wants to run auctions for each retail order so that all institutions will bring all buys and sells to the mid-quote.

Caveats:

Micro-Caps will fail at auctions because its retail flow and wholesalers if they still exist, will not want to deal with micro-caps either

Retail flow is balance and so everyone gets their flow done. Institutions will only trade when the stock is trading in their interests, so it's always only one side that gets properly dealt with.
