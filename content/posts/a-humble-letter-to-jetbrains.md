---
title: "JetBrains Sucks"
date: 2023-11-07T21:11:40-05:00
draft: false
tags: [
    "opinion",
    "programming"
]
---

Dear JetBrains,

I got home today and turned on my PC. I start up a twitch stream on Firefox and open up the task manager to check if I'm going to encounter any issues as I had the other day. What I notice is 47% of my memory is being used. That's 14.9GB. I sort apps by memory and what do I find?

![Task Manager showing JetBrains Toolbox using 400MB of memory](/images/jetbrains/toolbox_mem_usage.png)

So Toolbox is clearly disrespecting my PC, so of course I quit the app and disable the startup. I notice that my Music Player (Music Caster) only uses 100MB of memory, and that's a Python app. I wonder how much space the JetBrains Toolbox app takes up.

I found out that the binary takes 100MB, but then I realize there's sibling folders, so the entire directory came to a whopping ~3GB. 2.8GB was from a cache/backup directory. What kind of files does an app manager need to backup? That's right, an IDE manager needs to backup the IDE's it has installed! Wow, I had no idea that we users need to reserve 2.8GB of our SSD's so that we won't have to re-download an IDE in case the IDE breaks? I am being facetious, the IntelliJ does not need to be backed up.

In any case, I have IntelliJ installed for the odd case where I remember to make use of its Python analysis when I work on my Music Player, which is not an optimal code base. I feel that this one off case does not justify 5GB+ of storage space, and if I ever need to use Java, I will make VSCode work. VSCode, with all its extension bloat, still does not come to the size of the "backup" folder.

So goodbye JetBrains. Two years after creating an issue to make the [Python Console persistent on IntelliJ](https://youtrack.jetbrains.com/issue/IDEA-285950/Add-option-to-pin-Python-Console-in-IntelliJ), the issue persists in IntelliJ but alas the author is no longer a user.

Sincerely,

Elijah Lopez

Ex-JetBrains user.

## JetBrains Bloatware Remnant

In case people have doubts about how much bloat JetBrains' software has, here are some screenshots of folders I found of JetBrains' after uninstalling all of their software from my PC.

![AppData/Roaming 628MB remnant](/images/jetbrains/appdata-roaming-remnant.png)

![AppData/Local 1.60GB remnant](/images/jetbrains/appdata-local-remnant.png)
