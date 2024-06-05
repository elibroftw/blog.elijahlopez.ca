---
title: "BU 430 Financial Markets and Securities Trading"
date: 2024-05-07T09:41:44-04:00
draft: false
tags:
  - finance
  - university
---

Point based system. Participation based, quizzes, group.

### Assumption

True price of the stock is the mid-point of hte bid-ask. Market price is the price on the order last executed.

## Flash Boys Notes

[Combined Book Notes](/posts/literary-analysis/flash-boys-a-wall-street-revolt-michael-lewis)

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
- Two big costs (applicable to wholesalers as well)
  - Adverse Selection costs:
    - A phenomena/cost when taking the other side of the trade with an informed entity at a large scale (institutional investor, hedge fund, insider trader)
    - It can just be pressure on price even in the short-term
  - Inventory costs: movement against you
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

Instead of removing PFOF, want to increase the competition of wholesalers. SEC wants to run auctions for each retail order so that all institutions will bring all buys and sells to the mid-quote (SEC Order Competition Rule).

Caveats:

Small caps and micro-caps will fail at auctions because its all retail flow. If did not exist, they would not want to deal with micro-caps either, leading to higher costs for retail. Institutions will not be able to fill that gap. It undermines US OBS act of 2012

Retail flow is balance and so everyone gets their flow done. Institutions will only trade when the stock is trading in their interests, so it's always only one side that gets properly dealt with.

## How Markets are Connected

### Flakiness / JIttery

The state of technology where sometimes the person is first or not first due to some random thing (flaky)

Related to physical world (sun ray, electromagnetic waves)

### How to speed up Fiber Optic for Trading?

Make the fiber hollow instead of with glass.

Why are Satellites used for electronic trading?

- Singapore market, and we are in Chicago, and the cable is in Seattle
- Medium is faster, but distance is longer
- Sometimes, when the satellites are in the right position, it is faster than cable
  - To get to the Seattle cable, microwaves are used

### What are Shortwaves

- low bandwidth, faster speeds

## FLV Case

Paper profit realization probability? Very unlikely.

Why is the knowledge that someone holds shares in a company a downside? They don't need to disclose it until 5% of a company is owned. In Canada the threshold should be higher due to the difference in company sizes and yes it is 10%. Disclosure has downside because then everyone else will want to take advantage of the company if they are asking for counter party offers.

If Kevin starts trading too aggressively through marketable limit orders (a limit order that can immediately be executed against the order book) people will figure out the signal. What are Kevin's choices? Best choice is to go slow and through dark markets. Dark only applied to pre trade transparency. Once trade has occured by law, it has to be reported to the public record of transactions. Dark pools used to be millisecond delays but that's been considerably reduced too.

One thing that dark pool does for you. The problem with "lit" exchanges is that everything is shown: the order book. As soon as you make a trade the market knows where the price is going.
What are these crossing networks? How to sell using cross networks (Jessica at Deutsche Bank) without market falling. Jessica said she had a client who was willing to buy 100k. The transaction hit the tape. What happens next? Ticked up by two cents 19.02-19.03. The market inferred there was either someone wants to buy more to sell more than 100,000 shares. If the buyer crosses the spread then that's the signal that the buyer is potentially more informed than the seller. Therefore an intelligent seller can get together a bunch of buyers and sell to each of them in a way where they have to cross the spread.

Now he wants to sell 250,000 at 19.02 which would signal to market that the seller wants to sell more. If Jessica cared about the buyer she would not want the price to move up. The solution would probably be to sell at the mid-quote.

It's not possible to post quotes that could have been fulfilled (lock or cross). When is this a problem? When two exchanges have different best offers. It's not supposed to happen but exchanges work hard to reconcile that by routing market orders to each other? The exchange that is offending would slide down the offers.

Growing fragmentation tries to say that the same order could get different deals but there's arbitraging as well as a regulation: exchanges are mandated to route orders to the exchange with the best deal. Trade through rule. If the exchange knows that there is a better quote somewhere, then the trader has to get the best possible price.

_electronic front running_: back-running

_slow-market arbitrage_: latency arbitrage

Investors Exchange (IEX) Exchange. It was founded in 2013 as a dark pool, and turned into an exchange in 2016. IEX has 38 miles of coiled fiber optic cable between its matching engine and servers used by HFTs giving IEX a 0.35 millisecond head start versus HFTs. This gives HFTs a disadvantage at re-pricing their quotes. How does it actually solve the problem? Is it because the quotes are delayed? Limit orders will be re-priced by the exchange before the orders that are in the coil get to the exchange. IEX is pegged to the other exchanges' quotes.

Liquidity begets liquidity. IEX trying to do the HFTs / market makers job by doing it for them. The problem is that HFTs are just better at it. So HFTs end up staying away from it.

What is spoiling the market? Brad kept calling people (shopping around) to see if anyone wants it but since he calls the wrong people, it tips people off. Broker connects two parties, a dealer could also hold inventory themselves? If the dealer does not tolerate inventory risk, they can impatiently trade out of large positions.

For his last 3,000,000 million shares, the offer was 19.10. Since the initial share price was 19.04, 19.10 is much better than the initial price at the decision price.

Implementation shortfall: realized profit vs paper profit when decision was made.

Bryan Weller, does algorithmic trading reduce information acquisition? Markets are complicated. Without funds like FLV, price discovery wouldn't occur since they do fundamental research. As they do their job, they are also adversely selecting market makers who are providing liquidity. Modern market is bad at price discovery since hedge funds choose not to do research into everything anymore, since they know its harder to act on the research do to the sensitivity of the market.

## NYSE vs NASDAQ Case

- Discuss
  - NYSE specialist: central human market maker made obsolete due to electronic trading but they have been replaced by something else today
  - NASDAQ introduction? because it was too monopolistic. NYSE had one specialist per basket of stocks.
    - Competition, but it turned out to be worse
    - Why do NASDAQ market marker avoid Odd-Eighth Quotes and why did they stop avoiding?
  - SOES bandits
  - Continuous vs. batch markets
    - Pros and cons
    - For background, read the intro to "On the effects of continuous trading" (2024)
    - Continuous because of real time electronic trading
- Outside sources
  - Compare the competitive landscape from 2000 to the present
  - Exchanges as publicly traded companies. "Who Benefits from Securities Exchange Innovation" (2024)
  - NYSE Autoquote (2003) and NYSE Hybrid (2006)
    - Does Algorithmic Trading improve liqduidity (2011)
  - Endogenous Liquidity Providers versus Deisgnated Market Makers
    - pros and cons
    - for background, read Intro to Brogaard, 2018 "High frequency trading and extreme price movements"
    - New settlement rules (t+1) and initiatives (blockchain)
