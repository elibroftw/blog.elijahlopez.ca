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
  - Allowable Business Investment Losses (ABIL) - disposition of shares and debts of a Small Business Corporation (CCPC)
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

<img class=equation-tall src="https://latex.codecogs.com/svg.image?\dfrac{ \frac{GrossRevenueInProvince}{TotalGrossRevenue} + \frac{WagesInProvince}{TotalWages} }{2}" label="\dfrac{ \frac{GrossRevenueInProvince}{TotalGrossRevenue} + \frac{WagesInProvince}{TotalWages} }{2}">

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

Integration for Business and INvestment Income of the Private Corporation

- CCPC overview and small business deduction
- Associated Corporaitons
- Investment income in a CCPC
- Refundable taxes
- Comprehensive problem

### CCPC

- shares non-publicly listed
- not controlled (< 50%) by a public corporation
- not controlled (< 50%) by a non-resident

What are CCPC doing that public corporations not doing?

Hiring Canadians

### Dividends

For the course, we will assume that the provincial dividend tax credit is perfect:

- 5/11 for eligible dividends
- 4/13 for non-eligible dividends

In reality, a province's dividend tax credit may not be integrated.

Individuals will prefer eligible dividends as they are subject to a lower rate of tax.

### Terminology

- Dividend: actual amount paid
- Taxable Dividend: grossed up based on classification of the dividends

### Non-Eligible Dividends

- After-tax profits accumulated in LRIP balance
- Based on income earned that was subject to a low rate of tax
  - Active business income &rarr; SBD
  - Investment income &rarr; All

### Eligible Dividends

- General Rate Income Pool (GRIP): high rate of tax (eligible dividend)
  - Higher gross-up
- Low Rate Income Pool (LRIP): low rate of tax (non-eligible dividend)
  - Lower gross-up
- After-tax profits accumulated in GRIP balance
- Based on income earned that was not subject to a low rate of tax
  - Public corporations, non-CCPC subject to full rate
  - CCPCs not subject to a low rate of tax

### General Rate Income Pool (GRIP)

- Eligible dividends

### Low Rate Income Pool (LRIP)

- Non-eligible dividends
  - Public corporations must pay out non-eligible dividends first
    - Otherwise CRA charges excess eligible dividend penalty
- Investment Income

### Advantages and Disadvantages of Incorporation

- Related income splitting potential (advantage)
  - Family members are shareholders and so would get dividends
  - Paying reasonable salaries
- Tax cost if the combined corporate tax rate is over 13% for income eligible for SBD and 27.5% for other business income (disadvantage)
- Separation of business and personal activities (advantage)
- Limited liability (advantage)
- Administrative costs (Disadvantage)
- Additional legal and accounting costs (disadvantage)
- Continuity of the separate legal entity (Advantage)

### Small Business Deduction (SBD)

- Instead of the general rate reduction, there is a small business deduction (19%)
- Usually lower provincial tax
- Limit is up to $500,000
- Limit is reduced for Large CCPCs or CCPCs with significant passive investment income
- Limit is shared with associated corporations

Active Business Income

- businesses other than investment business and personal services business
- Specified Investment Business
  - Property income unless corporation employs > five full-time employees
- Personal Services Business (PSB)
  - Individual performs services as if they were an employee of client
  - Owns 10%+ of the corporation
  - Unless: corporation employs > five full-time employees throughout the year, or services were provided to an associated corporation
  - Not eligible for SBD or GRR; additional 5% levied on income
  - Limitations on allowable deductions

Calculation

- Net Canadian active business income
  - Want to benefit Canadians doing business in Canada
- Taxable income fully taxed in Canada &rarr; calculated as total taxable income less foreign-source income estimated as the sum of
  - Foreign-source investment income, estimates as 100/28 times the foreign tax credit on foreign non-business income
  - foreign-source business income, 4x foreign business income
- Business limit less any portion allocated to associated corporations

Clawback of SBD

SBD limit is reduced by the greater of

- taxable capital reduction
  - 500,000 limit reduced by $1 for every $80 of taxable capital greater than $10M of the preceding tax year employed of all associated corporations in Canada
  - Fully clawed back when taxable capital reaches $50M
  - Long-term debt counts
- Adjusted Aggregate Investment Income (AAII)
  - Reduced by $5 for every $1 in AAII earned by all associated corporations > $50,000
    - Fully clawed back when investment income reaches $150,000
      - **This should be lowered to $60,000**
    - AAII = Aggregate Investment Income
      - excludes; net taxable capital gains from dispositions of active assets and net capital loss carryovers
      - includes: dividends from non-connected corporations and taxable amount of a life insurance policy
      - We'll calculate this later on

<details><summary>SBD Clawback Example</summary>

ABC Inc. is a CCPC that has a December 31 year-end.

