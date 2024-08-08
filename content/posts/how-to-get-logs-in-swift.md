---
title: "Swift - How to Get Logs"
date: 2024-08-08T09:44:21-04:00
draft: false
tags:
  - swift
  - macos
---

Here is the following code if you need to get your app's logs as well as system logs through Applications code.

```swift
import AppKit
import Foundation
import OSLog
import ZipArchive


let utcDateFormat: DateFormatter = {
    var f = DateFormatter()
    f.dateFormat = "yyyy-MM-dd'T'HH:mm:ss'Z'"
    f.timeZone = TimeZone.gmt
    return f
}()

let logStore: OSLogStore
do {
    logStore = try OSLogStore.local()
    fileName = "system.log"
} catch {
    self.writeError(name: "system-logs", error: error)
    logStore = try OSLogStore(scope: .currentProcessIdentifier)
    fileName = "client.log"
}
let logEntries = try logStore.getEntries(
    at: logStore.position(date: self.logStartTimestamp),
    matching: NSPredicate(format: """
        process CONTAINS[c] "APP_NAME" || subsystem CONTAINS[c] "APP_NAME"
        || process CONTAINS[c] "neagent"
        || process CONTAINS[c] "nesessionmanager"
        || subsystem CONTAINS[c] "com.apple.networkextension"
    """)
)

let file = try self.openFile(name: fileName)
for entry in logEntries {
    if entry.date > self.bundleTimestamp {
        break
    }
    // TODO: Buffering?
    let date = utcDateFormat.string(from: entry.date)
    // TODO: Structured data.
    let formatted = "\(date): \(entry.composedMessage)\n"
    // This is safe because String is unicode.
    let data = formatted.data(using: String.Encoding.utf8)!
    try file.write(contentsOf: data)
}
try file.close()
```
