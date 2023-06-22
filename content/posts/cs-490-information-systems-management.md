---
title: "CS 490 Information Systems Management"
date: 2023-05-09T13:02:11-04:00
draft: false
tags: [
    "university",
]
---

{{< toc >}}

## Introduction

- Why are we building things.
- A system consists of components
- Ahmed Ibrahim: DC 2133 (Tuesday, Thursday after lecture)

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

## Strategic Planning

- Defining an organization's direction
- Allocation its resources to pursue this direction
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

### Changing World of Planing

- closest to the action
  - organizational edge
  - outside-in approach
- strategic envelope
  - top management
  - set parameters
  - open and regulation communication

### Eight Planning Techniques

- Stages of growth
  - Early successes (adoption), Contagion, Control, Integration, Data administration, Maturity
  - assumes all organization are in the same stages in the same order
  - pro: roadmap. con: assumes all orgs go through same stages in same order
- Critical success factor (CSFs)
  - few key areas that must go right
  - monitoring and building
  - pro: resource alignment
  - con: oversimplifying complex processes
- Competitive Forces Model
  - Porter's five force { threat of new entrants, threat of substitutes, supplier power, buyer power, competitive rivalry }
  - pro: understanding competitive forces
  - con: fails to capture tech and societal shifts
- Three Emerging Forces (Digitization, Globalization, Deregulation)
  - new business models
  - telecommunications and transportation
  - many industries
  - pro: anticipate major trends
  - con: overlook industry/region specific factors
- Porter's Value Chain Analysis
  - support activities { firm infrastructure, HR management, tech development, procurement }
  - primary activities { inbound logistics, operations, outbound logistics, marketing & sales, service }
  - information as a source of value itself instead of as support
  - pro: value adding activity analysis
  - con: complex and time-consuming and does not capture intangibles
- E-Business Value Matrix
  - new fundamentals { criticality to business = low, newness of idea = low }
  - operational excellence { high, low  }
  - rational experimentation { low, high }
  - breakthrough strategy { high, high }
  - pro: identify opportunities for digital/online
  - con: no offline
- Linkage Analysis Planning
  - Examines the links between organizations in order to create a strategy for utilizing electronic channels
  - pro: understand relationships
  - con: complex and overlooks internals
- Scenario Planning
  - long-term thinking to prepare for various scenarios
  - explore forces that could cause different scenarios of the future to happen
  - time consuming and highly uncertain. Risk of bias
  - define decision problem and time frame
  - identify major known trends
  - identify driving uncertainties
  - construct scenarios
  - pro: long-term thinking, flexibility
  - con: time-consuming, uncertain, bias

## Managing Corporate Information Resources

### IT Infrastructure

- Hardware
- OS platform
- Application platform
- Data Management platform
- Network platform
- Internet platform
- Service platform

### Approaches to Manage

- Cost-centric view: minimizing IT infrastructure
- Service-Centric view: prioritize delivering reliable and high-quality IT services to meet user needs, focusing on service availability, performance monitoring, and incident response
- Innovation-Centric View: firms leverage IT infrastructure for innovation, seeking competitive advantage and business growth
- Risk-Centric view: risk management, robust security measures, disaster recovery
- Agility-Centric view: flexibility to respond quickly
- Data-Centric view: data-driven decision
- User-Centric view: end-user prioritization

### Value Chain Model

Multiple software systems for each part of the process: warehouse, operations, ordering, servicing, outbound / shipping

problem: integration between the systems

- could not detect a small item is missing

- system should analyze habits of suppliers, users, employees, customers.
- suppliers and their suppliers, firm, distributors, customers

Enhancement through information systems

