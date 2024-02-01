---
title: "CS 492 Software Delivery"
date: 2024-01-08T13:04:18-05:00
draft: false
tags: [
  'university'
]
---

## Summary

- Want to deliver software faster with less big changes
- Continuous Integration: Find issues in patches continuously (after commits), to reduce the costs due to the developer's memory fading (context switching)

## Logistics & Introductions

[Slides](https://learn.uwaterloo.ca/d2l/le/content/1005130/viewContent/5333551/View)

- Slides include: calendly link, piazza

### Grade Breakdown

- In lab tasks (12%) in MC 3003: Jan 17th, Jan 31st, Feb 28th, Mar 13th
- Project (28%) with 5 students
  - Report on existing github project's pipeline, limitations, and improvements (5%)
  - Improvement and reports 15%
  - Final presentation
- Midterm (20%)
  - Can bring one filled 8.5" x 11 paper sheets double sided
- Final Exam (40%)
  - Can bring two filled 8.5" x 11 paper sheets double sided

Due dates: February 16th, March 22nd, 3rd

What the fuck is Google's bazel.

### Course Introductions

- [Course outline](https://cs.uwaterloo.ca/~s4mcinto/courses/CS489/1241/)
- [Poll](https://is.gd/vp1t2J)

In the past, software delivery used to be walled. Each team would be just hand off their work output to the next team and not care about the end product.

What is (continuous) integration fundamentally.

### Design and Implementation of Release Pipelines

What are patches?

- Bug fixes
- Refactoring: behaviour preserving software change

We need to **integrate** patches using VCS or something..

We need to build the patch to ensure nothing broke.

Then we need to deploy the build.

Lastly, we need to monitor (continuous experimentation). Canary, A/B testing. Blue-Green, Chaos engineering. This leads to new patches since this specific deployment was targeted.

Maintenance

- Corrective (bug fixes)

### Modules

1. Logistics and Foundations: what?, basics version control, build systems
2. Release pipelines: Continuous Integration, Continuous Delivery (CI/CD), Waste & Acceleration
3. Infrastructure & Deployment: Virtualization (flabours, hypervisors, timeline, containers), Infrastructure-as-code. Overview, A declarative solution
4. Deployment Strategies: Mitigating Features (Blue-Green Deployment), Experimentation, Resiliency

### Architecture of Open Source Applications (Firefox)

#### Introduction

- Firefox, more users, more issues will come up
- Proactive mindset
- Every release = energy release "chemical spill"
- Post-release evaluation (areas to improve)
- Automation to reduce human involvement and error
- Go to build process
  - Standardized process to every single release and one person to track this (release coordinator)
- Prioritize fixing small issues before

#### Release coordinator

- Go to every team meeting
- Point of communications between all the teams between the releases
- Balance the stuff
- Go to build email that they send (build number, code for the build, urgency for the build). Routine vs. chem spill
- Also sends stop emails

#### Reproducability

- Tagging tool and versions
- Use script for matching it
- VCS repositories are used in the build
- In case of error

#### Localization of the build

- Unpacks build, repacks for the locale needed
- So many countries, concurrency is used
- Partner repacks, custom builds for various partners for custom bookmarks

#### Signing

- To ensure the copy of firefox is authentic from Mozilla, signing is used
- Two types:  MIcrosoft Authenticode for exe and dll's. Vs. GPG

#### 2.6 Updates

- Built-in updater preferred over downloading and running standalone installer
- Downloading update package occurs in the background
- Prompt to update & restart after download
- Catch: generating updates from all **supported** previous releases to the latest.
  - For every platform (Windows, Linux distros, macOS), every locale, every installer from LATEST-1, LATEST-2, LATEST-3. Not just for firefox
- Updates are snippets (XML) that point to the partial/complete .mar (Mozilla Archive) file
- Minor updates: Updating 3.6.\* to the latest 3.6.\*, beta -> latest beta, nightly -> latest nightly
- Major updates: advertisement of new features
- Complete vs partial updates. Partial is the binary diff between the old release complete .mar file and the latest release complete .mar file.
- These differences were shown to be very common across the platforms, so caching/hashing was used.

### Release Pipeline Steps

- Today we have rapid release cycles
  - Step 1: Configuration
  - Step 2: Construction
  - Step 3: Certification
  - Step 4: Packaging
  - Step 5: Deployment
- Monitor
  - Stuff

### What is Continuous Integration

- checks: does the commit actually integrate into the codebase
- how? build, test and report result
- why? Context switching costs exist so we need to test and address issues as soon as commits are made and not as long as possible

## Version Control System

### VCS Brief

- Enforce discipline
- Archiving versions of source code
- Maintaining historical information
- Enable collaboration
- Recovery
- Conserve disk space since only one central point and VCS uses compression
- Git is a distributed version control system

### Git Operations

- `git clone`
  - Online repo -> Local repo
- Local
  - `git log`
  - `git branch`
  - `git tag`
- merging a branch that points to an older commit
  - messes up the log because commits will have multiple parents
  - could cause conflicts in the default branch
- solution: git rebase
  - want to move the head to the latest of a branch
- git diff [--staged]
- git add FILE
  - git reset FILE to remove changes
- git bare repository server
  - `git init --bare`

### Git Database

- objects
  - Blob
    - A file being tracked by git
  - Tree
    - A directory tracked by git
    - Contains a list of blob and trees
  - Commit
    - A reference to a state being tracked by Git
      - Refers to a tree object
- refs
  - heads
    - what commit each branch points to
    - HEAD
      - A reference to the current branch that is checked out
      - May refer to a commit if we are in a detached HEAD state
  - remotes
    - branches that are being tracked
  - tags
    - what commit each tag corre
    ponds to

```sh
git cat-file -t COMMIT
git cat-file -p COMMIT
```

Can then find the blob we are looking for.

### Git Hooks

- Script to run when particular events occur on client or server side
- chmod u+x ./.git/hooks/commit-msg.sample

```sh
#!/bin/sh
#!/bin/bash
#!/usr/bin/env python3
#!/usr/bin/env node
```

- Problems
  - not everyone will enable it
  - bad actors can turn off client-side hooks
- Solution: [server-side hooks](https://git-scm.com/book/en/v2/Customizing-Git-Git-Hooks#_server_side_hooks)

Hook name |  Description | Args
--------------- | ---------------- | --------
pre-receive | First script to run after a push from a client. Args are a list of references that are being pushed from **stdin** | NONE
update        | Run once for each branch that was updated. | BRANCH_NAME BRANCH_SHA-1_OLD BRANCH_SHA-1_NEW. Rejects only per branch.
post-receive | Runs after update completion, can be used to broadcast or create a new change | ???

## Build System

- Source code is an array of car parts and we want to deliver the final car
- A build system assembles the parts into deliverables efficiently without needing to remember certain actions

### Families of Build Tools

- [slides](https://learn.uwaterloo.ca/d2l/le/content/1005130/viewContent/5356971/View)
- [reading](https://is.gd/rzymTT)
- low-level tools: define deps and rules for each input and output file
- abstraction-based tools: derive low-level build code from high-evel data. e.g., maps of sources files to executables
- framework-driven tools: default behaviour is assumed unless explicitly overridden
- organizationally-scaling tools: reuse the output of build command across machines to accelerate builds nad reduce (organizational-level) waste
  - how do we do this for rust?
- Dependency management tools
- Testing frameworks (CS 447)

## Low-level Build Systems

### Make

- [Example Makefile](https://github.com/smcintosh/makeexample)
- [More complicated but succinct Makefile](https://github.com/elibroftw/bootleg-settlers-of-katan/blob/master/Makefile)
- express dependencies with `program: program2 program3`
- requires tabs not spaces
- write recipes
- variables (lazy evaluation)
  - x = "a command"
  - $(x)
- parallelization: make -j8
- % wildcard is greedy (%.o -> foo.o.o)
  - the % must be equal on both sides of the rule
  - $<:  expands to the first dependency
  - $^: expands to the entire list of dependencies
  - $@: expands to the name of the target
- header files are dependents on .o files because .c files might not actually change
- Make has built-in rules for compiling c files and linking o files
  - .o files: `$(CC) $(CPPFLAGS) $(CFLAGS) -c`
  - linking automatically works for programs where a source code exists
  - string manipulation: either use `${OBJS:.o=.d}` or `$(patsubt %.o,%.d,$(OBJS))`

Shortcoming of Make

- Shell scripts are not portable (cross platform)
- Boilerplate expressions need to be repeated

[Recursive Make Considered Harmful](https://aegis.sourceforge.net/auug97.pdf)

- Every make only knows the dependencies of itself, not subdirectories it calls make on
- People would order the recursions to build one project before another
- Distrust in incremental build process

Addressed

- Apache Ant (low level). Uses Java for recipes
- Scons and Raek use Python and Ruby as first-class languages to enable portable and extensible build code

### Abstraction-based build

"There is only one problem in software engineer problem that cannot be solved by adding a layer of abstraction: too many layers of abstraction"

- GNU Autotools
  - Generate Makefiles
- CMake
  - Generate Makefiles
  - Only 3 lines
  - Made by the Scientific community
- Meson

```cmake
# Set the minimum version of CMake that will be supported by this build file
cmake_minimum_required(VERSION 3.5)
# Give the project a name
project(CappedRandom)
# Add an executable that is made up of the three C source files
add_executable(main main.c input.c random.c)
```

### Maven - Framework Driven Build Tool

- assumes a lifecycle
- lifecycle: series of phases
- phase: series of goals to build actions via plugins

Lifecycles

- default: produces project deliverables
- clean: initial state
- site: website/docs material

Phase | Goal
--------- | ------
process-resources | resources:resources
compile |  compiler:compile
process-test-resources | resources:testResources
test-compile |  compiler:testCompile
test |  surefire:test
package |  jar:jar | par:par | war:war
install |  install:install
deploy |  deploy:deploy
**Clean**
clean | clean:clean
**Site** |
site | site:site
site-deploy | site:deploy

## Organizational Scaling

1. Build execution is computationally expensive
    - In-memory dependecy graph requires plenty of high-speed RAM
    - Processor-intensive operation: fast CPU
    - Files need to be stat'd (modification time), read (source files) and written (intermediate and output files): large and fast disk I/O
2. Constraints on parallelism
3. Commands are repeated across machines

### Google's Bazel

- internal built tool is called blaze
- Starlark: domain-specific build language inspired by Python
- Load build files relevant to target of the execution
- Analyze the inputs and dependencies and produces an action graph
- Execute by traversing teh action graph until final build outputs are produced
- Action graph is a directed graph of build artifacts
  - Graph is queryable to better understand the build process
