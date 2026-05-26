---
title: "WebView2's GetDevToolsProtocolEventReceiver Will Crash Your .NET App If You Don't Store the Receiver"
date: 2026-05-25T15:14:31-04:00
hidden: true
summary: "A debugging story about WebView2, the .NET GC, and a one-line fix for random Memory Access Violations."
tags:
  - dotnet
  - c-sharp
  - programming
  - tutorial
---

I spent the last week investigating a crash in a WinUI 3 + WebView2 app on Windows ARM64. I was encountering seemingly random Memory Access Violation exceptions thrown from inside the WebView2 DLLs, with no useful stack trace. The cause turned out to be due to not storing a event receiver.

## What is a DevTools Protocol Event Receiver?

WebView2 lets you subscribe to Chrome DevTools Protocol (CDP) events from .NET — things like "the page logged something to the console," "the page navigated," "an uncaught exception was thrown in JavaScript." The API for this looks like:

```cs
var receiver = WebView.CoreWebView2.GetDevToolsProtocolEventReceiver("Runtime.consoleAPICalled");
receiver.DevToolsProtocolEventReceived += MyHandler;
```

The class returned by `GetDevToolsProtocolEventReceiver` is a `CoreWebView2DevToolsProtocolEventReceiver`. I'll just call it a **receiver** for the rest of this post.

A receiver is a managed (.NET) wrapper around a native WebView2 event source. You ask WebView2 "give me the receiver for event X," and from then on, anything that happens in the embedded browser that matches event X fires the receiver's `DevToolsProtocolEventReceived` event. You subscribe to that event in the normal C# way (`+=`), and your handler runs on the UI thread when WebView2 dispatches.

The whole API feels like any other .NET event publisher. It is not.

## The Bug, in One Line

This is the minimal repro:

```cs
WebView.CoreWebView2
    .GetDevToolsProtocolEventReceiver("Runtime.consoleAPICalled")
    .DevToolsProtocolEventReceived += (s, e) => OnWebviewConsoleApiCall(e.ParameterObjectAsJson);
```

The bug is that **nothing in my code holds a reference to the receiver**. The expression chain calls `GetDevToolsProtocolEventReceiver`, subscribes a handler, and discards the receiver. From the GC's perspective, the receiver is unreachable the instant the statement finishes.

Based on my conversation with Claude, I think I can understand what happened.

`DevToolsProtocolEventReceived::add`, the delegate, in this case a pointer to calling `(s, e) => OnWebviewConsoleApiCall(e.ParameterObjectAsJson)`does not store a reference to the pointer, but calls subscribe directly. This wasn't always the case, since the definition for `DevToolsProtocolEventReceived add` calls something called `Get_DevToolsProtocolEventReceived2`.

When we store a reference to the receiver, we keep alive `CoreWebView2DevToolsProtocolEventReceiver`'s own fields. In particular `_inner`. So it seems that whatever pointer variable holds a reference to our callback function is dependent on the preservation of `_inner`. When we don't hold a reference to `_inner` which is an ID, it seems that whatever inner is pointed to (Claude thinks a COM object) could also be freed.

So it ends up being on us to keep a reference to the receiver returned by`GetDevToolsProtocolEventReceiver`.

## The Fix

Store the receiver in a field:

```cs
private CoreWebView2DevToolsProtocolEventReceiver? _consoleReceiver;

_consoleReceiver = WebView.CoreWebView2.GetDevToolsProtocolEventReceiver("Runtime.consoleAPICalled");
_consoleReceiver.DevToolsProtocolEventReceived += (s, e) => OnWebviewConsoleApiCall(e.ParameterObjectAsJson);
```

A field on the page or window keeps the receiver alive for the lifetime of that page or window, which is exactly what you want. The crash disappears completely. The handler — lambda or method group, doesn't matter — fires correctly forever after.

For multiple subscriptions, just add more fields:

