---
title: "BU 357 Taxation 1"
date: 2023-05-09T15:01:54-04:00
draft: false
tags: [
    "university",
]
---

{{< toc >}}

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
  - Clean break away or fresh start (immigrant who moved to Canada)
  - Taxed on worldwide income for the part of the year while resident; taxed as non-resident for the part of the year while non-resident
  - fresh start: immigrant who moved to Canada
  - clean break: leaving the country for work
    - more ties given up, more likely to get clean break
- Non-resident (follows)

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
  - Incorporated before April 26, 1965 and had carrying business in Canada
  - HQ or control in Canada
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

- all benefits are taxable except
  - retirement plans
  - retirement planning
  - non-cash holiday gifts (tangible) under $500
  - group **sickness** or accident insurance plan, private health services plan, a supplementary **unemployment benefits** plan
  - mental health
  - discounts for **all** employees where the price paid is greater than the cost
  - social club memberships that benefit employer
    - workshops
    - training
- employer paid financial counselling is taxable
- computers that benefit the employer

Examples:

- fitness memberships to reduce overtime stress: not taxable because of mental health
- tuition costs: taxable
- gift certificates with value from $100 - $500: taxable because cash benefit

### Housing loss/cost benefits

All moving expense allowance are taxable however,  when the employer pays for the loss of employee's home sale:

- Eligible housing loss
  - work location moved and you have to move for work
  - at least 40km closer
- One-half of any amount above $15,000 is a taxable benefit

### Automobiles

Formulas are given?

Taxable benefit is equal to

1. Standby charge benefit \[sec 6(1)(e),6(2)]
    - automobile provided by employer-owned
      - A = B if primarily non-work (>= 50%) use else less of personal km and B
      - B = 1,667 x number of months available
      - C = Cost of the car including sales tax
      - D = months available in the year
      <img class=equation-tall src="https://latex.codecogs.com/svg.image?\frac{A}{B}\times0.02\times{C}\times{D}">

    - leased
      <img class=equation-tall src="https://latex.codecogs.com/svg.image?\frac{A}{B}\times\frac{2}{3}\times{LeaseExcludingInsurance}">
2. Plus operating cost benefit
    - if the employer reimburses operating cost,
      <img class=equation-tall src="https://latex.codecogs.com/svg.image?0.29\times{personal\_km}"> or half of standby charge if primarily for work.
3. Subtract amount paid back to the company

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

