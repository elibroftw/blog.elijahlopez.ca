---
title: "Python Get LAN IPv4 Address"
date: 2023-02-04T01:30:27-05:00
draft: false
tags:
  - tutorial
  - programming
  - python
summary: "Get your local area network (LAN) IPv4 address using Python."
---

The Windows version returns the LAN IPv4 address, even if connected to a VPN.

```py
import platform
import re
from subprocess import check_output

ipv4_pattern = re.compile(r'IPv4 Address.*:\s*(\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3})')

def get_ipv4():
    if platform.system() == 'Windows':
        ipconfig_output = check_output(['ipconfig'], shell=True, text=True, encoding='iso8859-2')
        # match IPv4 pattern and return last match which is most likely the LAN adapter
        return ipv4_pattern.findall(ipconfig_output)[-1]
    else:
        # not tested on Linux nor Mac OSX
        import netifaces
        # get the default network interface
        default_iface = netifaces.gateways()['default'][netifaces.AF_INET][1]
        iface_data = netifaces.ifaddresses(default_iface)
        # get the IP address from the default interface
        return iface_data[netifaces.AF_INET][0]['addr']
```
