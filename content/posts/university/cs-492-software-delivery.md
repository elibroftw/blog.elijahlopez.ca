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

1. Integrate
2. Build
3. Deploy
4. Monitor

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
- **Archiving versions** of source code
- Maintaining **historical information**
- Enable **collaboration**
- **Recovery**
- **Conserve disk space** since only one central point and VCS uses compression
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
    - what commit each tag corresponds to
    - tags are IMMUTABLE

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
- organizationally-scaling tools: reuse the output of build command across machines to accelerate builds and reduce (organizational-level) waste
  - how do we do this for rust?
- Dependency management tools
- Testing frameworks (CS 447)

## Low-level Build Systems

### Make

<details><summary>Example File</summary>

```make
# o files are built automatically via `$(CC) $(CPPFLAGS) $(CFLAGS) -c`
EXEC = main
OBJS = random.o input.o main.o
DEPS = ${OBJS:.o=.d}
# DEPS = $(patsubt %.o,%.d,$(OBJS))
# CC = gcc
# preprocessor flags
CPPFLAGS = -MMD
# CFLAGS: compiler flags
# since the target is the name of a direct object, the built-in rule applies
$(EXEC): $(OBJS)

-include $(DEPS)

.PHONY: clean
clean:
	rm -f $(EXEC) $(OBJS) $(DEPS)
```

</details>

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

<details><summary>Example</summary>

```xml
<?xml version="1.0" encoding="UTF-8"?>
<project xmlns="http://maven.apache.org/POM/4.0.0" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
	xsi:schemaLocation="http://maven.apache.org/POM/4.0.0 http://maven.apache.org/xsd/maven-4.0.0.xsd">
	<modelVersion>4.0.0</modelVersion>
  <groupId>ca.uwaterloo.cs446</groupId>
  <artifactId>mavendeps</artifactId>
  <version>2022</version>

  <properties>
    <project.build.sourceEncoding>UTF-8</project.build.sourceEncoding>
    <maven.compiler.source>1.8</maven.compiler.source>
    <maven.compiler.target>1.8</maven.compiler.target>
    <exec.mainClass>ca.uwaterloo.cs446.mavendeps.Main</exec.mainClass>
  </properties>

  <dependencies>
    <!-- https://mvnrepository.com/artifact/org.apache.logging.log4j/log4j-core -->
    <dependency>
        <groupId>org.apache.logging.log4j</groupId>
        <artifactId>log4j-core</artifactId>
        <version>2.22.1</version>
    </dependency>
  </dependencies>
</project>
```

</details>

- convention over configuration
- concepts: lifecycle, phases, goals, plugins
- assumes a lifecycle
- lifecycle: series of phases
- phase: series of goals to build actions via plugins

Lifecycles

- default: produces project deliverables
- clean: initial state
- site: website/docs material

Lifecycle | Phase | Goal
----------- | --------- | ------
**Default** | process-resources | resources:resources
--- | compile |  compiler:compile
--- | process-test-resources | resources:testResources
--- | test-compile |  compiler:testCompile
--- | test |  surefire:test
--- | package |  jar:jar, par:par, war:war
--- | install |  install:install
--- | deploy |  deploy:deploy
**Clean** | clean | clean:clean
**Site** | site | site:site
--- | site-deploy | site:deploy

## Organizational Scaling

1. Build execution is computationally expensive
    - In-memory dependency graph requires plenty of high-speed RAM
    - Processor-intensive operation: fast CPU
    - Files need to be stat'd (modification time), read (source files) and written (intermediate and output files): large and fast disk I/O
2. Constraints on parallelism
3. Commands are repeated across machines

### Google's Bazel

- Internal built tool is called blaze
- What's the point?
  - Centralized caching to cut down repeated builds
  - Cross language
  - Language specific implicit rule (e.g. header files)
