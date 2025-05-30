---
title: "Economic Analysis of Crypto Currency"
date: 2024-04-16T12:10:54-04:00
draft: false
tags:
  - cryptocurrency
  - economics
summary: "Economic analysis of cryptocurrency, comparing Ethereum to alternatives, discussing Layer 2 value, and debating if crypto is currency or security."
---

{{< toc >}}

## Prologue

As I'm all about seeking truth and questioning my beliefs, I decided to question my beliefs based on the reality of relative success that Ethereum and its many Layer 2 blockchains have had in terms of monetary return compared to my beloved Monero.

There are two points to crypto-currency. One is a decentralized global money system, the second is about 100% freedom, and the third is about making money. I still do think that at any point in time\*, a cryptocurrency can only cover two. Monero covers decentralized and freedom. Can you make money from it? No; unless you can predict the future that is.

In the real world, most people are willing to compromise on something. Monero's success should not depend on how ethical or moral human beings are, but that's exactly what I have come to realize. I can either stay stuck in the past or look at reality and this article that is what I'm doing.

## What Value is Assignable to Layer 2?

I had never heard of Starknet till I got a sizable airdrop from them. Starknet poises itself to be a decentralized layer 2 zk-rollup on top of the Ethereum blockchain. When I first got the airdrop, I foolishly believed their "next-gen tech" instead of my short-term greed which was to swap to a USD stablecoin. Since it was free money after all, I did not value it as the money I already owned. Rule #1: treat every financial asset at the same risk-level.

The considerable depreciation got me thinking. All these layer 2's are focused on making Ethereum scalable, meaning that due to the network effect, Ethereum benefits the most anyways. Ethereum's fees are high because of the demand is usage, not because it's arbitrarily high. Not to mention, that in the future, Ethereum can easily add the dynamic sized blocks that Monero has.

The other thing is that if someone who owns crypto-currency didn't know what Starknet was and has only heard of Arbitrum and Polygon, how can normal people like my friends **ever** know about it? Before we delve into the value of the second layer, we need to figure out if the first layer has value.

## Where Ethereum Differentiates

Ethereum was introduced as a way to supplement money in contrast to Bitcoin's ability to become money with some additional features. That is, I view it was a system to decentralize complex monetary transactions. Ethereum does this through Smart Contracts which is code that is executed in a virtual machine by all full nodes. Lastly, what is the value of smart contracts?

### ERC-20 Tokens

One of the first innovations is the ability to create custom tokens that are secured by the ethereum blockchain. These custom tokens can provide a variety of decentralized functionality that ethereum tokens simply cannot without a centralized database.

### Decentralized Autonomous Organization

One of the first innovations of smart contracts is the DAO. A DAO let's people vote digitally with their cryptographic signatures rather than using a central database (e.g. government ID, corporation shares). By using a DAO instead of a central owner, there is little room for the managers to misbehave.

Here is an example of how government voting can be done using digitally using DAOs.

1 address = 1 vote. Government democracies can be made more efficient by issuing 1 non-transferable and non-revokable token to every citizen, where the private key is attached to a physical card issued to the person. The card should be placed in a safety deposit box or destroyed once the person has been digitally onboard. The government should not be able to strip citizenship, but optionally, a revoke feature may be introduced. Whenever a vote occurs, an atomic unit should be subtracted. To make the chain sustainable, the government can make it so that addresses unused for 50 years are retired (burned). The cons of this system are identity theft and coercion. But these are crimes of which the latter can be reported and the former can be dealt with a smaller DAO with the power to blacklist addresses. Government ID can still be used for in person verification, so I don't believe there's any problem. I won't go very in depth but I do know that this is an area that a tech-first government would invest time researching.

### Stablecoins

