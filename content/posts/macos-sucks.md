---
title: "MacOS Sucks"
date: 2022-05-12T17:21:36-04:00
draft: false
hidden: true
tags: [
    "opinion",
]
---

So you want to see hidden files?
You go to finder settings but can't find it. So you then Google it. Turns out you were supposed to memorize the very intuitive keyboard shortcut (command + shift + period or simply command + >).

rm -R folder requires sudo even if I own the files.

Homebrew does not permanently ass packages to path. You have to create a shell config yourself with the export path shenanigans. Stackoverflow doesn't even bother giving you the one liner to do this. They make you create a file yourself and add it rather than a simple `echo "export PATH=PATH:..." >> ~/.zshrc`.
