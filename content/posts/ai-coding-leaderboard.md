---
title: "AI Coding Leaderboard"
date: 2025-05-05T15:33:20-04:00
draft: false
tags:
  - ai
summary: "Explore a leaderboard of AI models ranked by coding benchmarks like SWE-bench and Codeforces. Discusses challenges and limitations of existing benchmarks."
---

DEPRECATED: [Aider Polyglot](https://aider.chat/docs/leaderboards/) is multi-lingual compared to SWE-bench verified and that does not require me to make use of my own aggregated leaderboard. I will still try my best to maintain this post, but just letting you know I suggest using Aider Polyglot going forward for which model to use for pair programming.

- [Aider polyglot](https://aider.chat/2024/12/21/polyglot.html#the-polyglot-benchmark): Based on the 225 most difficult [Exercism](https://exercism.org/) coding problems in the following languages: C++, Go, Java, JavaScript, Python and Rust. See [Aider polyglot coding leaderboard](https://aider.chat/docs/leaderboards/). The problem I see is that models can just train on the solutions and game this leaderboard versus LiveCodeBench which is free of contaminations.
- [SWE-bench verified](https://openai.com/index/introducing-swe-bench-verified/) (August 13, 2024). A subset of 500 Python-exclusive tasks from the full 2000 which have been verified by humans as solvable. This is the defacto way to evaluate AI models as almost almost all models will report their scores for this benchmark. The unofficial [leaderboard](https://www.swebench.com/#verified) includes SWE copilot tool. The problem is that it doesn't include self-reported results unlike my leaderboard.
- [Codeforces](https://codeforces.com/): the elo represents how good the AI model is at competitive programming tasks. There is no leaderboard since most AI models will self-report or benchmark other models
- The problem with EvalPlus is that it doesn't include bleeding edge models, it's basically almost solved, and not many new models even report their scores anymore.
- I don't like LiveCodeBench because it's not useful for comparing different models released at different times due to (1) every-updating problem set (2) not continuously testing all frontier models. If a benchmark score has an expiry date, then referencing it is really bad for a leaderboard. It's good for relative performance in papers however then you have to read the fine print to ensure the authors retested the models they compared their new model against. See how complicated that is? Then you'd have to compile your own leaderboard because can you really trust others to do it right? No you can't! I may include some sort of LiveCodeBench relative ranking in the future.

Future: Replace AIder Polyglot with SWE-bench Multilingual

Ideally, the best programming tool would be implemented as follows, given the release of grok-1-fast:

An Architecture <-> Programmer workflow where an agent is in charge of responding to questions that the coder agent has. The thinker will be the one to plan out the project and break it into chunks for the programer to implement.

### Leaderboard

NOTE: Google Gemini 2.5 Pro **May update** significantly improved its web app development capabilities. Scores are unknown.

| Model / Product   | Company   | Tier | Aider Polyglot | SWE-bench verified | Codeforces | Date Available |
|----------------------|-----------|----------|----------|----------|--------------|-----------------|
| Grok 4 Fast[^grok4fast] | xAI | PI | - |- | - | Sep-2025 |
| GPT-5-Codex[^codexUpdates] | OpenAI | PI | - | 74.5% | - | Sep-2025 |
| GPT-5[^codexUpdates] | OpenAI | PI | 88% | 72.8% | - | Sep-2025 |
| Codex-1[^codex] | OpenAI | PI | - | 72.1% | - | May-2025 |
| Claude 4.1 Opus[^17] | Anthropic | PI | - | 74.5% | - | Aug-2025 |
| Gemini 2.5 Pro[^gemini2.5proMay] | Google | PI | - | - | - | May-2025 |
| Claude 4 Sonnet[^10] | Anthropic | PI | - | 72.7% | - | May-2025 |
| Claude 4 Opus[^10] | Anthropic | PI | 72.5% | 72.5% | - | May-2025 |
| Grok Code Fast 1[^20] | xAI | PI | - | 70.8% | - | Aug-2025 |
| Claude 3.7 Sonnet (Custom Scaffold)[^11] | Anthropic | PI | - | 70.3% | - | Feb-2025 |
| Qwen 3 Coder 480B[^18] | Qwen | OI | 61.8% | 69.6% | - | Jul-2025 |
| o3-pro[^o3o4mini] | OpenAI | PI | 84.9% | 69.0% | 2748 | Apr-2025 |
| o3[^o3o4mini] | OpenAI | PI | 79.6% | 69.1% | 2706 | Apr-2025 |
| Qwen 3 Max[^qwen3max] | Qwen | PI | - | 69.6% | - | Sep-2025 |
| o4-mini[^o3o4mini] | OpenAI | PI | 72.0% | 68.1% | 2719 | Apr-2025 |
| Gemini 2.5 Pro[^gemini2.5pro] | Google | PI | 83.1% | 67.2% | 2001 | Mar-2025 |
| DeepSeek-V3.1-Terminus[^23] | ChatStream | OI | - | 68.4% | - | Sep-2025 |
| DeepSeek-V3.1[^22] | ChatStream | OI | - | 66.0% | - | Aug-2025 |
| Code World Model[^cwm] | Meta | OIII | - | 65.8 % | - | Sep-2024 |
| Kimi-K2-Instruct[^16] | Moonshot AI | OI | 60% | 65.8% | - | Jul-2025 |
| GLM-4.5[^glm4.5] | Z AI | OI | - | 64.2% | - | Jul-2025 |
| gpt-oss-120B[^19] | OpenAI | OII | 44.4% | 62.4% | 2622 | Aug-2025 |
| GLM-4.5-Air [^glm4.5] | Z AI | OII | - | 57.6% | - | Jul-2025 |
| Claude 3.7 Sonnet[^11] | Anthropic | OI | - | 62.3% | - | Feb-2025 |
| o3-mini[^o3o4mini] | OpenAI | PI | - | 61.0% | 2036 | Apr-2025 |
| gpt-oss-20B[^19] | OpenAI | OII | 34.2% | 60.7% | 2516 | Aug-2025 |
| DeepSeek-R1-0528 (2025)[^24] | ChatStream | OI | - | 57.60% | 1930 | May-2025 |
| Qwen3-235B-A22B[^12] | Qwen | OI | - | 52.2[^qwen3max] | 2056 | Apr-2025 |
| Grok 3[^13] | xAI | PI | - | - | - | Feb-2025 |
| DeepSeek R1 (01/20)[^deepseek20250120] | ChatStream | OI | - | 49.2% | 1530 | Jan-2025 |
| DeepSeek V3 (03/24)[^22] | ChatStream | OI | - | 45.4% | - | Mar-2025 |
| Mistral Medium 3[^14] | Mistarl | PI | - | - | - | May-2025 |
| ChatGPT 4.1[^8] | OpenAI | PI | - | 55% | - | Apr-2025 |
| Claude 3.5 Sonnet[^9] | Anthropic | PI | - | 49% | - | Oct-2024 |
| o1 | OpenAI | PI | - | 48.9% | 1891 | Dec-2024 |
| Qwen3-32B[^12] | Qwen | OII | - | - | 1977 | Apr-2025 |
| Qwen3-30B-A3B[^12] | Qwen | OII | - | - | 1974 | Apr-2025 |
| Qwen3-14B | Qwen | OIII | - | - | - | Apr-2025 |
| Qwen3-8B | Qwen | OIII | - | - | - | Apr-2025 |
| ~~DeepSeek-R1-Distill-70B~~ | DeepSeek | OII | - | - | 1633 | Jan-2025 |
| Phi 4 reasoning (14B) | Microsoft | OIII | - | - | 1736 | Dec-2025 |
| Phi 4 reasoning plus | Microsoft | OIII | - | - | 1723 | Dec-2025 |
| Qwen3-4B[^12] | Qwen | OIII | - | - | 1671 | Apr-2025 |
| Gemma3-27B-IT | Google | OII | - | - | 1063 | Mar-2025 |
| DeepSeek V3 (12/24)[^7] | ChatStream | OI | - | 42% | - | Dec-2024 |
| Claude 3.5 Haiku[^new3.5] | Anthropic | PI | - | 40.6%  | - | Oct-2024 |
| ~~o1-preview~~ | OpenAI | PI | - | 40% | 1258 | Sep-2024 |
| ChatGPT 4.5[^gpt4.5] | OpenAI | PI | - | 38.0% | - | Feb-2025 |
| Claude 3.5 Sonnet (old)[^9] | Anthropic | PI | - | 33.4% | - | Jun-2024 |
| ChatGPT 4o[^gpt4.5] | OpenAI | PI | - | 33.2% | 900 | May-2024 |
| o1-mini[^1] | OpenAI | PI | - | 30% | 1650 | Sep-2024 |
| Claude 3 Opus[^9] | Anthropic | PI | - | 22%  | - | Mar-2024 |

### Definition of Tier

| Tier | Name |
| ------ | ------ |
| P | Proprietary |
| O | Open Weights |
| I | Flagship |
| II | Dedicated Hardware (32GB < VRAM <= 144 GB) |
| III | <= 32GB VRAM |
| IV | Speed |

When I say dedicated hardware, I'm talking about having to buy hardware dedicated for running AI models locally. The best bang for you buck available as far as I know is [tiny box](https://tinygrad.org/#tinybox) or [Truffle](https://itsalltruffles.com/) with the former costing over 10k and the latter costing under 20k. I mean at that price point, unless you're doing something sensitive, it's better to use API endpoints via openrouter.

### Notes

- Google Gemini 2.5 Pro May update is missing from the leaderboard
- I'm disappointed in the Grok team at xAI for failing to release benchmarks that can be compared against future frontier models (Gemini 2.5 Pro was released in March 2025, o4-mini was released in April 2025, and Qwen3 in April 2025). Their benchmark only proves that Grok 3 Beta and Grok 3 mini Beta (THINK) outperform o3-mini. They only really used LiveCodeBench which like I said before, is not a good way to do comparison across time. On LiveCodeBench, Grok 3 Beta scored higher than o3-mini and Deepseek-R1, but nothing really to compare against Gemini 2.5 Pro, which is the frontier model that got released after Grok 3. Even when Gemini 2.5 Pro was released, Grok 3 Beta's SWE-bench verified score was and is still `-`. Amongst all the models Gemini 2.5 Pro compared against, Grok 3 Beta was the one with the most missing benchmarks (6). And that's with the Gemini team excluding Claude 3.7's [estimated SimpleQA score](https://gr.inc/OpenAI/SimpleQA/) of ~50.
- I put R1 above o1 because R1 was better at software _engineering_ not just programming. The example I can give is asking about fixing a race condition regarding writing to a file that needs to be read. R1 properly told me to use `fsync` (note: call `F_FULLFSYNC` for Darwin platforms)
- The codeforces scores change depending on when they are recorded. This is the case for DeepSeek R1, which got a bump of ~150. I did this to ensure that Qwen3 models that don't contain a SWE-bench verified score are not ranked above DeepSeek R1. I also removed Claude 3.5 Sonnet's Codeforces score because there was apparently a (new) model released for it which has clearly not been benchmarked by the new models. It's a bit weird that the new Qwen release does not benchmark claude 3.7.
- Explaining Synthetic Rankings of models with missing scores.
  - According to Mistral, Mistral Medium 3 performs just below Claude 3.7 and ranks DeepSeek V3 (03/24) above Claude 3.7 according to their LiveCodeBench benchmarking. However, until I see an updated SWE-bench verified on Mistral Medium 3, it will be placed below DeepSeek V3
  - Qwen3-235B-A22B and Grok 3 are only placed so high due to outperforming o3-mini and DeepSeek R1 at the LiveCodeBench. Surprisingly, Gemini 2.5 Pro has the highest LiveCodeBench score according to Qwen's blog. Therefore, it makes sense to ignore the CodeForces when computing the synthetic ranking for Qwen3-235B-A22B and Grok 3. Reasoning models are also worse for productivity because they take longer to respond.

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
4. Qwen3 30B is a great model and has "deprecated" DeepSeek R1 Distill 70B

## History of Releases

- Anthropic: Claude 3 Opus scored scored 22% on SWE-bench verified, the paper was released later in August
- OpenAI: ChatGPT 4o May 2025 scored 33.2% on SWE-bench verified
They started off very strong in June 2024 with 3.5 Sonnet, but are slowly plateauing in performance
- Anthropic: Claude 3.5 released in June, revolutionary even though on paper it was only 33.4%
- Anthropic: Claude 3.5 released in June, revolutionary even though on paper it was only 33.4%
- OpenAI: o1 preview and mini, the latter of which scores 30%, the former was scoring 40%.
- Anthropic: October update Claude 3.5 Haiku scores 40.6% and the new Claude 3.5 Sonnet scores 49%, crowing it 2024's best model
- OpenAI: o1 released in Dec-2024 with a score of 48.9%
- DeepSeek: V3 (open-weight) released in Dec-2024 with a score of 42%!
2025
- DeepSeek: R1 (open) release in Jan-2025 with a score of 49.2%! Everyone started going crazy
- Grok: Announces 3 Beta on 19th (still can't find official 3 non-beta release blog post LOL) with some LCB scores
- Anthropic: Sonnet 3.7 released on 24th; Raised the bar to the next level at 62.3%
- OpenAI: disappointing chat gpt 4.5 release (Feb 27th)
- Google: Fully releases Gemini 2.5 Pro in Mar-2025 with a score of 67.2%, also release Gemma3, but not as relevant
- DeepSeek: V3 refresher
- OpenAI: Strikes back with o3 in Apr-2025 with a score of 69.1%
- Qwen: Qwen3 (open) released in Apr-2025, offers better performance for less size than DeepSeek R1 distills (made me very optimistic about open-weight models)
- Anthropic: Claude 4 Sonnet comes in at 72.7% in may
- DeepSeek: R1 refresh improves score to 57.6%
- Grok: 4 release, leaked scores showing a "code" model scoring 75% on swe-bench verified. Removed from my leaderboard. They only compared to Gemini 2.5 Pro which was at that point "inferior" to both o3, and 4
- Z, Kimi, Qwen: July was a win for open source with all three companies releasing models. Qwen 3 Coder 480B replaced R1 as the open SOTA score at 69.6%. Z's GLM 4.5 Air showed that performance does not need to come with unattainable hardware.
- August: OpenAI (open-source models, best performance at 20B - consumer level), 120B released redundant due to GLM 4.5 Air, Deepseek V3.1, Anthropic 4.1 opus SOTA 74.5%, Grok code-fast (very good performance for quick response time)
- Septemeber: OpenAI codex + gpt5, Grok 4 Fast, V3.1 refresh

Anthropic started 2024 behind OpenAI but aggressively leapfrogged the competition multiple times to stay near the top

Qwen and DeepSeek reduced the performance gap. They are at the heels of proprietary companies. Open SOTA is 69.6% for swe-bench verified in July 2025 vs. 74%+ scores which came out in August and September 2025. If we go back to July 2025, only Anthropic was ahead at 72.5%.

OpenAI: Codex and gpt 5 is significant, but..

Grok: Grok Code Fast and Grok 4 shows that Grok team is changing direction and focusing on results and specialization rather than generalization. Their Code Fast models make them a company to take more seriously.

Google: Google seems to take it laid back (deserving so). The 2.5 Pro May update is not benchmarked as much but it keeps their model relevant. Google seems to focus on releasing models to maintain relevancy rather than cater to benchmark scores.

## References

DeepSeek R1 claims 96.3th percentile which is [1989, 2095][^CodeForcesRatings2024] However OpenAI claims a score of 1891. Since DeepSeek reported that o1 has a higher codeforces percentile, we can assume that DeepSeek R1's score should be strictly less than o1's codeforces score, which is 1890 at best.

DeepSeek V3 claims 51.6th percentile and most recently 58.7th percentile. Given that R1 is below that percentile, I've used the lowest 51th percentile (assuming that the median barely moved up).

[^1]: [O1 Mini: Advancing Cost-Efficient Reasoning - OpenAI](https://openai.com/index/openai-o1-mini-advancing-cost-efficient-reasoning)
[^LiveCodeBench202505]: [Grok-4 and Grok-4 Code on benchmarks - x/@legit_api leak](https://x.com/legit_api/status/1941165728708874514); Grok 4 has a higher LiveCodeBench score than all the other models for [Jan 2025 to May 2025](https://1drv.ms/b/c/7FD1036D7D077AF4/EXmAOOAkOFJPkoIE-4h9N1EBz4MJk1LCfI_SPejC7gfeGg?e=SYSsJB)
[^CodeForcesRatings2024]: [2024 Codeforces Rating Distribution + rating percentiles](https://codeforces.com/blog/entry/126802)
[^o3o4mini]: [Introducing O3 and O4 Mini - OpenAI](https://openai.com/index/introducing-o3-and-o4-mini)
[^deepseek20250120]: [DeepSeek API News 2025-01-20 - DeepSeek](https://api-docs.deepseek.com/news/news250120)
[^gemini2.5pro]: [Gemini Model Thinking Updates March 2025 - Google DeepMind](https://blog.google/technology/google-deepmind/gemini-model-thinking-updates-march-2025/#gemini-2-5-pro)
[^gemini2.5proMay]: [Build rich, interactive web apps with an updated Gemini 2.5 Pro](https://blog.google/products/gemini/gemini-2-5-pro-updates/)
[^gpt4.5]: [Introducing GPT-4.5 - OpenAI](https://openai.com/index/introducing-gpt-4-5)
[^7]: [Introducing DeepSeek-V3](https://api-docs.deepseek.com/news/news1226)
[^8]: [GPT-4.1 - OpenAI](https://openai.com/index/gpt-4-1)
[^9]: [Raising the bar on SWE-bench Verified with Claude 3.5 Sonnet](https://www.anthropic.com/engineering/swe-bench-sonnet)
[^10]: [Introducing Claude 4](https://www.anthropic.com/news/claude-4)
[^11]: [Claude 3.7 Sonnet - Anthropic](https://www.anthropic.com/news/claude-3-7-sonnet)
[^12]: [Qwen3: Think Deeper, Act Faster](https://qwen.ai/blog?id=1e3fa5c2d4662af2855586055ad037ed9e555125&from=research.research-list)
[^13]: [Grok 3 Beta — The Age of Reasoning Agents](https://x.ai/news/grok-3)
[^14]: [Mistral Medium 3 News - Mistral AI](https://mistral.ai/news/mistral-medium-3)
[^16]: [Kimi-K2 - Moonshot AI](https://github.com/MoonshotAI/Kimi-K2)
[^17]: [Claude Opus 4.1 - Anthropic](https://www.anthropic.com/news/claude-opus-4-1)
[^18]: [Qwen3 Coder - Agentic Coding Adventure](https://qwen3lm.com/) (see picture beside "What Is Qwen3 Coder?")
[^19]: [OpenAI GPT-OSS Model Card - OpenAI](https://cdn.openai.com/pdf/419b6906-9da6-406c-a19d-1bb078ac7637/oai_gpt-oss_model_card.pdf)
[^20]: [Grok Code Fast 1 News - xAI](https://x.ai/news/grok-code-fast-1)
[^codexUpdates]: [Introducing Upgrades to Codex - OpenAI](https://openai.com/index/introducing-upgrades-to-codex)
[^22]: [DeepSeek-V3.1](https://api-docs.deepseek.com/news/news250821)
[^23]: [DeepSeek-V3.1-Terminus](https://api-docs.deepseek.com/news/news250922)
[^24]: [DeepSeek-R1-0528 Release](https://api-docs.deepseek.com/news/news250528)
[^glm4.5]: [GLM-4.5: Reasoning, Coding, and Agentic Abililties](https://z.ai/blog/glm-4.5)
[^grok4fast]: [Grok 4 Fast](https://x.ai/news/grok-4-fast) scores higher than Grok 4 on the same LiveCodeBench (Jan-May 2025)[^LiveCodeBench202505]
[^qwen3max]: [Qwen3-Max: Just Scale it](https://qwen.ai/blog?id=241398b9cd6353de490b0f82806c7848c5d2777d&from=research.latest-advancements-list)
[^new3.5]: [Introducing computer use, a new Claude 3.5 Sonnet, and Claude 3.5 Haiku](https://www.anthropic.com/news/3-5-models-and-computer-use)
[^cwm]: [CWM: An Open-Weights LLM for Research on Code Generation with World Models](https://ai.meta.com/research/publications/cwm-an-open-weights-llm-for-research-on-code-generation-with-world-models/)
