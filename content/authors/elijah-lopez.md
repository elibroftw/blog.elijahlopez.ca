---
title: "Elijah Lopez"
authorPage: true
disableFeed: true
tags:
  - author
summary: The primary author of the blog. My website summarizes my most proud of productions, my GitHub summarizes my most useful software projects, and my YouTube has some videos that I tried to make useful.
---

Wow, so I _can_ add an authors page. Now I just need to figure out how to add all posts with the author automatically. I'm looking into layouts. For now, we will use archetypes to speed up the creation of these about pages.

I created a new archetype in the theme so that running

```sh
hugo new authors/first-last.md
```

will spit out

```yml
---
title: "First Last"
authorPage: true
---
```

As for the about me, my website summarizes my most proud of productions, my GitHub summarizes my most useful software projects, and my YouTube has some videos that I tried to make useful.