- Starlark: domain-specific build language inspired by Python
- Load build files relevant to target of the execution
- Analyze the inputs and dependencies and produces an action graph
- Execute by traversing the action graph until final build outputs are produced
- Action graph is a directed graph of build artifacts
  - Graph is [queryable](https://docs.bazel.build/versions/0.29.1/query-how-to.html) to better understand the build process
  - Lot of things are implicitly done
  - `bazel query "deps(//:mavendeps)"`

## CI and CD

- Practitioners (Developers, QA, Release Engineers) <-> Build System <-> Development Tools
  - Developers: execute local builds to sync changes and perform simple tests
  - QA: automated tests into build system
    - normal builds should provide quick feedback
    - slower tests can be relegated to special build targets that are executed less often
  - Releng: micro and macro
    - micro-build: behaviour of a build system in a single execution
    - macro-build: provisioning fleet of build resources
- DevTools
  - Static analysis: infer, coverity
  - Problems like: buffer overflows, resource leaks, dead code, null pointer dereference & exceptions
- Code review
  - pre-merge review
  - [QT Gerrit code review](https://codereview.qt-project.org/#/c/140545/)
    - Qt Sanity Bot
    - Qt CI Bot
- Release automation
  - Nightly builds
    - When builds took hours, the build would run at night after the day's changes so that the QA can run tests in the morning
    - Too infrequent
    - Don't know what change broke the build
    - What if you wrote the broken code the day before
      - `git bisect` can split the history into two sets of commits
  - Continuous builds

### CI

- Martin Fowler: Refactoring, Continuous Integration - verify automated build
- Cycle: build -> git -> build -> test -> report
- Tools:
  - Install: Jenkins, CruiseControl, Buildbot
  - Cloud: Travis CI, GitHub Actions, Circle Ci

[An Empirical Study of Projects that (mis)use Travis CI](https://rebels.cs.uwaterloo.ca/papers/tse2018_gallaba.pdf)

- Build job processing service
  - apply changes to latest source code, run tests, possible distribute
  - configuration via language property, services, before_install, install

Robust Build System

- Invest time creating and maintaining
- Issues: broken build or weird bugs

Flaky tests

- Result can fail even with the same input (non-deterministic behaviour)
  - False positive
    - Code might be fine and there is a loss in trust of the test
  - False negative
    - a test passes but it should've failed

### How to Read a Paper

- key contributions
- limitations
- replicate or extend
- three-pass approach
  1. Rough overview (10 minutes)
      - Title, Abstract, Introduction
      - Read section and subsection headings
      - Read conclusion
  2. ??? see slides
  3. ???

[An Empirical Study of the OpenStack Community](https://rebels.cs.uwaterloo.ca/papers/ase2023_maipradit.pdf)

- Q1: The recheck command is used to rebuild without updating code in the discussion thread
- Q2 42% of rebuilds pass
- Q3: Justifiable waste is one recheck (that changes the status). 24% rechecks were justifiable (16.78 years of computational time out of 187.4 years)
- Q4: understanding how to reduce these wastes by better handling failed CI builds, further studies for better identification and awareness of such resource waste to developers, and tool support to reduce the waste produced by repeated rebuilds.

### CI Resources are a shared commodity

- build minutes
- user seats
- tragedy of the commons
  - unfettered access to a resource
  - no formal rules to regulate access
  - accelerated depreciation of a resource due to self-interest

Cost of rechecking

- OpenStack wasted: 187.4 build years
  - developer cost is 16.81 years waiting for re-checks
- precisions and recall

### CI Acceleration

- mitigating the re-check riot problem
- cloud-based CI solutions tacitly encourage wasteful behaviour
  - `runs-on: ubuntu-latest` (starting with a fresh container, no reusability)
    - a fresh copy is cloned (wasteful bandwith)
- Does every change require a CI run?
  - Updates to comments in the code
  - Only updates the README.md
  - Changes an area not tested by the CI test suite
- Existing solutions
  - CI skip
  - Github allows devs to indicate change sets that do not require a build
  - Magic phrase in the commit message [github: skipping workflow runs](https://docs.github.com/en/actions/managing-workflow-runs/skipping-workflow-runs)

[Which Commits Can Be CI Skipped?](https://ieeexplore.ieee.org/abstract/document/8633335)

- Our findings show that our rule-based technique can detect and label CI commits with an Areas Under the Curve between 0.56 and 0.98 (average of 0.73)
- On average, 18.16% of commits are skipped
- [CI-Skipper prototype](https://github.com/suhaibmujahid/ci-skipper)
  - Feb 2017
- TravisTorrent Dataset
- Need to create rules to skip CI on commits
- Security implications?

- Q1. Rules derived based on commits that were explicitly skipped by real developers
- Q2. 0.73 (false positives against false negatives)
- Q3. impact of source code analysis on ci-skipper, build commits are predicted to be CI skip commits but they result in fail builds, machine learning techniques

- Precision (noise in signal) = (true positive) / (true positive + false positive)
- Recall (completeness / end goal) = (true positives) / (true positives + false negatives)
- `f1 = 2 * (p * r) / (p + r)`
  - tp vs fp (receiver operator characteristic curve)
- an AUC sets a coin flip to 0.5, so we know that the classifier is better when it is greater than 0.5

[A Machine Learning Approach to Improve the Detection of CI Skip Commits](https://ieeexplore.ieee.org/abstract/document/8961089)

- Decision trees were used to produce classifiers. Why? Average AUC equal to 0.89
- F1-score of 0.79 (AUC = 0.89), on average. This improvement equates to an average   improvement of 2.4X
- cross-project classifier has as 1.5X over baseline
  - baseline is the ratio of CI skip commits in the studied projects
- within project means tested on ourselves (past to future) whereas cross-project means trained on one project and used on another

[A cost-efficient approach to building in continuous integration](https://dl.acm.org/doi/pdf/10.1145/3377811.3380437)

- costs millions of dollars to Mozilla and Google
- the value is letting developers find bugs early
- want to fail builds as early as possible
- SmartBuildSkip: prediction
  - first failure means later builds are more likely to fail

### Review Session

-
