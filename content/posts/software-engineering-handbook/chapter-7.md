---
title: "Chapter 7 - Frontend Development"
date: 2025-03-06T15:07:35-05:00
draft: true
aliases: ["/posts/software-engineering-handbook/chapter-7"]
summary: TODO
---

Frontend developer is synonymous with web developer, a developer who specializes on working on a website based stack of technologies.

[A collective list of free APIs](https://github.com/public-apis/public-apis)

I have a bunch of articles on the topic, so I will be referencing them here.

The absolute basics of frontend development are HTML and CSS. These are fundamental to know before branching into the web APP technologies such as React and Solid.
When writing websites using the absolute basics such as HTML, CSS, and JavaScript (as glue), this stack would be called Vanilla. It's not wrong but it does lead to less manageable code and can even be less productive compared to having already learned a more web app based technology such as React.

I'm going to skip the part where I teach you the basics, as there are plenty of resources to do so. Instead, as this is a software engineering book, I will be listing best practices and tricks that regular resources do not teach.

## Learn JavaScript then TypeScript

If you're starting new projects, just go with Typescript, but you still need to learn the JavaScript language.

## Developing Web App for Desktop first or mobile first?

When mobile first came out, they were deemed slower than desktop and designing for mobile first was recommended so that the browser can render the CSS styles quicker.
However, I'd argue that mobiles and tablets are actually quicker than some cheap laptops being used today, thus my argument is that it's better to design for desktop as you will be more productive. It's much easier to design desktop first as you can shove more information onto the website and then decide which content to hide or shrink when screen space becomes scarce.

## Introducing Responsive Design

You may be wondering how to actually adapt your website for desktop and mobile simultaneously. I suggest reading [Mobile Responsive Design](/posts/mobile-responsive-design/) to get started. CSS supports media queries and combined with HTML viewport arguments, you can change styles depending on the width of the viewport (device).

## JavaScript Helpers

- [JavaScript Snippets](https://blog.elijahlopez.ca/posts/javascript-snippets/)
- [JavaScript ES6 Imports Explained](https://blog.elijahlopez.ca/posts/javascript-imports-explained/)

## Search Engine Optimization

This advice is applicable for anyone that has a website, not just web developers. For example, even though this blog uses markdown, I still needed to learn about Hugo's summary tags which are essential for SEO.

[Get started with Google Search Console](https://support.google.com/webmasters/answer/9128669?utm_source=wnc_20079900&utm_medium=gamma&utm_campaign=wnc_20079900&utm_content=msg_110183365&hl=en#zippy=%2Cweb-developer)

## How to Learn React

Although I recommend learning Solid, most web developer jobs use React. Please read ["How to Learn React"](/posts/how-to-learn-react/), and all my [#React](/tags/react/) posts.

## Smooth Scrolling

```css
h1, h2, h3 {
  scroll-margin-top: 0.9em;
}

@media (prefers-reduced-motion: no-preference) {
  html {
   scroll-behavior: smooth
  }
}
```

Very useful for blog
