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

> Quantization-Aware Training (QAT), which allows preserving similar quality to bfloat16 while dramatically reducing the memory requirements to load the model.

Generally speaking, the more bits the better and L > M > S. Therefore, when choosing a model, pick the largest model that fits into your RAM. Your GPU can be used to "offload" layers of the model to the GPUand let the CPU handle the rest. Offloading to the GPU's VRAM is important for a faster LLM. The only reason I wrote this blog post is because it takes too long to figure this out from online sources.

When choosing the model size, make sure it's at least 3GB smaller than your RAM size to leave space for other software you are running.

MTP: Multi-Token Prediction, which is speculative decoding, which will output generation by 2x. MTP came out in [2024](https://arxiv.org/abs/2404.19737), but it took almost two years for general adoption.

[QAT](https://www.ibm.com/think/topics/quantization-aware-training): Quantization-Aware Training. QAT simulates low-precision arithmetic during training to allow the model to adapt to quantization noise.

COT: Chain-of-Thought (CoT) reasoning.