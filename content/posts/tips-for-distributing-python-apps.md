---
title: "Tips for Distributing Python Apps"
date: 2023-07-22T01:00:56-04:00
draft: false
hidden: true
tags:
  - python
summary: "Learn five key tips for distributing Python applications effectively, covering installation without admin privileges, code distribution, creating shortcuts, common installation paths, and updating strategies."
---

Here are some pillars for making Python app distribution better for end users. I was not able to follow some of these pillars when I distributed Music Caster, so I wrote them down for other methods I'd try if I were to go about doing it again.

1. Python apps should be able to be installed without requiring administrative privileges.

    - pip
    - git + script
    - Inno/NSIS/Wix

2. Distribute python code as opposed to compiled code

    - obfuscate if you want to
    - install dependencies on user side or bundle in zip file
    - instruct user to install Python 3.X
    - create virtualenv on setup
    - TODO: look into [pipenv](https://docs.pipenv.org/)

3. Create start menu shortcuts for platforms

    - Linux: `~/.local/share/applications/my_app.desktop`
    - Windows: `%appdata%\Microsoft\Windows\Start Menu\Programs`
    - MacOSX: ???

4. Install to a common programs folder

    - Linux: `~/.local/bin`
    - Windows: `%localappdata%\Programs`

5. Allow users to manually update by default and allow auto updating

    When using a git based approach, git fetch to check for updates, and git reset to the latest v* tag when updating. Try not to update to latest commit since a commit does not imply code change or testing.

    When using executables, use a server link or github API request combined with digital signed checksum (Tauri does this).
