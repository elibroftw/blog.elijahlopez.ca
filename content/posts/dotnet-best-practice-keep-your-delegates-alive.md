---
title: ".NET Programming Best Practice: Keep Alive Inline-Lambdas and Delegates Passed to External Code"
date: 2026-05-25T15:14:31-04:00
hidden: true
summary: "Why you should never pass inline lambdas to native library events in C#: a debugging story about WebView2, the .NET GC, and dangling function pointers on ARM64."
tags:
  - dotnet
  - c-sharp
  - programming
  - tutorial
---

The problem I ran into for the last week while working on the Windows app that uses WebView2 is that the .NET Garbage Collector, at least for ARM64, would wrongly clean up inline-lambdas I passed to WebView2 event subscriptions. Claude Web App (not Claude Code) helped me figure this out and when I pushed it further to elaborate who's fault it was, it said regardless of bad API design, the bug was at your level of code.

> The rule "delegates passed to native code must be kept alive by managed code" is a real, documented rule of .NET interop

## The Culprit: Garbage-Collected Lambdas

The funny thing though, is that the following buggy code was written by Claude Code itself! In the three or so years I have been programming in C#, I have never come across this rule that we should never pass lambdas to external libraries (i.e. I was not able to correct the mistake immediately myself).

```cs
// Bug, local variable
var logEventReceiver = WebView.CoreWebView2.GetDevToolsProtocolEventReceiver("Log.entryAdded");
// Bug, inline-lambda
logEventReceiver.DevToolsProtocolEventReceived += (s, e) => OnWebviewLogEntry(e.ParameterObjectAsJson);

var consoleReceiver = WebView.CoreWebView2.GetDevToolsProtocolEventReceiver("Runtime.consoleAPICalled");
// Same Bug
consoleReceiver.DevToolsProtocolEventReceived += (s, e) => OnWebviewConsoleApiCall(e.ParameterObjectAsJson);

var exceptionReceiver = WebView.CoreWebView2.GetDevToolsProtocolEventReceiver("Runtime.exceptionThrown");
// Same Bug
exceptionReceiver.DevToolsProtocolEventReceived += (s, e) => OnWebviewException(e.ParameterObjectAsJson);
```

## What Was Actually Happening Under the Hood

With this code, my app would randomly crash and throw "Memory Access Violation" exceptions from inside the webview2 DLL. At first I thought it might've been because of the feature I'm working on in my branch (notify icon), but nope. These delegates/lambdas were being garbage-collected. The native WebView2 code would hold the raw function pointer to the JIT-compiled thunk for that delegate. My interpretation is that when one of these events would fire, the assembly would try to jump to an address held by a  _dangling pointer_ because the object/lambda was already freed. This causes undefined behaviour and explains why the app would crash inconsistently and randomly rather than every startup of the app.

Claude thinks this is an issue specific to ARM64, but based on what I just learned, if there is a pattern, then it would've been possible on x64.

<details><summary>Why ARM64 specifically?</summary>

> - ARM64 .NET tends to JIT thunks into smaller code-heap regions that get reclaimed more aggressively.
> - ARM64 has slightly different GC behavior around small/short-lived objects than x64.
>
> This is a bug that would have been latent on x64 — probably "working" because the freed memory happened to still contain valid-looking thunk code most of the time.

</details>

## How to Fix WebView2 Memory Access Violation

After I commented out the lambda passing code, sure enough, no more random crashes. The best practice is to either define a field with a lambda or to make the lambdas redundant by modifying the method signature to accept the same parameters that the event passes.

```cs
private CoreWebView2DevToolsProtocolEventReceiver? _logEventReceiver;
private CoreWebView2DevToolsProtocolEventReceiver? _consoleReceiver;
private CoreWebView2DevToolsProtocolEventReceiver? _exceptionReceiver;

_logEventReceiver = WebView.CoreWebView2.GetDevToolsProtocolEventReceiver("Log.entryAdded");
_logEventReceiver.DevToolsProtocolEventReceived += OnWebviewLogEntry;

_consoleReceiver = WebView.CoreWebView2.GetDevToolsProtocolEventReceiver("Runtime.consoleAPICalled");
_consoleReceiver.DevToolsProtocolEventReceived += OnWebviewConsoleApiCall;

_exceptionReceiver = WebView.CoreWebView2.GetDevToolsProtocolEventReceiver("Runtime.exceptionThrown");
_exceptionReceiver.DevToolsProtocolEventReceived += OnWebviewException;

private static void OnWebviewLogEntry(CoreWebView2 sender, CoreWebView2DevToolsProtocolEventReceivedEventArgs e);
```

Another proposal is for C# to include something like `Pin` but that is more useful when it warns of inline lambdas/delegates.

```cs
private readonly List<Delegate> _nativeCallbacks = new();

private T Pin<T>(T del) where T : Delegate
{
    _nativeCallbacks.Add(del);
    return del;
}

// Usage:
webView.CoreWebView2.WebMessageReceived += Pin<EventHandler<...>>((s, e) => HandleMessage(e));
webView.CoreWebView2.NavigationCompleted += Pin<EventHandler<...>>((s, e) => HandleNav(e));
```

[Initial GitHub Issue I Created](https://github.com/MicrosoftEdge/WebView2Feedback/issues/5597)

## Whose Bug Is It Really

When I asked Claude about where the bug truly is, they had this to say about the existing code.

> Your code had the bug technically. The rule "delegates passed to native code must be kept alive by managed code" is a real, documented rule of .NET interop. You followed an idiomatic C# event subscription pattern that works perfectly for purely managed events — but WebView2 events cross the managed/native boundary, where the rules are different. Easy mistake to make; very widely made.

I've literally never heard of this pattern to set lambdas to a field and then pass said field to any code that is external (DLL). Is that common knowledge among .NET programmers? Claude itself wrote the initial code so whatever best practices for C# it trained on clearly does not talk about it.

## Next Steps: A Linting Rule for MSBuild

So what are the next steps? Well for one, an experienced C# .NET programmer now knows not to pass Lambdas to external libraries since external libraries should be treated as black boxes (defensive programming).

The second step, is advocating to create a warning/linting rule in MSBuild for this sort of pattern. It clearly has side effects that are only really apparent when the programmer is enlightened with an abstraction of how the .NET garbage collector and native interop work and how it can cause these sorts of memory access violation exceptions.
