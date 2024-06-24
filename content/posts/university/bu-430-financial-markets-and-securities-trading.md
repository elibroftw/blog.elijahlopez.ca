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
  - Circumvention of NASDAQ diversity explanation
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

Clarifications: buying and selling to yourself is legal, but _churning_, buying to yourself for the purposes of increasing volume and creating hype is illegal to the regulatory body.

## Short Report 2 Answer

A lot of Robin Hood investors were trading on margin and many of them used previous purchases of GameStop as collateral. Billions of dollars was potentially in-loans. DTCC was worried about volatility of GameStop and if it comes down, the margin loans might default, which might bankrupt RobinHood, which means that DTCC would be on the hook for the trades as it is expecting RobinHood to front the cash for the shares.

## Peter Hayes Institutional Trading

Wednesday, July 3rd

## Deutche Borse and London Stock Exchange

Hedge funds do not want DB to acquire LSE but rather take debt for a dividend roll-up, and then they campaign other shareholders to pay the dividend roll-up.

The synergy would have been economies of scale. Mergers not good for everybody. In this case,
