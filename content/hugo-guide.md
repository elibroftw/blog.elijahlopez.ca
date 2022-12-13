---
title: "Hugo Guide"
date: 2022-05-07T17:57:32-04:00
draft: false
tags: [
    "tutorial",
    "hugo",
    "markdown",
    "github-pages",
    "git",
]
hidden: true
---

DISCLAIMER: If you aren't from my hugo tutorial, please read my [Hugo tutorial](/posts/hugo-tutorial/#prerequisites)

<!-- table of contents -->

{{< toc >}}

## New Machine Setup

In case you want to blog on a new device, here are the commands to set yourself up.

```bash
# replace USERNAME/blog with your username and blog repo name
git clone --recurse-submodules -j8 https://github.com/USERNAME/blog.git
# choose cloned directory
cd blog
```

## Creating Content (e.g. a Post)

1. In a terminal working in your repo directory, use the command `hugo new posts/POST.md`
    - "POST" name is arbitrary
2. Open `content/posts/POST.md` in a text editor (e.g. VS Code)
3. Edit the metadata fields present and optionally add others found in this file (e.g. tags, hidden)
    - I use tags, but categories is also a thing
    - `hidden` makes posts unlisted (similar to youtube's unlisted)
    - `draft` makes posts viewable only if `hugo` server/build was told to build drafts
4. Here is a [Markdown Guide](https://www.markdownguide.org/basic-syntax/) for writing your posts
5. To see your changes locally, run `hugo serve -D` and go to [http://localhost:1313/](http://localhost:1313/)
    - Run once, it will auto-serve any new changes
    - To view this specific guide, go to [http://localhost:1313/hugo-guide](http://localhost:1313/hugo-guide)
6. To deploy your edits, if you have my pre-commit hook enabled, run `git add . && git commit -m "Created/Edited POST" && git push`
    - I suggest using a GUI like VS Code or GitHub Desktop as there is less typing involved
7. TECHNICAL: The pre-commit hook updates the theme and builds your posts before committing

    ```bash
    git submodule update --remote --merge
    hugo -d docs
    ```

## Images

To embed an image in markdown use.

```md
![Unity installation screenshot](/images/automate-unity-building/unity-hub.png)
```

 make sure the image is under the `static/images` directory. I organize images based on the post or tag they
are related to, so I suggest putting the image in `static/images/crypto/monero.png` or `static/images/about/headshot.png`.

To embed this image, add something like the below.

```md
![Unity installation screenshot](/images/automate-unity-building/unity-hub.png)
```

For aligning images, you can check out https://davidwells.io/snippets/how-to-align-images-in-markdown and https://stackoverflow.com/questions/255170/markdown-and-image-alignment.

## Custom Pages

Pages such as [/about](/about) can be added by editing your config.yaml like below and using `hugo new page.md`

```.
menu:
  main:
  ...
  - identifier: about
    name: About
    title: About
    url: /about/
    weight: 0
```

## Link Embeds & Shortcodes

For those times where embedding links makes a better point than simply posting them, we can do use hugo shortcodes.
Here are some common ones I use. For more, you can search google or something "Hugo SERVICE shortcode."

### Twitter

From https://twitter.com/MPelletierCIO/status/1522704947556483073.
We need the username and the status id:

```bash
{{</* tweet user="MPelletierCIO" id="1522704947556483073" */>}}
```

{{< tweet user="MPelletierCIO" id="1522704947556483073" >}}

### YouTube

An old video of mine https://www.youtube.com/watch?v=rtSR9ySQ5h4 or https://youtu.be/rtSR9ySQ5h4.
We just need the video id.

```bash
{{</* youtube rtSR9ySQ5h4 */>}}
```

{{< youtube rtSR9ySQ5h4 >}}

### Gfycat

This one is a custom shortcode, but we just need the id of the gfycat link.

```bash
{{</* gfycat arcticbigheartedaddax */>}}
```

{{< gfycat arcticbigheartedaddax >}}

### GitHub Gist

```bash
{{</* gist elibroftw 1a94149a2f6232d062b666c4ee9ea530 */>}}
```

{{< gist elibroftw 1a94149a2f6232d062b666c4ee9ea530 >}}
