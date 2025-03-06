---
title: "Chapter 2 - Introduction to Programming"
date: 2025-03-05T15:50:15-05:00
draft: true
aliases: ["/posts/software-engineering-handbook/chapter-2"]
---

The purpose of learning how to program is to eventually gain enough skills to program something, or in other words, learn enough to create a _software project_. This chapter will focus on learning your first programming language, which will either click for you or not.

{{< toc >}}

## Multi-Language Paradigm

In this day and age, it's not enough to know only one programming language. I say this because not many people get to just say "I will do one thing and only this thing." For example, I prefer feature programming, but I work as a user interface programmer for my work. Therefore, when learning your first language, I don't actually recommend using it for everything, which is what I was doing at the beginning. Choosing the wrong _tech stack_ results more _tech debt_, even though you can see the short-term gains.

## Python

Python is a fantastic first language to learn, mostly because it's easy to grasp. The downside of using Python is that you won't learn why statically typed languages is important. I recommend Python because it's the fastest way to figure out if programming clicks for you.

- Learn Python basics from [CS Circles](https://cscircles.cemc.uwaterloo.ca/). Recursion is hard to grasp as a beginner, but takes a few months to get your head around it.
- Learn some basic data structures such as `set`, `dict` and why they are different than `list`. Also learn the `deque` (linked list) data structure.

### Python Specific

If you plan on using Python in a project, I suggest learning the following as well

- Learn about `generators` in Python and how to create one
- learn about the `argparse` module and create a sample terminal file with support for boolean flags and --flag arg
- learn `pip`, which is the way to install 3rd party software modules to use in Python programs
- If you plan to create a project in Python, I also suggest learning venv

## Integrated Development Environment

An IDE stands for Integrated Development Environment (Code Editor), not relevant to know this though

- [Visual Studio Code](https://code.visualstudio.com/): Multi-Purpose IDE
  - [My Visual Studio Code Setup](/posts/vscode-setup)
- [Visual Studio](https://visualstudio.microsoft.com/) (WinUI, C++, Windows desktop)
- [macOS Setup](https://syntackle.com/blog/mac-setup-for-developers/)

## Scripting

One of the reasons I suggested to learn Python is because it's the fastest way to crank out a script, something that will run temporary and doesn't require full blown engineering. In terms of analogies, a software project is like building a bridge, and a script is like building a wedge. Using Python for scripts is easy, cross-platform, and enables using 3rd party modules easily as well.

Different scripting languages:

- Python
  - Pro: easier onboarding
  - Con: Python version issues
  - Con: More code than a shell to run commands and _piping_ them
- Bash
  - Con: Not on Windows, unless it's git bash
  - Con: Complicated tasks
- Powershell
  - Pro: cross-platform
  - Con: not as known, does things its own way
  - Con: Complicated tasks

Regardless you should bookmark something like this [Bash scripting cheatsheet](https://devhints.io/bash) so that when you do write bash you are good to go. I have [bash quickstart](/posts/bash-quickstart), however I should merge in the linked bash helpers in the future, as they promote wrong ways to deploy software.

### Shebang

For all scripts, you should start them with a shebang line. This, combined with `chmod +x file`, allows you to execute the script without specifying the script interpreter.

Examples of Shebangs

```bash
#!/usr/bin/env python
#!/usr/bin/env bash
#!/usr/bin/env pwsh
```

How to run a script on Unix or [Windows Subsystem for Linux](https://learn.microsoft.com/windows/wsl/about)

```bash
# on Unix based platforms, you can execute the script like so
./script
```

On Windows, unless it's a powershell script (ps1), you will have to do `python script.py`

### Scripting Tutorial

- Write a Pythons script that takes in a list of file paths (argparse) and for each of them, print the resolution (Pillow) of each image.
  - Install Pillow via pip
  - Take it one step further: if the image is 250,000+ pixels, apply a gaussian blur, and save the file to Downloads/MY_DIR
    - The script should not fail if the dir exists or does not exist
    - The script should not delete the dir if it does exist
    - Use a `venv`, your bash or powershell script should use this `venv` to run the script so that it uses the `venv` Pillow dependency
- Write a bash script or powershell script that takes in as an argument, a single directory, and passes all jpg files contained under that directory (including subdirectories) into the script before
  - You can use `$1` to get the first argument in bash
  - In the bash cheat sheet, you are given `lib/**/*.r`. Once you figured out the code, you can test using `ls` if the right files are globbed.

This tutorial was inspired by my [`img2webp.py`](https://github.com/elibroftw/blog.elijahlopez.ca/blob/master/img2webp.py) script I use for this blog, as well as a basic task (Gaussian blur GUI app) I tell new Python programmers to write.

---

[Chapter 3 - Version Control System (Git)](/posts/software-engineering-handbook/chapter-3)
