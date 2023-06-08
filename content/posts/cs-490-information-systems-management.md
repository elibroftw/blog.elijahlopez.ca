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

- Direct Sales – This model involves selling products or services directly to customers.
- Advertising – Companies generate revenue by displaying advertisements to their customers.
- Subscription – Customers pay a recurring fee (monthly, yearly) to access and use a product or service.
- Freemium – This model offers a basic version of a product or service for free, but
charges for additional features or premium versions.
- Licensing or Royalties – Companies grant licenses to third parties to use their intellectual property (such as patents, trademarks, or copyrighted material) in exchange for royalties or licensing fees.
- Affiliate Marketing – Companies earn a commission by promoting and selling other companies' products or services through affiliate links or referral programs.
- Data Sales – Companies collect and analyze data from their customers and sell or license the insights or anonymized data to other businesses or researchers

### Revenue Model and Design

- advertising requires placement of ads in GUI
- subscriptions and subscriptions requires compelling premium features
- data sales requires a scheme to collect data
- rapid user acquisition requires scalability and iterations

### Triton Wear

- accelerometers and gyroscopes
  - stroke count, stroke rate, distance per stroke, and more
- wearable device, mobile app, cloud infrastructure and analytics capability
- User Interface
  - Coach dashboard
  - Athlete portal
  - Integration and API for extending features
- simply and seamless
- quick setup
- engaging
- lots of data
- accurate, consistent, reliable
- focusing on the skills rather than the timing to maximize performance
- automated data visualization progression

### External Factors

- internet
- global marketplace
- micro-markets
- business ecosystems
- decapitalization
- faster business cycles
- accountability and transparency
- rising risks of IT

### Internal Forces

- supply-push to demand-pull
  - respond to consumer demands and pull products
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

### Strategies in the New Work Environment

- leverage knowledge globally
- organize for complexity
- work electronically
- handle continuous and discontinuous change

### Management Hierarchy

- Senior
  - Executive Support Systems
- Middle Management
  - Management Information Systems (MIS)
  - Decision Support Systems (DSS)
- Operational Management
  - Transaction Processing Systems

### Information Workers

- Procedure-based
  - Efficiency focused
  - Easily measurable
- Knowledge-based
  - Effectiveness
  - Harder to define

### Software Examples

- Database Management System (DBMS)
- Document/file managment system (DMS)
- Content management system (CMS)
  - Website support
- Knowledge manager system
- Customer relationship management (CRM)

## RAID

- Redundant array of independent disks. The OS thinks there is only one disk.
- Data Striping: unit one goes here, unit two goes there, unit three goes here as if there's one big disk; parallelism

### RAID 0

Distributing data across at least 2 disks; each disk has different information.

### RAID 1

Data is the same on all devices

### RAID 10

Needs at least 4. Multiple groups of RAID 0s. Each group of disks gets different data.

Or RAID 1 PLUS 0

### RAID 5

At least 3. Stripping with parity. Parity means if a disk fails, the parity can be used to generate the disk that fails. Parity is just enough information to recover the failed disk given that the other disks are available.

### Storage Area Network

- Fibre Channel Switch
  - High performance to handle lots of data traffic
  - Like a router but for fibre optics and wi-fi routing
  - Wired connected to multiple RAID disks
- Block-level storage
  - Hard drives appear as locally attached devices

### Practical Exercise

500,000 TB storage capacity, Seagate 10TB drives. 0.7% annual failure rate (AFR)

Design for 99.99% availability.

- redundancy, fault-tolerance, load balancing, regular maintenance
- RAID 10 to tolerate drive failure
- Distributed storage to increase reliability and availability
- Hot swappable driver - can replace drivers while system is running

- Mean Time Between Failure = 1 / annual fail rate
- Mean Time to Repair = 1 / 365

Availability = Mean Time Between Failure / (MTBF + Mean Time To Repair)

### Backup

- Online backup (hot)
- Instant, protects against at least one HD failure

### Offline backup

- Done end of day
- Protect against complete failure

### Archive

- Full backups
- Differential backups
  - alters existing backup
- Incremental backups
  - Backup additions and alternations since the last incremental backup

## Managing Corporate Information Resources

### IT Infrastructure

- Hardware
- OS platform
- Application platform
- Data Management platform
- Network platform
- Internet platform
- Service platform

## Strategic Planning

- Planning helps a business identify its goals however technology changes very fast
- Strategic focus: 3-5 years (business processes) led by senior management
- Tactical focus: 1-2 years (resource allocation and project selection) led by middle managers
- Operational focus: 6-12 months (project management, budget) professionals

### Why Planning Is So Difficult

1. Alignment of strategic business Goals and
systems plans
2. Technologies are rapidly changing
3. Companies need IT portfolios rather than
projects
4. Infrastructure development is difficult to fund
5. Responsibility needs to be joint

### Approaches to Manage

- Cost-centric view: minimizing IT infrastructure
- Service-Centric view: prioritize delivering reliable and high-quality IT services to meet user needs, focusing on service availability, performance monitoring, and incident response
- Innovation-Centric View: firms leverage IT infrastructure for innovation, seeking competitive advantage and business growth
- Risk-Centric view: risk management, robust security measures, disaster recovery
- Agility-Centric view: flexibility to respond quickly
- Data-Centric view: data-driven decision
- User-Centric view: end-user prioritization

### Value Chain Model

Multiple software systems for each  part of the process: warehouse, operations, ordering, servicing, outbound / shipping

problem: integration between the systems

- could not detect a small item is missing

- system should analyze habits of suppliers, users, employees, customers.

### Business Process (BP)

- Collection of business functions
- example: billing process in a physician clinic
- IBM business process software

### Integration Tools

- Enterprise Resource Planning (ERP)
  - Integration all areas of a company
  - Microsoft dynamics and vision
  - data accuracy and consistency
  - decision-making
  - improved collaboration
  - customer satisfaction
- Supply chain management system (SCM)
- Customer relationship management systems (CRM)
- Knowledge management systems (KMS)
  - Confluence

### Haarslev Industry

- Problem: integration of acquired companies (lack of consolidation)
- Microsoft Dynamics
  - Global integration
  - Unified business processes
  - Enhanced process efficiency
  - Adoption of best practices (RapidValue)
  - Data Management
  - Documentation and Customization

### Tech Underlying To-Increase's ERP Solution

- APIs
- Mobile
- Security
