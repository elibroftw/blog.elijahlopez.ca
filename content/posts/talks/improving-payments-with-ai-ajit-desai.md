---
title: "Improving Safety and Efficiency of Payment System using AI and Quantum Computing"
date: 2024-05-27T16:03:52-04:00
draft: false
author: Ajit Desai
---

## Papers

- Bank of Canada
  - Needle in a haystack (may 15 2024)
  - Using AI to improve the system (december 2023/2022)

### Motivations

- transactions need to be settled
- public payment system
- national financial infrastructure for every country
- hard to design a new fast and efficient payment system

Can we predict GDP from payments? Usually only care when it is broken but now also want to ensure it won't break in the future.

## Payment System

- Processing & Netting: When customers and merchants interact, the banks are settling the payment on the customers behalf. Only net balance is settled at the end of the day (ACSS)
  - daily volume of 40M and $35B in value
  - POS< ABM, cheque, drafts, payroll, mortgages
- Lynx: large value payments (52,000 at $400B)
  - FX, CDX, retail settlement, central bank's and government's payments
- High-Value Payments System

Payment Data Opportunities

- Timely
- Precise
- High-frequency
- broad

Challenges

- useful data is missing (e.g. purpose)
- collected for admin adn regulatory purposes
- policy and technological changes over time
- data may not be used for policy or research

## Monitoring

- Need to investigate changes to patterns
- Anomalies such as different location
- Cyber Attacks
  - hackers might attempt to steal from accounts at the New York Feds
- Challenges
  - Needle in a haystack
  - Complex strategic interactions
  - Most transactions are usual behaviour

### Layered ML Framework

Use a payments classifiers to differentiate potential anomalies and then use another model for further analysis.

### Payment Feature Extraction

- Basic transactions features
  - sender, receiver, and amount, type, etc.
- Liquidity features
  - collateral pledged, credit limits of both the sender and receiver
- Timestamp features
  - day of week, day of month, week of the year, month
- Intraday features
  - temporal differences between payment settlement times
- Use a neutral network or regression for the classification problem. For example output can be morning vs afternoon

### Anomaly Detection

- isolation forest
- payment amount vs payment timing
- use usual days for training, special days (like holidays) are used for testing

## Quantum Transaction Ordering

- Payment systems are liquidity intensive
- Banks have to deposit collateral and then get credit
- Can also recycle payments received
- Lower liquidity higher delays

Liquidity Efficiency

1. A &rarr; B ($3)
2. A &rarr; B ($1)
3. B &rarr; A ($1)
4. B &rarr; A ($2)

First-in-first-out liquidity efficiency = 1.75

- offsetting (seek netting sets) LE = 2.33
- Ad-hoc reordering (bypass large payments) LE = 2.33

Full reordering

What is the optimal order in which transactions should be processed to maximize the liquidity efficiency of the system? Processing time grows exponentially.

Maybe use an algorithm similar to median of medians.

NP-Hard optimization problem.

Physical properties of quantum computer delivers a better heuristic.

Put the quantum optimizer before it goes to the high-value payments system.

Computer that is being used (owned by DWAVE): DWave 5,000 Qubits, 700 maximum payment requests.

HIgher payments delay cost for the liquidity savings.

## Questions

- Why are we settling payments one by one if they are are aggregated at the end of the day. Is the roadblock not regulatory
  - payments must be settled at end of day, and there are throughput guidelines for during the day
  - How does it actually work then?
    - The payments need to be settled real time, which is why this problem came to be
    - The payment queue builds up when the banks have exhausted their credit limit. The central bank then tries to use an algorithm to clear off as many as possible
- Is the Quantum solution actually being used right now?
  - no, it's just a study
