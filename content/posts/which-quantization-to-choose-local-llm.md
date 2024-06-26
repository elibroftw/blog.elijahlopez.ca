---
title: "Which Quantization to Choose for Local LLM?"
date: 2024-04-04T19:50:28-04:00
draft: false
tags:
  - llm
  - ai
  - python
---

Generally speaking, the more bits the better and L > M > S. Therefore, when choosing a model, pick the largest model that fits into your RAM and GPU. The only reason I wrote this blog post is because it takes too long to figure this out from online sources.
