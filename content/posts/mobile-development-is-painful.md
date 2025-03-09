---
title: "Mobile Development Is Painful"
date: 2023-05-04T23:55:07-04:00
draft: false
tags:
  - opinion
  - mobile
---

I've been tasked at creating a mobile app for both iPhone and Android and I have zero experience. I tried to do something with Flutter in 2020, however back then I gave up when Flutter couldn't do background tasks.

## Uno Platform

This year, I tried to do the app with [Uno Platform](https://platform.uno/) and encountered a slew of issues. The
people are nice, however the platform was fighting against me and now when my own deadline approaches, my
question on how to navigate views is still left unanswered. The support is abysmal and I seriously just want an easy life.

I went with Uno Platform because I wanted to do the backend with C# ASP.NET to have a one language stack. However, I knew that React Native would be easier since I already know React.

## Flutter

Today I tried to compare Flutter and React Native and found out that Flutter was better in performance and widgets, however if flutter as so good, no one would use React Native, so why does React Native still exist?

Well I found out today. The boilerplate and code redundancy is beyond comprehensible. If you need state management, there's two classes, with boilerplate functions for each. I spent 30 minutes figuring out how to use persistent storage (shared preferences) to conditionally render a view, but because it's async, there's just too much complexity.

Tomorrow is a new day and I'm determined to get work done. I have some react native libraries saved, and I'm going to go through with it. Is is the mobile SDK's making my life hard or is the frameworks that have the poor developer experience? We'll find out tomorrow (next paragraph)!

Well tomorrow is here, and the verdict on React Native is: not ideal but can get it to work.

## React Native

Expo is complete dog shit. The React Native Expo scaffold command promoted by the official documentation doesn't even produce a compilable app. It's absolutely dumb. I encountered this sort of broken official docs last year too when I was [getting started with Tauri](https://www.youtube.com/playlist?list=PLmWYh0f8jKSjt9VC5sq2T3mFETasG2p2L). One thing I absolutely despise about other developers in this industry is that they want to be authoritarian and retain full control of their repositories while simultaneously being unavailable.

React Native CLI on the other hand did compile, but the verdict for that is: works 60% of the time all the time.

You add a package to package.json in a React Native and when you hit build, you wait 60 seconds for the project to download required files before building only to encounter:

The Android Gradle plugin supports only kotlin-android-extensions Gradle plugin version 1.6.20 and higher.

> That's because RN upgrades (or other libs that use Kotlin) break the version. There's not a lot I can do about this apart from just updating Kotlin version everytime.

[source](https://github.com/mrousavy/react-native-vision-camera/issues/1352#issuecomment-1571658656)

This is coming from the maintainer of the mainstream camera package for react native...

Imagine wanting to scan a QR code but you have to rely on a single person who doesn't want to give access to other people to maintain his/her project?

Now I need `react-native-reanimated` on top of `react-native-vision-camera` and `vision-camera-code-scanner`...

Expo is such a trap. It's a pain to remove when you realize the expo module you wanted to use doesn't even work.

When I want to debug my mobile application?

```text
An error occurred while launching the application. Error while executing command 'c:\Users\maste\Documents\GitHub\SplitTheTank\node_modules\.bin\react-native.cmd run-android --no-packager' (error code 101) (error code 303)
```

want to run `npx react-native run-android`?

```text
Error: Command failed: gradlew.bat app:installDebug -PreactNativeDevServerPort=8081

FAILURE: Build failed with an exception.

* Where:
Settings file 'C:\Users\maste\Documents\GitHub\SplitTheTank\android\settings.gradle' line: 9

* What went wrong:
A problem occurred evaluating settings 'SplitTheTank'.
> Could not read script 'C:\Users\maste\Documents\GitHub\SplitTheTank\scripts\autolinking.gradle' as it does not exist.
```

```txt
Included build 'C:\Users\maste\Documents\GitHub\SplitTheTank\node_modules\react-native-gradle-plugin' does not exist.
```

What to do?

- If you want to remove expo modules, [do the opposite of the manual installation of expo modules](https://docs.expo.dev/bare/installing-expo-modules/#manual-installation)
- If you upgraded react-native, follow [upgrade helper](https://react-native-community.github.io/upgrade-helper/?from=0.71.12&to=0.72.3)
- Run `yarn` or `npm install` in the root folder.
- In one terminal: `npx react-native start`
- In another terminal `npx react-native run-android`
- `yarn add react-native` to upgrade react-native

Okay so finally I want to get the QR code scanner working.

1. `__scanCodes` not found. Easy fix, just change babel.config.js to use `__scanCodes` instead of `__scanQRCodes` which was there for some reason...
    - Have to reset the cache
2. ReferenceError: Property '_setGlobalConsole' doesn't exist
    - Cool, just set the version of the "react-native-reanimated": "2.14.4" since the latest version (3+) has it removed...
    - Have to wait for vision-camera v3 to come out
3. What went wrong: A problem occurred evaluating project ':react-native-reanimated'. > Could not get unknown property 'minor' for project ':react-native-reanimated' of type org.gradle.api.Project
    - This is peak React Native Monkey Patching. With promises of greatness, you are unable to update to the latest software because one package relies on an older version of another package
        which relies on an older version of react-native
    - okay, so I used 2.17.0 and got the warning/issue that is:
        Execution failed for task ':react-native-vision-camera:extractJNIFiles'. > Cannot expand ZIP 'C:\Users\maste\Documents\GitHub\SplitTheTank\node_modules\react-native-reanimated\android\react-native-reanimated-72-hermes.aar' as it does not exist.
    - Had to remove `node_modules/react-native-reanimated` and run `yarn` again to reinstall the package.
        - The build finally worked
        - `error: index.js: Cannot find module 'react-native-reanimated/plugin'`
    - Installed manually `yarn add react-native-reanimated@2.17.0`
        - Same build error
        Execution failed for task ':react-native-vision-camera:extractJNIFiles'.
        Cannot expand ZIP 'C:\Users\maste\Documents\GitHub\SplitTheTank\node_modules\react-native-reanimated\android\react-native-reanimated-72-hermes.aar' as it does not exist.
        - Let me just remove the entire `node_modules` folder then
        - I give up
    - upgrade to v3 again
        - ERROR  TypeError: Cannot read property 'version' of undefined, js engine: hermes
    - yarn add react-native-reanimated
        - yarn start --reset-cache
        - Back to step 2
    - Let me try v3 release candidate
        - Project with path ':react-native-worklets' could not be found in project ':react-native-vision-camera'
        - yarn add @shopify/react-native-skia@0.1.175
        - yarn add react-native-worklets@<https://github.com/chrfalch/react-native-worklets#d62d76c>
    - Tesla has [react-native-camera-kit](https://github.com/teslamotors/react-native-camera-kit) which has QR Scanning out the box
Please stop this endless cycle of bloatware. I'm so done with react native. My friend (todo: link) even told  me about how he stopped with React Native and went native.
I had not heeded his advice because I thought it would not be as productive as React Native (since I know React already), but the way I see things now, I would not pick React Native
for future projects. Any project that uses React Native becomes tech debt instantly.

I'm going to document all my issues and solution for them

I recently updated to react-native 78 and of course something breaks! This type, there is a bug when targeting Android 15. The [bug in question](https://github.com/facebook/react-native/issues/49759) is that the `KeyboardAvoidingView` component doesn't work anymore! No wonder react-native is in 0.X, it's literally unstable. This is probably why of the people I know said that native is preferable. You just wouldn't get blocked by React Native then. WIth native, the SDK comes out months before the OS is released.

### How to Change Android Status Bar and Gesture Navigation Color

```sh
yarn add react-native-navigation-bar-color
```

In `index.js`:

```js
import changeNavigationBarColor from 'react-native-navigation-bar-color';
import { Platform, useColorScheme } from 'react-native';

export default function Main() {
    const [prefersDark, setDarkTheme] = useState(useColorScheme() !== 'light');
    // obviously need to read dark from storage
    useEffect(() => {
        if (Platform.OS === 'android') {
          if (theme.colors.surface.startsWith('#')) changeNavigationBarColor(theme.colors.surface, !prefersDark);
          else console.error('theme.colors.surface color must be #HEX in order to set the bg color of the system navigation')
        }
  }, [prefersDark]);
//   ...
}
```

### How to Request and Check for Permissions in react-native

I'll give a brief overview

- set iOS permissions in `package.json`
- Add permission to AndroidManifest.xml and Info.plist
- on macOS, you need to run `npx react-native setup-ios-permissions && npx pod-install`

Mobile code

```js
import { PERMISSIONS, RESULTS, check, request } from 'react-native-permissions';
// check (PERM) // compare to RESULTS.DENIED
// request(PERM) // compare to logic

let permission;
if (Platform.OS === 'ios') permission = PERMISSIONS.IOS.LOCATION_WHEN_IN_USE;
else if (Platform.OS === 'android') permission = PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION;
else permission = null;

if (permission !== null) {
    let locationPermResult = await check(permission);
    if (locationPermResult === RESULTS.DENIED) locationPermResult = await request(permission);
    if (locationPermResult === RESULTS.GRANTED || locationPermResult === RESULTS.LIMITED) {
        // can ignore the LIMITED portion if your application requires full permissions
    }
}

```

### No Permission Handler Detected

So I got my hands on someones Mac and oh boy they are not the m1s so they aren't that powerful. I'm glad
I bought a "gaming" laptop because at least this baby can tear through compilations. Anyway, to fix this issue.

1. Follow [react-native-permissions iOS setup](https://github.com/zoontek/react-native-permissions#ios)
    - "reactNativePermissionsIOS" in package.json
    - Edit `Info.plist`
    - `npx react-native setup-ios-permissions && npx pod-install`
2. If the above step did not work (always run in XCode, not VS Code), then run the following

```sh
rm -rf ~/Library/Developer/XCode/DerivedData
```

Also, if you don't have a Macbook, do not borrow a friends macbook unless they have an m1 or better CPU. With the amount of clean builds I've done, going to the Apple store and back would save you time since each build takes 10 minutes on some macbooks that are not even 4 years old.

### CocoaPods Error: dependency were found, but they required a higher minimum deployment target

> Specs satisfying the stripe-react-native (from ../node_modules/@stripe/stripe-react-native) dependency were found, but they required a higher minimum deployment target.

If your `ios/Podfile` has the following:

```ruby
platform :ios, min_ios_version_supported
```

Modify it like so to avoid breaking your application when react-native updates its minium version past iOS 13.

```ruby
MIN_IOS_OVERRIDE = '13.0'
if Gem::Version.new(MIN_IOS_OVERRIDE) > Gem::Version.new(min_ios_version_supported)
    min_ios_version_supported = MIN_IOS_OVERRIDE
end
platform :ios, min_ios_version_supported
```

INFO: The `min_ios_version_supported` comes from `node_modules/react-native/scripts/react_native_pods.rb`

TODO: Pull the highest IPHONEOS_DEPLOYMENT_TARGET from your project.pbxproj instead of MIN_IOS_OVERRIDE

### react-native-vector-icons Icons are Missing

- In XCode, delete (remove references) font folder with the react native vector icons
- Readd fonts via group from the node_modules react native vector icons
- Double Click the blue project in XCode
- Go to Build Phases
- Add the fonts to "Copy Bundle Resources"

### App Crashes After Resuming From Background

The issue has to do with react-native-screens so add the following to `MainActivity.java``

```java
@Override
protected void onCreate(Bundle savedInstanceState) {
    super.onCreate(null);
}
```

This is the error I got.

<details><summary>Fatal Exception Log</summary>
```log
08-19 21:45:45.043  1900  1900 E AndroidRuntime: FATAL EXCEPTION: main
08-19 21:45:45.043  1900  1900 E AndroidRuntime: Process: com.splitthetank, PID: 1900
08-19 21:45:45.043  1900  1900 E AndroidRuntime: java.lang.RuntimeException: Unable to start activity ComponentInfo{com.splitthetank/com.splitthetank.MainActivity}: androidx.fragment.app.Fragment$InstantiationException: Unable to instantiate fragment com.swmansion.rnscreens.ScreenStackFragment: calling Fragment constructor caused an exception
08-19 21:45:45.043  1900  1900 E AndroidRuntime:  at android.app.ActivityThread.performLaunchActivity(ActivityThread.java:3644)
08-19 21:45:45.043  1900  1900 E AndroidRuntime:  at android.app.ActivityThread.handleLaunchActivity(ActivityThread.java:3781)
08-19 21:45:45.043  1900  1900 E AndroidRuntime:  at android.app.servertransaction.LaunchActivityItem.execute(LaunchActivityItem.java:101)
08-19 21:45:45.043  1900  1900 E AndroidRuntime:  at android.app.servertransaction.TransactionExecutor.executeCallbacks(TransactionExecutor.java:138)
08-19 21:45:45.043  1900  1900 E AndroidRuntime:  at android.app.servertransaction.TransactionExecutor.execute(TransactionExecutor.java:95)
08-19 21:45:45.043  1900  1900 E AndroidRuntime:  at android.app.ActivityThread$H.handleMessage(ActivityThread.java:2306)
08-19 21:45:45.043  1900  1900 E AndroidRuntime:  at android.os.Handler.dispatchMessage(Handler.java:106)
08-19 21:45:45.043  1900  1900 E AndroidRuntime:  at android.os.Looper.loopOnce(Looper.java:201)
08-19 21:45:45.043  1900  1900 E AndroidRuntime:  at android.os.Looper.loop(Looper.java:288)
08-19 21:45:45.043  1900  1900 E AndroidRuntime:  at android.app.ActivityThread.main(ActivityThread.java:7918)
08-19 21:45:45.043  1900  1900 E AndroidRuntime:  at java.lang.reflect.Method.invoke(Native Method)
08-19 21:45:45.043  1900  1900 E AndroidRuntime:  at com.android.internal.os.RuntimeInit$MethodAndArgsCaller.run(RuntimeInit.java:548)
08-19 21:45:45.043  1900  1900 E AndroidRuntime:  at com.android.internal.os.ZygoteInit.main(ZygoteInit.java:936)
08-19 21:45:45.043  1900  1900 E AndroidRuntime: Caused by: androidx.fragment.app.Fragment$InstantiationException: Unable to instantiate fragment com.swmansion.rnscreens.ScreenStackFragment: calling Fragment constructor caused an exception
08-19 21:45:45.043  1900  1900 E AndroidRuntime:  at androidx.fragment.app.Fragment.instantiate(Fragment.java:631)
08-19 21:45:45.043  1900  1900 E AndroidRuntime:  at androidx.fragment.app.FragmentContainer.instantiate(FragmentContainer.java:57)
08-19 21:45:45.043  1900  1900 E AndroidRuntime:  at androidx.fragment.app.FragmentManager$3.instantiate(FragmentManager.java:483)
08-19 21:45:45.043  1900  1900 E AndroidRuntime:  at androidx.fragment.app.FragmentStateManager.<init>(FragmentStateManager.java:85)
08-19 21:45:45.043  1900  1900 E AndroidRuntime:  at androidx.fragment.app.FragmentManager.restoreSaveState(FragmentManager.java:2728)
08-19 21:45:45.043  1900  1900 E AndroidRuntime:  at androidx.fragment.app.FragmentController.restoreSaveState(FragmentController.java:198)
08-19 21:45:45.043  1900  1900 E AndroidRuntime:  at androidx.fragment.app.FragmentActivity$2.onContextAvailable(FragmentActivity.java:149)
08-19 21:45:45.043  1900  1900 E AndroidRuntime:  at androidx.activity.contextaware.ContextAwareHelper.dispatchOnContextAvailable(ContextAwareHelper.java:99)
08-19 21:45:45.043  1900  1900 E AndroidRuntime:  at androidx.activity.ComponentActivity.onCreate(ComponentActivity.java:322)
08-19 21:45:45.043  1900  1900 E AndroidRuntime:  at androidx.fragment.app.FragmentActivity.onCreate(FragmentActivity.java:273)
08-19 21:45:45.043  1900  1900 E AndroidRuntime:  at com.facebook.react.ReactActivity.onCreate(ReactActivity.java:45)
08-19 21:45:45.043  1900  1900 E AndroidRuntime:  at android.app.Activity.performCreate(Activity.java:8342)
08-19 21:45:45.043  1900  1900 E AndroidRuntime:  at android.app.Activity.performCreate(Activity.java:8321)
08-19 21:45:45.043  1900  1900 E AndroidRuntime:  at android.app.Instrumentation.callActivityOnCreate(Instrumentation.java:1417)
08-19 21:45:45.043  1900  1900 E AndroidRuntime:  at android.app.ActivityThread.performLaunchActivity(ActivityThread.java:3625)
08-19 21:45:45.043  1900  1900 E AndroidRuntime:  ... 12 more
08-19 21:45:45.043  1900  1900 E AndroidRuntime: Caused by: java.lang.reflect.InvocationTargetException
08-19 21:45:45.043  1900  1900 E AndroidRuntime:  at java.lang.reflect.Constructor.newInstance0(Native Method)
08-19 21:45:45.043  1900  1900 E AndroidRuntime:  at java.lang.reflect.Constructor.newInstance(Constructor.java:343)
08-19 21:45:45.043  1900  1900 E AndroidRuntime:  at androidx.fragment.app.Fragment.instantiate(Fragment.java:613)
08-19 21:45:45.043  1900  1900 E AndroidRuntime:  ... 26 more
08-19 21:45:45.043  1900  1900 E AndroidRuntime: Caused by: java.lang.IllegalStateException: Screen fragments should never be restored. Follow instructions from https://github.com/software-mansion/react-native-screens/issues/17#issuecomment-424704067 to properly configure your main activity.
08-19 21:45:45.043  1900  1900 E AndroidRuntime:  at com.swmansion.rnscreens.ScreenFragment.<init>(ScreenFragment.kt:54)
08-19 21:45:45.043  1900  1900 E AndroidRuntime:  at com.swmansion.rnscreens.ScreenStackFragment.<init>(ScreenStackFragment.kt:35)
08-19 21:45:45.043  1900  1900 E AndroidRuntime:  ... 29 more
```
</details>

### Keyboard Overlapping Text Field

```jsx
import { KeyboardAvoidingView } from 'react-native';
import { useHeaderHeight} from '@react-navigation/elements';    // if you are using react-navigation

function AScreen() {
    const headerHeight = useHeaderHeight();
    return <KeyboardAvoidingView behavior={Platform.select({ ios: 'padding' })} keyboardVerticalOffset={headerHeight + 20}>
        <Searchbar />  {/* from react-native-paper */}
    </KeyboardAvoidingView>
}
```

### Running App in the "Background"

This tutorial isn't short so I've linked it [here](/posts/react-native-run-app-in-background/).

Stack overflow users do not understand this question. What you are looking for is "Android: prevent app from pausing"

You see, I had this problem with Flutter in 2020, but three years later and 50 google searches I found out that what I wanted is called "foreground service" which requires registering a foreground service (one max) and a persistent notification. If you want to do stuff in the "background" without showing a notification the first time, that's not exactly morally correct and you'll be having a very tough time implementing it.

### Command PhaseScriptExecution failed with a nonzero exit code. node not found or does not exist

Solution:

open `ios/.xcode.env.local` and delete the line starting with `export NODE_BINARY`.

It seems that XCode and by way a human being decided it was a good idea to hardcode a path to a node binary that doesn't exist and overrides whatever the developer is using.

## A Note to Future Developers

Make two apps. It's much better. Learn both Swift and Kotlin. Write feature in Kotlin, write feature again in Swift. Less time wasted due to these react-native specific conflicts.

A strong reason to not do this, is because Apple does not allow development on Windows. I have a solution. Use [VirtualBox](https://www.virtualbox.org/) and then install [macOS](https://www.maketecheasier.com/install-macos-virtualbox/)

Start from scratch. Do things correctly. Use Kotlin for the Android app and a Virtual Machine to code the iOS app in Swift. Do things twice in both apps because it will save you the time of debugging stupid react native build errors. Plus there's no transpilation. Everything is as close to native as possible.
