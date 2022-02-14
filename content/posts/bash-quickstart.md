---
title: "Bash Quickstart"
date: 2022-01-26T12:38:14-05:00
draft: false
---

## Strings

```bash
$text="hello"
$ext="txt"
str_concat="$text.$ext"
str_concat2="$text .$ext"

# lesson: always use [[ ]] with string variables to avoid runtime errors
if [[ $str_concat = "hello .txt" ]]; then
    echo "preferred method"
fi
# you can also use double quotes, but it's not as clean imo
if [ "$str_concat" = "hello .txt" ]; then
    echo "option B, use double quotes"
fi

# this will result in too many arguments error
# if [ $str_concat2 = "hello .txt" ]; then
#     echo "not possible"
# fi

# this works only if the variable does not contain spaces
if [ $str_concat = "hello.txt" ]; then
    echo "works"
fi
```

## Loops and More Conditionals

```bash
# for loop examples
for var in 1 2 3 str1 str2 str3 $flag1 9 10; do
    echo $var
done

# range
for var in {1..10}; do
    echo $var
done

# for loop as while loop
# some math here too
counter=0
while [ $counter -lt 10 ]; do
    if [ $counter -eq 0 ]; then
        ((counter++))
        echo "counter+2=" $((++counter))
    elif [ $counter -lt 5 ]; then
        echo "less than 5"
    elif [ $counter -gt 5 ]; then
        echo "greater than 5"
    fi
done
```
