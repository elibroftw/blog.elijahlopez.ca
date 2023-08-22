---
title: "How to Install macOS 12 Monterey on VirtualBox Windows 11"
date: 2023-08-15T21:15:51-04:00
draft: false
tags: [
    'windows',
    'tutorial',
    'mobile'
]
---

For reference: my laptop is the Razer Blade 14 2022 with [AMD Ryzen 9 6900HX](https://www.amd.com/en/product/11541). It supports AMD-V.

Ventura (13) didn't work for me, so I will try Monterey (12).

Disable "Memory integrity" under Core isolation in the Windows Security app. Restart computer. This will disable the Hyper-V hypervisor.
You can do this anytime before starting the virtual machine. This was the roadblock that prevented me from running the virtual machine.

### Creating and Configuring the Virtual Machine

Writing this tutorial so that you can have an easier time.

Download [VirtualBox AND the Extension Pack](https://www.virtualbox.org/wiki/Downloads)

- Install VirtualBox and then install the Extension Pack

- [macOS 12 ISO download](https://www.mediafire.com/file/4fcx0aeoehmbnmp/macOS+Monterey+by+Techrechard.com.iso/file)
- [macOS 13 ISO download](https://www.mediafire.com/file/dcji26zay7s3p8r/macOS+Ventura+ISO+for+VM+by+techrechard.com.iso/file)

Create a new Virtual machine, with the name "macOS 12", and select file above for the ISO.

- Memory: 7840 MB
- Processors: 4
- New Virtual Hard Drive Storage: 100GB

Click Setting (cog)

- Display: 128MB (max) Video Memory
- USB: USB 3.0

Close VirtualBox

Then run these commands in an administrative Powershell. If you are using Command Prompt, use `cd` instead of Set-Location.

```powershell
Set-Location "C:\Program Files\Oracle\VirtualBox"
.\VBoxManage.exe modifyvm "macOS 12" --cpuidset 00000001 000106e5 00100800 0098e3fd bfebfbff
.\VBoxManage.exe setextradata "macOS 12" "VBoxInternal/Devices/efi/0/Config/DmiSystemProduct" "iMac19,3"
.\VBoxManage.exe setextradata "macOS 12" "VBoxInternal/Devices/efi/0/Config/DmiSystemVersion" "1.0"
.\VBoxManage.exe setextradata "macOS 12" "VBoxInternal/Devices/efi/0/Config/DmiBoardProduct" "Iloveapple"
.\VBoxManage.exe setextradata "macOS 12" "VBoxInternal/Devices/smc/0/Config/DeviceKey" "ourhardworkbythesewordsguardedpleasedontsteal(c)AppleComputerInc"
.\VBoxManage.exe setextradata "macOS 12" VBoxInternal2/EfiGraphicsResolution 1920x1080
.\VBoxManage.exe setextradata "macOS 12" GUI/ScaleFactor 1.25
.\VBoxManage.exe setextradata "macOS 12" "VBoxInternal/TM/TSCMode" "RealTSCOffset"
```

On AMD systems,

```powershell
.\VBoxManage.exe modifyvm "macOS 12" --cpu-profile "Intel Core i7-6700K"
```

On Intel systems,

```powershell
.\VBoxManage.exe setextradata "macOS 12" "VBoxInternal/Devices/smc/0/Config/GetKeyFromRealSMC" 1
```

If you get an error,

```powershell
.\VBoxManage.exe setextradata "macOS 12" "VBoxInternal/Devices/smc/0/Config/GetKeyFromRealSMC" 0
```

```powershell
.\VBoxManage.exe setextradata "macOS 12"  "VBoxInternal/Devices/efi/0/Config/DmiSystemFamily" "MacBook Pro"
.\VBoxManage.exe setextradata "macOS 12"  "VBoxInternal/Devices/efi/0/Config/DmiSystemProduct" "MacBookPro11,2"
.\VBoxManage.exe setextradata "macOS 12"  "VBoxInternal/Devices/efi/0/Config/DmiSystemSerial" "NO_DEVICE_SN"
.\VBoxManage.exe setextradata "macOS 12" "VBoxInternal/Devices/efi/0/Config/DmiSystemUuid" "CAFECAFE-CAFE-CAFE-CAFE-DECAFFDECAFF"
.\VBoxManage.exe setextradata "macOS 12" "VBoxInternal/Devices/efi/0/Config/DmiOEMVBoxVer" "${DmiOEMVBoxVer}"
.\VBoxManage.exe setextradata "macOS 12" "VBoxInternal/Devices/efi/0/Config/DmiOEMVBoxRev" "${DmiOEMVBoxRev}"
.\VBoxManage.exe setextradata "macOS 12" "VBoxInternal/Devices/efi/0/Config/DmiBIOSVersion" "string:MBP7.89"
.\VBoxManage.exe setextradata "macOS 12" "VBoxInternal/Devices/efi/0/Config/DmiBoardProduct" "Mac-3CBD00234E554E41"
.\VBoxManage.exe setextradata "macOS 12" "VBoxInternal/Devices/efi/0/Config/DmiBoardSerial" "NO_LOGIC_BOARD_SN"
```

Open VirtualBox and press Start for macOS 12. Wait a couple minutes.

Follow [Fixing iMessage and other services with OpenCore](https://dortania.github.io/OpenCore-Post-Install/universal/iservices.html#using-gensmbios)

### Install Mac OS X

 In the menu bar of VirtualBox: View > Virtual Screen 1 to set the scale smaller or bigger (my laptop is QHD which is why I scaled to 125%)

 TIP: Right Ctrl is the escape key to escape the virtual machine and use the host machine

1. Select a language and then press the     right arrow icon
2. Click Disk Utilty and then Continue
3. On the left sidebar, click "VBOX HARDDISK Media" and then click Erase in the top right bar
4. Enter "macOS 12 HDD" as the name and click Erase, and then Done.
5. Close the Disk Utility by click the red circle in the top left
6. Click Install macOS 12 beta and then continue
7. Click Continue, agree, and agree
8. Click the HDD we just formatted and then click Continue
9. The installation should take 40 minutes
10. Do not log into Apple ID until after you've gone through the setup
11. Right Ctrl + F to enter full screen

### Installing Guest Additions

[Stack Overflow](https://stackoverflow.com/questions/41691803/how-to-install-guest-addition-in-mac-os-as-guest-and-windows-machine-as-host)

### Troubleshooting

A critical error has occurred while running the virtual machine

- [I have a 64bit host, but can't install 64bit guests](https://forums.virtualbox.org/viewtopic.php?f=1&t=62339)
