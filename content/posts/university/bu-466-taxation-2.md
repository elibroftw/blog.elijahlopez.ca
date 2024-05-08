---
title: "BU 466 Taxation II"
date: 2024-05-06T15:56:02-04:00
draft: false
tags:
  - university
  - accounting
aliases:
  - /posts/bu-466-taxation-2
---

A focus on corporation and tax planning.

- In-Class Participation 5%
- ~~Assignment Problem Submissions 5%~~
- MyLS Quizzes (3 x 5% each) 15%
- Mid-term Examination (2 hours) 30%
- Final Examination (2.5 hours) 45%
- 95%

## Chapter 11

For corporations take accounting income and then reconcile to arrive at Division B income.

Available Division C deductions:

Individuals

- Employee stock option
- Capital gains deduction
- Loss carryover

Corporation

- Dividends
  - Integration means that the tax code should avoid double taxing income
  - Inter-corporate dividends (specifically qualifying) show up in Division B (non-grossed) and Division C meaning 0 taxes
  - Foreign affiliates: can sometimes be qualifying if there's a tax treaty with Canada. For this course, foreign dividends are never qualifying
- Charitable gifts (Sec 110.1(1))
  - Limited to 75% of Division B income
  - Remaining 25% is a carry forward for up to five years
- Loss carryovers (Sec. 111)
  - Non-Capital loss (back 3 years, forward 20 years)
    - total losses including division C (applies to anything)
  - Allowable Business Investment Losses (ABIL) - disposition of shares and debts of a Small Business Corporation
    - Similar to allowable capital loss except it can be claimed against anythin
    - the Allowable indicates a 50% inclusion of the losses
    - 50% of losses can be claimed against anything
    - carry back 3 years, carry forward 10 and then reclassified as net-capital loss
    - Reduces Division B income
  - Net capital loss (back 3, forward indefinitely)
    - Restricted to taxable capital gains
    - The inclusion rate has already been applied to this
    - Inclusion has already been done if accounts are Taxable Capital Gains and Allowable Capital Losses
  - Restricted farm losses
  - Farm losses

1. Generally apply the most restrictive first
2. To apply that loss carryback, there's a specific form to send to the CRA to get a reassessment.

<details><summary>Example: Calculating Taxable Income</summary>

Line | 2022 | 2023
--- | --- | ---
Business Income | 30,000 | (45,000)
Capital Gains | 15,000 | 8,000
Dividends from taxable Canadian Corporations | 10,000 | 25,000
Dividends from foreign corporations that are not foreign affiliates | 7,500 | 7,500

At the start of 2022, ABC Inc. has a net capital loss carryover of 10,000. What is the taxable income for 2022 and 2023?

Division B | 2022 | 2023
--- | --- | ---
Business Income | 30,000 | 45,000
Taxable Capital Gains | 7,500 | 4,000
Cdn Dividends | 10,000 | 25,000
Foreign Dividends* | 7,500 | 7,500
Division B income | 55,000 | (8,500) &rarr; 0

Division C | 2022 | 2023
--- | --- | ---
Cdn Dividends | (10,000) | (25,000)
Net capital loss carry over | (7,500) | (2,500)
Non capital loss carry back | (36,000) | 0
Taxable Income | 1,500 | 0

2023: 36,000 non-capital loss

</details>

### Types of Corporations

- Public
- Private
- CCPC

### Public Corporations

- Basic 38% less federal abatement 10%, plus net federal tax 28%, less general rate reduction 13%, plus basic federal tax rate 15%, plus provincial tax 12% (assumed). Effective: 27%

Federal Abatement: A way to "make way" for the provincial taxes. Applies only on the income that is allocated to provinces.

For every province that has a permanent establishment, income is allocated as so:

((gross revenue in province / total gross revenue) + (wages in province / total wages)) / 2

<img class=equation-tall src="https://latex.codecogs.com/svg.image?\dfrac{ \frac{GrossRevenueInProvince}{TotalGrossRevenue} + \frac{WagesInProvince}{TotalWages} }{2}">

<details><summary>Example</summary>

ABC Inc. operates in Ontario and has a permanent establishment in the US. It earned taxable income of $80,000.

