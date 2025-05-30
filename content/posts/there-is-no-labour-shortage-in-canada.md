---
title: "There Is No Labour Shortage in Canada"
date: 2024-02-29T21:14:08-05:00
draft: false
tags:
  - canada
  - opinion
summary: "How many of month of unemployment is desirable? Duration EI is expected to last? Not only can we show that we have enough labour, we can use statistic analysis to show that the labour shortage in Canada ended in 2022."
---

There is no labour shortage for unskilled labour in Canada. To determine whether there's a labour shortage objectively speaking, we need to figure out how many months of unemployment is desirable.

Since EI can be at least 14 weeks, let's say we need a strong chance (95%) during a non-recessionary economic period in Canada.

Now we need to figure out what the competition is for the average minimum wage job. [That would be 1200](https://www.reddit.com/r/CanadaMassImmigration/comments/1b25s5n/theres_a_labour_shortage_and_we_need_more/). So the probability, assuming that for unskilled labour there is no customization of job applications, is 1/1200 or 0.00083.

Now we need to figure out how many jobs we can apply to in the span of 14 weeks without burning out. It's going to be different for everyone, but for me, I think I could do 2 per hour 8 hours a day or 80 per week or 1120 in 14 weeks.

To figure out the number of weeks it will take to guarantee a job, we need to find the probability we will be rejected by all job applications.

So with p(getting the job for one application) = 0.00083,

We find that there's only a 60.54% probability you will get a job by the end of 14 weeks (1120 applications), the bare minimum of EI, and for a 95%+ chance of getting a job it would be 45 weeks of applying. 95% was chosen since we expect ~5% of people to be unemployed all the time.

So what is the max number of applicants before we can say that there is a labour shortage? Well whatever results in a 95%+ before the 14 weeks of EI; This would mean a probability of success per application of ~0.0027 which is 370 applicants per minimum wage job posting (3.25x less applicants). So for Canada to say there is a shortage of workers, the number of people applying to switch jobs would need to be 1/3 of what it currently is: 1,224,600 as of January 2024. pre-pandemic (January 2020), the number of people unemployed was 1,118,300. Something is off. That's right, students are not considered unemployed, and we could even make the statement that 2/3 of applicants are either not permanent residents or we are in a recession and official do not want to admit it.

> More than 900,000 foreign students had visas to study in Canada last year, which is more than three times the number 10 years ago.

<details><summary>Table of Applications and Calculation Method</summary>

Number of Applications | Weeks spent applying to Jobs | Probability %
------------------------------- | ---------------------------------------- | -----------------
80 | 1 | 6.43
160 | 2 | 12.44
240 | 3 | 18.07
320 | 4 | 23.33
400 | 5 | 28.26
480 | 6 | 32.87
560 | 7 | 37.19
640 | 8 | 41.22
720 | 9 | 45.00
800 | 10 | 48.54
880 | 11 | 51.84
960 | 12 | 54.94
1040 | 13 | 57.83
**1120** | **14** | **60.54**
1200 | 15 | 63.08
1280 | 16 | 65.45
1360 | 17 | 67.67
1440 | 18 | 69.75
1520 | 19 | 71.69
1600 | 20 | 73.51
1680 | 21 | 75.22
1760 | 22 | 76.81
1840 | 23 | 78.30
1920 | 24 | 79.69
2000 | 25 | 81.00
2080 | 26 | 82.22
2160 | 27 | 83.36
2240 | 28 | 84.43
2320 | 29 | 85.43
2400 | 30 | 86.37
2480 | 31 | 87.25
2560 | 32 | 88.06
2640 | 33 | 88.83
2720 | 34 | 89.55
2800 | 35 | 90.22
2880 | 36 | 90.85
2960 | 37 | 91.44
3040 | 38 | 91.99
3120 | 39 | 92.50
3200 | 40 | 92.98
3280 | 41 | 93.44
3360 | 42 | 93.86
3440 | 43 | 94.25
3520 | 44 | 94.62
3600 | 45 | 94.97
**3680** | **46** | **95.29**

```py
total_weeks = 46
p = 0.00083
for i in range(1, total_weeks + 1):
  tries = i * 80
  print(f'{tries} | {i} | {100 - (1 - p) ** tries * 100:.2f}')
```

```py
weeks = 14
tries = weeks * 80
one_success = 0.0001
got_a_job = 100 - (1 - one_success) ** tries * 100
while got_a_job < 95:
  one_success += 0.0001
  got_a_job = 100 - (1 - one_success) ** tries * 100

print(one_success, got_a_job)
```

</details>

### Conclusion

At the end of the day,

> The Retail Council of Canada wants a permanent regulation allowing 30 hours of work per week when class is in session. “For international students, retail can provide a way to supplement their incomes, enhance language skills, and provide useful employment skills – everything from front-line retail and customer service, to logistics and supply chain,” spokeswoman Michelle Wasylyshen said in an email.

- [Financial Post (2024.02.06)](https://financialpost.com/news/economy/canada-cut-cheap-foreign-labor-minister-says)

> In December, Immigration Minister Marc Miller extended the policy until April 30, 2024 and floated the idea of setting the cap at 30 hours a week thereafter.

- [CTV News (2024.02.13)](https://www.ctvnews.ca/politics/minister-was-warned-before-lifting-international-student-work-limit-1.6766641)

Marc Miller is not a rational Liberal MP. He might've said that he reduced the international study permits for 2 years, but that was clearly to distract from the waiver of 4 months. Instead of giving Canadians relief in the job market immediately, Miller opted to give corporations at least 4 more months of advantage in the labour market. His reasoning for waiving it is that the academic year ends in April, but the reality is that these students should be able to survive hours of work in the first place! Of course, maybe it's not his fault for them being in that situation as Sean Fraser was the immigration minister before him who allowed students to need 40 hours of work per week just to go to school...I'm a full time student; I don't have 40 hours a week of free time. I have classes, assignments, exams, and oh...friends.

Who is on the Retail Council of Canada?

[RCC Board of Directors](https://www.retailcouncil.org/who-we-are/board-of-directors/)

Guess who voted for Liberals in 2015? Rogers executives. Who is the the first person listed on the site? That's right a Rogers executive.

- Rogers
- Best Buy
- Rexall
- Metro
- Staples
- Apple Canada
- Restaurant Brands International (Tim Hortons, Burger King, Popeyes, Firehouse Subs)
- Showcase (???)
- London Drugs Limited
- Sobeys
- Costco Wholesale Canada
- Robert Simmonds Clothing
- **LCBO** (!!!)
- Henry's (?)
- Leon's Furniture
- Walmart Canada

Funniest part is that these corporations talk about [diversity and inclusion](https://about.rogers.com/who-we-are/inclusion-diversity/) yet there is only one non-white person on this board of directors that is trying to lobby the government to set the international student working cap to 30 hours per week permanently even though the  increase from 20 to 40 was supposed to be **temporary.**

## Canadian Labour Shortage Ended in 2022

My definition of a labour shortage is that every month, more people are employed than the number of people entering the labour force. When there is no noticeable decrease in the people unemployed, we're at full employment and there is no labour shortage.

Even [StatCan figured it out](https://www150.statcan.gc.ca/n1/pub/11-621-m/11-621-m2023009-eng.htm), there was no need for immigration as of July 2023, yet it took the government over a year to realize.

 There's ~1.5M more people in the labour force than are employed, compared to a difference of ~1.1M pre-COVID (445k more from May 2019 - April 2025).

From May 2024 - April 2025, there was an increase of this job shortage by 160k, (I expect 130k for 2025). The number of people employed increased by 270k in the last twelve months. For Canada's job market alone (not housing) to be fixed in the next 4 years, hiring would need to increase by 240k/yr (130k + 445k/4). My take is that the government should've reduced immigration further. During 2024, the job shortage actually increased by 240k. The government reduced their immigration targets for 2025 (485,000 in 2024, 395,000 in 2025), and we're seeing the effect almost immediately. The job shortage is increasing at 10k/mo from 20k/mo on average in 2024. Therefore, we need to double the immigration cuts just to keep this job-labour deficit from going out of control.

Since Carney is not running on reducing immigration further, he is essentially promising Canadians that his policies will double economic growth by 2028 which is crazy given that the biggest detriment to it all is their immigration policy! Even if we assumed that Carney doubles housing construction (+250k/yr), that would need to increase the number of people permanently employed by 485,000. Carney is truly a master at politicking!

From my numbers, the government should limit immigration to 240,000 for the next 4 years.A reduction of immigration by at least 160,000 would require increasing economic growth by 33%. According to RBC, every 10% reduction in trade barriers results in 0.2% economic growth per year. Given a GDP growth rate of 1.6 percent (2024), theoretically, even a 30% reduction in trade barriers should suffice. Since Carney wants to also cut government jobs, I'd argue we need to cut immigration by 160,000/yr plus however many public sector jobs are cut per year.
