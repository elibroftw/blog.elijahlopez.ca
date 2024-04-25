---
title: "Automate Unity Building"
date: 2020-06-21T11:11:24-05:00
draft: false
tags:
  - tutorial
  - programming
  - python
  - c-sharp
---

It took me hours to figure out how to create a simple build script in Unity, even after watching videos, I was really confused.
So why not write an article so that other developers won't need to spend that much time themselves.

## Getting Started

Before we get started make sure you have the necessary build supports needed. In Unity Hub you can see your installations.

![Unity installation screenshot](/images/automate-unity-building/unity-hub.webp)

If not, you'll have to click the three dots, and then click "Add Modules."
Next, we will need to create a script named something like `BuildScript.cs`.
Make sure this file is placed in `Assets/Editor`.
This file will be responsible in calling Unity BuildPlayer as well as adding menu items for you to quickly build for your platform(s) of choice.

[BuildScript.cs](https://gist.github.com/elibroftw/149c230518e3e0d9af54d9c472c2ee84#file-buildscript-cs)

Next copy the code below. Disclaimer: this code uses the scenes from your build settings so make sure the scenes there are correct.
You can ignore the last function if you want, I just kept it there in case you need to use Asset Bundles (I did not).
With this script you can call the build methods from "File > Build All" and Unity will build the players to the "Builds" directory in your project root.

![Unity build menu](/images/automate-unity-building/unity-hub.webp)

This takes care of building from the editor but what if you were using CI/server to build it for you?
You will need to make a shell/batch script or you can use Python so that the OS won't matter.

[UnityBuild.py](https://gist.github.com/elibroftw/be1f6ad737ccde25e86f858f2f11629f#file-unitybuild-py)

You may have to modify some variables such as `UNITY` and also the zipping process if you don't want to zip the builds.
You may also pair this up with an Ino setup script like so `iscc setup_script.iss`.
I hope you found this tutorial helpful because I sure would've.

## Resources

[Build Player Pipeline](https://docs.unity3d.com/Manual/BuildPlayerPipeline.html)

[Unity Command line arguments](https://docs.unity3d.com/Manual/CommandLineArguments.html)
