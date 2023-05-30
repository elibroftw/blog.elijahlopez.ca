---
title: "CS 490 Information Systems Management"
date: 2023-05-09T13:02:11-04:00
draft: false
tags: [
    "university",
]
---

Why are we building things.

System: components

Ahmed Ibrahim: DC 2133 (Tuesday, Thursday after lecture)

### The First System

For 4000 years, writing was the only information technnology

Data vs. Information

data: raw facts before organization into an understandable form

information: data that has been shaped into a meaningful and useful form for human beings

### Business Transformation

- automation and digitization
- data-driven decision-making
- enhanced customer engagement
- improved collaboration and connectivity
- disruption of traditional industries through new business models

### Information Systems Management

What are we doing after we build a system.

#### Advantages

- Survival
- Competitive advantages

#### Success

Correct tech, tools, processes, people, networks

### Problems with Manual reservations

- Difficult to match passenger names to seats
- Resulted in poorly managed inventory (i.e., seats on a fight)
  - Over-booking: dissatisfied customers
  - Under-booking: lost revenue
- Aircraft with greater seating capacity and greater frequency of use on the horizon
  - More inventory and passengers to keep track of

- Introduction of Sabre:
  - Reduced man power
  - American airlines - IBM
  - Remote terminals

### Waves of Innovation

- cut costs
- generate revenue
- business survival

### Software Architecture

- architecture (conceptual)
  - blueprint
  - implementation independent
- infrastructure (physical)
  - implementation dependent
  - physical material

#### Reference Architecture

- captures main components
- high level abstraction
- common vocabulary
- comparative

#### Architectural Styles

- broad perspective on how to structure our
software application

- Component-based
- Layered
- Pipes and filters
- Microkernel
- Client/server
- Event-driven
- Repository

#### Monolithic

- tightly coupled
- single large code base
- less scalable

#### Service-Oriented Architecture (SOA)

- reusable and interoperable via service interfaces
- common interface standards

#### Microservice Architecture

- single-function modules with well-defined interfaces and actions
- small teams own entire life cycle of the service
- The term “micro” refers to the sizing of a service which must be
#manageable by a single development team (5 to 10 developers).

## Architecting A Solution

### Three Tier

- Presentation logic
- Application logic
- Data access logic & storage

### Zero Client

No persistent storage, firmware loads OS into memory on power on.

- cost-effective
- low power consumption

### Practice #3: A Weather Application

- Many ways, most preferably the 3-tier system.
- Hybrid, weather data on server, peer - to - peer other

### How to Find a Solution

First ask, what have you tried already and why didn't it work?

### Revenue Model

Common Revenue Models:
• Direct Sales – This model involves selling products or services directly to customers.
• Advertising – Companies generate revenue by displaying advertisements to their customers.
• Subscription – Customers pay a recurring fee (monthly, yearly) to access and use a product or
service.

Freemium – This model offers a basic version of a product or service for free, but
charges for additional features or premium versions.
• Licensing or Royalties – Companies grant licenses to third parties to use their
intellectual property (such as patents, trademarks, or copyrighted material) in
exchange for royalties or licensing fees.
• Affiliate Marketing – Companies earn a commission by promoting and selling other
companies' products or services through affiliate links or referral programs.
• Data Sales – Companies collect and analyze data from their customers and sell or
license the insights or anonymized data to other businesses or researchers

### Revenue Model and Design

- advertising requires placement of ads in GUI
- subscriptions and subscriptions requires compelling premium features
- data sales requires a scheme to collect data
- rapid user acquisition requires scalability and iterations

### Internal Forces

- supply-push to demand-pull
  - respond to consume demand and pull products
- self-service
  - customers know what they want best
- real-time working
  - responding fast to the customer demands
  - optimized as possible
- anytime, anyplace information work
  - remote / hybrid / mobile computing
- Outsourcing and strategic alliances
  - Use of IT to help manage work across the extended enterprise
- Decease of hierarchy
  - Equal playing field with shared authority
  - Use of IT to facilitate information exchange

## RAID

Redundant array of independent disks. The OS thinks there is only one disk.

### RAID 0

Distributing data across at least 2 disks; each disk has different information.

### RAID 1

Data is the same on all devices

### RAID 10

Multiple groups of RAID 0s. Each group of disks gets different data.

Or RAID 1 PLUS 0

### RAID 5

At least 3. Stripping with parity. Parity means if a disk fails, the parity can be used to generate the disk that fails. Parity is just enough information to recover the failed disk given that the other disks are available.