- Automating and streamlining primary activities (production, delivery, customer service)
- Optimizing support activities (procurement, logistics, human resources)
- Gathering and analyzing customer data (develop new products that meet customers' needs)
- Improving communication and collaboration (with stakeholders to enhance experience)

### Business Process (BP)

- Collection of business functions related to each other
  - organization specific
  - specific business function or across many BF's
- example: billing process in a physician clinic
- IBM business process software
- cross-functional
  - order fulfillment process requires sales, accounting, manufacturing & production

### Integration Tools

- Enterprise Resource Planning (ERP)
  - Integration all areas of a company
  - Microsoft dynamics and vision
  - data accuracy and consistency
  - decision-making
  - improved collaboration
  - customer satisfaction
  - Data accuracy and consistency: no separate systems, reduces risk of errors
  - Better decision-making: realt-time
  - Improved collaboration: across different departments and locations
  - Increased customer satisfaction: better manage customer orders, inventory, and deliveries
- Supply chain management system (SCM)
- Customer relationship management systems (CRM)
- Knowledge management systems (KMS)
  - Confluence

### Haarslev Industry

- Problem
  - business process integrations of acquired companies
  - global expansion
  - lack of consolidation of operations
  - Many ERP systems
  - Process driven operations
    - no streamlined system to allow this
- Microsoft Dynamics
  - Global integration
  - Unified business processes
  - Enhanced process efficiency
  - Adoption of best practices (RapidValue)
  - Data Management
  - Documentation and Customization
  - Key components
    - Finance
    - Supply chain management
    - Sales
    - Customer Service
    - Marketing
    - Field Service
    - Business Central

### To-Increase \[...Microsoft Dynamics]

- Database management system (DBMS)
- Cloud computing: scalability
- data analytics: insights and reports
- artificial intelligence: forecasting, automation, decision-making enhancements
- Internet of things: collect real-time data
- APIs: integration with other systems and services
- Mobile: accessibility
- Security

## Information Systems Strategic Planning

### Creating Video Games

- Strategic planning is a process that involves defining an organization's direction and making decisions on allocating its resources to pursue this direction
- It involves setting goals, analyzing the competitive environment, creating a plan for achieving long-term success, putting it into action, and continually evaluating your process and its outcomes
- Tim Hortons, quick coffee delivery and walk-through
- McDonalds fully automated store

### Customer Intimacy

- know your customers really well
- understanding customers' needs, wants, preferences, and behaviours to anticipate before being asked

### Operational Excellence

- market is the total expenditure spent on a product or service
- Strategic planning for operational excellence involves formulating and implementing a plan that aligns all operational activities with the organization's strategic objectives

### Competitive Advantage

- unique strengths or capabilities
- Strategic planning for competitive advantage refers to determining how your
organization can best leverage its strengths and capabilities to gain the upper
hand over its competitors
- goal is sustainable

### Stand-Out Firms

- Stand-out form
  - Firms that do better are said to have a competitive advantage
  - Access to unique resource or they can use commonly available resource more efficiently

### Strategic Planning Challenges

- Technology comes outdated
- technology initiatives align with their overall strategic objectives
- agility and adaptable is required

### Limitations of Traditional Strategy-Making

- rigid long-term planning based on predictable trends (infeasible)
- rapid tech changes and shifts in consumer behaviour make trends less predictable
- failing to plan effectively potentially disrupts business operations or missed opportunities

### Moore's Law

- transistors / microprocessor power / computing power doubles every 18 months
- price of computing havens every 18 months

### Sense and Respond

The "sense-and-respond" approach is a strategic approach that emphasizes agility, adaptability,
and responsiveness to rapidly changing market conditions. Unlike traditional long-term planning,
which relies on rigid strategies, the sense-and-respond approach focuses on continuous
monitoring, sensing environmental changes, and quickly responding to them.

- It emphasizes the importance of strategizing in areas where the action is most intense and speedy
such as customer interactions and feedback, frontline operations, and market changes.

- In the sense-and-respond approach, organizations actively gather data and information from
various sources, which allows them to sense market trends, customer needs, and emerging
opportunities or threats.

Microsoft and Sun/Java.

### IBM in a Service-Oriented Architecture

- flexibility to innovate and adapt processes as per business requirements, using a service-oriented architecture.
  - easy modification and reuse of system components
  - execution of changes to business rules and workflow redirection without extensive IT involvement
- real-time tracking and measurement of process effectiveness, customizable, real-time alerts
- process efficiencies
- tracks key performance indicators (KPIs)
- Aligning Processes with Planning - modelling and managing processes (e.g. customer service)
- Strategic Decision Making - evidence-based approach (monitoring and analytics)
- Operational Efficiency - identification of issues or gaps in processes (bottlenecks, redundancies, inefficiencies)
- Agility and Change Management

### Komatsu

- 52,000 invoices needed to be processed from suppliers MANUALLY
- Microsoft Power automate and AI builder automated workflow
  - Document processing AI model
  - three weeks
  - Automating for one supplier resulted in processing 1,100 invoices in three weeks; 300 hours saved
  - blueprint for other suppliers
- Citizen Developer Program
  - empower employees to build business solutions
  - aim to increase innovation
- Future plans
  - encouraging others to adopt similar solutions
  - enabling employees to focus on more critical tasks.

### System Development

### Traditional Model

### Waterfall Model

### Incremental Development Challenges

- not visible process
- not cost-effective
- system degrades as new increments are added
