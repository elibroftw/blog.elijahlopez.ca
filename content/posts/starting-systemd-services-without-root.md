---
title: "Starting Systemd Services Without Root"
date: 2023-01-21T14:49:20-05:00
tags: [
    "devops",
    "tutorial"
]
aliases: ["/posts/starting-systemctl-services-without-root"]
---

Google and StackExchange do not give a straight forward and properly explained answer on how to do this, so I used [ChatGPT](https://chat.openai.com/chat)
to figure out how and have summarized my findings for you.

## Assumptions

- You need this so that a program running without user interaction can call `systemctl` without sudo
- The program on the server that needs to call the service is run under the same `$USER` that you ssh into the server as
- The service is called `my_service` and the path to the service file is `/etc/systemd/system/my_service.service`

## Sudoers

To allow a non-root user, say `maste`, to run the service without root, we need to edit the `sudoers`. What is `sudoers`? `/etc/sudoers` is a rule list with permissions for regular users to be able to run commands as another user (like the root user). There also exists a directory `/etc/sudoers.d` where each file is treated like a rule list. We will need to create a new file in this directory with the the following rule (replace `{{ your_user }}`).

```sh
{{ your_user }} ALL=(ALL) NOPASSWD: /usr/bin/systemctl start my_service, /usr/bin/systemctl stop my_service, /usr/bin/systemctl restart my_service, /usr/bin/systemctl reload my_service, /usr/bin/systemctl status my_service
```

After this, **we will still need to use sudo**, however, a password will not need to be entered.

It is a bit too much work having to add this rule manually (using `visudo`) on every additional server or every time we need to allow a new service to be run. So here is a bash function (python incoming in the future) to do so with
safety to avoid polluting the file with duplicates.

The following two script are from my [devops utilities repository](https://github.com/elibroftw/devops-utilities) which
I will slowly add utility scripts to.

### Modifying sudoers via Bash

<details>
<summary>Bash Function</summary>

```bash
#!/bin/bash

allow_services_without_root() {
    # usage `allow_services_without_root monerod monero-wallet-rpc-prod monero-wallet-rpc-dev lenerva.com dev.lenerva.com`
    user=$(logname)
    for service in "$@"; do
        # allow user to start/stop/restart/reload the service
        sudoer_rule="$user ALL=(ALL) NOPASSWD: /usr/bin/systemctl start $service, /usr/bin/systemctl stop $service, /usr/bin/systemctl restart $service, /usr/bin/systemctl reload $service"

        # Check if the rule already exists in the sudoers file
        if ! grep -q "$sudoer_rule" /etc/sudoers.d/$user; then
            # Append the rule to the sudoers file
            echo "$sudoer_rule" | sudo tee -a /etc/sudoers.d/$user > /dev/null
            echo "SUCCESS: sudoers file modified to allow $user to start/stop/restart/reload $service"
        else
            echo "INFO: rule for $service already exists in the sudoers file"
        fi
    done
}
```

</details>

### Modifying sudoers via Python

<details>
<summary>Python Function</summary>

```py
#!/usr/bin/python3

import platform
import os

def systemd_services_without_root(*services):
    if platform.system() == 'Windows':
        print('ERROR: allow_services_without_root is not currently supported on Windows')
        return 1
    user = os.getlogin()
    new_rules = {}
    for service in services:
        commands = ', '.join((f'/usr/bin/systemctl {unit_cmd} {service}' for unit_cmd in ('start', 'stop', 'restart', 'reload')))
        new_rules[service] = f'{user} ALL=(ALL) NOPASSWD: {commands}\n'
    sudoers_file = f'/etc/sudoers.d/{user}'
    with open(sudoers_file, 'a+', encoding='utf-8') as f:
        existing_rules = set(f.readlines())
        rules_to_add = {}
        for service, new_rule in new_rules.items():
            if new_rule in existing_rules:
                print(f'INFO: rule for {service} already exists in /etc/sudoers')
            else:
                rules_to_add[service] = new_rule
        for service, rule in rules_to_add.items():
            f.write(rule)
            print(f'SUCCESS: {sudoers_file} modified to allow {user} to start/stop/restart/reload {service}')
    return 0
```

</details>

## Application

- Restarting gunicorn workers

### Python Example

```py
import subprocess
subprocess.Popen(["systemctl", "restart", "my_service"]).wait()
```
