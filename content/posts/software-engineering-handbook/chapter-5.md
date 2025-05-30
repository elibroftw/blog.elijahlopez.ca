---
title: "Chapter 5 - Principles of Software Engineering"
date: 2025-03-05T15:50:15-05:00
draft: true
aliases: ["/posts/software-engineering-handbook/chapter-5"]
summary: "This post, 'Chapter 5 - Principles of Software Engineering' of 'The Software Engineering Handbook,' discusses key principles for creating quality software, emphasizing respecting the end user through intuitive, well-documented, flexible, and integrable software. It highlights the importance of good documentation for software libraries, including documentation builders, and stresses practicality and providing working examples. The post also touches on the philosophy of designing software for the 'best' use cases and increasing the quality of learning materials."
---

I wrote some of this chapter in 2022 because it was a year of broken software, where "mature" software had basic issues:

- Nova Launcher app animation with keyboard lag
- Microsoft todo notifications having black text on a dark background.

When it comes to creating a software projects, they can be developer facing, user facing, or both. Take for example, Android (AOSP). APIs are consumed by developers, but the APIs need to be useful enough for users to use the apps that the developers create, and other parts of the OS, like the UI kit are consumed by users.

## Respecting the End User

You should keep in mind the range of experiences someone could have while giving people the benefit of the doubt when it comes to competence.
Software should be intuitive, well documented, flexible, and integrable (into someones flow).

Time should be used in the development of intuitive and documented software rather than in the use of unintuitive and documented software.

### Documentation

Documentation Builders

1. [Docusaurus](https://docusaurus.io/)
2. [mdBook](https://github.com/rust-lang/mdBook): create modern online books from Markdown files
3. [mkdocs material](https://github.com/squidfunk/mkdocs-material): material docs

With respect to software *libraries*, it's not your job to teach someone how to use a language. However, it is your job to teach users how to use your library with the language the library is meant for.

Documentation is deemed perfect if the libraries' author(s) do not need to be reached out for clarification.

[tauri-forage](https://github.com/tauri-apps/tauri-forage#installation) is an example of poor documentation. It tells the user that [localForage](https://localforage.github.io/localForage/) is tedious to use, but scroll a bit further and you see there's only a `setItem` example! All I needed was a simple way to set and get items and I only realized a couple days that `localForage` was easier to use and not as tedious as was portrayed.

A library should have a good name; a name that conveys what it does. `localForage` barely communicates because one would have to connect it to `localStorage` and if you replace `local` with `tauri`, users who know the basics of `JavaScript` are left confused.

The next thing with documentation is consistency. All libraries should work towards making the reading experience as consistent as possible. When users are reading library documentation, they have three goals:

1. Seeing if the library can do what the user is looking for (Intro),
2. Seeking out the feature set of a library (API), and other (e.g. hobbyist).
3. Rust is doing a great job at making documentation easy for developers since developers may not be into technical writing or management

## Practicality (Intuition)

A library with documentation is not enough. It does not factor into account complexity and real-world use.
Potential uses should be mentioned and working examples should be given. Working examples can be reduced to important bits, as long the boilerplate is given somewhere.

Examples are the fastest way to save other peoples' time. A practical and adaptable example requires tiny modifications for use in production code. Let's take a look at `localForage`. The most common goal is probably that the user wants to store and retrieve persistent data that is more complex than strings. Although the example could be moved up, a sufficient example is indeed provided. With this example, we can see how to set and retrieve data. However, when the error callback occurs. This did bite me in the butt because it seems that depending on the underlying storage used, an error is not triggered when the key is not in the storage.

```js
localforage.setItem('key', 'value', function (err) {
  // if err is non-null, we got an error
  localforage.getItem('key', function (err, value) {
    // if err is non-null, we got an error. otherwise, value is the value
  });
});
```

A bad example is that of Python's secrets token generation, because the default bits is secure to use for authentication, but the example shows an insecure secret generation!

Another example of design done wrong is with vcpkg. It was a pain in the ass to get working, so I made a youtube video about it. And of course, my youtube video is probably outdated by a bit because Microsoft changed something, but that's why I have a [blog post](/posts/vcpkg-cmake-tutorial) on how to use vcpkg with CMake for cross platform C++ development.

## Design is Oriented for The Best

When software is multi-purposed or achieves very powerful abstractions, developers should think about use. Let's take a look at the glob Python library.
A question that came up for me was "How do I glob all files with different extensions?" and googling this results in some pretty disgusting code, especially
when Python's ethos is about one way to do something.

Since glob does not use regex, the best way is to search for all files with extensions and filter it on demand.
However, since the docs talk about `glob.glob` more than `glob.iglob`, we have many intermediate developers spreading
non-optimized code and concepts without audits. Here is the proper way to do it. I didn't bother adding my answer to the question since StackOverflow was complaining that there were too many answers; they did not contain the following golden egg:

{{< gist elibroftw 4599fb62d857bd5dce4040efc46e608d >}}

Another occasion was a question about parsing `tasklist` output with Python and the answer not using
iterators. Compare [this](https://stackoverflow.com/a/22914414/7732434) to [my edit](https://stackoverflow.com/a/64634901/7732434).

The entire point of this handbook is to increase the quality of learning materials and education.
