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

## Battery Life

For those looking at battery life, here are the comparisons for each category of performance.

- MacBook Air vs Surface laptop vs HP OmniBook 5 14 (default, where battery life and webcam quality matters)
- MacBook Neo vs Dell XPS 13 (entry)
- MacBook Pro vs Dell XPS 14 (pro) vs Framework Laptop 13 Pro vs Yoga Slim 7x (Snapdragon X2 Elite)
  - pro tasks: Video editing\*, 3D applications, [creative applications](https://www.nvidia.com/en-us/accelerated-applications/?filter=eyJ3b3JrbG9hZHMiOlsiQ29udGVudCBDcmVhdGlvbiAvIFJlbmRlcmluZyJdfQ==), AI. Gaming doesn't count because of the (low) price point.

## Software

- You generally need to pay for good software on macOS, but the software is really good and UX friendly. Take for example [UTM](https://mac.getutm.app/). Windows comes with Hyper-V out of the box, which is pretty good too, but that's a microsoft app, not a free-market app.

## Wanting Macbook Graphics Performance Without MacOS

[I'm not a fan of the operating system](/posts/macos-sucks) but I wanted equivalent performance when rendering. I hated the render performance of my old laptop with its integrated graphics. That's when I realized mobile i5's are a sham. I made sure to look for a laptop with a graphics card and I'm content it will last a long time.

## Limited External Monitor Support

Even if you pay a boatload of money, the base M-series chip, in my case the M2, only supports one external monitor! Compare that to my Razer Blade: even though it's best to connect to one monitor with the dedicated GPU (dGPU), and the other monitor via the integrated GPU (iGPU), if there was no dGPU, the regular iGPU would still be able to connect to two external monitors. That means that the Macbook air is limited to two screens, whereas the Razer Blade is limited to at least 4 screens (2 through USB C / iGPU, 1 through HDMI / dGPU). In recent (2024) gaming laptops like the Zephyrus, both the HDMI port and one of the USB C ports are both connected to the dGPU, meaning you can make use of the entire monitor's specs without any performance hinderance. Regardless, the AMD integrated GPUs perform much better than the integrated Intel GPUs, at least until more ARC technology enabled CPUs [show up](https://www.acer.com/us-en/laptops/swift/swift-go-16#filterHeader).

## Mouse and touchpad Sync

Mac developers are actually stupid. First of all, natural scrolling is disabled by default! That means if you scroll up, the page goes up instead of acting like a page of paper where scrolling up moves the screen down. When you enable natural scrolling, then your mouse behaves the wrong way as well! With natural scrolling enabled, the scroll wheel of the mouse is inverted! That means when you scroll the scroll wheel down, the page goes up instead of down. How frustrating. Apple fans love to praise Apple about how "intuitive" their Operating System is, but the reality is that Apple products are for simple people. The OS is made stupid simple, that only stupid simple people would find it useful. Clearly I am not wrong as Generation Z and Alpha are having trouble using computers, which can use 100% of Excel features, which guess what? Is required by the workplace.

I should really be thanking Apple for making it easier to compete with businesses and get employed. In the age of Apple supremacy, people who are locked into the eco-system are at a disadvantage when it comes to getting paid.

## Linux Support

[Asahi Linux](https://asahilinux.org/) aims to bring Linux on Apple Silicon. The most recent chip it supports is M2 (which I have luckily), but even then the following features are missing as of 2026-09-13:

- USB-C Displays
- Thunderbolt / USB4/
- Touch ID

## Video Games

At the end of the day, if cost is a concern, a console makes the most sense and this point is moot. Therefore, this point only makes sense for those wanting to PC games without building a desktop.

Although the M5 (Pro) can compete with desktops, it lacks in GPU. Money can be spent on a GPU rather than upgrading to an M5 Pro, and then to play [non-apple supported games](/posts/desktop-games-on-app-store#games-not-on-apple), you'd need to have a CrossOver subscription. This becomes too expensive to game on a MacBook. Fortunately, since this category is gaming, we can broaden the comparison to MacBook plus console versus Notebook plus Console versus Notebook plus eGPU.

From my experience of previously daily driving a Razer Blade 14, I would prefer an eGPU rather than a a gaming laptop, because day-to-day battery life matters a lot more than the time spent gaming, which is usually done at home with a power connection. An eGPU also allows you to upgrade the GPU before upgrading the laptop (CPU bump). A laptop in my experience can last 3-4 years. I only upgraded from my Razer Blade 14 because it was a gaming laptop which struggled to play CyberPunk 2077 2.0 and could not put out 60 frames on Battlefield 6. So for gaming, go with Notebook + eGPU or a dedicated PC or a console (which is the biggest win considering GTA VI releases first on console).

Console Player

- MacBook Neo + PS5 + PlayStation Plus (for multiplayer games)
  - $700 + $600
- XPS 13 + PS5
  - $700 + $600

x64 Notebook + eGPU

- An eGPU doesn't get full performance as its run through a thunderbolt port. A PCIe port comes closest to desktop performance.
- $1250 + $550 + $280 = $2,080; $780 premium
- GPU: RX 9070 $550
- eGPU: AOOSTAR AG03 $280
- Laptop Comparables
  - ThinkBook 14 Gen 9 Intel (Ultra 7 355); $1,249.99
  - XPS 13 (Ultra 7 355); $1,499.99
  - [ThinkBook 14 Gen 9 Intel (14″)](https://www.lenovo.com/us/en/p/laptops/thinkbook/thinkbook-series/lenovo-thinkbook-14-gen-9-14-inch-intel/21ux000hus) (Ultra 5 325);
  - ThinkPad X1 Carbon (Ultra 5 335 vPro)
  - ThinkPad X9 (Ultra 5 338H)
  - Snapdragon X2 Elite

## On Local AI

The M5 has gotten the necessary improvements that target running models locally (NPU). So a dGPU is not an advantage over a MacBook here.

I'm also less concerned about needing portable VRAM. Once AI is so good and useful that everyone would be running it, the most cost effective solution is running it at home on a box and connecting non-GPU devices to it whenever you need it. On top of that, there are useful LLMs that are small enough to run on non-GPU hardware.

## Recommend Laptop Specs

I've dabbled with gaming laptops, PCs, and even an ARM surface laptop, and I think the most ideal configuration is actually just a battery-life focused laptop that you can connect an eGPU to. The eGPU is more important for non-gaming tasks as a console can be a dedicated gaming device.

When buying a non-Apple laptop, 32GB of RAM is a minimum. For Apple computers, 16GB of RAM is minimum.

Some laptops I'd consider at varying price points:

- Entry level: MacBook Neo or XPS 13
- Work
  - At this point, I'm assuming you're compiling programs, rendering videos, CAD, blender, etc..
  - 32GB RAM (non-Apple) / 16GB RAM (Apple)
  - 1TB storage
  - nice to have add-ons: eGPU or upgrading to the Pro variant of Apple silicon
- Niche Work (no compromises so battery life not important)
  - Chips: M5 Pro / Max, Snapdragon X2 Extreme, Intel Ultra 7
  - Optional dGPU
