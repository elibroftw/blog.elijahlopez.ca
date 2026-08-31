---
title: "How to Use GLM 5.3 With Claude Code"
date: 2026-08-30T22:44:41-04:00
draft: false
summary: "Learn how to configure Claude Code to use GLM 5.3 via OpenRouter. Step-by-step guide on setting environment variables and selecting the gateway model."
tags:
  - ai
---

Create an [OpenRouter API key](https://openrouter.ai/workspaces/default/keys)

```sh
nano ~/.bashrc # ~/.zshrc on macOS

export OPENROUTER_API_KEY="<your-openrouter-api-key>"
export ANTHROPIC_BASE_URL="https://openrouter.ai/api"
export ANTHROPIC_AUTH_TOKEN="$OPENROUTER_API_KEY"
export ANTHROPIC_API_KEY="" # Important: Must be explicitly empty
export CLAUDE_CODE_ENABLE_GATEWAY_MODEL_DISCOVERY=1
```

Source the updated profile.

```sh
. ~/.bashrc
```

Run `claude`.

Run `/model` in claude code. Go down the list till you find `Z.ai: GLM 5.3` (From gateway).

If you can't find the model, there's two potential issues:

1. You're logged into using an Anthropic account.
2. Environment variables were not sourced (I ran into this issue because I copy pasted the source command for zshrc instead of bashrc); You can use `echo $OPENROUTER_API_KEY`
