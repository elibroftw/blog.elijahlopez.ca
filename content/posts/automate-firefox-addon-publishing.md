---
title: "Automate Firefox Addon Publishing"
date: 2020-10-08T22:58:39-05:00
draft: false
---

If you're like me, you always want to speed up aspects of your life especially routine tasks. I'll be doing this in Python but you can easily convert the code to a language of your choice.

## Prerequisites

We're going to be using the Firefox Add-ons API to upload your add-on so you will need some API keys. You can get your API keys from [here](https://addons.mozilla.org/developers/addon/api/key/). 
Place the pair of API keys into a .env file like so:

```bash
jwt-issuer=string
jwt-secret=string
```

## Third Party Libraries

After you do that, you will need to install some necessary modules (add to `requirements.txt`): `pip install requests PyJWT`
After installing these two modules, copy the snippet at the bottom of the article.

## Modifying the Script

`GUID`: include the '{' and '}' into the string if applicable
`addon_files`: a list of source files of the add-on (relative path

{{< gist elibroftw 1a94149a2f6232d062b666c4ee9ea530 >}}
