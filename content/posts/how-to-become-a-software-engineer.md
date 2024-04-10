---
title: "How to Become a Software Engineer"
date: 2024-02-22T20:33:05-05:00
draft: true
---

The pre-cursor to this article was a resources page on my main website that hasn't been updated in years and isn't very user friendly. That is why I am writing this blog post. Let's begin. Here is the table of contents so you can skip to portions based on your skill level.

{{< toc >}}

## Who am I

I am Elijah Lopez. I learned how to program in the Summer of 2016 and am the author of [Music Caster](https://github.com/elibroftw/music-caster/), [Split The Tank](https://www.splitthetank.com/), and was one of the first people to make [YouTube tutorials](https://www.youtube.com/playlist?list=PLmWYh0f8jKSjt9VC5sq2T3mFETasG2p2L) on creating a desktop applications using [Tauri](https://github.com/tauri-apps/tauri), a [Rust](https://www.rust-lang.org/)-based desktop application framework.

I graduate from the University of Waterloo and WIlfrid Laurier University with a Bachelor of Computer Science (BCS), and a Bachelor of Business Administration (BBA). It took 2 extra full-time terms of schools to complete in comparison to a singular degree in either. Do I recommend it? Only if your connections can't triumph the name recognition of the two Universities and their respective co-op systems which give you entry-level short-term but full-time jobs.

## Basics

One of the worst things about experts is their arrogance which prevents inclusively to the ignorant. Experts assume a baseline knowledge that is simply untrue.

After I had learned the basics of Python and decided to tackle on bigger projects, such as a [Discord Bot](https://github.com/elibroftw/discord-bot) or a [website](https://github.com/elibroftw/website), I needed to use "modules." The installation instructions for them did not work because the experts did not expect me to be ignorant that my machine is 64-bit.

> When I first downloaded Python (3.5), I did not know what 64-bit was in comparison to 32-bit, and I did not know if my computer was 32-bit or 64-bit. What I did know was that the 32-bit download came before, so I downloaded it and it worked. - Elijah Lopez

### What is Software

Let's start with what is software. When we are young, we rarely think of how technology works, but the truth is a lot of work gets put into making everything work. This website you are reading for example, it's not made from just words. The formatting: markup. The theme: CSS. The organization: A configuration file that is parsed by [hugo - a static website generator](https://gohugo.io/). What put the website together for others: [delivery code in GitHub Actions](https://github.com/elibroftw/blog.elijahlopez.ca/blob/master/.github/workflows/gh-pages.yml). How are you able to read this on your device: operating system (coded) and the browser (coded).

Software is everywhere and it has directly and substantially improved your life...and if you are learning how to program, that just means new software can further improve life.

### Compooter?

A computer is a man's best friend. A computer in the realm of programming is just anything\* that runs a **desktop** operating system. What is a desktop operating system? It is not an Android nor is it an iOS. It is one of the few major ones. Windows (win32), macOS (darwin), Linux-kernel operating systems such as Linux Mint or Pop!\_OS (Linux is an advanced topic for later).

### Recommended Desktop Devices

### Operating System Terminal

What do I mean by anything? Since you can use a computer remotely (not physically in front of the device), the software (remote OS terminal aka a shell) that is used to interact with said computer suffices. A Terminal is a UI that lets you type in commands, and a terminal that runs commands on the operating system itself is a shell. To get a system terminal on the main operating systems, do the following.

- Windows: Windows Key + R (hold windows key, then press r). Enter "wt." If you get an error, please install Windows Terminal from the Microsoft Store.
  - Windows terminal itself is multi-terminal so for reference the shell itself is Powershell and Command Prompt. (Windows shell is more complicated than this)
- macOS: Press Command Space and then type in terminal
- Linux: Ctrl + Alt + T (if that doesn't work, then learn how to do it)

Please also learn how to access a privileged/escalated shell. In windows, right click Windows Terminal to "Run as administrator."

### Installing Software

It is important to get a feel for how to find where software is installed on a computer. I am not talking about mobile devices. You cannot code productively on a mobile device without using the cloud extensively. It is imperative to use a desktop\* device, because otherwise you won't benefit from typing speed (mine is 100+ words per minute) and the larger screen size.

Once you are on a desktop. Please complete this tutorial. Install the latest Python 3 programming language and make note of where the python binary is located. On Linux, this task is already difficult.

### Command Line Installation of Software

For each operating system, there is a preferred way to install major software using just the terminal.

- Windows
  - If you are an admin, use choco. Otherwise, don't worry about it
- macOS: Install homebrew
- Linux: figure it out, if you are using my preferred distro(s), it should be `apt`

### Using Command Line Using Software

Programmers very often need to run their programming tools via the shell.

When you open a shell, you will usually see a path followed by an indicator like an arrow. This is called the "current working directory."

Suppose we wanted to run a software that only provides Command Line Interface, such as Python, which you might've installed already. If you look inside the current working directory, you may notice there is no "python" nor "python.exe" nor "python3X."

Please enter "python" on Windows or "python3X" on Linux or macOS.

If you have Python installed, this will most likely work, and we should understand why. If it did not work, but you did the exercise earlier, then we will learn how to make it work!

### Environment Variables and PATH

So why did the previous command, "Python" work or not work. We know there isn't any Python program in the current directory...A shell needs to look for the program. It can look for the program in locations it is told to look at. On Windows, this would be the current working directory, and then the directories found in the array defined in the PATH environment variable. On other operating systems (and Powershell), a "./" prefix is required to inform the shell to look for the program in the CWD, otherwise it will look for it in the PATH environment variable...

The PATH environment variable is a list of directory paths. Obviously the shell uses this list of directory paths to search for programs that are run in the shell. On Windows, the list separated with semi-colons (";"), and on other operating systems, it is separated with colons (":").

Environment variables are given by programs by the shell. The shell usually supplies all environment variables to programs that are run and the Operating System's Visual Interface (desktop) will most likely supply environment variables defined for the system or user location. On macOS, this would be `/etc/launchd.conf`. On Linux systems, `/etc/environment`. You will hardly ever need to edit those files. Now we will learn how to edit environment variables for the shell, and if the python command did not work, you should be expected to fix the problem after this.

- For Windows, please look at [How to Add to PATH Environment Variable on Windows](/posts/windows-add-to-PATH-environment-variable).
- For the recommended Linux distros I use, you usually need to edit `~/.bashrc` and add/remove lines like so
  - `PATH=/path/to/dir:$PATH`
  - explanation:define PATH as a path followed by the defined PATH
- For macOS, you usually need to edit `~/.zshrc` the same way as above

### Glossary and Abstract Terms

- network request: exchange of information over cables via internet protocols (DNS, IP, TCP/UDP). A full-fledged networks course is needed to learn more.
- server: a server is a physical computing device that is responsible for processing some sort of network request
- application: an application can be anything that would exist digitally/virtually and does some sort of interactivity. For example, Jill is writing an application that tracks car price data from various sources on the internet
- tech stack: a group of programming tools/languages that works cohesively to produce a deliverable
- libraries: coupled functionality that has been already programmed and abstracted for the programmer to use
- coupled: a set of closely grouped things, usually features when using the term for software development

## Introduction to Le Programming

This chapter is broken into a few different sections. The goal is to provide the best-practices for each type of section targeting the Small-Medium Enterprise scale.

The first section is on [fullstack apps](#full-stack-applications). This consists of writing a server and the user interface used to interact with the server. Instead of presenting the two sides separately, it's best to focus on this big one first to avoid re-learning different tools, especially when talking about best-practices, where starting with the front-end may result in pigeon holing in the JavaScript community and starting with the back-end may result in pigeon holing in some bad practices when handling network requests related to what a front-end may want. By focusing on full-stack, we can pick a tech-stack that helps us learn and grow very quickly and focus on writing code that actually results in crossing the finish-line instead of building a bicycle.

### Organizing Application Source Code

### Full-stack Applications

### Web Front-end Applications

### Web Back-end Applications

- AKA: REST API

### Mobile Applications

### Desktop Applications

### \[Advanced] Blockchain Smart Contracts

### Engineering Libraries

As I mentioned in the introduction for the chapter, the previous sections focused on crossing the finish line and not building the supporting functionality to start building on top. Libraries is code that is bundled rather than code that is interacted with. Therefore, a very pragmatic viewpoint should be taken into consideration.

Defining the use case

Writing code that also turns into Documentation

Usually, developers won't be reading the source code to figure out how to use your library. A good library makes it easy to figure out how to do something specific without relying on StackOverflow, human support. It's fine if the developer asks another application (such as AI) on how to do something and it gives a response, but that's only possible if the documentation is good. So we want to deliver documentation alongside the library. Some things a documentation needs in order to succeed:

- upgrade guide: how do we continue to use the library throughout updates. Developers want to spend time building not fixing, so providing a methodology to upgrade is crucial
- changelog: ideally combined with the above, we want to tell the user exactly what changed in the code
  - bug fixes: a bug is something that was not intended to occur such as an error. if you fix a bug without changing how the library is used, it does not need to be explained too much
  - different internal error handling: suppose that before some errors are expected and not you handle it internally to suppress sit. This is breaking. Imagine the behaviour changed from erroring out to running in an infinite loop. Sure there is feature-parity, but how the library is used would change.
- searchable
  - developers should be able to search for behaviour as well as the API name. For search results, prefer showing API names before the behaviour of APIs. Search is something that should be solved already\*
- sectioned
  - some libraries do more than a few things. In these cases, the documentation should have sections pertaining to different features even if they can be used together
- pretty
- demonstration of usability
  - provide the user with either a template or plenty of examples that can be adapted right off the bat
  - for example, suppose we are writing a library that compute some equations. Give an example on how each equation function should be called and why it was called that way.
  - Another example, suppose we are writing a library that helps someone display something on the computer screen. This is application-oriented and so providing a template with examples embedded would be really nice

Now that the concepts are down we will demonstrate a best-practice of writing a library based on some software philosophical principles I have.

## Advanced Concepts

- See my computer sciences notes I took in [university](https://blog.elijahlopez.ca/tags/university/)
