---
title: "MacOS Sucks"
date: 2022-05-12T17:21:36-04:00
tags:
  - opinion
---

Here are some reasons MacOS sucks. Of course, Linux and Windows suck too. The order for desktop OS's
are MacOS < Linux Desktop < Windows. This article is not about why Windows > Linux, so please refrain
from commenting about Linux. If you are a Mac user and are offended, Windows also sucks a) the Settings
app does not include everything found in the control panel, and the control panel uses the same UI interface
since Windows 7 and b) requires installing third party apps like TaskbarX, EarTrumpet, QuickLook, and ditto to improve the UX and
c) there's no effort to bring Linux functionality to Windows (e.g. bash, posix kernel, preinstalled GNU coreutils, PATH limit and editable as a file).

### Hidden Files

So you want to see hidden files?
You go to finder settings but can't find it. So you then Google it. Turns out you were supposed to memorize the very intuitive keyboard shortcut (command + shift + period or simply command + >).

### Removing Many Files via Command Line

rm -R folder requires sudo even if I own the files.

### Homebrew does not modify PATH

Homebrew does not permanently ass packages to path. You have to create a shell config yourself with the export path shenanigans. Stackoverflow doesn't even bother giving you the one liner to do this. They make you create a file yourself and add it rather than a simple `echo "export PATH=PATH:..." >> ~/.zshrc`.

### Updating macOS Breaks git

Another reason is that every time you update MacOS, you will get the following error when trying to use git.

https://apple.stackexchange.com/questions/254380/why-am-i-getting-an-invalid-active-developer-path-when-attempting-to-use-git-a#254381

The error is "invalid developer path."

Every time you update, you have to agree to Apple's XCodes terms of service in order to use git, which isn't made by Apple but simply
preinstalled by them. Don't want to instsall XCode? Too bad, the Command line tools themselves is 130MB.
