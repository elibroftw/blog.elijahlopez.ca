---
title: "Monero Onboarding for Windows Developers"
date: 2022-12-03T12:58:50-05:00
draft: false
tags:
  - monero
  - cryptocurrency
  - programming
  - tutorial
  - vscode
  - c++
aliases: ['/posts/monero-dev-windows/']
---

This is a straightforward guide to start developing on the monero project (monero, monero-gui, etc.) on Windows without using a Linux \[virtual] machine.
Although I have a Linux machine, I am maximally productive on Windows as it is my primary OS.
When copy pasting terminal commands, paste into notepad before pasting into your terminal because it's a good habit to catch a clipboard jacking attack.

## Prerequisites

- [MSYS2](https://www.msys2.org/#installation)
  - Use `Get-FileHash -Path .\INSTALLER -Algorithm SHA256` and compare the hashes to verify the installer
- [Visual Studio Code](https://code.visualstudio.com/download)
- [Git](https://git-scm.com/downloads)
- Optional: [GitHub Desktop](https://desktop.github.com/)
- Optional: [GitHub Account](https://github.com/)

Install these simultaneously.

## Forking a Monero Repository

If you want to contribute through a GitHub account,
you will need to fork the [monero](https://github.com/monero-project/monero) or [monero-gui](https://github.com/monero-project/monero-gui) repository.
If you are new to GitHub, see: [fork a repo](https://docs.github.com/en/get-started/quickstart/fork-a-repo#forking-a-repository)

If you are interested in contributing without a GitHub account, you can skip this step.

## Cloning the Repository

Use git or GitHub Desktop to clone your fork. Clone the original repository if you want to contribute anonymously.

Replace the URL below with the URL of your fork.

```bash
git clone --recursive https://github.com/monero-project/monero-gui.git
```

`--recursive` is used so that submodules are cloned as well. Otherwise, you'd have to update those submodules when the build fails.

## Setting Up VSCode

I use VS Code when working on the `monero-gui` project and for most projects, even this blog!
The exceptions being: Python, Windows C++ development, .NET development, Java.

1. Open the `monero-gui` directory in VSCode
2. Install [C++ Extension Pack](https://marketplace.visualstudio.com/items?itemName=ms-vscode.cpptools-extension-pack)
3. Install [Better C++ Syntax](https://marketplace.visualstudio.com/items?itemName=jeff-hykin.better-cpp-syntax)
4. Add MSYS2 64-bit as a terminal profile in user `settings.json`

    ```json
    // if this setting already exists, add the MSYS2 portion
    //     rather than overwriting any existing profiles
    "terminal.integrated.profiles.windows": {

            "MSYS2": {
                "path": "C:\\msys64\\usr\\bin\\bash.exe",
                "args": [
                    "--login",
                    "-i"
                ],
                "env": {
                    "MSYSTEM": "MINGW64",
                    "CHERE_INVOKING": "1"
                }
            }

        }
    ```

5. Add workspace settings as seen in my [monero-gui fork](https://github.dev/elibroftw/monero-gui/tree/vs-code-ide-settings/.vscode) (copy the .vscode folder)

    - You will most likely only need to change the "release-win64" in `tasks.json` if you are working on monero and not monero-gui.
    - I hope to merge these settings into upstream so that everyone debugging on their machines will have an easy time

6. Set MSYS2 as the default terminal profile for Windows in the VSCode `workspace` settings

    ![Setting default terminal profile](/images/vs-code/setting-default-profile.webp)

6. Open an MSYS2 Terminal in VS Code

    - I use a custom keyboard shortcut `Ctrl + T` for toggling the terminal and `Ctrl + Shift + T` to create a new default profile terminal
    - Ensure that the terminal you opened is MSYS2 (bash) and not CMD or PS (there will be a $ sign if you indeed opened MSYS2 64bit)

## Installing MSYS2 64-bit Dependencies

In the Windows instructions for the Monero project you are interested in, you may see that `pacman` is used to install dependencies. Pacman is the default package manager on _Arch btw_.
However, the installing process is not guaranteed to work for `monero-gui` since the `README.md` is missing the `-Syu` command. If you already have MSYS2 installed like I had, you'd run into issues.

Run the following commands in an MSYS2 64-bit bash window. I suggest using the one we opened up in the previous step or you can open one externally if you don't use VSCode.
Note that the dependencies take a bit of storage. I think I used a couple GBs (my perspective is that I have 4+ drives). I've included `--noconfirm` so that you can play Pacman on Google while these commands are running.

1. Upgrade dependencies

    ```bash
    pacman -Syu --noconfirm  # upgrade existing database and packages
    # the terminal may close automatically
    ```

2. Install Monero dependencies

    ```bash
    pacman -S mingw-w64-x86_64-toolchain make mingw-w64-x86_64-cmake mingw-w64-x86_64-boost mingw-w64-x86_64-openssl mingw-w64-x86_64-zeromq mingw-w64-x86_64-libsodium mingw-w64-x86_64-hidapi mingw-w64-x86_64-protobuf-c mingw-w64-x86_64-libusb mingw-w64-x86_64-libgcrypt mingw-w64-x86_64-unbound mingw-w64-x86_64-doxygen mingw-w64-x86_64-libunwind mingw-w64-x86_64-ccache mingw-w64-x86_64-pcre --noconfirm
    ```

    If you are reading this far into the future, ensure that the list of dependencies installed is a merger of the ones I have listed and the ones listed in the project's `README.md`
    When I was writing this article, build failures were common for 3+ hours due to missing packages, an unsupported `debug-static-win64` build target, and ccache working suddenly.

3. Install Qt5

    ```bash
    pacman -S mingw-w64-x86_64-qt5 --noconfirm
    ```

## Building Setup

### Anti-Virus

I noticed that when building, Windows anti-virus would spike. So I recommend excluding the project folder as well as the msys2 folder from Windows Security or whatever anti-virus software you are running.

### Default Number of Jobs for Make

We want to avoid entering in `-jN` every time we build, but what should N be? I use CPU cores - 1 so that
I can still use my browser and other apps while building. You can run the following to set that so.

```sh
echo "alias make=\"/usr/bin/make -j$((`nproc` > 1 ? $((`nproc` - 1)) : 1 ))\"" >> ~/.profile
source ~/.profile  #  you do not need to run this in subsequent terminals
```

## Building

1. Optionally enable console mode for GUI projects by commenting out `set(EXECUTABLE_FLAG WIN32)` from `src/CMakeLists.txt` (thanks @selsta)
    - Run `build/release/bin/monero-wallet-gui.exe` in the VSCode terminal after a build (next step)

2. Run the build command (5 minutes)
    - For `monero-gui`, you can either use the VSCode debugger (workspace settings) or run `make release-win64`. The debug builds weren't working for  me.
    - For `monero`, same as above but try using `debug-static-win64` instead (need to edit `.vscode/tasks.json[0] > windows > args[0]`)
    - If the debug build failed, you might need to `make clean` for the release build to work

3. Troubleshooting failures

    - build failed because of missing library
        - build release after a make clean
        - `pacman -S mingw-w64-x86_64-name` (where name is the libname with and without lib)
        - Search for the library (with and without the lib prefix) on [packages.msys2.org](https://packages.msys2.org/search). Click on relevant search results and install the binary package starting with `mingw-w64-x86_64`
        - `make clean` before building
    - runtime error from Qt failing to load plugin?
        - make clean
        - uninstall all qt packages using `pacman -R $(pacman -Qq | grep qt)`
        - install qt using `pacman -S mingw-w64-x86_64-qt5 --noconfirm`


4. For a `monero-gui` full build, use `cd build/release && make deploy` after running `make release-win64`
    - If the build fails due to DLL copy error, follow the troubleshooting instructions in step 4 and let me know what worked so that I can update this article

## Contributing Anonymously

If you want to contribute anonymously, I suggest you git commit on a separate branch than the default one.
After you've committed your changes, run the following from your branch.

`git format-patch master --stdout > ~/Downloads/PATCH_NAME.patch`

Here I've assumed that the default branch is master, but it is entirely possible when working on other projects where the default branch is not master. Default branch names I've seen are `dev` and `main`.

After you've created a patch, you can post it on #monero-dev or #monero-gui.

- [monero-dev matrix](https://matrix.to/#/#monero-dev:monero.social)
- [monero-gui matrix](https://matrix.to/#/#monero-gui:monero.social)
- [monero-dev IRC](irc://irc.libera.chat/#monero-dev)
- [monero-gui IRC](irc://irc.libera.chat/#monero-gui)

Funny thing. My house has these Plume devices which blocks matrix.to links, so I'm running a VPN a lot of the time now.

## Git Situations

I will assume you can figure out yourself how to commit your code changes and push them to your GitHub fork.
However, I will provide some git commands to use for common occurrences. I am not a git guru so I use GitHub Desktop + VS Code most of the time.

I use the [Git Graph](https://marketplace.visualstudio.com/items?itemName=mhutchie.git-graph) extension to avoid the CLI for rebasing, squashing commits, and other actions
where GitHub Desktop is inadequate.

### Resolving Merge Conflicts or Syncing with Original Repo

Suppose you are developing a feature and now your forked repo is many commits behind the upstream target branch. Or your pull request cannot be merged due to at least one conflict (a conflict arises when git cannot determine whose change should be respected because there are exclusive commits in two different branches that changed the same thing).

Solution: rebase. A rebase is when you sandwich exclusive commits from another branch between the shared commits within your branch and your exclusive commits.

1. Ensure you are on the branch with your commits. Use `git checkout branchName` if you aren't.
2. `git remote add upstream ORIGINAL_REPO_LINK` (CLI)
3. `git rebase upstream/master` (CLI)
4. Resolve conflicts (IDE like VSCode or CLI editor)
5. Commit and force push (UI or CLI)

If you did not fork the repo, life is a bit easier as you can skip step 2 and use the command `git rebase master` for step 3.

### Squashing Commits

Suppose you went on a commit rampage just for one feature. Everything works, so one commit is more elegant than many commits.
To perform a squash, reset your branch to the commit you don't want to squash. Commit your changes and force push. Make sure
the commit you are resetting to is on the same branch. Otherwise you are performing a rebase and might need to resolve a merge conflict.

## Conclusion

I hope this was helpful. I spent 8+ hours writing and debugging over two days. Feel free to donate some Monero.
[84PR6SkYd5zaFLKDjAFrQfbaAg2c7SV3q3XDZ15QCpEZUggrN4YzY7n8m9XC3deXjo41yWHTm1LrsUpPTYGnRQbD9Cwp8En](monero:84PR6SkYd5zaFLKDjAFrQfbaAg2c7SV3q3XDZ15QCpEZUggrN4YzY7n8m9XC3deXjo41yWHTm1LrsUpPTYGnRQbD9Cwp8En)

![monero:84PR6SkYd5zaFLKDjAFrQfbaAg2c7SV3q3XDZ15QCpEZUggrN4YzY7n8m9XC3deXjo41yWHTm1LrsUpPTYGnRQbD9Cwp8En](https://elijahlopez.ca/static/images/monero.png)
