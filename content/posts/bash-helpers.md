---
title: "Bash Helper Script (Thorough Example)"
date: 2022-01-26T12:38:14-05:00
draft: false
tags: [
    "tutorial",
    "programming",
    "bash",
]
---

It seems that many article tutorials on `bash` are ugly, are unoptimal, and do not get to the point. This tutorial is about parsing flags, and using the flag later. Remember, when using variables that could have spaces, use double quotes! `"$could_have_spaces"`.

## Argument Parsing, Conditionals, "Booleans," Loops, and Adding

Conditionals include if, elif (else if), and else. They also cover -eq, -ne, &&, ||.

```bash
flag1=false
flag_override=false
last_arg=""
# I think getopts is overkill especially if the numbers of arguments varies

for arg in "$@"; do  # better to have do on the same line than a newline
    if [ "$arg" -eq "--flag1" ] || [ "$arg" -eq "--flag" ]; then
        # if OR
        flag1=true
    elif [ "$arg" -eq "--override" ] && [ "$last_arg" -eq "" ]; then
        # else if AND
        flag_override=true
    else
        # do something with normal arguments here
        # e.g. get line count of arg.
        wc -l "$arg"
        last_arg="$arg"
    fi  # end of if statement
done  # signify end of for or while loop

for var in 1 2 3 str1 str2 str3 $flag1 9 10; do
    echo $var
done

# less typing for loop using while
counter=0
while [ counter -ne 10 ]; do
    # conditionals for "booleans"
    if [ $flag_override = true ]; then
        # MATH
        # this ++ will not affect the next loop
        ((counter++))
        echo $counter
        str_concat="+$flag_override.$counter"
    elif [ $flag1 = false ]; then
        # use $ for printing math
        echo $((++counter))
    else
        str_concat="+$flag_override.$counter"
    fi
done
```
