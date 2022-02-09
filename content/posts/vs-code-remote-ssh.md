---
title: "VS Code Remote SSH Tutorial"
date: 2021-12-22T18:23:50-05:00
draft: false
tags: [
    "programming",
    "tutorial",
    "ssh",
    "vscode",
]
---

In this tutorial we'll integrate SSH into VS Code in a way that won't require entering a password every time.

## Generating an SSH key

If you're on Windows, you will need to install the OpenSSH feature from Settings or you can use WSL to be able to use `ssh-keygen`.

You can generate an SSH key using `ssh-keygen -t ed25519`

Keep track of where the key is stored. For me this would be `C:\Users\maste\.ssh\id_ed25519`.
This will be useful when configuring the Remote-SSH VSCode extension.

## Adding SSH key to Authorized Keys

During the process of adding our keys, we'll have to enter our passwords.

### Linux / WSL

```sh
ssh-copy-id -i path/to/file/if/not/default user@host
# Examples
ssh-copy-id -i .ssh/id_ed25519.pub user@host
ssh-copy-id -i /mnt/c/Users/maste/.ssh/id_ed25519.pub user@host
```

If you're having trouble with this, just `cd` into the `.ssh` folder and use `-i id_ed25519.pub`

### Windows no WSL

If you're on Windows, you won't have access to `ssh-copy-id`. Instead you can use either of these PowerShell command.

```powershell
type path\to\id_algo.pub | ssh user@host "cat >> .ssh/authorized_keys"
# helper: type $env:USERPROFILE\.ssh\id_ed25519.pub | ssh user@host "cat >> .ssh/authorized_keys"
```

## Setting up VS Code

1. Install the [Remote - SSH extension](https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.remote-ssh)
2. Use the Command Palette (Ctrl + Shift + P) and use the "Remote-SSH: Open SSH Configuration File..." command
3. Select the first path (for me this was `C:\Users\maste\.ssh\config`)
4. Enter the information for your remote server(s). Here is mine for reference. I had to comment out publickey.

    ```sh
    Host uWaterloo
      User e5lopez
      HostName linux.student.cs.uwaterloo.ca
      IdentityFile "C:\Users\maste\.ssh\id_ed25519"
      # PreferredAuthentications publickey
    ```

5. From the command palette, use "Remote-SSH: Connect Current Window to Host..." and select the host you just added
6. A window will show up asking you to choose the platform for the remote server. For me, it's Linux.s
7. If all goes well, you should be able to connect without having to enter a password
![VS Code SSH](/images/vs-code-remote-ssh/connected-example.png)
8. A tip is to add multiple folders in the remote server to a workspace
