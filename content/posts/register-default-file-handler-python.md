---
title: "Registering Default File Handler's in Windows with Python"
date: 2021-05-30T22:51:53-05:00
draft: false
tags: [
    "tutorial",
    "programming",
    "python",
]
---

Recently I needed to make my music player register as a file handler for audio files (mp3, flac, etc…) but how would I do this? Say hello to Windows Registry.

Here is the helpers file for Music Caster. Look for `add_reg_handlers` https://github.com/elibroftw/music-caster/blob/master/src/helpers.py

This function sets my music player as the default program for a variety of file extensions. It also adds custom right click options for those file extensions and folders as well.

I'm sorry for the lack of an explanation but the best I can do is:

First, you can choose to implement a URI protocol so that your program can be opened from a hyperlink in your browser.

Create a class name for your program. Something like "ProgramEXT" for each extension or if the extensions are all related to each other, something like "ProgramFile."

Now come up with a generic name for each of the file extensions you want to be the default program for. For example, if your program might be a PDF reader, you would want to call any .pdf's a "PDF File." You can look at the code for how to write this to the registry, along with setting the icon.

Looking at the code, next comes the default command. This defines what happens when the file is opened in the default program or double clicked.

Next comes supplementary commands that will show even if the user did not want to make your program the default handler. Note that these commands only appear on the extensions you want them to appear on, unless you want to include them on all file extensions, but for that you will have to do more reading on your own.

Finally comes the part where you can add custom right click options to folders.
At the end of the function is the code required to delete your registry modifications.
