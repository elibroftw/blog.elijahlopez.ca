---
title: "How to Buffer Overflow on 64-Bit Little Endian Machines"
date: 2024-02-06T12:18:51-05:00
draft: true
summary: "This post provides a straightforward guide on buffer overflows on 64-bit little endian machines, aiming to clarify concepts often poorly explained in tutorials. It discusses existing protections (non-executable stack), how to spot vulnerabilities using functions like `strcpy` and `strncpy`, and outlines steps for writing an exploit, including handling little endian byte order, using shell code, and finding the address for code injection with gdb."
---

I'm taking a security course the lesson on buffer overflows referenced "Smashing the Stack" which was for 32-bit and made some broad assumption and spent a lot of time running in circles instead of actually giving details on how to exploit it. So here I am to give a straightforward, no bullshit lesson.

## Protections do Exist

If the goal of the buffer overflow is to execute custom code, well too bad, the stack is usually not executable. To execute custom code on the stack, the program itself has to be compiled with flags that explicitly allows stack execution.

## Spotting Buffer Overflows

How do you spot a buffer overflow? Well we are looking for situations where the memory being written is larger than the destination size. Since the stack grows with lower memory addresses, and buffers grows with higher memory addresses, a buffer overflow, allows overwriting memory above the stack (variables defined before, and most importantly, the return address). The following functions copy the entirety of src and so might make an incorrect assumption that the src size is less than or equal to the buffer.

- strcpy
- strcat
- sprintf
- memcpy

WIth the "n" variants of these functions, the thinking is a bit different. Although the size being copied is limited, we should check that the count is equal to the remaining count in the buffer In other words, check whether this equation holds: `copy count  + length of buffer before copy - buffer size = 0.`

```c
char buffer[1024]
strcpy(buffer, "four");  // buffer length is 4 now

// vulnerable since 1024 is more than the remaining space in the buffer
strncpy(buffer, "user input", 1024);
```

## Writing The exploit

1. On 64-bit systems with little endian, we need to write addresses and code in reverse order.
2. The goal of the buffer overflow is usually to exploit a program that already has root permissions. Shell code will be provided.
3. We need to find the address of where our shell code will be written to. We an use gdb for this.
