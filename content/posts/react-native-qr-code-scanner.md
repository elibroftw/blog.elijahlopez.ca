---
title: "React Native QR Code Scanner (2023)"
date: 2023-08-05T11:13:28-04:00
draft: false
tags:
  - tutorial
  - programming
  - react-native
  - mobile
summary: "Tutorial on implementing a QR code scanner in React Native using `react-native-camera-kit`, covering installation, platform configuration, and basic usage."
---

Shout out to Tesla motors. Although a recruiter that works there rejected me with the wrong name, they made a react native package that is simple to use.
This method is a much easier and hassle free experience than react-native-vision-camera which does not work on the latest react-native: 0.72.

## Package Installation

First install the camera kit package by teslamotors:

```sh
yarn add react-native-camera-kit
```

## Android Configuration

If you are using VSCode, you will find "Ctrl + E" (if this doesn't work on Mac, try Cmd + E) useful for opening up the files that you need to edit.

### Adding Kotlin

Follow [the tutorial provided by Tesla](https://github.com/teslamotors/react-native-camera-kit/blob/master/docs/kotlin.md#add-kotlin-support-for-Android)

NOTE: the tutorial uses `.` which is nothing but `{` in the gradle files.

### Android Camera Permissions

In `AndroidManifest.xml`, add the following under `<manifest ...>`

```xml
<uses-permission android:name="android.permission.CAMERA" />
<uses-permission android:name="android.permission.WRITE_EXTERNAL_STORAGE"/>
```

## iOS Configuration

```sh
cd ios && pod install && cd ..
```

### iOS Camera Permissions

In `Info.plist`, add the following under `<dict>`

```plist
    <key>NSCameraUsageDescription</key>
    <string>For taking photos</string>
    <key>NSPhotoLibraryUsageDescription</key>
    <string>For saving photos</string>
```

## Usage

[Additional props. You are advised to read them for more functionality.](https://github.com/teslamotors/react-native-camera-kit#camera-props-optional)

```jsx
import { Camera, CameraType } from 'react-native-camera-kit';

return <Camera
      style={{ height: '50%' }}
      flashMode='auto'
      scanBarcode
      onReadCode={event => {
            console.log(event.nativeEvent.codeStringValue);
      }}
    />
```

<details><summary>Sample Event (very long)</summary>

```js
{
    "_dispatchInstances": {
        "_debugHookTypes": null,
        "_debugNeedsRemount": false,
        "_debugOwner": {
            "_debugHookTypes": [Array
            ],
            "_debugNeedsRemount": false,
            "_debugOwner": [FiberNode
            ],
            "_debugSource": undefined,
            "actualDuration": 0.9124748706817627,
            "actualStartTime": 1280787844.218961,
            "alternate": [FiberNode
            ],
            "child": [Circular
            ],
            "childLanes": 0,
            "deletions": null,
            "dependencies": null,
            "elementType": [Object
            ],
            "flags": 5,
            "index": 0,
            "key": null,
            "lanes": 0,
            "memoizedProps": [Object
            ],
            "memoizedState": [Object
            ],
            "mode": 2,
            "pendingProps": [Object
            ],
            "ref": [Function ref
            ],
            "return": [FiberNode
            ],
            "selfBaseDuration": 0.8537600040435791,
            "sibling": null,
            "stateNode": null,
            "subtreeFlags": 4,
            "tag": 11,
            "treeBaseDuration": 0.8878579139709473,
            "type": [Object
            ],
            "updateQueue": [Object
            ]
        },
        "_debugSource": undefined,
        "actualDuration": 0.05257081985473633,
        "actualStartTime": 1280787845.0774,
        "alternate": {
            "_debugHookTypes": null,
            "_debugNeedsRemount": false,
            "_debugOwner": [FiberNode
            ],
            "_debugSource": undefined,
            "actualDuration": 0.06669163703918457,
            "actualStartTime": 1280787832.451261,
            "alternate": [Circular
            ],
            "child": null,
            "childLanes": 0,
            "deletions": null,
            "dependencies": null,
            "elementType": "CKCameraManager",
            "flags": 4,
            "index": 0,
            "key": null,
            "lanes": 0,
            "memoizedProps": [Object
            ],
            "memoizedState": null,
            "mode": 2,
            "pendingProps": [Object
            ],
            "ref": [Object
            ],
            "return": [FiberNode
            ],
            "selfBaseDuration": 0.03959178924560547,
            "sibling": null,
            "stateNode": [ReactNativeFiberHostComponent
            ],
            "subtreeFlags": 0,
            "tag": 5,
            "treeBaseDuration": 0.03959178924560547,
            "type": "CKCameraManager",
            "updateQueue": null
        },
        "child": null,
        "childLanes": 0,
        "deletions": null,
        "dependencies": null,
        "elementType": "CKCameraManager",
        "flags": 4,
        "index": 0,
        "key": null,
        "lanes": 0,
        "memoizedProps": {
            "cameraOptions": [Object
            ],
            "cameraType": "back",
            "flashMode": "auto",
            "frameColor": -1,
            "laserColor": -65536,
            "onReadCode": [Function onReadCode
            ],
            "scanBarcode": true,
            "style": [Object
            ],
            "surfaceColor": undefined
        },
        "memoizedState": null,
        "mode": 2,
        "pendingProps": {
            "cameraOptions": [Object
            ],
            "cameraType": "back",
            "flashMode": "auto",
            "frameColor": -1,
            "laserColor": -65536,
            "onReadCode": [Function onReadCode
            ],
            "scanBarcode": true,
            "style": [Object
            ],
            "surfaceColor": undefined
        },
        "ref": {
            "current": [ReactNativeFiberHostComponent
            ]
        },
        "return": {
            "_debugHookTypes": [Array
            ],
            "_debugNeedsRemount": false,
            "_debugOwner": [FiberNode
            ],
            "_debugSource": undefined,
            "actualDuration": 0.9124748706817627,
            "actualStartTime": 1280787844.218961,
            "alternate": [FiberNode
            ],
            "child": [Circular
            ],
            "childLanes": 0,
            "deletions": null,
            "dependencies": null,
            "elementType": [Object
            ],
            "flags": 5,
            "index": 0,
            "key": null,
            "lanes": 0,
            "memoizedProps": [Object
            ],
            "memoizedState": [Object
            ],
            "mode": 2,
            "pendingProps": [Object
            ],
            "ref": [Function ref
            ],
            "return": [FiberNode
            ],
            "selfBaseDuration": 0.8537600040435791,
            "sibling": null,
            "stateNode": null,
            "subtreeFlags": 4,
            "tag": 11,
            "treeBaseDuration": 0.8878579139709473,
            "type": [Object
            ],
            "updateQueue": [Object
            ]
        },
        "selfBaseDuration": 0.034097909927368164,
        "sibling": null,
        "stateNode": {
            "_children": [Array
            ],
            "_internalFiberInstanceHandleDEV": [Circular
            ],
            "_nativeTag": 269,
            "viewConfig": [Object
            ]
        },
        "subtreeFlags": 0,
        "tag": 5,
        "treeBaseDuration": 0.034097909927368164,
        "type": "CKCameraManager",
        "updateQueue": null
    },
    "_dispatchListeners": [Function onReadCode
    ],
    "_targetInst": {
        "_debugHookTypes": null,
        "_debugNeedsRemount": false,
        "_debugOwner": {
            "_debugHookTypes": [Array
            ],
            "_debugNeedsRemount": false,
            "_debugOwner": [FiberNode
            ],
            "_debugSource": undefined,
            "actualDuration": 0.9124748706817627,
            "actualStartTime": 1280787844.218961,
            "alternate": [FiberNode
            ],
            "child": [Circular
            ],
            "childLanes": 0,
            "deletions": null,
            "dependencies": null,
            "elementType": [Object
            ],
            "flags": 5,
            "index": 0,
            "key": null,
            "lanes": 0,
            "memoizedProps": [Object
            ],
            "memoizedState": [Object
            ],
            "mode": 2,
            "pendingProps": [Object
            ],
            "ref": [Function ref
            ],
            "return": [FiberNode
            ],
            "selfBaseDuration": 0.8537600040435791,
            "sibling": null,
            "stateNode": null,
            "subtreeFlags": 4,
            "tag": 11,
            "treeBaseDuration": 0.8878579139709473,
            "type": [Object
            ],
            "updateQueue": [Object
            ]
        },
        "_debugSource": undefined,
        "actualDuration": 0.05257081985473633,
        "actualStartTime": 1280787845.0774,
        "alternate": {
            "_debugHookTypes": null,
            "_debugNeedsRemount": false,
            "_debugOwner": [FiberNode
            ],
            "_debugSource": undefined,
            "actualDuration": 0.06669163703918457,
            "actualStartTime": 1280787832.451261,
            "alternate": [Circular
            ],
            "child": null,
            "childLanes": 0,
            "deletions": null,
            "dependencies": null,
            "elementType": "CKCameraManager",
            "flags": 4,
            "index": 0,
            "key": null,
            "lanes": 0,
            "memoizedProps": [Object
            ],
            "memoizedState": null,
            "mode": 2,
            "pendingProps": [Object
            ],
            "ref": [Object
            ],
            "return": [FiberNode
            ],
            "selfBaseDuration": 0.03959178924560547,
            "sibling": null,
            "stateNode": [ReactNativeFiberHostComponent
            ],
            "subtreeFlags": 0,
            "tag": 5,
            "treeBaseDuration": 0.03959178924560547,
            "type": "CKCameraManager",
            "updateQueue": null
        },
        "child": null,
        "childLanes": 0,
        "deletions": null,
        "dependencies": null,
        "elementType": "CKCameraManager",
        "flags": 4,
        "index": 0,
        "key": null,
        "lanes": 0,
        "memoizedProps": {
            "cameraOptions": [Object
            ],
            "cameraType": "back",
            "flashMode": "auto",
            "frameColor": -1,
            "laserColor": -65536,
            "onReadCode": [Function onReadCode
            ],
            "scanBarcode": true,
            "style": [Object
            ],
            "surfaceColor": undefined
        },
        "memoizedState": null,
        "mode": 2,
        "pendingProps": {
            "cameraOptions": [Object
            ],
            "cameraType": "back",
            "flashMode": "auto",
            "frameColor": -1,
            "laserColor": -65536,
            "onReadCode": [Function onReadCode
            ],
            "scanBarcode": true,
            "style": [Object
            ],
            "surfaceColor": undefined
        },
        "ref": {
            "current": [ReactNativeFiberHostComponent
            ]
        },
        "return": {
            "_debugHookTypes": [Array
            ],
            "_debugNeedsRemount": false,
            "_debugOwner": [FiberNode
            ],
            "_debugSource": undefined,
            "actualDuration": 0.9124748706817627,
            "actualStartTime": 1280787844.218961,
            "alternate": [FiberNode
            ],
            "child": [Circular
            ],
            "childLanes": 0,
            "deletions": null,
            "dependencies": null,
            "elementType": [Object
            ],
            "flags": 5,
            "index": 0,
            "key": null,
            "lanes": 0,
            "memoizedProps": [Object
            ],
            "memoizedState": [Object
            ],
            "mode": 2,
            "pendingProps": [Object
            ],
            "ref": [Function ref
            ],
            "return": [FiberNode
            ],
            "selfBaseDuration": 0.8537600040435791,
            "sibling": null,
            "stateNode": null,
            "subtreeFlags": 4,
            "tag": 11,
            "treeBaseDuration": 0.8878579139709473,
            "type": [Object
            ],
            "updateQueue": [Object
            ]
        },
        "selfBaseDuration": 0.034097909927368164,
        "sibling": null,
        "stateNode": {
            "_children": [Array
            ],
            "_internalFiberInstanceHandleDEV": [Circular
            ],
            "_nativeTag": 269,
            "viewConfig": [Object
            ]
        },
        "subtreeFlags": 0,
        "tag": 5,
        "treeBaseDuration": 0.034097909927368164,
        "type": "CKCameraManager",
        "updateQueue": null
    },
    "bubbles": undefined,
    "cancelable": undefined,
    "currentTarget": {
        "_children": [],
        "_internalFiberInstanceHandleDEV": {
            "_debugHookTypes": null,
            "_debugNeedsRemount": false,
            "_debugOwner": [FiberNode
            ],
            "_debugSource": undefined,
            "actualDuration": 0.05257081985473633,
            "actualStartTime": 1280787845.0774,
            "alternate": [FiberNode
            ],
            "child": null,
            "childLanes": 0,
            "deletions": null,
            "dependencies": null,
            "elementType": "CKCameraManager",
            "flags": 4,
            "index": 0,
            "key": null,
            "lanes": 0,
            "memoizedProps": [Object
            ],
            "memoizedState": null,
            "mode": 2,
            "pendingProps": [Object
            ],
            "ref": [Object
            ],
            "return": [FiberNode
            ],
            "selfBaseDuration": 0.034097909927368164,
            "sibling": null,
            "stateNode": [Circular
            ],
            "subtreeFlags": 0,
            "tag": 5,
            "treeBaseDuration": 0.034097909927368164,
            "type": "CKCameraManager",
            "updateQueue": null
        },
        "_nativeTag": 269,
        "viewConfig": {
            "NativeProps": [Object
            ],
            "bubblingEventTypes": [Object
            ],
            "directEventTypes": [Object
            ],
            "uiViewClassName": "CKCameraManager",
            "validAttributes": [Object
            ]
        }
    },
    "defaultPrevented": undefined,
    "dispatchConfig": {
        "registrationName": "onReadCode"
    },
    "eventPhase": undefined,
    "isDefaultPrevented": [Function functionThatReturnsFalse
    ],
    "isPropagationStopped": [Function functionThatReturnsFalse
    ],
    "isTrusted": undefined,
    "nativeEvent": {
        "codeStringValue": "https://api.splitthetank.com/join?rideId=undefined&driver=xxelibroxx@gmail.com"
    },
    "target": {
        "_children": [],
        "_internalFiberInstanceHandleDEV": {
            "_debugHookTypes": null,
            "_debugNeedsRemount": false,
            "_debugOwner": [FiberNode
            ],
            "_debugSource": undefined,
            "actualDuration": 0.05257081985473633,
            "actualStartTime": 1280787845.0774,
            "alternate": [FiberNode
            ],
            "child": null,
            "childLanes": 0,
            "deletions": null,
            "dependencies": null,
            "elementType": "CKCameraManager",
            "flags": 4,
            "index": 0,
            "key": null,
            "lanes": 0,
            "memoizedProps": [Object
            ],
            "memoizedState": null,
            "mode": 2,
            "pendingProps": [Object
            ],
            "ref": [Object
            ],
            "return": [FiberNode
            ],
            "selfBaseDuration": 0.034097909927368164,
            "sibling": null,
            "stateNode": [Circular
            ],
            "subtreeFlags": 0,
            "tag": 5,
            "treeBaseDuration": 0.034097909927368164,
            "type": "CKCameraManager",
            "updateQueue": null
        },
        "_nativeTag": 269,
        "viewConfig": {
            "NativeProps": [Object
            ],
            "bubblingEventTypes": [Object
            ],
            "directEventTypes": [Object
            ],
            "uiViewClassName": "CKCameraManager",
            "validAttributes": [Object
            ]
        }
    },
    "timeStamp": 1691248335537,
    "type": undefined
}
```

</details>
