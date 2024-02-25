---
title: "Linux Desktop Detach Process From Terminal"
date: 2024-02-24T15:23:23-05:00
draft: false
tags: [
  'tutorial',
  'linux'
]
---

### Using disown

So let's start a job in the shell.

```sh
firefox &
```

This will start the job in the background of the shell, but it will still be a child of the terminal. We can confirm by running `jobs`.
If we want to keep the application running after we close or disconnect from the shell, then we need to use `disown`. If we have multiple jobs, then we can also use `%n`

```sh
firefox &
disown
```

```sh
firefox &
code &
disown %1
```

Putting it all together while ignoring stdout and stderr in the terminal

```sh
firefox >/dev/null 2>&1 & disown
```

Yes the disown applies to the same command and not any currently active job

### nohup

`nohup`, is an application that executes another application such that it won't receive a `SIGHUP` when the shell receives the hang up signal. Typically, we also need to redirect `stdout` and `stderr` if we don't want the creation of a `nohup.out` file which is the default behaviour.

```sh
nohup firefox >/dev/null 2>&1 &
```

In this command, we are informing the shell, to redirect output to `/dev/null` (a place that discards everything that is written to it, and returns an End of File - EOF if read from). We also inform the shell to redirect the stderr (2) to wherever the stdout (1) is directed (&) to.

### Using `dex` for Desktop Entries

Another way is to use `dex` to run the "Exec" value of a `.desktop` file if the entry type is `Application`.

```sh
dex /usr/share/applications/firefox.desktop
```

[Desktop entries - ArchWiki](https://wiki.archlinux.org/title/Desktop_entries#Usage)

### Subshell

Run the command (with bg) in a sub-shell like so

```sh
(firefox &)
```

To ignore output,

```sh
(firefox >/dev/null 2>&1 &)
```
