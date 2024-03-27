---
title: "Why Monero Is the Best Crypto-Currency"
date: 2021-10-24T11:37:57-05:00
draft: false
tags:
  - monero
  - cryptocurrency
---

![Header Image](/images/crypto/monero-pros.bmp)

{{< toc >}}

## Introduction

### Arguments

- Fungibility
- Privacy Reliability (Layer 1)
- ASIC Resistance
- Store of value
  - Not going to elaborate further than the fact that privacy invites storing wealth

This article is meant to be the definitive guide on why Monero is the king of all cryptos when it comes to fulfilling the role of money or real currency.
It is long in order to be thorough, as well as includes common responses/tactics.

The intended target audience is an open-minded reader interested in cryptocurrency as well as fellow Monero users who continuously answer questions such as "why does Monero (not) do X?."
I am open to debate, but I will say that when it comes to cryptoCURRENCY, privacy is a must.

I will be comparing Monero's features to those found in Bitcoin (BTC), Ethereum (ETH), Stellar (XLM), and ZCash (ZEC).
I will also talk about layer 2 solutions: BTC's Lightning, BCH's CashFusion, ETH's Tornado Cash.

For all other cryptos/solutions, one can use the transitive property: If Monero > X and X > Y, then Monero > Y.

I will start with a brief introduction to Monero, since privacy was not simple to implement.

## What is Monero?

On a high levels, Monero aims to be digital cash. It actually outdoes cash when it comes to fungibility.
It does not support smart contracts, but there is some research being done on how to support some smart contract features.

### Better than cash

- balance cannot be calculated out without consent
- transaction amounts, parties, and times cannot be figured by outside parties
- each atomic unit of Monero is indifferent from another (fungible)
  - where cash suffers is that cash that has any trace of cocaine can be confiscated under civil forfeiture
- cannot be stolen unless encryption is broken
  - you should always store your Monero seed in a KeePassX database on two separate devices
  - if you are worried about transferring your money upon, there are ways other than a will to send a password to a person
- digitally accessible
  - it is as easy to send large amounts of XMR as it is small amounts
- flat transaction fees
  - credit cards do not have flat fees

### CryptoCurrency Properties

