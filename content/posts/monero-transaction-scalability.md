---
title: "Monero Transaction Scalability"
date: 2023-04-16T17:00:21-04:00
draft: true
summary: TODO
tags:
  - monero
---

I was reading a case on PayPal today for my exam tomorrow, and a number that was highlighted was that Paypal processed 15.4 billion transactions annually. As a Monero fanboy, I wanted to see how effective Monero could be in the future when inevitability the base layer of transferring funds will be Monero. Either in a PayMonero fashion with KYC or a direct processing fashion.

So let's get started. Assuming Monero was to do 15.4 billion transactions per year, that is 42,191,780 transactions per day. Dividing this by the number of minutes multiplied by two, we get 58,599 transaction per Monero block. At an average of [2.11KB per transaction](https://www.getmonero.org/2022/04/18/this-year-in-monero.html), that's 123.702489 MB per block.In terms of bandwidth, this is acceptable, however, 15.4 billion transactions per year is 33,353 billion bytes or 33.35 TB / year.

This is still possible to sustain if all 6416+ billion dollar corporations invested in petabyte datacentres. In a world where Monero has replaced PayPal, it is reasonable to assume, that big corporations would do their part in ensuring the network functions. Or alternatively, rather than each person run a node, each city would be run a node for their city and give out authenticated access to said node.

Lastly, in the situation of Monero adoption being big but not big enough to instigate infrastructure investment changes, there would be R&D spent towards lightning like protocols for Monero. Maybe a system where instead of channels, there would be banks built on Monero itself, so that transaction sizes would be small. Whenever someone wants to withdraw Monero, the bank would send Monero to the users' wallet address. When paying for something online, there would be an integration with multiple banks to facilitate Monero based transactions similar to how a payment in a fiat currency is done without going through the central bank.
