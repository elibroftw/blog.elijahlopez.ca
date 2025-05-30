---
title: "Tauri Custom Titlebar (React)"
date: 2022-12-24T10:45:01-05:00
tags:
  - tutorial
  - programming
  - javascript
  - webdev
  - react
  - tauri
summary: "Implement a custom titlebar in your Tauri and ReactJS application, including handling window controls, translations, and ensuring rounded corners on Windows 11."
---

This tutorial is based on Part 12 of my Tauri & ReactJS series.

{{< youtube zONyCMTUwsI >}}

In this article, I'll show you how I implemented custom titlebars for my Tauri apps. I'll start off with an overview for
what's required.

The source code can be found [here](https://github.com/elibroftw/modern-desktop-app-template)

- Tauri APIs
- Coding `Titlebar.jsx`
- How to get the translations for the window control tooltips
- Enabling/disabling the native & custom titlebar based on the Operating System and if in fullscreen
- Using `simplebar` so that scrollbars are not beside the titlebar
- Using `window-shadows` crate to ensure rounded corners on Windows 11

{{< toc >}}

## package.json

The react libraries used are `@mantine/hooks`, `react-i18next`, `simplebar-react`, `react-icons`.

I also use a styling library, `@mantine/core`, but it's not a hard requirement for a custom titlebar.

## Tauri APIs

<details>
<summary>src-tauri/tauri.conf.json: Enable window APIs</summary>

```json
{
    // ...
    "tauri": {
        // ...
        "allowlist": {
            // ...
            "window": {
                    // ...
                    "close": true,
                    "maximize": true,
                    "minimize": true,
                    "setDecorations": true,
                    "startDragging": true,
                    "unmaximize": true,
                    "unminimize": true
                }
        }
    }
}
```

</details>

<details>
<summary>src-tauri/tauri.windows.conf.json: disable decorations by default on Windows</summary>

```json
{
    "tauri": {
        "windows": [
            {
                // copy window details from tauri.conf.json
                "decorations": false,
              }
        ]
    }
}
```

</details>

## Titlebar.jsx

NOTE: This is a Windows replica. This article does not support custom Mac titlebars since I don't own a Mac and thus cannot
replicate it so easily.

Create a `src/Component/Titlebar.jsx` where we will create a component that works in a plug and play manner.

You can modify this component to either use a different UI/styling library as well as to change the default title.
In a future version of Tauri, the Titlebar will automatically synchronize the title (if you need synching asap for a
production app, use a tauri version from a git revision rather than creates.io).

There is some code commented out if you want the title to be in the center rather than the left side.
The styling was hand picked, especially the reds used for the close button.
If you want to, you can remove or replace the Menu that shows up when you hover the app icon.

<details>
<summary>Code</summary>

```jsx
import { createStyles, Menu, Text, UnstyledButton } from '@mantine/core';
import { useInterval } from '@mantine/hooks';
import { appWindow } from '@tauri-apps/api/window';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { VscChromeClose, VscChromeMaximize, VscChromeMinimize, VscChromeRestore } from 'react-icons/vsc';
import AppIcon from '../../src-tauri/icons/32x32.png';

export function Titlebar() {
    const { t } = useTranslation();
    const { classes } = getTitleBarStyles();
    const [maximized, setMaximized] = useState(false);
    const [fullscreen, setFullscreen] = useState(false);
    const [windowTitle, setWindowTitle] = useState('TitleBar.jsx Title');

    const tauriInterval = useInterval(() => {
        appWindow.isMaximized().then(setMaximized);
        appWindow.isFullscreen().then(setFullscreen);
        appWindow.title().then(setWindowTitle);
    }, 200);

    useEffect(() => {
        tauriInterval.start();
        return tauriInterval.stop;
    }, []);

    return !fullscreen && <div data-tauri-drag-region className={classes.titlebar}>
        <div>
            {/* window icon */}
            <Menu shadow='md' width={200}>
                <Menu.Target>
                    <UnstyledButton style={{ cursor: 'default' }}><img className={classes.titlebarIcon} height={16} src={AppIcon} /></UnstyledButton>
                </Menu.Target>
                <Menu.Dropdown>
                    <Menu.Item onClick={() => appWindow.minimize()} icon={<VscChromeMinimize size={14} />}>{t('Minimize')}</Menu.Item>
                    {maximized ?
                        <Menu.Item onClick={() => appWindow.toggleMaximize()} icon={<VscChromeRestore size={14} />}>{t('Restore Down')}</Menu.Item> :
                        <Menu.Item onClick={() => appWindow.toggleMaximize()} icon={<VscChromeMaximize size={14} />}>{t('Maximize')}</Menu.Item>}
                    <Menu.Divider />
                    <Menu.Item onClick={() => appWindow.close()} icon={<VscChromeClose size={14} />} rightSection={
                        <Text weight='bold' size='xs'>Alt + F4</Text>}>{t('Close')}</Menu.Item>
                </Menu.Dropdown>
            </Menu>
            {/* left window title */}
            <Text data-tauri-drag-region inline className={classes.titlebarLabel} size='xs'>{windowTitle}</Text>
        </div>
        {/* center window title */}
        {/* <Text data-tauri-drag-region inline className={classes.titlebarLabel} size='xs'>{windowTitle}</Text> */}
        <div>
            {/* window icons */}
            <div title={t('Minimize')} className={classes.titlebarButton} onClick={() => appWindow.minimize()}>
                <VscChromeMinimize className={classes.verticalAlign} />
            </div>
            {maximized ?
                <div title={t('Restore Down')} className={classes.titlebarButton} onClick={() => appWindow.toggleMaximize()}>
                    <VscChromeRestore className={classes.verticalAlign} />
                </div> :
                <div title={t('Maximize')} className={classes.titlebarButton} onClick={() => appWindow.toggleMaximize()}>
                    <VscChromeMaximize className={classes.verticalAlign} />
                </div>
            }
            <div title={t('Close')} className={`${classes.titlebarClose} ${classes.titlebarButton}`} onClick={() => appWindow.close()}>
                <VscChromeClose className={classes.verticalAlign} />
            </div>
        </div>
    </div>;
}

const getTitleBarStyles = createStyles(theme => ({
    titlebarIcon: {
        marginLeft: 5,
        verticalAlign: 'bottom',
        filter: theme.colorScheme === 'dark' ? '' : 'grayscale(100%) contrast(0)'
    },
    verticalAlign: {
        verticalAlign: 'middle'
    },
    titlebarLabel: {
        display: 'inline',
        marginLeft: 5,
        // marginLeft: 46 * 3 - 16 - 7.5  // for center labels
        lineHeight: '30px'
    },
    titlebar: {
        height: 30,
        background: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[1],
        // background: theme.colorScheme === 'dark' ? theme.colors.dark[7] : 'white',
        display: 'flex',
        justifyContent: 'space-between',
        position: 'fixed',
        userSelect: 'none',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        '>div:nth-of-type(2)': {
            display: 'flex',
            justifyContent: 'flex-end',
        }
    },
    titlebarButton: {
        transitionDuration: '200ms',
        display: 'inline-flex',
        justifyContent: 'center',
        alignItems: 'center',
        '>svg': {
            fill: theme.colorScheme === 'dark' ? 'white' : 'black',
        },
        width: 46,
        height: 30,
        '&:hover': {
            background: theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.gray[3],
            '&:active': {
                background: theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[4],
            }
        }
    },
    titlebarClose: {
        '&:hover': {
            background: '#e81123',
            '>svg': {
                fill: 'white'
            },
            '&:active': {
                background: theme.colorScheme === 'dark' ? '#8b0a14' : '#f1707a',
            }
        }
    }
}));
```
</details>

## i18n.js

To get the translations for the buttons in another language, do not use Google translate. Rather, change the display language for Windows and after logging back in hover the window control buttons
of native Windows applications. I did this for French (Canadian) and got the following. Google Translate gave something different for Maximize and Restore down.

```js
fr: {
    translations: {
      'Minimize': 'Réduire',
      'Maximize': 'Agrandir',
      'Restore Down': 'Niveau inf.',
      'Close': 'Fermer',
    }
}
```

## How to use Titlebar.jsx effectively

To use the titlebar effectively, we need to first determine at runtime if we are using a custom titlebar or not.
We also need to use scrollbars for inner components and disable the scrollbar for the entire window. Otherwise
the scrollbar will show up beside the custom titlebar.

In `src/App.jsx` I have the following code. [src/TauriProvider.jsx implementation](https://github.com/elibroftw/modern-desktop-app-template/blob/master/src/TauriProvider.jsx)

```jsx
import { useState, useEffect, useRef } from 'react';
import SimpleBar from 'simplebar-react';
import 'simplebar/dist/simplebar.min.css';
import { Titlebar } from './Components/Titlebar';
import { useInterval } from '@mantine/hooks';
import { appWindow } from '@tauri-apps/api/window'
import { useTauriContext } from './TauriProvider';
import { WIN32_CUSTOM_TITLEBAR } from './utils';  // this is a constant set to true

// ...
   // use the custom title bar only on Windows
  const { osType } = useTauriContext();
  useEffect(() => {
    if (osType === 'Windows_NT') appWindow.setDecorations(!WIN32_CUSTOM_TITLEBAR);
  }, [osType]);

  // hide titlebar in fullscreen
  const [fullscreen, setFullscreen] = useState(false);
  const tauriInterval = useInterval(() => {
    appWindow.isFullscreen().then(setFullscreen);
  }, 200);
  useEffect(() => {
    tauriInterval.start();
    return tauriInterval.stop
  }, []);

  // use this variable like so <COMPONENT className={using_custom_titlebar ? classes.titlebarMargin : ''} />
  const using_custom_titlebar = !fullscreen && osType === 'Windows_NT' && WIN32_CUSTOM_TITLEBAR;
  // ...
  const scrollbar = useRef(); // pass this into a Scroll to top component
  return <>
        {using_custom_titlebar && <Titlebar />}
        {/* if you are using mantine, set dynamic global styles for  the custom scrollbar*/}
        {/* <Global styles={titlebarOverrides} /> */}
        <SimpleBar scrollableNodeProps={{ref: scrollbar}} autoHide={false} className={classes.simpleBar}>
            {/* code goes here */}
        </SimpleBar>
    </>;
```

Classes are as follows in my case

```js
    simpleBar: {
        maxHeight: '100vh',
    },
    titlebarMargin: {
        marginTop: '2em'
    },
    headerOverrides: {
        maxHeight: 'calc(70px + 1em)',
        paddingBottom: '0 !important',
        marginTop: '1em',
    },
```

Global styles:

```js
    '.simplebar-vertical': {
        backgroundClip: 'padding-box',
        marginTop: using_custom_titlebar ? 100 : 70,
        marginBottom: showFooter ? 50 : 0,
    },
    body: {
        overflowY: 'hidden'
    }
```

## Windows 11 Rounded Corners

To add back the rounded corners when decorations are off, add `window-shadows` to your `Cargo.toml`

```toml
[dependencies]
window-shadows = {git = "https://github.com/tauri-apps/window-shadows", branch = "dev" }
```

Usage in `main.rs`:

```rust
// -----------------------------
use window_shadows::set_shadow;
// -----------------------------

fn main() {
    tauri::Builder::default()
// -----------------------------
        .setup(|app| {
            if let Some(window) = app.get_window("main") {
                set_shadow(&window, true).expect("Unsupported platform!");
            }
            Ok(())
        })
// -----------------------------
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}
```

## Conclusion

This took around a couple hours to implement and I've provided this code to give you a headstart as I know very well
everyone's implementation will be slightly different.
