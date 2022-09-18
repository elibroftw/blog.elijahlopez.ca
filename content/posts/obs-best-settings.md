---
title: "OBS Best Settings and Trouble Shooting"
date: 2022-02-19T13:53:14-05:00
draft: false
---

## OBS Windows Washed Out Colors Fix

A fix that worked for some people is disabling HDR in Windows, however,
I didn't even have an option to enable/disable HDR and still had the issue.

1. Open NVIDIA Control Panel
2. Click "Adjust Video Color Settings" from the menu on the left side
3. Click the monitors you use
4. Click "With the NVIDIA settings" under 'How do you want to make color adjustments?'
5. Set brightness to 55% (+5%)
6. Set Saturation to 65% (+15%)
7. Set Gamma to 0.95 (-0.05) for Red, Green, and Blue (locked)
8. Under 'Advanced', set Dynamic Range to Full (0-255)
9. In OBS Settings, under advanced video, Color Format = NV12, Color Space = Rec. 709, Color Range = **Limited**

The only downside to this solution, is that the yellows for Windows Explorer
will be a tad strong because of the saturation boost, but its not distracting.

## OBS Best Settings

### Output

1. Set streaming bitrate to 6000 Kbps (max)
2. Recording Path `C:/Users/%USERNAME%/Videos/Captures` (replace %USERNMAE% with your user)
3. Recording Quality of High Quality or Indistinguishable
4. Recording Format of mkv (in Advanced, check auto remux to mp4)

### Advanced

A recap of what should've been set already

1. Color Format of "NV12 (8-bit, 4:2:0, 2 planes)"
2. Color Space of "Rec. 709"
3. Color Range of "Limited"
4. Check "Automatically remux to mp4"

After a recording test and a computer restart, you can try NV12 again as below.

Color Format: **NV12**
Color Range: **Partial**
Color Space: **sRGB**
