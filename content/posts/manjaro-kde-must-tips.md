---
title: "Manjaro KDE Tips"
date: 2023-06-27T10:56:19-04:00
draft: false
---

### How to Install yay

Yet Another Yogurt (yay) helps you install packages from AUR using the command `yay -S` instead of entering in commands to clone and build the package.

```zsh
pacman -S --needed git base-devel --noconfirm
git clone https://aur.archlinux.org/yay.git
cd yay
makepkg -si
cd ..
rm yay -rf
```

### How to Install Packages from AUR

From the above, step you can use `yay -s $PACKAGENAME`. In the next section is an example on how to install visual studio code.
The following is a one-liner way to install.

```sh
echo y | LANG=C yay --noprovides --answerdiff None --answerclean None --mflags "--noconfirm" $PACKAGENAME
```

### How to install Visual Studio Code in Manajaro

To install vscode, `yay -S visual-studio-code-bin`

### How to fix Sudo Password Not Accepted

```zsh
systemctl start systemd-homed
pacman -S pambase --noconfirm   # optional
```

### Setting Default Browser for Electron Apps

```sh
xdg-mime default firefox.desktop x-scheme-handler/http
xdg-mime default firefox.desktop x-scheme-handler/https
```

### VSCode Fix ZSH Font

```sh
sudo pacman -Su ttf-meslo-nerd-font-powerlevel10k
```

Set Terminal › Integrated: Font Family to `MesloLGS NF`

### Virtual Terminal

- Ctrl + Alt + F4 to go to virtual terminal
- Ctrl + Alt + F1 to go back to desktop

### X-Server Restart

Ctrl + Alt + Backspace (unconfirmed)
