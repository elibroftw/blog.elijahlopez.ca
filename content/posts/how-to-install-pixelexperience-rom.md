---
title: "How to Install and Root PixelExperience ROM for OnePlus 6T"
date: 2023-04-15T22:49:46-04:00
tags: [
    'mobile',
    'android',
]
---

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

## Upgrading to the Latest OxygenOS Firmware

You need to be running the latest firmware, else the recovery image won't work properly. This means upgrading every single time you unbrick the phone. It's better to download once and reuse rather than make the phone download every time you unbrick your phone.

[OxygenOS 11.1.2.2](https://www.oneplus.com/support/softwareupgrade/details?code=PM1574156215016)

`adb push OnePlus6TOxygen_34.J.62_OTA_0620_all_2111252336_f6eda340d7af4e3e.zip /sdcard`

To perform a local upgrade, go to Settings > System > System updates > Cog (top right) > Local upgrade.

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
- [The Recommended TWRP](https://sourceforge.net/projects/sn-roms/files/TWRP/)
- [PixelExperience Plus ROM ZIP](https://get.pixelexperience.org/devices)
- [Python](https://www.python.org/) and add this to your Path environment variable
- Download or `git clone` [payload_dumper](https://github.com/vm03/payload_dumper) and extract its contents to a folder like `android/payload_dumper`

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
13. `adb sideload PixelExperience_Plus_fajita-13.0-20230419-2046-OFFICIAL.zip`
14. Select "Install anyways"
15. To go back, you can press the up arrow key first and then the power key
16. Factory reset (Format data)
17. Reboot to system (go back first)

## Rooting

1. Download the [PixelExperience Plus ROM](https://get.pixelexperience.org/devices) for your device
2. Inside the `payload-dumper` folder, run `python -m pip install -r requirements.txt`
3. Extract the rom.zip in another folder and run `python payload_dumper.py path_to_payload.bin`
4. Copy `payload_dump/output/boot.img` to your phone's device
    - `adb push boot.img /sdcard/Download`
5. Follow [Magisk instructions](https://topjohnwu.github.io/Magisk/install.html#getting-started) to patch the boot image
    - Check ramdisk and if there is a separate vbmeta partition
    - Patch boot.img with [Magisk app](https://github.com/topjohnwu/Magisk/releases/latest)
    - `adb pull boot.img /sdcard/magisk_patched_[random_strings].img`
6. Reboot into recovery
7. Flash the new boot.img
    - `fastboot flash boot path_to_magisk_patched_[random_strings].img`
    - If you have a separate `vbmeta` partition, your data might be wiped:
        - `fastboot flash vbmeta --disable-verity --disable-verification vbmeta.img`
8. Reboot and launch Magisk app to bootstrap the Magisk app and reboot again

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

## Resources

<!--  -->

<!--  -->
<!--  -->
<!--  -->
1. https://github.com/snnbyyds/PE-retrofit_dynamic_partitions-Migration/blob/main/README.md
2. https://gist.github.com/jabashque/226406e5210bed057817a89608b20311
3. https://sourceforge.net/projects/oneplus-6-series/files/
