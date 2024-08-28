---
title: MacOS is an Dysfunctional Operating System
date: 2022-05-12T17:21:36-04:00
tags:
  - opinion
aliases:
  - /posts/macos-sucks/
---

Here are some reasons MacOS is not as superb as people say it is. Of course, Linux and Windows have their own problems too. The order for desktop OS's
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
preinstalled by them. Don't want to install XCode? Too bad, the Command line tools themselves is 130MB.

### Notes App

This app is atrocious. Google made the right decision to only deploy a web version of Keep because if Apple can't make a functional app for their own Operating System that doesn't require rebooting your laptop to fix its unresponsiveness, then how could Google ever make a desktop app that meets expectations?

### Status Icons can be Forced into Hiding

[Apple Developer - Menu bar extras](https://developer.apple.com/design/human-interface-guidelines/the-menu-bar#Menu-bar-extras)

> When necessary, the system hides menu bar extras to make room for app menus. Similarly, if there are too many menu bar extras, the system may hide some to avoid crowding app menus.

Forget Linux distros. On Windows, status icons by default don't pollute the menu bar compared to macOS, and they also aren't forced into hiding. The fact that status icons can simply be [banished](https://bg3.wiki/wiki/Banishment) is indicative that macOS is not a thoughtfully designed OS. It's an operating system that is aesthetic without the function. The one place Apple's Mac's excel at is the hardware, but since hardware of all OEMs is continuously improving, why would I bother with an M-series chip? Especially with the AMD Strix and Intel Lunar Lake CPUs coming out now (2024). I'd argue that the "new" Snapdragon Elite X chip belong in an Android tablet, because the Surface Pro 11 is stupidly priced as being more expensive than a Macbook Air M3 for 1TB of storage and 16GB of RAM. Nobody wants your stupid Copilot PCs Microsoft. Just change your name to AiSoft!

### Command Tab Isn't Efficient

One of the issues with macOS is that it assumes its users will never need to use different instances of the same app for different tasks. There's an incorrect assumption that if I three windows of one app open, that all three are related to the same task. When I want to switch from the browser to one of these windows, I can't just use Command Tab, I also have to then use Command tilde and cycle through another window I don't need to use. It's also difficult to know how many windows I have of the same app! For this, you need to swipe up with three fingers. On Windows, the equivalent is Windows Tab. Option tab does nothing on macOS. Even then, the windows are scattered all over the place, so you need to take your time to count.

Oh and if you minimize one window of an app, this Option trick doesn't even work! The window cannot be restored without using your trackpad, you just end up on the window that has not been minimized! Who came up with this garbage system? Even if there's another keyboard shortcut for that, that's another keyboard shortcut that didn't need to exist. Command tilde should've worked.

### Restoring a Window is a Pain

I have to use the Option key which feels absolutely unnatural because I'm using the second finger from the left.
