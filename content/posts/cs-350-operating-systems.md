---
title: "CS 350 Operating Systems"
date: 2023-01-10T14:56:10-05:00
draft: false
tags: [
    "university",
]
---

[Course website](https://student.cs.uwaterloo.ca/~cs350/)

## Concepts

- Operating Systems
- Distributed Systems
- Networking
- Internet of Things
- Computer Architecture
- Embedded Systems
- Database Systems
- Systems and Machine Learning

## Course Topics

- Threads & Processes
- Concurrency & Synchronization
- Scheduling
- Virtual Memory
- I/O
- Disks, File systems, Network file systems
- Protection & Security
- Unix referenced as an example

## Assigment Helpers

### Submitting

```sh
cs350_submit <assign_dir> <assign_num_type>
cs350_submit ASSTUSER0 ASSTUSER0
```

### How to add to PATH

In your `.bashrc`, add `PATH="$PATH:path"`

### Pro tip

Use three terminals. First terminal for running the SO. Second terminal for building the kernel, a third for using grep on the entire OS, and optionally a fourth terminal if you need to debug.

### Custom Directory for OS/161

```sh
./configure --ostree="$PWD/../root" --toolprefix=cs350-
```

### Finding stuff in the kernal code

Since you may not have vscode open for the kernel but your entire linux environment,
it may be better to use grep.

```sh
grep -rnw . -e 'pattern'
```

This is the command assumes you are in the os161-X.YZ directory.

### Building the kernel

```sh
./config ASSTX  # run whenever adding or removing kernel files from kern.conf
# build the kernel
cd ../compile/ASSTX
bmake depend
bmake
bmake install
```

### Add the simulator to root

```sh
cp /u/cs350/sys161/sys161.conf sys161.conf
```

### Running the kernel on a simulator

```sh
sys161 kernel-ASST0
```

### Debugging

```sh
sys161 -w kernel-ASSTX
```

And in second shell, run

```sh
cs350-gdb kernel-ASSTX
(gdb> dir ../os161-1.99/kern/compile/ASSTX
(gdb) target remote unix:.sockets/gdb
# set breakpoints before continuing
(gdb) c
```

See [Debugging with GDB](http://www.student.cs.uwaterloo.ca/~cs350/common/gdb.html).

### Working locally

To work locally, you will need docker.

### Submitting Assignments

Use `cs350_submit`
