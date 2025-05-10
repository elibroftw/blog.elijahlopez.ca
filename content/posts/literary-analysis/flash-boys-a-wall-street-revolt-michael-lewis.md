---
title: "Flash Boys: A Wall Street Revolt by Michael Lewis"
date: 2024-05-28T16:05:02-04:00
draft: false
tags:
  - finance
  - university
  - literary-analysis
author: Michael Lewis
---

This book was a reading  as part of the course [Financial Market and Securities Trading](/posts/university/bu-430). These notes are not just from the book but also contain the context behind the story, for example what the HFTs were doing between Chicago and New Jersey.

The notes are not organized at the moment, but you should be able to go through them within an hour or so. If you stop at a chapter, bookmark the chapter's permalink (hover mouse over the chapter to see a link icon).

### Flash Boys Chapter 1

- Dave Spivey - Spread Networks
- Milliseconds matters (millions of dollars)
- Connecting Chicago futures exchange (CME in Aurora) to NASDAQ exchange
  - E-Mini Futures: smaller than the future price meant for anybody
  - SP500 E-Mini futures is one of the most frequently traded asset and definitely the most traded futures contract
  - Arbitrage: shorting futures contract not required
  - we buy the SPY ETF, but now what?
  - **Latency arbitrage**: buying the ETF very quickly when the futures contract moves, and sell when the ETF moves
    - Buy at a price between the bid-ask spread, ideally the mid-point
    - Sell at a price between the mid-point and the ask
    - You don't just have to be first to buy, but also be first in the limit sell queue to begin with at every possible price level
      - Lots of risks: adverse selection, high capital requirements
      - "picking up pennies in front of a steamroller"?
    - When risk is too high, market makers will happily move the spreads
  - Futures contract lead the market and are traded with leverage
  - This arbitrage hurts market makers (adverse selection), therefore, market makers also want to get on the most optimal fiber optic cable
  - market maker has always made money
- Fiber optic cable went through mountain which was difficult
- A year later, microwave network was implemented which was faster (30% faster than spread networks), but not available for all 200 firms
  - Government approved spectrum/frequency. Only 15 firms could use this.
  - Not many bandwidth in a microwave
  - Microwave links connect all exchanges nearby (Toronto to CME, European markets)
  - Microwaves slow down when there is rain. You can collect data from weather stations and see the difference in market quality when there is rain and without
- Telecommunication companies (Verizon) had no idea the power they had
- The old fiber optics from Chicago to New Jersey which weren't straight themselves were innovations since they improved from copper wires

### Chapter 2 - Brad's Problem

- Brad Katsuyama, RBC employee, WLU grad
  - RBC engaged in agency trading, which means executing trades on behalf of clients
  - Got sent to Wall Street, NYC at 24 in 2002
  - Middleman between investors to trade large quantities (millions) of shares
- RBC, ninth biggest bank in the world at the time, but no name on Wall Street
  - did not make bad subprime loans to Americans
  - nor did it peddle subprime mortgage securities to ignorant investors
  - People in Canada always say US people are paid too much
  - But that was because RBC is just an afterthought, a nobody
- RBC acquired Carlin for $100M due to being late to changes in the market
  - Carlin’s CEO Jeremy Frommer was swinging a baseball bat
  - “They were like, ‘Yeah, I cover [hedge fund giant John] Paulson and we’re tight.’ And you’d call Paulson up and they’d barely heard of the guy.”
- One day, an investors wanted to sell 5 million shares after a company had a buy offer for a bit less than $4 a share. The bid and ask quantities were at 1 million. He ended up losing money by selling less than 3.70 as if someone was reading his mind
  - Whenever he would enter an order, the liquidity would vanish and he'd have to buy at higher prices or sell at lower prices (e.g. 100,000 shares of AMD)
- When Brad first started trading, humans would be processing the orders, but now it was run using a matching engine
- You could trade the same stock on: BATS, Direct Edge, Nasdaq, Nasdaq BX, and etc.
- Maker-taker model. Crossing the spread classified the person as a taker who was charged fees and the maker would get paid fees. On BATS (Weehawken, New Jersey) / Secaucus, it was reversed
- What the hell is Getco (10% of US market at the time)
- Rob Park: combined Brad's trading ideas into an algorithm that would buy at a trigger (offer greater than historical average of the amount offered. i.e. a thick market)
- Golden Geese programmers were working on dark pool
- HFT would pay to be in the dark pool
- Flash orders: exchange would flash orders to the HFTs before the order hits the books
  - New York senator Charles Schumer sent a letter to the SEC about this
  - HFTs know that informed traders would never show that information, so of course those traders are uninformed
  - This was self-selection, the exchange doesn't do it for you
  - Why would anyone do this? You would flash a marketable order that you think would be serviced by the market providers
