---
title: "Representative Proportional Voting"
date: 2021-11-19T11:58:17-04:00
tags: [
  "thoughts",
  "canada",
]
---

The one argument against common proportional voting systems is "local represenation matters."
Party-list proportional representation is the formal term for it but it does not care about local representations.

I have come up with a method to solve this supposed paradox.

We still keep the same voting methods. That is each person will still vote for a representative for their district, except what changes is how that vote is used. As in which MP actually get elected. Once all the votes are counted, first determine independent MPs using first past the post. Remove these seats from the total seats. Then use [Huntington-Hill](https://en.wikipedia.org/wiki/Huntington-Hill_method) method to determine number of seats for each party (independents are not one party). The primary (or first) seat allocation is done using any party with more than their quota.

To incentivize and protect indepedent MPs, we give independents priority when picking MP's for each riding. If they were included in the [Huntington-Hill](https://en.wikipedia.org/wiki/Huntington-Hill_method) method, even if the district voted 50+ % for the independent MP, they wouldn't
be allocated any seat whatsoever! That is the entire reason why I kept the same voting procedures.

After seats are allocated,

From smallest seats party to largest:
Find riding from unelected riding's with the highest percentage voting for that party (use sorting algorithm). Elect the party MP for that riding. Remove riding from unelected riding's. Repeat.

We want peoples' votes to count so one party edging out the other party by a couple percent does not guarantee a win. Say a new party was founded and in its most popular riding the candidate loses by a couple percents.
If the total votes for the party exceeded 100,000 (assuming one seat represents 100,000 Canadians) on a federal level, that seat will be theirs.

I hope this was clear, but if not feel free to ask questions. This is an overview and not an implementation. If I was ever an MP, I would propose to use this method for all MP and MPP elections.

## Tricks

One can say people can claim to be independent but be supported by a party through the media. Elections Canada will be tasked at ensuring such _faltugiri_ will not occur and the party will have their funding for that riding (votes used to appropriate funds) split equally amongst the other parties in that riding. The so called independent MP or candidate will be barred from running for election. I'm not sure if its possible, but this should also result in criminal charges. It is anti-democratic and should be equivalent to Treason (commiting fraud on an entire country).
