---
title: Why an ASIC-Resistant Proof of Work Algorithm is More Secure Than an ASIC-friendly Blockchain
date: 2025-08-15T23:57:51-04:00
draft: false
summary: An economics and corporate finance theoretical argument as to why a blockchain that uses an ASIC-Resistant proof-of-work algorithm like Monero's RandomX is more secure (higher difficulty) than if it used an ASIC-friendly algorithm.
tags:
  - cryptocurrency
  - monero
  - economics
  - finance
---

Let's consider two coins, where the only difference between the two is that one uses an ASIC-resistant proof-of-work algorithm, (called powR), the other is ASIC-friendly (called powF) (definition: it is mined most efficiently by specialized hardware that specializes in said proof-of-work algorithm, and is less effective at other tasks due to the nature of the coin requiring new ASICs to be created). Both have an equal number of not-for-profit miners who invested the same amount of money. e.g. Ryzen CPUs vs ASICs. Without introducing the other miners, the difficulty (measured in total comparable hashrate) is the same at the moment. One thing to note is that network hashrates are usually not comparable between blockchains that use different proof of work algorithms. It's a question of cryptography, which is why we're only interested in the concept of comparable difficulty.

First let's introduce zero-capex not-for-profit miners. These are people who already own the necessary hardware and repurpose it to mine the coin. Due to the explicit nature of the ASIC-friendly coin, the TCH of the ASIC-resistance coin is going to go up by a higher percentage. I will prove it to you.

Assume for every dollar in investment and operational cost, A(ASIC) is more efficient at mining powF than G(ENERIC) is, and for powR, ASIC is less efficient (and thus does not exist for powR). This is a valid assumption because the definition of powF is to be more efficient using ASICS. Even if powF is unprofitable to mine with A, it would be even more unprofitable to mine with G. Got it? To visualize better, say the efficiency is 2x. There is older generic hardware G', which is said to be half as efficient as G.

Currently there are 3 miners/pools of equal hardware power.

powF: AAA

powG: GGG

Two miners with hardware G' (said to be less powerful than G), want to start mining.

powF: AAA G'
New difficulty: (6.5:6 = 108.3%)

powR: GGG G':
New difficulty: (3.5:3 = 116.7%)

Alternatively, the powF fan will sell their existing hardware for money, which will most probably be done at a discount to its market value, and thus will be buying something that is not exactly half of A. In other words:

A = $1k
G = $1k
G' = $500 (market value)
G' sold = $499 (G' is not a hot commodity by definition, and must be sold at a discount to market value to get money in hand)

Even if we assume that G' can be sold for market value, there exists some person with hardware G' that wants to use only a % of their hardware for mining. This is true, and so even in the best case scenario, it will be more profitable to mine powR than powF with existing hardware. It actually gets even more insane if you design the most ASIC-friendly algorithm. The greater the efficiency of ASICs at mining powF compared to Generics, the greater the increase in difficulty required from powR before existing hardware users even consider mining powR (from a profitability standpoint). To recap, for not-for-profit users that don't want to dedicate their existing hardware to mine their preferred blockchain, the users of powR will be increasing the difficulty of it by a higher percentage than the users of powF (assuming equal users and equal existing hardware).

With botnets, powR is getting mined more than powF and its still proportional to how ASIC-friendly powF is (assuming same price). If ASICs are 10x more economically efficient than generic hardware, then botnets are going to prefer powR for 10x more difficulty (i.e. difficult of powR has to be 10x more than powF before existing hardware). Botnets mine powR, and have an incentive to not compromise the network as it is profitable without operational costs. With botnets selling the powR coin for profit, the powR market cap will be going down over time at a rate faster than the powF coin, but the speed at which this occurs will not be greater than the difficulty multiplier (otherwise botnets would mine powF instead).

Therefore, ASIC-resistance algorithm powR has a higher difficulty than the ASIC-friendly algorithm powF, even before we introduce profit-seeking entities. What this also means is that if profit to mine is zero or less, it's easier for a bad actor to take over the ASIC-friendly network than the ASIC-Resistance network (every $ invested represents a higher share of hashrate for the ASIC-friendly blockchain compared to every $ invested in the ASIC-resistance blockchain). _Note that in the long-run, due to how relatively low the barriers to entry ~will be~ are to mine blocks, mining profit (excluding speculation) does go to zero._ Even for ASIC-friendly blockchains, since they want ASICs to be created by anyone (and thus accessible to as many people). It's actually worse if ASIC-friendly algorithms don't want ASICs to be easily created. If the market for ASICs are not [perfect competition](/posts/what-is-perfect-competition), the the players in the market can simply gatekeep their ASICs and mine with an advantage, which could also compromise how decentralized the mining is.

