# ELL Blog

A site I'll be writing new posts on, since Medium is centralized, slow, and doesn't allow you to export/download posts.

This blog uses my fork of the [Anubis Theme](https://github.com/elibroftw/hugo-theme-anubis).

If you want to start your blog, read `content/hugo-guide.md` ([Online](https://blog.elijahlopez.ca/hugo-guide#new-machine-setup)) on how to
create posts, custom pages, using images, and embedding rich content (e.g. tweets, youtube, gfycat, github gist). I haven't updated in a while, so fair warning is given.

## Tips

### New Machine Setup

```bash
# replace link and dirname with your repo link and repo name
git clone --recurse-submodules -j8 https://github.com/elibroftw/blog.elijahlopez.ca.git
git config --global submodule.recurse true
# choose cloned directory
cd blog.elijahlopez.ca
```

In case you clone the repo without recursing the submodules (HINT: you will see "Page not found"), you can run

```bash
git submodule update --init --recursive
```

### What to do Before Writing

Make sure you are modifying the latest version of the blog. Use `git pull --rebase`. The first reason to do so, is if we are working on multiple devices, we do not want to run into some sort of merge conflict when we want to push our updates. The second reason is because the auto-deploy script can also commit updates to the theme, so we want to ensure that we aren't going to mess the remote state up.
