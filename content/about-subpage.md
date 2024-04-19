---
title: "Subpage"
description: "Just a subpage of about"
date: "2019-02-28"
author: "Hugo Authors"
slug: /about/subpage
menus:
  about:
    identifier: about
    name: About
    title: About
    url: /about
    weight: 1
  subpage:
    identifier: subpage
    parent: about
    name: Subpage
    title: Subpage
    url: /about/subpage/
    weight: 10
hidden: true
---

This page exists just to showcase how sub-menus work. I'm glad it existed otherwise I wouldn't have found the bug and subsequently fixed it in my version of the Anubis theme fork.
