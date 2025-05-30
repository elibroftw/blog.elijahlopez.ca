---
title: "AI Coding Leaderboard"
date: 2025-05-05T15:33:20-04:00
draft: false
tags:
  - ai
summary: "Explore a leaderboard of AI models ranked by coding benchmarks like SWE-bench and Codeforces. Discusses challenges and limitations of existing benchmarks."
---

- [SWE-bench verified](https://openai.com/index/introducing-swe-bench-verified/). A subset of 500 tasks from the full 2000 which have been verified by humans as solvable. This is the defacto way to evaluate AI models as almost almost all models will report their scores for this benchmark. The unofficial [leaderboard](https://www.swebench.com/#verified) includes SWE copilot tool. The problem is that it doesn't include self-reported results unlike my leaderboard.
- [Codeforces](https://codeforces.com/): the elo represents how good the AI model is at competitive programming tasks. There is no leaderboard since most AI models will self-report or benchmark other models
- [Aider LLM](https://aider.chat/docs/leaderboards/): the benchmark says it benchmarks editing, however it ranks Claude-3.7 very highly which from personal experience reduces productivity by 2x due to it constantly going out of scope and editing other places in the file other than the feature I wanted to add.
- The problem with EvalPlus is that it doesn't include bleeding edge models, it's basically almost solved, and not many new models even report their scores anymore.
- I don't like LiveCodeBench because it's not useful for comparing different models released at different times due to 1) every-updating problem set 2) not continuously testing all frontier models. If a benchmark score has an expiry date, then referencing it is really bad for a leaderboard. It's good for relative performance in papers however then you have to read the fine print to ensure the authors retested the models they compared their new model against. See how complicated that is? Then you'd have to compile your own leaderboard because can you really trust others to do it right? No you can't!

### Leaderboard

| Model / Product   | Company   | Tier | SWE-bench verified | Codeforces | EvalPlus |
|----------------------|-----------|----------|----------|----------|-------------|
| o3 | OpenAI | I | 69.0% | 2706 | - |
| Claude 4 Sonnet | Anthropic | I | 72.7% | - | - |
| Claude 4 Opus | Anthropic | I | 72.5% | - | - |
| o4-mini | OpenAI | I | 68.1% | 2719 | - |
| Gemini 2.5 Pro | Google | I | 63.8% | 2001 | - |
| Claude 3.7 Sonnet | Anthropic | I | 62.3% | - | - |
| Qwen3-235B-A22B | Qwen | I | - | 2056 | - |
| Grok 3 | xAI | II | - | - | - |
| o3-mini | OpenAI | I | 61.0% | 2036 | - |
| DeepSeek R1 | ChatStream | I | 49.2% | 2029 | - |
| DeepSeek V3 (03/24) | ChatStream | I | - | - | - |
| Mistral Medium 3 | Mistarl | I | - | - | - |
| ChatGPT 4.1 | OpenAI | I | 55% | - | - |
| o1 | OpenAI | I | 48.9% | 1891 | - |
| Claude 3.5 Sonnet | Anthropic | I | 49% | - | 81.7 |
| Qwen3-32B | Qwen | II | - | 1977 | - |
| Qwen3-30B-A3B | Qwen | II | - | 1974 | - |
| Qwen3-14B | Qwen | II | - | - | - |
| Qwen3-8B | Qwen | II | - | - | - |
| ~~DeepSeek-R1-Distill-70B~~ | DeepSeek | III | - | 1633 | - |
| Phi 4 reasoning (14B) | Microsoft | II | - | 1736 | - |
| Phi 4 reasoning plus | Microsoft |  II | - | 1723 | - |
| Qwen3-4B | Qwen | III | - | 1671 | - |
| Gemma3-27B-IT | Google | II | - | 1063 | - |
| DeepSeek V3 (12/24) | ChatStream | I | - | - | - |
| ~~o1-preview~~ | OpenAI | I | 40% | 1258 | 89 |
| ChatGPT 4.5 | OpenAI | I | 38.0% | - | - |
| ChatGPT 4o | OpenAI | I | 33% | 900 | 87.2 |
| o1-mini | OpenAI | I | 30% | 1650 | 89 |

Explaining Synthetic Rankings of models with missing scores.

- According to Mistral, Mistral Medium 3 performs just below Claude 3.7 and ranks DeepSeek V3 (03/24) above Claude 3.7 according to their LiveCodeBench benchmarking. However Until I see an updated SWE-bench verified on DeepSeek R1, and 03/24 DeepSeek V3, DeepSeek V3 will be placed underneath DeepSeek R1, and Mistral Medium 3 will be placed below DeepSeek V3
- Qwen3-235B-A22B and Grok 3 are only placed so high due to outperforming o3-mini and DeepSeek R1 at the LiveCodeBench. Surprisingly, Gemini 2.5 Pro has the highest LiveCodeBench score according to Qwen's blog. Therefore, it makes sense to ignore the CodeForces when computing the synthetic ranking for Qwen3-235B-A22B and Grok 3. Reasoning models are also worse for productivity because they take longer to respond.

### Definition of Tier

| Tier | Name |
| ------ | ------ |
| I | Flagship |
| II | Consumer hardware |
| III | Edge hardware |
| IV | Speed |

### Notes

- Google Gemini 2.5 Pro May update is missing from the leaderboard
- DeepSeek V3 was [updated](https://api-docs.deepseek.com/news/news250325) so its scores are probably outdated (i.e. imprecise) but not inaccurate in terms of the rankings.
- [Augment SWE-bench Verified Agent](https://github.com/augmentcode/augment-swebench-agent) scored 68.1%. The problem is that they require you to install an extension which will upload code by default on the community tier. You can do a free trial but for my purposes, I'm restricted to open-router, where I have the option to not use models that will train on my inputs. I also like Cline because it doesn't auto-read my codebase
- The codeforces scores change depending on when they are recorded. This is the case for DeepSeek R1, which got a bump of ~150. I did this to ensure that Qwen3 models that don't contain a SWE-bench verified score are not ranked above DeepSeek R1. I also removed Claude 3.5 Sonnet's Codeforces score because there was apparently a (new) model released for it which has clearly not been benchmarked by the new models. It's a bit weird that the new Qwen release does not benchmark claude 3.7.
- I'm disappointed in the Grok team at xAI for failing to release benchmarks that can be compared against future frontier models (Gemini 2.5 Pro was released in March 2025, o4-mini was released in April 2025, and Qwen3 in April 2025). Their benchmark only proves that Grok 3 Beta and Grok 3 mini Beta (THINK) outperform o3-mini. They only really used LiveCodeBench which like I said before, is not a good way to do comparison across time. On LiveCodeBench, Grok 3 Beta scored higher than o3-mini and Deepseek-R1, but nothing really to compare against Gemini 2.5 Pro, which is the frontier model that got released after Grok 3. Even when Gemini 2.5 Pro was released, Grok 3 Beta's SWE-bench verified score was and is still `-`. Amongst all the models Gemini 2.5 Pro compared against, Grok 3 Beta was the one with the most missing benchmarks (6). And that's with the Gemini team excluding Claude 3.7's [estimated SimpleQA score](https://gr.inc/OpenAI/SimpleQA/) of ~50.

### Interpreting the Leaderboard

2025-05-05

Models that are prohibitively expensive: o3 (high), claude 3.7 + thinking.

In my opinion, given that Claude 3.7 sucks at following simple instructions and behaves like an intern when it modifies code it was told not to edit, the models I recommend as of comes down to:

- o3 (too expensive?)
- o4-mini
- gemini-2.5-pro-preview

## Conclusions

Why can't I get paid to do this? If I was paid money, I would HAPPILY run benchmarks on all frontier models and maintain the leaderboards for all the necessary models. Hell I would even make a fancy UI and everything instead of just a static markdown table that can't be sorted.

1. EvalPlus is deprecated; read more in the coding leaderboard
2. LCB scores are static and the depreciation mechanism makes it very difficult to compare a model that was just released to a model realeased a few months ago. For example, look at Grok 3. They exclusively use this benchmark, even though there's a 99.99% chance that Grok 3's future LCB score would be lower. This is exhibited well in Qwen's blog which showed Gemini 2.5 Pro absolutely crushing LCB. The biggest issues for LCB is that if you have a restraint like "I only want to run open-source models less than 20B in size", you will definitely not be able to benefit from LCB's own published leaderboards.
3. xAI is releasing a suspicuiously low amount of benchmark scores. Not only that, but the xAI team has taken the approach that we all have patience. Their LCB score is useless to real world scenarios once you realize not only did it have to think to achieve them, gemini 2.5 pro beat it anyways. Not to mention that o4-mini and Gemini 2.5 Pro Preview were released on openrouter 7-8 days after grok 3 BETA was released on openrouter.
4. Essentially, the short-list of companies putting in the work to drive innovation: OpenAI, Google Deepmind, Claude, Qwen, DeepSeek;
5. Qwen3 30B is a great model and has "deprecated" DeepSeek R1 Distill 70B

## References

DeepSeek R1 claims 96.3th percentile which is [1989, 2095] However OpenAI claims a score of 1891. Since DeepSeek reported that o1 has a higher codeforces percentile, we can assume that DeepSeek R1's score should be strictly less than o1's codeforces score, which is 1890 at best.

DeepSeek V3 claims 51.6th percentile and most recently 58.7th percentile. Given that R1 is below that percentile, I've used the lowest 51th percentile (assuming that the median barely moved up).

<https://pastebin.com/raw/ik3eQRHJ>

<https://openai.com/index/openai-o1-mini-advancing-cost-efficient-reasoning/>

<https://openai.com/index/introducing-o3-and-o4-mini/>

<https://api-docs.deepseek.com/news/news250120>

<https://blog.google/technology/google-deepmind/gemini-model-thinking-updates-march-2025/#gemini-2-5-pro>

<https://openai.com/index/introducing-gpt-4-5/>

<https://api-docs.deepseek.com/news/news1226>

<https://openai.com/index/gpt-4-1/>

<https://www.anthropic.com/engineering/swe-bench-sonnet>

<https://www.anthropic.com/claude/sonnet>

<https://www.anthropic.com/news/claude-3-7-sonnet>

<https://qwenlm.github.io/blog/qwen3/>

<https://x.ai/news/grok-3>

<https://mistral.ai/news/mistral-medium-3>
