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

### Access Networks: TV Cable-based Access

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

### Packet Switching Queuing

- When R2 > R1, the queue fills because work arrives faster than it can service (transmission rate)
- packets are dropped if buffer is full (congestion)

### Circuit Switching

- end-to-end resources allocated to, researched for "call" between source and destination
- traditional telephone networks
- no sharing
- each link is split into sub-channels that can be used for circuits

### Time Division Multiplexing (TDM)

Alternatively to FDM where each call is allocated its own band, we can divide time into slots and each call is allocated a periodic slots that can transmit at the wide frequency band and so would get a higher rate

### Network of Networks

Impossible O(N^2) to connect all ISPs to all other ISPs so there are global ISPs that connect to each other global ISPs via an Internet Exchange Point and peering links. Regional ISPs will connect access nets to ISPs. Content provider networks (Google, Microsoft, Netflix) may connect directly to an IXP or beside a global ISP to be close to end users.

[TORIX](https://www.torix.ca/who-we-are/): Toronto Internet Exchange Point

### Packet Delays and Loss

Packet delay is the sum of four sources

1. Nodal processing
    - Checking bit errors, determining output link (< microsecond)
2. Queueing Delay
    - Waiting at output link
    - Congestion
3. Transmission Delay
    - Time for packet until transmission
4. Propagation

Packets have time-to-live which is a uint defining the max hops. If a router encounters a packet with a TTL of 1, it drops the packet and typically returns an error to the sender. Otherwise it propagates a packet with the TTL minus 1.

Traffic intensity = Transmission Rate = Packet Length * Average Packet Arrival Rate / Link Bandwidth

- Transmission Rate ~= 0: small delay
- Transmission Rate close to 1 but not large: large delay
- Transmission Rate > 1: infinite delay due to more work than servicing

### Real Internet Delays

`traceroute` program

`traceroute` will send sets (probe) of 3 packets with for all i = 1, to a TTL of 64 until the destination is reached. For each i, the packets are dropped by a router at the index i. The router at index i is not necessarily going to be the same for each packet. This program therefore allows inspecting/probing the network path.

Reasons for different paths: routing table changes, load balancing

### Throughput

- bits/time unit
  - instantaneous: any point in a timeslot (what you would show in a software that downloads stuff for the user)
  - average: rate over longer period of time (useful for performance)
- Bottleneck Link
  - Which link is constraining the throughput

### Network Security

- internet was designed for trusted groups in mind, so designers are catching up
- all layers need to be protected
- packet sniffing
  - using wireshark, someone can inspect packets that are broadcasted by making their network card promiscuous (accept all packets instead of the default behaviour dropping ones that were not meant for the device). Especially harmful for unencrypted traffic
  - IP spoofing: false source address can trick server into sending too much information to the real device
  - Denial of Service
    - Overwhelm server with bogus traffic

### Layers Framework

Why layers?

- explicit structure allows identification, relationship of
system’s pieces
- modularization eases maintenance, updating of system

### Protocol layers and reference models

- hosts
- routers
- links of various media
- applications
- protocols
- hardware, software

Example of layers is air travel

- ticket (purchase) &rarr; ticketing service &rarr; ticket (complain)
- baggage (check) &rarr; baggage service &rarr; baggage (claim)
- gates (load) &rarr; gate service &rarr; gate (unload)
- runway takeoff &rarr; runway service &rarr; runway landing
- airplane routing &rarr; routing service &rarr; airplane routing

### Layered Internet Protocol Stack

- application (supporting network applications)
  - HTTP, IMAP, SMTP, DNS
- transport (process-process data transfer)
  - TCP, UDP
- network (routing of packets from source to dest)
  - IP, routing protocols
- link (data transfer between adjacent network elements)
  - Ethernet, 802.11 (WIFI), PPP?
- physical (bits on the wire)

## Chapter 2 Application Layer Protocols

World Wide Web (HTTP), File Transfer (FTP), Electronic Mail (SMTP), Domain Name System (DNS), Socket Programming.

### Client-server Paradigm

- Server
  - always-on host
  - permanent IP address
  - often in data centers, for scaling
- client
  - contact, communicate with server
  - may be intermittently connected
  - may have dynamic IP Addresses
  - do not communicate directly with each other

### Peer-peer Architecture

- no always-on server
- arbitrary end systems directly communicate
- peers request service from other peers, provide service in return to other peers
- self scalability - new peers bring new service capacity as well as new service demands
- peers are intermittently connected and change IP addresses

### Sockets

Sockets are like doors on each of the processes that can send and receive messages relying on the transport infrastructure to deliver messages to socket on receiving process. Sockets can be UDP or TCP and can communicate within the same machine.

### Addressing Processes

- Each host device has unique 32-bit Internet Protocol address
- Since many processes can run on the same host, a host is also used
- 2^16 - 1 port numbers

### Application Layer Protocol

- types of messages (request, response)
- message syntax (fields to delineate)
- message semantics (meaning of field values)
- rules (when and how to do something)
- open protocols (RFCs)
  - Interoperability
  - HTTP, SMTP
- Proprietary protocols
  - Skype, Zoom

### Transport Service Requirements

- data integrity
- throughput
- timing
- security

### TCP vs UDP

- TCP
  - reliable transport between sending and receiving process
  - flow control: sender won't overwhelm receiver
  - congestion control: throttle sender when network overloaded
  - connection-oriented: setup required between client and server processes
  - does not provide: timing, minimum throughput guarantee, security
- UDP
  - unreliable data transfer between sending and receiving process
  - does not provide: reliability, flow control, congestion control, timing, throughput, guarantee, security, or connection setup
  - why does UDP exist?
  - to establish low-latency and loss-tolerating connections between applications on the internet

### TCP Security

- Transport Layer Security (TLS)
  - Encrypted connections
  - data integrity
  - end-point authentication
  - Application layer

### Web and HTTP

- web page consists of objects
- objects: HTML file, JPEG image, Java applet, audio file
- web page contains base HTML-file which includes several
referenced objects, each addressable by a URL

### Hypertext Transfer Protocol (HTTP)

- client: browser that requests, receives, displays
- server:  Web server sends objects in response to requests
- stateless
- RTT (definition): time for a small packet to travel from client to  server and back

Non-Persistent

1. TCP connection opened
2. at most one object sent
over TCP connection
3. TCP connection closed

- downloading multiple objects required multiple connections
- Per object: One RTT for TCP initiation, one RTT for request and return, object/file transmission time
- browsers open parallel TCP connections to fetch objects

Persistent (HTTP 1.1)

1. TCP connection opened to a server
2. multiple objects can be sent over single TCP connection between client, and that server
3. TCP connection closed

- send messages over initial connection
- as little as one RTT, which cuts response time in half

### HTTP Request Message

- ASCII (human-readable format)
- Request line (GET, POST, HEAD commands)
- Fun fact, all ASCII text transmitted must use CR LF for EOL
- CR: carriage return
- LF: line feed

### HTTP Response Message

- Status line (protocol, status code, status phrase)
- header
- data
- 301 Moved Permanently
- 505 HTTP Version Not Supported

### Manual HTTP Request

1. Netcat

```sh
nc -Cv gaia.cs.umass.edu 80
```

2. HTTP GET Request

```sh
GET /kurose_ross/interactive/index.php HTTP/1.1
Host: gaia.cs.umass.edu
# Hit x2 CR
```

### HTTP/2

- Key goal: decreased delay in multi-object HTTP requests
- HTTP 1.1 introduced first-come-first-served which can block small objects behind large objects
- HTTP 2 introduces transmission priority
- divide objects into frames, schedule frames to mitigate head-of-
line blocking

### HTTP/3

- HTTP/2
  - recovery from packet loss still stalls all object transmissions
  - browsers have incentive to open multiple parallel TCP connections to reduce stalling
- HTTP/3
  - adds security, per object error and congestion-control over UDP

### Maintaining State With Cookies

1. Cookie header line of HTTP response message
2. Cookie header line of HTTP request message
3. Cookie file kept on users' host managed by browser
4. backend database at website

Can be as simple as backend creating a unique ID in a database and giving a cookie to the user so that it can identify the user in subsequent requests.

What cookies can be used for :

- authorization
- shopping carts
- recommendations
- user session state (Web e-mail)

Keeping state:

- maintain state at
sender/receiver over multiple
transactions

### Web Caches (Proxy Server)

- server tells cache about object’s allowable caching in response header
  - `Cache-Control: max-age=<seconds>`
- reduces response time for client
- reduce traffic on an institution's access link
- internet dense with caches to enable poor content providers to more effectively deliver content

### Conditional GET

- don’t send object if cache has up-to-date cached version
- specify date of cached copy in HTTP request
  - `If-modified-since: <date>`
- Server
  - `HTTP/1.0 304 Not Modified`

## Chapter 3 Transport Layer Protocols

Design Issues, Connectionless UDP, Principles of Reliable Data Transfer, Connection-oriented Transport TCP, Flow Control, Congestion Control

## Chapter 4 & 5 Network Layer

Routing approaches, routing in the Internet, Internet Protocol, IPv6, tunnelling, router design, control/data plane, SDN.

## Chapter 6 Data Link Layer

Multiple access protocols and LAN's, address resolution protocol, Ethernet.