- $350,00 earned in net active business income in Canada
- $100,000 in interest income
- Taxable Income of $450,000
- Taxable capital employed of $40M
- Business limit
  - Clawback based on taxable capital reduction: (40M - 10M) / (50M - 10M) * 500k = $375,000
    - Alternatively (40M - 10M) / 80
  - Clawback base on AAII: (100,000 - 50,000) * 5 = $250,000
    - Alternatively use the fully clawed back amount

</details>

### Corporation Association and Impacts

- CCPC operation earns active income in Canada.
- Conceptually, someone would want to apply the SBD for multiple corporations
- If two corporations are deemed to be associated, they have to share the small business limit, as well as the calculation of said business limit

- Key consideration (subsection 256(1))
- Related persons under section 251
- **Persons are individuals, corporations, and trusts**
- Ownership
  - Actual/legal ownership
  - Deemed ownership [256(1.2), (1.3)]
    - Multiplicative for indirect ownership
- Controlled = controlled, directly, or indirectly
  - Legal control &rarr; >50% of voting shares
  - De facto control \[256(5.1)] &rarr; control via direct or indirect influence
  - Deemed control \[256(1.2)]
    - Look-through rule (aka not multiplicative for indirect control)

Related persons includes relationships between

Individuals

- Blood relations, marriage/common-law, or adoption
- Does not include aunts, uncles, or cousins

Individuals and Corporations

- Based on _de jure_ (legal) control
- Direct or indirect control

An individual is associated with a corporation where:

1. Indirectly controls corp (>50% voting)
2. Indirectly and non-arm length controls the corporation
3. You are related to someone who controls the corporation

Two corporations are related where

1. both corporations are controlled by the same person
2. One corporation is controlled by one person, who is related to a person/group that controls the other corporation
3. One corporation is controlled by one person/related group, is related to each member of a group which controls the other corporation
4. Two corporations are controlled by unrelated groups and at least one member of one of the groups is related to **each member** of the other group

Five ways to associate corporations ITA 256(1)

- a) One corporation controls another corporation
  - A legally (> 50% ownership) controls B which legally controls C
  - Since A indirectly controls C, therefore A controls C
- b) Both corporations are controlled by the same person/group of persons
  - group: if shareholders are voting together
- c) one-to-one: one corporation is controlled by the one person; the person si related to the person who controls the other corporation; and either person owns 25% in the other corporation (excluding specified classes)
- d)  one-to-many: one corporation is controlled by the one person. That person is related to each member of the group that controls the other corporation. That person owns 25%+ in the other corporation (excluding specified classes)
- e) many-to-many: each corporation is controlled by a related group. each person from one group is related to each member of the other group. One or more people owns 25%+ (excluding specified classes) of the other corporation.

256(2)

If two corporations are associated to another corporation, then they are defacto associated.

Control test- controlled by:

Another corporation
Same person or group of persons
A related group

Related test:
to person member of group who controlled other corporation

Cross-ownership test*

<details><summary>Chapter 12 Problem 10</summary>

Are these corporations associated?

```txt
(A) Leah Ltd. 55% -> Eliane Ltd. [256(1)(a)]

(B) Miriam 51% Abigail Ltd. and 60% Ethan Ltd. [256(1)(b)]

(C) Irene owns 50% Clare, 50% Philip. Mordechai owns 50% of each. Unrelated people. Associated by controlling group [256(1)(b)]

(D) Lyn and Sarah are unrelated. Lyn owns 60% of Jay Ltd. Sarah owns 40% of Jay Ltd. Lynn owns 50% of Alex ltd. Sarah owns 50% of Alex Ltd. Associated by controlling group [256(1)(b)]

(E) Janna Ltd. owns 50% of Jonathan Ltd. Rayna Ltd. owns 50% of Jonathan Ltd. Janna Ltd. owns 33% of Stan Ltd, Rayna Ltd. owns 33%, Adam Ltd. owns 33%. Still [256(1)(b)] because the group Janna Ltd. and Rayna Ltd. control both.

(F) Ruth owns 1005 of Rick Ltd, 25% of Daniel Ltd.. Daughter owns 75% of Daniel Ltd. [256(1)(c)]

(G) Dahlia's Brother in law owns 100% of Gord Ltd, 30% of Rebecca Ltd. Dahlia owns 3100% of Rosalyn Ltd and 30% of Rebcca Ltd. Eden, unrelated, owns 40% of Rebecca Ltd. [256(1)(d)] associates Rosalyn Ltd and Rebecca Ltd., Gord Ltd. and Revecca Ltd due to (Joshua + Dahlia) being a related group. Gord Ltd and Rosalyn Ltd, are associated due to transitivity. [256(2)]

(H) Yael owns 60% of Benjamin Ltd and 30% of Livi Ltd. Benjamin own 25% of Livi Ltd. Joy owns 45% of Livi Ltd. [256(1)(d)] due to Yael being related to Benjamin Ltd.

(I) Daniella owns 60% of Elizabeth Ltd and 25% of Ava Ltd. Samara owns 75% of Ava Ltd. Daniella holds an option to buy 75% of Ava Ltd. at any time in the next 10 year. Yes due to a special rule that assumes any option for ownerships has been executed. [256(1)(a)]

(J) Mr. J owns 50% of Isabelle Ltd. Mrs. J owns 50%. Mr. J' siblings own 75% of Rebecca Ltd. [256(1)(e)]
```

