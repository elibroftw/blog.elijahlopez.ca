---
title: "BU 357 Taxation 1"
date: 2023-05-09T15:01:54-04:00
draft: false
tags: [
    "university",
]
---

## Structure of the Act

- DivisionA - liability
- Division B - computation of income
  - subdiv. a - employment income
  - subdiv. b - business and property income
  - subdiv. c - capital gains/losses
  - subdiv. d - other income
  - subdiv. e - other deductions
- Division C - taxable income
- Division D - non-residents
- Division E - tax payable

## Liability

All persons (individuals and corporations) who were a resident of Canada \[sec 2(1)] at any time in the year owe taxes on taxable income.

Taxable income\[Sec 2(2)] is the taxpayer's income for the year plus additions and minus the deductions permitted by Division C.

### Residency: Individuals

- Full-time resident
  - Taxed on _worldwide income_ for the whole year
  - Common law
    - Continuing state of relationship / ties with Canada
      - dwelling, family, personal properties and social ties
  - Deemed
    - applies to foreigners who sojourned (temp. stay) for 183 days or more \[sec 250(1)(a)]
- Part-time resident
  - Clean break or fresh start
  - Taxed on worldwide income for the part of the year while resident; taxed as non-resident for the part of the year while non-resident
  - fresh start: immigrant who moved to Canada
  - clean break: leaving the country for work
    - more ties given up, more likely to get clean break

### Non-resident \[sec 2(3)]

Applies to both individuals and corporations.

- taxed on income from being employed in Canada
- carrying business in Canada
  - permanent place
- disposing of a taxable canadian property, at any time in the year or a previous year
- interest income from canadian bonds do not count

### Residency: Corporations

- Deemed resident
  - incorporated in Canada after April 26, 1965 \[sec 250(4)(a)]
  - HQ or control in Canada
  - Incorporated before April 26, 1965 and had carrying business in Canada
- Non-resident

### Exercises

- Sara lives in Windsor, Ontario with her family. She commutes daily to Detroit, Michigan, where she is employed by Auto Inc. She works 10:00am - 5:00pm, five days a week.
  - Full-time common law due to continuing state of relationship in Canada
  - Taxes paid to foreign governments is a tax credit towards Canadian tax payable
  - vice-versa would be non-resident

- Larry, a US resident, is a traveling salesman. In the
year, he stayed in Canada for business purposes from
March 1st to September 15th. His house, his family
and his supplies are all in the US.
  - Probably fulltime deemed

- Zoe is married and has two sons. Her question is that,
“My husband just accepted a one-year job in the US starting in
July 2023. The boys and I will not be moving with him, and he
plans to return to Canada when the year is up. Can you explain
to me some of the factors that will impact the determination of
his residency status for Canadian tax purposes? I would also
like to know how the income he earned in the US will be taxed
in Canada”.
  - coming back to Canada in a year
  - family ties
  - therefore there is enough continuing ties for full time common law

- Mining Ltd. was incorporated in Canada in 2001. All income
is derived from sources originating in Mexico. All the directors
reside permanently in Mexico, where they make the major
decisions.
  - deemed resident since it is incorporated in Canada after April 26, 1965.

## Employment Income

Court determines whether individual is an employee or an independent contractor.

- Economic reality test
  - control
    - who gives instructions on how to do the work
  - ownership of tools
  - chance of profit/risk of loss

### Wiebe Door Services Ltd. v. M.N.R

- Workers have their own trucks and tools
- Work is guaranteed for one year
- Contractors can refuse to work
- Workers are responsible for defects
- Some specialized equipment exists

### Structure

sec 5 basic inclusion + sec 6 benefits + allowance + sec 7 stock option benefits - sec 8 deductions allowed.

sec 5: salary, wages, and other remuneration including gratuities received.

Payroll example

```text
Salary gross                                118,000
  Payroll deductions:
    Income tax withheld         17,000 # not deductible
    Registered Pension plan  2,000  # deductible
    CPP                                   3,500 # not deductible but credit
    EI                                          953 # not deductible but credit
    Union dues                            500 # deductible
Net salary                                        84,047
```

