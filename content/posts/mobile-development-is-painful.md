---
title: "Mobile Development Is Painful"
date: 2023-05-04T23:55:07-04:00
draft: false
tags: [
    "opinion",
]
---

I've been tasked at creating a mobile app for both iPhone and Android and I have zero experience. I tried to do something with Flutter in 2020, however back then I gave up when Flutter couldn't do background tasks.

## Uno Platform

This year, I tried to do the app with [Uno Platform](https://platform.uno/) and encountered a slew of issues. The
people are nice, however the platform was fighting against me and now when my own deadline approaches, my
question on how to navigate views is still left unanswered. The support is abysmal and I seriously just want an easy life.

I went with Uno Platform because I wanted to do the backend with C# ASP.NET to have a one language stack. However, I knew that React Native would be easier since I already know React.

## Flutter

Today I tried to compare Flutter and React Native and found out that Flutter was better in performance and widgets, however if flutter as so good, no one would use React Native, so why does React Native still exist?

Well I found out today. The boilerplate and code redundancy is beyond comprehensible. If you need state management, there's two classes, with boilerplate functions for each. I spent 30 minutes figuring out how to use persistent storage (shared preferences) to conditionally render a view, but because it's async, there's just too much complexity.

Tomorrow is a new day and I'm determined to get work done. I have some react native libraries saved, and I'm going to go through with it. Is is the mobile SDK's making my life hard or is the frameworks that have the poor developer experience? We'll find out tomorrow (next paragraph)!

Well tomorrow is here, and the verdict on React Native is: not ideal but can get it to work.

## React Native

Expo is complete dog shit. The React Native Expo scaffold command promoted by the official documentation doesn't even produce a compilable app. It's absolutely dumb. I encountered this sort of broken official docs last year too when I was [getting started with Tauri](https://www.youtube.com/playlist?list=PLmWYh0f8jKSjt9VC5sq2T3mFETasG2p2L). One thing I absolutely despise about other developers in this industry is that they want to be authoritarian and retain full control of their repositories while simultaneously being unavailable.

React Native CLI on the other hand did compile, but the verdict for that is: works 60 of the time all the time.

You add a package to package.json in a React Native and when you hit build, you wait 60 seconds for the project to download required files before building only to encounter:

The Android Gradle plugin supports only kotlin-android-extensions Gradle plugin version 1.6.20 and higher.

> That's because RN upgrades (or other libs that use Kotlin) break the version. There's not a lot I can do about this apart from just updating Kotlin version everytime.

[source](https://github.com/mrousavy/react-native-vision-camera/issues/1352#issuecomment-1571658656)

This is coming from the maintainer of the mainstream camera package for react native...

Imagine wanting to scan a QR code but you have to rely on a single person who doesn't want to give access to other people to maintain his/her project?

Now I need `react-native-reanimated` on top of `react-native-vision-camera` and `vision-camera-code-scanner`...

Please stop this endless cycle of bloatware. I'm so done with react native. My friend (todo: link) even told  me about how he stopped with React Native and went native.
I had not heeded his advice because I thought it would not be as productive as React Native (since I know React already), but the way I see things now, I would not pick React Native
for future projects. Any project that uses React Native becomes tech debt instantly.

## A Note to Future Developers

Make two apps. It's much better. Learn both Swift and Kotlin. Write feature in Kotlin, write feature again in Swift. Less time wasted due to these react-native specific conflicts.

A strong reason to not do this, is because Apple does not allow development on Windows. I have a solution. Use [VirtualBox](https://www.virtualbox.org/) and then install [macOS](https://www.maketecheasier.com/install-macos-virtualbox/)

Start from scratch. Do things correctly. Use Kotlin for the Android app and a Virtual Machine to code the iOS app in Swift. Do things twice in both apps because it will save you the time of debugging stupid react native build errors. Plus there's no transpilation. Everything is as close to native as possible.
