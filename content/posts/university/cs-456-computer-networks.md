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
- Hybrid fiber coax (HFC)
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

### Institutional Networks

As mentioned before, in an institutional network, we have lots of access points in each building, and they all connect to switches which connect to distribution routers (routers in buildings) which connect to core routers which connect to edge routers which connect to at least one ISP.

- [UWaterloo Core Network Statistics](https://ns-info.uwaterloo.ca/netstats/core.php)
- [UWaterloo Building Network Statistics](https://ns-info.uwaterloo.ca/netstats/building.php)

### Router Versus Switches

If two networks use different technologies, we need to use routers, which is a switch with more capabilities.

### Access Networks: Data Center Networks

- high-bandwidth links (10s to 100s Gbps)
- connect hundreds to thousands of servers together, and to internet

### Hosts Send Packets of Data

- packet-switching: application messages is broken into smaller chunks (packets) of length _L_ bits
- transmits packet into access network at transmission rate _R_
- Link transmission rate is the capacity (link bandwidth)
- packet transmission delay = time needed to transmit L-bit packet into link = L (bits) / R (bits per second)

### Physical Media Links

- coaxial cable
  - two concentric copper conductors
  - broadbands (100's Mbps per channel, multiple frequency channels)
- fiber optic cable
  - glass fiber carrying light pulses, each pulse is a bit
  - high-speed operation: high-speed point-to-point (10s-100s Gbps)
  - low error rate: repeaters spaced far part, immune to electromagnetic noise
- wireless radio
  - bands
  -
- radio link types
  - Wireless LAN (WiFi)
  - Bluetooth: cable replacement
  - terrestrial microwave
  - satellite

### The Network Core

- network forwards packets from one router to the next, across links on path from source to destination
- forwarding (switching)
  - move arriving packet from input link to appropriate output link (each router has many output ports). [Example](https://www.cisco.com/c/en/us/products/collateral/switches/catalyst-2960-x-series-switches/datasheet_c78-728232.html)
- Run a routing algorithm/protocol on the routers
  - It will end up deciding what the best output port is for linking
  - creates the forwarding table
    - packet header has an address
    - forwarding table has a mapping of header value to output link

### Packet Switching store-and-forward

- takes L/R seconds to transmit L-bit packet into link at R bits per second
- entire packet must arrive at router before it can be transmitted on next link
- When R2 > R1, the router receives bits at a faster rate than it can handle
  - 3rd packet: `t = 3L/R1 + L/R2`
- When R1 > R2,
  - 3rd packet: `t = L/R1 + 3L/R2`

### Packet Switching queuing

- When R2 > R1, the queue fills because work arrives faster than it can service (transmission rate)
- packets are dropped if buffer is full (congestion)

### Circuit Switching

- end-to-end resources allocated to, researched for "call" between source and destination
- traditional telephone networks
- no sharing
- each link is split into sub-channels that can be used for circuits

### Time Division Multiplexing

Alternatively to FDM where each call is allocated its own band, we can divide time into slots and each call is allocated a periodic slots that can transmit at the wide frequency band and so would get a higher rate

### Network of Networks

Impossible O(N^2) to connect all ISPs to all other ISPs so there are global ISPs that connect to each other global ISPs via an Internet Exchange Point and peering links. Regional ISPs will connect access nets to ISPs. Content provider networks (Google, Microsoft, Netflix) may connect directly to an IXP or beside a global ISP to be close to end users.

[TORIX](https://www.torix.ca/who-we-are/): Toronto Internet Exchange Point

## Chapter 2 Application Layer Protocols

World Wide Web (HTTP), File Transfer (FTP), Electronic Mail (SMTP), Domain Name System (DNS), Socket Programming.

## Chapter 3 Transport Layer Protocols

Design Issues, Connectionless UDP, Principles of Reliable Data Transfer, Connection-oriented Transport TCP, Flow Control, Congestion Control

## Chapter 4 & 5 Network Layer

Routing approaches, routing in the Internet, Internet Protocol, IPv6, tunnelling, router design, control/data plane, SDN.

## Chapter 6 Data Link Layer

Multiple access protocols and LAN's, address resolution protocol, Ethernet.
