---
title: "HTML and CSS - Mobile Responsive Design"
date: 2022-02-24T00:40:12-05:00
draft: false
tags: [
    "html",
    "css"
]
---

Tutorials nowadays just regurgitate the wrong information! Here's the right way to do mobile responsive design. The key is to use
a scale of 0.86 instead of 1. This way zooming in and out actually works!

From [https://developer.mozilla.org/en-US/docs/Web/HTML/Viewport_meta_tag#viewport_width_and_screen_width](https://developer.mozilla.org/en-US/docs/Web/HTML/Viewport_meta_tag#viewport_width_and_screen_width)

```html
<meta name="viewport" content="width=device-width, initial-scale=0.86, minimum-scale=0.86">
```

Tutorials will recommend to style mobile first, but I usually create websites for the desktop view first.

```css
/* This is optional. I call it the Tablet or 16:10 ratio */
@media screen and (max-width:1280px) {
    #desktop-nav>a {
        float: left;
        text-align: center;
        margin-left: 5%;
    }
}

/* This is the mobile view */
@media screen and (max-width:870px) {
    #desktop-nav {
        display: none
    }
}
```