So at this point, it is less profitable _to buy hardware_ for the purpose of mining powR rather than powF because mining powR would increase difficulty by a smaller percentage than mining powF (assuming the same initial capital).

**For a hostile actor, it is cheaper to attack and take over the powR blockchain.**

For this statement to be false, the assumptions are unreasonable.

1. There isn't a single person that would rather mine using their existing hardware than swap it. (hypothetically)
2. Swapping generic hardware for specialized hardware has zero loss of capital. (false due to used goods having varied prices and have also depreciated, especially electronics)
3. There isn't a single person who would mine using generic hardware part-time. (false since Monero is proof)

In my opinion, the security of a blockchain (difficulty) should not depend on the assumption that the market cap of the blockchain is high enough that state actors can't meaningfully impact the blockchain. Why? Because in the real world, every blockchain grows its market cap over time.

## Profit-Seeking Entities

There's two types of profit-seeking entities. One is speculative, which all coins loves, the other is non-speculative and looks at operational profits (that is they sell for fiat immediately).

### Generic Hardware Entities

For entities (individuals and companies) that already hold generic hardware, they will be checking the relative profitability of each coin. In the instance of dedicated mining, entities will swap generic hardware for specialized hardware, thus increasing difficulty of powF. However, if the profitability is the same between the two coins, the generic hardware entity will always prefer mining powR, because it does not require swapping to ASICs. Thus we can assume that powR still has a higher difficulty than powF.

In the case of part-timer generic entities, powR is going to have a higher profit margin as mentioned earlier.

### Investors

A for-profit entity, ELL's Mining Corporation, is a pure-play profit-maximizing (obviously) blockchain mining company. It has come across both the ASIC-friendly blockchain and the ASIC-Resistance blockchain. The company DOES NOT SPECULATE IN CRYPTOCURRENCIES AND SELLS ALL MINED CRYPTOCURRENCIES FOR PROFIT.

1. All mined coins are sold for fiat profit. This is similar to Ethereum swap trade front-runners (bots) which are coded to sell all coins to profit.

ELL's mining corporation is a profit-seeking cryptocurrency mining corporation that seeks to maximize profits. It has a positive hurdle rate and will not invest for zero net present value (unfortunately my corporate finance notes are still in Word and Excel files).

Right now mining powR is less preferable to mining powF, but there are three factors that favour powR to powF. There's two factors that make powF less enticing, but one of them assumes that R&D would need to be done to create ASICs (which in that case, the blockchain is very insecure). The second factor would be that the ASIC vendors have profit margins, but that is an argument to showcase that requiring ASICs is a waste of money on top of providing less security.

#### powF is more profitable than powR and has Positive Profitability

In this scenario, the assumption is really that mining powF has a positive net present value. We already established that powF is more profitable to mine than powR.

What does it mean for powF to have a positive and higher net present value compared to powR? The profit-seeking entity will compare projected cashflows from a mining operation (assuming selling to fiat) for both blockchains, and then use a discount rate to figure out the present value of future cashflows. The discount rates **will** differ due the inherent risk of buying ASICs to mine a coin that isn't guaranteed to have the same price.

Pure-play companies are going to invest in ASICs and mine powF, however the hurdle rate used is higher than powR's. The hurdle rates will never be the same because there is inherent risk in investing in ASICs versus generic hardware. In cases like a mining company, if the only barrier is capital, then the barrier to entry is very low, and its possible that gross profits can become negative due to competitors obtaining lower operational costs.

This is actually even higher for ASIC-minded coins because some ASIC vendors are going to have perverse incentives to gate-keep the best ASIC to themselves, and only releasing better ASICs once the other vendors do. AMD and Intel have no incentive to do this with generic hardware, due to the pure-play nature and how multipurpose nature of their hardware, but the ASIC company is very well versed with the blockchain they designed their ASIC for. There is no incentive to even release the first ASIC of the powF coin unless ,,mining profitability is lower than ASIC profit!