### Employee Benefits \[sec 6(1)(a)]

- include all benefits except
  - retirement plans
  - group **sickness** or accident insurance plan, private health services plan, a supplementary unemployment benefits plan
  - mental health
  - discounts for all employees where the price paid is still more than the cost
  - social club membership that benefit employer
    - workshops
    - training
- employer paid financial counselling is included
- non-cash holiday gifts (tangible) under $500 is excluded
- computers that benefit the employer

Examples: fitness memberships to reduce overtime stress, tuition costs,
gift certificates with value from $100 - $500.

not taxable, taxable, taxable.

### Housing loss/cost benefits

Employer paid for the loss of employee's home sale

- Eligible housing loss
  - work location moved and you have to move for work
  - at least 40km closer
- One-half of any amount above $15,000 is a taxable benefit

### Automobiles

Taxable benefit is equal to

1. Standby charge benefit \[sec 6(1)(e),6(2)]
    - automobile provided by employer-owned
      - A = B if primarily non-work (>= 50%) use else less of personal km and B
      - B = 1,667 x number of months available
      - C = Cost of the car including sales tax
      - D = months available in the year
      <img class=equation-tall src="https://latex.codecogs.com/svg.image?\frac{A}{B}\times0.02\times{C}\times{D}">

    - leased
      <img class=equation-tall src="https://latex.codecogs.com/svg.image?\frac{A}{B}\times\frac{2}{3}\times{E-F}">
2. Plus operating cost benefit
    - employer pays operating cost

    <img class=equation-tall src="https://latex.codecogs.com/svg.image?0.29\times{personal\_km}">

    OR

    half of standby charge if primarily for work.
3. Subtract reimbursed amount

Example

```txt
Mitch’s employer provides him an employer-owned car throughout the
year.
Capital cost of the car (include sales taxes). . . . .. . . . . . $38,772
Capital cost allowance claimed by the employer . . . . . . 6,375
Operating costs paid by the employer . . . . . . . . . . . . . . 4,250
Kilometres (as calculated from Mitch’s log):
Employment. . . 8,000km Personal . . . 10,000km
Amount reimbursed by Mitch to the company for the personal use at 14
cents per km = 10,000km x 14 cents . . . . . . $ 1,400
Discuss the benefits that are included in Mitch’s employment income.
What if Mitch drove 10,000km for work and 8,000km for personal?
```

<details><summary>Answer</summary>

```py
# Standby charge
>>> C = 38772
>>> D = 12
>>> benefit = 0.02 * C * D
>>> 9305.28
# Operating cost benefit
>>> benefit / 2
4652.64
>>> benefit / 2 - 1400
3252.64
>>> op_benefit = 0.29 * 10000
>>> op_benefit
2900.0
>>> benefit + op_benefit - 1400
>>> 10805

# 10km for work instead
>>> B = 1667 * 12
>>> A = min(B, 8000)
>>> benefit = A/B * (0.02 * C * D)
>>> benefit
3721.37
>>> op_benefit = min(0.5 * benefit, 0.29 * 8000)
>>> op_benefit
1860.68
>>> benefit + op_benefit - 0.14 * 8000
>>> 4462.05
```

</details>

### Employee loans \[sec 6(9),80.4]

- low-interest or interest free loans provided by employers are taxable benefits
- taxable benefit is `principal amounts * (prescribed rate - interest rate paid)`
- prescribed rate is the annual rate of the 3-month T-bill which is disclosed every quarter. Use the average of the quarters that the loan was taken from.

For home loans compare to the smaller of (i) the prescribed rate in each quarter the loan
was outstanding and (ii) The prescribed rate in effect at the time the
loan was granted

Example

```txt
Mr. Maple borrowed $30,000 from his
employer on Feb. 1 at an annual rate of 1%, to
purchase common shares of a public firm.
Interest was payable monthly. The prescribed
rates are: Q1 3%, Q2 2%, Q3 3%, Q4 4%
Calculate the taxable benefit of the loan.
• What if the loan was used to buy a home?
```

<details><summary>Answer</summary>