The first useful functionality is tokenomics, which can be used to create stablecoins which have a 1:1 **redemption value** with a US dollar. A stablecoin cannot be algorithmic as that is how Luna blew up. Tether (USDT) in 2014 was the first USD stablecoin backed by a centralized organization. In 2017, DAI was launched without the centralized overseeing. In 2018, the centralized Circle (USDC) was launched. The problem with centralized backing is that the organization will eventually be bound to comply with the fiat system's regulations.

### DAI and MakerDAO (MKR)

How does DAI work if there isn't a depository? DAI is issued by depositing excess collateral of MakeDAO approved ethereum-based assets. That is for ever DAI token you receive, you will have to deposit more than $1 in various assets. When the collateral gets low on value, a collateral auction is triggered to liquidate the collateral for DAI. One thing I learned about money in economics is that for money to have value is has to be perceived to have value and for someone to agree to locking up their money, people must have taken large opportunity costs to make DAI have the value that it does.

DAI is governed by the MakerDAO of which ownership is determined via MKR tokens. The value of the MKR token is the value in influencing DAI and since most of it was with the founders, there is strong incentive to keep it working. If we really think about it, MKR is a security and just like many public companies, it's fine if the founders get a slice. The security's value is also bolstered by the DAO's operational ability to earn interest on loans. I'm not too sure on the ways MakerDAO makes money (if at all), but I'm leaning towards interest rate [spreads](https://spark.fi/). So if I were to value MKR, I would want to analyze the financial results earned from these sort of operations. [A start](https://messari.io/project/maker/protocols/makerdao).

Being able to transact decentralized with the same purchasing power and full ownership is a step closed to freedom.

### WIll it be Replaced by Alternatives?

The network effect is incredible and when **constantly innovating**, the benefactor of the network effect is most likely to win out. ~~So with that said, Ethereum is here to stay~~. Due to the downwards price pressue back-running is having, it's hard to say Ethereum will continue to gain popularity. Even if it fixes this one major problem, alternatives can still grow. As we talk about in the next chapter, [Fiat Banking System Versus Crypto Monetary System](#fiat-banking-system-versus-crypto-monetary-system), if a cryptocurrency is volatile and has a market cap in the billions, its blockchain can be seen as a bank and its token as a stock; **they can all grow**.

### Ethereum's Back-Running Problem

When I first wrote this article in 2024, I was unaware of how profound the problem of back-running was. Back-running is when users use a swap service and a  profit-seeking entity unrelated to the swap service, will detect the swap transaction in the mem pool, and buy the coin at the current ask price and then turn around and sells it to the original buyer at a higher price. Users are told to limit the _slippage_ (amount of market value willing to lose), but that still amounts to losing a few percentage points which can result in thousands of dollars for higher transactions.

Why is this bad? Well you see unlike in the stock market, where high-frequency trading firms are rewarded in the same currency of their accounting books, for Ethereum back-running, revenue will be in cryptocurrency and will need to be sold to crystalize profits in order to reduce price volatility risk.  Think about it for a second. You have an algorithm that earns crypto-currency on 99% of decisions it makes. You, as a business, understand that not only Ethereum's price, but all crypto-currencies at the moment, have price cycles, meaning that it is undetermined whether the price will stay flat or go up in the short-run! Therefore, to lock in profits and reduce the risk of the price going down, you liquidate any cryptocurrency money earned from this algorithm as soon as possible. To improve logistics, you may even make use of ETH/USD stable coin pairs with tight bid-ask spreads. It actually doesn't even matter if you also get back-run when liquidating because you only lose a percentage of revenue rather than a percentage of equity. Since algorithmic profit-seeking entities have an incentive to sell all Ethereum-related crypto-currencies, this puts a downwards pressure on the price of Ethereum. In other words, for Ethereum to maintain its upward movement, there has to be more demand (on a per $ basis) for Ethereum than crypto-currencies without swap mechanisms or loopholes that allow back-running. Put another way, if Bitcoin and Ethereum had the same market cap, Ethereum requires more buyer demand than Bitcoin to sustain its market cap since there are inherently more sellers wanting to offload Ethereum. This problem isn't inherent to Ethereum, I've just focused on Ethereum because of its popularity.

