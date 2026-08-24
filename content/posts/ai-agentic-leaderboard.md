---
title: "AI Agentic Leaderboard"
date: 2026-07-21T14:52:36-04:00
draft: true
tags:
  - ai
summary: "A leaderboard for which Language Models perform best as agents, with markers on if they are open-weight or can be run locally."
---

[Claw Eval](https://github.com/claw-eval/claw-eval) will be used, however their [leaderboard](https://claw-eval.github.io/) isn't updated as often as it should be. For example, as of 2026/7/21, GLM 5.2 was released 49 days ago, and yet it isn't on the leaderboard. Neither are Fable 5 nor Chat GPT 5.6 on the leaderboard.

| Model | Claw Eval (%) | Labels |
| ---------------------- | ----------- | ---------- |
| Anthropic Claude Fable 5 | - | P |
| Anthropic Claude Opus 4.6 | 70.4 | P |
| Xiaomi MiMo V2.5 Pro | 62.3 | O |
| Meta Muse Spark 1.1 | - | O |
| Meta Muse Spark | 63.8 | O |
| Moonshot Kimi K 3 | - | O |
| Moonshot Kimi K 2.6 | 62.3 | O |
| Z GLM 5.2 | - | O |
| Z GLM 5.1 | 62.3 | O |
| OpenAI GPT 5.6 Sol | - | P |
| OpenAI GPT 5.4 | 60.3 | P |
| Qwen 3.8 | - | P |
| Qwen 3.7 Plus | - | P |
| Qwen 3.6 Plus | 58.8 | P |
| Google DeepMind Gemini 3.1 Pro | 57.8 | P |
| Nanbeige-4.2-3B | 52.2 | OL |
| Thinking Machines Inkling | - | O |

P = Proprietary, O = Open Weight, OL = Open Weight and Local Friendly

No clue where Gemma 4 stands either.