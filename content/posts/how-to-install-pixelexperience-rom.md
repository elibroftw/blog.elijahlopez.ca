---
title: "How to Install and Root PixelExperience ROM for OnePlus 6T"
date: 2023-04-15T22:49:46-04:00
tags:
  - mobile
  - android
summary: "A detailed tutorial on installing and rooting PixelExperience ROM on OnePlus 6T, covering backup, tools, firmware upgrade, bootloader unlock, flashing (including dynamic partitions), Magisk rooting (SafetyNet), and troubleshooting common issues."
---

Installing the PixelExperience ROM took me more than 4 hours of my time and took a week total from the time I first tried installing the ROM. Some feedback for Android Custom ROM developers and tutorial writers/youtubers are: link to instructions in the original XDA post, do not assume that the user knows how to "enter" a recovery image, write thorough instructions rather than one portion of it, and stop promoting incorrect and unhelpful instructions. I have put everything I've learned together here for you and me to extend our phone's life.

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

Open a terminal window in the folder that will contain all android ROM related files. For me, this would be `"...android\oneplus-6T-fajita"`.

To open a terminal window, either search up cmd or windows terminal from Windows search.

## Upgrading to the Latest OxygenOS Firmware

You need to be running the latest firmware, else the recovery image might not work properly. This only applies if you soft-bricked your phone and unbricked it using my instructions. It's better to download the Stock ROM once on your PC and reuse it rather than make your phone download every time you reset your phone to OOS 10.