When gross profits are negative, that means revenue from mining is less than the cost to run the hardware. In the case of the generic hardware, once gross-profit is negative, they will switch to general compute, however for the ASICs, the business will simply stop mining. This means that the bankruptcy risk is higher with ASIC mining companies. When the bankruptcy risk is higher, so to will the required rate of return of the company's investors and as such a higher hurdle rate is required from powF. All this proves is that  powF's security superiority to powR depends entirely on price. In practice, you could argue that an ASIC-friendly coin is more secure than ASIC-resistance coins just solely based on the market cap difference, but this is true even between two ASIC-friendly coins!

The security of a blockchain should not assume that the net present value will always be highest for mining blockchain compared to other areas, especially from the bigger picture that each of these mining companies could be publicly traded. If the profitability is lower for blockchain companies, less capital will be provided as more companies provide the financial picture. Bitcoin mining companies are great examples of this, and showcases how valuation is entirely dictated by the speculative nature of the operation. In other words, mining can be unprofitable, and in these cases speculative investors are driving security under their assumption that the price will go up.

### Speculative Investors

Speculative entities mine coins based on speculation that that the coins will appreciate in value. These firms do not care about operational profit, and thus its rationale that they will allocate the same amount of money to each blockchain they encounter.

The reason to ignore what speculative investors do is because they flee the moment the market hits the top. Tullip mania, Canada's condo market. Speculative investors invest not because of fundamentals, but because of a speculation that the price will keep going up. If speculators are the only reason the price goes up, then at some point, when speculation or authentic demand dries up, speculators flee. There are two scenarios really, one is where powF and powR are both going down in price. In this case there is no speculator demand and security is still better for powR. In the scenario where powF's price is going up faster than powR (which could be slowly going down), the price would have to make powF profitable, and at some point, the selling by profit-seeking entities will stop the price from going up further. But of course, block rewards get cut! But then less profit-seeking entities contribute to the security. The price would have to go up faster than the block rewards get cut for profit-seeking entities to increase security.

In short, powF's security superiority depends on 1) significant botnet that finds mining powR to be the most profitable (implies that powR has economic value) 2) speculators pushing price of powF at a faster growth rate than powR (for life). This last point is very disturbing. In so many cases, speculation has resulted in devastation. A great example is Canada Condo market. Speculation that leveraged condo purchases would outperform the stock market kept pushing the price of condos and pre-construction condos higher where new builds of condos were reaching peak levels. As soon as the authentic demand was softened, the speculators left, and now housing starts in Ontario have collapsed to great financial recession levels! If this happens to powF, then the miners go bankrupt, since their ASICs (balance sheet assets) would plummet in value at the same time that profitability goes down. At least in the case of general compute, there is a bottom to the asset price, but with ASICs and a speculative sell-off, things would look seriously bad.

### Monero

The other non-security argument for why ASIC-resistance proof-of-work is better than ASIC-friendly proof-of-work is one rooted in decentralized and fairness. The purpose is that the blockchain wants to prevent any entity from having a superior dollar invested to hashrate ratio than the common man. Rather than be super ASIC-friendly, Monero went with being super anti-ASIC, which has the additional benefit of not requiring specialized hardware to get started with mining Monero in a competitive environment. Each miner is incentivized to invest in the most efficient general purpose CPUs and to lower their operational costs rather than the alternative which is buying some other hardware which requires the former having economical value to begin with!

> Its Proof of Work algorithm prevents specialized mining hardware from dominating the network and allows for fair distribution of block rewards

- [About Monero](https://web.getmonero.org/resources/about/)

[Bye bye ASICs - April 2018](https://www.reddit.com/r/Monero/comments/8aoxhp/bye_bye_asics/)

In October 2019, Monero 0.15 was released with a permanent proof-of-work algorithm, RandomX, which was designed to run most effectively on general CPUs. Before, this Monero would tweak its proof-of-work algorithm often to ensure ASICs would not be mining Monero. One could argue that Monero lost security every time they did this, however these ASIC miners only existed due to having a competitive advantage compared to the 20% of non-ASIC miners. When the algorithm is no longer ASIC-friendly, it allows more players to mine Monero for profit and thus increases decentralization and network security.

## Conclusion

In Conclusion, the idea that ASIC-friendliness is a superior security model to ASIC-resistance, is complete fantasy, based on an incomplete picture of how profit-seeking individuals in the real world functions. When the security of a blockchain depends on its price and thus profitability to mine, it diminished the fundamental purpose of the blockchain!
