---
title: "Vscode Aspnet Rest Api Launch Configuration"
date: 2023-01-29T13:03:33-05:00
draft: false
tags: [
    "programming",
    "tutorial",
    "c#",
    "vscode",
]
---

Suppose you want to _debug_ your ASP.NET application on Visual Studio as well Visual Studio Code.
Sure you can use the run feature of the Solution Explorer extension in Visual Studio Code, but that's not really a VS Code native feeling.

1. Rename or delete eyour `.vscode/launch.json` file.
2. Go to Run and Debug tab
3. Press "Generate"
4. Go to `launch.json`
5. Add `"uriFormat": "%s/swagger"` undere `serverReadyAction`
6. Add `"ASPNETCORE_URLS": "https://localhost:7065"` under `env`
7. Press F5 and enjoy
