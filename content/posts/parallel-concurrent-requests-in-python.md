---
title: "Parallel Concurrent Requests in Python"
date: 2021-02-24T22:42:39-05:00
draft: false
tags:
  - tutorial
  - programming
  - python
---

You’d think that the fastest way to make parallel network requests would be to use asyncio, but it’s actually `concurrent.futures.ThreadPoolExecutor`.
I’ve known ThreadPools before as I worked with them in Java 6+ months ago, but I couldn’t find something similar in Python until yesterday.
There is also a `ProcessPoolExecutor`, but I’d only suggest you use that for CPU-bound tasks.
ThreadPoolExecutor is better since requests are network bound (and also because I encountered a jumbled error when I tried to use `ProcessPoolExecutor`.
Here is a quick proof of concept using `ThreadPoolExecutor`.

{{< gist elibroftw fc61f40da65ad3178ea03c768c86a932 >}}

I hope that the comments in the code above were enough but if not, please let me know.