- former Deutsche Bank software programmer named Billy Zhao, a former manager in Bank of America’s electronic trading division named John Schwall, and a twenty-two-year-old recent Stanford computer science graduate named Dan Aisen.
- Golden Geese: Chinese programmer named Allen Zhang
- RBC wanted its own dark pool,
  - RBC is too small
  - cost ($4M) too much to operate the dark pool
- When orders went to exchanges one at a time, the market would exist, but when the orders went to all exchange, the orders would disappear
- 100% of BATS. Why? Rob's theory was that time/distance delay was involved. Because BATS was the closest to the office. When they built time delays into the program the orders would reach all exchanges at the same time and be cleared. Someone else was using the differences in time to take front-run. When the HFT firms found that the order filled the entire quote, they basically can connect the dots that someone will be buying from other exchanges as well at that quote. Therefore, front-run the buyer and the buyer experiences slippage.
  - How do the HFT orders come first before the RBC order?
    - The HFTs have shorter fiber optic cables compared to RBC, where the cable lines go around manhattan before they go directly to new jersey.
    - HFTs also had laser links and superior technology
- Misaligned incentives: brokerages paid to send orders to some exchanges and billed for other
- Mike Gitlin- managed T. Rowe Price
  - Using _Thor_, RBCs time delay program, saved $29,000, a tenth of a percent which would be $160M+ daily on the total US stock market volume
- Is it bad or good?
  - Front-running itself is illegal and is not what's happening here (back-running)
  - Pension funds could also be the clients
  - Front-running: when the brokerage sees an order from a client and buys it and sells it at a higher price. Fiduciary.
  - The right word is called **back-running** or **scalping** but it could just be quote **re-pricing**
  - Why is a good thing
    - offers more liquidity to the market
    - incentivize market makers to lower spreads because the HFTs are taking lowering the adverse selection costs and risks from the market maker because the HFTs are market makers who can immediately acquire the inventory and get rid of it. If the market maker sees someone who is making an informed decision, then they wil want to pre-acquire the inventory and reduce their inventory costs. Therefore, the bid-ask spread will be lower than otherwise.
- According to my course, this story is partially true

### Chapter 3 - Ronan's Platform

- Ronan Ryan, Wall Street trader born in Dublin
  - Greenwich, Connecticut
    - Very privileged
    - Kids would have their own cars at sixteen and complain about taking the bus
  - First job at MCI Communications due to hiring manager being Irish
  - Deliver pagers to a big Wall Street firm
  - Poached by Qwest Communications after becoming a salesperson
  - Poached then by another telecom carrier, Level 3
  - Knew where to run fiber cables through and where to place the machines
  - NYSE located located in Mahwah, New York
  - In 2005, BT Radianz called
    - offered co-location services in Nutley, New Jersey
    - Bountiful Trust had set up shop in Kansas City was that its founders believed that it no longer mattered where they were physically located
      - 43 milliseconds to 3.8 milliseconds
  - Exchanges soon caught on but Ronan was the expert
  - Switching time went from 150 _microseconds_ to 1.2 microseconds per trade
  - HFT firms did not want anyone knowing how much they made nor what they were really up to
- HFT Firms: Hudson River Trading, Eagle Seven, Simplex Investments, Evolution Financial Technologies, Cooperfund, DRW
- Propreitary trading firms: 4 russians, 1 Chinese
- Took big pay cut (125,000 from 425,000) to work for RBC as head of HFT strategies under Brad
- Thor was inconsistent due to taking different paths to arrive at the exchanges
- HFT speed to beat: 465 microseconds!
- HFT traders posted buy and sell orders of 100-shares on every stock on BATS not because they wanted to buy or sell them, but because they wanted to gain insight into what investors wanted to buy or sell. BATS was created by HFTs, hence the incentive to send orders to BATS
- Latency tables: time to travel from each brokerage to each exchange
  - Enables HFT to discern the broker of the trade, and thus whether the shares are part of a much larger order
- How the Digital Broker works
  - Algorithm: how to divide up the quantity and when to send the orders
  - Router: where to send the order
  - Customers pay commissions to get routed through dark pool, then exchanges that pay the broker, then the other exchanges (cost effective route)
- CBSX exchange in Chicago suburbs inverted pricing structure to charge makers and pay takers which was coincident with Spread Networks opening recently
- Ronan was involved with Spread Networks
- Huge percentage of trades sent to dark pool get executed
- How does co-location matter?

### Final Chapter

Microwave towers were erected. According to [themistrading.com](https://blog.themistrading.com/2014/04/1215095-the-flash-boys-mystery-solved/), who owns it?

> Tradeworx does. Manoh Narang does. The creator and SEC-entrenched high speed data seller does.
