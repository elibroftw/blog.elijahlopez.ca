---
title: "Razer Blade Stealth Late 2016, 5 Years Later"
date: 2022-07-19T12:34:25-04:00
draft: false
tags:
  - review
summary: "8GB of memory is just not enough anymore. Combined with poor battery life, 720p webcam, no dedicated GPU, bare-minimum storage, the laptop is a beater. I upgraded the storage to 1TB in 2024."
---

{{< toc >}}

## Introduction

I upgraded the storage to 1TB in 2024 LOL.

### Video

Watch the 5 year review here.

{{< youtube yUD-R7tB4w8 >}}

### Background

I purchased the Razer Blade Stealth 12.5" in April/May 2017 for CAD$1,500 including tax max.
It came with $150 of razerstore credits which I spent on a Kraken V2 Headset since my desktop lack a microphone and headphones.

This review takes place in July 2022, so the laptop has lasted more than 5 years. I'm upgrading
to the Razer Blade 14 which has more desktop related specs along with allegedly better battery life.

### Specs

The specs is predominantly why this laptop is not suited for productivity and makes it not versatile.

- CPU: i5-7200u (dual core)
- GPU: integrated graphics
- Storage: 128 GB
- RAM: 8GB
- Battery: ???
- Left side ports: USB C charging, USB 3, audio jack
- Right side ports: HDMI, USB 3
- Chassis: aluminum
- Color: black
- Keyboard: RGB lightning but does not light up symbols on the functions keys.

## Good Things

Although you might LOL after reading the first four specs, mind you this was my **first** notebook that wasn't intel pentium, and I didn't have the financial freedom I have currently. My previous two laptops were a Windows XP laptop that had been in the family for over a decade, followed by a bulky Asus laptop with intel pentium.

### Testament of Time

It's lasted 5 years even with low storage and required only $100 for a battery replacement due
to stressing the laptop for hours per day without a CPU limit. Currently, I have the CPU
limited to 90% to prevent high temperatures. The CPU itself is not a pentium so that's another
plus, although it is a mobile i5. Build quality is amazing. The laptop has no plastic and
the touchpad is not trash. The only nicks present are on the sharp
edges of the laptop lid, most likely due to letting other people touch or move your laptop.
Pro-tip: never let anyone touch your laptop. You'd think moving a laptop would be done
carefully by everyone, but no.

### Free Headset

Another good thing as said before was the $150 credits the laptop came with which I used
to buy a headset which I use to this day. It only required ear pad replacements which was
only possible because Razer built the headset with maintainability in mind. Thanks Razer.

### QHD

This laptop, although the display is small, has a QHD display. Macbooks all comes with higher
than 1080p resolution, so it makes sense why Razer was pushing high PPI displays even in 2016.
The display size was small, so it required 150% scaling which was possible in Windows. Had
the display not been QHD, I would never have noticed that Linux distros have poor
defaults when it comes to handling QHD displays (grub).

### Speakers

Reviewers are claiming that the Razer Blade 14 has poor speakers, but I think
it's just a relative thing because even my Stealth has some fantastic speakers.
Dolby Digital Audio makes a big difference. I compared it off, on, and
made sure to tweak it to make music sound the best. If this laptop's speakers
are satisfying, it makes no sense that a 2022 laptop would have worse speakers.

### Keyboard

Love the keyboard and the RGB lighting. I was pro-lgbtq+ way before people decided
it was a personality trait.

### Medium Tasks

Could handle less than medium heavy tasks like YouTube, Word, google, even cuphead.
Photoshop and Illustrator work fine. Premiere Pro, After Effects work but not for rendering.

## What made me upgrade?

### Memory

Out of memory issues starting in early 2022. If I ran IntelliJ along with word
and a browser, I quickly ran out of memory. As a developer, you constantly learn
things and although 8GB is enough for single tasks, multi-tasking is part of my daily routine and is unavoidable if you are constly referencing things.
Although I have a desktop, performance portability (a made-up term) has become a major need for me.
Thus, I want to be as productive programming on my laptop as I am on my desktop.

### Battery

The laptop died after 3 hours and 50 minutes on battery with max brightness, max speakers, max brightness keyboard lighting,
moderate Youtube playback, Microsoft word, some 30 minutes of idling. No programming, no VSCode, nor IntelliJ.

I want performance portability without a severe hit in battery life. If I was programming religiously on this laptop while playing YouTube
and listening to music with microsoft word open, the laptop would surely last less.

In 2020, I was overusing the laptop and the fans were spinning constantly every day. The battery ending up becoming bloated
and I had to replace it. I was able to replace it myself, however the 3 hours and 50 minutes is using this new battery.

The cord that is connected to the adaptor has the outside worn out. Not sure if the wires are exposed, but
obviously the laptop cannot be sold without the cable and adapter replaced.

A recent development has been charging the laptop itself. Charging is unreliable. I cannot tell if the laptop is charging anymore
with the cable plugged in. I have to charge while the laptop is awake and then shut down or close the laptop lid.

### No GPU

- Can't export in Premiere Pro or render in After Effects
- Thought it was okay because I had a desktop before
- Presently want laptop capable of handling desktop level work (productivity)

### Mobile CPU

- Slow at opening apps even though "i5"
- Mobile CPU at the time meant dual core, but worse than the desktop i3 (LOL)
- I limited CPU speed to 90% on WIndows to avoid loud fans and to avoid future battery bloating incidents
- ~~I cannot watch twitch~~ I can confirm Twitch is watchable in 2024 on Fedora KDE.

Geekbench 5 results are 500 for single core and 590 for multi core.

### Webcam is 720p

Without perfect lighting, you will not look the same as you do in person. If I want
a laptop to last until 2032, it will need to have a 1080p webcam. This is not compromisable
which is why I chose the Razer Blade 14 instead of its Asus equivalent in 2022. In 2024 and probably beyond, my recommendation is the Asus Zephyrus G14.

### Storage

128 GB storage is enough for non-developers and non-photo/video people. I wasn't as
knowledgeable at programming in 2017 as I am today, which is why that 128 GB got absolutely
eaten and requires cleaning up the computer every 2 months or so; If I didn't
have to do this, I wouldn't have found out that VSCode does not clean up after
itself and creates many folders that aren't required for it to function.
The storage is almost full and this slows down the nvme SSD considerably.

Compared to Dave 2D's review at launch, the SSD performance today is at best half for reading and worse than a fifth when it comes to write performance. In 2024, not only is the storage not enough, this performance degradation reminds me of how slow my first PC was when I was using an HDD instead of an SSD. The write speed is one third of what an HDD would provide meaning that I'll be buying a new SSD when Black Friday comes around.

CrystalDiskMark Results (MB/s, R = Read, W = Write)

Device | My Blade Stealth | At Launch (Dave 2D) | w/ new SSD | Razer Blade 14 (2022)
-- | -- | -- | -- | --
SEQ1M - Q8T1 | 440.62R 42.58W | 1043R 159.7W | N/A | 6529.36R 2653.02W
SEQ1M - Q1T1 | 367.82R 28.52W | 520.9R 160.1W | N/A | 4142.25R 2169.57W
RND4k - Q32T1| 237.36R 20.05W | 941R 160.6W| N/A | 469.99R 287.14W
RND4k - Q1T1| 19.83R 20.45W | 43.38R 146.7W | N/A | 67.82R 149.92W

### Minor Faults

- Palm rest obviously not that big
- Edges are razor sharp. If you put shaving cream on your face, you can use this laptop to shave.

## Plans

Experimenting on this laptop so that I can make the best Linux desktop tutorial mankind has seen.
