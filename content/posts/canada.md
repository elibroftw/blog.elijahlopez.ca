---
title: "My Thoughts on Canada"
date: 2022-05-21T01:18:18-04:00
hidden: true
tags: [
    "canada",
    "finance",
]
---

This article encompasses my thoughts on Canada. Please refer to the table of contents to read sections
that are interesting to you.

{{< toc >}}

## The Ideal (Content) Canadian Life

What is the ideal Canadian life? I want to answer this question. It's very easy to fall prey to the unlimited
wants nature, so we'll have to answer what would make a Canadian content without bias?

The age at which this idealism should be achieved for Canadians is 30 years old.
I believe by 30 people would start a family. I also know that by 30,
we start to visually age. So at 30, we want to be living our ideal life.

### Living Situation

I haven't made up my mind on whether to have children or not, but in the off chance that I
do, I'd probably have 2 children. Therefore, an ideal _house_ will have 3-4 bedrooms.
The extra one is for guests. I think there should also be 3 washrooms.

One should plan out the general location where they want to build a family right after marriage[^marriage] because then you won't be locked into a location because of work, family, or friends. I'm pretty sure this is one of the biggest factors preventing people from moving to affordable locations. The other factors are activities which we'll get to now. Personally, I would love to live in New Brunswick, but I'll try to cater to all. If you want nightlife, you'll have to lower your bedroom and washroom numbers.

[^marriage]: by marriage I mean the unification of partners in a relationship rather than the legal sense

### Activities

For this, I'll have to think from other peoples' shoes. We have two ways to go for this. We can go suburban or urban.
For sake of the American Dream _fantasy_, we'll go the suburban route. So our activities consist of: waterpark within two hours, theme park within 2 hours, a picnic type park within 15 minutes, biking routes, tennis court, basketball court, soccer fields. Also a gym if you want to improve your physique. You can reduce or increase this list based on your wants.

### Income

Warning, this section is completely scuffed; as in I might've made more than one blunder.

My thought process for this is simple. We need to calculate ideal income based on how much we need to invest in the stock market, how much we will pay for mortgage, and how much we would want to spend per month on other things.

This ia big one, if not the biggest. Typically, we want $1M in cash by the time of retirement. Why? With $1M and 7% average annual S&P 500 return, we get $50,000-$70,000 per year if income tax is payable or not. I believe this is enough since we assume there is no mortgage and we aren't going on spending sprees. With disposable income of $4,000 / month which would be worth $2,000 minimum accounting for inflation, we're good.
In total, household networth at retirement (age 55) should be $1.5M to $3M. In business classes, we'd do some math to calculate the money needed at retirement in order to die with X amount of money. However, since we are dealing with an ideal lifestyle, we want to be able to live off passive income and leave our children with something.

We need to employ some financial equations now to account for real stock market growth of 8.66%.[^Moneychimp] To get this number, I used 35 years of data from Jan 1st 1986 to Dec 31 2021, adjust for inflation, add dividends, and subtract 0.03% because VOO is the cheapest S&P 500 exchange traded fund (ETF).

I don't have time to update my old investing article, but I summarized the basics [here](/posts/investing).

We can use this Python function I made in 2019/2020 to first calculate how much we need to put into the stock market per week.

```py
def get_savings_amt(future_savings, years_to_retirement, interest_rate,
                    compounds_per_year=2, startwith=0, saving_period=12):
    """
    Calculates how much you need to save per month to retire given the parameters
    """
    r, m, n = interest_rate, compounds_per_year, years_to_retirement * saving_period
    efr = (1 + r/m) ** (m / saving_period) - 1
    already_secured = startwith * (1 + r / m) ** (m * years_to_retirement)
    future_savings -= already_secured
    return future_savings * efr / ((1 + efr) ** n - 1)


>>> # assume we start working at 25, we start with $0, and we compound yearly
>>> # multiply by two to account for market volatility
>>> get_savings_amt(1000000, 30, 0.0866, 1, 0, 52) * 2
>>> 288.51322722512805
```

In the future I will try testing this out on actual data and seeing if the results are as intended. The market is volatile so we can't use an answer based on a monotonic assumption without double checking. In order to account for volatility, I doubled my answer.

$288/week translates to $1,248/month or $14,976/yr.

A down payment on a $2M home is $400,000 and if we want to buy it when we are 30, we'll need to save (household) $80,000
per year.

| What          | Yearly Amount (CAD)  |
| -----------   | -----------          |
| Investing     | 15,000               |
| Downpayment   | 80,000               |
| Food          | 15 * 30 = 10,950     |
| Two Cars      | 15,000 to 30,000     |
| Mortgage/Rent | 4,600 to 9,305.68    |
| Monthlies     | 250 * 12 = 3,000     |
| Misc.         | 10,000 to 12,000     |
| Vacation???   | 3,000                |
| Upper TOTAL   | 163,255              |
| Upper Income  | 280,000              |
| Lower TOTAL   | 146,255              |
| Lower Income  | 250,000              |
| Per Person    | 125,000              |

I did a lot of rounding and over-estimations, but overall I'm happy with my results. The upper bound is assuming you are
a baller and want a $2M home. That's not me, but some people out there want to be entitled to that. Personally, $1M home is enough for me, especially if it's in New Brunswick.

I guess this is the problem then huh? When half of Canadians earn less than 80,000, the ideal Canadian life is unattainable unless you're in specific career paths. So we'll look at careers that can earn 125,000 including alternative careers, as well as what Canada (government) can do to improve the situation (increasing purchasing power).

[^Moneychimp]: [Moneychimp - CAGR Stock Market Last 35 Years.](http://www.moneychimp.com/features/market_cagr.htm)

## $125,000 Careers

Software engineering of course. Product managers and project managers also make this, but those career paths are really talked about. Someone should make an article on those two career paths. What else? Lawyers, doctors, investment banking.

I don't really feel like writing this section, so I'll stop for now. I think the issue is that there's no way to make a 30 year old experienced enough to earn that much in some of these career paths that start off only at $80,000.

## Government Responsibilities

Engineers are grossly underpaid in Canada and the US. Not all engineering challenges are complete, yet these people
get paid pebbles. I propose some industries that are lacking in Canada. We need Canadian companies for these engineering innovation industries.

- CPU chips
- electronics
- automobile
- aerospace
- defense
- agriculture
- telecommunications outside of Ontario and Quebec
- lumber vertical integration (companies that use wood extensively)

We should also abolish the P. Eng fee. What a useless fee. People should not be sitting on their asses while others work hard.

### Taxes

The government goal should be to use taxes to create a sustainable environment for innovation and wealth. Taxes should be used wisely with the end goal of lowering taxes. Governments should create self-sustainable nationlised businesses
where the nature is a priviledge rather than a need. Things like health care should remain nationalized, but private health care should also be allowed as it is in Quebec. Not sure why courts in Canada think that private health care access takes away from Canadians who are using the public health care system, but hey I'm not a judge and they aren't economists.

Sales tax also needs to be improved. Some goods are basic requirements. For example, the CRA requires you
to have a phone number in order to login via 2FA, so then phone plans should not have sales tax applied to them.

### Tariffs

There should be almost 0 tariffs and import duties. If people want to shop in America, good for them. It's not like transporation to America is free, so why make citizens' lives more expensive?

### Organ Donors

People can choose to donate their organs for free upon death, but yet organs go for
thousands of dollars in black markets? Governments should incentivize people in poverty to become organ donors so
that when they die, their family will receive a payment instead of being left with nothing. A charity should be started
for this at the very least.
