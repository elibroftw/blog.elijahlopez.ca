---
title: "Representative Proportional Voting"
date: 2021-11-19T11:58:17-04:00
tags: [
  "canada",
]
---

{{< toc >}}

## Introduction

It's a month or two after the 2021 Canadian federal elections and I was curious as to how proportional the election was. I noticed that the Liberals were over-represented and the Conservatives were
under-represented. I then began a thought experiment on what an ideal democratic electoral process would look like for Canadian parliamentary elections. When the Liberal party came into power, one of their promises was electoral reform of the present first past the post system. However, now that the Liberal party is substantially benefitting from first past the post, it is not strategic for them to follow through on their initial promise. A lot of Canadians demand electoral reform without suggestions, while others use "local representation matters" as a critique against common proportional voting systems (party-list proportional representation). Others try to assert that ranked ballots are the be it end all for democracy, but I digress. Ranked ballots work great when it's just for one specific task, such as mayor or a university student association, but if it were applied to federal elections we would still not have proportional results. Rather, we would see the NDP gaining seats from the LPC and maybe the CPC gaining 2% more votes per district (riding and district are interchangeable). As the title of this article states, I will outline a novel electoral system called the Representative Proportional Voting (RPV) which adapts the existing first past the post in a way that rewards popular independent representatives and ensures that every vote counts and is important. This new technique is applicable to provincial/territorial & federal elections

## RPV Overview

How it works is that an independent candidate will win a riding automatically if they win the first past the post vote for that riding, however a party-affiliated candidate that gets even more than 50% of the votes is not guaranteed to be elected for that riding (but still probable). Rather, for all ridings where an independent candidate did not get the popular vote, the seats are distributed equivalent to how voters voted for each party. In this manner, a party that got even 1% of all votes and never won a popular vote in any riding would be elected. The ridings they would be elected to are the ridings that had the most support for said party. The one downside is that the couple of ridings with the most competitive elections will results in the smaller parties being voted in, which I feel is a valid tradeoff since the current situation is that your vote was meaningless if the representative of the other party got more votes. With my propose voting system, your vote will matter and appear to have mattered even in hindsight. So the three upsides are that independent MPs are favoured, every vote counts (on a federal basis rather than only getting one candidate past the post), and the democratically elected body is proportional to how voters voted federally.

