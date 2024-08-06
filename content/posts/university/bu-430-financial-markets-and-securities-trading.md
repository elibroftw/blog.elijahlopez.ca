---
title: "BU 430 Financial Markets and Securities Trading"
date: 2024-05-07T09:41:44-04:00
draft: false
tags:
  - finance
  - university
---

{{< toc >}}

## Preface

### Assumptions

True price of the stock is the mid-point of hte bid-ask. Market price is the price on the order last executed.

### Flash Boys Notes

[My condense book notes](/posts/literary-analysis/flash-boys-a-wall-street-revolt-michael-lewis)

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

Small caps and micro-caps will fail at auctions because its all retail flow. If did not exist, they would not want to deal with micro-caps either, leading to higher costs for retail. Institutions will not be able to fill that gap. It undermines US JOBS act of 2012 passed by congress. From Congress's and economic perspective, it's fair for large stocks to subsidize small stocks. Congress represents people, so it represents the people's will as well.

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

Growing fragmentation tries to say that the same order could get different deals but there's arbitraging as well as a regulation: exchanges are mandated to route orders to the exchange with the best deal. **Trade through rule**. If the exchange knows that there is a better quote somewhere, then the trader has to get the best possible price.

Suppose there's a NASDAQ quote with 100 shares at 10.00, NYSE with 10,000 shares at 10.01, and a BATS quote with 100,000 shares at 10.02. If a firm wants the BATS quantity, they just buy from NASDAQ and then go directly to BATS.

ISO orders: dear BATS, do not re-route order to the best quote since the order sender guarantees its been taken. In Canada, the ISO order informs the exchange that all the best quotes on other exchanges have been taken.

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

NYSE started in 1792, physically trading. Buttonwood tree. System of human specialists, which are central market markers to make the market for a basket of stocks. The worry is a being ripped off (overcharging for liquidity) by the market maker.

In the 1970s the NASDAQ was created due to specialist over-charing concern as well as fragmentation. Needed an exchange to list faster (tech), where companies that are innovating and couldn't qualify for the NYSE. NASDAQ chose to have multiple dealers providing liquidity on NASDAQ or so the argument goes. Then NASDAQ asked companies to move to them. Back then, there was n cross trading. What were the actual results? NASDAQ has more expensive liquidity which normally wouldn't make sense due to micro-economic theory. Explanation: dealers were colluding to overcharge. This hold true even after accounting for different stocks trading. When the same stock would move from NASDAQ to NYSE, its liquidity would improve.

The dealers were caught because they stopped as soon as the first article went out and because people noticed, there was a big investigation. Billion dollar settlement.

Two major changes to the markets in the late 1990s:

1. Increase competition from other markets (stocks trade on all exchanges)
2. Everyone can submit limit orders to the book
3. At least 1 cent per quotes

Specialists had to go because it was hard to go from 12.5 cents 6.25 cents to 1 cent. 7-10 years without dealers and specialists market making. Early 2000s had only voluntary (endogenous) liquidity.

### SOES Bandits

