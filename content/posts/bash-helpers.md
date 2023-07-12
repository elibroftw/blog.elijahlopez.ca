---
title: "Bash & Linux Helpers"
date: 2022-02-14T14:06:30-05:00
draft: false
tags: [
    "tutorial",
    "programming",
    "devops",
    "bash",
    "linux",
]
---

It seems that many article tutorials on `bash` are ugly, are suboptimal, and are no straight forward.
My goal is for this file to be a reference file whenever I need to do scripting after a long time.
One important concept in bash, is that an exit code of 0 indicates True, not False. Which seems counterintuitive if you program in
any non-scripting language like C/C++ or Python.

## Bash - Argument Parsing and Flags

If you don't get what's going on, read my [bash quickstart article](/posts/bash-quickstart.md)

### Concepts

- getopts is overkill, so here is an alternative.
- "Booleans" using string comparison
- Conditionals (if, elif, else, AND &&, OR ||)
- For loop

```bash
supplied_arg="default"
# iterate all arguments
for arg in "$@"; do
    # use [[ ]] to avoid double quoting variables
    if [[ $last_arg = "--supply" ]]; then
        supplied_arg="$arg"
        last_arg=""
    # OR ||
    elif [[ $arg = "--flag1" ]] || [[ $arg = "--flag" ]]; then
        flag1=true
    # elif, AND &&
    elif [[ $arg = "--override" ]] && [[ ! $supplied_arg = "default" ]]; then
        # ignore the redundancy, this is to showcase &&
        flag_override=true
    else
        # you can do something with these args here
        # wc -l "$arg"
        # or you can set last_arg in order to parse `--something ARG`
        last_arg="$arg"
    # end of if statement
    fi
# done loop (for or while)
done

# check if flag supplied
if [ flag1 = true]; then
    echo "got --flag1 or --flag"
else
    notGot="got neither --flag1 nor --flag"
fi
# flag not supplied (since variable was never set, we check ! = true rather than = false)
if [ ! flag1 = true ]; then
    echo $notGot
fi
```

## Linux - Add to PATH

- A better approach than appending a statement to `PATH="$PATH:/new/path">> ~/.bashrc`
- TODO: add instructions

## Linux - Add Cronjob

- automated approach
- adds the cronjob if not exists
- prevents concurrent/overlap runs

```bash
add_cronjob() {
    # crontab will not set the working directory
    # create locks directory if it does not exist
    mkdir -p ~/locks
    # my sample job uses flock to prevent overlapping runs
    # minute hour day month day_of_week
    # /X means divisible by X
    cronjob="*/1 * * * * flock -n ~/locks/auto_deploy_$PROJECT.lock $PYTHON $(pwd)/cronjob.py"
    # cronjob.py will set the working directory
    if ! crontab -l &>/dev/null; then
        # crontab file does not exist
        echo "$cronjob" | crontab -
        echo "Created new crontab with job"
    elif ! crontab -l 2>/dev/null | grep -Fq "$cronjob"; then
        # job not found in crontab
        echo $(crontab -l ; echo "$cronjob") | crontab -
        echo "Added $cronjob ... to existing crontab"
    else
        echo "Job already exists in crontab"
    fi
}
```

## Linux - Add Systemd Service

- I used lots of echos and tee \[-a]
- In order to work with spaces in an argument, I created strings with `\'$VAR\'`
- TODO: add code

## Linux - Auto Setup Certbot

```bash
# Context:
# define $DOMAIN (e.g. lenerva.com)
install_certbot() {
    sudo snap install core; sudo snap refresh core
    sudo snap install --classic certbot
    sudo ln -s /snap/bin/certbot /usr/bin/certbot
    sudo certbot --nginx -d $DOMAIN -d www.$DOMAIN
}
```

## Linux - Auto Configure NGINX - Gunicorn

This works for me but it is possible to fail for you without editing `/etc/nginx/nginx.conf` manually server name hashes to 128

```bash
# Context:
# define $DOMAIN beforehand (e.g. lenerva.com)
# define $PROJECT beforehand (e.g. my-project)
# pwd is currently the project root directory
configure_nginx() {
    # configure nginx
    sudo apt install nginx -y

    sudo mkdir -p /var/www/$DOMAIN/html
    sudo chown -R "$USER":"$USER" /var/www/$DOMAIN/html
    sudo chmod -R 755 /var/www/$DOMAIN

    echo "server {" | sudo tee /etc/nginx/sites-available/$PROJECT >/dev/null
    echo "  listen [::]:80;" | sudo tee -a /etc/nginx/sites-available/$PROJECT >/dev/null
    echo "  listen 80;" | sudo tee -a /etc/nginx/sites-available/$PROJECT >/dev/null
    echo "  location / {" | sudo tee -a /etc/nginx/sites-available/$PROJECT >/dev/null
    echo "    include proxy_params;" | sudo tee -a /etc/nginx/sites-available/$PROJECT >/dev/null
    echo "    proxy_pass http://unix:$(pwd)/gunicorn.sock;" | sudo tee -a /etc/nginx/sites-available/$PROJECT >/dev/null
    echo "  }" | sudo tee -a /etc/nginx/sites-available/$PROJECT >/dev/null
    echo "}" | sudo tee -a /etc/nginx/sites-available/$PROJECT >/dev/null

    sudo ln -s "/etc/nginx/sites-available/$PROJECT" /etc/nginx/sites-enabled

    # TODO: if publishing script, also set max server name hashes to 128 in /etc/nginx/nginx.conf
    # uncomment below if it didn't work
    # nano /etc/nginx/nginx.conf
    sudo systemctl restart nginx
    # Firewall
    sudo ufw allow 'Nginx Full'
}
```
