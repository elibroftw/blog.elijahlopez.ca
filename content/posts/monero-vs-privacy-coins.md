---
title: "Monero vs \"Privacy Coins\""
date: 2022-02-26T12:48:07-05:00
draft: true
---

## PreFace

Unlike my last article about why Monero is the best crypto as a currency because of its privacy vs. layer 2 solutions, this article is a dive on why I continue to choose Monero and not other privacy competitors.

I've had enough of hearing FUD about Monero from other privacy coin enthusiasts who coincidentally never state they are in privacy coins for the tech and not the potential price increase if their coin reaches the market cap of Monero, which is the most suppressed and censored coin by exchanges to date.

If I make any mistakes, let me know and I will correct them. I have multiple reasons, so even if one or two are technically incorrect, the argument will nontheless be valid.

Monero is the FIRST privacy coin that was not pre-mined.

### Actively Developed

- Monero is the most actively developed privacy coin

### Monero Changes for the Better

- Forked from ByteCoin to avoid shady premine (see where ByteCoin is now vs. Monero, no premine is a PRO)
- Stealth addresses
- Ring-CT
"The percentage of deducible inputs through zero chain analysis
decreased to nearly 0% after the increases in required number of mixins and the introduction of RingCT." This is important later on for Ryo coin.
- Bulletproofs
- RandomX (innovation), before this hard forks were needed often for ASIC resistance
- Atomic swaps (infrastructure)
- More to come: a new sampling algorithm to defeat  time heuristics
- The privacy offered by Monero today is far greater than Monero 3–4 years ago.

### Monero is Self Reflective

- Monero's researchers actively try to create attacks on Monero's privacy so that the protocol can be improved to defend against these attacks.
- The above is like white hacking but on a academic level.
- This can be seen by the introduction of Ring-CT after the paper(s) by Malte Möser.

### Monero Does Not Censor Ideas

- If you've ever been on the Monero subreddit, you will always come across a "Thoughts on X?" where X is either a transparent coin, an ex-developer, or another alt coin or 2nd layer solution with "better" privacy.

## ZCash

We won't use trusted setup as an argument for this article, even though as of today, the Halo Arc update that was supposed to remove trusted setup is 28 days overdue. What is unavailable is the technical aspects of how the trusted setup will be removed or what replaces it to ensure privacy.

To begin, the best privacy would be the best at being untraceable, and the best at protecting our holdings and linking identities. In 2020, a [team of researchers (PDF)](https://eprint.iacr.org/2020/593.pdf) concluded that 99.9% of ZCash transactions are Traceable. In the abstract, researchers say "strict security and anonymity requirements, … makes the coin effectively untraceable, as shown by Monero." What does this mean? Optional privacy is junk. If you decide to use shielded transactions on ZCash, you've made a target of yourself since your transactions stick out like a sore thumb!

From this picture below, how would the user know if they are sending from a shielded address? They don't know! This hurts the privayc of ZEC users. It hinders privacy without even improving UX.

![ZCash Wallet 1](/static/images/crypto/zcash-wallet-1.png)

Each address is it's own account, and so no sub-addresses are possible.

![ZCash Wallet 2](/static/images/crypto/zcash-wallet-2.png)

Compare this to Monero. Each account has infinitely generated subaddresses and the balance is shown on an account basis.

![Monero Wallet 1](/static/images/crypto/monero-wallet-1.png)

![Monero Wallet 1](/static/images/crypto/monero-wallet-2.png)

The Zecwallet Lite also does not store the wallet encrypted. I was never asked to create a pass code to decrypt the wallet so anyone who uses ZCash on a computer can have their ZCash stolen if their laptop/computer/storage is accessed by a third party. I don't know about you, but privacy goes hand in hand with security.

When sending Monero, users do not have to think about if they are sending from the "right" account since each account's primary address shows up as a stealth address in the Ring-CT in the block of the blockchain. Recipients can't make judgments about your level of care to privacy if you decide to donate with a primary account or other account. Unlike ZCash, where the recipient will know whether you made a shielded transaction or not, and then make you a target (assuming an all Monero ecosystem or an all ZCash ecosystem).

ZCash users say ZCash is better because it uses zk-snarks to avoid large transactions sizes. We'll see what happens when we combine this with optional privacy.

There is also no wallet for Stagenet/testnet, so testing ZCash will be a problem.
Here is the [ZCash testnet](https://zcash.readthedocs.io/en/latest/rtd_pages/testnet_guide.html) in case someone or even myself in the future wants to find
more practical issues with ZCash.

Then there's ZEC's founder fee of 10% of a global currency. Users have to pay a tax to keep ZCash in development? Where's the Linux tax then to use Linux? Linus Torvald should be the richest man alive if this was an ethical thing to do!

Lastly, ZEC does not use an ASIC resistant PoW algorithm and will become PoS in the future as indicated by its CEO! Yes ZEC is a product of centralization, not decentralization. It's CEO had drunkenly admitted to being against privacy for all (criminals here).

{{< tweet user="zooko" id="863202964416077824" >}}

It's funny how ZCash pays Edward Snowden, a criminal in the USA, to support ZCash, which would oust him if he used it in the US.
ZCash's philosophy is "if a state doesn't like you, we don't like you, unless you are an influencer." I had no idea that it's even possible to be a double hypocrite.

How it can be done is a question but before you think of banning criminals from having privacy, first think about how that's even possible. And then think about if you would've been a criminal if you had just been living in a different country, such as an authoritarian one. Venezuela, China, Saudi Arabia, Russia, not that any of these are literally authoritative.

## Oxen

A PoS fork of Monero, so it's not good money. However they are trying to innovate in terms of DApps unlike other projects listed here.

## Secretcoin

It's PoS. If you've seen my previous Cryptocurrency article, you'll know why PoW > PoS
Other than that, it's Dapp ability has not been seen in practice. That's not an argument, I really do want to see its use.

## Grin

- Like the Lightning Network, users need to actively exchange data in order to receive. Want to receive donations? You'll need to use a website to facilitate the transaction. They did this in the name of scale. But this is a huge downside. Scale is not an issue in Monero, and if it does become an issue, then we can talk about solutions. YouTube itself has managed to stay stable and it stores Petabytes of information. Scale is a relative term and until Monero is over 1TB in size, scale is a non-problem.
- Since it is mimblewimble by default, it is just the successor to Litecoin, and not anything special. If mimblewimble was that good, even Litecoin would be considered as private. In terms of the privacy hierarchy, Grin is at the same level of ZCash, maybe a bit worse since no

## Beam


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

DERO is a dead project, and anyone that mentions it is either arrogant or has malicious intent.

## Pirate Chain

This is also a fork of Monero.

## Particl (PART)

Privacy except at certain times
