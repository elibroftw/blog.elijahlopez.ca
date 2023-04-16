---
title: "How to Root PixelExperience ROM"
date: 2023-04-15T22:49:46-04:00
hidden: true
tags: [
    'mobile',
    'android',
]
---

<!-- https://blog.elijahlopez/posts/how-to-root-pixelexperience-rom/ -->

This is a more explicit guide than the one found on [XDA](https://forum.xda-developers.com/t/guide-installing-pixelexperience-11-root-step-by-step.4300237/) and is here for me to reference as I will be getting a new phone and will thus give my OnePlus 6T a breath of fresh air.

1. Download the [PixelExperience Plus ROM](https://get.pixelexperience.org/devices) for your device
2. Flash the PixelExperience ROM. Won't share details on how to do that, just follow an install guide. For example, this is the install guide for [Oneplus 6T fajita](https://wiki.pixelexperience.org/devices/fajita/install/).
3. Install [Python](https://www.python.org/) and make sure it is added to PATH. You can check if Python is on PATH if typing `python --version` in a new terminal (powershell or CMD on Windows) results in the output "Python 3.X.Y".
4. Download `https://github.com/vm03/payload_dumper` and extract its contents
5. Inside the extracted folder, run `python -m pip install -r requirements.txt`
6. Extract the rom.zip in another folder and run `python payload_dumper.py path_to_payload.bin`
7. Copy boot.img to your phone's device
    - `adb push boot.img /sdcard/Download`
8. Follow [Magisk instructions](https://topjohnwu.github.io/Magisk/install.html#getting-started) to patch the boot image
    - Check ramdisk and if there is a separate vbmeta partition
    - Patch boot.img with [Magisk app](https://github.com/topjohnwu/Magisk/releases/latest)
    - `adb pull boot.img /sdcard/magisk_patched_[random_strings].img`
9. Reboot into recovery
10. Flash the new boot.img
    - `fastboot flash boot path_to_magisk_patched_[random_strings].img`
    - If you have a separate `vbmeta` partition, your data might be wiped:
        - `fastboot flash vbmeta --disable-verity --disable-verification vbmeta.img`
11. Reboot and launch Magisk app to bootstrap the Magisk app and reboot again
