---
title: "Why 64-bit programs are Better Than 32-bit"
date: 2021-12-25T10:30:44-06:00
draft: false
tags: [
    "c++",
    "tutorial",
]
categories: [
  "opinion",
]
---

This article is from a developer point of view, not a user point of view.
The audience of this article are beginner to intermediate developers and is introductory, not argumenatiative.
Do not expect to be convinced if you are pro 32-bit software because Windows decided to support 32-bit software.
From a user point of view, 64-bit computers and software is better because then you can have 100 browser tabs open

### 1. No 4GiB Memory Limit

If your application needs more than 4GiB memory, then you definitely need a 32-bit application.
And if you don't need more than 4GiB of memory, you might not want to develop 32-bit development habits because if you do need 4GB in the future, its better for your habits to already work out, that it is to keep in the back of your mind that you need to switch to targetting 64-bit.

### 2. 64-bit Users get 64-bit Applications

By shipping only 64-bit distrubtions, and only one legacy 32-bit application, most users won't be recommended the wrong architecture.
For example, VLC recommended their 32-bit distribution on my 64-bit computer! Some of my video files are around 20GB so of course 64-bit would be best.

### 3. Linux: Seamless Installation for Users

If you ship 32-bit Linux applications, chances are that your users will now need to install the necessary 32-bit libraries.
Most systems are 64-bit and 32-bit users can continue using legacy software with their package manager.

### 4. 64-bit is the Default

In Visual Studio 2022, the default target architecture is 64-bit. It used to be 32-bit.
Most users run 64-bit systems, so the default compiler or intrepetor you install, like Python, will also be 64-bit in 2021.

### 5. Future Proof & 32-bit Compilers

64-bit is objectively more future proof than 32-bit. Rust already has a 128-bit primitive, so 32-bit will definitely be left in the dust if things shift even further. We've already seen Windows 10 go from "last Windows" to out of support in 2024. When starting new projects, why sacrifice the stability of your applicaiton in the future, just to support the past?

My personal grife is a Python project. Over two years ago, I made a music player for Windows, [Music Caster](https://github.com/elibroftw/music-caster/). The relevant details are Python 3.7 64-bit, PyInstaller, and a fork of portaudio that only compiled for 64-bit.
After some time, a user asked me to support 32-bit. Me being naive at the time agreed because I fell prey to the 32-bit supports more users reasoning.

To support 32-bit applications, I had to uninsatll my existing instllation and then install the 32-bit version of Python. I went with Python 3.8 since Python 3.9 hadn't come out yet. I wish it was that simple, but there's more. I had to figure out how to compile the 32-bit version of the portaudio library. Then another year later, I've decided to future proof my application, so the journey back from 32-bit Python was just as hard.

Lesson of the day is to never use a 3.X.0 Python distribution or learn Rust while you are using Python.

### 6. No Emulation

The most common pro 32-bit software argument is also the most ironic. The entire reason emulation exists, that is 32-bit software running on 64-bit Windows,
is Windows supporting legacy software. Creating 32-bit software when 64-bit is possible, is simply ignorant as to why 64-bit exits.

At the cost of not supporting at most 2% of Windows users, your application won't have to be emulated.
> WOW64 is the x86 emulator that allows 32-bit Windows-based applications to run seamlessly on 64-bit Windows. [^fn1]

- 64-bit operations are native in 64-bit systems and don't require multiple 32-bit calls
In the end, performance is largely based on optimization, and not so much architecture target, so that's why this is the last section.

### Conclusion

I know this article is not a 100% high quality article, but this article isn't argumentative, it's just a run through.

In conclusion, it's better to distribute 32-bit and 64-bit applications than just 32-bit applications.
But don't be like VLC, and recommend 64-bit computers to install the 32-bit version!

[^fn1]: https://docs.microsoft.com/en-us/windows/win32/winprog64/running-32-bit-applications
