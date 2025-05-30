---
title: "Swift - How to Get Logs"
date: 2024-08-08T09:44:21-04:00
draft: false
tags:
  - swift
  - macos
summary: "Swift code for retrieving application and system logs on macOS using OSLogStore, with examples for accessing and filtering logs."
---

Here is the following code if you need to get your app's logs as well as system logs through Applications code. The docs will tell you that the `.system` scope requires administration, but the reality is that by using the `local` log store, you can still get the system logs. [OSLogStore on Monterey by Michael Tsai](https://mjtsai.com/blog/2021/12/10/oslogstore-on-monterey/).

> Quinn “The Eskimo!” @ Developer Technical Support @ Apple

[OSLogStore.local()](https://developer.apple.com/documentation/oslog/oslogstore/local())

> Gaining access to the local unified logging system requires permission from the system. The caller must be run by an admin account and have the com.apple.logging.local-store entitlement.

The docs here are actually outdated since you do not need that entitlement. Note that using the `.system` scope won't work with sandboxed apps.

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

## References

[Peter Steinberger; Logging in Swift; August 27, 2021](https://steipete.com/posts/logging-in-swift/)

[Apple Developer; OSLogStore.local() Description](https://developer.apple.com/documentation/oslog/oslogstore/local())

[Michael Tsai; OSLogStore on Monterey; December 10, 2021](https://mjtsai.com/blog/2021/12/10/oslogstore-on-monterey/)
