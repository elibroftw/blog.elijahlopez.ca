---
title: "CS 456 Computer Networks"
date: 2024-05-07T08:29:57-04:00
draft: false
tags:
  - university
  - computer-science
summary: "Notes from a university course on Computer Networks, covering the OSI model, network core, protocols (HTTP, DNS, TCP, IP), and network performance."
---

## Overview of the Internet

### Open Systems Interconnection

1. [Physical](#physical-media-links)
    - fiber, cable, radio mediums that carry individual bits (smallest unit of data, 1 or 0)
2. [Data Link](#chapter-6-data-link-layer)
    - organizes all the data being transmitted into datagrams (the network-layer packet is referred to as a datagram) and frames and enables node &lrarr; node communication
    - handles error detection and correction
    - Ethernet, 802.11 (WIFI), point-to-point protocol (PPP)?
3. [Network](#chapter-4--5-network-layer)
    - the Internet Protocol (v4 and v6), and routing protocols for transferring packets to hosts
4. [Transport](#chapter-3-transport-layer-protocols)
    - TCP, UDP
5. [Session](#tcp-3-way-handshake)
    - Manages connections between applications
6. [Presentation](#tcp-security)
    - Formats and encrypts data for the application layer
7. [Application](#chapter-2-application-layer-protocols)
    - Network services
    - HTTP, IMAP, SMTP, DNS
    - Firewalls

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

Finding out probability of users transmitting (binomial distributions):

(users choose n) \* p^n * p^(1 - n)

For "at least 2" you can do 1 - P(n=1) - P(n = 0).

### Packet Switching Queuing

- When R2 > R1, the queue fills because work arrives faster than it can service (transmission rate)
- packets are dropped if buffer is full (congestion)

### Circuit Switching

- max users = link speed / required bandwidth
- end-to-end resources allocated to, researched for "call" between source and destination
- traditional telephone networks
- no sharing
- each link is split into sub-channels that can be used for circuits

### Time Division Multiplexing (TDM)

Alternatively to FDM where each call is allocated its own band, we can divide time into slots and each call is allocated a periodic slots that can transmit at the wide frequency band and so would get a higher rate

### Network of Networks

Impossible O(N^2) to connect all ISPs to all other ISPs so there are global ISPs that connect to each other global ISPs via an Internet Exchange Point and peering links. Regional ISPs will connect access nets to ISPs. Content provider networks (Google, Microsoft, Netflix) may connect directly to an IXP or beside a global ISP to be close to end users. Data centers, bypassing higher tier ISPs, more control over user experience, less money for sending traffic into provider networks, avoiding network discrimination.

[TORIX](https://www.torix.ca/who-we-are/): Toronto Internet Exchange Point

### Packet Delays and Loss

Packet delay is the sum of four sources

1. Processing
    - Checking bit errors, determining output link (< microsecond)
2. Queueing
    - Waiting at output link
    - Congestion
3. Transmission
    - Time for packet until it is sent off (transmitted)
4. Propagation
    - Traveling to the next link takes time

Packets have time-to-live which is a uint defining the max hops. If a router encounters a packet with a TTL of 1, it drops the packet and typically returns an error to the sender. Otherwise it propagates a packet with the TTL minus 1.

Traffic intensity (I) = Transmission Rate = Packet Length * Average Packet Arrival Rate / Link Bandwidth = `La/R` where L is packet length and R is transmission speed.

Queueing Delay = I \* L / R(1 - I)

- Transmission Rate ~= 0: small delay
- Transmission Rate close to 1 but not larger: large delay
- Transmission Rate > 1: infinite delay due to more work than servicing

### Real Internet Delays

`traceroute` program

`traceroute` will send sets (probe) of 3 packets with for all i = 1, to a TTL of 64 until the destination is reached. For each i, the packets are dropped by a router at the index i. The router at index i is not necessarily going to be the same for each packet. This program therefore allows inspecting/probing the network path.

Reasons for different paths: routing table changes, load balancing

### Throughput

- bits/time unit
  - instantaneous: any point in a time slot (what you would show in a software that downloads stuff for the user)
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
- Ports are used to differentiate **processes** running on the same host
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

Classes of services: reliability (TCP), throughput (not guaranteed), delivery time (not guaranteed), and confidentiality via encryption (not guaranteed).

- TCP
  - reliable transport between sending and receiving process
  - flow control: sender won't overwhelm receiver
  - congestion control: throttle sender when network overloaded
  - connection-oriented: setup required between client and server processes
  - does not provide: timing, minimum throughput guarantee, security
- UDP
  - unreliable data transfer between sending and receiving process
  - does not provide: reliability, flow control, congestion control, timing, throughput, guarantee, security, or connection setup
- Why does UDP exist?
  - to establish low-latency and loss-tolerating connections between applications on the internet
  - there is no read (acknowledgement) receipt and no need for a TCP connection setup

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
- RTT: _Round Trip Time_: time for a small packet to travel from client to server and back

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
- as little as one RTT to request all the referenced objects, which cuts response time in half
- requires the content length header so that the client can segregate all the incoming data into their respective responses. For example, if the server is sending 3 responses, the client will use the content length to know when the second, third, and fourth responses start

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
- could be just for a session

### Web Caches (Proxy Server)

- why don't we keep the query result somewhere closer to us to reuse
- server tells cache about object’s allowable caching in response header
  - `Cache-Control: max-age=<seconds>`
  - `Cache-Control: no-cache`
- reduces response time for client
- reduce traffic on an institution's access link
- internet dense with caches to enable poor content providers to more effectively deliver content
- First configure your machine and browser configured with a proxy server

<details><summary>Caching example</summary>

- access link rate: 1.54Mbps
- RTT from institutional router to server: 2 seconds
- web object size: 100K bits
- Average request rate: 15/sec
  - Average data rate to browsers: 1.50Mbps

Performance

- access link utilization = 0.97 (1.50 / 1.54)
- LAN utilization = 0.0015
- End-end delay = Internet delay + access link delay + LAN delay = 2 sec + mins + usecs
- Another way to think about end-end delay: time to gather bits for a packet, time to transmit the packet, and time to propagate the packet, plus the time to process and queue

Options to improve

1. Buy faster access link &rarr; faster access link rate &rarr; lower access link utilization
2. Install a web cache to handle redundant requests
    - Assume a hit rate of 0.4 &rarr; 0.6 \* 1.5 = 0.9 Mbps rate to browsers
    - Access rate utilization = 0.9 / 1.54 = 0.58
    - Average end-end- delay = 0.6 \* (delay from origin) + 0.4 \* (delay when satisfied at cache)
    - LAN utilization &rarr;

</details>

### Conditional GET

- don’t send object if cache has up-to-date cached version
- specify date of cached copy in HTTP request
  - Header: `If-modified-since: <date>`
- Server
  - `HTTP/1.0 304 Not Modified`
- Implementation notes
  - If the backend is being updated, set default date of the database schema to the day after the feature was rolled out (in debugging, test both future date and older date). When a client requests a route/object (with authorization), if the if-modified-since: date is definite
  - frontend: simply keep track in persistent storage (local storage, IndexDB, preferred, shared preferences, DataStore)

### E-mail

- user agents
- mail servers
- simple mail transfer protocol: SMTP

User Agent

SMTP RFC (5321)

TCP three phases:

- handshaking (3 RTTs)
- transfer of messages
- closure

SMTP Origin

- Check sender
- Check recipient
- Send DATA ending with "." on a line by itself
- Message added to queue
- After sending all the mail, send QUIT to close TCP connection
- One RTT for each of these stages, but since the connection is persistent, we don't expense double the RTT

IMAP (Internet Mail Access Protocol)

- Internet Mail Access Protocol [RFC 3501]: messages stored on server
- IMAP provides retrieval, deletion, folders of stored messages on server
- HTTP: web-based interfaces on top of SMTP and IMAP (or POP)

### Domain Name System

- distributed database implemented in hierarchy of many name servers
- application-layer protocol: hosts, DNS servers communicate to resolve names
- services
  - hostname to IP address translation
  - host aliasing
    - canonical, alias names
  - mail server aliasing
  - load distribution
- don't want to centralize
  - single point of failure
  - traffic volume (Billions to Trillions a day)
- more reads than writes
- performance matters
- physically decentralized
- root DNS servers (13 logical servers, ICANN)
  - .com DNS servers
    - individual website.com DNS servers (e.g. \www.amazon.com)

### Top Level Domain

- responsible for .com, .org, .net, .edu, .aero, .jobs, .museums, and all top-level country domains, e.g.: .cn, .uk, .fr, .ca, .jp
- Network Solutions: authoritative registry for .com, .net TLD
- Educause: .edu TLD

### Authoritative DNS Servers

- organization’s own DNS server provided by self or service provider

### Local DNS Server

- local name servers
- return from cache which could be out of date
- Use a TTL to expire cache entires
  - If the hostname IP changes, need all TTLs to expire

### DNS Records

- type=CNAME
  - name to name
  - name is alias for the canonical name
  - value is the canonical name
  - `www.ibm.com` &rarr; `severeast.backup2.ibm.com`
  - similar to symbolic links and shortcuts
- type=A
  - name to IP
  - name is hostname, value is IP address
- type=NS
  - name to authoritative name server which indicates the other DNS records
  - name is the domain, value is hostname of the authoritative name server for the domain
- type=MX
  - value is the hostname of the SMTP name server associated with the current domain NAME

### DNS Protocol Messages

- Identification
  - 16 bit number for query and in reply
- Flags
  - query or reply
  - recursion desired?
  - recursion available?
  - reply is authoritative

### DNS Registar

- register domain with DNS registrar (Network Solutions for .com)
  - provide names, IP addresses of authoritative name server (primary, and secondary)
  - registar inserts NS, A, resource records (RR) into the .com TLD server

### DNS Security

- DDOS
  - root servers can handle it
  - more dangerous for TLD servers
- Spoofing attacks
  - intercept DNS queries, return bogus reply
  - RFC 4033 (authentication services)

### Peer-to-peer (P2P) architecture

- self scalability
- no always-on server
- complex management
  - not attractive to develop, but would want to pay for it to be developed
- time to distribute in server to many clients is the max of either the server upload divided by the number of downloads or the download speeds of the clients
- With P2P, the server uploads at least one, but takes advantage of each client's upload speed
  - D >= max{ F/us, F/dmin, NF/(us+ sum u)}
  - server one upload, slowest client download, all clients helping server with uploading

### BitTorrent

- 256Kb chunks
- _tracker_: tracks peers participating in swarm
- _swarm_: group of peers exchanging chunks of a file
- _churn_: peers may come and go
- periodically need to ask each peer for list of chunks that they have
- request missing chunks from peers, rarest first!
- send chunks to top 4 who have sending her chunks at highest rate
- re-evaluate top 4 every 10 seconds
- every 30 seconds, randomly select another peer to send chunks to (unchoke)

### Streaming Video (DASH)

- Dynamic, Adaptive Streaming over HTTP
- manifest file: provides URLs for different chunks
- divide video into multiple chunks
- each chunk encoded at multiple different rates
- different rate encodings stored in different files
- files replicated in various CDN nodes

The client needs to

- periodically estimate server-to-client bandwidth
- consulting manifest, requests one chunk at a time
- chooses maximum coding rate sustainable given current bandwidth
- can choose different coding rates at different points in time
- when to request chunk (avoid buffer overflow), what encoding rate, where to request chunk (which server to request from)
- streaming video = encoding + DASH + playout buffer

### Content Distribution Network (CDNs)

- challenge: streaming content to hundreds of simultaneous users
- option 1: mega server
  - single point of failure
  - possible network congestion
- option 2: store copies at multiple geographically distributed sites (CDN)
  - enter deep: push CDN servers into many access networks close to users (Akamai has 240,000 servers deployed in > 120 countries in 2015)
  - bring home: larger clusters near access nets

### Socket Programming

- UDP: no connection nor handshake (may be lost or received out-of-order)
- TCP: server must be running first

## Chapter 3 Transport Layer Protocols

Design Issues, Connectionless UDP, Principles of Reliable Data Transfer, Connection-oriented Transport TCP, Flow Control, Congestion Control

### Transport Services and Protocols

- provide logical communication between application processes running on different hosts
- sender breaks application messages into segments passed to network layer
- receiver reassembles segments into messages, passes to application layer

> 12 kids in Ann's house sending letter to 12 kids in Bill's house, hosts = houses, processes = kids, app messages = letters in envelopes

The network layer connects hosts, the transport layer connects processes

### Principal Internet Transport Protocols

- TCP: Transmission Control Protocol
  - reliable, congestion control, flow control, connection setup
- UDP: User Datagram Protocol
  - unreliable, unordered delivery, no-frills extension of "best-effort" IP
- Datagram: alternative name for packet (packet term should not be used in the first place)

### Multiplexing/demultiplexing

- Connectionless
  - Single direction transfers
  - Each datagram has an IP, and the transport-layer segment it carries contains the source and destination port number
    - Implication 1: System API for sockets requires a local port number
    - Implication 2: System API for sending datagrams must have both destination IP and port #
    - Same destination and port # corresponds to same socket at the receiver host
- Connection-oriented demultiplexing
  - TCP socket has a 4-tuple: (source IP, source port, dest IP, dest port)
  - demux: receiver uses all four values to direct segment to appropriate socket (even with the same port, the segment can be directed to a different socket)
  - Each socket can be associated with different connecting client

### Connectionless Transport

- UDP no handshaking; RFC 768
- UDP each segment is handled independently
- No connection establishment (less delays)
  - SImple: no connection state at sender, receiver
  - Small header size
  - No congestion control (as fast as desired and works in congestion)
    - sender not throttled
- Use cases
  - Streaming/Multi-media (loss tolerant, rate sensitive)
  - DNS, SNMP, HTTP/3
- Checksum
  - Detect errors in transmitted segment
  - Sender treats UDP as 16-bit integer
  - Checksum: summation
  - Receiver: compute checksum
  - Even if cheksum is 100%, it is still possible for a coincidental checksum bit error
  - The checksum can remain the same even if a bit is changed in two different integers

### Reliable Data Transfer

- Let us invent the Reliable Data Transfer protocol (rdt)
- Unidirectional data flow: finite state machines to specify sender, receiver
- Handling errors
  - Wait for receiver to send the ACK before sending another packet
  - Add acknowledgements: (ACKs) which explicitly tells sender that packet received is OK
  - Add negative acknowledgements (NAKs) which explicitly tells sender that packet received had errors
  - Sender can retransmit on receiving a NAK
  - To deal with corrupted acknowledgements, sender will use sequence numbers to the packet so that the receiver can discard duplicates
- To eliminate NAK, receiver sends ACK for last pkt received OK (including sequence number), so if there is a duplicate ACK, retransmit current pkt
- To deal with packet loss (data or ACKs), we need a reasonable time for the ACK
  - Retransmit if ACK not received within a countdown, duplicate packets are handled appropriately anyways
- Performance
  - t =  RTT + L / R (transmission)
  - utilization of sender busy sending = (L / R) / (RTT + L / R)

### Go-Back-N

Sender:

Pipelining: send multiple, "in-flight", yet-to-be acknowledged packets which increases utilization by 3x

Sender sends a window up to N, cumulative ACKs: send ACKs of all packets inclusive up to N, move window forward to begin at n+1. Use a timeout(n) to retransmit packet n and higher in the window

Receiver:

Send ACK of **highest in-order** received sequence #. Remember only rcv_base. When receiving out-of-order packet, can either discard of buffer (implementation decision). re-ACK the packet with highest sequence number.

### Selective Repeat

Another pipelining protocol. Receiver individually acknowledges all correctly packets (regardless of order). Sender maintains timer for each unACKed packet. Sender window, N consecutive sequence #s.

Want to avoid resending packets that were sent properly.

Problem: if the ACK is not received of the first packet, then the sender will retransmit packet0, but the receiver is expecting the next packet0 not the previous packet0.

Solution:

- Window size >= max sequence number / 2.
- Sequence numbers need to cover at least two window sizes.

### TCP

- reliable and in-order byte stream
- full duplex data
  - bi-directional on same connection
  - maximum segment size
- Uses go-back-N (cumulative ACKs) protocol with pipelining
- full duplex data, connection-oriented
  - handshaking
- Usually with 500ms ACK delay for the first segment
- ACK is for the next expected packet number

### TCP Segment Structure

- Other than source port and destination port,
- sequence number
- acknowledgement number
  - the next sequence number to expect (this is an ACK?)
- flow control (receive window, number of bytes receiver willing to accept)
- congestion notification (C, E)

### TCP Sequence Numbers

Q: How receiver handles out-of- order segments?

A: TCP spec doesn’t say; up to implementor

TCP timeout needs to be longer than the RTT, but RTT varies. You can estimate RTT by using a SampleRTT (ignore retransmissions). Average several recent measurements.

Exponential weighted moving average, with alpha = 0.125.

(1 - a) EstimatedRTT + a(SampleRTT)

Timeout interval = Estimated RTT + 4 * DevRTT

DevRTT: EWMA of SampleRTT deviation from EstimatedRTT

DevRTT = (1 - Beta) *\ DevRTT + Beta \*  | Sample RTT - EstimatedRTT |

### TCP ACK Generation

- First segment will not be ACKed until 500ms for next segment
- If a second segment is sent, ACK is sent immediately, to avoid overhead
- If there's a timeout, the sender resends the first packet, but the receiver sends the **ACK of the highest one**
  - Implication: sender does not retransmit for "lost" ACKs

### TCP Fast Retransmit

Instead of waiting for the timer to wait-out, a three duplicate ACKs for an earlier segment will trigger retransmission

### TCP 3-way handshake

- before exchanging data
- need to agree on a connection parameters (starting sequence numbers)

1. Client listens on socket, chooses init sequence number x, send `SYN` message (synchronize the initial sequence number)
2. Server chooses init sequence number y, `SYNACK`
3. Client sends an ACK for the SYNACK(x) which indicated that the server is alive

Closing the connection

1. Client sends `FIN` bit=1, seq = x
2. Server sends `FINACK`
3. Server sends `FIN` bit
4. Client sends ACK
5. Client waits for 2 * max segment lifetime before closing the socket

### TCP Flow Control

- Delivery is faster than the application layer reads from the socket buffer
- In the TCP packet sent back to the sender, add flow control to the header of the TCP segment
- `rwnd` field. RcvBuffer size set via socket options (default is 4096)
- sender limits amount of unACKed data to `rwnd`

### TCP Congestion Control

- high delay (queueing delays)
- packet loss (buffer overflow)

Causes

- premature timeout &rarr; retransmission
- multi-hop paths, some routers get more traffic through them

Costs

- additional work
- lower maximum throughput

Control

- Routers provide direct feedback when flow passes through congest router
- TCP ECN, ATM, DECbit protocols

### Congestion Control via AIMD

- AI/MD
- _Additive Increase_
  - increase `cwnd` (congestion window) by 1 packet (increase data sent by the maximum segment size) on every RTT until loss is detected
- _Multiplicative Decrease_
  - cut sending rate in half at each loss event (e.g. triple duplicate ACK)
  - sawtooth behaviour probing for bandwidth
  - cut to 1 MSS (maximum segment size) when loss detected by timeout

### Congestion Information via Network-Assisted

Two bits in the TCP header indicating congestion (set by network operator at 80-85%)

### Net Neutrality

- multimedia apps often do not use TCP
- there is no internet police policing use of congestion control
- web browsers and 9 existing connections
  - we want R / 2 instead of R / 10

### TCP CUBIC

- Better way to probe than AIMD for usable bandwidth?
- K: point in time when TCP window size will reach W max
- K itself is tuneable
- Increase W (sending rate) as a function of the cube of the distance between current time and K
- Default in Linux

### QUIC: Quick UDP Internet Connections

- Application-layer protocol on top of UDP
- Deployed on many Google servers and apps
- Increase performance of HTTP
- Combine TCP and TLS functionality into QUIC and combine with HTTP/2 slim to create HTTP 3
- error and congestion control
- streams parallel, no HOL (head-of-line) blocking

> The most important difference in QUIC compared to HTTP/2 is that it's UDP-based, with built-in encryption, and more performant. The aim of the protocol is to thwart TCP's head-of-line blocking and higher latency. QUIC also allows multiplexing several application streams via a single connection.

### Head-of-line Blocking

If the head packet is lost, then all subsequent packets are blocked until the first packet in the sequence has been received. This is applicable to TCP and HTTP/2 (i.e. the streams). The subsequent packets are blocked because TCP ensures **in-order** delivery via sequence numbers and acknowledgements.

## Chapter 4 & 5 Network Layer

Routing approaches, routing in the Internet, Internet Protocol, IPv6, tunnelling, router design, control/data plane, SDN.

### Network-layer Services

- transport from sender to receiver
- sender
  - datagrams passed to link layer
- receiver
  - segments to transport layer protocol
- network layer implemented in every internet device

### Data Plane

Packet forwarding

### IPv4 Datagram

- Version (4-bits, v4 or v6), Header length, Type of service (e.g. FTP), datagram length
- 16-bit ID, Flags, 13-bit Fragmentation offset
  - Networks links have MTU (maximum transmission unit), so a large IP datagram is fragmented and put back together.
- TTL, Upper-layer protocol, header checksum
- 32-bit source
- 32-bit destination
- options
- data

IPv4 is 32-bit so its address space was quickly used up.

A datagram with 4000 bytes with an MTU of 1500 bytes. ID of all three fragmented datagram will be the same, and the fragment flag will be set for all but the last one. The offset field exists since there are headers of each of the smaller datagrams. 1480 bytes in data field. Therefore, offset = 1480/8. Offset is based on 8 bytes and is interpreted as how many bytes were sent in the other datagram. If datagrams are received out of order, can easily figure out what was missing.

- datagram #1: offset = 0, fragmentation flag
- datagram #2: offset = 1480/8, fragmentation flag
- datagram #3: offset = 2960/8, no fragmentation flag

### IP Addresses

- 192.168.2.0/24
- Each decimal number separated by decimal corresponds to 8 bits
- Therefore, the slash-24 corresponds to the rightmost 24 bits, or the rightmost 3 decimal numbers



### NAT

- Network Address Translation
- Addresses IP address allocation (pun!)
- Many home networks with same address space (say 10.0.0.0/24) for private network usage
- A NAT-enabled router has a single IP address which appears as a device to the outside world
- The router gets its IP address from the ISP's DHCP server!
- The router takes any connection which uses a device's random port and assigns it a 16-bit port that the router finds in its NAT table of size 60,000
- Port-forwarding takes care of home servers
- P2P can leverage NAT traversal for when all nodes are NAT enabled (NAT = hard to accept incoming connections)
- IPv6 does not need NAT as there are enough unique addresses for all devices

### IPv6 Datagram

- addressing expanded to 128-bits (every grain of sand on the planet) from 32-bits
- before unicast and multicast addresses.
- Now: anycast address, which is one from a group of hosts
- 40-byte header
- TOS swapped out for traffic class
- Flow label: request special handling of certain types of datagrams (e.g. audio or video)
- Next header: replaces protocol field (TCP or UDP)
- Hop limit: same functionality as the TTL in IPv4
- No fragmentation/reassembly by intermediate routers. Source and Receivers are responsible. Routers will return "Packet Too Big" instead.
- No header checksum,
- No options (use next header instead)

For the transition, tunneling (protocol 41, RFC 4213) is used (IPv6 datagram inside IPv4 data field).

### OpenFlow Match and Action

- Match
  - Physical (Ingress port)
  - Link (MAC, Ethernet, Virtual LAN)
  - Network (IPs, TOS, Protocol)
  - Transport (TCP/UDP ports)
- Action
  - forward to physical port or broadcast
  - drop
  - modify-field (packet header fields except IP Protocol field)

### Control Plane

- whatever is configuring the router is in the control plane
- per-router control plane: routing algorithm runs in each router
- Software-defined networking: remote controller
  - Every router connected to remote controller server which will install forwarding tables in routers

### Network Service Model

### Router Architecture

- input ports
- output ports
- high-speed switching fabric
- processor
  - need to route in milliseconds
  - forwards data plane (nanosecond frame)

### Input Port Functions

1. Consult lookup table
2. Queue if switch fabric too slow
3. Head-of-the-line blocking can occur if switch fabric is busy with the port another input packet wants to go to (the packet afterwards wants to go to a currently free port)

### Longest Prefix Matching

- when looking at the forwarding table given a destination address, use longest address prefix that matches destination address
- 1M routing table in Ternary Content Addressable Memories (TCAM)

### Output Port Queuing

- switch fabric
- how much buffering?
  - tail drop: drop arriving packets
  - priority: drop/remove on priority basis

### Packet Scheduling

- first come, first served
- priority
- round robin
- weighted fair queueing (WFQ)
  - each class has a weight and each cycle is divided by the weights
  - weight x is 2, y is 1, and z is 1 then two packets from x, one form y, and one form z
  - minimum bandwidth guarantee (per-traffic-class)

### Subnets

- "Network mask"
- set of interfaces that can physically reach each other without passing through an intervening router
- IP addresses have structure
  - subnet part
  - host part
- detach each interface from its host or router, creating islands of isolated networks
- each isolated network is called a subnet
  - subnet mask: /24 (high-order 24 bits: subnet part of the IP address)
  - even links connecting two routers is a subnet
  - one way is to hide the routers and see the link groups
  - another way is to take the unique 24-bit high-order IP addresses

Consider a router that interconnects three subnets: Subnet 1, Subnet 2, and
Subnet 3. Suppose all of the interfaces in each of these three subnets are
required to have the prefix 223.1.17.0/24. Also suppose that Subnet 1 is
required to support at least 60 interfaces, Subnet 2 is to support at least 90
interfaces, and Subnet 3 is to support at least 12 interfaces. Which three
network addresses (of the form a.b.c.d/x) satisfy these constraints?

- Subnet1: 223.1.17.0/26,
- Subnet2: 223.1.17.128/25,
- Subnet3: 223.1.17.64/28

#### Classless Interdomain Routing

- Cider / CIDR
- Can get something like 200.23.16.0/23
- System admin sets IP addresses of each host
- DHCP: Dynamic Host Configuration Protocol
  - plug-and-play to set IP addresses
  - can renew addresses

### DHCP

- host broadcasts DHCP discover msg (optional)
- DHCP server responds with DHCP offer msg (optional)
- host requests IP address: DHCP request msg
  - broadcast IP
  - everyone in the network receives the message, but only server is configured to respond to the message
- DHCP server sends address: DHCP ack msg
  - Contains IP, subnet mask, DNS server IP, default gateway
- Steps
  - broadcast IP
  - DHCP server offers an IP address
  - Client tells DHCP server that it wants to use that IP address
  - DHCP acknowledges
  - IP has lifetime

### Generalized Forwarding

- subheader matching,
- action: forwarding/drop/modify
- flow table abstraction
  - priority
  - counters

### Routing Algorithms

- Link-State Routing Protocol
  - global knowledge about the network
  - Dijkstra's algorithm
  - Least-cost path from one node to all other nodes
  - For k iterations, there are k nodes with known least-cost paths
  - O(n^2) runtime complexity
- Bellman-Ford
- Distance-vector
  - wait, recompute (start at 1 for adjacent nodes), notify (current internal mapping)
    - Convergence: two furthest nodes (t = largest number of hops)
    - Link cost changes
      - recalculate local DV, notify neighbours
      - bad news travels slow
      - if there is an update that makes a link really bad, the nodes will keep relaying information to another updating by 1 each time till it's done
      - to avoid this, we can use "poisoned reverse" and "split horizon"
      - _poisoned reverse_: accept higher value (error message)
      - _split horizon_: if the predecessor sends an update, don't send back an update. Let timeout expiry fix the cost

Example of DV.  C - A  - B. In first iteration, we figure out the distance and we notify. C and B update their mappings, so notify a second time, and be done.

### Routing Scaling

- administration Autonomous System routing
- Tier-1 ISPs either have one or multiple
- AS numbers assigned by ICANN
- intra-AS routing
- RIP: Routing INformation Protocol (RFC 1723)
  - Classic DV
- EIGRP: Enhanced Interior Gateway Routing Protocol
  - Cisco-proprietary for decades (2013 open, RFC 7868)
- OSPF: Open Shortest Path First (RFC 2328)

### eBGP, iBGP

- Route between AS (inter-AS routing protocol)
- Advertise that a subnet exist to all routers
- Determine best route to a _prefix_ (e.g. 138.16.68/22)
- All ASs run BGP for inter-AS routing
- External Border Gateway Protocol (two ASs)
- Internal Border Gateway Protocol (one AS)
- BGP session
  - semi-permanent TCP connection
- AS-PATH: list of ASes prefix has passed
- NEXT-HOP: internal-AS router to next-hop AS

### Software Defined Networking

- Why a logically centralized control plane?
- table-forwarding to routers
- OpenFlow: table-based switch control
  - Many header field to match
  - VLAN: Virtual LAN
- SDN Controller: state management, communications
- _packet-in_: transfer packet to controller
- _flow-removed_: flow table entry deleted at Switch
- _port-status_: inform controller of a change on a port
- _modify-state_: modify entries in switch flow table
- _read-state_: stats

### ICMP: Internet Control Message Protocol

- RFC 792
- network level information
- hosts and routers
- unreachable (1) host, (2) network, (3) port, (4) protocol
- echo request/reply (ping)
- typically used for errors

```icmp
Echo reply (to ping), type 0, code 0
Destination network unreachable, type 3 code 0
Destination host unreachable, type 3, code 1.
Source quench (congestion control), type 4 code 0.
```

## Chapter 6 Data Link Layer

Multiple access protocols and LAN's, address resolution protocol, Ethernet.

### Where is it Implemented

- on every host
- inside network interface cards (NICs) or a chip, attached to systems buses

### Link-Layer Protocol

- Layer 2
- A node is a device running such protocols
- Examples of nodes: hosts, routers, switches, and WiFi access points

### What is a Link?

The communication channels that connect adjacent nodes along the communication path

### Link Layer Frame

Transmitting nodes encapsulate datagrams in a _link-layer frame_. These frames are transmitted into links.
The datagram is a person in a transportation vehicle (e.g. train), and the links are the rails.

### Error Detection via Parity Checks

- Single bit parity: even number of 1s
  - Fails to catch even number of bit errors
- Two-dimensional bit parity
  - Divide total bits in data into i rows and j columns
  - Parity bit on the row and column
  - Detect and correct single bit errors on the row and column
  - if a bit is flipped, both the row and column parities will report an error, in a coordinate form

### Error Detection via Checksum

- total bits are a sequence of k-bit integers
- sum the integers for the error-detection bits
- internet checksum: 16-bit integers
- check: take 1s complement of the sum of data including checksum and expect 0
- TCP & UDP: one checksum for entire packet
- IP: checksum for header
- Transport layer is software based so we want it to be quick

### Cyclic Redundancy Check (CRC)

- Sender and receiver agree on r + 1 bit pattern (generator) that should be able to divide the data bits plus r additional bits (binary division)
- bit pattern: DR (d + r bits)
- R = remainder (D \* 2^r / G)
- Error detection guaranteed for fewer than r + 1 bit errors
- link-layer
- dedicated hardware
- CRC codes or polynomial codes

### Multiple Access Protocols

There are point-to-point links (single sender, single receiver) and broadcast links (multiple sending and receiving nodes all connected to a single shared broadcast channel implying that every node gets every broadcast).

- point-to-point links
  - point-to-point protocol (PPP)
  - high-level data link control (HDLC)
- broadcast links
  - when any one node transmits a frame, the channel broadcasts the frame and each of the other nodes receives a copy
  - Ethernet or WiFi (wireless LAN), 4G/5G
  - **multiple access problem**
  - collision: a node can't make the two or more tangled frames it received due to two or more nodes transmitting simultaneously
    - data loss, wasted broadcast bandwidth
  - four decades of academic research on multiple access protocols have been done
- more info
  - distributed algorithm
  - channel sharing info is shared on the channel itself

Three Categories of multiple access protocols

- channel partitioning protocols
- random access protocols
- taking-turns protocols

### Multiple Access Protocol Desirable Characteristics

For a broadcast channel of rate R bits per second,

1. When only one node has data to send, that node has a throughput of R bps.
2. When M nodes have data to send, each of these nodes has a throughput of R/M
bps. This need not necessarily imply that each of the M nodes always has an
instantaneous rate of R/M, but rather that each node should have an average
transmission rate of R/M over some suitably defined interval of time.
3. The protocol is decentralized; that is, there is no master node that represents a
single point of failure for the network.
4. The protocol is simple, so that it is inexpensive to implement.

### Channel Partitioning Protocols Protocols

- TDMA: Time Division Multiple Access
  - divides time into time frames and further divides each time frame into N time slots
  - slot sizes are chosen to fit a single packet
  - rounds, fixed length slot per station in each round
  - unused slots are idle
  - drawback 1: node is limited to R/N even if only broadcaster
  - drawback 2: node has to wait for its turn again even if only broadcaster
- FDMA: Frequency Division Multiple Access
  - Frequency bands instead of time slots
  - Same drawback of limited speed
- CDMA: Code Division Multiple Access
  - Encode data bits based on unique code for each node which allows receivers to work with collisions
  - Anti-jamming

### Random Access Protocols

- Allows for full rate of transmission when node's are given access
- Retransmit on collision with independently chosen random delay

- Slotted ALOHA
  - fixed size (L bits) frames
  - divide time into fixed slots of size L/R seconds (enough time to transmit one frame)
  - clocks synced across nodes
  - transmit only at start of slots
  - since transmission speed is the same, all nodes would detect the collision
  - when colliding, retransmit with probability p until success
    - if there was no probability, then collisions would persist
  - max efficiency of 1/e = .37
- Pure ALOHA (original from Abramson 1970)
  - no time slots, no clock sync, fully decentralized
  - if collision: retransmit with probability p or wait for frame time
  - else: wait for frame transmission time before transmitting again
  - max efficiency of 1/2e = 18% efficiency (higher collision probability)
- CSMA (Carrier Sense Multiple Access)
  - Listen first, don't interrupt
    - idle: transmit entire frame
    - busy: defer
    - **collision occurs due to propagation delay** (time for datagram to travel the link)
      - on collision, entire packet **transmission** time wasted
      - p = function of distance + propagation delay
- CSMA/CD: with collision detection
  - listen while transmitting, abort on detection
  - we want an interval that is short when the number of colliding nodes is small, and long when the number of colliding nodes is large.
  - binary (exponential) backoff on aborts
    - wait `K \* time to transmit 512 bits`, where K is chosen from 0 to 2^n -1 where n is the number of collisions
  - detect fast and abort transmissions to reduce channel wastage
  - easy for ethernet, hard for wireless

Questions

In CSMA/CD, after the fifth collision of the same frame, what is the probability that a node chooses K = 4? The result K = 4 corresponds to a backoff delay of how many seconds on a 10 Mbps Ethernet?

Probability = 1 / 2^4 = 1/32. Delay = 4 \* (512 / 10_000_000 (M = 1e6) \* 1_000_000) microseconds (1e6)

### Taking-Turns Protocols

- polling protocol
  - master node required, which is a single point of failure
  - master node polls each of the nodes in round-robin
  - master node can tell if node is done by detecting the lack of a "signal" on the channel
- token-passing protocol
  - control token passed from one node to the other
  - decentralized, but still has a single point of failure

### Switched Local Networks

- ethernet protocol
- switches don't know shit about the network layer
- switches use the receiver MAC address in the packet header to figure out where to send the frame, otherwise all nodes get it
- if a node wants to broadcast, it will send to MAC address FF-FF-FF-FF-FF-FF (48 1s)

### MAC Addresses

- aka: link-layer address; LAN address; physical address
- each frame has a unique MAC (Multiple Access Channel) address for source
- MAC needed to get assigned an IP address by the DHCP server (probably bundled with the router in home networks)
- 48-bit MAC address (hardware or random software)
- local unique 32-bit IP address
- IEEE manages the MAC address space so that manufacturers do not conflict
- manufacturers purchase MAC address space

### ARP in Action

- Address Resolution Protocol
- Determining corresponding MAC address of an IP address
- Use if a node doesn't have a MAC address in its _ARP table_
- Off the subnet:
  - Need to send the frame to the router first via MAC address (datagram still destined to receiver's IP address)
  - The router will take care of modifying the MAC destination header via its routing table

### Ethernet

- dominant LAN tech
- single chip
- bus: all nodes in same collision domain (interconnected cord)
- switched: active link-layer 2 switch in center
- frame
  - preamble, destination addr, source addr, type, data/payload, CRC
  - preamble is used to sync receiver and sender clock rates
  - ethernet type: higher layer protocol (e.g. IP, but could be others)
- relies on higher layers to figure out reliability
- no connection
- MAC protocol: unslotted CSMA/CD with binary backoff
- Many standards, different physical layer media (fiber, cable), speeds, but common MAC protocol and frame format

### Ethernet Switch

- link-layer switch
- improvement over hubs (which is how ethernet collisions could occur before)
- no collisions, full duplex, limits collision domains to each link
  - cannot send multiple to one without collisions
- store-and-forward Ethernet frames
- examine incoming frame's MAC address, selectively forward frame
- hosts are unaware of switches
- Uses switch table to not require configuration (self-learning)

### Switches vs Routers

Routers are layer-3 packet switches meaning they route using IP addressees, not MAC address. Routers need to be setup, whereas switches are plug-n-play. Switches are susceptible to broadcast storms or large ARP tables. Routers do not have a spanning tree restriction (switches only have one path, whereas routers enable multiple paths for example North America and Europe).

### Self Learning Switches

- When a frame is received, the switch learns of the MAC and location of the sender
- If the destination MAC address is in the table (indexed), send frame only to that node
- Otherwise, flood all interfaces except for arriving interface

### Interconnecting Switches

- still self learning

### Virtual LANs

- Map group of port numbers to a VLAN and avoid cross-contamination
- To get from one VLAN to another use the router that is attached to the device with the switch
- Desires
  - Traffic isolation
  - Inefficient uses of switch: suppose 10 groups, either need 10 switches or one switch with 96 ports and lack of traffic isolation
  - Managing users: want to allow users to move to another group without having to modify cables
- VLAN trunking: special port on all switches to intersect all VLANs (Ethernet frame 802.1Q to cross the VLAN trunk with VLAN ID tag)

### Data Center Networks

- top of rack (TOR) switch is layer-4 because it also makes decision based on the destination port-numbers
- 20-40 server blades

Facebook F16:

- spine switch
- fabric switch
- TOR switch

Multipath with redundancy

### Datacenter Protocol Innovations

- RoCE: remote DMA (RDMA) over Converged Etherenet
  - Don't know what this is
- ECN: explicit congestion notification used in transport-layer congestion control (DCTCP, DCQCN)
- experimentation with hop-by-hop (backpressure) congestion control
- SDN used within

## Nym Mixnet Sphinx

Abdullah and Hossein project

- [Nym GitHub](https://github.com/nymtech)
- [Sphinx Rust implementation](https://github.com/nymtech/sphinx)

## Questions

- What is QoS (quality of service)

### Other

[RC 1918](https://tools.ietf.org/html/rfc1918)

- Private network addresses: 10/8, 172.16/12, and 192.168/16.
