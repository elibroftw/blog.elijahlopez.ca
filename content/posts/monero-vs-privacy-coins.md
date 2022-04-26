---
title: "Monero vs \"Privacy Coins\""
date: 2022-02-26T12:48:07-05:00
hidden: true
draft: false
tags: [
  "monero",
  "cryptocurrency",
]
---

## PreFace

Unlike my last article about why Monero is the best crypto as a currency because of its privacy vs. layer 2 solutions, this article is a deep dive on why I continue to choose Monero and not other privacy competitors.

I've had enough of hearing FUD about Monero from other privacy coin "enthusiasts" (aka biased investors) who coincidentally never state they are
in privacy coins for the tech. Their usually almost talking about the potential price increase if their coin reaches the market cap of Monero, which is the most suppressed and censored coin by exchanges to date.
Just go on any of these subreddits and there are posts about the price of the coin and how it will go to the moon any second now.
Go to Monero and you'll find people allowed to criticize and question Monero's technology, without recourse.

If I make any mistakes, let me know and I will correct them.
I have multiple reasons, so even if one or two are technically incorrect, my argument will nonetheless be valid.

1. Monero is the FIRST privacy coin that was NOT PRE-MINED.
2. **Most used** *privacy* crypto
3. Monero is actively improved upon
4. Monero Changes for the Better
    - non-premined ByteCoin fork, and after that: introduction of Stealth addresses, Ring-CT, Bulletproofs(+)
    - RandomX (innovation) ASIC resistance mining algorithm avoids using hard forks
    - Monero is superior today than Monero 5 years ago, and Monero in 5 years will be superior to Monero today
    - Atomic swaps (infrastructure)
5. Monero's researchers actively create / think of attacks on Monero's privacy so that the protocol can be improved to defend against these attacks.
6. Censorship free, there is even a post called Sketicism Sunday!

## ZCash

I start with ZCash because by proving Monero > ZCash, all other coins should make a case
that they are better than ZCash before trying to spread Monero FUD.
It's only fair that the lesser used and known privacy cryptos, figure out who the runner up to Monero is.
Otherwise, it'll be impossibe to do an unbiased comparison of them all to Monero in the future when thousands of people think
they are the next Satoshi. A similar argument can be made for political ideologies, economic policies, etc.

Although I doubt anyone ever thought about applying a gaming concept to real world issues.

We won't use trusted setup as an argument for this section, even though as of today,
the Halo Arc update that was supposed to remove trusted setup is 28 days overdue.
What is unavailable is the technical aspects of how the trusted setup will be removed or what replaces it to ensure privacy.

### A Privacy Coin without Privacy Users

