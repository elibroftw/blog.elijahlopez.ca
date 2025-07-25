---
title: "HTML and CSS - Mobile Responsive Design"
date: 2022-02-24T00:40:12-05:00
tags:
  - tutorial
  - programming
  - webdev
  - mobile
summary: "5+ tips for writing webdev code for mobile and desktop"
---

From [mdn web docs - Viewport width and screen width](https://developer.mozilla.org/docs/Web/HTML/Viewport_meta_tag#viewport_width_and_screen_width)

```html
<meta name="viewport" content="width=device-width, initial-scale=1.0, viewport-fit=cover">
```

We include `viewport-fit=cover` so that we can use [environment](https://developer.mozilla.org/docs/Web/CSS/env) variables such as `env(safe-area-inset-top)` which allows us to add padding to our pages exclusively for when this variable is set. We also get to set fallback values. This is useful for when you want your webapp to support smaller width's like maybe the window is resized to be smaller, as well as supporting devices which have unsafe areas (e.g. notches). [Using env for non-iOS devices](https://stackoverflow.com/questions/57907685/padding-envsafe-area-inset-top-is-not-working)

If you want zooming in and out to work, you can also use a scale of 0.86 instead of 1.

```html
<meta name="viewport" content="width=device-width, initial-scale=0.86, minimum-scale=0.86, viewport-fit=cover">
```

## Setting Breakpoints Variables

Tutorials will recommend to style mobile first, but I usually create websites for the desktop view first.

```css
/* mobile */
$breakpoint-xs: 36em;
/* tablet */
$breakpoint-sm: 48em;

@media screen and (max-width: $breakpoint-sm) {
    #desktop-nav>a {
        float: left;
        text-align: center;
        margin-left: 5%;
    }
}

@media screen and (max-width: $breakpoint-xs) {
    #desktop-nav {
        display: none
    }

  /* if you're building PWAs, using environment variables like safe-area-inset-top are essential for ensuring consistent styles across desktop and mobile */
  /* note that fallback values are supported */
  .container {
      padding-top: calc(20px + env(safe-area-inset-top));
    }
}
```

## Responsive Design for Row to Column

Suppose you want items to be beside each other when the screen is wide enough, but you want them to be stacked when the width is narrower.

```css
@media screen and (max-width: $breakpoint-xs) {
  .someGroup {
    flex-direction: column;
    text-align: center;
  }
}
```

## Controlling Line Breaks

Based on real examples, suppose you want to ensure that break points don't split up related words, like names for example. You can group the content using `span` and then add the `inline-block` style to the span tag. This applies for dates as well. Here is Mantine React Code with i18n showcasing how we ensured that if the text component needs to be wrapped, that the full name will get wrapped rather than possibly just the last name. Technically, you shouldn't group the words together since this is a suggested break point rather than a "group these words together" markup.

```tsx
<Text c='dimmed'>{<Trans i18nKey='WGTrademark' components={[<Text component='span' display='inline-block' />]} />}</Text>
```

```json
"WGTrademark": "WireGuard® is a registered trademark of <0>Jason A. Donenfeld.</0>",
```

## Disabling Hover Styles on Mobile

A great example of this can be found in the [Obscura VPN's Location tab](https://github.com/Sovereign-Engineering/obscuravpn-client/blob/main/obscura-ui/src/views/Location.module.css#L6). On this tab, we want to show some hover styles when the user is hovering over locations, however on mobile or any device that doesn't support the hover state, we don't want to change the style (e.g. when user is simply scrolling).

I wanted to show a hover style on a location card but (1) not when a user is pressing it on their phone while scrolling. (2) not when the user is hovering over a button that is inside the card.

```css
@media (hover: hover) {
    .locationCardNotConnected:hover:not(:has(.favoriteBtn:hover)) {
        background-color: light-dark(#f5f5f5, var(--mantine-color-dark-4));

        @mixin light {
            border-color: var(--mantine-color-teal-5) !important;
            border-width: 1px !important;
        }
    }
}
```