- Monero uses stealth addresses to obscure the number of times an address has received Monero. These are similar to the modulus concept where (x mod 5 = 3) has an infinite number of solutions. They are created by the sender to protect the information of the receiver. That way, an observer is uncertain how many times a targeted address has actually received Monero. All wallets implement this, so only a bad actor would not create a stealth address, but Monero doesn't rely on just stealth addresses
- Monero uses ring signatures to protect the identity of the sender. At the moment, each transaction has 10 other possible signatories, called decoys, as seen [here](https://xmrchain.net/tx/75fbbd3db7d7a5739e06c61282990bb44c090ee81ff288cde1feb7ea82f67f51)
- One seed is the key to an infinite amount of accounts each with an infinite amount of addresses. Think of this like having multiple chequing accounts and each has multiple direct deposit numbers. These accounts are mathematically generated, so the nth account will always be the same on different wallet clients.
- Transaction fees reduce as the number of transactions increase
- Block sizes are dynamic in the long term but block-to-block growth is capped via mining penalties
- Monero uses the proof-of-work consensus protocol RandomX algorithm for its ASIC resistance
- Monero is not a Bitcoin fork. It is actually a Bytecoin fork with several improvements

## Fungibility

Culpable cryptos: Most except Monero, its forks, and possibly some mimblewimble coins

For a crypto to be money, it has to be fungible. If crypto is not fungible, users are at risk of being denied service for not being "right." The definition of right would be dependent on the receiver and could even be legislated by governments. Transaction histories allow this to happen and there's no guarantee you aren't being watched for maybe transacting with someone who had the "wrong" coins. This is an issue with all cryptocurrencies except for Monero. With ZEC, since transactions are public by default, and most transactions on the blockchain are public, having the option for public transactions means that receivers can simply refute any transaction that isn't public. This is true for exchanges. Exchange use t-addresses for ZEC, not the shielded ones.

Now you may say not having fungibility prevents money laundering and duly hurts criminals (does it really though?), but what about the undue harm to individuals? The definition of a criminal is different in every country. According to [Humanity Dignity Trust](https://www.humandignitytrust.org/lgbt-the-law/map-of-criminalisation/), engaging in homosexual activities is a crime in 71 countries. We actively hurt marginalized groups when we promote non-fungible cryptos. If you and your same-sex partner shared crypto together, an authoritative government can easily suspect you of sleeping together, since sharing bank/money accounts is more common among partners than friends. If you like to argue in bad faith by saying maybe they are just father-son, you'd be lying to yourself if you think governments making homosexuality a crime is going to think half of the people sharing an account with the same-sex is just a rich parent.

## Privacy

Privacy is defined as protecting sensitive information such as networth, transaction value, and if a person transacted.
Culpable cryptos: All except Monero, its forks, ZCash's shielded transactions, and possibly mimblewimble coins.
There are layer 2 solutions, but like I said before, these aren't easy to use, and are prone to ignorance. Users would be required to know about them, they cost more,
the transactions stand out, and the user looks automatically suspicious for transacting differently than other people on the network.

With Monero, the defaults are private and deviation from the defaults erodes users' own privacy, and so it is not encouraged unless you
know what you are doing! Churning, timelocks (DO NOT TOUCH THIS), and sending to multiple addresses comes to mind.

Privacy is a fundamental human right. Any cryptocurrency that doesn't protect the balance of a wallet by protecting the history of transactions, puts the owner at risk from bad actors. One should not have to take many precautions such as using multiple wallets just for some privacy. One would also have to somehow keep each wallet's coins separated from each other. Then there are mixers. Mixers/Tumblers are 2014 technology. They cost more transaction fees, take time, and spam the network. Objectively speaking, a cryptocurrency that can protect your privacy with one transaction is much better than a cryptocurrency that requires you to use 3rd party tools for some possible privacy. How can you be certain that proprietary blockchain analysis tools haven't already figured out a way to map out tumbled coins?

Here is a real example of the privacy provided by the fiat banking system: In Canada, we have Interac eTransfers. When I send an eTransfer to my friend, or vice-versa, we don't know how much each other has. But if we had used BTC, ETH, SOL, XLM, and by ZEC (default configuration for the sender), we could've seen each others' balances. We simply cannot expect any crypto to replace fiat if the privacy will end up being worse than using fiat. This is of course assuming a world where crypto prices have reduced volatility. Before you say "people do not care about privacy," please tell me would you leave the door open at a public washroom? People do care about privacy, they just prefer convenience more. Monero aims to be the convenient solution that is private.

Let's dismantle some arguments that think network effect + layer n solutions > layer 1 privacy. I will not be using # of users as an argument when there are more Monero users than there are users using the Layer n solution.

### Tumblers

- Requires users to trust centralized service or do it yourself which is tricky for new users.
- Tumblers can be traced by blockchain analytic companies
- Transaction fees ++
- Network spam ++
- Does not protect balances and thus would require managing at least two addresses just to reach the basic level of Monero's privacy. UX is much simpler and thus better for Monero. Monero has its own UX faults, but they are all UI and not technical. UI can always be improved at no cost to the user.
- Requires user knowledge

### BTC & Lightning

- Inbound liquidity. You need 5 BTC to receive ≤ 5 BTC. This is a rich get the richer scheme, and it's not mentioned often enough.
Many people around the world live paycheck to paycheck, people simply cannot be paid in BTC-Lightning because of this incredible flaw. Remember we are dicussing cryptocurrency as money.
- Onboarding issues (L1 Transaction)
  - Fees: opening a channel requires you to tie up BTC into a channel and costs you a transaction fee.
  - Limited Transactions/day: There isn't enough time in the world to onboard billions of people who require money to transact
- Balance attack. An attacker can send fake transactions to your invoice to determine your channel balance. You may argue you can have multiple channels or you can store most BTC on layer 1, but how is that more convenient than Monero? You end up having to keep track of and think about more than if you had just used Monero.
- Requires invoicing (being online). For you to send money to me, I have to create an invoice for you to send money to. You have to ask me for permission to send me money! This is absurd, donations would require more work than what layer 1 provides, and is worse than the fiat system.
Hosting a website or using a centralized service is not a solution to this problem. Privacy is hindered with these alternatives. Why make life difficult when a solution already exist?
- Node network. To send BTC through lightning to someone you don't have a channel open with, you have to HOPE that they are connected indirectly to you via a chain of mutual nodes through another channel you have open. Usability would require the centralization of payment channels and thus is not really secure.
- There are probably more issues that I do not know about
- There are more Monero users than there are channels on Lightning. Atomic swap to Monero is easier than using Lightning channels.

### Mixing

- Every piece of BTC has history to it.
- Ever heard of adverse selection? Users of BTC that has been tainted are more likely to wash it by methods including mixing.
- You are risking your own BTC, by using mixing services.
- Not to mention, these mixing services can get hacked or shut down for money laundering
- More expensive than base transaction
- Requires user knowledge

### BTC-XMR Atomic Swap

- Some BTC users think the BTC-XMR swap makes BTC better because BTC users now have another way to wash their money
- They promote swapping to XMR and then swapping back to BTC!
- These are the users who use BTC because it is first, not because they think the tech is the best

### BCH + CashFusion 💵

CashFusion obfuscates the sender of the coins but does not protect the owner's balances. If you give me your BCH address, I still know how much you own. You'd have to maintain two addresses, one for receiving and one for sending just to get to the basic privacy protections Monero offers without any addon or user knowledge requirement.

CashFusion relies on a single server which means that it's centralized and prone to [attacks](https://www.reddit.com/r/btc/comments/pwupmn/comment/hem7yuc/?utm_source=share&utm_medium=web2x&context=3). If one manages to take out CashFusion, all cash-fusions are unable to be completed. This is worse than Visa and MasterCard who have their own node network. These centralized companies are more decentralized than CashFusion itself! Reminder: Facebook, an almost $1T company went down for hours on Monday, October 4th, 2021 due to a DNS issue. Centralized internet services are all prone to being unusable by a user. The good thing is that there is no risk of losing funds (according to CashFusion).

Instead of using a basic BCH wallet, you now have to use CashFusion's network. This is no different from simply downloading a Monero wallet and swapping BCH for XMR.

Bitcoin Cash users have the right mindset; privacy is a human right.
They like the idea of privacy but have this loyalty towards BCH similar to smokers opting for cigarettes over ecigs.
One is objectively better than the other. Crypto is still in its infancy, so it'll take 10 years for people to stop acting like hard drug users who should be using psychedelics instead.

### ETH + Aztec Protocol

/4/9/2023: Well well well, zk.money has been [sunset](https://medium.com/aztec-protocol/sunsetting-aztec-connect-a786edce5cae) so we'll see what the Noir protocol the Aztec team is working on now.

9/29/2022: Well I was right, the lack of ETH fungibility is proof that layer two solutions
have a serious flaw and can make you a criminal or sanctioned just for wanting privacy. Tornado Cash being sanctioned means its worse even legally than using Monero. So now I will discuss an alternative [for now, as censorship is already brewing](https://twitter.com/aztecnetwork/status/1560710567249096704?s=20&t=-EDlvVlsKLdgAxGjJSfHJA). It's only a matter of time before the next popular privacy protocol gets sanctioned, so again, the main argument is that layer 2 protocols simply lack fungibility because
observers can tell that a privacy preserving protocol was used and can thus discriminate your coins.
With Monero, people have to either accept it for what it is or not accept it at all. All or nothing
works; just like https and encryption works. Encryption is an all or nothing thing.

So how does [Aztec](https://aztec.network/) work? It uses rollups meaning that it leverages the
base layer of Ethereum for security, and it guarantees privacy after shielding. You can send shielded amounts to other account aliases and even layer 1 accounts, however the details of receiving are a bit unknown. I'll have to do some actual practical research to see its limitations as protocol, but since it is a protocol and not actual currency, it's only a matter of time until
it too is sanctioned. It was released in 2021 which is why it was not included in the first publishing of this article.

An overview of its issues:

- ETH going in and coming out are branded as have being part of Aztec
- You need 0.1 ETH to start recieving on Aztec
- [IP logging](https://twitter.com/aztecnetwork/status/1560710578254925824) and Single-address pending deposit caps (I don't know exactly what this means)
- [Extremely Centralized](https://medium.com/aztec-protocol/layer-by-layer-a-guide-to-aztecs-security-approach-87df087093c0)
  - [Nodes](https://github.com/AztecProtocol/aztec-connect/tree/master/falafel) can be run decentralized, however because of the previous tweet, transactions can only be submitted when the central nodes fail. An antithesis to privacy! This is like the CIA being the only ones allowed to run TOR nodes and only if their nodes went down would other TOR nodes be allowed.
- You send/receive with an alias; one alias per wallet (0.1ETH) or something
  - this means to receive anonymously, you need another wallet to deposit 0.1ETH into Aztec.
- Deposit cap of (5 ETH / 10,000 DAI) so $10,000 and written intension to keep it this way instead of increasing it to 50ETH / 100,000 DAI as promised.

Overall, why limit yourself to this centralized privacy protocol, when [ETH-XMR](https://github.com/AthanorLabs/atomic-swap) atomic swaps on Arbitrum protocol are around the corner? Atomic swaps combined with better UI/UX front-ends will be the end for these privacy protocols.

### ETH + Tornado 🌪 Cash

The good thing about Tornado cash compared to CashFusion is that you don't have to rely on a centralized service. The web app is a UI for the Tornado: Mixer smart contract. This is a very good use of smart contracts but still, this service does not bring Ethereum up to Monero's default protections.

For one, you are restricted to sending and withdrawing 4 different quantities of ETH. How I would use Tornado is if I needed to "cleanse" ETH, I'd have to continuously send ETH to and then withdraw to different addresses each time. That's 9 addresses if I had to move 0.9 ETH, not including transaction fees, the .0X amount of ETH left, and even the time/headache just to accomplish this. Up to $270 would be forfeited in order to get transaction privacy, not balance privacy.

A single Monero seed can have an infinite number of accounts and each account can have an infinite number of subaddresses. Instead of subaddresses showing up on the blockchain, a stealth address is created by the sender on the receiver's behalf and shows up on the transaction. Each transaction also has 7 other possible signatures (sender's being a stealth address again) and so the sender is protected as well. The transaction amount is also unknown to observers

A single Monero seed can have an infinite number of accounts and each account can have an infinite number of subaddresses. Instead of subaddresses showing up on the blockchain, a stealth address is created by the sender on the receiver's behalf and shows up on the transaction. Each transaction also has 7 other possible signatures (sender's being a stealth address again) and so the sender is protected as well. The transaction amount is also unknown to observers.

**Tornado Cash is just a mixer and like all mixer's unless all transactions go through Tornado, ETH with a history dating to a Tornado can be seen as more suspicious than non-Tornado ETH.**

2022/09/29: I was right, this flaw I highlighted is now viciously used to enforce the sanctioning of
ETH that has gone through Tornado Cash.

Ethereum has one thing over Monero which is smart contracts but just because they are called smart, does not mean they are used in a very smart way. DAO exploit resulted in a hard fork because it affects the founders, then there's the Polygon exploit, and the Indexed Finance exploit. Even after being audited, smart contracts can be exploited. DeFi is simply less secure at the moment compared to proprietary banking systems that are at least insured up to $100,000 per person. It's open-source minus the community inspection. I do hope DeFi improves in the coming years but a question for the reader is why Ethereum and not Solana, Cardano, Stellar? Should Ethereum really move away from proof-of-work? Let's find out in the next subsection.

Ethereum has one thing over Monero which is smart contracts but just because they are called smart, does not mean they are used in a very smart way. DAO exploit resulted in a hard fork because it affects the founders, then there's the Polygon exploit, and the Indexed Finance exploit. Even after being audited, smart contracts can be exploited. DeFi is simply less secure at the moment compared to proprietary banking systems that are at least insured up to $100,000 per person. It's open-source minus the community inspection. I do hope DeFi improves in the coming years but a question for the reader is why Ethereum and not Solana, Cardano, Stellar? Should Ethereum really move away from proof-of-work? Let's find out in the next subsection.

### MimbleWimble

Coins that all into this category include, LTC, GRIN, BEAM.

From ["Breaking Mimblewimble’s Privacy Model"](https://medium.com/dragonfly-research/breaking-mimblewimble-privacy-model-84bcd67bfe52), we see that there is a serious flaw in Mimblewimble that isn't emphasized enough and its consequences aren't communicated clearly. I highly suggest reading it, but I will simplify it. MimblewWimble works by aggregating multiple individual transactions into on big transaction / CoinJoin on the blockchain. However, since the CoinJoin has to be built one transaction at a time, a sniffer/malicious node that is connected to all other nodes in the network, can simply pick up transactions before the aggregation is finished and unwind the final coinjoin to see the sender and receiver (amounts are safe, but privacy is both identity and amount, not just amount). Privacy isn't real if there's a gate to access it; Privacy is real when the technology is unable to be used against itself.

## On ZCash

Now is a good time to dismantle ZCash. Z-cash offers privacy optionally and not even by default. That is the only reason it is on more exchanges than Monero. To my knowledge, no exchange that supports ZCash and not Monero allows shielded deposits (50% sure) and withdrawals. Additionally, transparent transactions are the default, most transactions on the blockchain were transparent ones, and users have to trust that ZCash was set up without any bad actors. Transactions being transparent by default make shielded transactions stick out. This leads to discrimination and suspicion of users that use shielded transactions. In addition to these issues, ZCash gives 10% of the total supply to their own founders. This goes against equitable decentralization and democracy.

Furthermore, ZCash does not protect transaction values for even transparent &rarr; shielded addresses. Having two types of addresses means that senders can discriminate against shielded address users. This two type system means that common behaviours such as transacting in short periods of time can be susceptible to blockchain analysis and has been traced before by even an [individual](https://twitter.com/The8Connor/status/1284900368116330497). "having unshielded TX inherently make shielded ones less private" - [u/lol_VEVO](https://www.reddit.com/r/CryptoCurrency/comments/hubbvg/comment/fym8yn9/?utm_source=share&utm_medium=web2x&context=3)

Adding more insult to privacy advocates, the founder - Zooka - once (drunkenly) tweeted that they would add privacy by default and that they would take it away from criminals. Needing to trust the setup does make it possible… The fact that the founder holds this opinion shows us that ZCash isn't interested in privacy as a human right, only privacy for those who hold the right opinion. By the way, the definition of criminal varies from country to country as I said in the last section. I'm attacking the vision of ZCash's leader which is fair game.

In the Monero community, one of Monero's paid workers was also working for another crypto project. There is more to this story, but the conflict of interest was brought up in the community and the worker resigned.

The general fund was also questioned and a general fund report was created.

## Consensus Algorithm

### Proof-of-Stake (PoS) vs Delegated Proof-of-Stake (DPoS)

Before we compare staking to working, let us first decide what's objectively a better staking mechanism. DPoS suffers from even more issues compared to normal staking. Delegation is not more democratic, it's more centralized.
The rich have more votes, increase their delegate's likelihood of winning, and giving the rich voters a bigger share of the rewards.
There is a sacrifice of centralization in the name of scalability and even according to Vitalik (ETH founder), there are incentives for the delegates to collude.
In conclusion DPoS is worse than PoS so I will compare PoW to PoS.

### Proof-of-Work (PoW) vs. Proof-of-Stake (PoS)

So now we have come to the discussion of PoW vs PoS. Unlike previous PoS critics, I'll be arguing that PoW is better than PoS from the equity point of view and that PoS benefits the wealthy more than PoW.
PoS critics usually try to argue that PoS is less secure than PoW, but I have never seen them respond back to the solutions proposed that punish bad actors. That is why I don't consider them as solid arguments and will merely mention them.

1. In PoW, there are costs to validating transactions in a block. The mining rewards are an incentive but a cost must be taken for a chance to get the rewards. There is real risk involved.
2. With PoS, the rich arguably get richer. A better argument is that the rich do not distribute or invest their coins in order to get richer. With PoW, the rich will have to actively spend their crypto (assuming a crypto world), distributing their coins to hardware companies and then the working class, in order to simply get the chance of more money. There is a measurable physical cost associated with it. Rewards are distributed to those who put in the most work, and not people who had the most. PoS is like a Central Bank giving newly printed money more often to the people who have saved the most. What's to stop the UN to start a resolution that requires countries to buy up all PoS coins and then stake them together? Then the supply of ETH is fully controlled by the government at no cost to them.
3. This point is more economical and theoretical than about PoS: Inflation is when prices increase year over year. If done correctly, there is a higher cost to money hoarders than those who have an appropriate amount saved. The cost to live should be non-increasing but the cost of luxury goods should be non-decreasing and a marginal property tax can help tackle wealth inequality without direct discrimination. The wealthy should be able to live where they want and own as many properties as they desire but they should be dissuaded in raising the cost to live for others. I say all this because crypto should not benefit the fortunate more than the unfortunate. It should benefit innovation, and risk. I have purposely excluded investment because a scam also requires an investment and that is not something crypto should reward. Pre-mined coins disproportionately rewards those in power and not necessarily those that take on risk. The first buyers take on more risk than those who are facilitating the presale. There is more trust required than a PoW coin that simply utilizes users' CPU. The price of the token is determine by those that mine it and are not set by the founders/upper class.
4. [Weak Subjectivity](https://medium.com/@abhisharm/understanding-proof-of-stake-through-its-flaws-part-3-long-range-attacks-672a3d413501)
When a node comes online for the first time, how will the node know the hash of the valid chain? In PoW, the correct chain is objectively the longest chain which is determined by computation power. In PoS, the new node will have to trust other nodes to be broadcasting the right information. Let's look at Vitalik's argument: "consider the kind of situation where weak subjectivity by itself would compromise a blockchain's security. In such a world, powerful corporate or nation state actors would have the ability to somehow convince an entire community that block hash B was the block hash of block XXXYYY when most of them saw at the time and have stored in their own computers that the block hash of block XXXYYY was A, but for some reason such powerful actors would not have the ability to trick users into accepting a different location from where they download their client software."
According to Vitlak, a bad actor cannot set up more than half the network's nodes and broadcast the wrong hash such that when the nodes restart due to a network update, they won't rely on false information? It's pretty obvious that the cost to set up 51% of broadcasting nodes is considerably less than the cost to achieve 51% of the network's hash rate.
I'll admit this argument is very fuzzy, but I am open to removing it completely if one is willing to provide an unbiased risk analysis of weak subjectivity.
5. Another argument is PoS is permissioned vs PoW's permissionless. To get Monero, one can mine it on any CPU. For PoS, one needs to buy the crypto from another entity to participate in the system.
6. A premine was probably required if there was never PoW and so PoS coins reward the rich at no cost to them. A system that favours merit over the oligarchs is always fairer.
7. Other arguments that other people use (not part of my actual argument, just something to think about): Accumulated work (reversing the PoS chain is faster than than the PoW chain), finality requires 2/3 instead of 51%.

I strongly believe that ETH 2.0 will show everyone if PoS is here to stay or is significantly less secure than PoW, but what it won't show that it is more equitable than PoW.

As for Monero. Monero would only adopt PoS if the community voted for it and for the time being, that seems unlikely. Any Monero fork that uses PoS will be used less than Monero itself, and by the network effect, Monero will be used, not PoSonero.

## ASIC Resistant Proof-of-Work

Now that we have determined that PoW is more secure than PoS, let's figure out why PoW is better on Monero than the other PoW cryptos like BTC.

For a proof-of-work network to be secure, it needs to prevent centralization and advantages. Cryptos like BTC and ZEC are all compatible with ASICs and thus prone to centralization by big corporations with ASIC farms. Monero however, uses the (4x audited) RandomX algorithm which is tweaked to run worse on GPUs and ASICs compared to CPUs by making use of as many CPU features as possible. Before [RandomX](https://github.com/tevador/RandomX/blob/master/doc/design.md), Monero needed hard forks to render any specialized ASICs useless. However with RandomX, the virtualization techniques used increases the complexity of implementing a RandomX ASIC to the point where an ASIC would end up being a CPU.

The logic behind ASIC resistance is as [follows](https://www.reddit.com/r/Monero/comments/ggdp8e/comment/fq0332a/?utm_source=share&utm_medium=web2x&context=3): PoW algorithms are meant to be inefficient for ALL parties. ASICs allow for hardware advantages and thus greater efficiency for some parties than the individual. The ASIC manufacturer maintains a hardware advantage over other miners and can thus produce more hashes per Watt than other miners. This is objectively more centralized. Example:

```md
Let CPU hashes per core = x hashes / watt

# SHA-256
ASIC hashes per core = nx Hashes / Watt, n > 1 [Advantage to specialist]

# RandomX
ASIC hashes per core < x Hashes / Watt [due to Randomness + Virtualisation]

ASICs cannot be made to outperform CPUs since the entire algorithm creates a random program that leverages as many CPU features as possible.
```

Not only would it be costly and difficult to create an ASIC to run RandomX more efficiently, but there is also a massive risk that Monero can simply hard fork again and use a modified algorithm. There are more lucrative opportunities for profit-driven firms than to try and create a complex ASIC for an algorithm purposely created to make the process difficult.

## Transaction Fees, and Liquidating Monero

I'm only including this for everyone to get the idea that transaction fees are only horrible for ETH at the moment.

To properly compare fees, we will normalize each cryptocurrency market cap to that of Bitcoins, to get the normalized price and thus normalized USD fee. For most cryptos, transactions correlate with fees but not with Monero; the opposite is true, one factor being dynamic block sizes that end up lowering the fees per transaction as transactions/block increases. The argument for fees is to penalize spam, which is the attack on NANO that went on for months. The only incentive to run a NANO node is to accept NANO…The entire worth is derived from the network effect and not actual technology or cost like PoW cryptos.

![Transaction fees table](/images/crypto/transaction-fees.png)

[Source of calculations](https://docs.google.com/spreadsheets/d/1WfRmKKbGrSF_t95fattTJYfZXL2qk6-byNjCXh-oYA4/edit#gid=0)

### Notes

- For Ethereum, the normalized Fee is poised to change when ETH 2 rolls out which will allegedly make it competitive with Solana.
- With Monero, transaction fees actually decrease as transactions increase due to dynamic block sizes. You can read more about dynamic block sizes in my Intro to Monero at the beginning of this article. If the minimum transaction fees are deemed too high, Monero can always reduce it in a hard fork, but at the moment there is no need.
- With Stellar, the fee was back-calculated from $0.00025 / transaction currently. I'm not sure if it's tied to fiat or just transaction traffic.

There really isn't much to say about transaction fees. Anything less than $2 / transaction is good since credit card transactions cost %1.5–3 and thus sellers can accept crypto transactions that are short up 2%.

Supply caps and block reward reductions may play a role in the future, but I'd rather wait and see make baseless speculations.
This is an unknown type of risk with Bitcoin in its current state.

## International Standards

Lastly, Monero and Stellar both use the ISO 4217 currency standard for international currencies just like XAU is for one troy ounce of gold. This reason is a semantic one, so that's why it's last.

## Liquidating and Purchasing Monero

This is not important to the argument, however it is important for Monero users.

By now if you hate Monero, you will be tempted to start throwing a temper tantrum about Monero being de-listed and the "fear of regulations". Guess what you can use instead? You can use [fixedfloat](https://fixedfloat.com/) to exchange XMR to XLM for a 0.5% fee and then deposit XLM on the exchange you use to sell immediately to fiat. Make sure the exchange you use can be trusted or that any crypto you deposit can be recovered through at least legal means. The reason I chose XLM and not any other crypto is because I did the math, and the math says that Stellar is the cheapest today to use as a medium.

To buy Monero, just do the same as above, but the other way around.

![Monero Swapping Fees](/images/crypto/monero-swap-fees.png)

## Addressing Scalability

Just as a reminder, with Monero, fees reduce as transactions per block go up.

### Scenario A: Matching Bitcoin

There are currently 272503 transactions per day on Bitcoin,
so we need to check if even modern hard drives and SSDs can handle this amount of transactions on the Monero blockchain.

From xmrchain.net, the average transaction size on Monero for the last 25 transactions is 2.05 kB.
We'll use 3 kB per transaction to account for any future upgrades and other block data.

Since block times are ~2 minutes, instead of 10, the transactions per block is: 272503/24/30 ~= 379 transactions per block.
A block's size is 379 * 3 = 1.137 MB. Even poor internet download speeds could handle this.

A year's worth of transactions would be 1.137 \* 30 \* 24 * 365 = 298,803.6 MB = 300GB.

At 300GB a year, we use 3 TB a decade, and 9 TB every three decades.

Overall, we need to spend $500 for a 16 TB hard drive or $1,000 for a 8 TB SSD.
This is the cost in the present, but overtime storage prices will go down.
By the usage described before, an SSD will last 2.5 decades and an HDD will last 5 decades!

### Scenario B: a Practical Stress Test

Now we will figure out the transactions/day limit. Let's say in the future, Monero upgrades to allow nodes
to use data for 10 years. That is, any transactions incorporating outputs that are more than 10 years old
will be considered invalid. At 8TB/decade, we get 800GB per year which is x2.67 more than our previous
scenario. 800 / 365 / 3 = 730,593 transactions per day. And again, this is under the assumption that transactions become
46% bigger than they currently are. If we use the present average of 2.05 kB, 800 GB / 365 / 2.05 KB = 1,069,161 transactions per day.

Thus, max transactions per day is within the range [730,593, 1,069,161]

## Recap

Monero offers fungibility, all aspects of financial privacy without requiring users to know of specific techniques, and an ASIC-resistant proof-of-work system. These three important topics might make Monero the best cryptocurrency as of today, but its open-minded and always-improving technology is why it will continue to be the best. Monero is digital cash, not a Security.

If you enjoyed this article and want to support my future works, feel free to donate _anonymously_.
[84PR6SkYd5zaFLKDjAFrQfbaAg2c7SV3q3XDZ15QCpEZUggrN4YzY7n8m9XC3deXjo41yWHTm1LrsUpPTYGnRQbD9Cwp8En](monero:84PR6SkYd5zaFLKDjAFrQfbaAg2c7SV3q3XDZ15QCpEZUggrN4YzY7n8m9XC3deXjo41yWHTm1LrsUpPTYGnRQbD9Cwp8En)

![monero:84PR6SkYd5zaFLKDjAFrQfbaAg2c7SV3q3XDZ15QCpEZUggrN4YzY7n8m9XC3deXjo41yWHTm1LrsUpPTYGnRQbD9Cwp8En](https://elijahlopez.ca/static/images/monero.png)

Thanks to Monero, I only have one wallet that has multiple addresses and I don't need to worry about someone curious spying on the amount of Monero I lost in a boating accident.
