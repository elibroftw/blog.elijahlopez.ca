---
title: "AI Awesome List"
date: 2025-05-02T22:55:04-04:00
draft: false
tags:
  - ai
summary: "Explore a bleeding-edge list of AI: models (open-source & proprietary), benchmarks, and applications (chat, image/video/audio, dev tools, and more)."
---

Please drop a comment if you think something is missing or want something added.

Ever since the launch of ChatGPT, AI powered apps have been blowing up. Every single day there's a new AI powered app that solves a specific use case. Some of which I have no need for, but are good to know.
There's two ways to keep up to date with AI, one is to subscribe to a newsletter, and the other is to bookmark a list, so that's what this is going to be. The problem with existing lists are their scope or vision sucks or they are not bleeding edge.
This list aims to be bleeding edge and will remove unmaintained / crap projects. It also aims to categorize AI so that everybody from hacker enthusiasts to corporate overlords will benefit. I've looked at other lists and they do a piss poor job of moderation. An awesome list shouldn't be recommending crap TTS products to the user.

There's two parts to this article. One focuses on the models and how to select them, whereas

{{< toc >}}

## AI Models

I'm starting with the topic of benchmarks because the best way to be ahead is by using the forefront leader in AI which is only possible by reading benchmark scores. One day it could be OpenAI, the next Google, the next some whale named DeepSeek, and then something called Qwen. Truly, it's better to make informed decisions based on a heuristic than it is to blindly follow the sheep and limit yourself a single platform.

### Benchmarks

In my opinion, the current state of benchmarks is very messy. I'm making progress on fixing it myself with blog posts such as [SimpleQA Leaderboard](/posts/ai-simpleqa-leaderboard/) however, there are a few more I would like to maintain. I suggest using these benchmarks as a heuristic in finding a handful of models to test yourself before going with one of them.

#### Populist Benchmarks

I'm naming these populist benchmarks because it's basically a popularity contest (real and synthetic) rather than a merit-based benchmark.