```py
>>> q1 = 30000 * (0.03 - 0.01) / 12 * 2
>>> avg_i = (0.02 + 0.03 + 0.04) / 3
>>> q3_4 = 30000 * (avg_i - 0.01) / 12 * 9
>>> q1 + q3_4
>>> 550
```

</details>

### Allowance \[sec 6(1)(b)]

- Fixed, specified taxable amount paid above salary to cover certain expenses
- In rare reasonable cases, the allowance is tax exempt
- For example, traveling expenses for traveling by car

### Employment Insurance benefits \[sec 6(1)(f)]

- Include payment from insurance plan net of contributions
- if the employer pays all or any portion of the premium
- Applied to: group sickness, accident, disability insurance plans

<details><summary>Answer for Anita</summary>

$90,000 + ($1,600 - $350) + $424 + $1,000 + $2,000 + $200 + $56.67 + 16,880 + 400

- retirement planning is tax exempt
- workshop is tax exempt since employer benefits
- loan benefit = 8000 \* (0.01 \* 2.5 / 12 + 0.02 \* 3 / 12) = $56.67
- automobile benefit = 0.02 \* 38,500 \* 12 + 0.29 \* 16,000 + 250 \* 12 = 16,880
- market price minus actually paid is a benefit

</details>

### Stock Options

- grant day
  - FMV determined
- exercise day
  -taxable benefit is the difference
- For CCPC, taxation occurs on selling day

Division C deduction (half of taxable benefit): option price was greater than fair market value on grant day or the CCPC shares were held for at least 2 years. You still have to report the full dollar amount benefit.

Capital gain on selling day = Price sold - EOD fair market price at exercise day

An option was granted for 100 shares with a strike price of $12. On this grant day, shares were trading at $22. Next year, this option
was exercised. Shares traded at $40 per share at the time. Three years later, all shares were sold at $66. What are the tax consequences.

<details><summary>Answer</summary>

In the second year, the taxable benefit is (40 - 12) \* 100 = \$2,800. In the fifth year, there is a capital gains of (66 - 40) \* 100= \$,600.

If the company is CCPC, there is only the selling benefit of 66 - 22.

</details>

## Deductions for Taxpayers \[sec 8]

Must be specifically permitted

1. salespersons' (commission based) expenses
    - no capital expense
    - no recreational deduction
2. Traveling expenses
3. Professional and union dues
4. Works space in home
    - used exclusively for earning income
    - and used regularly for meeting customers or clients
    - must earn employment income
    - excess amount carried forward
    - rent, utilities, repairs & maintenance, supplies, phone
    - salesperson exclusive: property taxes, house insurance, limited to commissions
5. Contributions to RPP (registered pension plan)
6. Use of automobile
    - interest on car loan up to $300 per month
    - operating vehicle expenses
    - capital cost allowance, 30% and cost limited to 34,000 plus sales tax

<details><summary>work space example answer</summary>

So 20% is workspace. Computer not on the list.

Non-Salesperson: 600 + 1000 + 1000 (work related expense) + 1000 +  400 = 3,000

Salesperson with $15,000 commission: 400 (property taxes) + 40 (insurance) = 3,440

</details>

## Income from Business

I. Business Income Defined and
General Rules for Determining
Business Income
II. Deductions denied and allowed
III. Salesperson’s expenses

### Business income and general rules

- Business” should be carried on with a profit or REOP
- Profit is determined in accordance with well-established business practices

### GAAP / IFRS and the Act

Differences:

- Amortization
- Permanent differences
- Non-arm's length transactions (related party transactions)
  - Is the transaction value at market price?

### Disallowed deductions

1. Not for income earning purpose
2. Capital expenditures
3. Exempt income
4. reserve
5. Personal expense
6. Not reasonable

- payments on discounted bonds
- use of recreational facilities
- political contributions
- allowance for an automobile above the limit

Examples:

- charitable donation if not for production income
  - not fully deductible
- accounting depreciation on fixed assets
  - CCA
- contingent liability with respect to an upcoming union negotiation
  - balance sheet
- appraisal fees to determine selling price of fixed assets
  - add to the cost of the fixed asset
- premium for life insurance on company president
  - exempt income

Problem 12

