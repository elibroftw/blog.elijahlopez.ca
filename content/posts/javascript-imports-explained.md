---
title: "JavaScript ES6 Imports Explained"
date: 2022-03-31T09:27:06-04:00
tags:
  - tutorial
  - programming
  - javascript
  - webdev
summary: "This post explains JavaScript ES6 imports, contrasting them with NodeJS `require`. It details importing default exports (without braces) and named exports (with braces), including renaming imports. It also covers mass importing and exporting using `index.js` files and the `import * as` syntax, providing code examples for each concept."
---

If you work extensively with NodeJS, you probably already know of `require('express');`

However, what about the elgant ES6 imports?

## No Braces

When no braces are used, you are importing the default export and
get to use whatever name you want. In your file, all variables and functions
that you want importable by the client need to be explicitly exported.
You can also export multiple variables at once, but this article is about importing,
not as much so about exporting.

### Examples

In `Home.js`,

```js
export default function Main() { ... }
```

In `App.js`,

```js
// the imported name is arbitrary
import HomeComponent from './Home';
```

Imports follow unix file conventions!

### Exporting a {} Object as default

```js
export default { ... };
```

## Braces

```js
import { Fragment } from 'react';
```

This would be used if the variable exported is not the default. To import
these non-default imports under another name we do:

```js
import { IoSunnySharp as SunIcon } from 'react-icons/io5';
import { BsMoonStarsFill as MoonIcon } from 'react-icons/bs';
```

### Example

```js
export const schedule200 = { ... };
```

## Mass Importing and Exporting

```js
// Files/index.js
export { default as file1 } from '/file1.js';
export { default as file2 } from '/file1.js';
// App.jsx
// import everything from Files under filese
import * as files from './Files';
console.log(files.file1);
// App.jsx alternative
import { file1, file2 } from './Files';
console.log(file1);
```
