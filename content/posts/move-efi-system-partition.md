---
title: "How to Move EFI (MSR) System Partition"
date: 2021-08-30T22:48:20-05:00
draft: false
summary: "Learn how to effectively move your EFI system partition to the start of the disk using GPARTED or AOMEI Partition Assistant. This guide covers step-by-step instructions for Windows and Linux users."
---

To the start of the disk.

## Prerequisites

4GB+ USB
Some intuition

This took way too long for such a simple solution. Suppose you want to move the system EFI partition to the start of your disk because it was in after an unallocated or unused partition.

What you'll need is a live USB that has GPARTED on it. I suggest using a Linux distro live USB, in my case Zorin OS (Core / Lite) since they usually come with gparted. If you want the fastest way however, you can use [gparted live](https://gparted.org/download.php).

Once you got the ISO file of the live distro (or gparted), you can use balenaEtcher to burn the ISO to a USB. This tool is way simpler and intuitive than Rufus or Fedora's burning tool (which does not work for other ISO's!).

Once you've burned the ISO, simply restart your computer and try to get to the boot menu. For example, on my Razer blade stealth, I had to mash the F12 button. In the boot menu, you should see your USB. Click on the USB name without any partition X, unless they all are partition X.

Now you want to try the distro, so make sure you are clicking the try options and not the install. On the gparted live, you'll probably just boot into the OS.

Now that you are in the OS, press the Special key (Windows key on Windows), search for "gparted" and open it.

In gparted you want to select the EFI partition first, click move, and set the space before to the minimum, and the space after to the maximum without changing the partition size. Next you want to do the same thing with the MSR partition. You'll encounter some warnings about your
system may not work after but that's probably if you don't move the MSR partition. Click apply operations (the checkmark) and reboot your machine. You'll see in the disk management tool that the EFI partition has moved and now you can expand or merge the usable partition.

I am not responsible if your system breaks. I am simply stating the solution that I came up with myself that I wish someone told me about earlier.

If you need to move unallocated space to the right of a volume, use [AOMEI Partition Assistant Standard Edition](https://www2.aomeisoftware.com/download/pa/PAssist_Std.exe).
The software boots windows into a secure environment where it can safely perform the long process of moving the partition so that the unallocated space is on the right side.
