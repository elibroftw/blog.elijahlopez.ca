---
title: "Linux USB Formatting Issues"
date: 2022-07-24T21:03:20-04:00
draft: false
tags: [
    "linux",
    "windows"
]
---

When trying to test out multiple Linux distros on multiple
USB sticks, I ran into this horrible error. The creators of Balena Etcher
simply do not care about users who soft brick their USBs. Rufus and Balena
developers simply say that their software cannot hard brick the USB,
which is a good thing but they provide 0 support in fixing the issue.

I am here to share my findings since solutios found online are in parts.

Operating System: Windows

How do you fix the error and other errors like:

- the volume was created successfully but not formatted
- Please Insert Disk Into Removable Disk

Like my other Linux tutorial on how to move a parititon in Windows, a parition tool is very useful.
The [MiniTool Parition Wizard](https://www.partitionwizard.com/free-partition-manager.html) was very handy.
Open this tool up, right click the USB or drive you want to fix, and click wipe drive and fill the drive with 0s.
This should take 10 minutes.

Afterwards, you can either format the drive in Windows or run Balena Etcher to flash another ISO.
