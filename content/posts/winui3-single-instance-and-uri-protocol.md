---
title: "WinUI3 Single Instance and URI Protocol"
date: 2026-07-07T23:22:09-04:00
summary: "How to build a single-instance WinUI 3 app with URI protocol activation, fixing window focus issues and tray-mode activation crashes"
tags:
  - csharp
  - programming
  - tutorial
  - winui3
---

For the last few months, I've been working with WinUI 3 and dealing with some of its [quirks](/tags/winui3).

When following the [WinUI 3 Single-Instance & Protocol Activation](https://johngagefaulkner.github.io/01-Build-a-Single-Instance-WinUI-3-App-2026-Gemini-2.5-Pro.html) tutorial, our app had multiple issues regarding activation and URI handling.

1. [Focus issue](#focus-issue).
2. [Crash](#the-crash-bug-i-was-facing) after opening hidden window from URI (app was running in tray).

First I will provide the up to date code, and then I will provide some explanation behind what is going on.

## Putting it all Together

Appxmanifest (for packaged apps or packaged with external location apps)

```xml
<Application ...>
<!-- ... -->
  <Extensions>
        <uap:Extension Category="windows.protocol">
          <uap:Protocol Name="obscuravpn">
            <uap:DisplayName>App Name</uap:DisplayName>
          </uap:Protocol>
        </uap:Extension>
      </Extensions>
      <!-- ... -->
</Application ...>
```

NativeMethods.txt assuming the use of [CsWin32](https://microsoft.github.io/CsWin32/docs/getting-started.html)

```txt
SetForegroundWindow
ShowWindow
```

```cs
// MainWindow.xaml.cs
internal HWND GetWindowHandle()
    {
        return (HWND)WinRT.Interop.WindowNative.GetWindowHandle(this);
    }

internal async void HandleAppUrl(Uri uri)
    {
        Log.Info("HandleAppURL called");
        switch (uri.AbsolutePath)
        {
            case "/settings":
                SelectNavigationView(NavigationView.Account);
                break;
            default:
                Log.Warn($"Unhandled app path: {uri.AbsolutePath}");
                break;
        }
    }

// NavigationView is an enum, which is used by MainWindow.xaml (NavigationView tutorial coming later)
// Must be called on window's creation thread (e.g. via dispatcher queue)
// Note that there should be a way to have enums on the Tags. I have not gotten to that cleanup yet.
internal void SelectNavigationView(NavigationView view)
    {
        var item = NavView.MenuItems.Concat(NavView.FooterMenuItems)
            .OfType<NavigationViewItem>()
            .FirstOrDefault(i => i.Tag is int tag && tag == (int)view);
        if (item == null)
        {
            Log.Warn($"No navigation pane item for view: {view}");
            return;
        }
        NavView.SelectedItem = item;
    }
```

```cs
// App.xaml.cs
using System;
using System.IO;
using System.Threading;
using System.Threading.Tasks;
using log4net;
using log4net.Appender;
using log4net.Config;
using log4net.Layout;
using Microsoft.UI.Dispatching;
using Microsoft.UI.Xaml;
using Microsoft.Windows.AppLifecycle;
using Microsoft.Windows.AppNotifications;
using Microsoft.Windows.AppNotifications.Builder;
using Windows.Win32;
using Windows.Win32.Foundation;
using Windows.Win32.System.Com;
using Windows.Win32.UI.WindowsAndMessaging;

namespace AppName;

public partial class App : Application
{
    static readonly ILog Log = LogManager.GetLogger(typeof(App));
    public new static App Current => (App)Application.Current;
    MainWindow? _window;

    protected override void OnLaunched(LaunchActivatedEventArgs launchArgs)
    {
        _window = new MainWindow();

        var args = AppInstance.GetCurrent().GetActivatedEventArgs();
        if (args.Kind != ExtendedActivationKind.StartupTask)
        {
            ShowMainWindow();
        }
        HandleActivation(args);
    }

    private void HandleActivation(AppActivationArguments activationArgs)
    {
        if (activationArgs.Kind == ExtendedActivationKind.Protocol
            && activationArgs.Data is Windows.ApplicationModel.Activation.IProtocolActivatedEventArgs protocolArgs)
        {
            Log.Info($"handling protocol activation: {protocolArgs.Uri}");
            _window?.DispatcherQueue.TryEnqueue(() => _window.HandleAppUrl(protocolArgs.Uri));
        }
    }

    internal void ShowMainWindow()
    {
        Log.Info("activating main window");

        //  This should only happen if  you allow it to be destroyed instead of hiding it on close
        if (_window == null)
        {
            Log.Warn("creating new main window");
            _window = new MainWindow();
        }

        PInvoke.ShowWindow(_window.GetWindowHandle(), SHOW_WINDOW_CMD.SW_NORMAL);
        PInvoke.SetForegroundWindow(_window.GetWindowHandle());
        Log.Info("activated main window");
    }

    /// <summary>
    /// Before booting the WinUI runtime, we claim the single-instance key. A redundant launch hands
    /// its activation to the primary instance and exits immediately; One UI process ever runs.
    /// </summary>
    [STAThread]
    static void Main()
    {
        ConfigureLogging();
        Log.Info("App instance launched; Logging initialized");
        try {
            WinRT.ComWrappersSupport.InitializeComWrappers();
            Log.Info("COM wrappers initialized");
        } catch (Exception ex)
        {
            Log.Error($"Failed to initialize COM wrappers. Not pumping COM. {ex}");
        }

        if (DecideRedirection())
        {
            // Activation has been handed to the primary instance
            return;
        }

        Start((p) =>
        {
            var context = new DispatcherQueueSynchronizationContext(DispatcherQueue.GetForCurrentThread());
            SynchronizationContext.SetSynchronizationContext(context);
            _ = new App();
        });
    }

    /// <summary>
    /// Claims the single-instance key. Returns true if this process is a redundant launch whose
    /// activation has been redirected to the primary instance (and should therefore exit).
    /// </summary>
    private static bool DecideRedirection()
    {
        var keyInstance = AppInstance.FindOrRegisterForKey("primary");
        if (keyInstance.IsCurrent)
        {
            // Handle redirect activations of subsequent launches
            keyInstance.Activated += OnRedirectActivated;
            return false;
        }
        // Subsequent launches will redirect activation to the primary instance
        var activationArgs = AppInstance.GetCurrent().GetActivatedEventArgs();
        RedirectActivationTo(activationArgs, keyInstance);
        return true;
    }

    private static void RedirectActivationTo(AppActivationArguments activationArgs, AppInstance keyInstance)
    {
        // A single-thread apartment (STA) must pump messages while idle to avoid jamming up window broadcasts
        // The redirect activation is waited using a method that continues dispatching messages
        using var redirectComplete = new ManualResetEvent(false);
        var redirectTimeout = TimeSpan.FromSeconds(32);
        using var cts = new CancellationTokenSource(redirectTimeout);
        Task.Run(() =>
        {
            try
            {
                keyInstance.RedirectActivationToAsync(activationArgs).AsTask(cts.Token).GetAwaiter().GetResult();
            }
            catch (OperationCanceledException)
            {
                Log.Error($"Failed to activate existing instance; timed out after {redirectTimeout}.");
            }
            catch (Exception ex)
            {
                Log.Error("Failed to activate existing instance", ex);
            }
            finally
            {
                redirectComplete.Set();
            }
        });
        var handle = new HANDLE(redirectComplete.SafeWaitHandle.DangerousGetHandle());
        PInvoke.CoWaitForMultipleObjects((uint)CWMO_FLAGS.CWMO_DEFAULT, PInvoke.INFINITE, [handle], out _);
    }

    private static async void OnRedirectActivated(object? sender, AppActivationArguments args)
    {
        Current.ShowMainWindow();
        Current.HandleActivation(args);
    }
}
```

## Focus Issue

In the tutorials that existed/created before this one, the code would result in your window being shown without keyboard/input focus (greyed out titlebar title). The fix for this is to call `SetForegroundWindow` after `Activate`, and not on the dispatcher queue. Because activate has to be run on the dispatcher queue, we can simply replace activate with the native WinRT method ShowWindow.

Add  methods to `NativeMethods.txt` (I recommend using [CsWin32](https://microsoft.github.io/CsWin32/docs/getting-started.html) to avoid having to manually write out `DllImport`s).

```txt
SetForegroundWindow
ShowWindow
```

```cs
// App.xaml.cs
internal void ShowMainWindow()
  {
      Log.Info("activating main window");
      if (_window == null)
      {
          Log.Warn("creating new main window");
          _window = new MainWindow();
      }
      PInvoke.ShowWindow(_window.GetWindowHandle(), SHOW_WINDOW_CMD.SW_NORMAL);
      PInvoke.SetForegroundWindow(_window.GetWindowHandle());
      Log.Info("activated main window");
  }

private static async void OnRedirectActivated(object? sender, AppActivationArguments args)
{
  Current.ShowMainWindow();
  Current.HandleActivation(args);
}

// MainWindow.xaml.cs
internal HWND GetWindowHandle()
    {
        return (HWND)WinRT.Interop.WindowNative.GetWindowHandle(this);
    }
```

## The Crash Bug I Was Facing

Opening `appname:///location` would crash the app when the app was running with the window closed. Here is a minimum reproducible of the crash. My guess is that `activationArgs.Data` causes issues.

```cs
// App.xaml.cs
// keyInstance.Activated += OnRedirectActivated;
private static async void OnRedirectActivated(object? sender, AppActivationArguments args)
    {
        Current.ShowMainWindow();
        Current._window?.DispatcherQueue.TryEnqueue(() => Current.HandleActivation(args));
    }

private void HandleActivation(AppActivationArguments activationArgs)
    {
        //CRASH
        Log.Info($"activationArgs.Kind: {activationArgs.Kind}");
        Log.Info($"activationArgs.Data Type: {activationArgs.Data.GetType()}");
        //CRASH
    }
```
