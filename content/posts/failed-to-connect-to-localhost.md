---
title: "Fixing Failed to Connect to localhost/127.0.0.1"
date: 2023-02-19T15:48:20-05:00
draft: true
tags:
  - mobile
  - android
---

I wanted to consume a localhost API I had running on localhost/127.0.0.1:7065. So to fix this issue, instead
of requesting a localhost:PORT, use your local IPv4 address and port.

On Windows, open a terminal and view the IPv4 address

```sh
ipconfig
```

Mine is '192.168.0.19'

On Linux you can use `hostname -I`

Alternatively, you can open a Python terminal and run the script from my other article [Python Get LAN IPv4 Address](/posts/python-get-ipv4)

Now that we have our local IPv4 address, simply replace the URL of your API. Since I'm using Uno Platform currently, my BASE URL is now:

```cs
protected static string BASE_URL = "https://192.168.0.19:7065/";
```

Since I am using ASP.NET, my API is running on HTTPS.