For home loans, the comparable interest rate is the lesser of the interest rate at the time of purchase and the going interest rate in each quarter the loan was outstanding

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
>>> # if home
>>> 30_000 * (0.02 / 12 * 2 + 0.01 / 12 * 3 + 0.02 / 12 * 3 + 0.02 / 12 * 3)  # only Q4 comparable interest rate changes
```

</details>

### Allowance \[sec 6(1)(b)]

- Allowances are a fixed, specified **taxable** amount paid above salary to cover certain expenses
  - In rare reasonable cases, the allowance is tax exempt
  - For example, **traveling expenses** for traveling by car

### Employment Insurance benefits \[sec 6(1)(f)]

- Include payment from insurance plan net of contributions
- if the employer pays all or any portion of the premium
- Applied to: group sickness, accident, disability insurance plans

<details><summary>Answer for Problem 20 on slide 37 (Anita Lee)</summary>

90000 + (1600 - 350) + 424 + 1000 + 2000 + 200 + 56.67 + 16880 + 400 = 112211

- premium payroll deductions are not deductible
- insurance payment is taxable net of contributions
- retirement planning is tax exempt
- tuition is not tax exempt however workshop is tax exempt since employer benefits
- director fee is income
- cash gifts are always taxable
- interest discount is a benefit
  - loan benefit = 8000 \* (0.01 \* 2.5 / 12 + 0.02 \* 3 / 12) = $56.67
- allowance is 100% taxable
- automobile benefit = 0.02 \* 38,500 \* 12 + 0.29 \* 16,000 = 16,630
- market price minus actually paid is a benefit
- airline points is not taxable
- merchandise discount was still above cost so no taxable benefit

</details>

### Stock Options \[sec 7]

- The benefit must be included in employment income
  - On the sell date for CCPC
  - On the exercise date for public corporations
- Benefit = Fair Market Value at exercise date - Strike Price of Option
  - Include division C deduction equal to one-half of the benefit if either
    - the option was not in the money (strike price >= stock price) on grant day
    - corporation is CCPC and the stock is held for 2 years
- On selling, capital gains are (sell price - market price on exercise day)

Capital gain on selling day = Price sold - EOD fair market price at exercise day

An option was granted for 100 shares with a strike price of $12. On this grant day, shares were trading at $22. Next year, this option was exercised. Shares traded at $40 per share at the time. Three years later, all shares were sold at $66. What are the tax consequences.

<details><summary>Answer</summary>

In the second year, the taxable benefit is (40 - 12) \* 100 = $2,800. In the fifth year, there is a capital gains of (66 - 40) \* 100= $2,600.

If the company is CCPC, there is only the selling benefit of 66 - 22.

</details>

## Deductions for Taxpayers \[sec 8]

Must be specifically permitted

1. salespersons' (commission based) expenses
    - no capital expense
    - no recreational deduction
2. Traveling expenses
    - transportation
    - meals are 50%
    - lodging
3. Professional and union dues
4. Works space in home
    - princal place of work OR
      - workspace itself is used **exclusively** for earning income and used regularly for meeting customers or clients
    - must earn employment income
    - allocate expenses between work and personal
    - excess amount carried forward
    - rent, utilities, repairs & maintenance, supplies, phone
    - salesperson exclusive: property taxes, house insurance, limited to commissions
5. Contributions to RPP (registered pension plan)
6. Use of automobile for employment purposes
    - allocate between work and personal
    - interest on car loan up to $300 per month
    - operating vehicle expenses related to employment (%)
    - lease expenses related to employment (%)
      - max of $900/month
    - capital cost allowance, 30% and cost limited to 34,000 plus sales tax

<details><summary>Slide 49 example</summary>

So 20% is workspace. Computer not on the list.

Non-Salesperson: 600 (utilities) + 1000 (mortgage interest) + 1000 (work related expense) + 1000 +  400 + 5,000 * 0.2 (maintenance) = 4,000

Salesperson with $15,000 commission: 400 (property taxes) + 40 (insurance) = 4,440

</details>

## Income from Business

1. Business Income Defined and
General Rules for Determining
Business Income
2. Deductions denied and allowed
3. Salesperson’s expenses

### Business income and general rules

- Business' should be carried on with a profit or REOP
- Profit is determined in accordance with well-established business practices

### GAAP / IFRS and the Act

Differences:

- Amortization
- Permanent differences
- Non-arm's length transactions (related party transactions)
  - Is the transaction value at market price?

### Disallowed deductions \[sec 18]

1. Not for income earning purpose
2. Capital expenditures
3. Exempt income
4. Reserves
5. Personal expense
6. Not reasonable

- payments on discounted bonds
- use of recreational facilities
- political contributions
- allowance for an automobile above the limit
- do not deduct income paid to yourself

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
  - exempt income so not deductible
- meals and entertainment are 50% deductible
  - 100% if available to all employees six times maximum
  - fund-raising events benefiting charity

<details><summary>Slide 60 Problem 12</summary>

- Income: 64,300
- Acc amortization: 4,000
- CCA: (22,400)
- Political donations: 1,000
- Charitable donations: 8,000
- Annual tennis club dues: 2,500
- Meals and entertainment (50%): 1,700
- Business income for tax purposes: $59,100

</details>

Ch 3 Problem 23

Ned had unlimited use of the company's private swimming pool. The local pool charges annual fees of 1,800 per year before HST. There is no taxable benefit since the company is not paying on behalf of Ned.

## Deductions Specifically Permitted From business or property \[sec 20]

Even if not specifically permitted, it can be deducted if it is for income earning purposes.

- write-offs of capital expenditure
- interest on borrowed money used for earing business income
- deduct bonus on the accrual basis if paid within 180 days after the taxation year
- Expenses of issuing shares or borrowing money
  - equally over five years
  - print and ad costs, filing fees, legal fees, transfer fees, commissions, etc. in relation to share issuance and borrowing
  - refinancing costs such as rescheduling restructuring
  - 20(1)(e) states that only 20% of financing expense is deductible
- Reserves
  - For doubtful debts \[sec 20(1)(1)]
  - Goods and services not rendered \[sec 20(1)(m)]
  - Reserves for delayed payment revenues \[sec 20(1)(n)]
    - Deducted for no more than 3 years
    - When reserve is allowed, it must be added back to income in the following year
      - New reserve can be deducted if it can be justified in the following year
      - Reserve = % Unpaid Revenue \* Profit
  - Manufacturer's warranty reserves \[sec 20(1)(m.1)]

Therefore, if a deduction is not here, it probably is not deductible. An example would be legal costs in purchasing shares or life insurance premiums (exempt income test where the income earned for one thing is not taxable so therefore the contribution to said income is not tax-deductible either).

- Employer Contributions to RPP and DPSP
  - limit =  MIN (18% of employment income, $30,780 for 2022)
- Convention expenses (2 per year)
  - Conferences
- Representation expenses (licensing, permit, franchise)
  - Fully deductible
  - Deduct equally over 10 years
  - Claim CCA
- Other expenses fully deductible
  - landscaping
  - site investigation
  - audit fees (income earning purposes)
  - training (income earning purposes)

### Reserve for Delayed Payment Revenue

Example

- $160,000 revenue, cost of $4,000, $40,000 up front, 6 years of $20,000 annual payments.
- Income = $156,000

<details><summary>answer</summary>

- without taking reserve, pay entire amount on $156,000
- Y22 reserve = 120,000  \* 156,000 / 160,000 = 117,000
  - Business Income = 39,000
- Y23 reserve = 100,000  \* 156,000 / 160,000 = 97,500
  - income = 117,000 - 97,500 = 19,500
- Y24 reserve = 80,000  \* 156,000 / 160,000 = 78,000
  - income = 97,500 - 78,000 = 19,500
- Y25 income = 78,000 (3 years of reserve deductions met)

</details>

### Work space in home

<details><summary>Slide 69 Work space in home</summary>

 20% of home is partitioned for self-employed work

- utilities: 3,000 (20%)
- mortgage interest: 5,000 (20%)
- long distance call for work: 1,000 (100%)
- property taxes: 2,000 (0%)
- purchase of computer for work: 2,500 (CCA of 100% or 1.5 * 55%)
- general upkeep and maintenance 5,000 (20%)
- contents and property insurance: 200 (0%)
- supplies for the office 400 (20%)

Calculate CCA of computer and prorate home expenses.

Computer CCA can be 100% deductible if CCPC or individual.

$6,500

OR: 1.5 (accelerated) \* 2,500 \* 55%

$6063

</details>

<details><summary>Chapter 4, Problem 8</summary>

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

</details>

### Midterm Information

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
- MINUS any disposals \[C] (min of disposal and the costs of disposals)
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

A = 80,000, B = 25,000, C = MIN {20,000, 35,000}, CCA = 0.2 \* (80,000 + 1.5 \* (25,000 - 20,000)) = 17,500. Therefore UCC = 80,000 + 25,000 - 20,000 - 17,500 = 67,500

What if the old assets was sold for 30,000?

A = 80,000, B = 25,000, C = MIN {30,000, 35,000}, CCA = 0.2 \* (80,000 + 25,000 - 30,000) = 15,000. Therefore UCC = 80,000 + 25,000 - 30,000 - 15,000 = 60,000

### Gains/Losses on Disposition

- No capital loss
- Terminal loss
  - When there is a positive balance in a class where all assets are disposed of
  - The left over in the asset after UCC minus disposition. (CCA is not allowed on a sold asset).
- Recapture
  - Negative balance in class
- Capital gain
  - Selling price > original cost

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

### Class 10.1 Automobile

- CCA on additions is 34,000 instead of full amount
- 30%
- passenger vehicle costing $34,000 (plus tax)
  - this is the max claim
  - not pooled
  - no recapturing or terminal loss
  - CCA half-year rule on sale

A car was purchased in March 2021 for $36,000 and sold in 2022 for $30,000 (ignore sales tax).

<details><summary>Slide 88 Answer</summary>

Ignoring accelerated investment incentive property (AIIP)

2022-cca = 36,000 \* (1 - 0.5 \* 0.3) \* (0.5 \* 0.3) = 4,590

</details>

<details><summary>ESL Academy</summary>

1. Market research: 30,000
2. Programming for IT platform development: 75,000
3. Allocation of salaries of designer and teachers for development of content: 105,000
4. Allocation of salaries of desiger and teachers for development IT platform: 35,000
5. Web hosting and IT support: 3000

- What are current expenses?
- What are capital expenses and so CCA can be claimed?
  - Development (computer application software)

</details>

### Leasehold improvement (class 13)

- CCA = Lesser of
  - a fifth (1/5) of the cost
  - cost divided by remaining years on lease PLUS the length of the next renewal term
    - max 40

Mr. E. Presley has been operating an automobile repair business.

A warehouse was leased this year. The lease has a term of five years with five options for renewal of five years each. The lease period commences April 15. The cost of leasehold improvements was $70,000.

CCA = MIN (70,000 / 5, 70,000 / 10) = 7,000

### Limited-life intangibles (class 14)

- Patents, licenses, franchises with limited life
- Straight line method
- CCA = cost \* (days owned in the year) / (total days of life)

Mr. E. Presley has been operating an automobile repair business.

The right to a licence to sell special racing car parts was purchased for $30,000. The licence is valid for a period of 15 years commencing June 1 this year. Compute CCA for Mr. Presley’s business for the taxation year ended September 30, 2022.

June: 30 days, July: 31 days, Aug: 31 days, Sep: 30 days.

CCA = 30,000 \* 122 / 5540 = 661 (includes leap years, rounded up)

## Income from Property

- Inclusions: interest, dividends, rental
- Deductions

### Property Interest Income

- loans, deposits, and more
- compensation for lending money
- for corporations, accrue on a daily basis
- for individuals, cash method or annual accrual method for no interest payment
  - anniversary day
  - a day before issuance every year from now

John needs to know the interest income in 2022 related to his two short-term investments:

1. $20,000 term deposit purchased on November 30, 2022 (interest at maturity in six months)
      Accrued interest from December 1 to December 31, 2022…..$85

    - no interest income

2. $400,000 GIC purchased on November 1, 2021 (interest payable at maturity on October 31, 2024)
      Accrued interest from November 1, 2021 to October 31, 2022…$16,000
      Accrued interest from January 1, 2022 to December 31, 2022….$16,214

    - Interest income of 16,000

### Property Dividend Income

- From Canadian corporations, include dividend + gross up \[dividend tax credit = corporate tax].
  - purpose: restore dividend to pre-tax corporation income to better assess tax
- Claim the tax credit when calculating the tax payable.
- For CCPC with low corporate tax rate,
  - 15% gross-up
  - 10.38% of dividends is credited
  - Example, income 100, corporate tax of 13
    - taxable is $100 (87 \* 1.15)
    - tax at 46% = $46
    - tax credit of $13 (4.62% provincial)
    - net personal tax = 33
    - total taxes paid on corporate profits = $46
- For public corporation or CCPC not taxed at a lower rate (eligible dividends)
  - 38% gross-up
  - 20.7% of dividend is credited
- Dividends received from foreign companies do not get grossed up and have no tax credit
  - the total dividend gets included not the net of foreign withholding tax (that part will most likely get credited)

Slide 102, Chapter 6 Problem 3

- $200,000 in international income fund at 4%
- $20,000 in Canadian dividend fund at 3%
- 33% federal tax rate, 20% provincial
- international net income = 200,000 \* 0.04 \* (1 - 0.53) = 3,760
- canadian net income
  - dividend = 200_000 \* (0.03) = 6,000
  - gross-up = 6,000 \* 0.38 = 2,280
  - tax = (6,000 + 2,280) \* 0.53 = 4388.40
  - tax credit = 2,280
  - net income = 6,000 - 4,388 + 2,280 = 3,892
- Therefore, better to pick the Canadian fund at a lower yield

### Property Rental Income

- Rent - Expenses
- Expenses
  - Mortgage interest, insurance, property taxes, utility costs
  - repairs, maintenance
  - salaries, wages, property management fees
  - CCA (class 1, 4%)
    - CCA claimed cannot incur total rental loss (CCA limit across properties is the rental income before deduction)
    - Separate classes for buildings >= $50,000

Jim owns two rental buildings which he purchased in 2021. Property A cost $40,000, Property B cost $45,000 After all expenses other than CCA, Jim's total rental income for the past two years was $1,000 in 2021 and $5,000 in 2022. Jim has chosen to deduct the maximum CCA for both years. What are the maximum CCAs?

- CCA2021 =  (40,000 + 45,000) \* 0.04 = 3,400 round down to 1,000 to prevent rental loss.
- UCC = 84,000
- CCA2022 = 84,000 \* 0.04 = 3,360

### Tax Planning

- given two choices, choose one with higher after-tax return

### Property Deductions

## Chapter 7 Capital Gains (CG)

In summary,

- taxable capital gains is from an investment not an adventure or business purposes
- taxable capital gains is 50% of total capital gains.
- personal use property is non-tax deductible
  - needs to have proceeds over $1,000
  - costs will be rounded up to $1,000
- listed personal property is only tax-deductible against other LPP and carry-forwards (7) / carry-backwards (3)
- allows reserves (subtract against gross) less of the business reserve rule or 80%-0% of net every year
- principal residence rule allows a plus 1 when the house is owned for more than a year

### Business Income vs. Capital Gains

- relation of transaction to business
- adventure in nature of trade
- nature of the assets
- frequency and amount of transactions
- holding period
- articles of incorporation

### Example

- a. Bill purchased land for $100,000, built and ran a restaurant, and then sold the land for $460,000 (CG applies)
- b. Martha purchased land for $100,000 and sold land two years later for $300,000

### Determining Capital Gains and Losses

- Proceeds of disposition (POD)
- less: adjusted cost base (ACB) (cost plus/minus adjustments)
- less: disposition expenses
- net amount
- less: reserve
- CG/CL
- taxable capital gains = 1/2 \* CG
- allowable capital loss = 1/2 \* CL
- ACL is only deductible from TCG
- ACL needs to be adjusted if the rate was different at the time of loss compared to the time of deduction

### Reserve for unpaid proceeds

Lesser of (unpaid proceeds / total proceeds) \* net amount AND 80% of net amount in year 1, 60% in year 2, 40% in year 3, and 20% in year 4, 0 after year 4.

A parcel of land with a cost of $4,000 was sold in 2022 for $160,000. For the total proceeds of $160,000, $40,000 was paid at the time of sale in 2022, and $20,000 payable in each year from 2023 to 2028.

- Reserve2022 = MIN { 120,000 / 160,000 \* 156,000 = 117,000, 80% \* 156,000 = 124,800 } = 117,000
  - CG = 39,000, TCG = 0.5 * (39,000)  = 19,500
- Reserve2023 = MIN { 100,000 / 160,000 \* 156,000 = 97,500, 60% \* 156,000 = 93,600 } = 93,600
- Reserve2024 = MIN { 80,000 / 160,000 \* 156,000 = 78,000, 40% \* 156,000 = 62,400 } = 62,400
- Reserve2025 = MIN { 60,000 / 160,000 \* 156,000 = 58,500, 40% \* 156,000 = 31,200 } = 31,200
- proceeds minus cost minus reserve is carried forward to next years proceeds

### Personal Use Property (PUP)

- round up cost to $1,000 if proceeds are more than $1,000
- each property gain is taxable and losses are not deductible
- minimum proceeds of disposal = $1,000
- minimum cost basis of $1,000

### Listed Personal Property (LPP)

- round up proceeds to $1,000 if proceeds are less than $1,000
- PUP with investment value
  - print, etching, drawing, painting, or sculpture, or other similar works of art
  - Jewelry
  - rare folio, rare manuscript, rare book
  - stamp
  - coin
- Losses are recognized but only deductible against LPP
  - unused losses carried backward 3 years, or forward 7 years

- ACB; proceeds
- Oil painting (2,500; 500)
  - round up proceeds to $1,000
  - investment value
  - CL = -1,500 (LPP)
- Rare coins (800; 1,200)
  - investment
  - round up ACB to 1000
  - CG = 200 (LPP)
- Piano (25,000; 14,000)
  - no CL because no an investment (PUP)
- Antique car (10,000; 15,000)
  - CG of 5,000 (PUP)
  - antique does not mean rare

- LPP $0 taxable, carry-forward = 1,300 \* 0.5 = 650
- PUP = 5,000 \* 0.5 = 2,500 taxable

### Allowable Business Investment Loss (ABIL)

- disposition of shares or loans of a small business corporation (SBC)
  - SBC is a CCPC with substantially all assets used to conduct active business
- offset against all sources of income

### Principal Residence \[sec 54]

- owned and ordinarily inhabited for personal use
- one principal residence per family unit
- designation at sale
- capital gain is net of commissions
- claim exemption against capital gains
- (1 + years designated as principal residence) / (number of years owned) \* gain <= gain
  - the 1+ accounts for selling and buying a house in the same year
  - home should be owned for at least one year for the 1+
  - I believe when proceeds over a million, the gain over 500,000 should be taxable
  - The year the principal residence is sold can be the start another property is the principal residence (assuming only two properties and the one sold first was maxed out)

### Maximize Exemption With Multiple Homes

Compare gain per year.

Exercise 2

Patel has only two residences he wishes to dispose of in 2022

- Name; year purchased; cost; commissions; selling price
- City home; 2007; 180,000; 12,000; 247,000
  - 16 years; 55,000/16 gain per year
- Cottage; 2012; 90,000; 6,000; 164,000
  - 11 years; **68,000/11** gain per year (higher than home)

Exemption = (1 + ?) / 11 \* 68,000

### Stock Dividends

- ACB is paid up capital
- Increases net income by ACB + 38% gross up

### Superficial Losses (denied)

- no intention of disposing of the asset; disposed and reacquired within 30 days
- the denied losses are added to the ACB of the acquired asset

Example. Taxpayer sold 500 shares of Corp. X for 8,000 on Dec 31, 2021 with ACB of 10,000. On Jan 5, 500 shares were reacquired for 7,500. Sold half of shares on July 20 at $21/share. What is TCG?

ACB = 9,500/500 \* 250 = 4750. POD = 250 \* 21 = 5250. TCG = (5250 - 4750) / 2 = 250

### Computation of Div. B income (NIFTP)

- Aggregate income (worldwide)
- Employment
- Business
- Property
- Other
- must be positive or zero

Example

- Employment: 35,000
- Business 2,000
- Property (3,000)
- Taxable Capital Gains 3,000
- Allowable capital losses (8,000)
  - (include 2,000 allowable business investment losses)
- RRSP contribution of 1000

- Employment (35,000) + Business (2,000) + 3,000 TCG - 3,000 ACL - RRSP 1000 - 3000 property - 2000 ABIL

### Mr. A Capital Losses

- Capital Gains:
  - Shares 1850
  - Personal use property: 770
  - Listed personal property: 500
- Capital losses
  - Shares 750
  - Personal-use property 1000
  - Listed personal property 140
  - Listed personal property losses from previous year 100

 Taxable gains?

0.5 \* (1850 + 770 + (500 - 140 - 100)) - 750 \* 0.5   = 1065

## Chapter 8 Non-Arm's Length Transfers and Other Special Circumstances

- Non-arm's length (NAL) rules
  - prevent reduction of tax by selling price other than fair market value
  - people related to each other (direct-line)
  - government doesn't like income splitting
  - income received on transferred property is attributed back to original owner
  - exceptions:
    - transferred or loaned at fair market value
    - second-generation income
      - income earned on profits of a company
    - transferred to a related chid (18+)
      - capital gains or losses

- gift of $100,000 to his son, 21. The son earned $3,000 of interest income
  - not attributable back
- 100,000 loan to mother-in-law, 81. Mutual funds and earned $12,000
  - the mutual fund is equivalent to transferred property
  - the income made off the $12,000 would not be attributable back
- $100,000 to wife spent on expenses. Earned $10,000 on her own $100,000
  - income wasn't earned on the transferred cash (not property)
  - the dividend was earned on her money

### Selling to NAL \[sec 69]

1. Sell price < FMV
    - Deemed to sell at FMV
    - Purchaser ACB = sell price
2. Sell price > FMV
    - Deemed to sell at sell price
    - **ACB equal to FMV**
3. Gifting
    - Sales price to vendor = FMV
    - Purchaser ACB = FMV

### Transferred to Spouse

- Sold at vendor's cost (rollover is automatic)
- Can choose to use NAL
- Property income and capital gains are attributed back unless transferred at FMV

### Transferred to Children

- to Under 18s
  - NAL rule applies
  - Property income is attributable unless transferred at FMV
  - Capital gains not attributable back
- 18+
  - NAL rule
  - property income and capital gains not attributable back

### NAL Transfer Multiple Choice

- ACB: 900,000
- FMV: 1,000,000
- shares given to 6 year old child

Vendor will report $50,000 taxable gain on the transfer of shares. The ACB of the child is $1,000,000.

- What if sold at $500,000 to child?
- What if given to spouse?
  - Either deemed to sell at FMV with ACB of FMV or rollover (no gain, and same ACB)

## Chapter 9 Other Sources of Income Deductions in Computing Income

1. Other Income \[subdiv d]
2. Other Deductions \[subdiv e]

### Other Income Major Items \[sec 56]

- pensions and deferred income plans
- annuity payment
- retiring allowances
- social assistance, workers' compensations
- support payments from former spouse

### Other Deductions Major Items \[]

- support payments to former spouse (alimony)
- fees/expenses for objection or appeal of a tax assessment
- RRSP contributions
  - contribution is less of { **18% of prior year's earned income**, 2022 limit of $29,210 } MINUS prior year's pension adjustment (PA).
  - DPSP is Deferred Profit Sharing Plans
  - investments not taxed until withdrawn
  - contribution room is carried forward
- Moving expenses
- Child care expenses

### Other Tax-Assisted Plans

- TFSA
  - Contribution is not deductible; income is not taxable. Annual limit, unused room carried forward
- RESP
  - contribution is not deductible; income is taxable. max contribution of $50,000 over 31 years (35 if desirable)
  - useful since government matches 20% of contribution to a max contribution of 2,500
- FHSA (tax-free first home savings account)
  - **contributions are deductible**; income is tax-free; unused contribution room cannot be carried forward, max of $8,000 per year, $40,000 lifetime max (5 years)
    - must be used to buy first home otherwise taxed

### Moving Expenses \[sec 62]

- relocation to start business, employment, or attend university
- if moving expense > income in new location, carry forward unclaimed portion and deduct in following years
- deductible:
  - meal $69/person/day without receipt
  - transportation and storage of belongings
  - temporary board and lodging (up to 15 days)
  - costs of cancelling a lease for old residence
  - selling costs of the old residence
  - legal fees and land transfer taxes
  - cost of maintaining old residence up to $5,000
  - cost of revising legal documents

Exercise

Ken and Mary were living in Edmonton. Ken was an engineer and Mary was a self-employed consultant. On April 4, 2022, the couple moved
from Edmonton to Toronto so that Ken could start a new position. Mary continued her business. Only one person can claim the moving deductions.

- Return airfare for trip to find living accommodation in Feb 2022: $550
  - Not deductible, since not actual move
- Hotel and meals for three days during trip to find living accommodation (receipts kept): 500
  - Not deductible, since not actual move
- Airfare for the move to Toronto in April: $1,200
- 20 days of moving and waiting
  - hotel: 3,000 (prorate to 15 days)
  - meals (not all receipts): 1,300
    - higher of:
      - 15 days of $69/person/day (2 \* 69 \* 15)
      - receipts would get prorated
- Legal fees and commissions of selling old home: 3,700
- Loss on sale: 27,000
  - not covered in moving expense, covered in other section
  - PuP so can't claim capital loss
- transporting household goods: 4,900
- legal fees and land transfer tax on acquisition of new home in Toronto
- Interior decorating of new home
  - not deductible

Ken received a salary of $87,000 from his employer, and Mary earned $125000 as a self-employed consultant in Toronto.

Total moving expenses = 1200 (air april) + 2250 (hotel prorated) + 2070 (allowable meal) + 3700 (old home expenses) + 4900 (transporting) + 900 (legal new home expenses) = 15,020.

### Child care expenses \[sec 63]

- cost of babysitting, day care, or lodging at a boarding school
- children under 16
- less of
  - 8,000 per child under 7
  - 5,000 per child 7-16
  - 11,000 per disabled child
  - 2/3 of earned income
- claimable usually by lower income spouse (if only one parent, use that parent's income)
  - if lower income spouse has an income of zero, then there is no benefit
- unless
  - lower income spouse is a student, in hospital, jail, marriage breakdown
  - limit not exceeding (275 per disabled child + 200 per child under 7 + 125 per child 7 to 16) \* weeks in special situation

- Homer & Marge have 3 kids aged 10, 8, 1. Homer earned 15,000 and Marge earned 40,000.
- MIN {15,000 \* 2 / 3 = $10,000, 5,000 \* 2 + 8,000 = 18,000 } = 10,000
- Therefore, the child care expense is $10,000

<details><summary>Problem 13 on Slide 151</summary>

- 2022
- public corporation
- kids aged 8 and 10.
- Recap (from memory)
  - 8,000 under 7
  - 5,000 7-16
  - 11,000 disabled

- 150,000
- 30,000
- (6,000) (RPP)

(1) lease of 18,400. Operating cost benefit = 0.29 * 10,000 = 2900 vs. 6131/2. $200 per month is paid for use of the car.
Standby benefit = 2/3 * 18,400 * 10,000 / (1667*12) = 2/3 * 18,400 * 10,000 / 20,004 = 6132
2900 + 6132 - 2400 = 6632

(2) no benefit since options were not exercised

(3) benefit of 850 - 500 since gift is over $500.

(4) 1300 for fitness club membership. Omit $350 since it is private healthcare plan

- 1800 interest income
- 7500 CA public corporation dividend (also taxable on gross up of 7500 \* 0.38 = 2850)
  - 20.7% of dividend is credited
- 680 US corporation (net of 15%) dividend (taxable on 680 / 0.85)
- annuity payment of 2000 minus capital portion 650 = 1350
- Principal house 18800 (net of commissions)
  - (1 + 2022 - 2011 + 1) / (2022 - 2009 + 1) = 13 / 14
  - 2011 because the cottage got the +1
  - (188000 - 90000) \* (1 - 13 / 14) \* 50% inclusion = 7,000 capital gains = 3,500 taxable capital gains
- Minors
  - 6% 2,000 five year bond
  - $120 \* 2 taxable = 240
- Expenditures
  - Investment counsellor's fee 1,100 (deduct because it was for income earning purposes)
  - Loan interest of 850 (deduct because it was for stocks which is for income earning purposes)
  - Deduct Rental Loss of 3,500
  - Deduct RRSP 14,000
    - Max deductible; min(29210,0.18*170000)-7000 = 22,210
    - carry forward 22210 - 14000 = 8210
  - Deduct meals & entertainment of 0.5 * 8300 = 4150

- Employment income: 150000+30000-6000+6632+350+1300-4150 = 178,132
- Properties Income: 1800 + 7500 + 2850 + 800 + 240 - 1100 - 850 - 3500 = 7740
- Other income:1,350 (annuity)
- 3,500 (taxable CG)
- (14,000) (RRSP)
- (3200) business loss
- NIFTP: 178,132 + 7740 + 1350 + 3500 - 14000 - 3200 = 173,522

Irrelevant to NIFTP:

tax credit on CPP: (3,500) (does not reduce income for tax purposes)
tax credit on EI (953)
income taxes deducted: (55,000) (to find payable amount after credits)

</details>

## Chapter 10 Calculation of Taxable Income and Taxes Payable for Individuals

1. Taxable income [Div. C]
    - = Div. B NIFTP - Div. C Special Deduuctions
2. Calculation of Tax for Individuals [Div. E]

### Special Deductions

- Stock options [sec 110(1)(d)]
- Loss carryovers [sec 111]
- Lifetime capital gain deduction [sec 110.6]
- Social assistance; workers’ compensation [sec 110(1)(f)]

### Loss Carryovers

- Non-capital losses
  - Deductible against everything
  - Unused business, property, employment losses and ABILs
  - Carried backward 3 years and forward 20 years against any income
- Net Capital loss
  - Deductible against taxable capital gains
  - carried back 3 years, forward indefinitely
  - on death deductible against any income
  - conversion of rates over the year (3/4 -> 2/3 -> 1/2)
  - 2/3 from 1988 to 1989, 3/4 from 1990 to 1999, 2/3 in 2000, 1/2 since 2001
  - [inclusion rates](https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/about-your-tax-return/tax-return/completing-a-tax-return/personal-income/line-12700-capital-gains/you-calculate-your-capital-gain-loss/inclusion-rates-previous-years.html)
  - to convert, divide by numerator and then multiply by the denominator and then multiply by recent rate
- ABILs reclassified as net capital loss after 10 years of being unused

### Lifetime Capital Gain Deduction

- qualified small business corporation shares
- qualified farm property

Slide 158 example

Salary of 72,000 and taxable capital gains of 4,500. NonCapitalLoss of 28,000 from 2018 and NetCapitalLoss of 12,000 from 2019.
Public corporation stock options of 2,000 shares at $4 per share (equal to fair value on grant day) exercised with fair market value of $10/share.

- Therefore, employment income of 72,000
- Benefit of (10 - 4) \* 2000 = 12,000
- Taxable capital gains of 4,500
- Net income for tax purposes of 72,000 + 12,000 + 4,500 = 88,500
- Less
- Division C (option was not ITM) deduction of 12,000 \* 0.5 = 6,000
- Less: Net Capital Loss = 4,500
- Less: Non-capital loss = 28,000
- Taxable income = 88,500 - 6,000 - 4,500 - 28,000 = 50,000

- Net capital loss balance = 12,000 - 4,500 = 7,500
- Non capital loss balance = 0

Example 2

The Net Capital Loss in 1999 was 6,000. How to convert to 2022?

Since it used to be 3/4 and now it is 1/2, we need to get back.

6,000 / 3 \* 4 / 2 OR 6,000 \* 2 / 3 = 4,000

### Tax Calculation

Before deducting credits, calculate the federal tax. Add tax from base amount in income tax bracket table to (Taxable amount - final income of previous) \* tax rate.

### Tax Credit

These credits are non-refundable meaning that federal tax cannot go under 0.

- Basic: 15% \*
  - 14,398 for income < 155,625
  - proportionally reduced for income between 155,625 and 221,708
    - reduced credit = 14,398 - (net income - 155,625) \* (1,679 / 66,083)
  - 12,719 for income > 221,708
- Married or Equivalent to married
  - Basic credit plus 15% \* tax payer's basic amount reduced by the spouses/ETM's Div. B income
  - single, divorced, separated, widowed, supporting a relative, or under 18
  - Example: you have taxable income of 120,000
    - Married credit: 15% \* 14,398 + 15% * (14,398 - spouse div. B income)

### Age Amount

- 15%
- Reduced by 15% of net income excess of 39,826

### Caregiver

- <u title='not physically or mentally strong, especially through age or illness.'>infirm</u> adult dependent
- 15%
- less for spouse or minor

### Pension Income

- 15% of a max of 2,000 and pension income

### Employment Credit

- 15% of a max of 1,287 employment income

### Medical Expense Credit

- Medical expenses paid for the taxpayer, spouse, and children that exceeds MIN(3% of net income, 2,479).
- Medical expenses paid for other dependant
- 15%

Implications: small medical items are not taken care of, but large medical expenses results in a credit for the entirety

### Impairment Tax Credit

Can be transferred to spouse if the impaired person cannot use it. 15%.

<details><summary>Problem 7 (Slide 170)</summary>

</details>

### Donation Credit

### CPP and EI credits

- 15% of CPP and EI (given) to a maximum
  - Max EI of 953
  - Max CPP of 3,500

### Tuition credit

- Entire tuition is a credit (times 15%)
- Transferrable up to 5,000

### Dividend Tax Credit

- 20.7% of dividends paid from public corporations and others taxed at general tax rates
- 10.38% of dividends paid from CCPC corporations with low tax rates
- Can be transferred to spouse under certain conditions

### Foreign Tax credit \[sec 126]

### Political Contributions \[sec 127(3)]

- 75% of first $400
- 50% of the next 350
- 33 1/3% of contributions over 750.
- Maximum $650 annually.

### Chapter 10 Problems

<details><summary>Chapter 10, Problem 5</summary>

Div. B income

- Mrs. Plant: $60,000 (58,000 in employment income)
- Amanda: 7,000
- Joan:
  - Home <-> university $150
  - 4,200 - 150 = 4,050
- Courtney 2,800
- Mr. Plant 5,000 + 100 (don't include 4,000 in dividends since it was first generation)

Mrs. Plant credits:

- Married credit  = 14,398 + 14,398 - 5,100 = 23,696
- Employment
  - CPP = 3500
  - EI = 1287
- Caregiver credit for Amanda = 2,350
- Caregiver credit for Mr. Plant = 7,525
- Tuition (Amanda) = 300 = 300
- Tuition (Joan) = 3000 = 3000
- Impairment (Amanda) = 8,870
- Impairment (Mr. Plant) = 8,870
- Total \* 15% = 60,351 \* 0.15 = 9,053
- Dividend tax credit = 0.207 \* 4,000 = 828
- Non-refundable credits = 9,881

</details>

## Sales Tax (GST & HST)

- GST/HST is a consumption tax on goods and services (supplies) in Canada
- It is collected by business (registrants) who sell supplies
- targets final stage
  - refundable input tax credit applies on purchases
  - goods and services must be purchased for commercial activities
  - If ITC exceeds the tax, registrants receive refunds

### Supplies

- sales or rentals of goods
- rendering of services
- leases, sales, or other transfer of real properties
- 3 categories of supplies
  - taxable supplies
    - subject to 5% of tax
    - entitled to input tax credit
    - subject to tax each time they are sold
  - Zero-rated supplies
    - 0% of tax
    - entitled to input tax credit
    - prescription drugs, medical devices, basic groceries, exported goods and services
  - Exempt supply
    - no GST/HST
    - no input tax credit
    - Examples: health care and child care services, educational services, most financial services

- Clothing store sells pair of jeans ot a customer
  - taxable
- Consulting done for US private company (performed in the USA)
  - zero-rated since exported
- A Canadian bank charges a monthly fee for the chequing account.
  - exempt

Section 6.1.2. requires the new CPA to “assess reporting systems, data requirements and business processes to support reliable tax compliance.”

Data analytics

- Big data refers to the increasing volume of data now available, as well as its variety and the speed at which it can be processed.
- Analytics is the means for extracting value from this data - the tool that generates insights and deeper understanding.

Advantage

- Access to tax information quickly; prepared for strategic tax planning; collect tax data

Process for data analytics

1. Define the question; gather information and data
2. Analyze data and issues
3. Communicate results

## Problems

<details><summary>Chapter 3, Problem 19</summary>

48,000 (gross) + 40,000 (bonus) - 4,000 (RPP) - 2,200 \* 0.5 (client related meals) - 5,200 (traveling expense) - 7,800 (airfare) - 500 (taxi) - 3,500 (gifts) + 350 ( planning benefit) + 150 (life insurance premium)

Car cost: 36,000

- Standby Benefit = 0.02 \* 36,000 \* 12 = 8,640
- Operational benefit = 9,900 \* 0.29 = 2,871
- Reimbursement = 2,400
- Automobile benefit = 8,640 + 2,871 - 2,400 = 9,111

</details>

<details><summary>Chapter 2, Problem 1</summary>

a. part-time resident with fresh-start Mar 1
b. non-resident
c. part-time clean-break from canada as very little ties remain July 30
d. common-law full time resident: education and family
e. deemed full time resident since more than 183 days in Canada (sojourned)

</details>

<details><summary>Chapter 2, Problem 5</summary>

a. deemed resident because incorporated after April 26, 1965
b. deemed resident because of control from canada
c. non-resident because not really controlled by Canada

</details>

<details><summary>Chapter 3, Problem 3</summary>

1. taxable
2. taxable
3. tax deductible RPP contribution (company's contribution is tax free)
4. relocation allowance is a taxable benefit
5. fitness club is a taxable benefit because it benefit Rishma
6. financial planning is also a taxable benefit
7. not a taxable benefit, and the $200 is not deductible

</details>

<details><summary>Chapter 3, Problem 23</summary>

125,000 - 6,750 (RPP) + 90 (group life insurance) + 640 (public health) + 9,600 (allowances) + 1,400 (wife) + 0.2 \* 2568 + 1,200 \* 3 (rent paid) + 1,500 \* 0.5  (half of the amount above 15,000 for loss on house sale) + 15,000 (moving allowance) + 2,000 (interest rates) + 0 (swimming pool is owned by the company, so no taxable benefit) - 12,000 (travel expenses) - 7,200 \* 0.5 (meals) - (1,300 + 1,050 + 180 + 120) \* 22,500 / 36,000 - 10,200 \* 22,500 / 36,000

</summary>

<details><summary>Chapter 4, Problem 1</summary>

1. The charity donations are a credit or something
2. Okay
3. Okay
4. Okay
5. Okay. equally over 5 years.
6. Capitalized for software. Landscaping is okay.
7. 50% for meals and entertainment. Picnic is 100% deductible
8. Not deductible
9. Not deductible since recreational?
10. .61 up to 5,000 and .55 after

</details>

<details><summary>Chapter 4, Problem 11</summary>

-2,330 (net income) + 6,650 + 462 \* 0.5 + 460 + 380 + 15,500 (self salary)

</details>

<details><summary>Chapter 4 Problem 15</summary>

-11,500 + 3,800 (amortization) - CCA + 1,500 \* 0.5 + 1,800 \* 0.5 + 12,000 + 2,200 - 380 + 21,200 (capitalize) + 2,350 \* (5/18) + 1,400 (home office is non-exclusive) + 1,200 (can't do provisions)

</details>

## Final Exam Studying

Chapter 5, Problem 1
