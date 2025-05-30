---
title: "How Often Should You Update Dependencies?"
date: 2024-02-05T21:57:41-05:00
draft: false
tags:
  - programming
  - opinion
summary: "Argues for weekly dependency updates and outlines an iterative process for updating crucial feature dependencies, including reading changelogs, fixing bugs, and testing."
---

Every time you start working on a project, you should update your dependencies (weekly).

### Iterative Dependency Approach

For each crucial feature dependency (e.g. react-native), some library maintained by an amateur, a feature your software really depends on  &rarr; Read dependency changelog &rarr; update dependency to next version &rarr; compile &rarr; fix compilation bugs &rarr; compile &rarr; integration test &rarr; fix runtime bugs &rarr; REPEAT
