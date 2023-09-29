---
title: ".gitignore Not Working"
date: 2023-09-29T13:12:40-04:00
draft: false
---

So your .gitignore is not working? If you already checked your file into the tree, then you will have to delete the file, commit, and then it'll work as intended. Otherwise, in my situation, git was seeing files that are new and wouldn't ignore them. The solution, because only on Windows, is to change the encoding to "UTF-8". Turns out, using `echo "__pycache__" > .gitignore` on Windows is a bad idea.
