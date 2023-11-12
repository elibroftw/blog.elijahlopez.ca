---
title: "Manjaro KDE Tips"
date: 2023-06-27T10:56:19-04:00
draft: false
tags: [
    "linux",
]
---

{{< toc >}}

## Webcam Application

### KDE

Install kamoso (with Add/Remove Software).

### Gnome

Cheese

## How to Install yay

Yet Another Yogurt (yay) helps you install packages from AUR using the command `yay -S` instead of entering in commands to clone and build the package.

```zsh
pacman -S --needed git base-devel --noconfirm
git clone https://aur.archlinux.org/yay.git
cd yay
makepkg -si
cd ..
rm yay -rf
```

## How to Install Packages from AUR

You can either do `pamac build $PKGNAME` or use `yay -s $PACKAGENAME` which requires installing yay as shown above.

In the next section is an example on how to install visual studio code.

The following is a one-liner way to install packages in yay to skip the prompts.

```sh
echo y | LANG=C yay --noprovides --answerdiff None --answerclean None --mflags "--noconfirm" $PACKAGENAME
```

### gpg: keyserver recevie failed: No route to host

```sh
gpg --server hkp://keys.gnupg.net --recv-key KEY_GOES_HERE
```

If the above fails with "gpg: keyserver receive failed: Server indicated a failure",

Use `sudo nano /etc/resolv.conf` and add Cloudflare's DNS

```conf
nameserver 1.1.1.1  # Cloudflare
```

## How to install Visual Studio Code in Manjaro

To install vscode, `yay -S visual-studio-code-bin`

## VSCode Fix ZSH Font

```sh
sudo pacman -Su ttf-meslo-nerd-font-powerlevel10k ttf-firacode-nerd --noconfirm
```

Set Terminal › Integrated: Font Family to `firaCode Nerd Font, monospace` or `MesloLGS NF, monospace`

## How to Install Fira Code Nerd Font on Arch

