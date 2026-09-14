---
title: "Windows vs. Mac"
date: 2024-03-27T14:06:32-04:00
draft: false
tags:
  - tech
  - macos
  - windows
summary: "An opinionated comparison of Windows laptops and MacBooks, evaluating them based on performance, battery life, gaming, software, local AI, external monitor support, and user experience. The post argues for Windows laptops in specific scenarios and critiques macOS."
aliases:
  - /posts/windows-vs-macbooks/
  - /posts/mac-vs-windows-vs/
---

macOS does have its merits especially considering their superior integration of custom ARM silicon AND the recently announced MacBook Neo. Dave2D made a wonderful video [Apple MacBook Neo vs Dell XPS 13](https://www.youtube.com/watch?v=Z5XOhPfIgho). I am more shocked at how Apple is not maximizing shareholder value by making their hardware more accessible to non-Apple OS. Being able to run Android on an iPhone or Windows on a Macbook would enable Apple to earn revenue and profits from every single company that makes money just because Windows is required.

Additionally, after using a surface laptop which has ARM CPUs, it's a great development laptop, but some apps like PotPlayer perform worse. So from my perspective Windows on ARM is not there yet and I would recommend Windows x64 for performance junkies.

## Reason 0 - Battery Life

For those looking at battery life, here are the comparisons for each category of performance.

- MacBook Air vs Surface laptop vs HP OmniBook 5 14 (default, where battery life and webcam quality matters)
- MacBook Neo vs Dell XPS 13 (entry)
- MacBook Pro vs Dell XPS 14 (pro)
  - I'm not even going to pitch Windows, Apple MacBook wins if money is no objection.
  - pro tasks: Video editing\*, 3D applications, [creative applications](https://www.nvidia.com/en-us/accelerated-applications/?filter=eyJ3b3JrbG9hZHMiOlsiQ29udGVudCBDcmVhdGlvbiAvIFJlbmRlcmluZyJdfQ==), AI. Gaming doesn't count because of the price point.

## Reason 1 - Video Games

More desktop games support Windows than macOS, and there are [some games](/posts/desktop-games-on-app-store#games-not-on-apple). that could run on apple hardware but are not supported.

At the end of the day, if cost is a concern, a console makes the most sense and this point is moot. Therefore, this point only makes sense for those wanting to PC games without building a desktop. From my experience, I would prefer an eGPU rather than a a gaming laptop, because the battery life will be great and you can upgrade the GPU before upgrading the laptop. A laptop in my experience can last 3-4 years. I only upgraded from my Razer Blade 14 because it was a gaming laptop that wasn't capable of gaming. That's what shaped my opinion that notebook + eGPU / dedicated PC / Console is better.

Console Player

- MacBook Neo + PS5 + PlayStation Plus (for multiplayer games)
  - $700 + $600
- XPS 13 + PS5
  - $700 + $600

x64 Notebook + eGPU

- $1250 + $550 + $280 = $2,080; $780 premium
- GPU: RX 9070 $550
- eGPU: AOOSTAR AG03 $280
- Laptop Comparables
  - ThinkBook 14 Gen 9 Intel (Ultra 7 355); $1,249.99
  - XPS 13 (Ultra 7 355); $1,499.99
  - [ThinkBook 14 Gen 9 Intel (14″)](https://www.lenovo.com/us/en/p/laptops/thinkbook/thinkbook-series/lenovo-thinkbook-14-gen-9-14-inch-intel/21ux000hus) (Ultra 5 325);
  - ThinkPad X1 Carbon (Ultra 5 335 vPro)
  - ThinkPad X9 (Ultra 5 338H)

## Reason 2 - Software

- You generally need to pay for good software on macOS, but the software is really good and UX friendly. Take for example [UTM](https://mac.getutm.app/). Windows comes with Hyper-V out of the box, which is pretty good too, but that's a microsoft app, not a free-market app.

## Reason 3 - Wanting Macbook Graphics Performance Without MacOS

[I'm not a fan of the operating system](/posts/macos-sucks) but I wanted equivalent performance when rendering. I hated the render performance of my old laptop with its integrated graphics. That's when I realized mobile i5's are a sham. I made sure to look for a laptop with a graphics card and I'm content it will last a long time.

## Reason 4 - Limited External Monitor Support

Even if you pay a boatload of money, the base M-series chip, in my case the M2, only supports one external monitor! Compare that to my Razer Blade: even though it's best to connect to one monitor with the dedicated GPU (dGPU), and the other monitor via the integrated GPU (iGPU), if there was no dGPU, the regular iGPU would still be able to connect to two external monitors. That means that the Macbook air is limited to two screens, whereas the Razer Blade is limited to at least 4 screens (2 through USB C / iGPU, 1 through HDMI / dGPU). In recent (2024) gaming laptops like the Zephyrus, both the HDMI port and one of the USB C ports are both connected to the dGPU, meaning you can make use of the entire monitor's specs without any performance hinderance. Regardless, the AMD integrated GPUs perform much better than the integrated Intel GPUs, at least until more ARC technology enabled CPUs [show up](https://www.acer.com/us-en/laptops/swift/swift-go-16#filterHeader).

## Reason 4 - Mouse and touchpad Sync

Mac developers are actually stupid. First of all, natural scrolling is disabled by default! That means if you scroll up, the page goes up instead of acting like a page of paper where scrolling up moves the screen down. When you enable natural scrolling, then your mouse behaves the wrong way as well! With natural scrolling enabled, the scroll wheel of the mouse is inverted! That means when you scroll the scroll wheel down, the page goes up instead of down. How frustrating. Apple fans love to praise Apple about how "intuitive" their Operating System is, but the reality is that Apple products are for simple people. The OS is made stupid simple, that only stupid simple people would find it useful. Clearly I am not wrong as Generation Z and Alpha are having trouble using computers, which can use 100% of Excel features, which guess what? Is required by the workplace.

I should really be thanking Apple for making it easier to compete with businesses and get employed. In the age of Apple supremacy, people who are locked into the eco-system are at a disadvantage when it comes to getting paid.

## Reason 5 - Linux Support

[Asahi Linux](https://asahilinux.org/) aims to bring Linux on Apple Silicon. The most recent chip it supports is M2 (which I have luckily), but even then the following features are missing as of 2026-09-13:

- USB-C Displays
- Thunderbolt / USB4/
- Touch ID

## On Local AI

I'm less concerned about needing a portable GPU with VRAM all the time. Once AI is so good and useful that everyone would be running it, the most cost effective solution is running it at home on a box and connecting non-GPU devices to it whenever you need it. On top of that, there are useful LLMs that are small enough to run on non-GPU hardware.

## Recommend Laptop Specs

I've dabbled with gaming laptops, PCs, and even an ARM surface laptop, and I think the most ideal configuration is actually just a battery-life focused x64 laptop that an eGPU can connect to.

I do appreciate Microsoft taking the risk of shipping ARM laptops, however they need to actually make their default apps better like the video player, so that I don't have to use PotPlayer, which is slow on ARM laptops.

### Graphics Card


### RAM

32GB recommended but 16GB is alright. I ran out of memory once but I'm a developer who was running too many programs in the background.

### Storage

At least 1TB. I have a 1TB laptop and I currently have 200GB of storage remaining. This is after:

- Partitioning 100GB partitioned for Linux Mint (I am dual booting). I recommended [Nobara KDE](https://blog.elijahlopez.ca/posts/linux-tips/#which-distro-should-i-use) which is a Fedora based Distro focused on working out the box for dual booting.
- Dedicating 100GB for a virtual machine I was using for a single assignment in one of my classes
- I have several programming projects that take up a combined space of 20GB (better than the 50GB I thought it would be taking)
- 20GB of temporary downloads I plan on deleting soon

### CPU

- AMD Ryzen 7 or better
- Do not buy Intel until their power consumption becomes better
- Intel i7 or better if there is no AMD alternative
