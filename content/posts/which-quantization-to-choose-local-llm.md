---
title: How to Pick an LLM Quantization?
date: 2024-04-04T19:50:28-04:00
draft: false
tags:
  - ai
  - python
aliases:
  - /posts/how-to-pick-an-llm-quantization/
summary: "Learn how to choose the right LLM quantization for your local setup. This guide explains the importance of model size, bits, RAM, and GPU offloading for faster performance."
---

Generally speaking, the more bits the better and L > M > S. Therefore, when choosing a model, pick the largest model that fits into your RAM. Your GPU can be used to "offload" layers of the model to the GPUand let the CPU handle the rest. Offloading to the GPU's VRAM is important for a faster LLM. The only reason I wrote this blog post is because it takes too long to figure this out from online sources.

When choosing the model size, make sure it's at least 3GB smaller than your RAM size to leave space for other software you are running.
