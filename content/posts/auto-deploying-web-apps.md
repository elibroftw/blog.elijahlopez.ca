---
title: "Auto-Deploying Web Apps"
date: 2022-05-19T11:57:19-04:00
draft: true
tags: [
    "tutorial",
    "programming",
    "git",
]
---

The pre-requisite for this tutorial is having 2FA for anything relevant to deployment. E.g. DigitalOcean, email service, github, MongoDB, etc. This will considerably lower the chance for a vulnerability to be caused by you and will isolate it toward a) host provider (MITM attack through sneaking host certificates) and b) source code hosted servers. If you can't trust your source code host, then use the same host your web app server. If you can't trust your host provider, then run your own servers. I'm pretty sure that if cloud services purposely abused their physical access, you could sue them. The monero wallet on the LeNerva website server is view only, so I don't have to worry about theft.

I won't be using docker because my web app requires running a binary on the host system that read and writes to a file on the host system and my web app needs to be able to auto update it as well. If you know how to run a restart-proof, auto updatable web app in a docker image alongside monero-rpc-wallet, I'd read your article.

There are two types of web apps. Interpreted/JIT and compiled. My auto deploy design aims to be generic enough to solve both problems without much configuration. I'm thinking that for interpreted/jit web apps, we can pull the changes, stop the server, install packages, and restart the server. It's your choice whether to install packages  on the project level or a system level. Ideally, you'd be running two instances of the web app; one production (master/tags) and one development (master/dev). To do this, we'd need to different domains pointing to the same server and somehow configure nginx to take care of everything else https://geekflare.com/multiple-domains-on-one-server-with-apache-nginx/. It is beyond the scope of this article and this tutorial has not been tested on multiple domain servers.

With compiled apps, we do not want to compile on the same server that is running the app. Therefore we only need an auto-update solution on the server and another server/service to take care of compiling. We want to leverage a CI/CD server, artifacts, and an update API schema. For example, you can use github actions to auto-release, and  github public API in order to find updates. To perfect everything, the binary itself should be responsible for auto-updating. Thus, you can update even the auto-update mechanism. To do this you'll need to run a background task that polls the API, downloads file to app-update, starts a bash program before exiting that will delete the app, rename it, and start it again. The bash program should try deleting the app for 1-5 minutes before sending you an error via email/app.

Now for the practical stuff. I have a couple snippets here for you to freely modify and use. Only the github action one requires testing and possible heavy modification. If you do improve it, please let me know.