- Income: 64,300
- Acc amortization: 4,000
- CCA: (22,400)
- Political donations: 1,000
- Charitable donations: 8,000
- Annual tennis club dues: 2,500
- Meals and entertainment (50%): 1,700

Ch 3 Problem 23

Ned had unlimited use of the company's private swimming pool. The local pool charges annual fees of 1,800 per year before HST. Benefit = 1,800 (LOL).

## Deductions Specifically Permitted From business or property \[sec 20]

- write-offs of capital expenditure
- interest on borrowed money used for earing business income
- deduct bonus on the accrual basis if paid within 180 days after the taxation year
- Expenses of issuing shares or borrowing money
  - equally over five years
  - print and ad costs, filing fees, legal fees, transfer fees, commissions, etc. in relation to share issuance and borrowing
  - refinancing costs such as rescheduling restructuring
- Reserves
  - For doubtful debts \[sec 20(1)(1)]
  - Goods and services not rendered \[sec 20(1)(m)]
  - Reserves for delayed payment revenues \[sec 20(1)(n)]
    - Deducted for no more than 3 years
    - When reserve is allowed, it must be added back to income in the following year
      - New reserve can be deducted if it can be justified in the following year
      - Reserve = % Unpaid Revenue \* Profit
  - Manufacturer's warranty reserves \[sec 20(1)(m.1)]

- Employer Contributions to RPP and DPSP
  - limit =  MIN (18% of employment income, $30,780 for 2022)
- Convention expenses (2 per year)
  - Conferences
- Representation expenses (licensing, permit, franchise)
  - Fully deductible
  - Deduct equally over 10 years
  - Claim CCA
- Other expenses fully deductible
  - land scaping
  - site investigation fees

### Reserve for Delayed Payment Revenue

Example

- $160,000 revenue, cost of $4,000, $40,000 up front, 6 years of $20,000 annual payments.
- Income = $156,000
- without taking reserve, pay entire amount on $156,000
- Y22 reserve = 120,000  \* 156,000 / 160,000 = 117,000
  - Business Income = 39,000
- Y23 reserve = 100,000  \* 156,000 / 160,000 = 97,500
  - income = 117,000 - 97,500 = 19,500
- Y24 reserve = 80,000  \* 156,000 / 160,000 = 78,000
  - income = 97,500 - 78,000 = 19,500
- Y25 income = 78,000 (3 years of reserve deductions met)

### Work space in home

20% of home is partitioned for self-employed work

- utilities: 3,000
- mortgage interest: 5,000
- long distance call for work: 1,000
- property taxes: 2,000
- purchase of computer for work: 2,500
- general upkeep and maintenance 5,000
- contents and property insurance: 200
- supplies for the office 400

Calculate CCA of computer and prorate home expenses.

Computer CCA can be 100% deductible if CCPC or individual.

OR: 1.5 (accelerated) \* 2,500 \* 55%

### Chapter 4 Example

![Problem 8](/images/bu-357/problem-8.png)

- Start at net income: 13,000
- Add back any capital expenditures: 3,200 + 1,200
- Add back accounting reserves (e.g. legal): 500
- Add back recreational expenses: 3,000
- Add back amortization expense: 8,000
- Add back not-for-income producing purposes
- Add back personal expenses: 1,200
- Add back interest expense not related to business: 3,000
- Add back half of meals and entertainment related to business: 4,000 \* 0.5
  - Fundraising for charity results in 100% deduction
  - Meals and entertainment is for employees: 100% deduction
- Business income vs capital gain:
  - Transaction is related to business and frequency of the transaction
- Add gain on sale (13,000 - 7,800 = 5,200)

Business Income: 40,300

### MIdterm Information

- Q1: Multiple choices on chapter 2
  - Definitions
  - Residency
    - Tax treatments
    - Criteria
      - Individual (common law full time resident, deemed full time resident, part time resident, non-resident)
      - Corporation (deemed resident, non-resident)
- Q2: employment income chapter 3
  - Employee vs. self-employed
  - Basic inclusion
  - Benefits and allowance
  - stock option, and deductions