</details>

### Why is Association Important

1. SBD limit is shared
2. Immediate expensing limit is shared
3. May not be SIB or PSB depending on relationship with associated corporations
4. SR&ED credits for CCPCs phased out based on all associated corporation's taxable capital

### Integration of Investment Income of a CCPC

- Prevent indefinite deferral of tax if initial corporate tax rate is low
- Additional refundable tax (ART) of 10 2/3 % levied to create high initial rate of corporate tax to prevent deferral
- Provincial governments usually subject investment income to higher rate than active business income

### Special Refundable Taxes

- ART
- Part IV Tax
- Refundable Dividend Tax on Hand

### Additional Refundable Tax (ART)

Multiply 10.67...% on the lessor of: Aggregate investment income (AII), and (All = net taxable capital gains - net capital losses under Div C + income from property - dividends deducted under Div C - losses from Canadian and Foreign property) and Taxable income less income claimed using SBD

Amount added to non-eligible RDTOH for Part I is least of:

1. 30 2/3% \* Aii
2. 30 2/3% * (TI - SBD) * (Part 1 Tax)
3. Part 1 Tax (29,269)

### Part IV Tax on Dividends

- Avoid deferral of portfolio dividend income
- 38 1/3% \* "portfolio dividends" received (not connected)
- Two corporations are connected where corporation controlled by the other corporation or shares held by another corporation represent more than 10% of voting shares and 10% of fair market value of all issued shares

### Refundable Dividend Tax on Hand

- Accumulate all prepaid refundable taxes
  - Refundable on Part I tax
  - Refundable on Part IV tax paid
- To receive a refund, must payout dividends
  - 38.33 refund for every $100 of taxable dividends paid
- Track two RDTOH accounts
  - Part IV taxes paid on eligible dividends received non-connected corporations
  - Part IV taxes paid on non-eligible dividends
  - ...

### Dividend Refund

Sum of

1. Lessor of 38 1/3% \* all eligible dividends and eligible RDTOH balance at the end of the year
2. Lessor of 38 1/3% \* all non-eligible paid in year and NERDTOH balance
3. The excess of the 38 1/3% dividends over the balance for the ERDTOH only (can never use the NERDTOH remaining balance)

### Special Taxes Example

<details><summary>Example - ART</summary>

ABC Inc. is a CCPC. It solely earned investment income as follows:

- interest income: 50,000
- capital gain: 10,000
- dividends: 25,000 from portfolio, 10,000 from connected corporations
- Proportionate dividend refund for the connected corporation fo $3,000
- Assume no RDTOH balance

What is the Part I federal taxes payable and how much is refundable? What is the Part IV tax?

- Dividend B Income: 50,000 + 0.5 * 10,000 + 25,000 + 10,000 = 90,000
- Division C deduction: 35,000
- Taxable: 55,000
- Taxes:

Type | Rate | Income Applicable | Impact on Current Taxes
--- | --- | --- | ---
Basic | 38% | 55,000 | 20,900
Abatement | (10%) | 55,000 | (5,500)
ART | 10 2/3% | 55,000 | 5,867
Fed Tax | X | X | 21,267

Refundable:

1. 30 2/3% \* Aii  = 16,869
2. 30 2/3% \* (TI - SBD) \* (Part 1 Tax) = 16,869
3. Part 1 Tax (29,269)

Part IV tax:

- Eligible portoflio dividends = 25,000 \* 38.33% = 9,583
- Connected corp dividends = 3,000

RDTOH:

- ERDTOH = 9,583
- NERDTOH = 16,869 + 3,000 = 19,869

If there is a GRIP balance of $100,000 from previous years, what dividend needs to be paid out to maximize the dividend refund?

- NE dividend: 19,869 / .3833 = 51,837
- E dividend: 9,583 / .3833 = 25,000 (not a coincidence)

Suppose a 100,000 non-eligible dividend was declared,

1. Lessor of 38.33% * Eligible dividend and ERDTOH = 0
2. Lessor of 38.33% Non-eligible dividend and NERDTOH = MIN(38,333, 19,869) = 19,869
3. If 2a (38,333) > 2b (19,869), then take lessor of excess and ERDTOH = MIN(18,464, 9,583) = 9,583

Refund = 29,452

This amount reduces the taxes payable and allows for a refunds

</details>
