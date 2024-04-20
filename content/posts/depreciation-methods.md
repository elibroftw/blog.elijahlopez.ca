---
title: "Depreciation Methods"
date: 2024-04-20T12:10:14-04:00
draft: false
tags:
  - accounting
  - finance
---

## Straight Line

## Double Declining Balance

Depreciate each year by a percentage of the carrying value that is equal to double the straight line percentage. So if the useful life is X, the double declining balance would mean a depreciation expense equal to Carrying Value \* (2 / X). In the last year, depreciate directly to the salvage value instead of multiplying.

A portfolio of Lathes are purchased for $10,000. The Lathe's have a useful life of 10 years and will be depreciated using the double declining method

## Units Used

The second easiest depreciation method to memorize. If a machine is rated to have a life of 40,000 hours, depreciate based on the number of hours used. I remember using this practice mostly in managerial accounting.

Suppose a Lathe was purchased for $100,000, has a residual value of $1,000 (scrap), and is rated for 40,000 hours.

In 2023, 10,000 hours were logged on the machine. What is the journal entry?

$99,000 for 40,000 hours. Therefore 10,000 hours is equivalent to $24,750 of depreciation.

```accounting
Dr. Depreciation Expense $24,750
  Cr. Accumulated Depreciation - Equipment $24,750
```

## Sum-of-the-years'-digits Depreciation

- An accelerated method of depreciation.
- For example, if the estimated useful life is 10 years, the sum of the years' digits are 10+9+8+7+6+5+4+3+2+1 = 55
- The depreciation rate in the first year is 10/55, in the second year is 9/55, …

## Capital Cost of Allowance

Although not a depreciation method, in Canada, CCA and depreciation are [interlinked](https://www.youtube.com/watch?v=ZRcpnM26nJM). Therefore, we will quickly go over tax bases, assets, and liabilities.

As someone who has implemented software for CCA for T2 corporate tax returns, it's a bit more complicated than the formula I've linked below. For example, there's many different classes, and in the future, the acceleration (1.5x) might be phased out. There's also immediate expensing.

For details of income taxes, you can read these two sections in my [Intermediate Accounting II notes](/posts/university/bu-397/intermediate-financial-accounting-II#capital-cost-of-allowance-recap).

In my notes, the tax base is the amount that is yet to be deducted for tax purposes. So when the tax base and the carrying value defer, we need to recognize on the income statement that in the future, there will be

- more taxes to pay (carrying value > tax base)
  - Dr. deferred tax expense
    - increases the income tax expense line
  - Cr. tax liability
- less taxes to pay (carrying value < tax base)
  - Cr. deferred tax benefit
    - decreases the income tax expense line
  - Dr. tax asset

A key point from a finance perspective is that a corporation might be fairly valued from an EPS point of view, but under valued from a cash flow point of view since deferred taxes are not discounted. So if a corporation reports a deferred tax expense, an arbitrage opportunity - although small - might exist. BUt that's just my perspective.
