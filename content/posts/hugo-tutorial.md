---
title: "Creating a Blog With GitHub Pages and Hugo"
date: 2021-12-17T22:18:47-05:00
tags: [
    "tutorial",
    "programming",
    "hugo",
    "markdown",
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
4. VS Code + Hugo Helper extension

## Forking My Blog

1. Web UI fork [blog.elijahlopez.ca](https://github.com/elibroftw/blog.elijahlopez.ca) with repository name `blog` and use your own description
2. Go to https://github.com/USERNAME/blog/settings/pages
3. Select the source as `gh-pages` (you may need to create this branch)
4. For folder select `/`
5. Click save
6. Add a custom domain if you want later since it takes 5+ minutes
7. Edit the About section in https://github.com/USERNAME/blog/ and change the website to `https://USERNAME.github.io` or a domain
8. Clone your repo using `git clone --recurse-submodules -j8 https://github.com/USERNAME/blog.git` or GitHub desktop
9. Delete `content/posts` and `static/images`
    - Add your own `favicon.ico` to `static/images`
10. Edit `config.yaml` and replace my information with yours
    - set `baseUrl` to the one shown by GitHub
    - change the `author`, `email`, `utterancesRepo`, and `social`
11. You can remove \# to enable certain features (the about section requires uses `content/about.md` and `content/about-subpage.md`)
12. Read `content/hugo-guide.md` in your new repo to help you write, edit, and publish posts

## From Scratch

1. Create a `USERNAME.github.io` repository in GitHub
2. Ensuring your articles publish
    - Click "Actions" (beside Pull Request), "New workflow", "Set up..."
    - Enter the name "gh-pages.yml"
    - Copy sample workflow from [my repo](https://github.com/elibroftw/blog.elijahlopez.ca/blob/master/.github/workflows/gh-pages.yml)
    - If you're default branch name (e.g. main) is not master, replace the two occurrences of master with your default branch name
    - Save
3. Clone your repository using `git clone https://...`
4. Get the GitHub link for a [theme](https://themes.gohugo.io/)
5. Add the theme using `git submodule add GitHubURL.git themes/themeName`
6. Read the theme instructions for basic configuration (i.e. `config.yaml` or `config.toml`)
7. Edit `config.yaml` or `config.toml`
    - Also add your own `favicon.ico` to `static/images`
8. Use `hugo new content/posts/POST.md` to create a new post
    - Alternative: use the hugo helpers, "Hugo: create content" command
9. Use `hugo serve -D` when drafting the post and see your changes at [http://localhost:1313/](http://localhost:1313/)
10. Set `draft: false` after you are done drafting a post
11. Add README.md with `git clone --recurse-submodules -j8 https://github.com/USERNAME/blog.git` clone instructions
12. Commit and push to origin (GitHub)
13. To update your themes, use `git submodule update --remote --merge`

## Other Resources

- https://gohugo.io/getting-started/quick-start/
- https://retrolog.io/blog/creating-a-hugo-theme-from-scratch/
- https://levelup.gitconnected.com/build-a-personal-website-with-github-pages-and-hugo-6c68592204c7
