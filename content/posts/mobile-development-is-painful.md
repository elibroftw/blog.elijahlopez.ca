---
title: "Mobile Development Is Painful"
date: 2023-05-04T23:55:07-04:00
draft: false
---

I've been tasked at creating a mobile app for both iPhone and Android and I have zero experience. I tried to do something with Flutter in 2020, however back then I gave up when Flutter couldn't do background tasks.

This year, I tried to do the app with [Uno Platform](https://platform.uno/) and encountered a slew of issues. The
people are nice, however the platform was fighting against me and now when my own deadline approaches, my
question on how to navigate views is still left unanswered. The support is abysmal and I seriously just want an easy life.

I went with Uno Platform because I wanted to do the backend with C# ASP.NET to have a one language stack. However, I knew that React Native would be easier since I already know React.

Today I tried to compare Flutter and React Native and found out that Flutter was better in performance and widgets, however if flutter as so good, no one would use React Native, so why does React Native still exist?

Well I found out today. The boilerplate and code redundancy is beyond comprehensible. If you need state management, there's two classes, with boilerplate functions for each. I spent 30 minutes figuring out how to use persistent storage (shared preferences) to conditionally render a view, but because it's async, there's just too much complexity.

Tomorrow is a new day and I'm determined to get work done. I have some react native libraries saved, and I'm going to go through with it. Is is the mobile SDK's making my life hard or is the frameworks that have the poor developer experience? We'll find out tomorrow (next paragraph)!

Well tomorrow is here, and the verdict on React Native is:

Expo is complete dog shit. The React Native Expo scaffold command promoted by the official documentation doesn't even produce a compilable app. It's absolutely dumb. I encountered this sort of broken official docs last year too when I was [getting started with Tauri](https://www.youtube.com/playlist?list=PLmWYh0f8jKSjt9VC5sq2T3mFETasG2p2L). One thing I absolutely despise about other developers in this industry is that they want to be authoritarian and retain full control of their repositories while simultaneously being unavailable.

React Native CLI on the other hand did compile, but the verdict for that is:
