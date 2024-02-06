---
title: "Wait a Bit Before Upgrading Will Ya?"
date: 2024-02-05T21:57:41-05:00
draft: false
tags: [
  'programming',
  'opinion'
]
---

Do not update your software dependencies unless

1. the update has been out for 2 months which is enough time for new users to test it out as if they are the QA team
    - non-mature technology is always prone to bugs and if it is working for you now, let someone else run into and report issues with the next versions. Here are four examples over four years of this happening to me!
    - 2024: I thought upgrading to react-native to the latest was such a good idea...after a couple days, I finally went to test iOS and the development build doesn't even compile because the package manager (cocoapods) is broken. After the tedious fix, it compiled, but react-native itself doesn't work. I wanted confirmation bias for this article and when I went to check npm, I noticed a new version was published an hour ago, and it was the fix for the problem too. So either live on the edge and become bitter like me or just update to (n - 1).
    - 2023: expo didn't work so I never got to enjoy its easy-ness
    - 2022: React's subdependency was broken when I installed react for the first time in 2 years and building for production was broken which I found out while I was recording a youtube video!
    - 2021: I thought upgrading to Python3.10 was a great idea, oh wait regression bug that required editing the source code to fix it
    - 2020: webpack was broken when I was working on my first React project. Good think vite has replaced webpack, because webpack was a good reason to stick to backend development and VanillaJS
2. there is a security vulnerability
    - one thing that scares me is that if I die, will someone be able to takeover and maintain my own projects, such as Music Caster?
3. the codebase has become  technical debt with interest
    - every couple years, you should evaluate whether the code base is up to modern standards or using modern techniques. Obviously it might not use modern technology, but you need to decide whether the tech debt is one you pay interest on or one you can hold until it's no longer your concern
    - An example of tech debt with no/low interest: reproducible builds. With Music Caster, the tech debt is sizable, but the interest is very low, and the one quirk is that you have to install one of the packages with the system interpreter and not with the venv interpreter.
    - An example of tech debt that you have to pay interest on: the codebase is in a language or use a specific framework that has fallen out of popularity so less people know it meaning either you have to pay developers more money or you have to accept lower productive developers. Sure, you could argue this applies to very new technology, but you are paying a premium to prevent the tech-debt.
