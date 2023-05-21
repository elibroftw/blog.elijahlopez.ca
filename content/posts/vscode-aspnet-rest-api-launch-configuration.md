---
title: "ASP.NET WEB API launch.json for Visual Studio Code"
date: 2023-01-29T13:03:33-05:00
draft: false
tags: [
    "programming",
    "tutorial",
    "c#",
    "asp.net",
    "vscode",
]
---

Suppose you want to be able to work on your ASP.NET application in Visual Studio as well as Visual Studio Code. Sure you can use the run feature of the Solution Explorer extension in Visual Studio Code, but that's not a native feeling.

Create the following file:

<details><summary>.vscode/launch.json</summary>

```json
{
    "version": "0.2.0",
    "configurations": [
        {
            // Use IntelliSense to find out which attributes exist for C# debugging
            // Use hover for the description of the existing attributes
            // For further information visit https://github.com/OmniSharp/omnisharp-vscode/blob/master/debugger-launchjson.md
            "name": ".NET Core Launch (web)",
            "type": "coreclr",
            "request": "launch",
            "preLaunchTask": "build",
            "program": "dotnet",
            // alternative program: if you have changed target frameworks, make sure to update the program path.
            // "program": "${workspaceFolder}/SttApi/bin/Debug/net7.0/SttApi.dll",
            "args": ["watch"],
            "cwd": "${workspaceFolder}/SttApi",
            "stopAtEntry": false,
            "console": "integratedTerminal",
            // Enable launching a web browser when ASP.NET Core starts. For more information: https://aka.ms/VSCode-CS-LaunchJson-WebBrowser
            "serverReadyAction": {
                "action": "openExternally",
                "pattern": "\\bNow listening on:\\s+(https?://\\S+)",
                "uriFormat": "%s/swagger"
            },
            "env": {
                "ASPNETCORE_ENVIRONMENT": "Development",
                "ASPNETCORE_URLS": "http://localhost:5284"
            },
            "sourceFileMap": {
                "/Views": "${workspaceFolder}/Views"
            }
        },
        {
            "name": ".NET Core Attach",
            "type": "coreclr",
            "request": "attach"
        }
    ]
}
```

</details>

Press F5 and enjoy.
