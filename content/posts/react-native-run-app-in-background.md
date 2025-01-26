---
title: "React Native Run App in Background (Foreground Service)"
date: 2023-08-27T02:44:17-04:00
draft: true
---

So first, let's get the terminology out of the way. You may have searched up background and I may have used
background, but the right phrasing is "how to keep app in the foreground" 🤯. If you didn't know about the terminology, don't worry, I wrote this article so that we can succeed together.

Even though I've implemented "keeping the app in the foreground," the android implementation itself is not trivial. I've done though to ensure you can have this feature without any issues.

The code I provide can be used without explicit permission as long as you are not creating an app related to the automobile industry. If you are part of the automobile, you may ask the CTO of [Split The Tank](splitthetank.com) for permission (obviously not guaranteed which is why you need to ask).

This solution assumes you are using `react-i18next` because I want to instill production-grade practices rather than the many developers in our community who make tutorials that are more learning than pragmatic.

### Notification Permission

Add the following in `AndroidManifest.xml` (child of <manifest> tag)

```xml
    <uses-permission android:name="android.permission.FOREGROUND_SERVICE"/>
    <uses-permission android:name="android.permission.POST_NOTIFICATIONS"/>
```

### Notifee Installation and Setup

We will be using a library called `notifee`

```sh
yarn add @notifee/react-native
```

Once, you've installed it, create a directory somewhere called `notifee`. Under this directory, create a file called `notifeeHook.js` and another file called `notifeeConfig.js`. Read the usage of this hook I've provided.

<details><summary>notifeeHook.js</summary>

```js
import notifee, { AndroidImportance, AuthorizationStatus } from '@notifee/react-native';
import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Platform } from 'react-native';

/**
 * A react[-native] hook for notifee which registers (Android 8+ or SDK 26+ required) notification channels in order to show notifications.
 * Channels are updated on user language change so that the app notification settings use the language they prefer (if your app supports it).
 * Relevant documentation: https://notifee.app/react-native/docs/android/channels.
 * How to use?
 * @createChannels: use `createChannel[Group]` to create and update channels or channel groups based on users language
 * @phaseOutChannels: use `deleteChannel[Group]` to delete phased out channels OR if you need to update a setting that is "cannot be overridden"
 *  never delete code from this function unless you added a channel/group back (with the same setting values)
 *  https://notifee.app/react-native/reference/androidchannel
 */
export function useNotifee({ createChannels, phaseOutChannels }) {
    const { t, i18n } = useTranslation();

    useEffect(() => {
        (async () => {
            const settings = await notifee.requestPermission();
            if (settings.authorizationStatus >= AuthorizationStatus.AUTHORIZED) {
                // console.log('Permission settings:', settings);
            } else {
                // console.log('User declined permissions');
            }
        })();
    }, []);

    // ios does not use notification channels and groups
    if (Platform.OS === 'android') {
        useEffect(() => {
            (async () => {
                await phaseOutChannels({ t });
                await createChannels({ t });
                console.log('created channels');
            })();
        }, [i18n.resolvedLanguage]);
    }
}
```

</details>

### Channels and Groups