```cs
private CoreWebView2DevToolsProtocolEventReceiver? _logEventReceiver;
private CoreWebView2DevToolsProtocolEventReceiver? _consoleReceiver;
private CoreWebView2DevToolsProtocolEventReceiver? _exceptionReceiver;

_logEventReceiver = WebView.CoreWebView2.GetDevToolsProtocolEventReceiver("Log.entryAdded");
_logEventReceiver.DevToolsProtocolEventReceived += OnWebviewLogEntry;

_consoleReceiver = WebView.CoreWebView2.GetDevToolsProtocolEventReceiver("Runtime.consoleAPICalled");
_consoleReceiver.DevToolsProtocolEventReceived += (s, e) => OnWebviewConsoleApiCall(e.ParameterObjectAsJson);

_exceptionReceiver = WebView.CoreWebView2.GetDevToolsProtocolEventReceiver("Runtime.exceptionThrown");
_exceptionReceiver.DevToolsProtocolEventReceived += OnWebviewException;
```

If you'd rather not pollute your class with three fields, a list works too:

```cs
private readonly List<CoreWebView2DevToolsProtocolEventReceiver> _receivers = new();

CoreWebView2DevToolsProtocolEventReceiver Subscribe(
    string eventName,
    EventHandler<CoreWebView2DevToolsProtocolEventReceivedEventArgs> handler)
{
    var r = WebView.CoreWebView2.GetDevToolsProtocolEventReceiver(eventName);
    r.DevToolsProtocolEventReceived += handler;
    _receivers.Add(r);
    return r;
}

Subscribe("Log.entryAdded", OnWebviewLogEntry);
Subscribe("Runtime.consoleAPICalled", OnWebviewConsoleApiCall);
Subscribe("Runtime.exceptionThrown", OnWebviewException);
```

## Whose Bug Is It?

I went back and forth on this one. My initial conclusion — that the bug was in my code — was based on the lambda-pinning theory, which turned out to be wrong. Once you take that explanation off the table, the case for "user code bug" gets much weaker.

The code that crashes is idiomatic C#. It follows the same pattern as every other event subscription in the BCL, in WPF, in WinForms, in WinUI. It produces no compiler warnings, no analyzer warnings, no documentation hint, nothing. The fact that it silently breaks because WebView2's receiver doesn't keep itself alive is a **WebView2 API design issue**, not a user code issue.

The strongest evidence for this is that Claude Code — trained on a vast corpus of C# code — wrote the buggy version by default. So did I, several times, over several days, while actively trying to fix the crash. That's not a "one developer didn't read the docs" problem; that's "the API expects something the entire C# ecosystem doesn't do."

A correctly designed managed wrapper for a native event source should either keep itself alive while it has live subscriptions, or document the requirement loudly. WebView2 does neither.

I filed an [issue on the WebView2Feedback repo](https://github.com/MicrosoftEdge/WebView2Feedback/issues/5597).

## Why Doesn't Tooling Catch This?

Static analysis could in principle catch "you called a method that returned an object, subscribed to an event on it, and then discarded the reference." But no current analyzer does this for events specifically, because **for almost every other event in C#, that pattern is fine**. The publisher is usually rooted by something else, so the discarded local doesn't matter.

A WebView2-specific analyzer (a Roslyn analyzer shipped in the WebView2 NuGet package) could flag this. That would be the right place to fix it long-term — even if Microsoft never changes the receiver's lifetime semantics, an analyzer catching `[].DevToolsProtocolEventReceived += ...` on a non-stored receiver would prevent the crash entirely.

## The Takeaway

If you use WebView2's DevTools Protocol event receivers in .NET, **store them in fields**. Don't subscribe inline. Don't store the receiver in a local. The compiler will not warn you. The runtime will not warn you. The app will simply crash randomly during normal use, and the stack trace will not point at your code.

It's one line of code to fix and zero lines of code to introduce — exactly the shape of bug that wastes weeks of debugging.
