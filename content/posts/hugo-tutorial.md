---
title: "Creating a Blog With GitHub Pages and Hugo"
date: 2021-12-17T22:18:47-05:00
draft: false
tags: [
    "programming",
    "tutorial",
    "hugo",
    "markdown",
    "github-pages",
    "git",
]
---

I created this blog using Hugo and host it on GitHub Pages. In this tutorial, I'll teach you to do the same.
The resources I had used to create a working blog left out some important details that I will include in my tutorial.
I've also done the brunt of the work to perfect the theme and workflow.
If you are like me, you can follow the tutorial that [forks my site](#forking-my-site) rather than making a blog site [from scratch](#from-scratch).

## Prerequisites

1. [Hugo](https://gohugo.io/getting-started/installing#binary-cross-platform) is "installed" and can be used (test `hugo version`)
2. [git](https://git-scm.com/downloads) is installed and can be used (test `git version`)
3. If either test fails (i.e. not on PATH), learn from [how to add to PATH](https://duckduckgo.com/?t=ffab&q=how+to+add+to+path&ia=web)

## Forking My Blog

1. Web UI fork [blog.elijahlopez.ca](https://github.com/elibroftw/blog.elijahlopez.ca) with repository name `blog` and use your own description
2. Go to https://github.com/USERNAME/blog/settings/pages
3. Select the source as your defalt branch name (e.g. master, main)
4. For folder select "/docs"
5. Click save
6. Add a custom domain if you want later since it takes 5+ minutes
7. Edit the About section in https://github.com/USERNAME/blog/ and change the website to `https://USERNAME.github.io` or a domain
8. Clone your repo using `git clone --recurse-submodules -j8 https://github.com/USERNAME/blog.git` or GitHub desktop
9. To enable the `pre-commit` hook, use the command `git config core.hookspath .githooks` in your repo directory
   - The `pre-commit` hook will auto-update themes and build the site using `hugo -d docs` before commiting
10. Delete `content/posts` and `static/images`
11. Edit `config.yaml` and replace my information with yours (set baseUrl to the one shown by GitHub)
12. You can remove \# to enable certain features (the about section requires uses `content/about.md` and `content/about-subpage.md`)
13. Read `content/hugo-guide.md` in your new repo to help you write, edit, and publish posts

## From Scratch (Outdated)

1. Create a `USERNAME.github.io` repository in GitHub
2. Clone the repository
3. Get the GitHub link for a [theme](https://themes.gohugo.io/)
4. Add the theme using `git submodule add GitHubURL.git themes/themeName`
5. Read the theme instructions for basic configuration (i.e. `config.yaml` or `config.toml`)
6. Edit `config.yaml` or `config.toml`
7. Use `hugo new content/posts/POST.md` to create a new post
8. Use `hugo serve -D` when drafting the post and see your changes at [http://localhost:1313/](http://localhost:1313/)
9. Set `draft: false` after you are done drafting a post
10. Use `hugo -d docs` when you are ready to push your website
11. Commit and push to origin (GitHub)
12. To update themes, use `git submodule update --remote --merge`
13. You can use pre-commit hooks to automate steps 10 and 12 before every commit

## Other Resources

- https://gohugo.io/getting-started/quick-start/
- https://retrolog.io/blog/creating-a-hugo-theme-from-scratch/
- https://levelup.gitconnected.com/build-a-personal-website-with-github-pages-and-hugo-6c68592204c7