To incentivize and protect independent candidates, we give independents priority when picking representatives for each riding. If they were included in the [Huntington-Hill](https://en.wikipedia.org/wiki/Huntington-Hill_method) method, even if the district voted more than 50% for the independent candidate, they would no't be allocated any seat whatsoever! That's why I kept the same voting procedures.

One criticism I'll probably see are people still complaining about local presentation. Local representation will only happen if there is enthusiastic support. No candidate should be entitled to represent a riding without 50% of support and a ranked ballot is not guaranteed to lead to federal wide policies voters want. Therefore, the RPV is a valid compromise. I will now dive into the technicalities as well as the practical results if RPV was the technique used in the last election.

## RPV Algorithm

It is simply amazing that computer science can even be applied to politics. I've outlined the algorithm for RPV below. It incorporates many concepts such as FTP, Huntington-Hill (used for electoral college map in the U.S.A.), and

1. Just like how it is presently, each person will vote for a candidate in their riding.
    - Voters voting an independent candidate are allowed to rank their preferences for independent candidates with their final preference optionally being a party-affiliated candidate. This ensures that their vote won't be lost in the next steps.
2. Once all the votes are counted per riding, determine independent candidates that won via the current FPTP method. Eliminate and use the ranking system to determine who the most popular independent candidate is. If they got a higher vote than the party candidates, then they win the riding according to FPTP. Otherwise, eliminate this independent candidate to get the number of votes for each party. Note that party candidates are not elected on a FPTP basis, which is why the party vote count is what is important.
3. Remove the ridings that were won by independent candidates from all available ridings.
4. Use the [Huntington-Hill method](https://en.wikipedia.org/wiki/Huntington-Hill_method) to determine number of seats to allocate to each party (independents are not considered a party).
    - We will use the  [Hare quota](https://en.wikipedia.org/wiki/Hare_quota) to determine whether a party deserves a single seat; The total votes (minus independent votes) divided by the total seats available (after removing independent won seats).
    - Initially allocate one seat to each party that meets this quota and discard all parties and independents that did not meet this quota.
    - Allocate seats to whichever party has the highest seat priority until total seats have been allocated.
    - The seat priority is calculated using <img class=equation-tall src="https://latex.codecogs.com/svg.image?A_n^2=\frac{V^2}{n(n+1)}"> where V is the the number of votes that party received, and n is the number of seats that party has been allocated so far.
5. Assign seats based on highest proportion of votes per riding.
    - Sort parties in **ascending** order based on number of seats allocated.
    - Iterate over the parties in the previous order until all parties have had their seats assigned to a riding.
        - For each party that has unassigned seats, assign a seat to an unelected riding with the highest percentage voting for that party.
6. Use a list or graph of all ridings with their assigned representative to keep track of seat assignment / election results.

## 44th 2021 General Elections FPTP Versus RPV

I actually wrote the first draft of this article in Nov-2021, however to make it publishable, I wanted to show how the 2021 election would be different if RPV was used rather than FPTP.
To do this, I made a Python script that downloaded 2021 election polling data, transformed that data to be useful, implemented the RPV algorithm, and lastly summarized the results for consumption.

### Vote Distribution

Vote distribution for all parties (that got at least one vote) in the 2021 Canadian Election

- There were 338 districts in this election.
- Total number of votes counted was 17,034,224
- Total votes that went to a party is 17,008,619

| Party                                     | Votes        | Vote % |
| ------------------------------------- | ------------- | -----------
| Conservative                        | 5,747,410 | 33.74%
| Liberal                                  | 5,556,629 | 32.62%
| NDP-New Democratic Party | 3,036,329 | 17.82%
| Bloc Québécois                     | 1,301,615 | 7.64%
| People's Party - PPC            | 840,993 | 4.94%
| Green Party                          | 396,988 | 2.33%
| Free Party Canada               | 47,252 | 0.28%
| Maverick Party                      | 35,178 | 0.21%
| _Independents_                         | 25,605 | 0.15%

<details><summary>Parties that got less than 10,000 votes</summary>

| Party                                     | Votes        | Vote % |
| ------------------------------------- | ------------- | -----------
| Christian Heritage Party      | 8,985 | 0.05%
| No Affiliation                        | 6,876 | 0.04%
| Parti Rhinocéros Party       | 6,085 | 0.04%
| Libertarian                         | 4,765 | 0.03%
| Communist                        | 4,700 | 0.03%
| Marxist-Leninist                  | 4,532 | 0.03%
| Pour l'Indépendance du Québec | 2,934 | 0.02%
| Animal Protection Party | 2,546 | 0.01%
| Marijuana Party | 2,031 | 0.01%
| VCP | 1,246 | 0.01%
| Centrist | 648 | 0.00%
| National Citizens Alliance | 476 | 0.00%
| Parti Patriote | 244 | 0.00%
| CFF - Canada's Fourth Front | 105 | 0.00%
| Nationalist | 52 | 0.00%
</details>

### FPTP Results

| Party                                     | Seats | Seats % |
| ------------------------------------- | -------- | ----------- |
| People's Party - PPC            | 0        |  0%      |
| Green Party                          | 2        |  0.59% |
| NDP-New Democratic Party | 25      |  7.40% |
| Bloc Québécois                    | 32       |  9.47% |
| Conservative                         | 119    | 35.21% |
| Liberal                                   | 160    | 47.34% |

### RPV Results

The Hare quota is 50,322.

| Party                                     | Seats | Seats % |
| ------------------------------------- | -------- |----------- |
| Green Party                          | 8       |  2.37% |
| People's Party - PPC            | 17     |  5.03% |
| Bloc Québécois                    | 26      |  7.69%  |
| NDP-New Democratic Party | 61     | 18.05% |
| Liberal                                   | 111   | 32.84% |
| Conservative                         | 115   | 34.02% |

It's clear that under my proposed system, we can get a 99% representative government body where the 1% that went unrepresented voted for parties that got less than ~50,000 votes (Hare Quota).
For the list of ridings that would have a different representative, you can download the CSV of the compiled results [here](https://github.com/elibroftw/representative-proportional-voting/releases/download/2021/districts.csv).

Some notable things is that all elected parties got more seats than proportional because of that 1% that went to very unpopular parties. The liberals lose 49 seats, NDP doubles their seat count, and the PPC ends up getting more than double the seats than what Green would get. This sort of system would force the Liberals, Conservatives, BQ o address the needs of all Canadians rather than just the ones who are grouped up in one riding.

Since this is a in hindsight analysis, numbers for some parties will be under-represented even though they won more seats. For example, it is common for voters to vote Liberals just so that the Conservatives don't win and I know
that some people probably vote Conservative instead of PPC so that the Liberals don't win. Therefore, under RPV, we could expect the bigger parties to lose even more seats to the smaller parties. This logic does extend to the Green party, so we could see Green party getting more seats than the NDP. RPV would do away with strategic voting to the point where it would be ignorant to vote for a party other than the one you actually support. A more proportional system
would also promote bootstrapping of parties as support can be nation wide rather than concentrated in one riding.

### Reproducing The Results

Reproduction is very important. My Python code, the CSV file listing both FPTP and RPV results, and a JSON for further analysis can be found on [GitHub](https://github.com/elibroftw/representative-proportional-voting)

## Conclusion

We want peoples' votes to count so one party edging out the other party by a couple percent should not guarantee a win and does not guarantee a win under RPV. I spent probably over 12 hours on this article so I really hope you enjoyed it and opened your mind up.  I hope this article was clear as I did give it another breath of life today (April 8th 2023). If not, feel free to ask questions. This article was an overview and a demonstration of what RPV could do for democracy in Canada, and maybe even the world. If I was/am ever an MP or MPP, I would propose to use this method for all provincial/territorial and federal elections.

## Extensions

One criticism that I can see for my own method is that independent candidates are given a relatively unfair advantage to win their riding. However, an independent candidate will most likely lack the financial and labour resources
that party-affiliated candidates will have. Our country is considered a democracy even with the FPTP electoral system, so allowing independent candidates to make use of it in a reformed electoral system is really not a valid argument if the majority of Canadians haven't experienced something better than first past the system in the _first_ place, especially when results are more democratic anyways.

The CSV file I provided can be used to draw a colored map as well as note down which parties lost to which parties the most. For example, Conservatives went down 4 seats in total, but if you look at the CSV, half the seats lost were to the PPC and the other half to the NDP. They gained most of these seats back from the Liberals and some from teh Bloc Québécois. Absolutely 0 seats were lost to the Liberals. Another example is that the NDP lost two seats to the Green party and one seat to the PPC. That one seat is the only seat the PPC gained from a party other than the Conservatives.

My hypothesis is that this type of system would force the mainstream parties to invite smaller parties to debates. Otherwise the smaller party voters would simply not watch the debates and vote for the smaller party anyways.
We know that the PPC got votes even with the backdrop of strategic voting, but only under FPTP does 5% round down to 0%. In a proportional system, all parties got more.

There is also the system countries like Norway use, however my main point of my system is to make electoral reform easy, simple, and effective with minimal tradeoffs.

## Tricks

Like with every law and system, there will be people trying to bend it. One such situation I could forsee are candidates running as an independents but supported by a party through advertisements/funding. Elections Canada would be tasked at ensuring such _faltugiri_ (a non-english word, hard to explain its definition, infer what it means) would not be occurring and the party would have their funding for that riding (as in the number votes used to appropriate funds) split equally amongst the other parties in that riding. The so called independent candidate would be barred from running for an election. I'm not sure if its possible, but such a scheme should also result in criminal charges. It is anti-democratic and would be equivalent to treason as you are trying to defraud an entire riding that is part of the federal or provincial/territorial body.
