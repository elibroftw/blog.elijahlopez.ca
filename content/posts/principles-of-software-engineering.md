---
title: "Principles of Software Engineering"
date: 2022-04-03T20:39:50-04:00
draft: true
tags: [
    "programming",
]
---

Diclaimer: This is a work in progress.

I'm making this article because 2022 has been the year of broken software. It's not just the cutting edge tech that doesn't work as intended but it's also mature software that has been having issues;
the most basic of issues in fact. Examples: Nova Launcher app animation with keyboard lag, and microsoft todo notifcations having black text on a dark background.

When it comes to software, there are two types: libraries and apps.
Software engineering is not limited to user facing or technical facing.

Software engineering isn't always about making code that is user facing and neither is it only about making code that is programmer facing.

## Respecting the end User

What does respect mean? It means that you should keep in mind the range of experiences someone could have
while giving people the benefit of the doubt when it comes to competence. Software should be intuitive, well documented, and flexible & integrable.

Time should be exhausted in the development of intuitive and documented software rather than the use of unintuitive and documented software.

### Documentation

With respect to software *libraries*, it's not your job to teach someone how to use a language. However, it is your job to teach users how to use your library with the language the library is meant for.

Documentation is deemed perfect if the libraries' author(s) do not need to be reached out for clarification.

