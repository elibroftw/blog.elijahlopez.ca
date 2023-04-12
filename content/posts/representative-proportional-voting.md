---
title: "Representative Proportional Voting"
date: 2021-11-19T11:58:17-04:00
tags: [
  "canada",
]
---

This article describes and demonstrates a novel solution for electoral reform that is practical to implement and is more effective at holding democratic elections where every vote cast contributes to forming a governing body. Below is the summary results of the 2021 Canadian general election compared to if the Representative Proportional Voting (RPV) electoral system described in this article was used. The electoral system currently used in Canada is [First Past the Post (FPTP)](https://www.elections.ca/content.aspx?section=res&dir=ces&document=part1&lang=e#p13).

|Party|FPTP Seats|FPTP Seats %|RPV Seats|RPV Seats %|Vote %|
|:-|:-|:-|:-|:-|:-|
|People's Party - PPC|0|0%|17 +|5.03%|4.94%|
|Green Party|2|0.59%|8 +|2.37%|2.33%|
|NDP-New Democratic Party|25|7.40%|61+|18.05%|17.82%|
|Bloc Québécois|32|9.47%|26 -|7.69%|7.64%|
|Conservative|119|35.21%|115 **-**|34.02%|33.74%|
|Liberal|160|47.34%|111 -|32.84%|32.62%|

I've included this table at the top for to highlight how ineffective the current electoral system is at giving voters a voice. As you read on, you'll see that unlike First Past the Post, Representative Proportional Voting results in a 99% representation of voters and gives 100% of voters a voice.

{{< toc >}}

## Introduction

The 2021 Canadian general elections had just passed and I was curious as to how proportional the election results were. I noticed that the Liberals were over-represented. I then began a thought experiment on what an ideal democratic electoral process would look like for Canadian parliamentary elections. When the Liberal party led by Justin Trudeau came into power in 2015, one of their promises was electoral reform of the  first-past-the-post system currently in use. However, as the last elections have shown us, the Liberal party is substantially benefitting from first-past-the-post and it is not strategic for them to follow through on their first campaign promise.

### Party List Proportional Representation

A lot of Canadians demand electoral reform without suggestions as to how, while others critique common proportional voting system (e.g. party-list) for lacking "local representation." There are also others asserting or even bringing up ranked ballots as the holy grail for democracy, but I digress.

### Ranked Ballots

Ranked ballots work great when it's just for one localized governance, such as mayor or a university student association. If it were applied to federal elections we would still not have proportional results. Rather, we would see an amalgamation of parties most closely aligned (vote A if not vote B). Ranked voting is strategic voting and minority voters would still be **unrepresented**.

## RPV Overview

As the title of this article states, I will outline a novel electoral system called the Representative Proportional Voting (RPV) which adapts the existing First Past the Post in a way that rewards popular independent representatives and ensures that every vote counts and is important. This new technique is applicable to provincial/territorial & federal elections

How it works is that an independent candidate will win a riding automatically if they win the First Past the Post vote for that riding, however a party-affiliated candidate that gets even more than 50% of the votes is not guaranteed to be elected for that riding (but still probable). Rather, for all ridings where an independent candidate did not get the popular vote, the seats are pooled and distributed proportional to how voters voted for each party. In this manner, a party that got even 1% of all votes and never won a popular vote in any riding would be elected. The ridings they would be elected to are the ridings that had the most support for said party.

One possible criticism is that there will be a couple of ridings with competitive results where the smaller parties win.  This is a valid tradeoff since the current situation is that your vote would be meaningless if the representative of the other party got even one more vote than the party-affiliated representative you voted for. With my proposed RPV, all votes will matter even in hindsight. So the upsides are that: independent representatives are favoured, one of the running candidates will win the riding, every vote counts towards the governing body rather than only for a singular riding, and the democratically elected body is proportional to how voters voted.

To incentivize and protect independent candidates, we give independents priority when picking representatives for each riding. If they were included in the [Huntington-Hill](https://en.wikipedia.org/wiki/Huntington-Hill_method) method, even if they won FPTP, it's still possible a seat would not be allocated to them since party-affiliated candidates would have. This is why I kept the same voting procedures / logistics.

I'll probably hear people complaining about a non-FPTP candidate winning. No candidate should be entitled to represent a riding without 50% of support and a ranked ballot is not guaranteed to reflect the federal wide policies voters want. Therefore, RPV is a valid Canadian-centred compromise. I will now dive into the technicalities as well as the practical results if RPV was the system used in the last election.

## RPV Algorithm

It is simply amazing that computer science can even be applied to politics. I've outlined the algorithm for RPV below. It incorporates many concepts such as FPTP, Huntington-Hill (fun fact is that it is used for the electoral college points in the U.S.A.), Hare Quota, and even ranked ballots (for niche situations).

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

I wrote the first draft of this article in Nov-2021, however I wanted to show how the 2021 election would be different if RPV was used rather than FPTP before I shared RPV to everyone.

Methodology: I wrote Python code that downloaded 2021 election polling data, transformed that data to be useful, implemented the RPV algorithm, supplied data to the algorithm, and lastly summarized the results for consumption.

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

The Hare quota is 50,322. There were 87 seat changes from the FPTP results.

| Party                                     | Seats | Seats % |
| ------------------------------------- | -------- |----------- |
| Green Party                          | 8       |  2.37% |
| People's Party - PPC            | 17     |  5.03% |
| Bloc Québécois                    | 26      |  7.69%  |
| NDP-New Democratic Party | 61     | 18.05% |
| Liberal                                   | 111   | 32.84% |
| Conservative                         | 115   | 34.02% |

It's clear that under RPV, we can get a 99% representative government body where the 1% that went unrepresented voted for parties that got less than ~50,000 votes (Hare Quota).
For the list of ridings that would have a different representative, you can download [a CSV of the compiled results](https://github.com/elibroftw/representative-proportional-voting/releases/download/2021/districts.csv).

Some notable points are that all elected parties would have more seats than the proportional vote because 1% of votes went to very unpopular parties. The liberals lose 49 seats, NDP doubles their seat count, and the PPC ends up getting more than double the seats than what Green would get. This sort of system would force all parties to reach out to every voter even in districts that are considered wins.

Since this is a post-election analysis, numbers for some parties will be under-represented even though they won more seats. For example, it is common for voters to vote Liberals just so that the Conservatives don't win and it's possible some people voted Conservative instead of PPC so that the Liberals don't win. Therefore, under RPV, we could reasonably expect bigger parties to lose even more seats to smaller parties. This logic does extend to parties on the same side of the spectrum such as the Green party. As seen in the CSV provided, we could see Green party getting seats that would have been NDP under FPTP.

RPV would do away with strategic voting to the point where it would be ignorant to vote for a party other than the one you genuinely support. A greater proportional system
would also promote bootstrapping of parties as support only needs to be nation wide to win a seat rather than concentrated in one riding.

Under the RPV system, 99% of voters ended up represented. The votes of the 1%, although divided, do matter in aggregate. For example, the Free Party had just under the threshold to get a seat. Every vote really does matter under RPV compared to FPTP, where voting might have seemed like a waste of time in hindsight. Only under an RPV system would I ever support a policy that forced citizens to check into a polling station to vote or explicitly abstain from voting. There would be almost no subjective reasons to avoid voting under RPV as it would be in direct opposition to your interests.

### Reproducing The Results

Reproduction is very important. My Python code, the CSV file listing both FPTP and RPV results, and a JSON for further analysis can be found on [GitHub](https://github.com/elibroftw/representative-proportional-voting).

## Conclusion

We want to give every voter a voice so one party edging out the other party by a couple percent is unreasonable to guarantee a win and does not guarantee a win under RPV. I hope you enjoyed this article and that it opened your mind, and feel free to ask questions. This article was an overview and a demonstration of what RPV could do for democracy in Canada, and maybe even the world. If I was/am ever an MP or MPP, I would propose to use this method for all provincial/territorial and federal elections.

## Extensions

One criticism that I can see for my own method is that independent candidates are given a relatively unfair advantage to win their riding. However, an independent candidate will most likely lack the financial + labour + social resources
that party-affiliated candidates will have. Our country is considered a democracy even with the FPTP electoral system, so allowing independent candidates to make use of it in a reformed electoral system is really not a good argument especially when results are more democratic anyways. The majority of Canadians have not experienced something better than First Past the Post in the _first_ place.

The CSV file provided can be used to draw a colored map of each riding as well as to summarize which parties traded seats. For example, Conservatives went down 4 seats in total, but if you look at the CSV, half the seats lost were to the PPC and the other half to the NDP. They gained most of these seats back from the Liberals and some from the Bloc Québécois. Zero seats were lost to the Liberals. Another example is that the NDP lost two seats to the Green party and one seat to the PPC. That one seat is the only seat the PPC gained from a party other than the Conservatives.

My hypothesis is that this type of system would force the mainstream parties to invite smaller parties to debates. Otherwise the smaller party voters would simply not watch the debates and vote for the smaller party anyways.
We know that the PPC got votes even with the backdrop of strategic voting, but only under FPTP does 5% round down to 0%. In a proportional system, all parties had more seats proportional than voters' choices.

There is also a system countries like Norway use, however the main point is to make electoral reform easy, simple, and effective with minimal tradeoffs.

## Electoral Misconduct

Like with every law and system, there will be people trying to bend it. One such situation I could forsee far into the future are candidates running as an independents but supported by a party through advertisements/funding. Elections Canada would be tasked at ensuring such ~~_faltugiri_~~ horsing around would  be met with major fines.
