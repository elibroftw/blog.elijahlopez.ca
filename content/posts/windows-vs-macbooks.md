---
title: "Windows vs. Mac"
date: 2024-03-27T14:06:32-04:00
draft: false
tags:
  - opinion
  - tech
---

So let's be clear. Until the snapdragon x elite CPU laptops have dropped, there are only a few reasons to purchase a Windows laptop over a MacBook. I won't deny the performance benefits of the M series chips, but I will dispute the battery life as it is only a couple hours better than a gaming laptop when faced with the same workload.

## Reason 0 - Battery Life

This used to be a compelling reason, the ASUS Zephyrus G14 (2024) has a battery life of [10 hours and 52 minutes]((https://youtu.be/-i7ocqfFrOk?si=wKmEd8LSttdJW-gc&t=420)) when watching YouTube, which is only 1 hour and 40 minutes behind the Macbook Pro (2023).

If you don't care about GPU tasks (Gaming, using pytorch, using LLMs, video editing\*, 3D applications, [creative applications](https://www.nvidia.com/en-us/accelerated-applications/?filter=eyJ3b3JrbG9hZHMiOlsiQ29udGVudCBDcmVhdGlvbiAvIFJlbmRlcmluZyJdfQ==)), then I would suggest comparing the Macbook Airs versus laptops using [AMD "U" CPUs](https://www.amd.com/en/products/processors/laptop/ryzen.html#portfolio) (e.g. 8840U, 7840U). And when laptops start shipping with Snapdragon Elite X chips, they will most likely be all the rage (albeit you will be using Windows ARM and not Windows x86_64, so software support may be behind).

## Reason 1 - Gaming

So here's the deal. You can either purchase a macbook, a console, and pay a yearly online fee, or you can just purchase a gaming laptop that can play games with better looking graphics, and you can multitask. I don't know about anyone else, but I often run at least a browser while gaming. When I sold my PC, I did so because my laptop had better specs so it would be prudent to connect my laptop to my monitors and use my peripherals with the laptop. Really happy about my decision.

I bought my Razer Blade 14 in 2022, but if I could've delayed my purchase I would've purchase the **Asus ROG Zephyrus G14.** As for which laptop specs to purchase, it's going to be graphics card based (CPU is going to be good enough).

## Reason 2 - Software

- If you need to use Linux or Windows software, such as Virtual Box, forget about M series Macbooks. You'd need to use [UTM](https://mac.getutm.app/).
- When I was virtualizing Linux MInt, the experience was nothing compared to running on bare metal. Don't use UTM unless you'd be using Virtual Box for the same task on Windows and Linux

## Reason 3 - Local AIs are The Future

The future is AI and I strongly believe those of us who can adequately integrate AI into our workflows on our systems will win. That's why having a graphics card with at leas 8GB of VRAM will prove to be well worth it. Open Source AI is only going to get better. In my opinion, beating the best free alternative is good enough for open-source to win.

## Reason 4 - Wanting Macbook Graphics Performance Without MacOS

[I'm not a fan of the operating system](/posts/macos-sucks) but I wanted equivalent performance when rendering. I hated the render performance of my old laptop with its integrated graphics. That's when I realized mobile i5's are a sham. I made sure to look for a laptop with a graphics card and I'm content it will last a long time.

## Reason 5 - Limited External Monitor Support

Even if you pay a boatload of money, the base M-series chip, in my case the M2, only supports one external monitor! Compare that to my Razer Blade: even though it's best to connect to one monitor with the dedicated GPU (dGPU), and the other monitor via the integrated GPU (iGPU), if there was no dGPU, the regular iGPU would still be able to connect to two external monitors. That means that the Macbook air is limited to two screens, whereas the Razer Blade is limited to at least 4 screens (2 through USB C / iGPU, 1 through HDMI / dGPU). In recent (2024) gaming laptops like the Zephyrus, both the HDMI port and one of the USB C ports are both connected to the dGPU, meaning you can make use of the entire monitor's specs without any performance hinderance. Regardless, the AMD integrated GPUs perform much better than the integrated Intel GPUs, at least until more ARC technology enabled CPUs [show up](https://www.acer.com/us-en/laptops/swift/swift-go-16#filterHeader).

## Reason 6 - Mouse and touchpad Sync

Mac developers are actually stupid. First of all, natural scrolling is disabled by default! That means if you scroll up, the page goes up instead of acting like a page of paper where scrolling up moves the screen down. When you enable natural scrolling, then your mouse behaves the wrong way as well! With natural scrolling enabled, the scroll wheel of the mouse is inverted! That means when you scroll the scroll wheel down, the page goes up instead of down. How frustrating. Apple fans love to praise Apple about how "intuitive" their Operating System is, but the reality is that Apple products are for simple people. The OS is made stupid simple, that only stupid simple people would find it useful. Clearly I am not wrong as Generation Z and Alpha are having trouble using computers, which can use 100% of Excel features, which guess what? Is required by the workplace.

I should really be thanking Apple for making it easier to compete with businesses and get employed. In the age of Apple supremacy, people who are locked into the eco-system are at a disadvantage when it comes to getting paid.

## Recommend Laptop Specs

For a gaming laptop, I recommend  **Asus ROG Zephyrus G14 (2024+)** or **Legion Slim 5 Gen 9+**. Best to purchase these laptops during Black Friday and Cyber Monday sales (as with any tech you want to purchase). Lastly, although the current era of software is memory intensive, as someone who is in the industry, software is going to start getting more memory efficient as we have reached an era of tech stack ubiquity where you learn once and ship everywhere. Learning once and shipping everywhere is how we get people to focus more on performance than features, and I myself have seen Windows 11 reduce the memory footprint of my own application without me having implemented all my memory optimization features.

### Graphics Card

- RTX 5060 or better (for the future)
- RTX 4070 or better
- RTX 3080-Ti
- RTX 3070-Ti
- RTX 4060: I put this at the bottom because the year before, laptops would have 3070-Ti's and then they only sold 4070 and 4060s.

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
