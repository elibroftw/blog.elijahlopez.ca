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

Another reason is that every time you update MacOS X, you will get the following error when trying to use git.

https://apple.stackexchange.com/questions/254380/why-am-i-getting-an-invalid-active-developer-path-when-attempting-to-use-git-a#254381

The error is "invalid developer path."

Every time you update, you have to agree to Apple's XCodes terms of service in order to use git, which isn't made by Apple but simply
preinstalled by them. Don't want to instsall XCode? Too bad, the Command line tools themselves is 130MB.
