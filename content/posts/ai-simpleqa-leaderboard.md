---
title: "AI SimpleQA Leaderboard"
date: 2025-05-02T18:50:57-04:00
draft: false
tags:
  - ai
---

### Benchmark Descriptions

[SimpleQA](https://openai.com/index/introducing-simpleqa/) is a benchmark to grade the factuality of an LLM. I wrote this post because while writing my upcoming [AI Awesome List](/posts/ai) post, I realized there was no readily available webpage indexed by Google showing a leaderboard for SimpleQA. The goal of this post is that if someone searches "SimpleQA Leaderboard" on Google, this webpage will show up. Over time I will add more benchmarks.

[Linkup](https://www.linkup.so/blog/linkup-establishes-sota-performance-on-simpleqa) had this to say about factuality:

> Our evaluations show that, when it comes to factuality, internet connectivity is more important than model size.

AIME'25 leaderboard: Math

Chatbot Arena leaderboard: A leaderboard based on the results of users blind testing two models and picking the best response

ArenaHard leaderboard: An automated artificial/synthetic benchmark for Chatbot Arena

| Model / Product   | Company   | Tier    | SimpleQA | AIME'25 | ArenaHard | Chatbot Arena |
|----------------------|-----------|----------|----------|---------|-----------|---------------|
| Linkup Web Search        | Linkup | I | 90.10 | N/A | N/A | N/A |
| Exa                                 | Exa | I | 90.04 | N/A | N/A | N/A |
| Perplexity Sonar Pro      | Perplexity | I | 85.80 | N/A | N/A | N/A |
| ChatGPT-4.5                  | OpenAI    | Flagship | 62.50 |         |         | 1398  |
| Gemini-2.5-pro               | Google    | I |  52.90 | 86.70 |           | 1439 |
| Claude-3.7-Sonnet        | Anthropic | I | 50.00 |         | 59.8 | 1292 |
| o3                                  | OpenAI    | I | 49.4 |  88.9  | 85.9  | 1418 |
| Grok 3                           | xAI       | I | 44.60 | 93.3 |           | 1402 |
| o1                                  | OpenAI    | I | 42.60 | 79.20 | 61 | 1350  |
| ChatGPT-4.1                 | OpenAI    | I | 41.60 |         | 50 | 1363 |
| ChatGPT-4o                  | OpenAI    | I | 39.00 | 14.00 |          |  1408 |
| DeepSeek-R1                | DeepSeek  | I | 32.84 |  74.00 |  48 | 1358 |
| Gemini-2.5-flash            | Google    | IV |  29.70   | 78.00  |           | 1393 |
| Claude-3.5-Sonnet        | Anthropic | I | 28.4 |         | 33 |               |
| DeepSeek-V3                | DeepSeek  | I | 24.9 |         |           | 1381 |
| o4-mini                           | OpenAI    | I | 20.20 | 92.70 | 79.1 | 1351  |
| o3-mini                           | OpenAI    | I | 13.80 |  86.5 | 66.1 | 1325 |
| Qwen3-235B-A22B        | Qwen  | I | 11.00 | 81.5    | 95.6 |               |
| Gemma 3 27B               | Google    | II | 10.00 |         |           | 1342 |
| Gemma 2 27B               | Google    | II |  9.20 |         |           | 1220 |
| Qwen3-32B (Dense)      | Qwen  | II | 8.00 | 72.9    | 93.8 |               |
| Qwen3-30B-A3B (MoE) | Qwen | II | 8.00 | 70.9    | 91        |               |
| Qwen3-14B | Qwen | II | - | - | - | - |
| Qwen3-8B | Qwen | II | - | - | - | - |
| Gemma 3 12B               | Google    | II |  6.30 |         |           |               |
| Gemma 3 4B                 | Google    | III |  4.00 |         |           |               |
| Gemma 2 9B                 | Google    | II |  5.30 |         |           |               |
| Phi 4 Reasoning Plus   | Microsoft | II | 3.00 | 78.00 | 79.00 |          |
| Gemma 2 2B                 | Google    | III |  2.80 |         |           |               |
| Gemma 3 1B                 | Google    | III |  2.20 |         |           |               |
| Qwen3 4B                      | Qwen | III | 1.00 | 65.6 | 76.6 |               |

### Definition of Tier

| Tier | Name |
| ------ | ------ |
| I | Flagship |
| II | Consumer hardware |
| III | Edge hardware |
| IV | Speed |

## More Benchmarks

<https://www.swebench.com/#verified>

<https://lastexam.ai/>

## References

<https://openai.com/index/introducing-o3-and-o4-mini/>

<https://gr.inc/OpenAI/SimpleQA/>

<https://qwenlm.github.io/blog/qwen3/>

<https://x.com/nathanhabib1011/status/1917230699582751157/photo/1>

<https://github.com/openai/simple-evals/tree/main>

<https://livecodebench.github.io/leaderboard.html>

<https://deepmind.google/technologies/gemini/flash/>

<https://matharena.ai/?utm_campaign=Data%20Points&utm_source=hs_email&utm_medium=email>

<https://github.com/lmarena/arena-hard-auto?tab=readme-ov-file#leaderboard>

<https://www.vals.ai/benchmarks/aime-2025-03-11>

<https://openai.com/index/introducing-simpleqa/>

<https://huggingface.co/microsoft/phi-4>

<https://blog.google/technology/google-deepmind/gemini-model-thinking-updates-march-2025/>

<https://x.ai/news/grok-3>

<https://ai.google.dev/gemma>
