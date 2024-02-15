---
title: "Rust Getting Started"
date: 2022-12-06T16:55:43-05:00
draft: false
tags: [
    "programming",
    "tutorial",
    "rust",
]
---

## Installation

You can install rust from [here](https://www.rust-lang.org/tools/install). If you are on Windows, click the 64-BIT installer. I don't know why programming
languages promote 32-BIT over 64-BIT, but that's why I'm here.

## Agenda

Last year I read Rust by example and it was not helpful at all at quantifying what you really need to know.
My expectations is that a novice &rarr; beginner means that you are capable of producing a rust **project** not file that someone else can compile.
Let's skip over how to create single file projects in Rust. That's easy, just create a `sample.rs` file and use Code Runner in VS Code or `rustc sample.rs`.
This is good for someone who is printing hello world into the console but it is a horrible way to go about things.

## IDE

It doesn't matter which IDE you use, coding in Rust is difficult either way.

## Cargo

Start your Rust journey by creating your very own Rust playground project. In your projects directory (wherever that may be), run

```sh
cargo init rust-playground
```

If cargo doesn't work for you, you probably didn't install Rust correctly or you didn't restart your terminal.

Anyways, what is cargo used for? Well it's used for managing Rust projects. Things like: building your project, using other people's libraries in your code, and installing packages globally.

There's more to it but this tutorial is teaching you essential basics for when things inevitably go wrong.

## Writing Code

Rust does things differently. Often you will need to read documentation. The auto complete features are complete garbage as well so you need to read a lot just to write one statement.

### How to print to console?

Rust has these things called macros to allow for sporadic or dynamic parameters. Thus to print something use

```rs
println!("this is a &str. What's a &str...?")
```

## Compiling

```sh
cargo run
```

If you see errors, use `cargo run 2>cargo.log` so that you have an easier time reading the errors on subsequent builds.

For release builds, use `--release`

## Next Steps

To learn Rust, start reading [The Rust Programming Language Chapter 02](https://doc.rust-lang.org/book/ch02-00-guessing-game-tutorial.html#setting-up-a-new-project)
