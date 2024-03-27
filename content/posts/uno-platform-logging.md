---
title: "Uno Platform Logging"
date: 2023-02-17T21:59:46-05:00
draft: false
tags: [
    'c-sharp',
    'uno-platform',
    'mobile',
    'programming',
    'tutorial'
]
---

Note that you will need to run with debugging (F5) for some logging and breakpoints/tracepoints to work.

If you want to log regardless of debugging, then using the info function may work for you better.

## Tracepoints

First, if you simply need to debug something, try using
[Visual Studio Tracepoints](https://learn.microsoft.com/en-us/visualstudio/debugger/using-tracepoints?view=vs-2022) which is nothing but a breakpoint as shown below (use curly braces to print variables). Click the the light grey part on the extreme left, add an action, and voila.

![breakpoint screenshot](/images/c-sharp/visual-studio-breakpoint.png)

## Logging

In your `Page.xaml.cs`, add the differences

```cs
using Uno.Extensions;
using Uno.Logging;

public sealed partial class YourPage : Page {

    private static ILogger _logger { get; } = typeof(YourPage).Log();

    private void ButtonClick(object sender, RoutedEventArgs e) {

        _logger.LogTrace("wont show up, cause we set the LogLevel to be Debug in the next step");
        _logger.Debug("asd");
        _logger.Error("qwe", new Exception("zxc"));
    }
}
```

In `App.xaml.cs` and `AppHead.xaml.cs`, in `InitializeLogging` above the default filters, modify the first line of code below. I have provided this code in context and it works regardless of where the page is located in your project. For
example, the page this blog post is based on is located in a Views directory.

```cs
// Custom filters
builder.AddFilter("YourProject.YourPage", LogLevel.Debug);
// Default filters for Uno Platform namespaces [THIS IS ALREADY IN THE FILE]
builder.AddFilter("Uno", LogLevel.Warning);
builder.AddFilter("Windows", LogLevel.Warning);
builder.AddFilter("Microsoft", LogLevel.Warning);
```

This blog post is adapted from [this GitHub discussion](https://github.com/unoplatform/uno/discussions/11348#discussioncomment-5005121)
