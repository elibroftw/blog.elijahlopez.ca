---
title: "macOS SwiftUI Remove App From Dock and App Switcher When Window is Closed"
date: 2024-06-22T21:48:10-04:00
draft: true
tags:
  - macos
  - swift
  - tutorial
summary: "This developer tutorial for SwiftUI on macOS explains how to hide an app from the Dock and App Switcher when its window is closed, which is useful for apps that run primarily as a status menu item. It covers using `LSUIElement` in `Info.plist` to hide the app by default, and `NSApp.setActivationPolicy(.regular)` and `NSApp.setActivationPolicy(.accessory)` to show and hide the app in the Dock programmatically. The post provides code examples for an `AppDelegate` and a simple SwiftUI app structure to achieve this behavior, including how to detect window closure and bring the app back to the front from the status bar."
---

Another way to call this would be "hiding icon from dock"

Note that this is a developer tutorial for SwiftUI on how to hide your app from the dock and app switcher when the window of the app is closed, which is mostly useful if you want to keep the app running as a status menu. In the future, I will add the necessary user preferences code to implement the "start without window" feature.

### Key Pieces of Information

1. If you don't show a window when the app is launched, in `Info.plist` set `LSUIElement` (App is agent) to true (YES) which will hide the app from the dock by default
2. Use `NSApp.setActivationPolicy(.regular)` to show the app in the dock
    - If you are using `LSUIElement`, you may need to also run this in `.onAppear` of your view
3. Use `NSApp.setActivationPolicy(.accessory)` to remove the app from the dock
4. Below is how to detect when the window of a view is closed, and then running the code above to remove the app icon from the dock

```swift
class AppDelegate: NSObject, NSApplicationDelegate {
    func applicationShouldTerminateAfterLastWindowClosed(_ sender: NSApplication) -> Bool {
//        Remove from dock when the last window is closed
        NSApp.setActivationPolicy(.accessory)
        return false
    }
}

@main
struct clientApp: App {
    @NSApplicationDelegateAdaptor private var appDelegate: AppDelegate
}
 ```

### All Together Example

A snippet of a simple SwiftUI app that can continue running as a status bar app, but can be brought to the front.

```swift
@main
struct clientApp: App {

    // code omitted

    var body: some Scene {
        Window("My App", id: "root-view") {
            Group {
                  ContentView()
            }
            // an alternative if you don't want to use a custom app delegate
            .onReceive(NotificationCenter.default.publisher(for: NSWindow.willCloseNotification)) { newValue in
//              Remove from dock when the window is cosed
                NSApp.setActivationPolicy(.prohibited)
            }
        }
//        On macOS, this is called the a status menu which goes in the status menus area (alongside battery and wifi)
//        Other words for the area: system tray, notification area
//        Other words for the icon itself: NotifyIcon (windows), SystemTrayIcon (Qt), StatusIcon (gtk)
        MenuBarExtra {
          // image and quit omitted
            Button("Show") {
                NSApp.setActivationPolicy(.regular)
                if #available(macOS 14.0, *) {
                    NSApp.activate()
                } else {
                    NSApp.activate(ignoringOtherApps: true)
                }
                self.openWindow(id: "root-view")
            }
        }
    }
}
```
