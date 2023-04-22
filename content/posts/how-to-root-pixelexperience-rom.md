---
title: "How to Root PixelExperience ROM for OnePlus 6T"
date: 2023-04-15T22:49:46-04:00
hidden: true
tags: [
    'mobile',
    'android',
]
---
<!-- https://droidwin.com/how-to-boot-any-oneplus-device-to-edl-mode/ -->
<!-- https://blog.elijahlopez/posts/how-to-root-pixelexperience-rom/ -->

This is a more explicit guide than the one found on [XDA](https://forum.xda-developers.com/t/guide-installing-pixelexperience-11-root-step-by-step.4300237/) and is here for me to reference as I will be getting a new phone and will thus give my OnePlus 6T a breath of fresh air.

{{< toc >}}

## Back up your data

Make sure to backup everything. Some things to back up:

- Pictures folder
- DCIM/Camera folder
- Your two factor authenticator app (to google)
- Backup your google 2FA keycodes so that you can login to google with ease if you are away from home
- Backup your contacts to a VCF file

## Platform tools

Download [platform tools](https://developer.android.com/tools/releases/platform-tools) and extract it to a folder `android/platform-tools`. This folder should be added
to your PATH environment variable. My [Windows guide for adding a directory to Path](content\posts\windows-add-to-PATH-environment-variable.md)

Open a terminal window in the folder that will contain all android ROM related files. For me, this would be "...android\oneplus-6T-fajita".

To open a terminal window, either search up cmd or windows terminal from Windows search.

## Unlocking the bootloader

This will wipe your device, so again, backup everything.

1. Enable developer options by clicking "About phone" and then "build number" at least 5 times until you see a toast notification informing you that developer options are enabled
2. To get to developer options, click System (a menu before the above step) first and then "Developer options"
3. Enable "OEM unlocking" and "USB debugging"
4. Connect your device to your PC
    - A popup should come up asking for USB debugging permissions
5. run `adb reboot bootloader`
6. Once your phone shows the green "START" text, run `fastboot oem unlock`
7. On your phone, select "UNLOCK THE BOOTLOADER"
    - Press the volume down key twice on your phone and then press the power key
8. Wait 5 minutes for your phone to wipe and boot
9. Skip setup so that you can access your phone's settings and re do steps 1 to 4

## Flashing the PixelExperience ROM Corrected

### Downloads for ROM Installation

- [the recommended TWRP](https://sourceforge.net/projects/sn-roms/files/TWRP/)
- [PixelExperience Plus ROM](https://get.pixelexperience.org/devices)
- [Python](https://www.python.org/) and add this to your Path environment variable
- Download or `git clone` [payload_dumper](https://github.com/vm03/payload_dumper) and extract its contents to a folder like `android/payload_dumper`

### Flashing Instructions

Like before, enable USB debugging.

> 1. Enable developer options by clicking "About phone" and then "build number" at least 5 times until you see a toast notification informing you that developer options are enabled
> 2. To get to developer options, click System (a menu before the above step) first and then "Developer options"
> 3. Enable "OEM unlocking" and "USB debugging"
> 4. Connect your device to your PC
>    - A popup should come up asking for USB debugging permissions

1. `adb reboot bootloader`
2. `fastboot flash boot TWRP-3.7.0_12-fajita-2.img`
3. `fastboot reboot recovery`
4. Install the PixelExperience zip

<!-- https://wiki.pixelexperience.org/devices/fajita/install/ -->

1. Download the [PixelExperience Plus ROM](https://get.pixelexperience.org/devices) for your device
2. Download the latest [TWRP](https://dl.twrp.me/fajita/) you can find for your device. OnePlus 6T
 including the recovery image (this sii he first thing you will flash)
3. Flash the PixelExperience ROM. Won't share details on how to do that, just follow an install guide. For example, this is the install guide for [Oneplus 6T fajita](https://wiki.pixelexperience.org/devices/fajita/install/). These instructions are very poor for noobs like me, so here are a few helpful commands.
    - Reboot into the bootloader: `adb reboot bootloader`
    - Flashing the recovery image (rename to yours): `fastboot flash boot PixelExperience_Plus_fajita-13.0-20230419-2046-OFFICIAL.img`
    - Reboot into "recovery": `fastboot reboot recovery`
4. Install [Python](https://www.python.org/) and make sure it is added to PATH. You can check if Python is on PATH if typing `python --version` in a new terminal (powershell or CMD on Windows) results in the output "Python 3.X.Y".
5. Download or `git clone` [payload_dumper](https://github.com/vm03/payload_dumper) and extract its contents to a folder like `android/payload_dumper`
6. Inside the extracted folder, run `python -m pip install -r requirements.txt`
7. Extract the rom.zip in another folder and run `python payload_dumper.py path_to_payload.bin`
8. Copy boot.img to your phone's device
    - `adb push boot.img /sdcard/Download`
9. Follow [Magisk instructions](https://topjohnwu.github.io/Magisk/install.html#getting-started) to patch the boot image
    - Check ramdisk and if there is a separate vbmeta partition
    - Patch boot.img with [Magisk app](https://github.com/topjohnwu/Magisk/releases/latest)
    - `adb pull boot.img /sdcard/magisk_patched_[random_strings].img`
10. Reboot into recovery
11. Flash the new boot.img
    - `fastboot flash boot path_to_magisk_patched_[random_strings].img`
    - If you have a separate `vbmeta` partition, your data might be wiped:
        - `fastboot flash vbmeta --disable-verity --disable-verification vbmeta.img`
12. Reboot and launch Magisk app to bootstrap the Magisk app and reboot again

## Unbricking your Phone

1. Download MSMDownloadTool and extract to a folder
    - [download link one](https://androidfilehost.com/?fid=17248734326145733776)
    - [download link alternative](https://androidfilehost.com/?fid=1395089523397966003)
    - I keep all my android ROM related files in a folder called `android/device-name`
2. Download and install [Qualcomm HS-USB QDLoader 9008 Drivers](https://droidwin.com/download-install-qualcomm-hs-usb-qdloader-9008-drivers/#Download_Qualcomm_HS-USB_QDLoader_9008_Drivers)
3. Reboot PC
4. Open MSM Download Tool
5. Power off and disconnect phone
6. Hold volume up and down buttons on phone
7. While holding the buttons, connect the phone to the PC
8. Press start in MSM Download Tool
9. Takes 10-20 minutes
