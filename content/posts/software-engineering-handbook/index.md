---
title: "The Software Engineering Handbook"
date: 2025-03-05T15:50:15-05:00
draft: true
tags:
  - book
  - programming
---

> This is stupid. Why would I need to learn how to code.

\- Elijah Lopez in 2013

There is so much to learn about software engineering. The [resources](https://elijahlopez.ca/resources/) page on my website has served its purpose well for
directing new people into the industry, however I need to do a better job of compiling my notes and knowledge of the topic. Past tries (3 in total) over the last 3 years have failed,
due to information overload. I've been writing my blog for many years and I know what works:

- concise
- searchable
- informative
- examples

With that said this will serve a a list of topics for you to bookmark and re-read when you need to accomplish something.

- [Glossary](/posts/software-engineering-handbook/glossary)
- [Chapter 1 - The Computer Environment](/posts/software-engineering-handbook/chapter-1)
- [Chapter 2 - Introduction to Programming](/posts/software-engineering-handbook/chapter-2)
- [Chapter 3 - Version Control System (Git)](/posts/software-engineering-handbook/chapter-3)
- [Chapter 4 - Introduction to Software Projects](/posts/software-engineering-handbook/chapter-4)
- [Chapter 5 - Principles of Software Engineering](/posts/software-engineering-handbook/chapter-5)

Deployment notes

- if you can use AlmaLinux, otherwise Rocky Linux
- NixOS is also good, but need to learn how to deploy something
- Scale up > scale horizontally, because of simplicity and more closer knowledge
- Scaling horizontally is too abstract
- Scale up + 2 servers can serve a million users easily
- Auto healing
- Systemd Timer
- Mailgun