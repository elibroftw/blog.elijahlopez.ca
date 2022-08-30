---
title: "JavaScript Snippets"
date: 2022-08-29T14:21:28-04:00
draft: true
tags: [
    "tutorial",
    "programming",
    "javascript",
    "webdev",
]
---

Here are some snippets that would've saved me many minutes of my time.

## YYYYMMDDHHMM to Date

```js
Date.fromYYYYMMDDHHMM = s => {
    var yyyy = s.substring(0, 4);
    var mm = s.substring(4, 6);
    var dd = s.substring(6, 8);
    var hh = s.substring(8, 10) || '00';
    var min = s.substring(10, 12) || '00';
    var sec = s.substring(12, 14) || '00';
    return new Date(yyyy, mm - 1, dd, hh, min, sec);
}
```

## Date to YYYYMMDDHHMM

```js
Date.prototype.toYYYYMMDDHHMM = function() {
    // YYYYMMDDHHMM
    // 202105070400
    const tzoffset = this.getTimezoneOffset() * 60000;
    const localDate = new Date(this - tzoffset);
    return localDate.toISOString().replace(/[^0-9]/g, '').slice(0, 12);
}
```
