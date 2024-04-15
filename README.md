# ELL Blog

A site I'll be writing new posts on, since Medium is centralized, slow, and doesn't allow you to export/download posts.

This blog uses the [Anubis Theme](https://github.com/Mitrichius/hugo-theme-anubis).

Read `content/hugo-guide.md` ([Online](https://blog.elijahlopez.ca/hugo-guide#new-machine-setup)) on how to
create posts, custom pages, using images, and embedding rich content (e.g. tweets, youtube, gfycat, github gist).

## Tips

### New Machine Setup

```bash
# replace link and dirname with your repo link and repo name
git clone --recurse-submodules -j8 https://github.com/elibroftw/blog.elijahlopez.ca.git
git config --global submodule.recurse true
# choose cloned directory
cd blog.elijahlopez.ca
```

### What to do Before Writing

Make sure you are modifying the latest version of the blog. Use `git pull --rebase`. The first reason to do so, is if we are working on multiple devices, we do not want to run into some sort of merge conflict when we want to push our updates. The second reason is because the auto-deploy script can also commit updates to the theme, so we want to ensure that we aren't going to mess the remote state up.
