---
title: "CS 348 Intro to Database Management"
date: 2023-01-10T16:02:06-05:00
draft: false
tags: [
    "university",
]
---

## Objectives

### Viewpoints

- database user
- database designer
- database manager

### Sub-objectives

- SQL
- data modeling
- management
- database management system (DBMS)
- Relational model
- Application programming
- Transaction and concurrency

## File-Processing Systems

### Disadvantages with File-Processing Systems

- Data redundancy and inconsistency
  - various copies leads to higher storage
- Difficulty in accessing or modifying data
- Integritty problems
  - New constraints require changing the program
- Atomicity problem
  - Difficult to ensure atomic property and to restore state after failure
- Concurrency issues
- Security

## Databases

### Database Definition

> A large and persistent collection of (more-or-less similar) pieces of
information organized in a way that facilitates efficient retrieval and
modification.

### Database Management System (DBMS)

> A program (or set of programs) that manages details related to storage and
access for a database.

- Data model
- Access control
- Concurrency control
- Database recovery

### Scheme Definition

> A schema is a description of the data interface to the database

### Database Instance Definition

> A database instance is a database (real data) that conforms to a given schema
) i.e., the information stored in the database at a particular moment


