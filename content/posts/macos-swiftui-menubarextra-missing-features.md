---
title: "MacOS SwiftUI MenuBarExtra Missing Features"
date: 2024-08-28T11:36:04-04:00
draft: true
tags:
  - swift
  - macos
summary: "This post discusses missing features and limitations of the `MenuBarExtra` SwiftUI component on macOS. It highlights issues with visibility prioritization (how macOS decides which icons to hide), dynamic sizing, variable width, smaller font sizes, and the difficulty of achieving menu-like styling without the dropdown button. The author points out that even Apple's own apps seem to have better control over status icon prioritization."
---

### Visibility Priority

When reading the documentation for the Menu bar extra, I came across the following.

> When necessary, the system hides menu bar extras to make room for app menus. Similarly, if there are too many menu bar extras, the system may hide some to avoid crowding app menus.

[Apple Developer - Menu bar extras](https://developer.apple.com/design/human-interface-guidelines/the-menu-bar#Menu-bar-extras)

How does macOS decide which icons to hide? Even their facetime app is able to [prioritize itself over other status icons](https://multi.app/blog/pushing-the-limits-nsstatusitem)!

### Dynamic Sizing

### Variable Width

### Smaller Font Sizes

### SwiftUI Should Allow Menu-Like Styling

it's not easy to figure out how to get the same style as a menu without the button to dropdown. I just want my text and buttons to be styled like they are inside a Menu. How hard could it be?
