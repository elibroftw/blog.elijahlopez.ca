---
title: "CS 350 Operating Systems"
date: 2023-01-10T14:56:10-05:00
draft: false
tags: [
    "university",
]
---

[Course website](https://student.cs.uwaterloo.ca/~cs350/)

{{< toc >}}

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

## Assignment Helpers

### Submitting

File hierarchy

- cs350 (CWD)
  - os161
  - userspace

```sh
cs350_submit os161/os161-1.99/kern/compile/ASST0
cs350_submit userspace/ASSTUSER0 ASSTUSER0
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

```c
int dup2(int oldfd, int newfd);
// closes newfd if it was a valid descriptor
// makes newfd an exact copy of oldfd
// same offset on both
```

```c
int fcntl(int fd, F_SETFD, int val);
// sets close on exec flag if val = 1, clears if val = 0
// sets file descriptor non-inheritable by new program
```

[slide left off at](https://student.cs.uwaterloo.ca/~cs350/W23/notes/processes.pdf)

```c
perror(char * arg)
```

Error friendly print

### PIpes

```c
int pipe(it fds[2]);
// returns two file descriptors in fds[0] and fds[1]
// writes to fds[1] will be read on fds[0]
// fds[0] returns EOF after last copy of fds[1] closes
// -1 is error, 0 is success
```

pipesh.c

Use dup2 to read from the pipe\[1] and write from the pipe\[0] while maintaining the stdout and stdin. stderr is 2.

### Implementing Processes

- Process Control Block (PCB) is kept for each process
- `proc` in Unix, `task_struct` in Linux, `struct thread` in OS/161
- Tracks state of process
  - new and terminated at beginning & end of life
  - running
  - ready - can run, but kernel has chosen different process to run
  - waiting
- Information necessary to run (registers, virtual memory mapping, etc, open files)
- Other data like credentials, signal mask, controlling terminal, priority, accounting stats, debugged, binary emulation, ...

### Scheduling

- FIFO/Round-Robin?
- Priority, give some threads a better shot at the CPU

### Preemption

- Can preempt a process when kernel gets control
- Vector controls through system calls and etc.
- Periodic timer
- Device interrupt
- Changing the running process is called context switch

### Context Switch

- Saving program counter and integer registers (Always)
- Special registers
- Condition codes
- Change virtual address translations

Non-negligible cost

- Save/restore floating point registers expensive
- Flushing TLB (memory translation hardware)
  - HW Optimization 1: Don't flush kernel's own data from TLB
  - HW Optimization 2: use tag to avoid flushing any data
- Cache misses

## Threads

- Multi-threaded programs share the address space.
- Typically oe kernel thread for every process

### POSIX Thread API

```c
int pthread_create(pthread_t *thr, pthread_attr_t *attr, void *(*fn)(void *), void *arg);
// create a new thread identified by thr with optional attributes, run fn with arg
void pthread_exit(void *return_value);
// destroy current thread and return a pointer
int pthread_join(pthread_t thread, void **return_value);
// Wait for thread thread to exit and receive the return value
void pthread_yield();
// tell the OS scheduler to run another thread or process
```

and more

### Limitations of Kernel Threads

- syscalls take 100 cycles, function calls take 2 cycles
- fixed-size stack within kernel

### Go Language Routines

- lightweight, 100k go routines is practical

### Implementing threads in OS/161

```c
int thread_fork(const char *name, struct proc *proc,
  void (*entrypoint)(void *data1, unsigned long data2), void *data1, unsigned long data2)
// wrapper for pthread_create wrapper, does not call process fork
```