Line | Ontario | US | Total
--- | --- | --- | ---
Revenues | 200,000 | 50,000 | 250,000
Salaries | 47,500 | 2,500 | 50,000
Federal Abatement | 87.5% | 13.5% | 70,000

</details>

General Rate Reduction of 13% reduction

<details><summary>Example: Presentation of Applicable Taxes</summary>

Taxable Income of 1,500 (Example 1).

Type | Rate | Income Applicable | Impact on Current Taxes
--- | --- | --- | ---
Basic | 38% | 1,500 | 570
General Rate Reduction | -13% | 1,500 | (195)
Federal Abatement | -10% | 1,500 | (150)
Provincial | 12% | 1,500 | 180
Total Current Taxes | | | 405

Taxable Income of 80,000, with 70,000 allocated provincially.

Type | Rate | Income Applicable | Impact on Current Taxes
--- | --- | --- | ---
Basic | 38% | 80,000 | 30,400
General Rate Reduction | -13% | 80,000 | (10,400)
Federal Abatement | -10% | 70,000 | (7,000)
Provincial | 12% | 70,000 | 8,400
Total Current Taxes | | | 21,400

</details>

<details><summary>Chapter 11 Problem 6</summary>

```txt
Business income for Division B: 263,000
Canadian investment royalty income: 11,000
UK Dividends: 20,000
Taxable Canadian Dividends 5,000
Taxable Capital Gains   7,000
Charitable Donations      100,000
Net Capital Loss from 2017  8,000
AB and BC provincial tax rates: 10%
Division B Income: 263,000 + 11,000 + 20,000 + 7,000 = 306,000
Division C deductions = 306,000 - 5,000 (cdn dividends) - 100,000 (donations) - 7,000 (CL) = 194,000
```

Region | BC | AB | US | Total
--- | --- | --- | --- | ---
Revenues | 3M | 3M | 4M | 10M
Wages | 500k | 300k | 200k | 1M
Allocation | 40% | 30% | 30% | 100%
Income | 77,600 | 58,200 | 58,200 | 194,000

Type | Rate | Income Applicable | Impact on Current Taxes
--- | --- | --- | ---
Basic | 38% | 194,000 | 73,720
GRR | (13%) | 194,000 | (25,220)
Abatement | (10%) | 135,800 | (13,580)
Fed Tax | X | X | X
BC Tax | 10% | 77,600  | 7,760
Alberta Tax | 10% |  58,200 | 5,820
Effective | ? | N/R | 48,500

</details>


<details><summary>Chapter 11 Problem 1</summary>

Year | 2020 | 2021 | 2022 | 2023
--- | --- | --- | --- | ---
Business Income | 54,000 | 32,000 | (75,000) | 62,500
Cdn Div. | 42,500 | 22,500 | 18,000 | 10,500
Taxable Capital Gains | 11,000 | 2,500 | 5,000 | 9,000
Allowable Capital Losses | 2,000 | 4,500 | 3,500 | 0
_Net Taxable Capital Gain_ | 9,000 | 0 | 1,500 | 9,000
_ABILs_ | (3,750) | 0 | 0 | 0
_Division B_ | 101,750 | 54,500 | 0 | 82,000
_Division C_ | - | - | - | -
Cdn Div. | (42,500) | (22,500) | (18,000) | (10,500)
_Max Charitable Donations_ | 76,312.50 | 24,000 | 0 | 46,875
_Charitable Donations Deductions_ | (23,000) | (9,000) | 0 | (16,000)
_Charitable Balance_ | 0 | 0 | 3,000 | 0
_Net Capital Loss Claim_ | (9,000) | 0 | (1,500) | (500)
_Net Capital Loss Balance_ | 0 | 2,000 | 500 | 0
_Income Before Capital Loss_ | 27,250 | 23,000 | 0 | 55,000
_Non capital loss Balance_ | 0 | 0 | 24,750 | 0
_Non capital loss Claim_ | (27,250) | (23,000) | 0 | (24,750)
Taxable Income | 0 | 0 | 0 | 30,250

Net capital loss balance of 9,000 starting in 2017

- Net capital loss 2024: 0
- Charitable Donations Carry forward 2024: 0
- Non-capital loss 2024: 0

</details>


## Chapter 12
