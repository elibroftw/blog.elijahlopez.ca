---
title: "ReactJS Pitfalls & Tricks"
date: 2022-09-23T19:57:18-04:00
tags: [
    "tutorial",
    "programming",
    "javascript",
    "webdev",
    "reactjs",
]
---

I'm only in the mood for writing down my thoughts, so I apologize for upcoming messyness.

## Pitfall 1: Using useLayoutEffect for Performance Gains

useLayoutEffect is not a hook to be used for performance but rather so that
data that the user sees or modifies is the latest. useLayoutEffect is
synchronous so it is a performance hinder not a performance gainer.

## Pitfall 2: Using useState for Persistence

TL;DR: Use useRef in the parent to keep track of a child's state value.

In an app structure like the following,

```txt
- App
    - Home
        - View 1...n
    - Other Pages
```

I wanted to keep track of which view was open so that when ever the user would
switch from Home to another Page and back to Home, the same view would open.

Home already had a state to keep track of which View was open and a setView
that was passed down to each of the views so that they could go to eachother.
Thus, I had a useEffect in Home.jsx to capture Home's view variable and update
App's view variable.

The implications of this only occured to me afterwards when I wanted to persistent a value between different Views.
I tried to do the same "trick" at the Home scope, but for some reason every time I switched Views, the value I was trying
to persist would get reset to the default of setState.

What was happening was that changing views would update not only Home's state, but also App's state. Therefore Home would get re-rendered (instead of just the part that changed) and so the state would get overwritten.

I then decided its better anyways to persist the value I wanted to persist on the App scope so that it persists even if Home dismounts.
I then realized that the variable wasn't actually used as a state but rather as a persistant variable, and so I did some research and
found out that useRef isn't just something to use to refer to stuff, but to just hold anything. useRef more like useValue.

Instead of passing down two props for each state, I was now passing one ref, and improved performance due to limiting the scope of the re-render.

## Pitfall 3: Wrapping i18n.changeLanguage

i18n.changeLanguage persists already between app reloads and relaunches, so you do not need
to wrap the values change. I was using localForage even though it was completely unnecessary.
