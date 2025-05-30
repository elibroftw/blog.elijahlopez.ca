---
title: "How to Ignore Value Properties in Javers"
date: 2020-07-18T11:19:04-05:00
draft: false
summary: "Learn how to ignore specific object properties during comparison in Java Javers. Discover how to use custom entities and the registerValueObject method to efficiently exclude fields like 'lastUpdated' from diffs."
---

If you just want the solutions, look at the first and last code blocks. Read the whole article if you want some storytelling. Please comment if you have any feedback.

At work one day, my task was to ignore certain properties of objects when they were being compared. Suppose the object, e.g. custom vertex, had properties `{ lastUpdated, color, x, y, z, comments }`.
If one was comparing objects of these properties, one might not want the fields "lastUpdated" and "comments" to be involved since they are metadata and not practical properties.
I quickly learned that [Javers](https://javers.org/) was being used in creating these diff objects. After reading the documentation, I came across the `@DiffIgnore` annotation that could be used in the objects implementation to specify properties to ignore.

{{< gist elibroftw 159978a1b3d2c16fbcbc3c3c6e71fb48 >}}

The only problem with this is that I did not implement the objects I was using! The object's I was using were imports so I hit a roadblock.
One solution I did think of was to first get the changes with those properties I didn't want, and then remove them from the original changes list. Of course I'd have to make a copy of the changes list since the return value of `getChanges` is not modifiable.

{{< gist elibroftw 02ada4d55c06fc5851225bebe3a3c997 >}}

If you always think of efficiency, you'll see that this solution is grossly inefficient even if it does get the work done. If only there was some way for the unwanted changes to not even exist in the first place.

I did a lot of reading and came across custom entities. When you are creating a Javers object, you can add objects to it with ignored properties.
This works for some objects but I quickly learned that what I needed was to specify a value object not an Entity object as the latter requires an IdPropertyName.
So after going to Stack Overflow and sorting questions for Javers by new I came across a comment that told the OP use registerValueObject.
I searched it up and sure enough, it was exactly what I needed. Here's how you would use it:

{{< gist elibroftw 1c266ff334d5afd81c690d3848c31e70 >}}

## Resources

[Javers Documentation](https://javers.org/documentation/)
[Stack Overflow Javers tag](https://stackoverflow.com/questions/tagged/javers)
