---
title: "Windows Programming: Start App on Login"
date: 2023-06-29T20:22:04-04:00
draft: false
tags:
  - tutorial
  - programming
  - python
  - windows
---

To start an app on login on Windows, you must add a REG_SZ value to the registry key `HKEY_CURRENT_USER\SOFTWARE\Microsoft\Windows\CurrentVersion\Run`.

The value's name can be arbitrary, but not empty, and it's data should be of the format `path\to\executable optional args`. Personally, I add double quotes to the path, however apps like docker desktop do not even though the path has spaces.

### Python Start App on Login

This an excerpt of my music player's source code. This part is free for you to use without crediting me.

```py
from pathlib import Path

def start_on_login_win32(path_to_exe: Path | str, app_name: str, args: str, create_key=True):
    """
    Example arguments:
    path_to_exe: r'C:\Users\maste\AppData\Local\Programs\Music Caster\Music Caster.exe'
    app_name: 'Music Caster'
    args: '-m'
    """
    import winreg as wr
    classes_path = r'SOFTWARE\Microsoft\Windows\CurrentVersion\Run'
    access = wr.KEY_ALL_ACCESS | wr.KEY_WOW64_64KEY
    with wr.OpenKeyEx(wr.HKEY_CURRENT_USER, classes_path, 0, access) as key:
        if create_key:
            wr.SetValueEx(key, app_name, 0, wr.REG_SZ, f'"{path_to_exe}" {args}')
        if not create_key:
            with suppress(FileNotFoundError):
                wr.DeleteValue(key, app_name)
```
