---
title: "macOS Remove App From Dock and App Switcher When Window is Closed"
date: 2024-06-22T21:48:10-04:00
draft: true
tags:
  - macos
  - swift
  - tutorial
---

Another way to call this would be "hiding icon from dock"

Note that this is a developer tutorial for SwiftUI on how to hide your app from the dock and app switcher when the window of the app is closed, which is mostly useful if you want to keep the app running as a status menu. In the future, I will add the necessary user preferences code to implement the "start without window" feature.

### Key Pieces of Information

1. In `Info.plist` set `LSUIElement` (App is agent) to true (YES) if you want your app to not show in the dock by default/open
    - This is useful to implement the "start without a window" feature
2. Use `NSApp.setActivationPolicy(.regular)` to show the app in the dock
    - If you are using `LSUIElement`, you may need to also run this in `.onAppear` of your view
3. Use `NSApp.setActivationPolicy(.prohibited)` to remove the app from the dock
4. Below is how to detect when the window of a view is closed, and then running the code above to remove the app icon from the dock

```swift
// comments omitted, so please comment your code since it's not clear what `NSApp.setActivationPolicy(.prohibited)` does
.onReceive(NotificationCenter.default.publisher(for: NSWindow.willCloseNotification)) { newValue in
  NSApp.setActivationPolicy(.prohibited)
 }
 ```

### All Together Example

A snippet of a simple SwiftUI app that can continue running as a status bar app, but can be brought to the front.

```swift
class UiState {
    static var shared = UiState()
    var window: NSWindow?
}

@main
struct clientApp: App {

// code omitted

    var body: some Scene {
        WindowGroup {
            Group {
                  ContentView()
            }.onAppear {
//              Since the app is an agent (Info.plist), the app won't show in the dock by default
//                which is good for when we want to implement "start on login without window"
                NSApp.setActivationPolicy(.regular)

                let window = NSApplication.shared.windows.first
                UiState.shared.window = NSApplication.shared.windows.first
            }.onReceive(NotificationCenter.default.publisher(for: NSWindow.willCloseNotification)) { newValue in
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
                guard let window = UiState.shared.window else { return }
//                Invisible -> Visible
                window.makeKeyAndOrderFront(nil)
//                Back of queue -> Front of Queue
                window.orderFrontRegardless()
//                Show in dock
                NSApp.setActivationPolicy(.regular)
//                Focus on the app
                if #available(macOS 14.0, *) {
                    NSApp.activate()
                } else {
                    NSApp.activate(ignoringOtherApps: true)
                }
            }
        }
    }
}
```
