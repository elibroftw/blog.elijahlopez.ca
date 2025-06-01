---
title: "The Software Engineering Handbook"
date: 2025-03-05T15:50:15-05:00
draft: true
tags:
  - book
  - programming
summary: TODO
---

> This is stupid. Why would I need to learn how to code.

\- Elijah Lopez in 2013

There is so much to learn about software engineering. The [resources](https://elijahlopez.ca/resources/) page on my website has served its purpose well for
directing new people into the industry, however I need to do a better job of compiling my notes and knowledge of the topic. Past tries (3 in total) over the last 3 years have failed,
due to information overload. I've been writing my blog for many years and I know what works:

- concise
- searchable
- informative
- examples

With that said this will serve a a list of topics for you to bookmark and re-read when you need to accomplish something.

- [Glossary](/posts/software-engineering-handbook/glossary)
- [Chapter 1 - The Computer Environment](/posts/software-engineering-handbook/chapter-1)
- [Chapter 2 - Introduction to Programming](/posts/software-engineering-handbook/chapter-2)
- [Chapter 3 - Version Control System (Git)](/posts/software-engineering-handbook/chapter-3)
- [Chapter 4 - Introduction to Software Projects](/posts/software-engineering-handbook/chapter-4)
- [Chapter 5 - Principles of Software Engineering](/posts/software-engineering-handbook/chapter-5)
- [Chapter 6 - Backend Development](/posts/software-engineering-handbook/chapter-6)
- [Chapter 7- Frontend Development](/posts/software-engineering-handbook/chapter-7)
- [Chapter 8 - Continuous Integration](/posts/software-engineering-handbook/chapter-8)
- [Chapter 9 - Deployment](/posts/software-engineering-handbook/chapter-9)

## Deployment notes

- if you can use AlmaLinux, otherwise Rocky Linux
- NixOS is also good, but need to learn how to deploy something
- Scale up > scale horizontally, because of simplicity and more closer knowledge
- Scaling horizontally is too abstract
- Scale up + 2 servers can serve a million users easily
- Auto healing
- Systemd Timer
- Mailgun

## Networking notes

Let's keep it brief. When you buy a domain, you are buying the right to modify a domain's name servers and its DNS records. These records can store data and point to an IP address depending on the record (A for IPv4, AAAA for IPv6). When launching a web app, we usually point the A record of the public facing domain to the public IP address of our server. This public IP address can thus be scraped. The problem is a bad actor will want to spam your server with bad requests to ensure it can't respond to good requests.

### User-respecting DoS mitigation

- When we care about privacy and the decentralized, what we don't want to do is always run our app proxied behind cloudflare
- We can either use the DDoS protection offered by our VPS (like DigitalOcean or Vultr), or we can setup a proxy domain that will proxy cloudflare requests to another server with an IP address that is only know to us and cloudflare.
  - First we get a reserved IP that our domain points to use when not under DoS
  - When under DoS, update the record to point at the cloudflare proxied domain (e.g. domain-cf.com) which will proxy requests from an IP known only to us and cloudflare
    - Use this IP for sshing to avoid using cloudflare tunnel
    - Keep the TTL low for the A and AAAA records to do this quickly. TTL should be equal to maximum amount of time to tolerate a DoS attack after it has been mitigated.
