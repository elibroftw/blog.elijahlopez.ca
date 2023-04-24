---
title: "CS 350 Operating Systems"
date: 2023-01-10T14:56:10-05:00
draft: false
tags: [
    "university",
]
---

<!-- <img class=equation-tall src="https://latex.codecogs.com/svg.image?QI="> -->

<!-- - [Course website](https://student.cs.uwaterloo.ca/~cs350/) -->
- [Course website](https://student.cs.uwaterloo.ca/~cs350/W23/reading.shtml)
- [Past midterms](https://student.cs.uwaterloo.ca/~cs350/common/old-exams/)

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

### Thread Scheduling

- FIFO / Round-Robin?
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
  struct wchan *wc;
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

### System Calls

Kernel Mode can only be entered through well defined entry points.

### Interrupts

Generated by external devices needing to signal

### Exceptions

Caused by processor. E.g. divide by zero, page faults, CPU errors.

### System Call Numbering

## Virtual Memory

### Segmentation

Seg base bounds rw

0 0x4000 0x6ff 10

1 0x0000 0x4ff 11

2 0x3000 0xfff 11

Exercises: 0x0240, 0x1108, 0x265c, 0x3002, 0x1600

If the segment is invalid (not in table or has invalid rw bits), an exception is thrown.

#### External Fragmentation

Free memory between segments that is too small to be used

#### Internal Fragmentation

Space inside a segment that was allocated for the stack.

### Paging

- Divide memory up into small pages
  - Map virtual pages to physical pages. Each process has separate mapping
- Pages eliminates external fragmentation and pages are small enough that internal fragmentation is .5 pages per "segment".

![pages table](images/cs-350/pages.png)

### MMUs

Memory Management Units

### Hardware Managed MMU

- Hardware reloads TLB with pages from a page tables
- Typically hardware page tables are Radix Trees
- Requires complex hardware

#### x86 Paging

[Slides](https://student.cs.uwaterloo.ca/~cs350/W23/notes/vm_hardware.pdf)

### Software Managed MMU

- Simpler hardware and asks software to reload pages
- Requires fast exception handling and optimized software
- Enables more flexibility in the TLB (e.g. variable page sizes)
- TLB fields: Virtual page, Pid, Page frame, NC, D\[irty], V, Global

TLB Instructions

- twlbwr: write a random slot
- tlbwi: write a specific slot
- tlbr: read a specific slot
- tlbp: probe a slot containing an address

Registers needed to be  loaded

- c0_entryhi: high bits of TLB entry
- c0_entrylo: low bits of TLB entry
- c0_index: TLB Index

Global bit

-

### Increasing Virtual Memory by Paging

The number of pages for a memory system is the size of the memory divided by the size of each page.

To translate a virtual address to a physical address, we replace the starting bits of the virtual address that corresponds to the
virtual page number, and replace it with the frame number.

- Use disk to simulate larger virtual than physical mem
- Disk is much slower than memory so find 20% hot to put into memory and 80% cold into disk
- How to resume after a page fault

Restarting Instructions

- Faulting virtual address (In %c0_vaddr reg on MIPS)
- Address of instruction that caused fault (%c0_epc reg)
- Read or write, fetch, user access or kernel access?
- Hardware must allow resuming after a fault
- Idempotent instructions are easy
  - A simple load or store instruction can be re-executed

Superpages

- Large mappings
- 2/4 MB mappings
- Sometimes more pages in L2 cache than TLB entries

FIFO Eviction

- Evict oldest fetched page in system

LRU Page replacement

- Worse for looping over memory (better to use MRU eviction then)
- Stamping timer is too expensive as it doubles memory traffic
- Keeping a doubly-linked list is annoying
- Better to approximate

#### Clock Algorithm

- Do FIFO but skipped accessed pages
- Keep pages in circular FIFO list
- Scan all and find a page that isn't set and evict
- Runs when there is very low memory

When there is larger memory, use two clock hands at a fixed size. The first
hands clears and the second hand picks evicted pages.

Can take advantage of hardware dirty bit to prefer clean pages over dirty page. A dirty page has
to be written to the disk.

Or use n-bit accessed count instead of just A bit. On sweep, count = (A << (n - 1) | (count >> 1)). Evict the page with the lowest count.

Random eviction avoids belady and double swaps by hypervisors, and is simple to implement.

Databases are workload specific.

#### Other Page Replacement Algorithms

- Random eviction
  - Used in hypervisors to avoid double swap
- LFU
- MFU
- Specific policies
- Naïve paging

### Thrashing

Process uses more memory than system has

- working set
  - How  much memory for process is required
- page fault frequency

## Scheduling

### CPU Scheduling

Transition States

- new -- admit --> ready -- scheduler dispatch --> running -- exit -- I/O or event wait --> waiting
- running -- exit --> Terminated
- waiting -- I/O or event completion --> ready

#### Scheduling Decisions

1. Switches from running to waiting state
2. Switches from running to ready state
3. Switches from new/waiting to ready
4. Exits

- Non-preemptive schedules use 1 & 4 only
- Preemptive schedulers run at all four points

### First Come First Served

If P1 = 24, P2 = 3, P3 = 3,

- Then throughput = 3 / 30 = 0.1 jobs / sec.
- Turnaround time: (end times of (24 + 27 + 30) / 3) = 27

### Shortest Job First

- Attempts to minimize turnaround time, but ends up minimizing waiting time and response time
- With preemption, it is called shortest-remaining-time-first.
- Requires estimating burst time because future cannot be predicted
- Can lead to unfairness and starvation

### Round Robin

- Preempts job after some time and move it to the back of a FIFO
- Disadvantages
  - Context switching
    - Saving and restoring registers
    - Switching address spaces
    - Cache, buffer cache, & TLB misses
  - Slower than FCFS

### Time Quantum

- 10-100msec
- want larger than context switch cost (why?)
- majority of bursts should be less than quantum (why?)
- not too large that it's basically FCFS

### Priority Scheduling

- Give a CPU to the process with highest priority
- SJF is priority but using CPU burst time
- Starvation - low priority processes may never execute
- Increase a processors priority as it waits

### Multilevel Feedback Queue

- Priorities of 0 to 127 and grouped into 32 run queues
- With each queue, run round robin
- Favour interactive jobs
- Run highest priority non-empty queue

#### Process Priority

- `p_nice`: user-settable weighting factor
- `p_estcpu` - per-process CPU usage
  - Incremented whenever timer interrupt found proc. running
  - Decayed every second while process runnable
  `p_estcpu` = (2 \* load) / (2 \* load + 1) \* p\_estcpu + p\_nice
  - Load is sampled average of length of run queue plus short-term sleep queue over last minute
- Run queue determined by `p_usrpri/4`
  - `p_usrpri` = 50 + (p\_estcpu / 4) + 2 \* p\_nice
- For sleeping threads, update `p_estcpu` on wake using `p_slptime` to avoid unnecessary computes
  - Decay: `p_estcpu` = (2 \* load) / (2 \* load + 1) ^ `p_slptime` * `p_estcpu`

### Priority Donation

If lower priotity has a lock that medium priority wants, then the lower priority has the same priority as the medium.

If H waits on a lock held by M, then the priotity of M and L both go up, whereas if H waits on just the lock held by L, only L gets a priority bump to H.

### Borrowed Virtual Time Scheduler

- run process with lowest effective virtual time
- Ei = Ai - (warpi ? Wi : 0)
- Ej = Ei - C / wi where C is the context switch cost (ignore when j just became runnable)
- Ai += t / wi

![BVT example](/images/cs-350/bvt-example.png)

## I/O

Realistic PC Architecture

![realistic older PC architecture](/images/cs-350/pc-architecture.png)

I/O Bus PCI Example. Peripheral Component Interconnect Express (PCIe).

![PCI I/O bus example](/images/cs-350/pci-io-bus.png)

### Memory and I/O buses

- CPU has a bus to the Memory
- Devices have an I/O bus to the Memory
- Devices can appear to be Memory

### Memory Types

RAM stands for Random Access Memory.

- Static RAM (SRAM)
  - 4-6 transistors per bit
  - very fast, cache slower memory
  - two NOT gates
- Dynamic RAM (DRAM)
  - 1 transistor per bit
  - Capacitor + gate (charge indicates value)
  - Slower comparator since charge leaks
  - Re-write charge after reading
- Video RAM (VRAM)
  - Write and read at the same time (dual ported)

### Device Communication

- Memory-mapped devices
  - Physical addresses correspond to device registers
  - load/store to get status/send instructions
  - 2<sup>16</sup> port numbers
  - per-range access control not useful
  - OS has to map physical to virtual without caching
  - physical address assigned at boot
- Device memory
  - OS can write to the device through I/O bus
- Special I/O Instruction
  - Some CPUs have special I/O instructions
  - OS can allow user with finer granuality than a page
- DMA (direct memory access)
  - Overlaps unrelated computation with moving data over I/O bus
  - Typically then need to “poke” card by writing to device register
  - Keep list of buffer locatioons in memory
  - use the CPU only to transfer control, not for data transfer
  - Network Interface Card (NIC)
    - Bus interface logic uses memory to move packets to and from buffers in main memory
  - Steps
    1. Tell device driver to transfer data to buffer at address X
    2. Driver tells device controller to transfer bytes to buffer X
    3. DMA transfer initiated for bytes C until C = 0; memory address increases and C decreases
    4. DMA interrupts CPU to signal completion

### Driver Architecture

- Entry points provided to kernel: Reset, ioctl, output, interrupt, read, write, strategy
- Need to synchronise
  - Polling sucks because either CPU is blocked or high latency
  - Card should interrupt CPU
    - CPU asks card what occured
    - High network packet arrival rate can prevent progress = mix of both

```c
void sendbyte(uint8_t byte) {
  /* Wait until BSY bit is 1. */
  while ((inb (0x379) & 0x80) == 0) delay();

  /* Put the byte we wish to send on pins D7-0. */
  outb(0x378, byte);
  /* Pulse STR (strobe) line to inform the printer
  * that a byte is available */
  uint8_t ctrlval = inb(0x37a);
  outb(0x37a, ctrlval | 0x01);
  delay();
  outb(0x37a, ctrlval);
}
```

## Disks (I/O Subtopic)

- Stack of magnetic platters
  - Each platter is divided into [_concentric_](https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/WA_80_cm_archery_target.svg/1200px-WA_80_cm_archery_target.svg.png) tracks and each track has sectors
  - A stack of tracks with a fixed raidus is called a cylinder
- Disk arm assembly
  - Arms rotate around pivot, all move together
  - Arms contain disk heads–one for each cylinder
  - Heads read and write data to platters
  - One head active at a time

![disk anatomy](/images/cs-350/disk-anatomy.png)

### Disk Positioning System

- Move head to specific track
  - Keep it there by resisting physical shocks, imperfect tracks, etc.
- Seeking
  1. speedup - accelerate arm to max speed or hafl way point
  2. coast - at max speed (for long seeks)
  3. slowdown - stops arm near destination
  4. settle - adjusts head to actual desired track
- Settle dominates very short seeks (~1ms)
- Short seeks dominated by speedup (acceleration of 40Gs)

### Seeking

- Head adjustments
- Settles take longer for writes because a checksum can be used to retry a read, but a write needs to be perfect otherwise another track got written to
- Disk keeps table of pivot motor power
  - Maps seek distance to power and time
  - Table set by periodic “thermal recalibration”
    - Recalibration hurts audio-video
- Average seek time can be anything from seeking a third of the disk to a third of the time required to seek entire disk

### Sectors

- Disk interface presents linear array of sectors
- 512 bytes written atomically
- Disk handles mapping logical sector number to physical sector
  - Zoning: puts more sectors on longer tracks
  - Track skewing: sector 0 pos. varies by track to speed up sequential access across tracks
  - Sparing: flawed sectors remapped elsewhere
- OS assumes disk is blackbox
  - Larger logical sector \# difference = larger seek
  - Can build table to estimate times through emperical tests

### Disk Interface

- Controls hardware, mediates access
- Connected to computer by bus that can be contended by multiple devices
- Command queueing
- Disk cache for read-ahead
- Write caching is possible but unstable data

### Buses

- SCSI
  - Devices: host adapters & SCSI (bus) controllers
  - Service Delivery Subsystem connects devices (SCSI bus)
- SCSI-2 bus (SDS) connects up to 8 devices
  - Controllers can have > 1 logical units (LUNs)
  - Controller built into disk
  - Bridge controller can manage multiple devices
- Device is either initiator or target
  - Traditionally host adapter was initiator, controller the target
  - Controllers can be initiators
  - 1 initiaor and at least one target

### SCSI Requests

A request is a command from initiator to target

- Commmand
  - Target gets control of bus but can disconnect and then reconnect
  - Task identifier: initiator ID, target ID, LUN, tag
  - Command descriptor block: read 10 blocks at pos. N
  - Task attribute: simple ordered, head of queue
  - Optional: output/input buffer, sense data
  - Status byte: good, check condition, intermediate
- Execution
  - Each Logical unit maintains a queue of tasks { dormant, blocked, enabled, ended }
  - Simple tasks are dormant until no ordered/head of queue
  - Ordered tasks dormant until no HoQ/more recent ordered
  - HoQ tasks begin in enabled state
- Initatior can manage tasks
  - Abort/terminate, reset
- Linked commands
  - Atomic read-modify-write implementation
  - Intermediate commands return a status of intermediate

### SCSI Exceptions

- Stop executing most commands
- Return "check conditon" status
- Simple device implementation

### Disk Performance

- Ordering is huge issue
- Sequential much faster than random
- Power fail leads to inconsistent state
- Order for crashes
- Order requests to minimize seek times

### Disk Scheduling

#### First Come First Serve (FCFS)

- Process disk requests as they come in
- Increases average latency
- Cannot exploit request locality

#### Shortest Positioning Time First (SPTF)

- Pick requests with shortest seek time
- higher throughput and exploits locality
- starvation (longer seeks never get a chance)
- don't know which request will be fastest
- Improve with aged SPTF
  - Serve lowest priorities, adjust by wait time
  - T<sub>effective</sub>=  T<sub>pos</sub> - W * T<sub>wait</sub>

#### Elevator Scheduling (SCAN)

- Sweep across disk, servicing all requests passed
- Seeks must be in the same direction
- Switch directions if no further requests
- Bounded waiting
- Biased towards middle cylinders
- Could miss an optimization SPTF would catch
- CSCAN: only sweep in one direction (common in Unix)
  - LOOK/CLOOK in textbook
  - After reaching disk end, jump to start of disk

#### VSCAN(r)

- SPTF and SCAN
- T<sub>effective</sub> = T<sub>pos</sub> + r * T<sub>max</sub>
- 0 <= r <= 1
- r determines how much same direction seeking is rewarded (0 = SPTF, 1 = SCAN)

### Flash Memory

- Solid state
- Stores charge
  - Charge wears off (Phone off for a year will cause data loss)
- Better heat and power consumption
- Limited overwrites
- Flash Translation Layer to protect physical block = performance impact
- Random write are expensive

#### NOR flash

- Can execute code in flash itself
- Faster smaller unit reads
- Slower erases

#### Single-level cell (SLC) vs. Multi-level cell (MLC)

- MLC encodes multiple bits in voltage level
- MLC slower to write than SLC
- MLC is basically more dense at write latency cost

#### NAND flash

- Higher density
- Faster erase/write
- More errors needing error correction
- 2112-byte pages
- Blocks contain 64 (SLC) or 128 (MLC) pages
- Blocks divided into 2-4 planes
  - All planes contend for same package pins
  - Block access in parallel
- Limited to reading one page at at ime
  - 25 micro seconds
- Must erase whole block before programming
  - 2ms

## Filesystem

### Files: name bytes on disk

- File system: translate name & offset to disk blocks
- Want to reduce number of disk accesses for operations (group related things)
- File system  metadata
  - An inonde that points to the inode array.

### Mappings

- File metadata (inode): map byte offset to disk block address
- Directory: map name to disk address or file \#

### Intuitions

- perfomance related to disk accesses
- each disk access takes time because of the rotataional delay

### Common Patterns

- Sequential
  - Processed in sequential order
- Random access
  - Access any block in a file without passing predecessors (skipping)
- Keyed access
  - Search for block with particular values

### DOS FS

- File Allocation Table (FAT)
- Each directory has a mapping of filenames to index in FAT
- FAT contains next block.
- FAT is small enough to be cached is cheaper than disk access.

### Indexed files

- requires large chunks of contiguous space space
- array of block pointers per file
- free list for allocations

### Multi-level indexed files

- 14 block pointers
- first couple pointer point to blocks
- other pointers point to more and more indirect blocks

### Directories

- Approach 1: known disk location; {name, inumber}, unique names
- Approach 2: Single directory per user
- Approach 3: Hierarchical name spaces, graph

- Root directory is always inode 2
- Special names in FS: (Root: "/"), (Current: "."), (Parent: "..")
- Special names not in FS: (User dir: "~"), globbing
- Use cd to change directory, and ls to list names in current directory

### Hard and soft links

- Each inode has a count of hard links
- Use `ln source synonym`  to create a link
- Inode for has special symlink bit set and contains target name (automatically translated by file system)

### Fast File System (FFS)

- Original file system
  - was slow and required inodes for directories as well
  - blocks too smal (512 bytes)
  - index too large
  - poor clustering of related blobs, inodes far from datablocks, poor enumeration
  - lacked atomic file updating
  - uses a free list (linked list) of free blocks which gets jumbled and slow to find adjacent blocks
- Cluster related objects together and seperate unrealted items
- With bigger block sizes, split unused large portions into _fragments_ when there is a need to allocate smaller files
- Fixed-size fragments allows the file system to allocate files in a more organized manner, which reduces fragmentation and improve performance
- Uses bit-map of free blocks which is much easier to find contiguous blocks and can be stored in memory, time increases only when fewer free blocks

#### Clustering in FFS Using Cylinder Groups

- Group at least one consequtive cylinder into a _cylinder group_
- Order of retrieval is can access any block in a cylinder without a seek, and the next fastest place is an adjacent cylinder
- Put related data in the same cylinder group and unrealted items in another group
  - Different directories are placed in different cylinder groups
- Tries to put sequential blocks in adjacent sectors
- Tries to keep same inode in same cylinder as file data
- Tries to keep all inodes for a dir in the same cylinder group
- Each cylinder group is a mini-Unix file system with a starting super block

#### Bitmap

As said before, a bitmap is used in place of a free list to make it much simpler to find contiguous free blocks. It can also be stored in memory as it is small.

- If a 4GB disk has 4KB blocks, how big is the map? Each bit represents a 4KB blocks, so 4,000,000 KB / 4,000 KB = 1,000 bits = 125 bytes
- Keep 10% reserved without informing user
- Only allow root to allocate from the 10%

#### FFS Next Steps

- Contiguous blocks are named with a single pointer and length (ext2fs)
- Writes were done synchronously
- Make writes async with write-ordering or logging/journaling

### Log-Structured File System

- [paper](https://web.stanford.edu/~ouster/cgi-bin/papers/lfs.pdf)
-

### Metadata Synchronously

If we create a directory entry and crash during the middle of creating a directory entry and an IO block, what happens?

- Block on disk
- Inode
- Directory entry pointing to an inode

To ensure things work correctly, we need to flush to disk before the pointer pointing to the inode gets flushed. Therefore, we need to write out the data first, then create the inode, and then create the directory entry pointing to it. When deleting, first delete the directory entry, and then the inode.

Log inode and dir entry to a log first. On crash, re-execute the log to copy back the file system. This is 2x the IO writes.
1GB sized journals.
