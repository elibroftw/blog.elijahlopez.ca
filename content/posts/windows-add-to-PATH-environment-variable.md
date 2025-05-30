---
title: "How to Add to PATH Environment Variable on Windows"
date: 2023-04-21T20:02:38-04:00
draft: false
tags:
  - windows
  - tutorial
summary: "A concise step-by-step tutorial with screenshots on how to add a directory to the PATH environment variable on Windows using the graphical interface."
---

In this concise guide, you will learn how to add a directory to the Path environment variable on Windows.

1. Press Windows key + S
2. Type in "edit environment variables for your account" and click it (you won't need to type the entire sentence)
![Windows 10 search screenshot](/images/windows/edit-env-variables-search.webp)
3. Under the table "User variable for $USER" or "System variables", scroll and find a Variable named `Path`
![Windows 10 user path variable](/images/windows/user-path-variables.webp)
4. Either double click the row with `Path` or single click it and click edit. A new window should open up
![Windows 10 Path variable window](/images/windows/user-path-variable-edit.webp)
5. Click "New", paste the path to your directory without quotes, and press enter
![Windows 10 new directory to Path](/images/windows/add-new-user-path-variable.webp)
6. Click Ok and then click Ok again.
