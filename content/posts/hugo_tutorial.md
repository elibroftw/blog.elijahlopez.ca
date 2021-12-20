---
title: "Creating a Blog With GitHub Pages and Hugo"
date: 2021-12-17T22:18:47-05:00
draft: false
tags: [
    "hugo",
    "tutorial",
    "markdown",
    "github-pages",
    "git",
]
categories: [
  "programming",
]
---

I created this blog using Hugo and host it on GitHub Pages. In this tutorial, I'll teach you to do the same.
The resources I had used to create a working blog left out some important details that I will include in my tutorial.
I've also done the brunt of the work to perfect the theme and workflow.
If you are like me, you can follow the tutorial that [forks my site](#forking-my-site) rather than making a blog site [from scratch](#from-scratch).

## Prerequisites

1. [Hugo](https://gohugo.io/getting-started/installing#binary-cross-platform)
2. Make sure `hugo` is available in the PATH environment variable
3. Have `git` installed and available globally (in PATH)

## Forking My Site

1. Fork [my repository](https://github.com/elibroftw/elibroftw.github.io) into `/USERNAME.github.io`
2. Edit `config.yaml` and replace my information with yours
3. Use the command `hugo new posts/POST.md` to create your posts
4. Take a look at my posts in `content/posts` before deleting them because they use tags, categories, and make use of \<img /> tags
5. The `pre-commit` hook (if it is even included in the git repo) will auto-update the themes and build the site using `hugo -d docs` before commiting
6. You may need to set the serve folder to `docs` instead of `/` under `https://github.com/USERNAME/USERNAME.github.io/settings/pages`

## From Scratch

1. Create a `USERNAME.github.io` repository in GitHub
2. Clone the repository
3. Get the GitHub link for a theme from https://themes.gohugo.io/
4. Add the theme using `git submodule add GitHubURL.git themes/themeName`
5. Read the theme instructions for basic configuration (i.e. `config.yaml` or `config.toml`)
6. Edit `config.yaml` or `config.toml`
7. Use `hugo new content/posts/POST.md` to create a new post
8. Set `draft: false` after you are done drafting a post
9. Use `hugo serve -D` when drafting the post
10. Use `hugo -d docs` when you are ready to push your website
11. You can use precommit hooks to automate the step above
12. Commit and push to origin (GitHub)
13. To update a theme, use `cd themes/THEME && git pull`

## Other Resources

- https://gohugo.io/getting-started/quick-start/
- https://retrolog.io/blog/creating-a-hugo-theme-from-scratch/
- https://levelup.gitconnected.com/build-a-personal-website-with-github-pages-and-hugo-6c68592204c7