Electronic front-running or simply back-running, actually stems from the stock market due to the stock exchanges all adopting a technology superiority mindset where firms get an advantage for being able to execute trades as fast as possible even though there is no significant material change millisecond to millisecond! In the existing stock market, there are multiple exchanges with markets to trade. If institutions send their trades to the "best" priced exchange, because they might eat up the entire bid or ask, the high-frequency trading firms or market makers will adjust their quotes on the other exchanges! You can read more about this in my [Financial Market and Security Trading course notes](/posts/university/bu-430) which also references condense notes of Flash Boys by Michael Lewis which was the ground breaking book informing market participants what HFTs were even doing.

### Alternative 1: Cardano

The main alternative I can think of is Cardano. It's argument is a modular architecture, but there is little focus on what the present implications and wins are over ethereum. It's like saying FreeBSD kernel is better than the Linux kernel because it's modular without mentioning most frameworks support Windows, Linux, and MacOS. It doesn't matter that FreeBSD's architecture is superior to Linux because Linux satisfies a significantly higher share of users. As history has shown us, there does exist an opportunity cost of developing software for platforms with less users.

If we apply this strong argument of satisfaction, Cardano will not replace Ethereum because Ethereum satisfies most people, the smart contracts need to be coded in a more complex language; even if that language is more secure and easier to build on once on-boarded. Just like OCaml, where is the monetary incentive to learn haskell? Ethereum, like Linux, is constantly evolving, and there is little benefit in learning something new to do the same task you can already do at a high efficiency.

It's similar to Monero and it's alternative. Monero satisfies the role of money. It's digital cash and anything new cannot beat the network effect unless there is high interoperability and low substitution costs.

### Alternative 2: Solana

The only benefit Solana has over Ethereum is the significantly lower transaction fees and costs. This is due to Ethereum's popularity and so why did it do better than Cardano? Well clearly because if cost is the bottle neck, why settle for Cardano when the cheaper Solana will do? Solana is like an accelerated blockchain where the sustainable solution is to store just the state and not the history. Burning history is what most blockchains will have to end up doing and Solana's solution is just one way.

It is my belief that the biggest myth that was perpetuated regarding Solana was that FTX had control over the project other than simply being a prelaunch investor.

### Rebuttals to Arguments Against Ethereum

Disclosure: I'm bullish on Monero, bearish on Etheruem in its current form due to back-running. I've found these rebuttals to credible criticism against Ethereum.

- Visible Balances and Transaction History
  -I also do not like that Ethereum transactions and balances are visible but
  - (1) Most people do not care about privacy enough to change behaviour
  - (2) Ethereum isn't just about money, it's about decentralized finance (defi). Hopefully someday the Monero community either creates a wrapped Monero like Wrapped Bitcoin or fully polishes atomic swaps. Essentially, ethereum unlocks defi potential rather than being the money
- Proof-of-stake is _Permissioned_
  - The argument spouted by Proof-of-workers is that PoS coins require buying permission but the same can be said about the device we are using. Permissioned is not a good argument when mining itself is not the best way for the average person to acquire a considerable amount of crypto to begin with (i.e either use capital, aka stored labour, work for the cryptocurrency, or inherit it)
  - Mining requires acquiring a device capable of mining meaning that you need capital to begin with. Capital (money) you get from working or are transferred to which can be from a PoS or PoW blockchain
- Proof-of-stake rewards the wealthiest
  - Most people use Ethereum and do not stake it so the wealthiest is not being concentrated
  - Stakers get a constant yield that competes directly with the world nominal interest rate or at least the USA interest rate
  - Each staker is rewarded the same proportion of the Ethereum they did stake
