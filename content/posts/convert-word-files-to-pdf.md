---
title: "Convert Word Files to PDF With Python"
date: 2020-09-02T23:04:27-05:00
draft: false
tags:
  - tutorial
  - programming
  - python
---

NOTE: Windows tutorial.

Back when I first started University, I decided to type out all my math notes. Yes, you heard me right, I typed out my math notes (equation editor is very powerful) - or took screenshot snippets of the textbook PDF and pasted them into my notes.docx if I was lagging behind and too lazy to type it out later. I'm always about studying efficiently so whenever I needed to read my math notes, it was always annoying having to wait a couple seconds for Word to open up my notes so I decided to start exporting them to PDF but I didn't want to do it manually every time for both all my course notes so I decided I would use Python to solve my problem. Here's what I came up with after doing some research and debugging to optimize code execution.

A lot of the code is about leveraging the win32 API and I'd be lying if I knew what everything actually did, but rest assured I did have to figure out how to get it to work as you can see with the word = comments where I was figuring out how to do the conversion using threads. I'm sure you could even use multiprocessing here but that's for another time since this code was made for only 4 files. You could also use a thread pool if it turns out you have more than 4 files but don't want to rewrite the code to work with multiprocessing.

{{< gist elibroftw 5d048a6fededb730e3f2e95793212046 >}}
