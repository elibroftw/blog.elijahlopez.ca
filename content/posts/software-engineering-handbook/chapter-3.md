---
title: "Chapter 3 - Version Control System (Git)"
date: 2025-03-05T15:50:15-05:00
draft: true
aliases: ["/posts/software-engineering-handbook/chapter-3"]
---

Now that you've learned how to program, you need to learn how to ensure your code is archived, backed up, and how you can collaborate with others.

> 3 months of code gone because of cursor

\- r/ChatGPTCoding post (I can't find the original post)

{{< toc >}}

- **Archiving versions** of source code
- Maintaining **historical information**
- Enable **collaboration**
- **Recovery**
- **Conserve disk space** since only one central point and VCS uses compression
- [Git](https://git-scm.com/) is a distributed version control system
- GitHub is a webapp to host git repositories and your software projects
  - Alternatively, you can use GitLab, which is more advantageous for self-hosting, which is useful for medium-sized businesses

### Installing Git

Install git using your package installer (for Windows, first use winget search and then install `Git.Git`)

### Git Operations

- `git init new-project`
  - Create a new local repo in the folder new-project
- `git init .`
  -Initialize the current directory as a git repo
- `git clone`
  - Online repo &rarr; Local repo
- Local
  - `git log`: view the log of the checked out revision
  - `git branch`: use to create a new branch
  - `git tag`: view tags
  - `git switch <branch>` : use to switch branches
  - `git checkout <commit>`: use to checkout a commit
  - `git restore -s <tree> -- <file>`: if you want a file to be restored to its version at another commit
- git diff [--staged]
- git add FILE
  - git reset FILE to remove changes
- git bare repository server
  - `git init --bare`

### Workflow Overview

### Problems with Merging

- if you merge a branch that points to an older commit:
  - could cause conflicts in the default branch
  - messes up the log because commits will have multiple parents (not that important)
- solution: git rebase
  - want to move the head to the latest of a branch
  - read my website's [advanced tips](#advanced-tips)

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
- `chmod u+x ./.git/hooks/commit-msg.sample`

Even if the software project build system enforces enabling hooks (e.g. husky for nodejs projects), git server hooks should always be used for verification.
Fortunately we are in an age, where platforms like GitHub and GitLab offer abstracted git server-side hooks, and offer features where you can run scripts, use plugins, use secrets, and interact with APIs (e.g. GitHub actions) in different git branches and commits when you push to the server.

- Problems with client-side hooks
  - not everyone will enable it
  - bad actors can turn off client-side hooks
- Solution: [server-side hooks](https://git-scm.com/book/en/v2/Customizing-Git-Git-Hooks#_server_side_hooks)

Hook name |  Description | Args
--------------- | ---------------- | --------
pre-receive | First script to run after a push from a client. Args are a list of references that are being pushed from **stdin** | NONE
update        | Run once for each branch that was updated. | BRANCH_NAME BRANCH_SHA-1_OLD BRANCH_SHA-1_NEW. Rejects only per branch.
post-receive | Runs after update completion, can be used to broadcast or create a new change | ???

## Advanced Tips

Even if you know git already, here are some [advanced git tips](https://elijahlopez.ca/resources/#git-advanced-tips) that I've had to use while collaborating with others or wanting to ensure that the git history is clean.

## Tutorial Workflow

Create a git repository called `playground`, push to GitHub, create a branch, commit your programming notes thus far, like the tutorials you were asked to program. For the shell script, read my advanced git tips to ensure that it remains executable.

[Chapter 4 - Introduction to Software Projects](/posts/software-engineering-handbook/chapter-4)