[tauri-forage](https://github.com/tauri-apps/tauri-forage#installation) is an example of bad documentation.
It tells the user that [localForage](https://localforage.github.io/localForage/) is tedious to use, but scroll a bit further and you see there's only a `setItem` example! All I needed was a simple way to set and get items and I only realized a couple days that `localForage` was easier to use and not as tedious as portrayed.

A library should have a good name; a name that conveys what it does. `localForage` barely communicates because one would have to connect it to `localStorage` and if you replace `local` with `tauri`, users who know the basics of `JavaScript` are left confused.

The next thing with documentation is consistency. All libraries should work towards making the reading process as consistent as possible. When users are reading library documentation, they have three goals:
checking if the library can do what the user is looking for (Intro), checking out the feature set of a library (API), and other (e.g. hobbyist). Rust is doing a good job making documentation easy for developers since developers may not be into technical writing.

## Practicality (Intuition)

A library with documentation is not enough. It does not factor into account complexity and real-world use.
Potential uses should be mentioned and working examples should be given. Working examples can be reduced to important bits, as long the boilerplate was given somewhere.

Examples are the fastest way to save other peoples' time. A practical and adapatable example requires tiny modifications for use in production code. Let's take a look at `localForage`. The most common goal is probably that the user wants to store and retrive persistent data that is more complex than strings. Although the example could be moved up, a suffiecient example is indeed provided. With this example, we can
see how to set and retrieve data. However, when the error callback occurs. This did bite me in the butt because it seems that depending on the underlying storage used, an error is not triggered when the key is not in the storage.

```js
localforage.setItem('key', 'value', function (err) {
  // if err is non-null, we got an error
  localforage.getItem('key', function (err, value) {
    // if err is non-null, we got an error. otherwise, value is the value
  });
});
```

## Design is Oriented for The Best

When software is multi-purposed or achieves very powerful abstractions, developers should think about use. Let's take a look at the glob Python library.
A question that came up for me was "How do I glob all files with different extensions?" and googling this results in some pretty disgusting code, especially
when Python's ethos is about one way to do something.

Since glob does not use regex, the best way is to search for all files with extensions and filter it on demand.
However, since the docs talk about `glob.glob` more than `glob.iglob`, we have many intermediate developers spreading
unoptimized code and concepts without audits. Here is the proper way to do it. I didn't bother adding my answer to the question since StackOverflow was complaining
that there were too many answers; they did not contain the following golden egg:

{{ < gist elibroftw 4599fb62d857bd5dce4040efc46e608d >}}

Another occation was a question about parsing `tasklist` output with Python and the answer not using
interators. Compare [this](https://stackoverflow.com/a/22914414/7732434) to [my edit](https://stackoverflow.com/a/64634901/7732434).

I blame Python's education material. When I first tried to learn Python in 2014, I was given a raspberry pi and a paper copy tutorial on Python's Turtle.
Yes it was by my dad, however, I waws someone who didn't even know programming was a thing back then. Imagine my frustration when I was told to program
a literal turtle to draw a star. Education is so important and often not held to higher standards.

<details>
<summary>Aside on Canada's Education System</summary>
People think Canada's education system is good, but I know for a fact it is far from optimal and yet people are more concerned about the number of people in class rather than the actual ciriculum being taught.
In University, students take 5 courses per semester (4 months), are forced to learn at a faster pace, tougher courses, and there are 100+ students per lecture.
Universities have a high standards, but they definitely do not teach the content well. In pre-university has barely any content being taught, and post-university
there is more content that isn't usually being taught well.

For one of my courses that I was acing, I made an entire YouTube tutorial for other students in my course.
I highly doubt I'm a better listener; so it's simply because I have better intuition or basic knowledge. My largest advantage though was the ability to use
Excel in a highly flexible manner; I created a macro function called `IS_BLANK` without learning visual basic in order to shorten the formulas for an extremely flexible template.
Suppose there are multiple ways to get an answer. Instead of creating a template for each method, I made a template that only required inputting the known
variables. I made my formulas to use equations based on which inputs were given. The macro function had short-circuiting which isn't a straight-forward thing
to implement in standard cell formulas. I might share it some day in the future.

Until grade 11, the grading system should be used to keep kids back until they reach a certain level in core comptencies.
Core competencies include: math, critical thinking, reading comprehension, exercise, an art (hobby) under the most general of definitions.

Art or hobbying is crucial in not just a child's upbringing but as a specialist skill in the future;
Art includes the steretypical drawing, instrumental, acting (+skits). However there's much more; digital visual, abstract, 3D, digital music production.
There are also other arts; oragami, free style lego, pottery, wood burning (high school level), etc.

Aside from wood burning and pottery, these are all equal arts and should be introduced to all kids in Canadian schools. I do consider programming and writing to be
arts, however they are far more important than to be something optional. There is some progress in introducing programming to kids at a younger age,
however like my experience has shown, there is no guarantee this introduction will be productive. Scratch is not programming because programming goes hand in hand
with freedom.

Exercise should be a daily part of school, ingrained into kids' habits. Kids should be given 1 hour a day to exercise. I guess at such young ages,
exercise would be limted to running (tag) and basketball for recess.
By instilling exercise discipline in school, we can reduce obesity and set a better precedent for what it means to be Canadian.
</details>
<br>

I remember thinking back then,

> This is stupid. Why would I need to learn how to code.

Although my dad gave me a horrible tutorial back then, he blessed me 3 years later when he asked me to take a look at [CS Circles](https://cscircles.cemc.uwaterloo.ca/).
This website is still not perfect in terms of content and aesthetics 6+ years after I last learned from it.
It misses key information such as when to use `set()` and definitely does not teach the iterators concept well (`for start...end` doesn't exist in Python, only `for item in iterator`).
However it was great enough that I was coding a quadratics equation calculator before I even finished going through the website.

How does this relate to software engineering? Well I find that there is a plethora of beginner tutorials for programming languages, but never intermediate.
After beginner, it jumps to niche and incomplete. A perfect example is "cross-platform C++ projects and dependency management." I had to make a video myself
and hack around the dependeny management. Basically, `vcpkg` has this goal of being cross-platform, but they don't support global dependency managment and neither
do they care about ensuring packages are installable on all platforms. I had an awkwar discussion with one of the maintainers about adding a windows-fix of a library to the
repository and their response was that's not the official one...Can you believe it? If the authors of the official repo now say they don't want to support Windows because they
don't want to maintain that code, there goes the goal of cross platform C++ programming. Things like this is how we get yet another...
