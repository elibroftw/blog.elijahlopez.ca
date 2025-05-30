---
title: "How to Learn React in 2024"
date: 2024-04-20T23:08:09-04:00
draft: false
tags:
  - programming
  - tutorial
  - webdev
summary: "A guide for backend engineers on learning React in 2024, covering setup, fundamentals, web tech, deployment, and testing."
---

I saw a [post on reddit](https://www.reddit.com/r/reactjs/comments/1c89755/im_a_diehard_backend_engineer_where_to_learn_react/) today about a backend engineer wanting to learn React and of course the first comment assumes a backend engineer knows what `package.json` is.

So here's what I would tell someone if I needed them to work on a React project. If I ever need to hire someone to work on my project, I would need them to be able to fix React code and write tests for it, because that's pretty hard.

1. Install the NodeJS LTS via `nvm` or `nvm-windows`
  Install nodeJS via nvm or nvm-windows
    `nvm: curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/master/install.sh | bash`
    nvm-windows: [nvm-setup.exe](https://github.com/coreybutler/nvm-windows/releases/latest/download/nvm-setup.exe)
2. Enable yarn (`corepack enable`)
3. `yarn create vite` &rarr; React + Typescript
4. [Learn React](https://react.dev/learn) (UI + Logic).
    - Remember to learn CSS so you can customize libraries. People will recommend tailwind, but I digress. I've seen what people have written with tailwind and it's atrocious (unreadable). Styles should rarely change, and so shouldn't pollute the component.
5. Once you know what Contexts are and when to use them, focus on some web-specific tech. One thing missing from most web tutorials and templates is a baked in service-worker.js and manifest to quickly deploy a progressive web app. Such a shame really. PWA basically allow you to ship to mobile without having to learn expo and dealing with App Store or Google Play Store policies.
6. Think about deployment. SPA (no backend) -> GitHub Pages. SPA (+backed) (e.g. DigitalOcean App Platform).
7. Write like one or two tests using jest or cypress

Sorry if this isn't completely finished, I got carried away with something else in the middle of writing this.