[notifee reference]((https://notifee.app/react-native/docs/android/channels#notifee))

Blue titles in the following screenshot are the optional channel groups and the
toggle settings are notification channels. Kapeesh (Capisce)?

![Channel groups example - notifee](https://developer.android.com/images/ui/notifications/channel-groups_2x.png)

<details><summary>Sample notifeeConfig.js</summary>

```js
import notifee from '@notifee/react-native';

export const DEFAULT_LIGHT_COLOR = '#43a6dd';

export const CHANNEL_IDS = {
    TRACKING_DISTANCE: 'trackingDistance',
    PAYMENT_SETTLEMENT: 'paymentSettlement',
    PAYMENT_REMIDNER: 'paymentReminder',
    PAYMENT_RECEIVED: 'paymentReceived',
    PAYOUT_REMINDER: 'payoutReminder'
}

export const CHANNEL_GROUPS = {
    RIDE: 'ride',
    PAYMENTS: 'payments'
};

export async function createChannels({ t }) {
    await notifee.createChannelGroup({
        id: CHANNEL_GROUPS.RIDE,
        name: t('Ride'),
    });

    await notifee.createChannelGroup({
        id: CHANNEL_GROUPS.PAYMENTS,
        name: t('Payments'),
    });

    // "tracking distance to log ride costs"
    await notifee.createChannel({
        groupId: CHANNEL_GROUPS.RIDE,
        id: CHANNEL_IDS.TRACKING_DISTANCE,
        name: t('ongoingRideChannel'),
        lights: false,
        vibration: false,
        importance: AndroidImportance.LOW,
        badge: false
    });

    // "Settle balance for { NAME }"
    await notifee.createChannel({
        groupId: CHANNEL_GROUPS.PAYMENTS,
        id: CHANNEL_IDS.PAYMENT_SETTLEMENT,
        name: t('paymentSettlmentChannel'),
        lights: false,
        vibration: false,
        importance: AndroidImportance.DEFAULT,
    });

    // "Reminder to settle balance with { NAME }"
    await notifee.createChannel({
        groupId: CHANNEL_GROUPS.PAYMENTS,
        id: CHANNEL_IDS.PAYMENT_REMIDNER,
        name: t('paymentReminderChannel'),
        lights: false,
        vibration: false,
        importance: AndroidImportance.DEFAULT
    });

    // "Payment received from { NAME }"
    await notifee.createChannel({
        groupId: CHANNEL_GROUPS.PAYMENTS,
        id: CHANNEL_IDS.PAYMENT_RECEIVED,
        name: t('paymentReceviedChannel'),
        importance: AndroidImportance.DEFAULT,
        lightColor: DEFAULT_LIGHT_COLOR,
    });

    // "Payout available"
    await notifee.createChannel({
        groupId: CHANNEL_GROUPS.PAYMENTS,
        id: CHANNEL_IDS.PAYOUT_REMINDER,
        name: t('payoutReminderChannel'),
        importance: AndroidImportance.DEFAULT,
        lightColor: DEFAULT_LIGHT_COLOR,
    });
}

export async function phaseOutChannels({ t }) {
    // Examples:
    // await notifee.deleteChannel('alarm');
    // await notifee.deleteChannelGroup('personal');
    // "Channels assigned to the group will still be functional (their group will be unassigned)"
}
```

</details>

Create an index.js in your notifee directory that [reexports](https://blog.elijahlopez.ca/posts/javascript-imports-explained/#mass-importing-and-exporting) all the exports.

Now in your root `index.js`

```js
import { createChannels, phaseOutChannels, useNotifee } from './src/notifee';

export default function Main() {
    // other code ...

    useNotifee({ createChannels, phaseOutChannels });

    // other code ...

    return <></>;
}

```

## Icon Setup

Add a small icon (transparent background) to your android project in react-native. If your `ic_launcher` is already transparent, you can skip this step. To add a small icon,TODO.

## Permission Checking

If users disable notifications, the foreground service will still work.

## Foreground Service

`BackgroundTaskScreen.js`

```js
useEffect(() => {
    notifee.registerForegroundService(_notification => {
            return new Promise(() => {
                // this code runs after we display the notification
                console.log('foreground service');
                // either do you loop task here...
            });
        });
    notifee.displayNotification({
                    title: t('ongoingRideTitle'),
                    body: t('ongoingRideBody'),
                    android: {
                        channelId: CHANNEL_IDS.TRACKING_DISTANCE,
                        asForegroundService: true,
                        // color: DEFAULT_NOTIF_COLOR, // TODO: use system background color
                        colorized: true,
                        // largeIcon: require(...),
                        smallIcon: 'ic_launcher_foreground',
                        color: undefined,
                        /*
                        actions: [
                            {
                                title: t('endRide'),
                                pressAction: { id: 'endRide' },
                            },
                            {
                                title: t('cancelRide'),
                                pressAction: { id: 'cancelRide' },
                            },
                        ],
                        */
                    },
                });
}, []);

useEffect(() => {
    // a task here will also continue running
    // or so it seems (tested for 5 minutes without app being suspended)
}, []);
```

If you want to add the notification only at the last minute, you can modify the following code to create the foreground service and the notification on background here; and to stop the service (notification does not need to be explicitly stopped) when the app comes into the foreground.

I'll modify the code for you in the future since this is not MVP (minimum viable product) related functionality.

```js
// or you could modify this code
useEffect(() => {
        const subscription = AppState.addEventListener('change', nextAppState => {
            if (
                appState.current.match(/inactive|background/) &&
                nextAppState === 'active'
            ) {
                console.log('App has come to the foreground!');
            }

            appState.current = nextAppState;
            setAppStateVisible(appState.current);
            console.log('AppState', appState.current);
        });

        return subscription.remove;
    }, []);
```
