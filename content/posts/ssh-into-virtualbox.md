---
title: "How to SSH Into VirtualBox"
date: 2023-11-19T14:22:42-05:00
draft: false
tags:
  - programming
  - tutorial
  - ssh
  - vscode
  - virtual-box
---

For the Oracle VirtualBox VM, click the virtualbox network settings and add a new port forwarding rule under advanced settings and add a rule for SSH with the TCP protocol, 3022 Host port, and 22 guest port.

![port forwarding UI in VirtualBox](/images/virtual-box/port-forwarding-ssh.png)

On the Virtual Machine, install openssh-server. This is how you would do it on Debian-based systems. I'm using Linux mint.

```sh
sudo apt install -y openssh-server
```

On your own machine, first try sshing into the virtual machine.

```sh
ssh -p 3022 elijah@127.0.0.1
```

Once you can confirm it works, we want to copy our ssh-id so that we won't have to repeatedly use our passwords. Especially when we want to use VSCode or something.

## Password-less SSH

If you do not have an SSH key, `ssh-keygen -t ed25519`

If you're on Windows, you will need to first install the OpenSSH feature from Settings or you can use WSL to be able to use `ssh-keygen`.

### Windows

Use either of the two commands below to copy your SSH ID to the Virtual Machine's authorized keys. I created an SSH key on my PC over 4 years which is why when at the time the "gurus" were all spouting RSA.

```pwsh
type ~\.ssh\id_ed25519.pub | ssh -p 3022 elijah@127.0.0.1 "cat >> .ssh/authorized_keys"
type ~\.ssh\id_rsa.pub | ssh -p 3022 elijah@127.0.0.1 "cat >> .ssh/authorized_keys"
```

### Linux

```sh
ssh-copy-id -p elijah@127.0.0.1
```

To integrate with VSCode, adapt the following into your `.ssh/config` file

```sh
Host "VirtualBox Linux Mint"
    User elijah
    HostName 127.0.0.1
    Port 3022
    IdentityFile "C:\Users\maste\.ssh\id_rsa"
```

If you want to run a GUI on the VirtualBox, run `export DISPLAY=:0` first
