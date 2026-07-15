---
title: "WinUI3 Notify Icon System Tray App Tutorial"
date: 2026-07-08T15:08:08-04:00
draft: true
summary: "TODO: A summary for the meta description tag"
tags:
  - csharp
  - programming
  - tutorial
  - winui3
---

We recently shipped this feature for our WinUI3 app using WinUIEx.

In App.xaml.cs

```cs
NotifyIconManager? _notifyIcon


// OnLaunched(

_notifyIcon = new NotifyIconManager(this, DispatcherQueue.GetForCurrentThread());
```

[NotifyIconManager.cs](https://github.com/Sovereign-Engineering/obscuravpn-client/blob/main/windows/obscura-client/NotifyIcon/NotifyIconManager.cs) (menu example with icon loaded in NotifyIconAssets.cs)

[NotifyIconAssets.cs](https://github.com/Sovereign-Engineering/obscuravpn-client/blob/main/windows/obscura-client/NotifyIcon/NotifyIconAssets.cs#L37) (for loading icons)

NativeMethods.txt (to use PInvoke)

```txt
LoadImage
IsIconic
SetForegroundWindow
ShowWindow
```

[MainWindow.xaml.cs](https://github.com/Sovereign-Engineering/obscuravpn-client/blob/main/windows/obscura-client/MainWindow.xaml.cs) (showing window)

If you don't know how to use NativeMethods.txt, you just need to add [CsWin32](https://microsoft.github.io/CsWin32/docs/getting-started.html) to your project.

Note that you will also need to handle windows Light and Dark themes,