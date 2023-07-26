---
title: "Linux Desktop Sucks!"
date: 2022-02-26T12:44:37-05:00
draft: false
tags: [
    'linux',
    'opinion'
]
---

First of all, I know a lot of Linux fans will get offended and resort to cheap shots and blame the user. If you are one of those people, you are not at all helpful.

I've used Raspian (~2014), Ubuntu GNOME (~2016), Manjaro KDE (2020 & 2022-2023), Fedora, Zorin (2021).

The next distro I will try is Linux Mint as it is supposed to be the most user friendly distro.

So what is a reason that Linux Desktop sucks? An issue/problem requiring a convoluted process to solve or is unsolvable; Also something so simple that shouldn't have required me to use the terminal in order to unlock (fractional scaling should be allowed and not a tick box or a command).

## Manjaro KDE Specific Issues

I had to daily drive Manjaro KDE for 3 weeks on my Razer Blade Stealth, and over that time I encountered a plethora of issues and I've documented [some solutions](/posts/manjaro-kde-tips).

The Razer Blade stealth has a 6th generation laptop i5 processor and 8GB of RAM. I'm not sure if
it's because of the SSD speeds, but the laptop freezes either due to 100% memory or 99% CPU. VS Code freezes so often without even running an application.

I do believe Firefox is highly optimized on Linux as it never crashed. However, if you have 10+ tabs open, good bye.

### Black Screen Bug

I'll start with this as it is the reason why I will not recommend Manjaro for people interested in free (as in beer) software.

I'm logged in as my parents' user and now I log out and log into my account. The desktop splashscreen shows up and then boom black screen.

Maybe it's a fluke, so I just create a thread to leave a paper trail. I use a physical power down and then log in without issues.

4 hours later, my parents are logged in, but I want to test something out myself. I turn on the laptop and click switch user, meaning that my parents are not
logged out. The desktop splashscreen loads and I get the black screen again.

Manjaro is 11 years old. There is no excuse for this workflow to not work. There is no excuse because I go out of my way to make sure
my music player runs for everyone's workflow not just my own.

### Plugging or Unplugging Power Puts Laptop to Sleep

As the subsection states, charging my laptop while it is on, puts it into the sleep state. I wish I was joking.
How is this bug even possible in 2023. It makes zero sense why Manjaro can't even handle the plugging of a power cord.

### Inefficient Upgrading

Pacman manager so not specifically Manjaro.

I turn on the laptop after a couple months and the network folder no longer works. There were 2.1GB worth of updates so I decided to start upgrading.

After all the packages were downloading, for a couple minutes there were network errors due to the package manager hitting `http://mirror.ragenetwork.de` "name or service not known" errors. Why are packages not installed while downloading new packages? It's inefficient.

Only after the packages were installed and a restart completed did the network drive start to work.

### Unintuitive Appearance Settings

So I click appearance from the settings app and there is no option to change the wallpaper. Pretty dumb!

### Webcam

The webcam does not work. Glitches with green.

## Other Issues

### Canonical and Snap Sucks

I cannot believe Ubuntu is promoted to newbies when snaps are the default distribution model. Snaps literally make apps slower. Gigabytes of wasted storage
for slower apps. A linux desktop experience should rival Windows, it should not make you say "it's okay because it's not Windows."
The mentality that we need to live a worse life just because we get a free experience is the worst mentality ever.

### No Ctrl for Tabbing

If linux is all about customization, why is it so damn difficult to replace Alt with Ctrl? Windows predates Linux, so this Alt + # shortcut should
not be forced upon users.

## Poor Cloud Storage Support

Coming from Windows, I use OneDrive and MEGA. I do care about OneDrive since
it has my personal files that I need backed up to the cloud. Where is the OneDrive support without using rsync which
doesn't work half the time?

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

To fix this in KDE, simply go to Settings → Configure Shortcuts....

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
