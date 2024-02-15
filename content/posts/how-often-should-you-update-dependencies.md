---
title: "How Often Should You Update Dependencies?"
date: 2024-02-05T21:57:41-05:00
draft: false
tags: [
  'programming',
  'opinion'
]
---

You should aim to update your dependencies every 3 to 6 months. The major dependencies should be updated iteratively, as in one major version at a time by reading the changelog so that you can migrate any deprecated code to the newer methodology. Project search (Ctrl + Shift + F) is useful for this.

### Iterative Dependency Approach

For each crucial feature dependency (e.g. react-native, some library maintained by a amateur, a feature your software really depends on  &rarr; Read dependency changelog &rarr; update dependency to next version &rarr; compile &rarr; fix compilation bugs &rarr; compile &rarr; integration test &rarr; fix runtime bugs &rarr; REPEAT
