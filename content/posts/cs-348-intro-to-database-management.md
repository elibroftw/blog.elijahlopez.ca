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

### The Relational Calculus

## SQL - Structured Query Language

KEYWORD (statements is implied)

- SQL Data Manipulation Language (DML)
  - SELECT for queries
  - INSERT, UPDATE, DELETE modify the instance of a table
- SQL Data Definition Language (DDL)
  - CREATE, DROP modify the database schema
- SQL Data Control Language (DCL)
  - GRANT, REVOKE enforce the security model

Schema used for Examples

![database schema](/images/cs-348/database-examples-schema.png)

### Data Types

- integer or int (32 bit or 4 byte)
- smallint (16 bit or 2 bytes)
- numeric(p, q): p digit numbers with q digits to the right
- real, double precision:
- float(n): user-specified precision of at least n digits
- char(n): fixed length character strings (n is length)
- varchar(n): variable length character to a max length of n
- date: describes year, month, day
- time: describes an hour, minute, second
- timestamp: describes a date and time
- interval: allows date/time computations

### Tables

```sql
create table r
  (A1 D1, ..., An, Dn),
  (integrity-constraint-1),
  ...
  (integrity-constraint-k),
```

r: relation, A: attribute, D: data type

integrity-contraints:

```sql
primary key (A1, ..., An )
foreign key (Am, ..., An ) references r2
```

### Queries

SQL allows duplicate tuples in relations as well as in query results. need to use
the `distinct` keyword after select.

```sql
SELECT [distinct] dept_name, salary from instructor
```

\[OPTIONAL]

To return all attributes, use an asterisk (*)

#### Arithmetic Expressions

You can operate on the data through the select call itself. For example, if we wanted the monthly salary instead of an annual one:

```sql
select ID, name, salary/12 as monthly_salary from instructor
```

#### Filtering (Where)

```sql
select name from instructor where dept_name = ’Comp. Sci.’
```

- logical connectives: and, or, and not
- comparison operations:  <, <=, >, >=, =, and <> (inequality)
- comparisons can be applied to results of arithmetic expressions

#### Select Cross Product

Performs Cross product by specifying multiple relations

```sql
select * from instructor, teaches
```

Use where to join and remove duplicate attributes.

```sql
select * from instructor, teaches where (instructor.ID = teaches.ID and instructord.dept_name = 'Comp. Sci' and year = 2017)
```

#### FROM Inner Join

```sql
... from instructor inner join teaches on instructor.ID = teaches.ID...
```

If attributes have the same name, then both will show up with a `relation.` prefix

#### FROM Natural Join Clause

```sql
select * from instructor natural join teaches
```

Be careful since this does it to all attributes. For specific attributes,
use `using`

```sql
select * from T join S using(A)
```

#### SELECT as

Renaming the attribute in the query result

```sql
select T.ID, T.name from instructor as T, instructor as S where T.salary > S.salary and S.ID = '12121'
```

#### String Operations

- '5"6' (allows double quotes)
- 'Datebase' = 'database' (false)
- DBMS might not differentitae (MYSQL)
- concat
- to upper or to lower
- string length, extracting substrings, etc.

#### WHERE like

- %: match any substring
- _: match any charater (one)
- escape using `escape '%'` or `escape '_'`

```sql
WHERE attribute like '%pattern%'
```

#### ORDER

```sql
select name from instructor order by name asc   -- default is asc
select name from instructor order by dept_name, name  desc
```

#### Union

```sql
select course_id
from section
where semester=’Fall’ and year=2017
union
select course_id
from section
where semester=’Spring’ and year=2018

-- union all

select course_id
from section
where semester=’Fall’ and year=2017
union all
select course_id
from section
where semester=’Spring’ and year=2018
```

#### Aggregate Pt. 1

- avg: average value
- min: minimum value
- max: maximum value
- sum: sum of values
- count: number of values
  - count (*) to count number of tuples
Usage `SELECT count(attribute), ...`

Group by: group tuples into another attribute.

```sql
select dept_name, avg(salary) group by dept_name having avg(salary) > 25000
```

 The having condition applies on each group and not on the aggregation. The having applies before the select returns but after the grouping.

Null: null indicates unknown or missing data.

Comparing null with anything else always results in unknown even with null.

Unknown always takes precedence.

Use `is null` for a null comparison

### Subqueries

Use ( ) to use a temorary relation

#### Table Subqueries

```sql
select dept_name, avg_salary
from (
  select dept_name, avg(salary) as avg_salary from instructor group by dept_name
) where avg_salary > 42000
```

