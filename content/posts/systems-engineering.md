---
title: "Systems Engineering"
date: 2024-03-05T17:15:02-05:00
draft: true
---

Writing this as I study for my interview with {{< inline-spoiler >}}TBA?{{< /inline-spoiler >}}.

## Precision Time Protocol (PTP)

- The outcome of using PTP is synchronization (time) of multiple systems that are interconnected down to **nanosecond precision**.
- The case for PTP is that when there are multiple systems responding to multiple clients, a write request and a read request can land on different nodes; often times databases have replicas so a read might hit one of the replicas that hasn't registered the write (violation of **linearizability**).
  - Solution: we want timestamps on the backend and database replicas so that the replica blocks the read until it's own updated timestamp is equal or greater to the read request. The alternative would be to mash queries to the replica until most replicas are in consensus.
  - Implementation: To have precise timestamps for systems where changes can happen in the milliseconds, a time synchronization protocol is needed for nanosecond precision

[IEEE 1588-2019](https://standards.ieee.org/ieee/1588/6825/)

> provides precise synchronization of clocks in packet-based networked systems
