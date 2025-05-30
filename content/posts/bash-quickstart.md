---
title: "Bash Quickstart"
date: 2022-01-26T12:38:14-05:00
tags:
  - tutorial
  - programming
  - devops
  - bash
summary: "A concise Bash quickstart guide. It provides links to a Bash scripting cheatsheet and other Bash helpers. Key examples include the shebang (`#!/usr/bin/env bash`), iterating through a literal array using a `for` loop, and demonstrating C-like increment logic with `((counter++))`."
---

Bookmark me!

- [Bash scripting cheatsheet](https://devhints.io/bash)
- [Bash helpers](/posts/bash-helpers)

The shebang.

```bash
#!/usr/bin/env bash
```

Iterating a literal array.

```bash
for var in 1 2 3 str1 str2 str3 $flag1 9 10; do
    echo $var
done
```

C-like ++ logic.

```bash
counter=0
((counter++))
echo "0 + 2 = $((++counter))"
```