[OxygenOS 11.1.2.2](https://www.oneplus.com/support/softwareupgrade/details?code=PM1574156215016)

`adb push OnePlus6TOxygen_34.J.62_OTA_0620_all_2111252336_f6eda340d7af4e3e.zip /sdcard`

To perform a local upgrade, go to Settings > System > System updates > ⚙️ (top right) > Local upgrade.

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

- `copy_partitions.zip`, `vbmeta.img`, `boot.img`, `super_empty.img` from [evolution-x](https://sourceforge.net/projects/evolution-x/files/fajita/)
- [PixelExperience Plus ROM ZIP](https://get.pixelexperience.org/devices)

### Flashing the ROM

Like before, enable USB debugging.

> 1. Enable developer options by clicking "About phone" and then "build number" at least 5 times until you see a toast notification informing you that developer options are enabled
> 2. To get to developer options, click System (a menu before the above step) first and then "Developer options"
> 3. Enable "OEM unlocking" and "USB debugging"
> 4. Connect your device to your PC
>    - A popup should come up asking for USB debugging permissions

1. `adb reboot bootloader`
2. Flash the new retrofit dynamic partitions boot image & recovery

    ```sh
    fastboot flash vbmeta_a vbmeta.img
    fastboot flash vbmeta_b vbmeta.img
    fastboot flash boot_a boot.img
    fastboot flash boot_b boot.img
    ```

3. Erase the old android partitions with the following

    ```sh
    fastboot erase system_a
    fastboot erase system_b
    fastboot erase odm_a
    fastboot erase odm_b
    fastboot erase vendor_a
    fastboot erase vendor_b
    ```

4. From the bootloader, use volume buttons, and click "Recovery Mode" to boot into recovery
5. Volume down 3 times to Advanced and click power button.
6. Click power button to enter fastboot
7. Initialize the retrofit super partitions for each slot

    ```sh
    fastboot wipe-super super_empty.img
    fastboot set_active other
    fastboot wipe-super super_empty.img
    fastboot set_active other
    ```

8. Now enter recovery
9. Apply update > Apply from ADB
10. `adb sideload copy-partitions.zip`
11. On phone, select "Install anyways"
12. Select "Apply from ADB" again
13. `adb sideload PixelExperience_Plus_fajita-13.0-20230419-2046-OFFICIAL.zip` (different filename for you)
14. Select "Install anyways"
15. To go back, you can press the up arrow key first and then the power key
16. Factory reset (Format data)
17. Reboot to system (go back first)

### Updating the ROM

We'll get to this in the future.

## Rooting

### Downloads for Rooting

- [Python](https://www.python.org/) and add this to your Path environment variable
- Download or `git clone` [payload_dumper](https://github.com/vm03/payload_dumper) and extract its contents to a folder like `android/payload_dumper`

### Installing Magisk

1. Inside the `payload-dumper` folder, run `python -m pip install -r requirements.txt`
2. Extract the PixelExperience.zip in another folder (e.g. `oneplus-6T-fajita/`) and run `python payload_dumper.py path/to/payload.bin`
3. Copy `payload_dump/output/boot.img` to your phone's device
    - `adb push boot.img /sdcard/Download`
4. Follow [Magisk instructions](https://topjohnwu.github.io/Magisk/install.html#getting-started) to patch the boot image
    - Download and install the [Magisk app](https://github.com/topjohnwu/Magisk/releases/latest)
    - On your phone, patch `boot.img` with the Magisk app
        - Click "Install" beside Magisk
        - Method is "Select and Patch a File"
        - "LET'S GO"
    - Open a terminal in your oneplus-6T-fajita folder
    - `adb pull boot.img /sdcard/magisk_patched_[random_strings].img`
5. Reboot into recovery (enabled advanced restart in phone settings)
6. Flash the patched boot image
    - `fastboot flash boot path_to_magisk_patched_[random_strings].img`
7. Reboot, launch Magisk app and beside "App" click install
8. Install Root Checker from Google Play Store
    - In Root Chcker, Click "verify root" and see if there is a popup from Magisk

### Passing Play Integrity / SafetyNet Attestation

1. To your phone, download [MagiskHide Props Config](https://github.com/Magisk-Modules-Repo/MagiskHidePropsConf/releases/latest)
2. To your phone, download [Universal SafetyNet Fix](https://github.com/Displax/safetynet-fix/releases/latest)
    - In case these instructions don't work in the future, see if the [original fork has a more recent release](https://github.com/kdrag0n/safetynet-fix/releases/latest)
3. Open the Magisk app, click modules, install the two zip files from storage, and reboot only after installing the second zip
4. After reboot, open Magisk, click ⚙️ (top right), configure DenyList and add apps that you need to bypass
    - Show System apps
    - Deny all Google apps except for YouTube by searching "google"
    - Deny any apps that require safety checks like some banking apps
5. Enable denylist
6. Restart phone
7. Install [Termux](https://play.google.com/store/apps/details?id=com.termux)
8. Edit props (just in case)

    ```sh
    su  # GRANT ACCESS TEMPORARILY
    props
    2. Force BASIC key attestation
    d
    7   # Google
    5   # Google Nexus 6P. Don't know why this worked?
    y    # confirm prop changes
    e    # don't reboot
    # editing device fingerprint might not be needed
    props
    1. Edit Device fingerprint
    f     # certified fingerprint
    21    # OnePLus
    9       # 6T
    2       # Android 10
    y
    e   # don't reboot yet
    ```

9. In Magisk settings ⚙️, click hide the Magisk app and rename to "Manager" or whatever is easy for you to remember
10. Clear all data of Google Play Services, Google Play Store, and Google Wallet through the phone's settings
11. Confirm that the three apps above are on the deny list of Magisk
12. Restart phone
13. Open Google Wallet app / banking app
14. Check integrity status with the [Play Integrity API Checker](https://play.google.com/store/apps/details?id=gr.nikolasspyr.integritycheck)
    - First two lines should be green
    - Third line should be red, DO NOT LOCK THE BOOT LOADER
15. Check integrity status with the [YASNAC - SafetyNet Checker](https://play.google.com/store/apps/details?id=rikka.safetynetchecker)

### YouTube ReVanced

1. [Download ReVanced Manager](https://github.com/revanced/revanced-manager/releases/latest)
2. Open the manager
3. Patchcher
4. Select YouTube application
5. Check if current version matches recommended. If not install the recommended version from [apkpure](https://apkpure.com/youtube/com.google.android.youtube/versions)
6. Close and reopen the manager
7. Select Patcher > YouTube > Selected patches > Recommended > Uncheck microG
8. Done.
9. Click patch and wait for 10 seconds
10. Click install root

The root install does not remove ads from the home screen, but it's not that big of a deal.

## Troubleshooting

### To get out of CrashDump and into bootloader

This error occurs when the TWRP version you flashed is incompatible with the Android version running on the phone. For example, a \_12 TWRP version is incompatible with Android 11 and a \_11 TWRP version is incompatible with Android 12.

1. Hold Pwr+Vol Up until phone buzzes and then immediately
2. Hold Pwr+Vol Up+Vol Down to boot bootloader (let go when you read fastboot mode)
3. Flash the correct TWRP boot image version for your device

### Unbricking your Phone

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

## References and Other Links

1. [PixelExperience First Time Install](https://github.com/snnbyyds/PE-retrofit_dynamic_partitions-Migration/blob/main/README.md)
2. [Evolution-X Install Instructions](https://gist.github.com/jabashque/226406e5210bed057817a89608b20311)
3. [Recovery Files for OnePlus 6](https://sourceforge.net/projects/oneplus-6-series/files/)
4. [The Recommended TWRP](https://sourceforge.net/projects/sn-roms/files/TWRP/)
5. [Universal Safetney Fix GitHub Issue](https://github.com/kdrag0n/safetynet-fix/issues/248)