- [Investopedia](https://www.investopedia.com/terms/s/soesbandits.asp)
- Small order Execution System
  - Prioritize small orders less than 1000
- Bandits started taking advantage and split order quantities and force market makers to buy high and sell low
- Wait for dealers to be busy and then snipe stale quotes

### Batch Markets

- When technology allowed for it, trading started happening continuously
- Older was waiting
- Batching  is better because continuous trading increased latency arbitrage and adverse selection and the benefits are cancelled out by the cons
  - In batched, all orders came, intermediate them, and then execute them
  - Continuous would happen too quick
  - Adverse selection is higher in continuous because there are more signals, more price fluctuations
  - Batch is better because less limit order signals
    - There is less opportunity for arbitrage
    - In a batch market, market makers are given time to adjust their stale quotes
  - With continuous, you have to be fastest to reprice your quotes
    - Only one market maker can be the fastest, since that is how physics and the engine works (engine does not wait, it immediately executes orders)
    - Other market makers have to compensate by increasing the spreads
      - But then the fastest market maker also widens their spread
    - Taker traders pay the cost
  - **Therefore continuous markets might be costing society more than comfortable batch markets, where executions occur within a second**
    - Quotes are accumulated by all the fastest market makers, not just the fastest one
      - Which means the spread can lower

Citadel came out with their own analysis that says continuous trading is better. But their analysis is flawed due to using market volatility as the spread and then they conveniently skipped that there are quotes beyond the best bid and offers (deeper in the book).

Citadel makes money as a fast market maker and HFT so they do not want to have to adapt to new changes.

Another study from Sweden has data on what Citadel does and they found that Citadel makes money sniping other people's stale quotes than it loses on its own quotes being sniped.

Taiwan was batched in 2020 and then moved to continuous trading and the execution costs were measured (5% increase).

Moving to batched markets not happening anytime soon. Industry lobby is too big and SEC/government is way too busy in adding their own regulation.

What's stopping IEX? They would lose volume due to market participants boycotting.
People who pay for this new system would be people who don't benefit from the status quo.

Brokerages cannot send orders to an arbitrary exchange, but rather send orders best on best quotes. Exchanges are not allowed to own brokerages.

### Current Market

NYSE (blue-chip) and NASDAQ (tech) don't really dominate, since they are 24% combined market share (modern trading landscape pie graph).

Downside to multiple exchanges: With multiple exchanges, there's also greater adverse selection across exchanges, which can push spreads wider (arbitraging). Redundant capital investments but consensus is that multiple markets is better. Hurts institutional investors who have to split orders to the liquidity on all exchanges.

### Publicly Traded

- Prioritization of shareholders not just market makers and regulators
- Shareholders want profit, so now exchanges have to make the most money
- Exchange makes most money from trading fees, data, and listing fees (IPOs).
  - Data revenue going to be fixed, listings are cyclical, but trading is also cyclical, but forever
    - Trading volumes matters the most, so how to make traders trade more
    - Exchanges care about market makers the most
    - Citadel: 20% of NYSE volume, Virtu is another 20%

### NYSE AutoQuote and NYSE Hybrid

- AutoQuote in 2003: better liquidity
- Hybrid in 2006: hurt liquidity
  - Sped up access to market by liquidity takers

### Jane Street Proprietary Trading Firm

- Highly vertically integrated
- In everything: ETFs, futures, options, stocks, international markets

### LU-LD System

- halts trading of stock that went up or down too much (per stock basis) to let traders calm down and think about it

### Flash Crash May 6 2010

In 15 minutes, 1T loss.

Started on E-Mini SP500 futures. 1,000 contracts by Warlon Reed. When it tanked, the ETFs tanked and followed, and then the underlying stocks also tanked. Some stocks fell and others were halted.

Regulators didn't really get it. They said the market is supported by endogenous providers, like HFTs, and they didn't do their jobs. They said more regulations needed to come. Market-wide circuit breakers were added rather than exchange.

### Designated Market Makers

When individual stocks tank, Citadel supports the price (buys more than they usually would buy). Not because it wanted to, but because it knows that prices would rebound. When multiple stocks tank, endogenous participants can't support the markets. That's why designated market makers were brought back which are the same marker makers but with obligations.

Pareto allocation; Citadel may turn on a participation flag in its algorithm which lets the TSX engine that Citadel wants 40% of every trade that comes to the TSX, until the flag is turned off.

TSX brought in Secondary Market Makers since they had signed perpetual contracts with the DMMs.

### Settlement Rules

US recently moved to t + 1. Why not blockchain with instantaneous settlement.

- Market maker inventory costs would increase because more capital is tied up during the day instead of just the net capital every day
- Instead of being able to reconcile every day, every transaction has to be valid
- All cash transactions would have to be backed by cash at every transaction rather than daily

## Week 6?

- GME electric boogaloo 2
  - Roaring Kitty (Keith Gill) bought calls before he tweeted

### Pre-Market and Post-Market Equity Trading

- where and how?
- brokerages &rarr; BlueOcean (ATS: alternative trading system, matching engine/platform)
  - Thin market
  - No price improvement
- 4am - 8pm is when institutions start trading
- Retail investors in the USA can trade 24/5 (Saturdays and Sunday morning not included)

### New Texas Stock Exchange

- Previously tried
  - MEMX (members exchange)
- MyX Pearl, Long-term stock exchange
- Liquidity begets liquidity
- Why?
  - Circumvention of NASDAQ diversity explanation (EDI/DEI)
  - NASDAQ lost hundreds of southern (banks) listings to NYSE
    - Lack of minorities in those areas too
- Chicago to Texas is 3.5hrs
  - Expensive network
- NYSE
  - Prestige and requirements compliance
- After COVID state of NJ needed sources of revenue
  - Transaction tax
  - Every time you sell something you pay a tax, buyers don't
  - Exchanges threatened to move to leave NJ and move to Chicago
  - Exchanges have backup engines in other states to ensure that if something goes wrong there is a alternative system available
  - Liquidity shrinks due to higher inventory costs

Pro-Texas Exchange article

- Kurt Dew, part-timer lecturer at Northeastern University
- "Big exchanges failed to meet SEC goal of providing markets useful for investors"
  - Retail orders go to wholesalers and dark pools instead of the exchanges
  - Counter-point: misinformed and that exchanges are regulated bodies
- "stock markets are in shambles"
  - No they aren't, US markets have the most liquid, most traded, and the cheapest to trade

### European Markets

- Older continent
- Archaic?
- Many multiple exchanges
- No consolidation, prices are not always the best
  - USA: Nation Best Bid and Offer from all exchanges
- Latency issues
- Financial scale: european companies financed by debt not equity
  - Higher change of default

### Dark pools

1. Sub-penny price improvements
2. Some level of privacy, volume not shown until actually traded, compared to order-book exchanges which is regulated

## ITG Case

Hybrid traditional broker and technology firm. Value and execution service.

Agency only brokerage: don't do trading of their own, only a middle-man

The problem: during the previous year (2008), there was an influx of volume, but when volume fell cracks started to show.

Super dark pool.

- All institutional
- POSIT dark pool
  - Doesn't show anything
  - Size discovery facility; trades large transactions
  - Average is 300 on other dark pools versus POSIT 50,000 shares (you don't know it will be like that, 40% chance)
    - Most are mid-quote dark pools
    - Large institutions can trade their larger positions
    - **Pinging**: HFTs (anyone with the technology that wants to know) might be pinging dark pools to check for liquidity with small orders (1 share to buy and to sell)
      - The ping weighs down the average trading size
      - Usually one side active; no market makers because there's no spread to make money off of; the market maker would have an information advantage that they could use to manipulate the real markets
      - ITG dark pool may be dismissing any pings
      - Take the reset of the information to the market to back-run the orders
      - 20% of trading volume and no order books
    - More participants maybe because of less leakage?
      - Less leakage since each trade takes time to execute, whereby other dark pools are so low quantity signalling that someone is playing in that dark pool
    - Ample liquidity, does it take part in the trade itself?
  - Allocated Cost Efficiency: larger blocs, less trades
- ITG Revenue
  - What is brokerages and bundling?
    - Bundling of brokerage services such as access to affiliated Investment Banks IPOs, capital, and analyst forecasts affiliated
  - Struggling: compared to 2008 and earlier, in 2009 the market crashed and the trading volume swelled up which means commission revenues are down
  - discretionary volume: dark pool revenue is down, providing for IPOs
    - Customers only sends what they can and that has gone down due to other commitments
    - client wants: equity research / recommendations, capital, IPO access, execution management (ITG does only this)
      - Need to be affiliated to an underwriter to access IPOs
      - IPOs are lucrative because they tend to be underpriced; the price will pop; average 10% return
      - client views ITG as a way to preserve alpha, and other competitors as alpha generators
    - Investment Banks provide all of this
      - Also expects a certain requirement of volume for this access
      - IPO Primary market
        - Investment Bank sells IPOs to their clients
      - Secondary market
    - Brokerage bundling pros and cons
      - Cons
        - You aren't guaranteed the best for each of the categories
        - you have to weigh the tradeoffs based on the total cost
        - no comparative advantages
        - European commission undid the bundle of analyst recommendation from other stuff
          - The worry was downsizing or less analysis on smaller companies
          - What happened was that the quality of analysis increased (prediction of upcoming announcements)
            - Worse performers were dropped
      - Pros
    - Equity research
      - Possible that the equity research is more lenient on the company due to the conflict of interest
- Why did SEC stop crusade against dark pools?
- What does dark pool do to dark pools?
- ITG reputation went down after SEC and got acquired by Virtu after settling
  - Trident a big part of the infrastructure at Virtu
- What is ITG to do?
  - Focus on higher volume clients
  - Pulled out of overseas markets
  - DId not take up proprietary trading on their own account due to erosion of trust
  - Some clients wanted ITG to sell the insights, but ITG said no
- Project Omega
  - Seven months
  - It didn't look good to SEC. Settlement
    - Alleged that ITG would make the spread by trading
    - Alleged that ITG would encourage institutions to cross the spread so that ITG would get the full spread
  - ITG says it was for good
  - ITG would copy the trade of the dark pool on the exchange, and facilitate the sell in their own dark pool
    - ITG would try to bring liquidity from other exchanges to the dark pool market
    - It would place a buy limit order, and if it was executed, it would sell on POSIT
  - It's bad because
    - Information leakage
    - Making money off of the back-running
  - Argument for
    - The expert says it's not leaking because it's a partial limit order
      - If there are many limit orders, ITG's limit orders will blend in and no tipped off
      - ITG was doing it very carefully and even shut down the project
    - Price prediction based on the aggressor

### SEC Dark Pool Worry

- believe informed investors activity on dark pools hurt activity
- back in 2007-2008, chief economist for NASDAQ, Frank Hathaway, was testifying before congress; "if dark trading goes over 20% of all volume, hte markets will collapse." It's 40% of all volume and markets are fine
  - Rationale: they all believed price discovery was lost in dark pools
  - Then congress got worried about it and then told SEC to worry about it
  - Dark pools would've (not implemented) been added to National Best Bid Offer under $200k
- All dark pool restrictions got cancelled once academic research came out (as a draft) and then years later in a journal
- Zhu H 2014. Do dark pools harm price discovery
  - theory model
  - logic: informed traders are aggressive (short information), uninformed would not risk moving the price and be matched in dark pools
  - not going to get informed traders to go to dark pools since they do not care about the spread
  - only uninformed traders would go to dark pool (buy and sell)
    - institutions that would want to reshuffle their fund (index funds, mutual funds)
  - informed participants would all be on one side of the dark pool
  - back then, 4% chance of trading through dark pool
- Research: theory, empirical, experiments
  - theory: multi-story math equations
- Comerton-Ford, Putinins 2015; Dark Trading and price discovery
  - Empirical research backing up the previous theory
  - Concentration of uninformed traders meaning that noise removed and the informed traders remain on the exchanges
- Liquidity is harmed by dark pool
  - Less uninformed traders on exchanges means Informed traders are adversely selecting the market, meaning that market makers would increase spreads to compensate
  - Therefore retail price improvement gets harmed as well
- European regulator implemented MiFID II
  - Restricted dark pool trading (volume capped)
  - More dark pools opened up
- Dark pool trading adn information acquisition (Johnathon Brogaard and Pan 2022)
  - Dark pools do price discovery because of long-lived information
  - Other articles are about short-lived information
  - Since dark pool execution is slow, long-lived information (impression), that the price will increase over months, then dark pool trading might be beneficial since weeks to wait is okay. This might harm price discovery since the price is not impacted by long-lived information.

## Quiz 2H

You are an algorithm responsible for Virtu’s activity in SPY on BATS and BATS Y, two sister exchanges. Your task is to make money by market making and/or sniping stale quotes. You observe that the price of the e-mini S&P 500 futures has ticked down, indicating that SPY price is also about to tick down, by 2 cents.

SPY is currently quoted at 100.00 on the bid and 100.02 on the ask. The two-cent spread in SPY is typical, and you expect it to persist. There are:

    100,000 shares at the bid and 100,000 shares at the ask on BATS and
    100,000 shares at the bid and 100,000 shares at the ask on BATS Y.

BATS charges 0.0030 cents/share to liquidity takers and rebates 0.0028 cents/share to liquidity makers.

BATS Y is an inverted market; it charges 0.0010 cents/share to liquidity makers and rebates 0.0008 cents/share to liquidity takers.

Your technology is good, but Citadel’s is slightly better. Because of this, while Citadel’s first order will be faster than yours, its second order will be slower than your first.

In no more than 5 sentences, please explain what yours and Citadel’s next steps should be and why.

Answer:

The next spread is 9.98 - 10.00. Citadel will go to BATS Y and make money from the liquidity taking fees (short at 10.00, buy back at 10.00). Virtu will have to go do nothing because they would've had to short at 10.00 and buy back at 10.00 on BATS which would be super expensive.

## Quiz 2J

We have 200,000 shares at the ask (100.01, buy at 100.00) in the front of the queue followed by 10,000 shares. The e-mini S&P500 futures went up indicating that SPY will tick up by 2 cents.

Try to buy the entire ask of 210,000. Fees are 0.003 CENTS / share to takers and rebates are 0.0028 CENTS / share to makers.

10,000 (0.01 - 0.00003 - 0.00003) - 200,000 (0.00003 - 0.000028) = $99 assuming that you only reprice the 200,000 shares that were acquired instead of divesting them.

Clarifications: buying and selling to yourself is legal, but _churning_, buying to yourself for the purposes of increasing volume and creating hype is illegal to the regulatory body. It's legal and 3% of the data shows self-trading.

## Peter Hayes Institutional Trading

1995 tsx
Index products group

Index used to manage the index themselves before 1998.

Credit Leone's

Pq 1995 referendum.

1999 TD

New crest acquisition. Most of his co-workers got fired.

Index and portfolio trading. Seagram vivendi merger.

2023: equity #1 in Canada. New issues. Focused on Canada-ontario. 3% of global vs us 63%.

By 2023 pension funds were underweight on Canadian equities.

RBC and

Merger with Callen. Revenue synergy not talent acquisition like before. No overlaping this time .

Reverse takeover both times.

Jennie Aldegereis - us

Jame Boch - London

Other people just care about feds and interest rate.

Equity people always have a story in the terminal.

1980 event:  bree-ex
Tse 300:

Gold company called bre-ex which claimed it had a massive gold find in the Philippines. Analysts were rejecting billions of dollars of revenue.

Bree-ex went from 10cents to 10th spot. When a certain size and length, auto benchmark inclusion just when scrutiny was rising. Decision was made by the index committee to bring the stock in.

Next day bre-x was halted. Rumour: not going in. Tsx will not be added to the index. Tsx president read the headline and called ahead that the stock isn't going in.

Index committee hold emergency meeting with president. Rolland says it's a fraud and not going in the index. Index committee still put the stock in the index. 2 weeks later stock is added in the index, index funds have added, company imploded. Tsx bought in. Issuer and broker conflict of interest. Therefore s&p was brought in to manage the index.

Chief geologist fell out of helicopter.

Samples were being salted with gold. Based on sample the vein might be bigger.
Their analyst just went over the vein instead of going on the ground.

S&p did not like how tsx did it. S&p had public rules but the decisions are privately made.

Many analysts were putting buys and then telling clients it's a piece of shit.

Bloomberg terminal pre-release. Automatic class action lawsuit. Company failed to report in a timely manner.

AML: 29 years and everyone was sad after hearing that. Accused of not having sufficient AML practices. TD was allowing mexican drug money through the US. There were people on the inside who were arrested for allowing the funds to come in.

Started market structure podcast called _Bidout_. Had the professor as a guest speaker. Weather patterns impacting market making activities. 63 episodes.

Dark pools. Early 2000. Reg anx. Forced market places to be linked. In the us you always get best price. National best bid and offer. Nyse and Nasdaq lost monopoly.

Tsx lost its monopoly on 2007. Pure trading. Order protection rule in Canada is stronger because all best bids and offers must be satisfied whereas in the us only the top best before trading another market at another price.

Various broker dealers launched dark pools. Consortium pools launched. In Canada only one launched known as Matched Now.

Difference in Canada is that material price improvement against the bid or ask must occur in a Dark pool. Order exposure for retail. Launch now is owned by CBOE and was posit. Used for mid point trading. Fair access rule.

US dark rule: no price improvement needed.

Broker sponsored dark pools. In the early 2010s, almost every one suffered regulatory fine for not informing clients enough. Either trading prop. In us discrimination is allowed for trading preferences. Credit Suisse cross finder dark pool fined the most.

If a company just put their order on the exchange theres so much leakage that the spread moves. Best way to minimize that leakage is to hide it in dark pool. Need to spread on all avenues. Min quantity on all orders prevents against pinging. Conditional is that I'll accept this order if everything else is not filled. Buy side evolution against back running. HFTs are smartest people in the room who use all the rules to get the biggest benefit. The rules can be bent to hft benefits which is annoying and has happened on exchanges.

Rules in canada: proprietary cannot trade against orders with less than 5000 shares. Firms like TD made routing protocols to ensure retail got best execution. The routing would know where the other orders are going. This would avoid the ATS.

Flash boys shined a light on the plumbing and gets annoyed at people having errors in the book.

Firms were using the tape compared to the feed from the exchange. The hero was Brad and Ronin. Typical Michael Lewis 60mins. First chapter was leaked.

Everyone who read that book didn't know it was happening. Everyone then wanted to understand market structure. Needed someone in Canada. Got to meet head traders of other firms. TD plays a big part in that book. TD Ameritrade. Sold to Schwab and td owns 10% of Schwab. Chris Snaggy made arrangements with wholesalers for the order flow.

Brokers receive lots of market orders. Limit orders rest on an exchange. Market orders go to a wholesaler who price improves on the best bid or offer. Very small price improvement. Hard to back up the fact that the price improvement is significant. Ameritrade advertising is percent orders that get price improved. Broker gets that rebate check which is a payment for order flow. In any other industry it would be called a kick back. Uninformed retail means that both sides get action. Institutions segmented out. Non centralized trading which helps with price discovery and capital formation. Instead he thinks best execution should be to always search for the best price rather than routing to wholesaler. Each order should receive best execution and people took responsibility to do that. Retail missed dark pool orders. If RobinHood got cut out by wholesalers they'd be screwed.

Retail is having it too good. They don't have to pay the infrastructure to interact. 16 exchanges and 40 seek pools is stupid. Should just be one. Too much redundancy. Regulations don't want NASDAQ collusion from happening again.

Nyse market glitch.

Chevron ruling. Handcuffs agencies from creating rules that aren't codified in Congress. Chevron says  agency is the expert when the law isn't clear on the issue.

Asian market structure. Overnight trading happens in south Korea. 22% of leverage ETFs is in Korea.
Us ATS: BlueOcean ats. 8am-4pm. 24 hour trading is so bad but it's coming from crypto trading and everything. TD Ameritrade started this on 24 symbols as an ad in SuperBowl. In 2023, RobinHood and IBKR decided to allow all symbols. For these 24 symbols, there's a popping futures market. Therefore, the price inference was good enough for price discovery rather than the other symbols which would be the price discovery during the overnight hours. Transactions that occur from 8pm - 11:59pm aren't recorded.

Retail order. Parent and child order until GameStop, roaring kitty, and Reddit. If so many people bought GameStop the wholesaler got rolled.

Nvidia contributed to 15% of world returns.

End of day auction mmmost liquid.

$100B+ IPO has not happened in tsx since before 2023. They go to usa because it's the holy grail.

Biggest joke was ARM listing as ADR and not in the UK.

Constellation executive sold before capital gains tax hike.

Against zero commission trading because retail just trades without spending some time thinking about of a cost-benefit. Gamestop results in destabilization, short-sellers, and results in losses.

## Deutche Borse and London Stock Exchange

Deutsche Börse: pronounced as doiche borsa

Hedge funds do not want Deutsche Börse to acquire LSE but rather take debt for a dividend roll-up, and then they campaign other shareholders to pay the dividend roll-up.

The synergy would have been economies of scale. Mergers not good for everybody. In this case,

December 12 2004.

- Chris Gibson-Smith, Chairman of the London Stock Exchange (LSE)
- Seifert Werner, Chief Executive of the Deutsche Börse (owns Frankfurt stock exchange) submitted third bid to acquire LSE for 1.35 billion euros ($2.6B)
- Clara Furse, new chief executive, rejected it (undervalued)
- Although board still in agreement, hedge funds caught wind of acquisition talks and acquired from below 5% to well over 30% and taken lead in opposing the bid, demanding a dividend rollup instead
- Euronext (Paris exchange) also waiting to make a bid on the LSE

### History of Deutsche Börse

January 1993, holding company to amalgamate Frankfurt's exchange and securities depository (a securities depository is a book keeper of the shares without needing to physically transfer shares).

Founding CEO Ruddier Von Rosen brought together all eight regional exchanges (Deutsche TerminBörse (DTB), Germany’s futures and options market, the country’s clearing organization and a data processing company).

The exchange "run more like an electrical utility than a financial outfit." In 1993, Frankfurt had tiny market capitalization of its listings (as a percentage of GDP).

In 1993, the three biggest exchanges (Berlin, Hamburg, Hanover and Stuttgart) were still quoting their own prices instead of moving from trading on the floor to computers as desired by the three biggest banks (which owned 30% of Borse). The differences in prices put off international investors and they turned to London's SEAQ International, which offers big blocks of German company shares.

> Foreigners complained that listing procedures were clumsy and expensive, and that the big banks (which in effect ran the Börse) favoured cash markets over derivatives

Cash market: investors receive shares immediately in exchange for cash. Basically the stock exchange.

> Seifert wanted to develop computerised share trading system to cut costs and concentrate dealing in German equities currently spread over eight different exchanges. His aim to make trading in Deutschmark securities quicker and cheaper was nowhere easier to achieve than in Germany

Needed to compete and beat London at this, especially the block trading. American Electronic Trading Systems and NASDAQ were trying to break into European markets. Trade Point, for British equities, was about to open in London.

After selling properties and cutting loss-making activities to finance (DM150 million or $76.7M euros?) the new trading system, Xetra (Zeetra) was launched in 1997.

Pan-European stock exchange alliances were preferred to mergers, but Seifert felt that mergers would be the best way to cut costs. In 1998, Frankfurt and Swiss counterpart (SBF?) merged to form Eurex, which poached the majority share of business in German government bonds (Bund) from London's Lifffe derivatives exchange.

Eurex was a joint venture to create electronic trading and clearing platform for options, futures, and other derivatives contracts. They believed that exporting the tech to make it the world standard was essential, so they sold it to Hong Kong's stock exchange, and in-sources the operations of Vienna, Dublin, Helsinki, and Chicago. Other customers: Chicago Mercantile Exchange, the São Paulo Stock Exchange, Bovespa, and the Toronto Stock Exchange.

Clearstream International, a specialist in clearing, settlement and custody of securities across borders, was created in 1999 as a merger between Deutsche Börse and Cedel (cross-border securities depo located in Luxembourg). Siefert acquired it for $1.4B in 2002.

### LSE Merger Talks

1995 Seifert hired McKinsey, which he used to work for nine years. First wanted to create a European index with LSE, but failed because each had ties to their own competing indexes.

In 2000, Deutsche Börse wanted to rename itself as Euroboard and go public. Paris could not join in but French, Dutch, Belgian, Lisbon stock exchanges announced merging into Euronext.

Gavin Casey of LSE approached Deutsche Börse offering full merger. Euronext proposed 50/50 merger, but LSE wanted Frankfurt.

> Blue chip stocks would be traded in London subject to London regulations, while the high-growth market would be in Frankfurt under German rules

Deutsche Börse had the approval, LSE did not. OMX, Stockholm Stock Exchange, started hostile takeover.

Synergies: Tech transfer, diversification coverage, cost savings; Two main synergies: cost savings and revenue synergies.

### Deutsche Börse IPO

- February 2001
- 23 times oversubscribed
- self listed
- compressing domestic stock and futures exchanges (and their respective clear houses) into a single company
- combining cash and derivatives with indexes and clearing?
- 2001: Eurex helped attatin 21% of the total trading volume of the European stock exchanges (highest trading volume of any international derivatives exchange)

> Chicago Board of Trade and the Irish Stock Exchange. Clearstream, which operated clearing and settlement as well as custody services for equities and international bonds, served 94 countries and processed around 500,000 transactions per day.

Hailed as main provider of trading solutions for financial markets. Set up internet-based trading networks to strike back at upstarts such as Nasdaq Europe. In June 2001, started trading 200 US blue chip stocks.

Had to shut down Neuer Markt, which was a small companies exchange (junior) to response to Nasdaq.

> after several of the companies collapsed in bankruptcy or financial scandal

> In many politicians’ eyes, exchanges, like airlines, were symbols of national or even regional pride

Seifert favoured Euro-SEC but securities regulation and supervision was chaotic, and harmonization of rules made negotiations complicated.

In October 2001, Euronext bought Liffe and joined Euroclear.

### Final LS Bid

All cash bid, 23% above Friday closing price on LSE on 6 December 2004 (1.35 billion euros or $2.6B all cash no debt financing). Clara Furse's rejection came within hours. Borse made more than 2x the profit as LSE. Worry of Frankfurt was low volume of equity trading, due to small quoted Germany companies and weak IPO market.

LSE was leading in low costs, and SEAQ avoided stamp duties on share deals (tax on share transfers). Market makers can quote two-way prices (bid-ask spread) for business in larger amount, so big blocks of stocks can be fed only when a counterpart exists. In 2004, LSE had 293 IPOs, or 80% of Western Europe. Mostly cash market, but derivatives is where the volume growth and higher revenues would come from.

Synergy of the merger. Frank Hartmann:

> Deutsche Börse could bolster efficiency and reduce fees for customers, which have become a bone of contention in Britain.”

[Exchange in London Rejects Bid](https://www.nytimes.com/2004/12/14/business/worldbusiness/exchange-in-london-rejects-bid.html?searchResultPosition=1)

> The question of costs is particularly sensitive for British investors who have been pressing the London exchange to lower its transaction fees. "When you are looking at infrastructures coming together, it's not just a question of price," said Ms. Knight at the Association of Private Client Investment Managers and Stockbrokers in London. "We are going to be looking at the cost benefits and how it's going to develop strategically

### Merger Announcement Return

- target company being acquired goes up
  - usually enough interest and bargaining power
- acquirer loses value, about 3% on average
  - acquirer tends to overpay
  - winner's curse: when the price is not set, easy to overpay

- New academic study to understand the long term affects of mergers.
- Market doesn't fully price the long-term effects
- Until 2006
- The problem with measuring over 3 years, is the other strategies of the business, which might not be merger related
- The longer you wait, the fuzzier the causation effects
- 3 years is long, so hard to believe it's about the merger effect
  - When you just look at mergers, companies that merged lost value over the next three years
  - When looking at failed mergers (regulatory, exogenous): companies that want to buy but don't succeed. Those companies ended up performing even worse
  - Therefore, mergers likely to create value (slows down loss of value)
    - Also tells us companies that are looking to merge are already on the decline

### Long-term Stock Exchange

Caters to long-term investors, not taken off.

### Firm Leverage

- typical firm in North America are underlevered
  - In Europe, mostly debt backed
  - Study done to increase debt by 3.5%
- this is due to volatile future cash flows
- higher debt, means higher interest, which could hurt if there is a decline in revenue

Large cash balance, tends to be misused. If firms have large cash balances, it's not because of great projects to invest in, but rather the firm has nothing to invest in and is value destructive. Firms with large cash balances are un-liked.

### Hedge Funds and Deutsche Börse

In the first half of 2004, Deutsche Börse shares underperformed the DAX index, and hedge funds like: Children's Investment Fund (TCI) in London, Atticus Capital in New York, and RIT Partners (Lord Rothschild) began buying in late autumn. RIT Partners sent Lord Rothschild to oppose the LSE bid and his son was part of Atticus.

TCI managing partner Christopher Hohn warned against the bid as the bid was for 25 times earnings whereas Deutsche Börse was trading at 9. Board supervisory chairman Rolph Breuer was also head of Deutsche Bank's supervisory board which owned 6.8% of LSE.

After the deal was proposed, TCI and Atticus bought heavily to own 12% of the company. "Stock was undervalued, poor corporate governance." Ironic since Deutsche Börse was ranked second among all DAX on the 2005 survey of governance practices.

TCI wanted a shareholder vote, but Seifert insisted that German corporate law did not dictate that the takeovers needed a shareholder meeting. Only a change in corporation’s articles of association would require a shareholder meeting, or vastly different business acquisition. Also the maximum price would have to be shared. The fund wanted Deutsche Börse to buyback shares and return money to shareholders. Deutsche Börse was the only AA- company in Germany even after the share buy-back was announced.

By February 2005, Deutsche Börse price went up by 27% and executives were hoping the hedge funds would have sold but TCI began garnering support from Fidelity (10%) and Merrill Lynch (3-4%) and increased their own stake to 7.9%.

In Germany, a minority shareholder needs to hold a required 5% of shares for only three months to demand a shareholders' meeting.

Instead of losing in the meeting, Seifert announced a dividend and buy-back programme by the end of 2007 and withdrew the offer on March 6th 2005. Debt-equity ratio went down from 12 to 9% in 2004.

- [2005 balance sheet](https://www.deutsche-boerse.com/resource/blob/308024/9d1b5172aebccb5cb4360b8296074c00/data/konzernbilanz-2005_en.pdf)
- [2006 balance sheet](https://www.deutsche-boerse.com/resource/blob/36788/5472fa8ae5d6aeabe0e04d858564f452/data/gb-gdb-2007_en.pdf)

Hedge funds tried to remove supervisor board, and although the discharge vote had a 68% approval rating, TCI had dropped the proposal two days before AGM. Three board members resigned, including Breuer and Seifert who left the company immediately. Reto Francioni became the new CEO?

> On 9 August 2005 the Börse’s shares went up 2.79% to €73.72, an increase of 22% since the ousting of Seifert in May, with investors welcoming signs of a more streamlined strategy underpinned by a share buy-back

BaFin, Germany's financial sector supervisory board, had affirmed that certain shareholders acted in concert. The board did not properly represent the overseas shareholders. 21 board members, a third were employee representatives, and the reset were owned by Germany's largest financial institutions; Deutsche Bank, DZ Bank, HVB and Dresdner Bank. Such characteristic ties were not uncommon in German boardrooms.

If a pan-European merger took place, which regulator would supervise the combined exchange (Euronext, The Swedish OM Group, the Australian bank Macquarie, and even the Nasdaq were rumoured to be interested)

Britain’s Financial Services Authority would not easily give up oversight.

### Deutsche Börse, Euronext, NYSE Mergers

[TCI demands vote on Börse](https://www.fnlondon.com/articles/tci-demands-vote-on-borse-euronext-merger-20060830)

> It is the second time Hohn has been linked with such a vote. In May, a company associated with TCI called for a vote on the principal of a European merger, which failed in favour of a "merger of equals" agreement with the NYSE.

Hohn wanted to merge with Deutsche Börse instead, probably because he owned both companies and the amalgamation would be a quasi-monopoly with higher derivatives trading profits.

> The largest Euronext shareholder is hedge fund The Children's Investment Fund Management, with 8.5%, according to shareholder register Citywatch

[Banks lift Euronext stakes ahead of Deutsche Börse vote](https://www.fnlondon.com/articles/banks-lift-euronext-stakes-ahead-of-deutsche-borse-vote-20060420)

[TCI cuts Deutsche Börse stake as hedge funds exit](https://www.reuters.com/article/deutscheboerse-funds-idUSL296195720090402/)

April 2009.

> The hedge funds were warned then to "respect management's responsibility to determine and implement the strategy of the company" or risk having their voting rights revoked, two people familiar with the matter said.
> ... to consider a breakup or merger, including a deal last year with the NYSE that never came to pass

NYSE Group offered 8 billion euros to acquire EuroNext due to NASDAQ trying to acquire LSE which outbid the rival offer from Deutsche Börse.

[NYSE and Euronext 'set to merge](http://news.bbc.co.uk/2/hi/business/5002438.stm)

Then Deutsche Börse raised bid to 8.6 billion euros but NYSE Group and Euronext penned the merger agreement regardless.

Deutsche Börse still tried to merge in 2008 and 2009 with NYSE Euronext to create the largest exchange in history but was blocked by European Commission on the grounds that the resulting company would have a quasi-monopoly (90% volume) in the European financial derivatives traded globally. Appeal was unsuccessful (2011). [source](https://ec.europa.eu/commission/presscorner/detail/en/IP_12_94)

[Deutsche Börse, NYSE Talks End, No ‘Conclusion’](https://www.bloomberg.com/news/articles/2008-12-07/deutsche-boerse-nyse-talks-end-no-conclusion)

[DEALTALK-Deutsche Börse reignites exchange merger talks](https://www.reuters.com/article/markets/stocks/dealtalk-deutsche-boerse-reignites-exchange-merger-talks-idUSLNE4B800Y/)

[NYSE Euronext-Deutsche Börse Merger: Let the Dance Go On](https://www.intereconomics.eu/contents/year/2011/number/4/article/nyse-euronext-deutsche-boerse-merger-let-the-dance-go-on.html)

On 20 December 2012, the boards of directors of both Intercontinental Exchange (ICE) and the NYSE Euronext approved an $8 billion acquisition of NYSE Euronext

### Hindsight Review

[Hedge Funds Not Playing NYSE?](https://www.institutionalinvestor.com/article/2btfmn06fxlva08cl52bk/innovation/hedge-funds-not-playing-nyse)

Apparently Seifer's plan would have made him look like a genius due to creating a successful and powerful exchange business in the world.

[Hedge Funds Draw Critics in Europe's Market Wars May 2006](https://www.nytimes.com/2006/05/25/business/worldbusiness/25hedge.html)

> The London Stock Exchange is now worth about twice Deutsche Börse's offer last year, at £2.57 billion ($4.81 billion), and Nasdaq has purchased enough of a stake in the London market to make it tough for anyone else to take it over

Regulators threatened to revoke the rights of the activist investors. The cash distributions reduced Deutsche Börse's ability to bid for Euronext.

In hindsight, the London Stock Exchange Group is worth 51.4B pounds or 60.86B euros and Deutsche Börse is worth 36.83B euros. The merger would've been very successful given the power of hindsight. Even with a yield of 2%, that's an additional 14.72B or 51.55B euros. LSEG used to be smaller, but now is bigger or basically equal. By withdrawing the bid offer, Nasdaq was able to take a bigger stake and the stock price decimated the offer of the previous year.

### Hedge Fund Activism, Corporate Governance, and Firm Performance

August 2008; Authors: Alon Brava, Wei Jiang, Frank Partnoy, and Randall Thomas

In two-thirds of cases, activist hedge funds propositions regarding strategy, operations, and financial are partially or fully successful. Hedge funds are non-confrontational and the return on activism announcements is approximately 7% in a year without reversals. Target firms experience increases in payout, operating performance, and higher CEO turnover after activism (+10%) and lower CEO pay (~$1M).

Unlike mutual funds and pensions, Hedge Fund activism comes with influence over the corporate board and management. This is because of HF managers have less regulation over capital and high incentives which also means high concentration in a smaller basket of companies. Hedge funds target value firms with low market value relative to book value, and are profitable with sound operating cash flows and return on assets. Target companies have lower payouts.

Hostile takeovers (hostility includes a threatened or actual proxy contest, takeover, lawsuit, or public campaign that is openly confrontational) is less than 30% of cases. They are not short-term holders and they do not seek control. Average 9.1% and up to 31.5% stake. Reliance on management cooperation or shareholder cooperation, which is why high institutional holding and analyst coverage stocks are targets. Hedge funds often coordinate (22% of cases, by filing Schedule 13Ds) or act in tandem.

Returns depends on the actual activism not just stock picking.

### The Real Effects of Hedge Fund Activism: Productivity, Asset Allocation, and Industry Concentration

May 2013; Authors: Alon Brava, Wei Jiang, and Hyunseob Kim

- low concentration manufacturing
  - more competitive industries
- increase in production efficiency within three years
- efficient capital redeployment
  - plants that were sold had lower productivity but experience greater improvement in the hands of the new owner and its best if the hedge fund is invovled
  - more competition indicates better matching chances
- Workers do not benefit
  - reduction in wage hours, stagnation in wages, although labour productivity goes up
  - increase in labor productivity is only significant in highly unionized industries
- return on assets performance measurement from 2,000 activism events (1994 to 2007)
  - ROA versus control group in the same three-digit SIC industry and year adjusted for firm size and age
  - Clear V-shape correlating with year of targeting
  - Three years after intervension, the firm is outperfoming its previous pre-activism levels
- Opponents think that hedge funds are short-term focused or only do financial engineering and deny real term value creation
  - such as extracting payouts to shareholders through leverage (lol)
  - hedge funds have a two year holding period
- Within two years of activist intervension, close to 26% are delisted or acquired which is twice the normal attrition rate of Compustat. Previous research was not able to account for this potential surviorship bias whereas this research looks at the performance of plants which still exist regardless of if the company was acquired or delisted.
- To dismiss claims that hedge funds were just scoping out companies on the right path already, focus was on confrontational activism
- To refute stock picking, performance of plants that belong to target firms’ non-primary business segments were examined
  - stock picking would only look at company's that are about to perform well due to their primary business not their non-primary business
  - also looked at firms that switched from filing 13G (passive) to 13D (activist stance) which means that there should've been no additional performance

> Additional tests refute alternative explanations that attribute the improvement to management’s voluntary reform, industry consolidation shocks, and hedge funds’ stock picking. The overall evidence is consistent with a real long-term effect of hedge fund intervention on target firms’ fundamentals.

## Quiz 3H

In a recent article, Kurt Dew states that legacy markets like the NYSE and Nasdaq have failed institutional investors. He cites the proliferation of dark pools as evidence of this failure. In no more than five sentences, please provide two arguments, one consistent with this view and one contrary to it. Support your arguments with evidence where possible.

## Maker Taker Fees

- why do makers get paid and takers pay?
- Before, both makers and takers pay a fee
  - Now, only takers pay a fee, makers are
  - 9 miili fee (one-thousandth of a percent)
- no good reason
  - reason is because someone at some point introduced them and everyone started doing it
  - difficult to go back
- After 2000s, the government wanted new markets
  - Instanet popped up (ECM)
  - No one was coming, so a rebate was provided on top of the spread and the fees were coming from taker fees
- Government put a cap on rebates at 30 mill

## Citron and RobinHood

- In early 2021 DTCC, a clear housing, called RobinHood to increase collatoral ($3.5B)
  - RobinHood couldn't find the money, so had to halt purchases
  - Retailers think its a conspiracy
  - DTCC asked collatoral because a lot of traders were trading on margin, which means that the Broker should be backing the purchase, not the trader who could go bankrupt if the stock goes down. DTCC doesn't want RobinHood to go bankrupt to relieve itself of the share obligation. With t + 2 settlement, 10% collatoral, however with voltailte stocks, the voltaility was increased to 100%
  - DTCC is liable if RobinHood goes bankrupt
  - A lot of Robin Hood investors were trading on margin and many of them used previous purchases of GameStop as collateral. Billions of dollars was potentially in-loans. DTCC was worried about volatility of GameStop and if it comes down, the margin loans might default, which might bankrupt RobinHood, which means that DTCC would be on the hook for the trades as it is expecting RobinHood to front the cash for the shares.
- shorts are good for the market, however it was found that short sellers ride the bubble before shorting the stock

### Commonwealth of Massachusetts  Sues RobinHood

- Gamyfying the investment process
  - Prized stock when they open an account
  - Confetti when they buy or sell the stock
  - Increased trading volume
  - Users with lower financial literacy preferred these brokers
  - Suboptimal buy/sell decisions
- For not options were unprofitable
- commonwealth of massachusetts lost the lawsuit
  - Court dismissed the petittion because the way the app is oraganized is freedom of speech

### SEC and RobinHood

- failure to disclose PFOF (2020)

### FINRA and RobinHood

### Retail Investors Trading and Securities Brokerages INdustry

- Returns of the stocks are not good over the time horizon retailers trade them
- Herd menality trading
  - RobinHood encourages herding by showing the most traded stocks
- Retailer investors in aggregate perform the same as the market

### Wallstreetbets

- before GME, wallstreetbets would have somewhat good due diligence reports, but after GME, the speculative behaviour increased

## Insider Trading Cases

### Texas Gulf Sulfur

- Copper mine in Timmins, ON
  - Usually keep the announcement hush-hush and buy land at low prices
- 1964, announce access
- Looking into rules of insider trading
- Geologist Darke: tells friends to buy TGS, didn't buy himself
  - Tipping
- non-public information: not widely disseminated to the public
  - _public dissemination_: dependent on information technology
    - For example, having to wait for the next day's newspaper
    - Nowadays, it can be in a mere number of seconds
  - _Material_: Significant information that changes fundamentals
  - _Misappropriated_: duty to the company to not disseminate the information
- TGS PR manager, Crawford tried to time purchase after announcement, however announcement was delayed

### Insider Trading Exampels

In insider traders, people who aren't part of the company but are providing services, they are called temporary insiders.

If you overhear something and you don't know the person, then you can trade on it.

In some professions, there is no fiduciary duty.

If there is a opaque/long chain of tipping, it's not insider trading because it's no really possible to tell if the information is from legal or illegall sources.

### Rajat Gupta

- Tipping

### Martha Stewart

- Acting on a tip on a broker
- Convicted for perjury
- Worked as a broker before she got popular
- iClone
- FDA rejecting iClone, broker found out and sold beforehand
- Mikanavich and Thaniel
- Thaniel calls Martha Stewart
- Cooperated with SEC to avoid charges
  - They were tipping
  - They defrauded their client
    - Duty of privacy and fidiuciary duty since Sam Waxel would end up selling at lower prices due to liquidity from another client
- Public was outraged because of ??

### Unfairness over Price Discovery

- Famous theory model that says if insiders trade freely, market makers are adversely selected and widen the spreads
- Some market participants will not trade as much
- Based on previous data, before insider trading laws, the insider trading was so small, that it didn't lead to anything toxic, but then again spreads were already wider
- Ethics argument:

## How do Canadian Brokerages Make Money?

- Routing retail flow to certain exchanges

## Congressioanl ETF

- Issue: 45 day delay
- Issue: these trades are mostly from blinded trusts, which defeats the entire purpose of the ETF
  - Yes the disclosures of blind trust exist
