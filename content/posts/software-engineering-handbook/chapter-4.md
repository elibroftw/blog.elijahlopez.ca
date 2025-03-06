---
title: "Chapter 4 - Introduction to Software Projects"
date: 2025-03-05T15:50:15-05:00
draft: true
aliases: ["/posts/software-engineering-handbook/chapter-4"]
---

{{< toc >}}

TODO:

- README.md
- Licenses
- justfile
- .editorconfig

Each section should actually link to an actual chapter since it's not enough space to cover all topics.

Awesome lists

The first section is on [fullstack apps](#full-stack-applications). This consists of writing a server and the user interface used to interact with the server. Instead of presenting the two sides separately, it's best to focus on this big one first to avoid re-learning different tools, especially when talking about best-practices, where starting with the front-end may result in pigeon holing in the JavaScript community and starting with the back-end may result in pigeon holing in some bad practices when handling network requests related to what a front-end may want. By focusing on full-stack, we can pick a tech-stack that helps us learn and grow very quickly and focus on writing code that actually results in crossing the finish-line instead of building a bicycle.

### Organizing Application Source Code

### Full-stack Applications

### Web Front-end Applications

### Web Back-end Applications

- AKA: REST API

### Mobile Applications

### Desktop Applications

### \[Advanced] Blockchain Smart Contracts

### Engineering Libraries

As I mentioned in the introduction for the chapter, the previous sections focused on crossing the finish line and not building the supporting functionality to start building on top. Libraries is code that is bundled rather than code that is interacted with. Therefore, a very pragmatic viewpoint should be taken into consideration.

Defining the use case

Writing code that also turns into Documentation

Usually, developers won't be reading the source code to figure out how to use your library. A good library makes it easy to figure out how to do something specific without relying on StackOverflow, human support. It's fine if the developer asks another application (such as AI) on how to do something and it gives a response, but that's only possible if the documentation is good. So we want to deliver documentation alongside the library. Some things a documentation needs in order to succeed:

- upgrade guide: how do we continue to use the library throughout updates. Developers want to spend time building not fixing, so providing a methodology to upgrade is crucial
- changelog: ideally combined with the above, we want to tell the user exactly what changed in the code
  - bug fixes: a bug is something that was not intended to occur such as an error. if you fix a bug without changing how the library is used, it does not need to be explained too much
  - different internal error handling: suppose that before some errors are expected and not you handle it internally to suppress sit. This is breaking. Imagine the behaviour changed from erroring out to running in an infinite loop. Sure there is feature-parity, but how the library is used would change.
- searchable
  - developers should be able to search for behaviour as well as the API name. For search results, prefer showing API names before the behaviour of APIs. Search is something that should be solved already\*
- sectioned
  - some libraries do more than a few things. In these cases, the documentation should have sections pertaining to different features even if they can be used together
- pretty
- demonstration of usability
  - provide the user with either a template or plenty of examples that can be adapted right off the bat
  - for example, suppose we are writing a library that compute some equations. Give an example on how each equation function should be called and why it was called that way.
  - Another example, suppose we are writing a library that helps someone display something on the computer screen. This is application-oriented and so providing a template with examples embedded would be really nice

Now that the concepts are down we will demonstrate a best-practice of writing a library based on some software philosophical principles I have.

## Advanced Concepts

- See my computer sciences notes I took in [university](https://blog.elijahlopez.ca/tags/university/)
