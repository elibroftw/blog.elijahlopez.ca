---
title: "[Linux] Touchpad Not Working After Waking From Suspend"
date: 2024-09-29T20:28:08-04:00
tags:
  - linux
aliases:
  - /posts/linux-touchpad-not-working-after-waking-from-suspend/
  - /posts/linux-touchpad-not-working-after-sleep/
  - /posts/linux-touchpad-not-working-after-suspend/
  - /posts/linux-touchpad-does-not-work-after-waking-from-sleep/
  - /posts/linux-touchpad-does-not-work-after-suspend/
  - /posts/linux-touchpad-does-not-work-after-sleep/
  - /posts/how-to-fix-linux-touchpad-after-sleep/
  - /posts/how-to-fix-linux-touchpad-after-suspend/
  - /posts/how-to-fix-linux-touchpad-after-waking-from-sleep/
  - /posts/how-to-fix-linux-touchpad-not-working/
  - /posts/how-to-fix-linux-touchpad-not-working-after-suspend/
  - /posts/how-to-fix-linux-touchpad-not-working-after-sleep/
  - /posts/how-to-fix-linux-touchpad-not-working-after-waking-from-suspend/
  - /posts/how-to-fix-linux-touchpad-not-working-after-waking-from-suspend/
summary: "Solution for Linux touchpad not working after suspend, including troubleshooting steps and an automation script."
---

So the touchpad can no longer be used after you wake from sleep? Well I am here with the solution after trying countless distros and still having this problem. The laptop I use is the 2016 Razer Blade Stealth and the distro I've settled on is Fedora KDE. The specs and my 5 years later review can be found [here](/posts/razer-blade-stealth-late-2016/#specs).

To fix the issue you need to try running each of these lines in the terminal (Ctrl + Alt + T to open a Terminal using the keyboard).

- `sudo rmmod i2c_hid_acpi && sudo modprobe i2c_hid_acpi`
- `sudo rmmod i2c_hid && sudo modprobe i2c_hid`
- `sudo rmmod psmouse  && sudo modprobe psmouse`
- `sudo rmmod i2c_i801  && sudo modprobe i2c_i801`
- `sudo rmmod rmi_smbus && sudo modprobe rmi_smbus`

Aside: `modprobe -r` and rmmod do effectively the same thing

Once you found which command works, we want a permanent automatic solution so that we don't have to do this every time. We need to create a script that will run our command on wake.

1. In your terminal, run the following command `sudo nano /lib/systemd/system-sleep/restart-touchpad`
2. Paste (Ctrl + Shift + V) the following content and replace the lines 4 & 5 with the commands you used. Make sure to use only your keyboard to traverse the lines. I find it easier to not do any selection. If you can't get it to work and want to use a more user friendly text editor, you replace `nano` in the command with `kate` (for KDE desktops) or `gedit` (for GNOME desktops).

    ```sh
    #!/usr/bin/env bash

    if [[ $1 == post ]]; then
        sudo rmmod  i2c_hid_acpi
        sudo modprobe i2c_hid_acpi
    fi
    ```

3. Save the file using Ctrl + S
4. Exit nano by using Ctrl + X
5. Make the script we wrote executable `sudo chmod +x /lib/systemd/system-sleep/restart-touchpad`

My solution has been adapted by reading a few different sources. Yes, even the people asking questions are helpful because the solutions that don't work for them can be incorporated for others!

- https://askubuntu.com/a/1083546
- https://unix.stackexchange.com/a/526488
- https://askubuntu.com/questions/577525/alternative-to-running-rmmod-and-modprobe-at-every-boot
- https://discussion.fedoraproject.org/t/touchpad-dont-work-after-suspended/73733

### Some Other Thoughts

This was the biggest issue hindering using Linux on my old laptop. No distro could fix it out of the box but I've decided to start working on a Noob Friendly Mega Tutorial on Moving from Windows to Linux Desktop. This work has obviously paid off. Another red flag I solved yesterday was getting OBS to work. That required installing OBS via flatpak instead of the native version recommended by default in the Discover app store.

One of the biggest challenges in Linux Desktop was figuring out what the right distro is. It took me years to finally settle on recommending Fedora KDE. My use cases involved support for fractional scaling on multiple monitors which Linux Mint does not support, working with SecureBoot which distros like Nobara won't support, supporting status icons out the box which GNOME hates, and not using snaps (i.e. not Ubuntu and not an Ubuntu fork) since using Snaps is worse than using Windows (I was convinced after watching [Ubuntu's Decline by Chris Titus Tech](https://youtu.be/pMfqCzbSmQU)).

My test device is closer to being in a state where I can gift it to someone else. There's only a few more hurdles to get through with one being how to fix the damn webcam and another being re-enabling secure boot!
