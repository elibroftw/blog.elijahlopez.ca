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

### Levels

- Physical
- Virtual
- External

## The Relational Model

A database is a collection of relations (tables). Each relation
has a set of attributes (columns). Each attribute has a name and an atomic (indivisible) domain (type). Each relation has a set of tuples (rows).
Duplicate tuples are not allowed. Two tuples are duplicates if all their attributes agree.

### Data Model

- structure
- operations
- constraints

### Schema and Instance

```schema
author(aid:int, name:string)
publication(pubid:int, title:string)
journal(pubid, volume)
```

A database can be displayed tabularly with a table for each relation.1

### Integrity Constraints

Tuple-Level

- Domain restrictions (e.g. type string)
- Restricting possible values (e.g. `["Winter", "Summer", "Fall"]`)

Relation-level

- Superkey: attributes where tuples will never agree on
- Candidate key: minimal superkey (minimal set of attributes that unique identify the tuple)
- Primary key: designated candidate key

Database-level

- Foreign key: an attribute of this relation is the primary key for another relation (Relation one is _referencing_  and the second relation is   _referenced_ )
- Foreign key constraints: Foreign key must match the primary key value of a tuple in the `referenced` relation
- Referential integrity constraints: foreign key cannot be a primary key in the referencing relation

## The Relational Algebra

Consists of a set of operators

### Operators

- one or two relations as inputs
- single output relation in terms of the input relation(s)
- can be composed to express the definition of a new relation in terms of existing relations

### Selection

subset of tuples of a relation and thus schema is the same

- Find teachers who are in the physics department
- conditions include any column of R, comparisons, boolean algebra
- select applies to single row at a time, not many

### Projection

- Returns a subset of a relation but only of the specified attributes
- Duplicates are eliminated

### Cross Product

- Result has attributes of both input relations
- Result is the tuple for each possible pair from relation one and relation two

### Conditional Join

- Perform cross product but join pairs only if the boolean involving attributes from both relations is true

### Natural Join

If both relations have the same attribute, then the join will only filter out
tuples that don't have those attributes matching. During the first cross product, duplicate attributes are renamed (e.g. ID, ID -> ID, ID_1) but at the end the duplicated attributes are thrown out.

### Set-Based Relational Operators

- Union: Same number of fields and corresponding fields have the same type
- Difference: Returns stuff in first relation not present in second
- Intersection: Return stuff in both rrelations
- Division: Attributes of second relation must be a subset of the first. Inverse of product. Useful for all. Example (which tuples of X always references Y but returns a new tuple without the attributes in Y).

### Algebraic Equivalences

### Relational Completeness

## The Relational Calculus
