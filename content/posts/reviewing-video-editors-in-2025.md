---
title: "Reviewing FOSS Video Editors in 2025"
date: 2025-03-31T15:17:37-04:00
draft: false
tags:
  - review
summary: "Review of FOSS video editors in 2025: Shotcut, KdenLive, OpenShot, and Olive. Recommends Shotcut and highlights pros and cons of each."
---

## Shotcut

The best open-source video editor I've used so far.

### How to Add Shapes in Shotcut

1. Select your non-V1 video track
2. "Open Other" > "Animation (Glaxnimate)"
3. "add to timeline"
4. Trim clip to your liking
5. Click on the clip and then click "edit..." in the bottom left corner
6. It's pretty straight forward to create a shape, you can edit the fill and stroke as well of something like a rectangle.

One thing holding Shotcut back is the community. For example someone said to use a Color Clip for shapes whereas a youtube video showed you can use Glaxnimate.

## KdenLive

### Problem 1 - Title in Export is Shorter Than Preview

The preview shows a rectangle properly bordering the elements I want, but the exported GIF shows the rectangle is smaller and doesn't cover all the text!

### Problem 2 - Layering

The first problem with KdenLive is that the layering order is reverse. Intuitively you add things to the top most track right and then add new things below the track. Well the developers of KdenLive think that it's more intuitive to add video to the lowest video track.

This seems a bit hard to understand so I'll translate it. I added a video to Video Track 2 (the top most track), and then I wanted to add a rectangle. I added the rectangle on video track 1, but because of how KdenLive does layering, the rectangle was below the clip, so now I had to move all my clips from Video Track 2 to Video Track 1.

This isn't a big deal if KdenLive just worked. The thing is, it doesn't work.

## OpenShot

One of the dumbest editors. If you want to add simple things like a rectangle, you have to create it yourself and then import it.

## Olive

The download button itself doesn't work! Copyright 2023. Therefore unmaintained.