- Q3: business income chapter 4
  - starting point: net earnings
    - adjustments
      - deductions denied
      - deductions permitted

### Depreciable property and CCA

- Classes and accounts
- Opening balance (Unappreciated Cost of Capital) \[A]
- PLUS additional purchases \[B]
- MINUS any disposals \[C]
- MINUS CCA (applying CCA rate to the **balance**)
- EQUALS UCC balance

- CCA = CCA rate \* (A + 1.5 \* (B - C)) if B > C
- CCA = CCA rate \* (A + B - C) if B <= C
- Essentially, do not apply an acceleration on a negative value

### Allowance

- Depreciable property
- CCA
  - General rules
    - ownership
  - Specific properties

### Classes and CCA Rates

- The act assigns various types of assets for specific classes
- Each class has a specific rate attached to it
  - signifies the maximum deductible in a year

### Common Classes

- Class 1: 4% for buildings after 1987
- Class 1 - Manufacturing Building (10%) on or after Mar. 19, 2007 for 90% usage
- Class 1: Not-residential building on or after Mar. 19, 2007
- Class 8 (20%): Miscellaneous tangibles such as furniture, fixtures, outdoor advertising signs, properties not included in other classes
- Class 10 (30%: vehicles)
- Class 10.1 (30%): passenger vehicles greater than $34,000 excluding tax
- Class 12 (100%:): tools, instruments, kitchen utensils less than $500, uniforms, rental, computer software,
- Class 13 (Leasehold interest): enhancements made by the tenant
- Class 14: patents
- Class 14.1 (5%): indefinite-term intangibles, no legal limited life, incorporation costs over $3,000
- Class 53 (50%) - manufacturing machinery and equipment after 2016 and before 2026
- Class 43 (30%): other manufacturing machinery and equipment
- Class 50 (55%): computers and system software after March 18, 2007

### Accelerated CCA (Reg. 1104)

- CCA will be 150% for net additions
- Applies to depreciable properties excluding class 12 acquired after 2018, phased out after 2023

### CCA Example 1

Class 8 (20%) assets with UCC of $80,000. Purchased $25,000 of class 8. There were disposals of 20,000 of costs of 35,000.

A = 80,000, B = 25,000, C = MIN {20,000, 35,000}, CCA = 0.2 \* (80,000 + 1.5 \* (25,000 - 20,000)). Therefore UCC = 80,000 + 25,000 - 20,000 - 17,500 = 67,500

What if the old assets was sold for 30,000?

A = 80,000, B = 25,000, C = MIN {30,000, 35,000}, CCA = 0.2 \* (80,000 + 25,000 - 30,000). Therefore UCC = 80,000 + 25,000 - 30,000 - 15,000 = 60_000

### Gains/Losses on Disposition

- Terminal
  - All assets are disposed of
  - Positive balance in class
- Recapture
  - Negative balance in class
- Capital gain
  - Price > Original cost

### Immediate Expensing (Optional)

- 100% deduction
- Eligible properties: all properties except class 1 and class 14.1
- Purchased after April 19, 2021 by a CCPC
- Purchased after Jan 1, 2022 by an individual business
- Limit is $1.5m per year

Revisiting the example: suppose company is a CCPC or a Canadian individual resident

CCA = CCA rate \* (A - C) + B

TODO: combine for mega formula with all types of shenanigans

### Full expensing M&P machinery and equipment (optional)

Applies to all types of corporation

- Class 53 after November 20, 2019
- Class 54/55 after March 15, 2019

### Midterm Studying

Chapter 3, Problem 19

<details><summary>answer</summary>

48,000 (gross) + 40,000 (bonus) - 4,000 (RPP) - 2,200 \* 0.5 (client related meals) - 5,200 (traveling expense) - 7,800 (airfare) - 500 (taxi) - 3,500 (gifts) + 350 ( planning benefit) + 150 (life insurance premium)

Car cost: 36,000

- Standby Benefit = 0.02 \* 36,000 \* 12 = 8,640
- Operational benefit = 9,900 \* 0.29 = 2,871
- Reimbursement = 2,400
- Automobile benefit = 8,640 + 2,871 - 2,400 = 9,111

</details>