The best privacy would be the best at being untraceable and at protecting our holdings and linking identities.
In 2020, a [team of researchers (PDF)](https://eprint.iacr.org/2020/593.pdf) concluded that 99.9% of ZCash transactions are Traceable.
In the abstract, researchers say "strict security and anonymity requirements, … makes the coin effectively untraceable, as shown by *Monero*."
What does this mean? Optional privacy is junk. If you decide to use shielded transactions on ZCash,
you've made a target of yourself since your transactions stick out like a sore thumb!
You don't have privacy if you're the only users. I'll say this again at the end of this article.

Most ZCash users don't use shielded addresses and even the miners don't follow the advice of Electric Coin Company to use sheilded addresses.
Mining pools get to decide whether miners get to use shielded addreses. Another case of optional privacy simply not working!

[Transparent to shielded transactions](https://explorer.zcha.in/transactions/537a4edc34ea030216ef0c04e0a977e5efeda53aa497c41560c4ac658a5f5192) don't even hide the amount sent to a shielded address.

The consequence of this is that users have to conciously remember to use different transaprent addresses for people/entities who refuse
to send ZEC to shielded addresses.

### Wallet Experience

From this picture below, how would the user know if they are sending from a shielded address? They don't know! This hurts the privayc of ZEC users. It hinders privacy without even improving UX.

![ZCash Wallet 1](/images/crypto/zcash-wallet-1.png)

Each address is it's own account, and so no sub-addresses are possible.

![ZCash Wallet 2](/images/crypto/zcash-wallet-2.png)

Compare this to Monero. Each account has infinitely generated subaddresses and the balance is shown on an account basis.

![Monero Wallet 1](/images/crypto/monero-wallet-1.png)

![Monero Wallet 1](/images/crypto/monero-wallet-2.png)

The Zecwallet Lite also does not store the wallet encrypted.
I was never asked to create a pass code to decrypt the wallet so anyone who uses ZCash on a computer can have their ZCash stolen if their laptop/computer/storage is accessed by a third party.
I don't know about you, but privacy goes hand in hand with (operating and informational) security. There even is a wallet encryption option, but just like privacy, security is off by default!
To think that these people sponsor Edward Snowden who has the spine to go against the USA but has no spine to scrutizine this project.

When sending Monero, users do not have to think about if they are sending from the "right" account since each account's primary address shows up as a stealth address in the Ring-CT in the block of the blockchain.
Recipients can't make judgments about your level of care to privacy if you decide to donate with a primary account or other account.
Unlike ZCash, where the recipient will know whether you made a shielded transaction or not, and then make you a target (assuming an all Monero ecosystem or an all ZCash ecosystem).

ZCash users say ZCash is better because it uses zk-snarks to avoid large transactions sizes. We'll see what happens when we combine this with optional privacy.

### Horrendous Developer/Testing Experience

There is also no wallet for Stagenet/testnet, so testing ZCash will be a problem.
Here is the [ZCash testnet](https://zcash.readthedocs.io/en/latest/rtd_pages/testnet_guide.html) in case someone or even myself in the future wants to find
more practical issues with ZCash.

I was trying to test out ZCash transactions, but ran into major troubles.
First of all, the ZCash GUI wallets don't support testnet.
Secondly, the CLI does not support for on Windows.
Thirdly, because I have WSL, their `zcash-cli` says it requires a `zcash.conf` even though the file exists in same directory as the binary!

I was trying to test out ZCash because to confirm that creating sheilded transactions are incredibly slow.
There are no demos online showing the time it takes to generate a simple shielded transaction.

I will admit, there aren't videos showing Monero transaction creations, but I'm planning to make that video myself since
the time to generate a transaction is max 30 seconds for one receiver, and the majority of this time comes from
fee estimation. In my opinion, this is a UX problem, since transaction generations speed up exponentially after one has been generated.
Searching online yields in some guy using two webapps and a CLI to send ZEC to many receivers, but he cut the waiting process.

## Leadership? Of a cryptocurrency?

Yes, ZCash is basically a publiclly traded company, except the owners of ZEC have no power
over the owners of the Codebase.

There is a developer tax of 10% on the total capped supply.

No single company owns 10% of the total money of the world, yet ZCash founders think it's reasonable or they think ZCash isn't a global currency.
Users have to pay a tax to keep ZCash in development?
Where's the Linux tax then to use Linux? Linus Torvald should be the richest man alive if this was an ethical thing to do!

Lastly, ZEC does not use an ASIC resistant PoW algorithm and will become PoS in the future as indicated by its CEO!
Yes, ZEC is a product of centralization, not decentralization. It's CEO had drunkenly admitted to being against privacy for all (criminals here).

{{< tweet user="zooko" id="863202964416077824" >}}

It's funny how ZCash pays Edward Snowden, a criminal to the USA, to support ZCash, which would turn around and oust him if he used it in the US.
ZCash's philosophy is "if a state doesn't like you, we don't like you, unless you are an influencer." I had no idea that it's even possible to be a double hypocrite.

How it can be done is a question but before you think of banning criminals from having privacy, first think about how that's even possible.
And then think about if you would've been a criminal if you had just been living in a different country, such as an authoritarian one.
Venezuela, China, Saudi Arabia, Russia, not that any of these are extreme authoritarianism.

## A Counter-Argument to Zooko

The solution to the narrow problem below is random amounts of churning, at least until Seraphis comes and increases the ring signature.

Zooko believes Monero's privacy obfuscation does not work because of the posioned outputs attack.
In essence, bad actor A sends to an anonymous address owned by person B, and person B sends monero with this stealth address in the ring signature to bad actor C without anonymity.
If this occurs at least 2 times or with another bad actor, then the bad actors can derive the identity of the anonymous person.

The thing is, this attack is not full proof because users can send Monero to themselves (churning).
Each churn would increase the distance between the bad actors, and increases the anonymity set.
At a certain point, which requires more research to determine, there would be siginificant doubt
whether the stealth address included 5 transactions deep is the same user as the one sending the monero.
And if the stealth address is included in someone elses transaction to the bad actor, consider all
accusations void!

The assumptions that Zooko makes are:

1. User does not churn
2. Users are sending Monero without anonymity to bad actors
    - selling of XMR for fiat one exchanges
    - buying goods and services from businesses who don't respecct user privacy
3. User is being targetted by state actors, which Zooko says he supports in his drunken tweets as I mentioned previously.

When it comes to privacy, how privacy tools are used greatly affects the privacy achieved.

## Oxen

A PoS fork of Monero, so it's not good money. However they are trying to innovate in terms of DApps unlike other projects listed here.

## Secret Network

It's a PoS. If you've seen my previous Cryptocurrency article, you'll know why PoW > PoS.
Secret Network has not demonstrated that they are private at all.
[Here](https://explorer.secret.dev/tx/0x250f41c1b7988a57ad79503d412c99e1dfba04edb110b0237b7e9e2c31d03645/internal-transactions) is a random transaction I found on their blockchain explorer.

We see the sender address, the receiver address, the value of the tranaction, the balances of both the
[receiver](https://explorer.secret.dev/address/0xF070515d7a05ED5f7b2C50106F615E8275e1b9D2/transactions) and the [sender](https://explorer.secret.dev/address/0x53d77827bE168aB2a911B5A14D0f16D1C5657196/transactions),
and by extension transaction history as well. I've said it before and I'll say it again;  Any transparent transactions hurt the privacy of all users.

Secret Network claims to be private, but the blockchain explorer says otherwise. I have more bad news.

Let's open their [website](https://scrt.network/). It looks nice, I'll give them that. However, suppose
I'm interested in owning SCRT. I scroll down and see "Get Started." I click that, and see Store SCRT. I click it,
and scroll down to the bottom. Then I see 4 options avaialble. Keplr is promoted, so I click the link. Guess what?
All four option "links" take me to the top of the page! Anyways, I decided to search up Keplr. Guess what again?
Keplr only has a Chrome wallet.

So you expect people who care about privacy to use a browser to transact privately and not just that,
a specific browser. Chrome! The bare minimum for any crypto project is a working GUI wallet that doesn't require additional dependencies.
I thought Monero's GUI lacks some UX, but amongst the privacy competition, I now realize it ranks at the top.

## Grin

- Like the Lightning Network, users need to actively exchange data in order to receive. Want to receive donations? You'll need to use a website to facilitate the transaction. They did this in the name of scale. But this is a huge downside. Scale is not an issue in Monero, and if it does become an issue, then we can talk about solutions. YouTube itself has managed to stay stable and it stores Petabytes of information. Scale is a relative term and until Monero is over 1TB in size, scale is a non-problem.
- Since it is mimblewimble by default, it is just the successor to Litecoin, and not anything special. If mimblewimble was that good, even Litecoin would be considered as private. In terms of the privacy hierarchy, Grin is at the same level of ZCash, maybe a bit worse since no

## Beam

Someting like beam competes with Grin. At this point, I've given up having to do the homework of people for them.
Monero is #1. The burden of proof is on all other cryptos to prove they are better than Grin, ZCash, and Secret Network.
If they can't or don't do that, users shouldn't even pay these projects a piece of mind. Refer to the introduction of this article.

## Firo

Very disingenious. On their home page, they spit out jargon like Lelantus and Lelantus Spark without explanation.
This is an argument because of its failure to adhere to their privacy standards tagline.

- No stealth addresses
  - What you give out is what gets put into the chain, this is bad when combined with the next point
- Transaction Data is visible
  - Amounts, receiver address, sender address are compltely visible
  - [Proof transaction](https://explorer.firo.org/tx/1d78dcade7ed4274b018df96e136c4256992491679a0c448a1380327748f2c77)
- Dev (Scam) Tax
  - https://www.reddit.com/r/FiroProject/comments/n70pve/comment/gxang90/?utm_source=share&utm_medium=web2x&context=3
  - A project that forces users to donate, is no open-source project at all!
- Hybrid Consensus
  - Firo uses their own FiroPoW algorithm that is optimized for GPUs.
    - CPUs are definitely more accessible than GPUs so coins like Firo make the cost of GPUs go up for people who buy them to game and not to mine.
    - CPUs are much more in abundence and anyone can start mining on their already owned devices.
    - Their reasoning is to sap ETH miners and they throw shade for being anti-botnet which is not true. Botnets are the problem, not what botnets are used for!
  - Masternodes (PoS) are used to mititgate 51% attacks.
    - The rich get richer by using masternodes which requires $3,000
    - Why use Firo as money, when I can run a masternode for $3,000+ and pay off my $5/month digital ocean droplet with the rewards?

They are either not private at all, or not private by default.
They are definitely disingenious to say the least in claiming that FIRO is setting privacy standards.
More like Firo is failing to meet the privacy standards.

Privacy is serious, you should not be sweeping these probles under the bed as if they don't exist.

## Dero

### [Premined](https://github.com/deroproject/documentation/blob/master/premine.md)

Monero has come a long way with consenting donations. No project, that aims to be the best, should force users to subsidize its development.

DERO cannot to be trusted at all.
They used bulletproof technology before the technology was already audited and
the PR person at the time just said ["our devs looked at it okayed it."](https://www.reddit.com/r/CryptoCurrency/comments/8pnt1u/dero_creates_a_new_type_of_dag/e0cvb87/)

Furthermore, there is no GUI wallet.

As for their community, they argue from a position of bad faith:

https://www.reddit.com/r/CryptoCurrency/comments/8pnt1u/dero_creates_a_new_type_of_dag/e0cvb87/?utm_term=30496568983&context=3&utm_medium=comment_embed&utm_source=embed&utm_name=null

https://twitter.com/Serena_Fox_CP/status/1010026987321098240?ref_src=twsrc%5Etfw%7Ctwcamp%5Etweetembed%7Ctwterm%5E1010026987321098240%7Ctwgr%5E%7Ctwcon%5Es1_&ref_url=https%3A%2F%2Fcdn.embedly.com%2Fwidgets%2Fmedia.html%3Ftype%3Dtext2Fhtmlkey%3Da19fcc184b9711e1b4764040d3dc5c07schema%3Dtwitterurl%3Dhttps3A%2F%2Ftwitter.com%2Fserena_fox_cp%2Fstatus%2F1010026987321098240image%3Dhttps3A%2F%2Fi.embed.ly%2F1%2Fimage3Furl3Dhttps253A252F252Fabs.twimg.com252Ferrors252Flogo46x38.png26key3Da19fcc184b9711e1b4764040d3dc5c07

This PR lady is just as dead as the project. Anyone that mentions DERO is either arrogant or has malicious intent.
That can be said for many of these coins: DERO, Priate Chain, Grin, SecretCoin, ZCash.
Disingenious is the middle name of many people.

## Pirate Chain

This is also a fork of Monero. There's not enough information available to comment on Pirate Chain except for

"This software is based on zcash and considered experimental and is continuously undergoing heavy development."
- [source](https://github.com/PirateNetwork/pirate#tech-specification)

It uses the same algorithm as ZCash which is [not ASIC-resistant](https://shop.bitmain.com/product/detail?pid=00020220215091827599V8Y4J7Ls065B).

It's simply not popular enough to warrant a discussion and it should be them to argue against Monero.
Their only argue is usually zk-snarks, but trusting zk-snarks is risky. There is no indication if Pirate
used a trusted setup or not. In security, strong guarantees are required not probabilities.

I also tried to test their sketchy wallet, but it required me to download the blockchain. Yeah no thank you.
If Monero can be used without a local blockchain, then I shouldn't need to download the blockchain to test a coin that does not even have a tenth of Monero's usage.

## Particl (PART)

Privacy except at certain times

## Conclusion

Cryptocurrency is a tool. and similar to religion, there are many of them.
In religion, there's something called Pascal's Wager. ThereminTrees has a good video on the fallacy.

{{< youtube fZpJ7yUPwdU >}}

Essentially, there isn't enough time for you to do an unbiased research on all religions to figure out
the best one. But we are presented with this same problem for cryptocurrency but [I have a solution](/posts/converging-opinions).

Compared to Monero, these other privacy coins are used 1000x less. The burden of proof is on them to prove
that they are better than Grin, ZCash, and Secret Network before asking to argue against Monero.
Every redundant coin comes at the expense of collective privacy.

It's unreasonable to ask Monero developers and experts to spend their time rebuttling your arguments
when the cryptos both have the same goal. And if you can prove the coin to be better than Monero to me,
good luck trying to do it with Bitcoin maxis. I have an open mind; why else would I even try to use ZCash and Secret Network?

Lastly, I hope for people to contribute to a single digital cash project rather than start their own.
It's sad enough that people think the upgrades to Monero are not needed.
