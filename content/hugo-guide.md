---
title: "Hugo Guide for Writing Blog Posts"
date: 2022-05-07T17:57:32-04:00
draft: false
tags:
  - tutorial
  - hugo
  - markdown
  - github-pages
  - git
hidden: true
summary: "What you need to know when using Hugo for managing your written content."
---

DISCLAIMER: If you aren't from my hugo tutorial, please read my [Hugo setup tutorial](/posts/hugo-tutorial/#prerequisites)

<!-- table of contents -->

{{< toc >}}

## New Machine Setup

In case you want to blog on a new device, here are the commands to set yourself up.

```bash
# replace USERNAME/blog with your username and blog repo name
git clone --recurse-submodules -j8 https://github.com/USERNAME/blog.git
git config --global submodule.recurse true
# choose cloned directory
cd blog
```

## Creating Content (e.g. a Post)

Before writing, make sure you are modifying the latest version of the blog. Use `git pull --rebase`. The first reason to do so, is if we are working on multiple devices, we do not want to run into some sort of merge conflict when we want to push our updates. The second reason is because the auto-deploy script can also commit updates to the theme, so we want to ensure that we aren't going to mess the remote state up.

1. In a terminal working in your repo directory, use the command `hugo new posts/POST.md` or if you plan on using images `hugo new posts/POST/index.md` (see [Adding Images](#adding-images))
    - "POST" name is arbitrary
2. Open `content/posts/POST.md` in a text editor (e.g. VS Code)
3. Edit the metadata fields present and optionally add others found in this file (e.g. tags, hidden)
    - I use tags, but categories is also a thing
    - `hidden: true` makes posts unlisted (similar to youtube's unlisted)
    - `draft: true` makes posts viewable only if you use `-D` with the `hugo` CLI (build or serve)
    - `summary`: set the description for posts that search engines list
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

You can use VSCode's git UI to commit and push. If you are editing your blog from multiple devices, I suggest you use branches and pull requests. For example, from my surface laptop, I edit my blog in a branch like `surface/YYYY-MM-DD` and then push commits, and then use the "Rebase and merge" feature once I'm back on my main computer. This is because I extensively rewrite my commits.

## Including a Table of Contents

To include a Table of Contents, use `{{</* toc */>}}` (custom shortcode)

## Images

To embed an image in markdown use.

```md
![Unity installation screenshot](/images/automate-unity-building/unity-hub.webp)
```

 make sure the image is under the `static/images` directory. I organize images based on the post or tag they
are related to, so I suggest putting the image in `static/images/crypto/monero.webp` or `static/images/about/headshot.webp`. I suggest using webp over png as webp provides better compression.

To embed this image, add something like the below.

```md
![Unity installation screenshot](/images/automate-unity-building/unity-hub.webp)
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

## Adding Images

[Hugo docs - Image resources ](https://gohugo.io/content-management/image-processing/#image-resources)

Basically add the image to the same directory that `posts/POST/index.md` was created in.

```md
{{ $image := .Resources.Get "sunset.jpg" }}
```

Or if you add images to `assets/images`,

```md
{{ $image := resources.Get "images/sunset.jpg" }}
```

Then you need to render the variable image which can be done in [multiple ways](https://gohugo.io/content-management/image-processing/#image-rendering).

## Link Preview Images

### Default

THIS DOES NOT WORK.

If your post directory has images, the ordering is: `*feature*`, `*cover*`, `*thumbnail*`.

If your post directory has no images, Hugo will try to use the first image found in your `hugo.yaml` under `images`

### Shared Feature

If your post doesn't use any images and you have multiple posts that use the same feature image

```yml
images:
    - assets/images/feature.png
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

2023: Wow this service got shut down. Skip this section.

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

### How to Write Footnotes

Footnotes appear in numeric order and are linked via the same _tag_ used for the footnote. So you could use letters for a tag, but the render will still show numbers for the footnote. This is useful because you can write the footnote in markdown at the end of a paragraph rather than at the bottom of the article, so instead of scrolling to remember what the number is, you can put a unique tag, and the markdown render will show that markdown footnote at the bottom of the document with the proper numbering.

```markdown
This is how you write footnotes in Markdown/hugo[^1]

[^1]: [text](https://name.tld)
```

This blog is a git repo on GitHub[^1]. This blog is a git repo on GitHub[^github]

[^1]: [elibroftw/blog.elijahlopez.ca](https://github.com/elibroftw/blog.elijahlopez.ca)
[^github]: [elibroftw/blog.elijahlopez.ca](https://github.com/elibroftw/blog.elijahlopez.ca)
