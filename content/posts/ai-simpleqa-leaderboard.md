---
title: "AI SimpleQA Leaderboard"
date: 2025-05-02T18:50:57-04:00
draft: false
tags:
  - ai
summary: "Compare AMIodel factuality with the SimpleQA leaderboard. Includes scores for AIME'25 (Math), Chatbot Arena, and ArenaHard benchmarks."
---

### Benchmark Descriptions

[SimpleQA](https://openai.com/index/introducing-simpleqa/) is a benchmark to grade the factuality of an LLM. I wrote this post because while writing my ~~upcoming~~ [AI Awesome List](/posts/ai), I realized there was no readily available webpage indexed by Google showing a leaderboard for SimpleQA.

It's now September, and I am demanding a better benchmark. Personally I think asking AI research based questions with shorter answers is a good start. For example, when asking AI about best housing policies, it likes to shotgun answer you instead of succinctly stating that the best housing policies are upzoning and speeding up permitting. Of course, I disagree and personally I believe restoring foreign capital and cutting taxes such as HST/GST for all primary home buyers, and cutting developer charges are the most effective policies to implement today.

[Linkup](https://www.linkup.so/blog/linkup-establishes-sota-performance-on-simpleqa) had this to say about factuality:

> Our evaluations show that, when it comes to factuality, internet connectivity is more important than model size.

AIME'25 leaderboard: Math

I've removed Chatbot Arena and ArenaHard as DeepSeek R1 05/28 is really good at following instructions and sets the expectations fairly high. Instead I've added Humanity's Last Exam.

Before reading this table, please take note of OpenAI's comment regarding that the grading rubric itself cannot handle thorough exploration. My takeaway is that scores above 90% cannot be compared with each other.

> ChatGPT agent scores lower on SimpleQA accuracy than o3 did. Manual investigation revealed cases where ChatGPT agent’s more thorough approach to research surfaced potential flaws in our grading rubric that were not apparent to o3, such as instances in which Wikipedia may contain inaccurate information. We are considering updates to this evaluation.

| Model / Product   | Company   | Tier    | SimpleQA | AIME'25 | Humanity's Last Exam  |
|----------------------|-----------|----------|----------|---------|--------|
| DeepSeek-V3.2-Exp w/tool [^1] | DeepSeek | OI | 97.1% | - | Sep-2025 |
| DeepSeek-V3.1-Terminus w/tool[^1] | DeepSeek | OI | 96.8% | - | Sep-2025 |
| [Liner Pro Reasoning](https://getliner.com/) | [Liner](https://liner.com/) | PI | [95.30](https://liner.com/learn/deep-research-comparison) | N/A | N/A |
| [Exa Research Pro](https://exa.ai/)                                 | Exa | PI | [94.9%](https://exa.ai/blog/introducing-exa-research) | N/A | N/A |
| Perplexity Deep Research | [Perplexity](https://www.perplexity.ai/) | PI | 93.90 | N/A | N/A |
| Liner Pro | [Liner](https://liner.com/) | PI | [93.70](https://liner.com/learn/liner-accurate-ai-search) | N/A | N/A |
| [Brave Multiple Searches](https://brave.com/search/api/) | Brave | PI | [93.25](https://brave.com/blog/ai-grounding/) | N/A | N/A |
| [Exa Research](https://exa.ai/)                                 | Exa | PI | [91.6%](https://exa.ai/blog/introducing-exa-research) | N/A | N/A |
| [ChatGPT Agent System Card](https://openai.com/index/chatgpt-agent-system-card/) | 91.4% | OpenAI | PI | N/A | N/A |
| [o3 with browsing](https://openai.com/index/chatgpt-agent-system-card/) | 95.4% (read note) | OpenAI | PI | N/A | N/A |
| [Brave Single Search](https://brave.com/search/api/) | Brave Search | PI | [90.78](https://brave.com/blog/ai-grounding/) | N/A | N/A |
| Perplexity Pro      | [Perplexity](https://www.perplexity.ai/) | PI | 90.60 | N/A | N/A |
| [Brave Single Search + Reasoning](https://brave.com/search/api/) | Brave Search | PI | [90.5](https://brave.com/blog/ai-grounding/) | N/A | N/A |
| [Linkup Web Search](https://www.linkup.so/)        | Linkup | PI | 90.10 | N/A | N/A |
| [ODS-v2+DeepSeek-R1](https://arxiv.org/abs/2503.20201) | Open Deep Search | MI | 88.3% | N/A | N/A |
| Perplexity Sonar Pro      | Perplexity | PI | 85.80 | N/A | N/A |
| Claude-4-Opus              | Anthropic | MI | - | 75.5% | - |
| ChatGPT-4.5                 | OpenAI    | MI | 62.50 | - | - |
| [ChatGPT-5-thinking](https://openai.com/index/gpt-5-system-card/)      | OpenAI    | MI | 55% | - | 50 |
| Gemini-2.5-Pro              | Google    | MI |  54.00 | 86.70 | - |
| Claude-3.7-Sonnet        | Anthropic | MI | 50.00 | - | 59.8 |
| o3                                  | OpenAI    | MI | 49.4 |  88.9  | 85.9  |
| Grok 3                           | xAI       | MI | 44.60 | 93.3 | - |
| o1                                  | OpenAI    | MI | 42.60 | 79.20 | 61 |
| ChatGPT-4.1                 | OpenAI    | MI | 41.60 | - | 50 |
| ChatGPT-4o                  | OpenAI    | MI | 39.00 | 14.00 | - |
| Kimi K2                          | Moonshot AI | MI | 31.0 | - | - |
| DeepSeek-R1 (01/20)   | DeepSeek  | MI | 30.10 |  70.00 |  8.5 |
| DeepSeek-R1 (05/28)    | DeepSeek  | MI | 27.80 |  87.50 | 17.7 |
| DeepSeek-R1-0528-Qwen3-8B | DeepSeek  | MI | - |  76.3 | - |
| Gemini-2.5-Flash            | Google    | IV |  29.90 | 78.00 | - |
| Claude-3.5-Sonnet        | Anthropic | MI | 28.4 | - | 33 |
| DeepSeek-V3                | DeepSeek  | MI | 24.9 | - | - |
| o4-mini                           | OpenAI    | MI | 20.20 | 92.70 | 79.1 |
| o3-mini                           | OpenAI    | MI | 13.80 |  86.5 | 66.1 |
| Qwen3-235B-A22B        | Qwen  | MI | 15.00 | 81.5    | 95.6 |
| Gemma 3 27B               | Google    | II | 10.00 | - | - |
| Gemma 2 27B               | Google    | II |  9.20 | - | - |
| Qwen3-32B (Dense)      | Qwen  | II | 8.00 | 72.9 | - |
| Qwen3-30B-A3B (MoE) | Qwen | II | 8.00 | 70.9 | - |
| EXAONE-Deep-32B | LG | II | - | 80 | - |
| Qwen3-14B | Qwen | II | - | - | - |
| EXAONE-Deep-7.8B | LG | II | - | 76.7 | - |
| Qwen3-8B | Qwen | II | - | - | - |
| EXAONE-Deep-2.4B | LG | II | - | 73.3 | - |
| Apriel-Nemotron-15B-Thinker | NVIDIA / SERVICE NOW | II | - | 60.0 | - |
| Gemma 3 12B               | Google    | II |  6.30 | - | - |
| Gemma 3n                    | Google    | II | - | - | - |
| Gemma 3 4B                 | Google    | III |  4.00 | - | - |
| Gemma 2 9B                 | Google    | II |  5.30 | - | - |
| Phi 4 Reasoning Plus   | Microsoft | II | 3.00 | 78.00 | - |
| Gemma 2 2B                 | Google    | III |  2.80 | - | - |
| Gemma 3 1B                 | Google    | III |  2.20 | - | - |
| Qwen3 4B                      | Qwen | III | 1.00 | 65.6 | - |

### Notes

Missing Models

- Mistral Medium 3
- DeepSeek V3 03/24
- Google Gemini 2.5 Pro May update
- llama 4 models (e.g. Llama 4 Behemoth)

For Claude 4, there was no score available for SimpleQA, however someone tested Opus on a subset and it scored the highest.

### Definition of Tier

| Tier | Name |
| ------ | ------ |
| MI | Flagship Model |
| PI | Flagship Product |
| OI | Open-Weights |
| II | Consumer hardware |
| III | Edge hardware |
| IV | Speed |

## More Benchmarks

<https://www.swebench.com/#verified>

<https://lastexam.ai/>

## References

<https://x.com/scaling01/status/1926017718286782643/photo/1>

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

- [Gemma](https://ai.google.dev/gemma)
- [Llama 4 Benchmark and Model Comparison Report](https://github.com/kgruiz/Llama-4-Comps?tab=readme-ov-file)
- [Apriel-Nemotron-15b-Thinker ](https://huggingface.co/ServiceNow-AI/Apriel-Nemotron-15b-Thinker#evaluation)
- [LG EXAONE Deep](https://arxiv.org/pdf/2503.12524)

<https://brave.com/blog/ai-grounding/>

[^1]: [Introducing DeepSeek-V3.2-Exp](https://api-docs.deepseek.com/news/news250929)