- [Chatbot Arena LLM](https://lmarena.ai/?leaderboard)
- [ArenaHard](https://github.com/lmarena/arena-hard-auto?tab=readme-ov-file#leaderboard)

#### Intelligence

- [ARC-AGI](https://arcprize.org/leaderboard)
- [Prompt Judy](https://app.promptjudy.com/public-runs) - Named Entity Recognition Dataset 2, Complex OCR

Intelligence benchmarks are good because you can also figure out which models are good at I/O tasks. Meaning you can give instructions to the model on what to do for each input, and the model returns output based on the input. This is applied intelligence which is a good thing to measure.

#### Knowledge Benchmarks

- [GPQA : Graduate-Level Google-Proof Q&A Benchmark](https://artificialanalysis.ai/evaluations/gpqa-diamond)
- [SimpleQA (Factuality)](/posts/ai-simpleqa-leaderboard/)
- [AIME (Math)](https://matharena.ai/)
- [Humanity's Last Exam](https://lastexam.ai/)

#### Coding Benchmarks

- [WebDev Arena Leaderboard](https://web.lmarena.ai/leaderboard)
- [Design arena](https://www.designarena.ai/)
- [SWE-Bench verified](/posts/ai-coding-leaderboard/): Software Engineering. ([leaderboard with all tools](https://www.swebench.com/#test))
- [CodeForces](/posts/ai-coding-leaderboard/): Competitive programming (note that there is no time penalty for the models)
- ~~[LiveCodeBench](https://livecodebench.github.io/leaderboard.html)~~
- ~~[EvalPlus](https://evalplus.github.io/leaderboard.html)~~
- Aider Polyglot (Code Editing)

The problem with LiveCodeBench is that there are different cut off dates depending on when a model is graded plus the benchmark is continuously updated. When using the earliest cut off date, some models might've been "contaminated" and when using later cut off dates, some models do not show up at all! If we use the scores self-reported by the company, we still run the risk of reporting non-comparable numbers. Based on how LCB works, model scores are expected to depreciate over the long run; If Grok 3 scored 100 on LCB today, it is almost certain to score less than 100 in a year.

The problem with EvalPlus is that it doesn't include bleeding edge models, it's basically almost solved, and not many new models even report their scores anymore.

#### Multimodal Benchmarks

This tests visual capabilities.

- MMMU (College-level visual problem-solving)
- [Humanity's Last Exam](https://lastexam.ai/)

#### Writing Benchmarks

- [eqbench](https://eqbench.com/)

#### Agentic Benchmarks

Agentic benchmarks are very new and personally I'm not too sure what these benchmarks do or even what is considered good. Personally the only agent I would ever value is one that has the same worth ethic and intelligence as I am during when I'm at my peak productivity.

- Scale MultiChallenge
- BrowseComp

### Evaluation Platform

- [OpenCompass](https://github.com/open-compass/opencompass)
- [K2 Vendor Verifier](https://github.com/MoonshotAI/K2-Vendor-Verfier)

### Proprietary Models

Model Name | Company | Blog | Chat App
---------------------- | --------------- | ------------ | -------
[Gemini](https://deepmind.google/technologies/gemini/) | Google | [Google DeepMind Blog](https://deepmind.google/discover/blog/) | [Google AI Studio](https://aistudio.google.com/prompts/new_chat)
[OpenAI Platform](https://platform.openai.com/docs/models) | OpenAI | [news](https://openai.com/news/) | [ChatGPT](https://chatgpt.com/)
[Grok](https://docs.x.ai/docs/models) |xAI | [news](https://x.ai/news) | [Grok](https://x.com/i/grok)
[Claude](https://www.anthropic.com/claude) | Anthropic | [news](https://www.anthropic.com/news) | [Chat](https://claude.ai/)
[Cohere Platform](https://cohere.com/command) | Cohere | [blog](https://cohere.com/blog) | [Dashboard](https://dashboard.cohere.com/)

Cohere is really slacking. I almost forgot about them.

### Text to Image

- [ArtificialAnalysis/Text-to-Image-Leaderboard](https://huggingface.co/spaces/ArtificialAnalysis/Text-to-Image-Leaderboard)

### Open-Source Models

A table of companies that release open-source LLMs. I suggest adding these to your RSS reader or signing up for email updates. In the future, hopefully RSSHub adds support for these.

When it comes to downloading models, most vendors (that's what I'm calling the companies) will link you to Hugging Face. My biggest gripe is how Hugging Face isn't using P2P torrent technology to speed up downloads and reduce strain on their own servers! What a missed opportunity.

Model Family | Company | Blog | Chat App
---------------------- | --------------- | ------------ | -------
[DeepSeek](https://www.DeepSeek.org/) | Chat Stream | [Chat Stream Blog](https://www.DeepSeek.org/blog) | [DeepSeek Chat](https://www.DeepSeek.org/en/chat)
[Qwen](https://qwenlm.github.io/) | AliBaba | [Qwen Blog](https://qwenlm.github.io/blog/) | [Qwen Chat](https://chat.qwen.ai/)
[Llama](https://www.llama.com/) | Meta | [AI at Meta Blog](https://ai.meta.com/blog/) and [Meta AI Research](https://ai.meta.com/research/) | OpenRouter
[Mistral](https://mistral.ai/products/la-plateforme#models) | Mistral | [Mistral News](https://mistral.ai/news) | [Le Chat](https://mistral.ai/products/le-chat)
[Gemma](https://ai.google.dev/gemma) | Google | [DeepMind Blog](https://deepmind.google/blog/) | [Google AI Studio](https://aistudio.google.com/prompts/new_chat)
[Phi](https://azure.microsoft.com/en-us/products/phi/) | Microsoft | [Microsoft AI Platform Blog](https://techcommunity.microsoft.com/category/ai/blog/aiplatformblog) | OpenRouter or [Azure AI Foundry](https://ai.azure.com/explore/models?selectedCollection=phi&tid=72f988bf-86f1-41af-91ab-2d7cd011db47)
[ChatGLM](https://huggingface.co/THUDM) | THUKEG & Z.ai | [Twitter](https://x.com/thukeg) | OpenRouter

Note that sometimes proprietary models are open-sourced, but this usually happens long after a model from an open-source family has beaten the outdated proprietary model. Therefore, they are not included in this list for end-users.

These are also the base models. If you go tho HuggingFace and LocalLLAMA, you can find many remixes (fine-tunes) of the base models to yield specific results. There are so many people doing this.

### AI API Providers

These companies don't make the models, but offer inference, either by hosting models or via a gateway

- OpenRouter (one API provider to use many APIs)
- HuggingFace (which links to Amazon, Azure, and Google)
- Groq
- Together.ai
- [Replicate](https://replicate.com/explore/)

### Running in the Cloud

- [RunPod](https://runpod.io/)
- [lium](https://lium.io/register?ref=LIUM-0B3LXV4L)

## AI Applications

AI but for specific tasks. A mix of apps and models (when applicable). Skip to [Local AI Models](#local-ai-models) to learn more about running open-source models using open-source apps

### Chat

The default type of application when people say LLMs.  and  for a list of models. Alternatively, if you don't mind paying, an easy way to interact with all models is through [OpenRouter](https://openrouter.ai/). Read [How to Run Open-Source Models](#how-to-run-open-source-models) if you want to run text generation models locally.

- [Proprietary Models](#proprietary-models)
- [Open-Source Models](#open-source-models)

- Forefront AI
- Bing Chat
- Hugging Face
- Poe
- Merlin
- WNR

### Recall (RAG)

Using AI to boost productivity by letting AI do a domain search and recall on the content you provide. See section on [jargon](#jargon) to understand what RAG is.

- [NotebookLM](https://notebooklm.google/): a tool to understand information
  - TODO: somehow combine this with an RSS feed sync
  - Can be used to combine a bunch of files together (pdfs, websites, youtube videos, audio, word files, etc)
  - Can create a podcast out of it too
- [Morphik AI](https://www.morphik.ai/)
  - This is more for developers who want to build _enterprise applications_

### AI Search

Some of these can also be considered a subset of "Chat"

- [Liner](https://liner.com/) (specialized in getting answers with reliable sources which means helps to avoid plagiarism)
- [Linkup](https://www.linkup.so/)
- [Exa](https://exa.ai/)
- [Perplexity](https://www.perplexity.ai/)

### Interesting Media Research

- [Segment Anything Model 2](https://ai.meta.com/sam2/) by Meta
  - example in [sam.cpp](https://github.com/YavorGIvanov/sam.cpp)
- [DINOv2](https://dinov2.metademolab.com/) by Meta
- [Video Sea](https://aidemos.meta.com/videoseal) by Meta: add imperceptible,resilient, watermark to videos that can verify the video's origin
- [Meta Movie Gen](https://ai.meta.com/research/movie-gen/)
- [VoiceBox](https://voicebox.metademolab.com/) by Meta: generate speech, correct audio

### Image

- Design & Editing
  - [Playground AI](https://playground.com/): Might not need to edit in Photoshop anymore ([demo](https://x.com/Suhail/status/1674124521543192578))
  - ChatGPT prompting
  - [Clipdrop](https://clipdrop.co/) by Jasper (many tools like uncrop)
  - [Autodesigner 2.0](https://uizard.io/autodesigner/): generate UI for apps/websites based on a prompt
  - [Galileo AI](https://www.usegalileo.ai/explore)
  - [Image editing via prompting in Gemini](https://x.com/umesh_ai/status/1901507907008782673)
  - AI can also be used to remove watermarks
  - [Gemini vs Photoshop example](https://x.com/madpencil_/status/1901584829038444707)
- Generative (Text-to-image or Image to Image)
  - [leaderboard](https://huggingface.co/spaces/ArtificialAnalysis/Text-to-Image-Leaderboard)
  - Open Source Models
    - [Step1X-Edit](https://huggingface.co/stepfun-ai/Step1X-Edit): aims to open-source ChatGPT's image capabilities
    - [Flux.2](https://flux2.io/)
    - [Stable Diffusion](https://stability.ai/stable-image) by StabilityAI (also see their Applications)
  - [Midjourney](https://www.midjourney.com/home)
    - [creating backgrounds with midjourney](https://kubadesign.lemonsqueezy.com/)
    - [Prompt to create app icons](https://x.com/adamlyttleapps/status/1671363003177123841)
  - [Dream](https://dream.ai/) by [WOMBO](https://dream.ai/blog)
- [ComfyUI](https://comfyui-wiki.com/): GUI for diffusion modelsz
- [Story Book LM Pro](https://storybooklm.pro/): Create illustration books for $8/mo
- Personal
  - [Headshot Pro](https://www.headshotpro.com/)
  - [PhotoAI](https://photoai.com/)

### Video

- Generation
  - [Pika](https://pika.art/)
  - [Veo](https://gemini.google/overview/video-generation/) by Google DeepMind
  - [Lighttricks](https://www.lightricks.com/)
    - The largest model is 13B, so it can be run locally [using ComfyUI](https://github.com/Lightricks/ComfyUI-LTXVideo/tree/master?tab=readme-ov-file#example-workflows)!
    - 9 seconds, 30 FPS, 720p
  - [Stable Diffusion Video](https://stability.ai/stable-video) by Stability AI
  - [Sora](https://sora.com) by OpenAI
  - [Gen] by Runway (also includes research papers)
  - [ChatGPT + Visla plugin](https://x.com/rezkhere/status/1674412982716215296): create a video commercial (voice over is trash though, use a TTS tool for that)

### Audio

- [Lyria](https://deepmind.google/technologies/lyria/) by Google DeepMind
- Music AI Sandbox is available through YouTube's [Music AI Incubator](https://blog.youtube/inside-youtube/partnering-with-the-music-industry-on-ai/)
- [AudioCraft](https://ai.meta.com/resources/models-and-libraries/audiocraft/) by Meta
- [Spleeter](https://github.com/deezer/spleeter) by Deezer: source separation
- [Stable Audio](https://stability.ai/stable-audio) by Stability AI
- [Voice Cloning](https://app.myshell.ai/robot-workshop) by MyShell
  - [OpenVoice](https://github.com/myshell-ai/OpenVoice)
- [WhisperX](https://github.com/m-bain/whisperX) the best long-form transcription tool based on benchmarks done by [Amgad Hasan](https://amgadhasan.substack.com/p/sota-asr-tooling-long-form-transcription)
- [Vogent - Voice AI Agent](https://www.vogent.ai/)
- [ElevenLabs](https://elevenlabs.io/): (TTS, STT, Conversational, Dubbing, Voice cloning, reader)
- Text-to-Speech
  - [Dia](https://huggingface.co/nari-labs/Dia-1.6B) by Nari Labs (high quality for the patient)
  - [kokoro-tts](https://huggingface.co/hexgrad/Kokoro-82M/) (fast and pretty good)
  - [MeloTTS](https://docs.myshell.ai/technology/melotts) TTS by MeloTTS
  - [ElevenLabs TTS](https://elevenlabs.io/) (Jessica good)

### 3D

- [Stable 3D](https://stability.ai/stable-3d) by Stability AI

Creating 3D wireframes with Gemini

{{< tweet user="azed_ai" id="1901418266746355999">}}

### Websites

- Creating one
  - [Aura Chat](https://aurachat.io/)
    - [samples](https://aurachat.io/meng)
  - v0: for developers to speedrun website development
  - [Orchids](https://www.orchids.app/): "The AI Fullstack Engineer. Build prototypes, apps, and websites"
  - [Lovable](https://lovable.dev/): for developers to speedrun website development
  - [UIDESIGN.AI](https://uidesign.ai/): AI for Shopify Themes & Figma
  - [combini](https://combini.dev/r/redditvc): Full stack app builder
  - [Bolt](https://bolt.new)
  - [Same](https://same.new)
  - [Replit](https://replit.com/)
  - [Figma Sites](https://www.figma.com/sites/)
  - [Gamma](https://gamma.app/): turn ideas into something real
- Other
  - [Post Cheetah](https://postcheetah.com/): Improve SEO with AI

### Creating Mobile Apps with AI

- [Rork](https://rork.app/)
- [Bolt](https://bolt.new)

### Marketing

- [Creatify](http://creatify.ai/)
- [Icon](https://icon.com/)

### Software Development

Aside from prompting the Chat apps, there are a variety of ways to use AI. I personally use Cline with an OpenRouter API key, however this is because I never got RooCode to work and so didn't bother setting it up.

- VSCode Integrations
  - [Roo Code](https://roocode.com/) (Cline fork that is more community contribution friendly, previously Roo Cline)
  - [Cline](https://cline.bot/) (as Debian is to Ubuntu, Cline is to RooCode)
  - [GitHub Copilot](https://github.com/features/copilot)
  - [Continue](https://www.continue.dev/)
  - [Twinny](https://twinny.dev/) (not user-friendly at all and useful only for local models)
  - [Qodo.ai](https://www.qodo.ai/) (previously CodiumAI)
    - "Agentic AI for reviewing, testing , and generating code – continuous quality at every step"
- Other IDE Integrations
  - [Aider](https://aider.chat/)  (AI pair programming in your terminal)
  - [QoDo Gen](https://www.qodo.ai/products/qodo-gen/) (VsCode and JetBrains)
  - [Continue](https://www.continue.dev/) (VsCode and Jetbrains)
- IDEs
  - [WindSurf](https://windsurf.com/) (previously Codium, acquired by OpenAI in 2025)
  - [Cursor](https://www.cursor.com/)
  - [PearAI](https://trypear.ai/)
- Other
  - [Claude Code](https://docs.anthropic.com/en/docs/claude-code/overview)
  - [Open Source DeepWiki](https://github.com/AsyncFuncAI/deepwiki-open): Wiki Generator for GitHub/Gitlab Repositories
  - [Devin](https://devin.ai/)
- GitHub Integration
  - QoDo Merge
- AI Coding Agents (via Terminal)
  - [aider](https://aider.chat/)
  - [stt/opencode](https://github.com/sst/opencode)
    - more agentic
    - connected to language server to course-correct
    - always has context while in use
  - [charmbracelet/crush](https://github.com/charmbracelet/crush)
  - [openai/codex](https://github.com/openai/codex)
  - [anthropics/claude-code](https://github.com/anthropics/claude-code)
  - [gemini-cli](https://github.com/google-gemini/gemini-cli)
  - [qwen-code](https://github.com/QwenLM/qwen-code) (fork of gemini-cli)
  - [codebuff](https://github.com/CodebuffAI/codebuff)
  - [plandex](https://docs.plandex.ai/hosting/self-hosting/local-mode-quickstart/)
    - no commits for 2+ months, lacks MCP and has some blockers for power users
    - painful setup to use at cost
  - [uzi](https://github.com/devflowinc/uzi) - haven't really looked into it but it can run agents in parallel

Figma to Code

If you don't mind TailwindCSS (I hate it), you may find these tools useful. Speaking from experience, you can just send Claude screenshots of the design and tell it to implement the design using a library like Mantine and it will implement it with 80% accuracy.

- [VeyraX](https://www.veyrax.com/mcp) ([Demo](https://x.com/veyraxai/status/1900444154540236964))
- [Superflex](https://www.superflex.ai/) (demo on website)

### CyberSecurity

-[peneterrer](https://peneterrer.com/): AI Security Tester (pairs well with vibe coded websites)

> We're so confident in our security testing capabilities that if we don't find any vulnerabilities, you get your money back. No questions asked.

### Using AI in Applications

- [Open Interpreter](openinterpreter.com/): A natural language interface for computers
- [Computer Use by Anthropic guide](https://glama.ai/blog/2024-10-22-automate-computer-using-claude)
- [DSpy](https://dspy.ai/) - modularizing AI by providing programmed functions that can be executed, thus lowering the risk of hallucinations for already solved problems
  - [A simple introduction to DSPy](https://x.com/MaximeRivest/status/1929861781448536081?t=HmwYmLifYq1QJhSKavjL3g)
- [React MCP](https://blog.cloudflare.com/connect-any-react-application-to-an-mcp-server-in-three-lines-of-code/)
- OpenRouter

### Writing

I take great pride in stating that this blog post is ironically 100% free of AI generation. I'm not opposed to AI but knowing that AI is a FLUFF GENERATOR means that I can really only use AI to turn a bland writing post into a pleasant post (see [That Time I Went to a Dog Food Eating Convention](/posts/the-dog-food-eating-convention/)). If you rely on AI 100%, it can make your content over the top sweet, so I find the best way to use it on your own words is to incorporate some of its suggestions rather than all.

I have two book ideas I want to pursue one day in the future. What I don't approve of using AI for, is to generate redundant slop, which is basically plagiarism. [Jetpack AI's](https://jetpack.com/ai/) own demo shows itself generating slop. Using AI to write a blog post about being a better blogger? What? I think these companies are going to get whatever moat they think they have eaten by Chat apps or open-sourced fine-tuned models.

Here are some thoughts I have on pursuing fictional writing

- [models from David Belton aka DavidAU](https://huggingface.co/DavidAU)
  - Maybe try the recent Qwen3 models since that's the latest model?
  - It seems like a PITA to deploy this myself, so if you want to use these models, I recommend trying to [run them locally](#how-to-run-open-source-models)
- [localllama comment](https://www.reddit.com/r/LocalLLaMA/comments/1hwvyze/comment/m64q0di/)
- [creative writing benchmark](https://eqbench.com/creative_writing.html)

### White Collar Workers

- [Shortcut - A better Excel co-pilot](https://www.tryshortcut.ai/)

### Other AI Apps

- [Glif](https://glif.app/glifs): A platform to build and use mini AI apps
- [Explore Hugging Face models](https://huggingface.co/models)
- [Sample Multi-modal project using GPT4](https://github.com/dabit3/openai-functions-god-app)
  - You could probably use this as a base project and combine with other tools and models to make something better.
- [LLM voice assistant project](https://github.com/ILikeAI/AlwaysReddy)
  - This project allows you to vocally converse with an LLM. It also has some functional capabilities like reading/writing to clipboard.

### What else can you accomplish with AI?

Convert line art out of an uploaded sketch + colorize with Gemini

{{< tweet user="dreamingtulpa" id="1901571311622918454" >}}

Extracting a professional shot product from a picture

{{< tweet user="nicdunz" id="1901387475555090500" >}}

Combining a product with a picture of a human (which could also be AI generated) for marketing or e-commerce shots. You can also do virtual try ons.

{{< tweet user="KurawaDono" id="1900074784127672614" >}}

{{< tweet user="HalimAlrasihi" id="1900667639086673962" >}}

Creating a pixel sprite using [Glif Sprite Generator](https://glif.app/@EgadZoundsGadzooks/glifs/clwpvrsfy000713x1hpl2rsg3), and then turning it into concept art using Gemini

{{< tweet user="angrypenguinPNG" id="1900303337318498792" >}}

Creating gif animations using Gemini

{{< tweet user="ilumine_ai" id="1900041501624971601" >}}

Interior decoration

{{< tweet user="deedydas" id="1900750406084686181" >}}

## AI Research

## Local AI Models

The best aggregate about open-source LLMs is [r/LocalLLaMA](https://www.reddit.com/r/LocalLLaMA/). However, it should be noted there is a base knowledge expectations required. I'll go over it briefly.

### How to Run Open-Source Models

This section comes first because it's derived from the resources in the rest of this page. The models you will be able to download will be limited by your RAM. To run a model locally, you may need [hardware](#ai-hardware). Next, pick an open-source model based on the [benchmark](#benchmarks) closest to the task you want. In [LM Studio](https://lmstudio.ai/), search for the model, and [choose a quantization](/posts/how-to-pick-an-llm-quantization/) to download.

Once you've downloaded models, you can load them in LM Studio, select a system prompt, and continue. You can also start a server and integrate with local apps that are ollama compatible.

### Open-Source Interfaces

An interface is something that interacts with the model, but not the model itself. I know of a few.

### Interfaces

- [LM Studio](https://lmstudio.ai/)
- [Jan](https://jan.ai/)
- [ComfyUI](https://comfyui-wiki.com/): diffusion (media) model GUI
- [openwebui](https://github.com/open-webui/open-webui)
- [text-generation-webui](https://github.com/oobabooga/text-generation-webui)
- ~~[Stable Diffusion web UI](https://github.com/AUTOMATIC1111/stable-diffusion-webui)~~

Some of these require "backends" which all come from llama.cpp or kobold.cpp. However, [Ollama](https://github.com/ollama/ollama) is super simple for running models.

[Offload Tensors for Performance Improvements](https://www.reddit.com/r/LocalLLaMA/comments/1ki7tg7/dont_offload_gguf_layers_offload_tensors_200_gen/)

This post is very new and talks about how even with less than the recommended hardware requirements, you can still improve throughput by being selective about what is offloaded to the GPU. It seems that some tensors like FPN tensors happen to be very large and use basic matrix multiplication which can be done efficiently on the CPU, whereas small tensors like attention tensors benefit from GPU parallelization! It's a breakthrough innovation in my opinion. Original credit goes to  [u/EmilPi](https://www.reddit.com/user/EmilPi/).

### Learning

Using AI

[Prompt Engineering](https://www.kaggle.com/whitepaper-prompt-engineering)

Building with AI

1. [21 Lessons, Get Started Building with Generative AI](https://github.com/microsoft/generative-ai-for-beginners)

Researcher-oriented

1. [Neural Networks and Deep Learning](http://neuralnetworksanddeeplearning.com/index.html)
2. [Language Models are Unsupervised Multitask Learners](https://cdn.openai.com/better-language-models/language_models_are_unsupervised_multitask_learners.pdf)

- pytorch
- tensor
- llama.cpp

[A simple introduction to DSPy](https://x.com/MaximeRivest/status/1929861781448536081?t=HmwYmLifYq1QJhSKavjL3g)

### Read Frontier Papers

One of the most eye opening things my friend told me is that there is practical benefit to reading frontier research articles. In his case it was related to algorithmic trading, but I'm going to go further and suggest that it applies to all areas of frontier development. Whether that be quant finance, AI research, cancer research. There is merit in spending time on reading research if you are able to utilize new information readily.

### Follow AI Researchers

They will talk about new things they may have learned or how to break in, or tweet out an article, etc.

- [Yann Lecunn](https://www.linkedin.com/in/yann-lecun/recent-activity/all/) - VP & Chief AI Scientist At Meta
- [Andrew Ng](https://x.com/AndrewYNg) - previously head of Baidu AI and Google Brain
- [Andrej Karpathy](https://x.com/karpathy) - founding team @ OpenAI
- [Demis Hassabis](https://x.com/demishassabis) - Co-Founder & CEO @GoogleDeepMind
- [François Chollet](https://x.com/fchollet) - creator of ARC-AGI benchmark

### Get Resources

The easiest way to get resources is to get MONEY. To get MONEY, you need a JOB. It's probably easier to [GET A JOB](#ai-research-companies) than to already have the money necessarily to buy [hardware](#ai-hardware).

### AI Research Companies

Company | Based | Notes
----------- | --------- | ----------
[Cohere](https://jobs.ashbyhq.com/cohere) | Canada/USA | Command R model
[Open AI](https://openai.com/careers/) | USA | The creator of ChatGPT, led by [Sam Altman](https://en.wikipedia.org/wiki/Sam_Altman) (disclosure, I'm biased against Altman)
[Google DeepMind](https://deepmind.google/about/careers/) | USA | They came out with the original Transformer research that OpenAI used successfully and work on Gemini and Gemma
[xAI](https://x.ai/careers/open-roles) | USA | Creator of grok, very integrated with X, owned by Elon Musk
[Meta AI](https://www.metacareers.com/) | Anywhere | Creators of LLaMA
[NVIDIA](https://www.nvidia.com/en-us/about-nvidia/careers/) | USA | Manufacturer of the best _commercially available_ GPUs for training AI
[Anthropic](https://www.anthropic.com/jobs) | USA | Claude
[Safe Superintelligence Inc.](https://ssi.inc/) | Palo Alto, Tel Aviv | [Ilya Sutskever](https://en.wikipedia.org/wiki/Ilya_Sutskever) former OpenAI Chief Scientist & Co-founder
[Thinking Machines Lab](https://thinkingmachines.ai/) | USA? | [Mira Murati](https://en.wikipedia.org/wiki/Mira_Murati) former Open AI CTO
[Ndea](https://ndea.com/) | USA | intelligence science lab founded by X:@fchollet & X:@mikeknoop
[Vector Institute](https://vectorinstitute.ai/about/opportunities/open-positions-at-vector/) | Toronto, CA | -
[Mila](https://apply.workable.com/mila-2/?lng=en) | Quebec | -
[Ai2](https://allenai.org/careers) | Seattle, WA | -

### AI Product Companies

## AI Hardware

- NVIDIA Tensor Core GPUs: enterprise
- [Truffle](https://www.itsalltruffles.com/): end-customer hardware for running models locally

## Jargon

- AI: Artificial Intelligence
- [RAG: Retrieval-Augmented Generation](https://www.youtube.com/watch?v=T-D1OfcDW1M&pp=ygUDUkFH)
- Fine-Tuning
- LLM: Large Language Model
- LLaMA : Large Language Model Meta AI
- [Model Context Protocol (MCP)](https://youtu.be/HyzlYwjoXOQ?si=r1cFI6E8lf5DX9RX)
- Inference
- Segment
- Tokens
- NGMI: not going to make it
- SOTA: State of the art
- LoRA: Low-Rank Adaptation

## Final Words

There are a lot of variety of tools, models, and research. There's an opportunity to capitalize on research, combine multiple models, and provide an offering that is SOTA. If you're unemployed, you should seize on this opportunity. VC appetite is high for AI-related companies, and competition is very hot.
