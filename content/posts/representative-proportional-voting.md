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

To solve this we still keep the same voting methods. The only change is which MP actually get elected. Once all the votes are counted, first determine independent MPs using first past the post. Remove these seats from the total seats. Then use Huntington–Hill method to determine number of seats for each party (independents are not one party). Primary allocation is done using any party with more than hare quota.

To protect independents we give independents priority when picking MP's for each riding.

After seats are allocated,

From smallest seats party to largest:
Find riding from unelected riding's with the highest percentage voting for that party (use sorting algorithm). Elect the party MP for that riding. Remove riding from unelected riding's. Repeat.
