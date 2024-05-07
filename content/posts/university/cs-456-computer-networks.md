---
title: "CS 456 Computer Networks"
date: 2024-05-07T08:29:57-04:00
draft: false
tags:
  - university
  - computer-science
---

Make sure to do review question at the end of every chapter.

## Chapter 1 Overall Picture of Computer Networking

Circuit Switching Vs. Packet Switching, Access Networks, Physical Media, Network Delays, Protocol Layering, Internet architecture

What is the internet and what is a protocol?

- Network edge: hosts, access network, physical media
- Network core: packet/circuit switching, internet structure
- Performance: loss, delay, throughput
- Protocol layers, service models
- Security
- HIstory

### Nuts and Bolts View of The Internet

- billions of devices connected to each other
- hosts: end systems (runs network apps at internet's _edge_)
  - bit is the smallest unit
  - throughput is capacity
- packet switches: packet forwarder (routers and switches)
- communication links: bandwidth (fiber, copper, radio, satellite)
- networks: collection of devices, routers, links managed by an organization
  - internet service providers connect different networks
  - regional connectivity, national, and international connectivity

### Internet Services View

- Infrastructure that provides services to applications
  - web, streaming video, teleconferencing, email, games
  - Examples: HTTP, Skype
- Provides programming interface to distribute applications
  - hooks apps to send/receive
  - provides service options (like postal service)

### The Internet

- protocols are everywhere
  - controls sending and receiving of messages
  - e.g. HTTP (Web), streaming video, skype, TCP, IP, WiFi, 4G, Ethernet, bittorrent
- Internet standards
  - RFC: Request for COmments
  - IETF: Internet Engineering Task Force

### What is a Protocol

- Human: what's the time, I have a question
- Network protocols: devices rather than humans (governs internet communications)
- Human: has conversation with someone
- Networks:
  - A-to-B: TCP connection request
  - B-to-A: TCP connection response
  - A-to-B: `GET http://gaia.cs.umass.edu/kurose_ross`
  - B-to-A: `<file>`

### Hosts on the Internet

- network edge:
  - either clients or servers
- access networks, physical media
  - access points (WiFi) connect to a switch (modem?)
  - then the switches connect to routers to form a network
  - then there's a router that connects outside the network
  - wired, wireless communication links

### Access Networks: TV Cable--based Access

- frequency division multiplexing (FDM): different channels transmitted in different frequency bands
  - splitter to split the channels into TV and cable modem
  - channels for video, data (downstream and upstream), and control
  - Physics!
- Hybrid fiber coax (HDC)
  - asymmetric: up to 40Mbps - 1.2Gbps downstream, 30-100 Mbps upstream
- data is with packets with a source and a destination (ip addresses)

### Digital Subscriber Line (DSL)

- On top of telephone network
- Before DSL, it was dial-up modems
- DSL access multiplexer (DSLAM)
- Need a splitter to split the data into Telephone and DSL modem

### Wireless Access Networks

- Wireless local area networks (WLANs)
  - Within or around building
  - 802.11b/g/n (WiFi): 11, 54, 450 mbps
- Wide-area cellular access networks
  - 10mbps
  - 4G, 5G
  - cellular network operator

## Chapter 2 Application Layer Protocols

World Wide Web (HTTP), File Transfer (FTP), Electronic Mail (SMTP), Domain Name System (DNS), Socket Programming.

## Chapter 3 Transport Layer Protocols

Design Issues, Connectionless UDP, Principles of Reliable Data Transfer, Connection-oriented Transport TCP, Flow Control, Congestion Control

## Chapter 4 & 5 Network Layer

Routing approaches, routing in the Internet, Internet Protocol, IPv6, tunnelling, router design, control/data plane, SDN.

## Chapter 6 Data Link Layer

Multiple access protocols and LAN's, address resolution protocol, Ethernet.
