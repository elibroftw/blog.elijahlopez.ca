---
title: "Systems Engineering"
date: 2024-03-05T17:15:02-05:00
draft: true
---

## Goals

Writing this as I study for my interview with {{< inline-spoiler >}}TBA?{{< /inline-spoiler >}}.

1. We need to be able to troubleshoot a system using different Linux commands such as ping / ps aux | vmstat
2. We need to know how Linux works; what types of memory there are, how processes work, relationship between the kernel and user applications, etc.
3. Does the candidate understand the relationship between the kernel and the user applications?
4. Does the candidate understand on which resource something will get bottlenecked and how to determine that?
5. Does the candidate understand some of the common tools on a typical Linux system?
6. Does the candidate understand some common patterns to solve systems problems?

## Linux

Source: [Modern Operating System by Andrew Tanenbaum Chapter 10](https://csc-knu.github.io/sys-prog/books/Andrew%20S.%20Tanenbaum%20-%20Modern%20Operating%20Systems.pdf)

- a popular variant of UNIX
- Android is based on Linux
- most variants of UNIX have the same common set of system calls and the strategies/algorithms for the implementation is similar with differences

### History of Linux

- (1940s-1950s) system with one programmer at a time &rarr; (1960s) system with puncard programs batched together with time-consuming debugging/output process &rarr;
- Timesharing invented aat Dartmouth College which ran BASIC
- Timesharing by MIT, CTSS was successful and a collaboration began between MIT, Bell Labs, General Electric (MULTICS MULTiplexed Information and Computing Service)
- Ken Thompson wrote a stripped version of MULTICS in assembly on a PDP-7 minicomputer to support Thompon's development effort
- Brain Kernighan called it UNICS (UnNiplexed Information and Computing Service); UNIX is just a short-form
- Colleagues joined in and ported it (requires rewriting for each system) to many different minicomputers
- Memory protection resulted in multiple users
- Thomson designed and created a high-level language B (simplified BCPL which was simplified CPL which never worked and neither did PL/I) to rewrite UNIX
- B lacked structures, so Dennis Ritchie (a colleague) designed C and wrote a compiler
- (1974) Ritche and Thompas published UNIX paper
- AT&T owned Bell Labs and was a regulated monopoly with no permission to be in computer business; UNIX licensed for a fee to universities
- Coincidence being that PDP-11 which the Bell Labs team ported UNIX to, was being used at these universities
- Version 7 was portable

#### How to Port UNIX to Another System

1. Write C compiler for new machine
    - Steve Johnson rewrote the portable C compiler
2. Write device drivers for new machine's I/O (monitors, printers, disks)
    - no two disks worked the same way so can't just copy code to that machine and compile it!
    - instead of carrying physical tape for months, someone decided to use cables since they were a phone company after all
      - UNIX networking
3. Small amount of machine-dependent code, usually in assembly for interrupts and memory-management had to be rewritten

The first port was to the Interdata 8/32 minicomputer which exposed a large number of assumptions UNIX had made from being on the PDP-11

- 16bit integers, max program size of 64 KB, 3 registers for variables

#### Mass Commercialization

After AT&T was broken up, it started producing Systems, with System V being so complicated. UNIX was still worked on but never widely circulated. AT&T sold UNIX business unit to Novell in 1993 which sold it to Santa Cruz Operation in 1995. All major companies already had licenses by then.

#### Berkely UNIX

- Version 6
- U.S. Dep. of Defense's Advanced Research Projects Agency (ARPA) grants
- Released 1BSD (berkeley software distribution) and 2BSD for PDP-11
- 4BSD
  - had improvements like virtual memory and paging (allows programs to be larger than physical memory by paging parts into disk and swapping them out)
  - faster file system
  - networking introduced (TCP/IP)
  - new editor (vi)
  - new shell (csh)
- Became well established and vendors started basing on BSD

#### Fragmentation of UNIX

- Unlike MS-DOS where software would always run on MS-DOS, UNIX programs might not work with other UNIX systems due to a lack of standardization
- standardizations failed because of misaligned interests
- POSIX (Portable Operating System): IEEE standards board stepped in and produced 10003.1 which is a set of system procedures every UNIX conformant system must supply
  - The intersection of both major systems was used instead of the intersection
- C standardized by ANSI and ISO
- MINX was created which was UNIX-like and for educational purposes and was microkernel design
  - file system and memory manager ran as two separate user processes
  - microkernel has the advantage of being easier to understand and maintain
  - user-process crash does less damage than a kernel
  - disadvantage is extra switching between kernel and user mode but this is okay because X Windows is user mode in contrast to even the GUI being kernel on WIndows
  - MINX 3 (2004) took all this a step further with self-healing and even separated out device drivers as user processes with more programs ported from UNIX to MINIX 3.0

#### Introduction of Linux

- MINIX was educational so many feature requests rejectetd
- Finnish student Linus Torvalds created a full-blown UNIX clone with all features that were initially missing (Linux 0.0.1 1991)
- monolithic, although borrowed ideas from MINIX
- virtual memory added
- used many features of gcc compiler and so was not ANSI standard C; other compilers like LLVM from University of Illinois exist which do not support nonstandard gcc extensions and so kernel would have to be patched to replace the non-ANSI code
- Linux 1.0 in 1994; large UNIX compatibility for many programs to be ported over; 2.0 in 1996
- Linux C lines of code ballooned from 10,000 to 165,000 to 470,000 to 16MM in 2013
- Lawsuit against BSD (4.4) resulted in a delay of FreeBSD which would've increased competition

### Overview of Linux

- for programmers by programmers
- simple (no classes of files for different access as mainframes did)
- principle of least surprise (ls A\* and rm A* should list and remove all files beginning with A)
- apps should do one thing and one hing well
- apps should not waste time or require extra typing (cp instead of copy, command line args instead of one by one form-line inputs)

```hierarchy
  Users | runs programs
---- USER MODE ---
Standard Utility Programs | calls library
Standard Library (POSIX) | calls system interfaces
---- KERNEL MODE ---
Linux OS (manages processes, memory, file system, I/O) | Supremely commands
Hardware (CPU, memory, disks, screens)
```

System calls are made by first putting args in registers, issuing trap instructions to switch from user mode to kernel mode. Trap instructions are assembly code with one procedure per system call. These procedures are callable in C and putts args in the right place before executing trap instruction.

#### GUIs on linux

- GNOME (GNU Network Object Model Environment), KDE (K Desktop Environment)
- Built on top of xlib which interacts with the X Windowing System or X11 server which controls the devices and is responsible for redirecting input
- There is also a display manager which is responsible for displaying the graphical login screen

### Memory Management

### Permission Bits

`chmod` changes the permissions of files. The mode is 3 number (0-7) that corresponds to a binary number representing whether read, write, execute is allowed for each group. The first number is the for the owner, the second number is for the group, and the third number is for others. For quick reference, use 666 for read and write and use 777 to execute as well.

`ls -la` can be can be used to list all files with their metadata

### Sockets

For networking purposes pioneered by BSD.

## Precision Time Protocol (PTP)

- The outcome of using PTP is synchronization (time) of multiple systems that are interconnected down to **nanosecond precision**.
- The case for PTP is that when there are multiple systems responding to multiple clients, a write request and a read request can land on different nodes; often times databases have replicas so a read might hit one of the replicas that hasn't registered the write (violation of **linearizability**).
  - Solution: we want timestamps on the backend and database replicas so that the replica blocks the read until it's own updated timestamp is equal or greater to the read request. The alternative would be to mash queries to the replica until most replicas are in consensus.
  - Implementation: To have precise timestamps for systems where changes can happen in the milliseconds, a time synchronization protocol is needed for nanosecond precision

[IEEE 1588-2019](https://standards.ieee.org/ieee/1588/6825/)

> provides precise synchronization of clocks in packet-based networked systems

## System Resources

### Containers are More than Isolation

Containers aren't just for isolating applications and ensuring "it will run everywhere." Containers can also be used to make it easier to allocate a system's resources.

Suppose we want to limit how much memory an application uses. We want to containerize the application using something like docker and limit the memory using `docker run --memory=1g`

### Mitigating Memory Usage

Suppose an application's memory usage keeps increasing as it runs. What could be the cause of the problem? What happens to the other applications if the system's memory usage is at 99%-100%? What can we do to ensure the application will keep running (e.g. systemd service Restart=always)? What can we do to prolong/delay the issue and doesn't hinder performance (i.e. increasing swap space has noticeable effects but speaking practically what can you do if you in the perspective of being the head of infrastructure)?
