---
title: "Issues With Linux"
date: 2022-02-26T12:44:37-05:00
draft: true
---

I've used Raspian (~2014), Ubuntu GNOME (~2016), Manjaro KDE (2020), Fedora, Zorin (2021).

My definition of a reason is: An issue/problem requiring a convoluted process to solve; Also something so simple that shouldn't have required me to use the terminal in order to unlock (fractional scaling should be allowed and not a tick box or a command).

## Poor Installation Tutorials

Just look at any tutorial for flashing an ISO. Generic tutorials tell you to use Rufus, an ugly and non-intuitive UI. Fedora has their own flash tool which looks nice but does not work on other distros (I broke two of my USB's).

I only found about balenaEtcher, the most intuitive ISO flash tool by pure luck when searching for something not about flashing ISOs.

With Debian, the tutorials tell you to use free-[software] ISO and make it too complicated just to download the non-free-[software] ISO. Then there is the language used to describe ISO's. CD: an ISO that lets you install Debian and requires internet. DVD: live distro no requiring an internet connection. I'll get some guy in the comments nitpicking my interpretation but the Debian explanation is not succinct at all.

I'm speaking from the point of a practical user who also programs. I love keyboard shortcuts, automation, and aesthetic design. I current dual boot Zorin OS and Windows on my laptop. I found that Zorin OS looked the nicest but I also realized that the only reason I was able to install it was luck. I flashed the Zorin OS 15 ISO in 2020 and only had motivation to dual boot in 2021 when Zorin OS 16 was out. When I tried to install Zorin OS 15, I ran into an issue so instead of giving up I could just try installing 16 as the problem may have been patched.

## Can't Shutdown Easily

A great and Windows comparable Linux distro should require minimal changes and should have a tips section. For example it's faster to shutdown using "Alt + F2 -> poweroff" than it is to use your mouse or searching (not in the menu) for shutdown, clicking enter, pressing the right key, and pressing enter. Why is the default click cancel instead of Shut down? On Windows it's just Alt + F4 on the desktop and an Enter.

## Firefox Does Not Work Intuitively (GNOME)

- On Windows, to modify a tab, simply use Ctrl + # to go to a specific tab
- On GNOME, the tradition is to use Alt + #instead of Ctrl + # to switch tabs but Chrome allows Ctrl unlike Firefox..
- The solution is to use a 3rd party extension that "is not actively monitored for security by Mozilla."
- And on my favourite distro, Zorin OS, the home page is overwritten on every log in to <https://start.zorin.com/> which uses Google primarily. Are they even paid by Google to do that?

## No Default Shortcut to Open up the File Explorer

Yes the technical term on Linux is "nautilus" but I am a very practical person, and File Explorer is the most concise manner to communicate an application that explores files.

On Windows, it's simply Super+e . Most Linux distros? You have to know and create a keyboard shortcut in settings for the command nautilis --browser -w . This issue is not present on Zorin OS, but it was on Manjaro, and probably Fedora.

Let's criticize the file explorer even more. I can't create new files in the directory through a right click menu. I can't access the right click menu if I'm using list mode and the folder is full of files. On Windows, a right click is applied on the folder if the file is not selected, but on Nautilis, too bad so sad, did you mean to right click a file? It's not a big deal since the right click menu in Nautlis is only useful for accessing properties since its other features can be done using keyboard shortcuts (Ctrl +C, Ctrl + V, Ctrl +Shift+N).

One last head ache is the inability to launch commands from the address bar… I want the best of GUI and command line, not just a GUI and not just a terminal.

## Installing Custom Programs is a HEADACHE

Applies to: Fedora

On Windows, installers don't even need administrative privileges to install programs and they still show up in the startup menu, but lets look at the worst case, where the application is shipped as an archive which is equivalent on Linux when the application is not available on a centralized location.

The example I'll be using is Discord. On Linux, first let's download the .tar.gz, which will automatically be downloaded to the Downloads folder as intended. Yes on Debian, there is a .deb .
On Windows the procedure for installing via zips, is extracting to a folder, moving that folder to a location like C:/CustomPrograms, creating a shortcut of the program (context menu), and moving the shortcut to Start Menu/Programs.

On Linux, we are lucky that Discord came with the shortcut equivalent of discord.desktop . I found out that the Linux equivalent for the application menu is /usr/share/applications.

Now that we can open up the file explorer easily (Super + E), where is the root folder (This PC on Windows) / ? For no reason, the root directory is not pinned on the left tab of the file explorer. You can do Ctrl + L, /, Enter to get to the root folder. It is much quicker to just type /usr/share/applications in the address bar but root access isn't just required for this one folder.

I do not have the permission to paste files into the directory. So let me get this straight. By default, I have to get permission from myself (sudo) just to create a shortcut on the application menu? And not just that, Nautilis won't even ask me for permission but will just tell me it lacks the permission? "Ask and you shall receive", but I guess the author never heard of that one. They do this in the same of security, but I say I should be able to drink wine out of both the cup of Freedom and Security.

A normal user would simply give up at this point, torrent Windows (if money is a problem) and use it.

## How Can Linux Distros Gain Users?

By ditching this philosophy that open source software can't benefit from proprietary companies. By proprietary, I mean OEM's.

Supporting QHD displays where users want to use 150% DPI rather than 100% or 200% DPI.

Linux Distros are not OEM ready and until they are not, they will never going to take off. Dell only released a developer laptop running Ubuntu, not a laptop for all users.
My OEM strategy would be as follows:
Make sure Wine is installed and auto configures upon first run. By auto configure I mean that wine should scale with the resolution and not use its own default resolution.
Make sure word files and etc are editable by default and still save as docx. Improve the UI for LibreOffice.
Make sure browsers work with the same shortcuts.
Make sure users can install software from online with ease. Add a right click menu on tar files that will "install" the binaries in a tar.gz.
Make sure keyboard shortcuts work and that nautilus works better not less than windows explorer. Windows explorer includes a shell, and is not just a file explorer!
Make sure the store is not filled with duo are software. There were two versions of vs code when I tried to install vs code.

Fix grub so that it scales by the resolution of the software. I tried to edit grub but the font size never changed. The booting experience is arcane.

What else? Don't disregard any users' opinion. Every opinion is valid and only when the feature/change would hurt other users can you actually disregard an opinion after careful thought.

Making it easier to support Linux as a developer.
