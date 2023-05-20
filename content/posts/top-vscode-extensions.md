---
title: "Top VS Code Extensions"
date: 2022-10-24T21:28:18-04:00
draft: false
tags: [
  "vscode",
  "programming",
]
---

For this article, I'm going to skip over default language packs since they are a goto install.

## Atom One Dark Theme

[Install](https://marketplace.visualstudio.com/items?itemName=akamud.vscode-theme-onedark)

This is the primary theme I use nowadays. I used to use Material Theme for VSCode but I used Atom One Dark for IntelliJ and honestly, it is more popping.

## Material Theme

[Install](https://marketplace.visualstudio.com/items?itemName=Equinusocio.vsc-material-theme)

The most important part of any IDE is its aesthetics.

After installing, use the command "Preferences: Color Theme" to select a theme.

The theme I use is "Material Theme Darker High Contrast" combined with this custom setting so that comments appear lighter.

```json
"editor.tokenColorCustomizations": {
        "[Material Theme Darker High Contrast]": {
            "textMateRules": [
                {
                    "scope": [
                        "comment",
                        "comment punctuation.definition.comment",
                        "string.quoted.docstring.multi.python",
                        // example comment
                    ],
                    "settings": {
                        "foreground": "#a1a1a1"
                    }
                }
            ]
        }
    },
```

## Material Theme Icons

[Install](https://marketplace.visualstudio.com/items?itemName=Equinusocio.vsc-material-theme-icons)

Aesthetics can be improved further than a theme. We need nice icons in the file explorer!

## Code Runner

[Install](https://marketplace.visualstudio.com/items?itemName=formulahendry.code-runner)

This extension let's you run a file using Ctrl + Alt + N.
I suggest changing the settings so that Code Runner runs in an integrated terminal rather than an output window so that you can enter input.

## Better C++ Syntax

[Install](https://marketplace.visualstudio.com/items?itemName=jeff-hykin.better-cpp-syntax)

If you are a C++ worshipper like I am, this extension is right up your ally. If you are a vim/emacs/Stallman
worshipper, why are you even reading this?

## Spell Check

[Install](https://marketplace.visualstudio.com/items?itemName=streetsidesoftware.code-spell-checker)

If you are using vscode for Markdown, I recommend installing this extension as well as creating a `.vscode/settings.json` with the following:

```json
{
    "editor.fontFamily": "Helvetica, Sans-serif, Consolas, 'Courier New', monospace",
    "editor.fontSize": 16,
    "editor.fontWeight": "normal"
}
```

## Git Graph

[Install](https://marketplace.visualstudio.com/items?itemName=mhutchie.git-graph)

Git Graph, although not perfect, is one of the easiest ways to perform a git rebase / squash.
To do so, simply right click a previous commit and click "reset" and then commit your changes, and then click force push normal git view.
To rebase on a commit in origin, you just have to pull, fix merge conflicts, and then do the same thing.

## Excel Viewer

[Install](https://marketplace.visualstudio.com/items?itemName=GrapeCity.gc-excelviewer)

View CSV files in VSCode itself.

## Fix JSON

[Install](https://marketplace.visualstudio.com/items?itemName=oliversturm.fix-json)

I'm not sure if this is still the case, but VS Code can't auto-format JSON files by default.
PRO Tip: if you don't want linters to go off on comments in JSON files, use the .jsonc file extension.

## Jinja

[Install](https://marketplace.visualstudio.com/items?itemName=wholroyd.jinja)

If you use Flask, this is a very nice extension.

## MongoDB for VS Code

[Install](https://marketplace.visualstudio.com/items?itemName=mongodb.mongodb-vscode)

If you use MongoDB Atlas, this extension is much nicer than the Compass app to find, view, and edit documents in your database.

## ShellCheck

[Install](https://marketplace.visualstudio.com/items?itemName=timonwong.shellcheck)

If you work with shell files, this extension is helpful to catch some bugs you may accidently write simply
due to how bash/sh interprets differently because of missing quotation marks.

## Remote Development

[Install](https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.vscode-remote-extensionpack)

If you need to ssh often to do some programming, I suggest using this extension and reading [my tutorial](/posts/vs-code-remote-ssh/)

## Remote X11

[Install](https://marketplace.visualstudio.com/items?itemName=spadin.remote-x11)

> Sets the DISPLAY variable when in a remote workspace so that GUI applications can be run from VS Code.

## vscode-pdf

[Install](https://marketplace.visualstudio.com/items?itemName=tomoki1207.pdf)

I'm not sure if this extension is buggy, but I used this extension extensively when doing programming assignments to avoid
alt-tabbing. I usually split my editor into two panels and have pdfs open on the right panel. Even with two monitors, I'd still use this extension
since the second monitor will be used for gaming or watching videos.
