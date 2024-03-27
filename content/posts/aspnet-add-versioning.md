---
title: "ASP.NET Core Add Versioning"
date: 2024-03-07T02:05:53-05:00
draft: true
tags:
  - programming
  - tutorial
  - c-sharp
  - asp.net
---

### Introduction

This tutorial will save you 5 hours. I don't know when I started adding API version support to my ASP.NET project, but I can tell you that the current documentation is atrocious if you strive for perfection like I do.

As our mobile application is about to have an official MVP release, I wanted to fix the Stripe payment intent method "invoice." Currently, the invoice method would only return the client secret, but the official docs suggest to return the customer ID and a ephemeral key in addition to the payment intent client secret. I had two options. Either break current builds in use because you know its only beta testing anyways, or I can use this as an opportunity to add API versioning. There's two main ways to do API versioning in my eyes. The first way, which is what I thought I would've added in the future, is to be one of those companies with apis like `/v2/my-api` but then I found out about header APIs where the client can just add a header. This saves a lot of time because first of all, most of my apis were `/api` not `/v1/api` and the client was already calling without a version. I want an easy way to just switch the default version to `v2` so I went with reading the API version from the header.

After hours of consulting Gemini, the official docs, and examples, and personal touches, I present the absolutely bare minimum way to add versioning to your ASP.NET application.

### NuGet Packages

<!-- TODO -->
