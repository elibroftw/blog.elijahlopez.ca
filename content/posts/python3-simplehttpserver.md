---
title: "Python3 Simplehttpserver"
date: 2019-07-10T22:38:39-05:00
draft: false
tags:
  - tutorial
  - programming
  - python
summary: "Learn how to use Python 3's built-in `http.server` module to start a simple HTTP server."
---

## Code

{{< gist elibroftw bcbf2ee1c8662d8fb6f6116a3705d337 >}}

## Backstory

The project I am working on is a tray icon app that will let me play my audio files on my Google Home Mini. To do this I needed to have an HTTP server running so that I can serve my local files from my computer to the Home device.

When I Googled how to do this, I came across this article from 2018 but uses a bit of Python2 to do it. So I tried to find the Python3 alternative and I found out about http.server.
This was still a command line solution, not a coded one, so I had to Google again and I came across this article but its too long for too little. I needed a simple HTTP server which can serve files.

I fiddled with my imports and took a look at the BaseHTTPRequestHandler class and tried to use that for the HTTPServer, but it failed. My import statement looked like this:
from http.server import HTTPServer, BaseHTTPRequestHandler. I removed BaseHTTPRequestHandler and started typing in simple just out of curiosity and voila, my IDE recommend me SimpleHTTPRequestHandler.
It worked perfectly and I just had to os.chdir(‘C:/’) to get exactly what I wanted.