- Less secure
  - 33% attack
    - Ethereum protects against this via slashing. It is less likely for a staker to sustain the manipulation and forks
  - Weak Subjectivity: How does a node know which node is the correct hash?
    - The attack is owning 51% of nodes, which is just as easy to do by a state actor as doubling the Monero hash rate
    - The attack will be thwarted because even Monero at one point had one pool responsible for 50%+ which was subsequently reduced
      - Personally there is a big risk in PoS regarding weak subjectivity because with PoW 50% attack, the bad actor has to use a boatload of compute and resources, whereas for weak subjectivity, the bad actor can scale the attack over time with minimal resources. It is easier to setup a node than it is to mine.

## Fiat Banking System Versus Crypto Monetary System

Fiat Monetary System | Decentralized Monetary System | Explanation
--- | --- | ---
Chequing Accounts | Any Tier 1 Crypto Currency Wallet | Tier 1 crypto-currencies are cryptocurrencies that been integrated in some way with other cryptocurrencies. Think chartered banks that can accept cheques from other banks
Cheques, e-Transfer, FedNox | Bridging | Each bank is a separate entity just as how each blockchain is mostly separate (layer 2's as well). Person A banking with bank X can send a money to person B banking with bank Y, is the same as me with Monero being able to pay someone who is using Ethereum on Arbitrum
Inter-bank transfer | Sending money on same blockchain or through some sort of centralized broker | It's much easier to send a lot of money to someone already at the bank than to send a lot of money to someone who uses another bank. Same thing with crypto-currency.
Savings Account | Staking or Loaning to a Regulated Crypto Exchange | A savings account is not required in a decentralized system since customers will need to explicitly consent to having their be loaned out not to mention that the lack of a fractional lending means that the expected interest rate on sitting money should be 0

### Crypto-Currency or Crypto-Security?

As we can see from the previous table, the first thing everyone does is open a chequing account. In any country, this will usually be one of the biggest banks. RBC, TD, Scotiabank, CIBC, BMO. Since most adults in Canada use these banks, most people are not going to be opening their first bank account with EQ bank nor Tangerine (subsidiary of Scotiabank). Since these banks are publicly traded, we can create some intuitions.

Company | Ticker | Beta
--- | --- | ---
EQB Inc. | EQB.TO | 1.63
The Bank of Nova Scotia | BNS.TO | 0.96

Beta is a measure of how risky an investment is compared to the market. The greater the Beta the greater the factor of return over the market. So if the market grows, a Beta over 1 implies the stock gave a higher return. Likewise, if the market falls, the stock falls harder.

Bringing it back to crypto-currency, the blockchain is the monetary system that functions, but the token itself is either a currency (money) or a security. If it's a currency or money, it has to meet the criteria of unit of account. Unit of account says that there has to be a way to measure value uniformly. If are measuring token's based on their USD price rather than measuring goods in said token's price, the token is more of a security than a money.

Most people are not looking at crypto-currency this way. When searching for stability or unit of accounts I am met with stable-coins (fiat - securities) or "divisibility" but not volatility analysis.

In the future I will take it upon myself to conduct a 3-year volatility analysis on all crypto-currencies above 1 billion dollars in market cap. Currently, my intuition is that Monero is more like Money than a security. It's exchange rate has been in the 160-240 range for the last 2 years ($200 +- 20%). Contrast to Canadian dollar, 0.7198-0.8026 (0.7612 +-5%). Clearly we have a few more years to go before Monero can be cemented a currency. The recent de-listing from Binance will only reduce volatility due to speculation.

### Making Money

So here's my take for people who want to make money. Tier 2 crypto-currencies are shit coins. Unlike the stock market, crypto-currencies are competing as banks and the smaller they are, the more likely they are to fail, more so when **the securities regulator is lagging**. Therefore, it's best to invest in the large-cap cryptocurrencies at the peak, and then rotate into mid-cap crypto-currencies once the bear market has made the currencies flat. Yes, there is higher reward in investing in the mid-cap cryptocurrencies at the peak, but unlike the stock market, the crypto appears to have a much shorter boom-bust cycle (this is not set in stone, as some crypto currencies want to be a currency first and thus will flatten out at some point).
