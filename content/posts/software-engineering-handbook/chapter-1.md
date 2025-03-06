---
title: "Chapter 1 - The Computer Environment"
date: 2025-03-05T15:50:15-05:00
draft: true
aliases: ["/posts/software-engineering-handbook/chapter-1"]
---

It's crucial to understand the basics of a computer and an operating system before you start to learn how to code.

> When I first downloaded Python (3.5 ), I did not know what 64-bit was in comparison to 32-bit, and I did not know if my computer was 32-bit or 64-bit. What I did know was that the 32-bit download link was before the 64-bit download link, so I downloaded it and it worked.

\- Elijah Lopez

{{< toc >}}

## The Computer

For the sake of pragmatism, a computer in an electronic device that has one of the major desktop operating systems installed, and supports a visual interface as well as installing software such as a compiler. What is a desktop operating system? It is not Android nor is it iOS. The three major desktop operating systems are:

- Linux-kernel distros (Fedora, Ubuntu, etc.)
- Windows (win32)
- macOS (darwin)

I will assume the reader is Windows based, but I will do my best to create a tutorial in the future on how to migrate away from Windows, without losing access to crucial software.

### Recommended Desktop Devices

I recommend Snapdragon X Elite laptops. This allows you to install Linux (in the future?) or dual-boot Linux. If you already use macOS, you can keep using it.

THe downside of a notebook is that it doesn't come with a GPU, but a GPU actually keeps you locked into Windows for longer due to being so useful for gaming.

## Operating System Terminal

A terminal, or command line, is a user interface (UI) that lets you type in commands, and a terminal that runs commands through an interface called a shell, which provides us with this text-to-function communication layer. You can open a terminal as follows:

- Linux: Ctrl + Alt + T (if that doesn't work, you should learn how to do it)
  - default shell: usually `bash`
- Windows: Windows Key + R (hold the Windows key, then press R). Enter "wt."
  - If you get an error, please install Windows Terminal from the Microsoft Store
  - Default shell: Powershell 5 or Command Prompt
  - Windows comes with Powershell 5 by default, however Powershell 7+ exists. You can install the latest powershell using `winget`
  - [Install Powershell](https://learn.microsoft.com/powershell/scripting/install/installing-powershell-on-windows)
    - Winget should come preinstalled in Windows these days, but if not install it before installing powershell
- macOS: Press Command Space and then type in terminal
  - default shell: `zsh`
  - macOS comes with an outdated bash version. I suggest upgrading it to ensure you can run bash scripts without syntax issues
  - You can install the latest bash using [macports](https://ports.macports.org/port/bash/) or homebrew

### Privileged Shell

Running commands in root / privileged / admin is very important to modify system-related things.

- On Windows, you can either try using the new `sudo` that was added or you can right click Windows Terminal to "Run as administrator"
- On macOS, use the `sudo` command followed by the command you want to run

## Installing Software

### Package Managers

In the terminal section, I mentioned how you need to upgrade the _shell_ on Windows and macOS, and that you should use a certain software to do it. These softwares are called package managers and allow you to install all sorts of software from the command line interface due to a community effort to ensure ubiquitous software installation for the respective operating system.

- Linux-kernel distros
  - `dnf`: Fedora
  - `apt-get`: Debian
  - `zypper`: Suse
  - `pacman`: Arch
  - `apt`: Ubuntu
- Windows
  - `winget` (should be preinstalled)
  - `scoop` (not preinstalled, install on a needs basis)
  - `choco` (not preinstalled, install on a needs basis)
- macOS
  - `brew`: Homebrew (not preinstalled, install it)
  - `port`: Macports (not preinstalled, install it)
  - Recommendation: try installing new software using macports, fallback to using homebrew

### Package Manager Task

Using your package manager, install the latest Python 3. You'll notice that on Ubuntu, you might not be able to install the latest Python 3 without some configuration. This is one of the reasons I don't recommend Ubuntu.

Make note of where the python binary is located!

### Run Software from the Command Line

When you open a shell, you will usually see a path followed by an indicator like an arrow. This is called the "current working directory." Programmers often need to run their programming tools via a shell. Suppose we wanted to run a software that only provides Command Line Interface, such as Python. If you look inside the current working directory, you may notice there is no "python" nor "python.exe" nor "python3X."

Please enter `python` on Windows or `python3X on Linux or macOS.

If you have Python installed properly, this will most likely work, and we should understand why. If it did not work, but you did the exercise earlier, then we will learn how to make it work!

## Environment Variables and PATH

So why did the previous command, `python` work or not work. We know there isn't any Python program in the current directory. A shell needs to look for the program. It can look for the program in locations it is told to search by default. On Windows, this would be the current working directory, and then the directories found in the array defined in the `PATH` environment variable. On other operating systems (and Powershell), a "./" prefix is required to inform the shell to look for the program in the CWD, otherwise it will look for it in the PATH environment variable...

The PATH environment variable is a list of directory paths. Obviously, the shell uses this list of directory paths to search for programs that are run in the shell. On Windows, the list is separated with semi-colons (";"). On other operating systems, it is separated with colons (":").

Environment variables are set by the program that opens the program. In this case where we open a terminal, the System UI supplies **system** environment variables to the terminal, which supplies environment variables to the shell. The shell is a smart program and there are ways to ensure it sources its environment variables properly. When you run commands from a terminal, the shell supplies environment variables to those programs you run.

The system environment variables are defined in the following locations, however you will not need to edit these files as there is a non-system way to ensure environment variables are set.

- On macOS, this would be `/etc/launchd.conf`
- On Linux systems, `/etc/environment`

We will learn how to edit environment variables for the shell, and if the python command did not work, you should be expected to fix the problem after this.

- Windows: please read [How to Add to PATH Environment Variable on Windows](/posts/windows-add-to-PATH-environment-variable).
- Linux distros: you usually need to edit `~/.bashrc` and add/remove paths to directories like so
  - `PATH=/path/to/dir:$PATH`
  - explanation: we added a directory to the front of a list and set it to the PATH variable
- macOS: you need to edit `~/.zshrc` the same way as above

## Line Endings and Text Encodings

This is mostly important for cross-platform development. On Windows, the default encoding is UTF-16 BOM and the line ending is CRLF (like a typewriter). On Unix, the default encoding is UTF-8 and the line ending is LF. Therefore, when writing any software related to writing app-related files, ensure you are using the correct encoding. Otherwise, you might end up writing UTF-16 files on Windows, which may not be compatible.

---

[Chapter 2 - Introduction to Programming](/posts/software-engineering-handbook/chapter-2)