[Official install instructions](https://github.com/tonsky/FiraCode/wiki/Linux-instructions#installing-with-a-package-manager)

Suppose you want to install a package on Arch. The first step would be to search for what you want using `pacman -Ss a query`

```sh
> pacman -Ss fira code
extra/texlive-fontsextra 2023.66594-15 (texlive)
    TeX Live - Additional fonts
extra/texlive-latexextra 2023.66594-15 (texlive)
    TeX Live - LaTeX additional packages
extra/ttf-fira-code 6.2-2
    Monospaced font with programming ligatures
extra/ttf-firacode-nerd 3.0.2-1 (nerd-fonts)
    Patched font Fira (Fura) Code from nerd fonts library
extra/woff-fira-code 6.2-2
    Monospaced font with programming ligatures
extra/woff2-fira-code 6.2-2
    Monospaced font with programming ligatures
```

Next install the Fira Code Nerd Font.

```sh
sudo pacman -S ttf-firacode-nerd --noconfirm
```

To use this font in Visual Studio Code, set the editor font family to `firaCode Nerd Font, 'Cascadia Code', Consolas, 'Courier New', monospace`.

Set the terminal font-family to `firaCode Nerd Font, monospace`

## Setting Default Browser for Electron Apps

```sh
xdg-mime default firefox.desktop x-scheme-handler/http
xdg-mime default firefox.desktop x-scheme-handler/https
```

## How to fix Sudo Password Not Accepted

```zsh
systemctl start systemd-homed
pacman -S pambase --noconfirm   # optional
```

## Virtual Terminal

- Ctrl + Alt + F4 to go to virtual terminal
- Ctrl + Alt + F1 to go back to desktop

## X-Server Restart

Ctrl + Alt + Backspace (unconfirmed)

## How to setup OneDrive on Linux

- [jstaf/onedriver](https://github.com/jstaf/onedriver)
- For Arch, use `sudo pamac build onedriver`

```sh
yay onedrive-abraunegg
```

Note: If asked regarding a provider for 'd-runtime' and 'd-compiler', select 'liblphobos' and 'ldc'

Run `onedrive` to setup account.

Increase number of inotify watchers (number of files that can be monitored)

```sh
echo fs.inotify.max_user_watches=524288 | sudo tee /etc/sysctl.d/40-max-user-watches.conf && sudo sysctl --system
```

Enable the system service

```sh
sudo systemctl enable onedrive@$USER.service
sudo systemctl start onedrive@$USER.service
journalctl -u onedrive@$USER # scroll to bottom to check if syncing works
```

## Linux How to Read a File in the Terminal

- Use `less` to read line by line (arrow up and down keys)
- Use `more` to read page by page (arrow up and down keys)
- Use `cat` to output entire file (useful for piping `|` commands)

## How to Install an AppImage on Manjaro

First install `appimagelauncher`

```sh
sudo pacman -S appimagelauncher
```

Next double click on the downloaded AppImage

## Linux Append Line to System File

To append a line to a system file, do not use `>>`. Instead use `commandForOutputGoesHere | sudo tee -a /path/to/file`

## Steam Scale UI on Linux or Manjaro

Before we get started, reminder to prefer using `Steam (Runtime)` instead of `Steam (Native)`

If you have root access, run the following command so that steam will be properly scaled
no matter how it is launched (steam desktop shortcut, terminal, game desktop shortcut).

```sh
echo "STEAM_FORCE_DESKTOPUI_SCALING='1.5'" | sudo tee -a /etc/environment
```

If you do not have root access, edit your login shell (`~/.profile`) instead.

```sh
echo "STEAM_FORCE_DESKTOPUI_SCALING='1.5'" | sudo tee -a ~/.profile
```

Test 1.5 out by using `source /path/to/file && steam`. If 1.5 isn't right for you, use nano to edit your file:

 `sudo nano /etc/environment` or `nano ~/.profile`

Now log out and log back in so that your system will source from either of the files that you edited.

<details><summary>Alternatively, you could edit every single one of your game desktop entries in addition to your steam shortcuts,</summary>

To fix scaling, simply run

```sh
sudo nano /usr/share/applications/steam.desktop
```

If you have `gedit`, you can use that instead.

Next scroll to the **first** Exec for the desktop entry, and  add `-forcedesktopscaling=1.5` like below

```desktop
Exec=/usr/bin/steam-runtime -forcedesktopscaling=1.5 %U
```

Save the file and restart steam (the next section has a command for shutting down apps by program name).

You will also have to add this argument to all game shortcuts.

</details>

## How to Pin or Favourite Games on Steam Linux

Copy the desktop file to your local applications directory.
This will let you pin / favourite the game to your start menu.
You can choose to delete the original shortcut afterwards.

```sh
mkdir ~/.local/share/applications
sudo cp ~/Desktop/Game.desktop ~/.local/share/applications
```

## How to Force Close Apps on Linux

```sh
killall steam
```

## version GLIBC_2.38 Not Found

Man I tried to show my friend today how my Manjaro system was running and of course it breaks.

Manjaro fucking sucks. Let's get that straight. I tried running a pacman command and it doesn't upgrade my system. I did something and everything broke.

```sh
pacman
pacman: /usr/lib/libc.so.6: version `GLIBC_2.38' not found (required by pacman)
pacman: /usr/lib/libc.so.6: version `GLIBC_2.38' not found (required by /usr/lib/libalpm.so.13)
```

To fix this issue,

1. Download [pacman-static](https://pkgbuild.com/~morganamilo/pacman-static/x86_64/bin/)
2. `cd ~/Downloads && chmod +x ./pacman-static``
3. `sudo pacman -Syu glibc-locales --overwrite /usr/lib/locale/\*/\* --noconfirm` [reference](https://forum.manjaro.org/t/stable-update-2023-10-09-mesa-grub-glibc-thunderbird-kde-frameworks-renaming/149302/2)
4. `sudo ./pacman-static -Syu --noconfirm`
5. `sudo pacman-mirrors -f5`

Hey hey hey, we fixed it.

My laptop's battery drained so when I started it up again I got the error in the following section.

## Failed to Start Light Display Manager Error

In the lightdm logs, you'll see the following.

```sh
failed to start seat: seat0
```

First step is to get terminal access

1. Ctrl + Alt + F2
2. Enter your username and then your password
3. `sudo pacman -Syu --noconfirm`

```sh
nmtui    # connect to a wifi network if you are using wifi
sudo pacman -S lightdm-gtk-greeter --noconfirm
sudo pacman -Syu
sudo systemctl start lightdm
```

### How to Enable Wi-Fi in TTY/TTL

1. Ctrl + Alt + F2
2. `nmtui`

### How to Install Python 3.10 on Manjaro (or Arch)

Try this first.

```sh
yay -S python310
```

It didn't work for me, so this is how I did it.

```sh
cd ~/Downloads
git clone https://aur.archlinux.org/python310.git
cd python310
makepkg -si
# the directory is 360 MB, so only if that's a lot for your system, remove it
cd ..
rm -rf python310
```

This will take a LONG time...but it works.

Music Caster runs on Linux again!
