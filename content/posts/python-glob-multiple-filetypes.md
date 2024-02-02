---
title: "Python Glob Multiple Filetypes"
date: 2024-02-02T16:41:37-05:00
draft: false
tags: [
    'tutorial',
    'programming',
    'python',
]
---

I'm writing this because I cannot believe how stupid developers on Stack Overflow are. There are two pages of answers to this question and none of them actually care about reusability, abstraction, and correctness.

The right way to do it is as follows.

```py
import glob

FILE_EXTS = {'.txt', 'json'}

def find_files(directory):
    for file in glob.iglob(f'{glob.escape(directory)}/**/*.*', recursive=True):
        if Path(uri).suffix.casefold() in FILE_EXTS:
            yield uri
```

Why is this the right way?

1. Abstracted utility function
2. Works on any folder even folder paths with glob patterns in the file path due to the `glob.escape` that we do
3. Recursively collects files
4. Folders are not searched more than once
5. Return type is a generator and not a list, so offers more flexibility for increased performance
6. I use this in my music player, and the glob.escape was introduced to fix a bug one of users encountered
