---
title: "How to Install MacOS Ventura (13) on VirtualBox Windows 11"
date: 2023-08-15T21:15:51-04:00
draft: false
tags: [
    'windows',
    'tutorial',
    'mobile'
]
---

For reference: my laptop is the Razer Blade 14 2022 with [AMD Ryzen 9 6900HX](https://www.amd.com/en/product/11541). It supports AMD-V.

Disable "Memory integrity" under Core isolation in the Windows Security app. Restart computer. This will disable the Hyper-V hypervisor.
You can do this anytime before starting the virtual machine. This was the roadblock that prevented me from running the virtual machine.

### Creating and Configuring the Virtual Machine

Writing this tutorial so that you can have an easier time.

Download [VirtualBox AND the Extension Pack](https://www.virtualbox.org/wiki/Downloads)

- Install VirtualBox and then install the Extension Pack

[MacOS 13 ISO download](https://www.mediafire.com/file/dcji26zay7s3p8r/macOS+Ventura+ISO+for+VM+by+techrechard.com.iso/file)

Create a new Virtual machine, with the name "macOS 13", and select file above for the ISO.

- Memory: 7840 MB
- Processors: 4
- New Virtual Hard Drive Storage: 100GB

Click Setting (cog)

- Display: 128MB (max) Video Memory
- USB: USB 3.0

Close VirtualBox

Then run these commands in an administrative command prompt

```cmd
cd C:\Program Files\Oracle\VirtualBox
VBoxManage modifyvm "macOS 13" --cpuidset 00000001 000106e5 00100800 0098e3fd bfebfbff
VBoxManage setextradata "macOS 13" "VBoxInternal/Devices/efi/0/Config/DmiSystemProduct" "iMac19,3"
VBoxManage setextradata "macOS 13" "VBoxInternal/Devices/efi/0/Config/DmiSystemVersion" "1.0"
VBoxManage setextradata "macOS 13" "VBoxInternal/Devices/efi/0/Config/DmiBoardProduct" "Iloveapple"
VBoxManage setextradata "macOS 13" "VBoxInternal/Devices/smc/0/Config/DeviceKey" "ourhardworkbythesewordsguardedpleasedontsteal(c)AppleComputerInc"
VBoxManage setextradata "macOS 13" VBoxInternal2/EfiGraphicsResolution 1920x1080
VBoxManage setextradata "macOS 13" "VBoxInternal/TM/TSCMode" "RealTSCOffset"
```

On AMD systems,

```cmd
VBoxManage modifyvm "macOS 13" --cpu-profile "Intel Core i7-6700K"
```

On Intel systems,

```cmd
VBoxManage setextradata "macOS 13" "VBoxInternal/Devices/smc/0/Config/GetKeyFromRealSMC" 1
```

If you get an error,

```cmd
VBoxManage setextradata "macOS 13" "VBoxInternal/Devices/smc/0/Config/GetKeyFromRealSMC" 0
```

Open VirtualBox and press Start for macOS 13. Wait a couple minutes.

### Install Mac OS X

1. Select a language and then press the right arrow icon
2. Click Disk Utilty and then Continue
3. On the left sidebar, click "VBOX HARDDISK Media" and then click Erase in the top right bar
4. Enter "macOS HDD" as the name and click Erase, and then Done.
5. Close the Disk Utility by click the red circle in the top left
6. Click Install macOS 13 beta and then continue
7. Click Continue, agree, and agree
8. Click the HDD we just formatted and then click Continue
9. The installation should take 40 minutes

### Troubleshooting

A critical error has occurred while running the virtual machine

- [I have a 64bit host, but can't install 64bit guests](https://forums.virtualbox.org/viewtopic.php?f=1&t=62339)
