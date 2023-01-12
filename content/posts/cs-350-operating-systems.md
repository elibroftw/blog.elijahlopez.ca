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

### Readelf

You can use readelf to get metadata of a binary

## Processes

- A _process_ is an instance of a program running
- Processes can spawn child processes
- Utilizes CPU better (throughput), lower latency
- Simplicity of programming
- Own view of the machine with abstractions
- Programs don't care which other programs are running
- Pointers are only relevant to one process

### Abstractions

- address space
- open files
- virtual CPU

### Sections

Programs have sections such as data and text

### Creating processes

Posix system calls available in `unistd.h`

```c
int fork(void);
```

Creates a new process that is an exact copy of current one. Return process ID (PID) of new process to the parent. Returns 0 in child.

```c
int waitpid(int pid, int *stat, int opt);
```

wait for process with id pid (-1 for any), set stat to the exit value, and opt is 0 or WNOHANG. Returns PID or -1 on error.

```c
void exit(int status)
```

Current process ceases to exist.  non-zero is error by convention.

```c
int kill(int pid, int sig);
```

Sends signal sig to process pid. SIGTERM most common value, application can catch it for cleanup. SIGKILL stronger as it always kills the process. HUP stands for hang up or "reload configuration."

```c
int execve(char *prog, char **argv, char **envp);
prog - absolute path of program run
argv - arguments to pass to main
envp - environment variables
```

Usually called through wrapper functions. Executes new program. Does not spawn that program. Replaces current program with that program.

```c
int execvp(char *prog, char **argv)
// Searches PATH for prog
int execlp(char *prog, char *arg, ...)l
// List arguments one at a time, finish with NULL
```

[slide left off at](https://student.cs.uwaterloo.ca/~cs350/W23/notes/processes.pdf)
