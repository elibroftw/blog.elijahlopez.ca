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
  - cs350_cli.py

```sh
cs350_submit os161/os161-1.99/kern/compile/ASST0 ASST0
cs350_submit userspace/ASSTUSER0 ASSTUSER0
```

<details>
<summary>cs350_cli.py</summary>

{{< gist elibroftw 36d18406d6be775e2c52af9d19571c42 >}}

</details>

### How to add to PATH

In your `.bashrc`, add `PATH="$PATH:path"`. For some reason, my `.bashrc` file keeps getting wiped.

```sh
PATH="$PATH:/u/cs350/sys161/bin:/u/cs350/bin"
```

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
// stdin is 0, stdout is 1, stderr is 2.
```

```c
int fcntl(int fd, F_SETFD, int val);
// sets close on exec flag if val = 1, clears if val = 0
// sets file descriptor non-inheritable by new program
```

```c
perror(char * arg)
```

Error friendly print

### Pipes

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

## Concurrency

Data races occur without synchronization

Options:

- Atomic instructions: instantaneously modify a value
- Locks: prevent concurrent execution

### Sequential Consistency

Execution as if all operations were executed in some sequential order and that the operations of each  processor occurred in the order specified by the program.

Requirements for sequential consistency are maintaining program order on individual processors and ensuring writes are atomic.

- Sequential consistency complicates write buffers since CPUs use many caches.
- We want to group writes to the same location (coalescing)
- Complicates non-blocking reads
- Thwarting of compiler optimizations

Does not solve the problem of atomicity since modifying a value is 3 lines of code.

### x86 Consistency

Different choice for how to write like (cache, write cache and memory, write to memory only, uncacheable).

### x86 Atomicity

- `lock` - prefix to make a memory instruction atomic (locks bus for duration of instruction)
  - can avoid locking if memory already exclusively cached
  - all lock instructions totally ordered
  - other memory instructions cannot be re-ordered w. locked ones
  - locks are always ordered
- `xchg`
- `cmpxchg`
- `lfence`
- `sfence`
- `mfence`

### Peterson's Solution

- Assuming sequential consistency
- Assume two threads
- `int not_turn`
- `bool wants[2]`

```c
for (;;) {
  wants[i] = true;
  not_turn = i;
  while(wants[1-i] && not_turn == i)
    // other thread wants in and not our turn
  Critical_section();
  wants[i] = false;
  Remainder_section();
}
```

### Mutexes

A mutex is a mutual exclusion lock. Thread packages typically provide _mutexes_:

```c
void mutex_init(mutex_t *m, \ldots);

```

All global data should be protected by a mutex.
If mutexes are used properly, then we get sequential consistency.

Want to wrap all shared memory writes with a mutex lock and unlock.

```c

```

### Condition Variables

Instead of calling `thread_yield`, we can sleep until a condition is met.

```c
int pthread_cond_init(pthread_cond_t *, \ldots);
int pthread_cond_wait(pthread_cond_t *c, pthread_mutex_t *m);
// unlock's m atomically and re-acquires it upon signal
int pthread_cond_signal(pthread_cond_t *c);
// wake all threads up
int pthread_cond_broadcast(pthread_cond_t *c);
```

Use a while loop with these conditions to avoid race conditions of being beat out by another consumer.

### Semaphores

Fancy mutex where if s is 0, sem_wait will block.

```c
int sem_init(sem_t *s, ..., unsigned int n); // proc_count_mutex = sem_create("proc_count_mutex",1);

sem_wait(sem_t *s) (originally called P)  // P(sem_t *s)

sem_signal(sem_t *s)  // V(sem_t *s)
```

### Ordering requirements

```c
v->val++;
// this tells the compiler not to reorder
asm volatile ("sfence" ::: "memory");
v->lock = 0;
```

### MIPS Spinlocks

```c
void spinlock_acquire {
  ...
  while(1) {
    if (spinlock_data_get(&lk->lk_lock) != 0)
      continue; // saves CPU cycles
    if (spinlock_data_testandset(&lk->lk_lock) != 0)
      continue;
    break;
  }
  lk->lk_holder = mycpu;
}
```

### Atomic

To implement mutexes you need atomics. Atomics guarantee
something will be written before the next line. (fences)

```c
_Atomic(int) variable_name = 1;
atomic_fetch_add_explicit(&variable_name, 1, memory_order_relaxed);
atomic_fetch_add_explicit(&variable_name, -1, memory_order_relaxed);
atomic_thread_fence(memory_order_release);
atomic_store_explicit(&variable_name, 0, memory_order_relaxed);
int  x = atomic_load_explicit(&variable_name);
atomic_thread_fence(memory_order_acquire);
```

### Multicore Caches

Cache = performance but presents an opportunity for cores to disagree about memory.

Avoid false sharing: avoid placing data used by different threads in the same cache line.

```c
int lock;
char _uused[bytes]; // before C11 / C++ 11 manual padding
alignas(64) struct foo f;  // C11 / C++ 11
```

Avoid contending on cache lines.

### More Deadlocks

Both threads must lock and unlock in the same order

```c
lock(a);
lock(b);
unlock(b);
unlock(a);
```

### Solving Deadlocks

- Avoid circular graphs
- Predefine an order in which each lock should be acquired
- You can use the address of the lock to determine locking order

### Wait Channels

```c
void wchan_sleep(struct wchan *wc);
// blocks calling thread on wait channel wc
void wchan_wakeall(struct wchan *wc):
// wakes all threads sleeping on the wait channel
void wchan_wakeone(struct wchan *wc);
// unblocks one threads sleeping on the wait channel
void wchan_lock(struct wchan *wc);
// lock wait channel operations
// prevents a race between sleep and wakeone
```

```c
P(struct semaphore *sem) {
  spinlock_acquire(&sem->sem_lock);
  while (sem->sem_count == 0) {
    wchan_lock(sem->sem_wchan);
    spinlock_release_(&sem->sem_lock);
    wchan_sleep(sem->sem_wchan);
    spinlock_acquire(&sem->sem_lock);
  }
  sem->sem_count--;
  spinlock_release(&sem->sem_lock);
}

V(struct semaphore *sem) {
  spinlock_acquire(&sem->sem_lock)
  sem->count++;
  wchan_wakeone(sem->sem_wchan);
  spinlock_release(&sem->sem_lock);
}
```

<details><summary>Mutex Lock Implementation</summary>

```c
struct lock {
  struct * wchan wc;
  struct spinlock lock;
  int state;
}

void lock_acquire(struct lock *l) {
  spinlock_acquire(&l->lock);
  while(l->state) {
    wchan_lock(l->wc);
    spinlock_release(l->lock);
    wchan_sleep(l->wc);
    spinlock_acquire(l->lock);
  }
  l->state = 1;
  spinlock_release(&l->lock);
}

void lock_release(struct lock *l) {
  spinlock_acquire(&l->lock);
  l->state = 0;
  wchan_wakeone(l->wc);
  spinlock_release(&l->lock);
}

```

</details>

## System Calls

Kernel Mode can only be entered through well defined entry points.

## Interrupts

Generated by devices needing to signal

## Exceptions

Caused by processor. E.g. divide by zero, page faults, CPU errors.
