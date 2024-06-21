---
title: "I Advise Against Taking CS 489 Software and Systems Security (University of Waterloo)"
date: 2024-04-03T14:49:36-04:00
draft: false
tags:
  - university
  - opinion
  - cybersecurity
  - computer-science
  - review
---

I took CS 489/698 Software and Systems Security this past Winter term (2024) and I have to say, it's in the top 5 courses that have been a waste of time, money, and stress. I do not recommend it. 3/4 Assignments are related to the content but they expect you to learn from google and LLMs to figure out how to solve them, even though the starting directives are not enough.

## Assignment Criticism

In the first assignment, there's a buffer overflow but we were only taught how to do it on a 32-bit system where the vulnerability was in the main method versus the assignment where the vulnerability is in another function and on 64-bit program. ~~Not to mention, that they don't mention during class anything about the gcc options-fstack-protector and -fno-stack-protector and how it's the fault of certain (idk which ones) linux distros [see here](https://stackoverflow.com/a/10713028/7732434).~~

In the second assignment, the assignment tried to be situational, but in my opinion, it would be much more effective if instead of having a bunch of classes on the content, the class itself was situational and we were put in groups to simulate how things go wrong. This would've been much more effective, similar to scenes in Mr. Robot where we see social and technical vulnerabilities being exploited. It would be nice to see an actual device exploited by a USB and/or disc in class rather than just be told that this is an existing potential weakness to be exploited.

In the third assignment, we had to learn about the various fuzzers. The biggest problems with this assignment is that it takes hours to setup the environment (100GB), and we aren't given docs on the various fuzzers. We have to create code with bugs that won't be detected by the fuzzers. The biggest problem is that for one of the fuzzers, it would work locally but not on their test servers which would report character comparisons as a crash...
In the fourth assignment, we are given seccom-bpf sandboxes and are told to make a program that can read and print out a specific file's contents. The only issues was I had no idea that open corresponded to the open_at system call, otherwise I could've done 3/4ths of the assignment.
In class we are only taught that these sandboxes exist, and the piazza post states to use `seccom-tools`. Yeah, I have quizzes and other projects to do, I don't think spending hours just to maintain a high mark in the course is a good enough motivation to sink hours. It's not satisfying and it's a deterioration of my mental health which in my humble opinion should be prioritized over school most of the time.

## Content Criticism

Let's review some content shall we, and compare it to my own experience related to security.

### Firewalls? What are those?

When discussing Operating System Security, you'd think encryption of disk and firewalls would be mentioned, except you'd be wrong. Although not a real criticism, the history of `ssh` isn't mentioned.

The firewall that comes with Ubuntu is `ufw` and the firewall that comes with Red Hate Entreprise variants is `firewalld`. We should be taught how to secure production applications but instead we go through this program and might end up developing startup software that has severe vulnerabilities.

### SQL Injection Mitigation

Although SQL injection is mentioned, the course does not educate people on how to properly mitigate the issue. The only thing given is the %s which is a raw SQL statement and not something we usually do in Python. I highly suggest the course amend their slides so that mitigation's in common programming languages: Rust, C#, Java, and Python are shown.

For reference, one of my group mates in a previous course who works at a $1T+ company committed unsecure code and would fix the SQL injection only in a commit days later.

### Cross Site Scripting Attack (XSS) Mitigation

- XSS (Cross site scripting attack) is mentioned but focuses more on client-side mediation rather than server-side mediation
  - The best example of XSS is someone submitting a script tag in a comment
  - Rather than focus on how to best escape untrusted input, the instructor just says "do very careful checks." This is wrong.
  - The best way to mitigate an XSS is to make sure your whatever you are using to generate the HTML escapes all variables unless they are explicitly marked as "safe". For example in Jinaj2, all values are escaped by default, so if you want to add custom HTML, you need to supply `{{ data | safe }}`.

### Cross Site Request Forgery

One of the most dangerous attacks that can be easily deployed in production is not mentioned. To illustrate how dangerous this attack is, imagine a bank had a form that you can send money to someone. A CSRF vulnerability would allow clicking a button on another website to straight up hijack that request.

By not teaching students about the existence of how CSRF vulnerabilities come to be and how to mitigate (form tokens) them, the school's creating software developers who will create vast vulnerabilities while thinking they are highly aware of common security vulnerabilities. So instead of  developers being humble about the lack of security in their code, they will have large egos that their code can't have vulnerabilities since they got 100% in the security course at the "prestigious" University of Waterloo.

## Final Thoughts

At the end of the day, the course does not prepare us for the real world. The best advice the course can give you is a) choose Rust over C and C++ in side projects and in production projects; b) don't be shy in using a different framework than the norm as genetic diversity does reduce the spread of an exploit.

Lastly, I recommend taking Privacy, Cryptography, Network, and Data Security instead. A much healthier course to take it seems. I've downloaded the slides, so I will study it myself alongside the networks course I'm taking next term.
