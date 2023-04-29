---
title: "ReactJS Tips"
date: 2022-09-23T19:57:18-04:00
tags: [
    "tutorial",
    "programming",
    "javascript",
    "webdev",
    "reactjs",
]
---

I'm only in the mood for writing down my thoughts, so I apologize for the upcoming messiness.

## Optimizing states that use objects

Do you use objects for some states to bundle data? So do I! Did you know that if you update
a key in the state with the same value, the object changes and so react triggers a re-render?

Well I only found out today when the hover CSS of one my views was lagging!

I used the profile and turns out my custom hook that used a state object was triggering a render when the component was simply idling.

I added an if statement inside the setState function to return the same state if the new value is already in the previous/current state!

## Use React Fragments Instead of div

I constantly see webdevs use many redundant divs in their HTML and even JSX. If you are simply using a
div as a way to organize your JSX or to return JSX without keys, then I suggest you use a React Fragment instead.

```jsx
<>
    <p>Works without key prop</p>
    <p>Works without key prop</p>
</>
```

If you need to add a key prop to the Fragment, use `<React.Fragment key=?>` instead.

## Define Props in Component Parameters

Instead of using an all encompassing `props` parameter, use this object destructuring technique

```jsx
// ExampleComponent.jsx
function ExampleComponent({ name, children }) {}
// App.jsx
<ExampleComponent name='First Last'>
    <p>temp</p>
</ExampleComponent>
```

## Using Providers.jsx for your Contexts

If you are using ContextProviders in `App.jsx` and have children components for the sake of using those contexts,
you can extract those context providers into a component `Providers.jsx` so that you can use the hooks in `App.jsx` itself and
disolve those abstraction components you had created.

```jsx
// Providers.jsx
export function Providers({ children }) {
    return (
        <Provider1>
            <Provider2>
                {isLoading ? <Splashscreen /> : children}
            </ Provider2>
        </ Provider1>
    );
}
// main.jsx
root.render(
  <React.StrictMode>
    <Providers>
      <App />
    </Providers>
  </React.StrictMode>
);
```

## Type Comparisons

This is very useful if you ever need to check the type of a variable. I found it on Stackoverlfow.

```jsx
export function trueTypeOf(obj) {
    return Object.prototype.toString.call(obj).slice(8, -1).toLowerCase()
    /*
        []              -> array
        {}              -> object
        ''              -> string
        new Date()      -> date
        1               -> number
        function () {}  -> function
        /test/i         -> regexp
        true            -> boolean
        null            -> null
        trueTypeOf()    -> undefined
    */
}
```

## useCookie Hook for Faster Simple Storage

If you need to store information that isn't a core requirement to the App's functionality, like
the theme a user is using, then I suggest using a cookie to keep track of that information. This ensures
that they user will not see a theme different from the one they selected when they go to your app.

I can't think of other examples right now, but if you aren't able to send component props from the server, then
this is better than local storage.

```js
export function useCookie(key, defaultValue, { expires = 365000, sameSite = 'lax', path = '/' } = {}) {
    // cookie expires in a millenia
    // sameSite != 'strict' because the cookie is not read for sensitive actions
    // synchronous
    const cookieValue = Cookies.get(key);
    const [state, setState] = useState(cookieValue || defaultValue);
    useEffect(() => {
        Cookies.set(key, state, { expires, sameSite, path });
    }, [state]);
    return [state, setState];
}
```

## Using useLayoutEffect for Performance Gains

useLayoutEffect is not a hook to be used for performance but rather so that
data that the user sees or modifies is the latest. useLayoutEffect is
synchronous so it is a performance hinder not a performance gainer.

## Using useState for Persistence

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

## Wrapping i18n.changeLanguage

i18n.changeLanguage persists already between app reloads and relaunches, so you do not need
to wrap the values change. I was using localForage even though it was completely unnecessary.

## Ignoring Variables From Array DeConstruct

```jsx
const [, forceUpdate] = useReducer(x => x + 1, 0);
```

## Forcing a State Update

When there is a data change, maybe you need to force the hooks to refetch.

```jsx
const [, forceUpdate] = useReducer(x => x + 1, 0);
```
