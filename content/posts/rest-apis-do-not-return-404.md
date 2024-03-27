---
title: "REST APIs: Do Not Return 404 When A Resource is Null"
date: 2024-03-27T10:35:26-04:00
draft: false
tags: [
    "programming",
    "tutorial",
    "backend",
]
---


Last year when I was implementing a get-status endpoint, I searched online whether I should return a 404 or null when the user has no active status. The reasons provided were not convincing but while debugging an error in my application recently (unrelated), even though I had logs set to error-only, that 404 error would still be seen! So here are the reasons why a REST API should return 204 (no content) or an empty/null response when there is no content.

## Reasons

### Reason 1 - Polluting the Error Log

The 404 error pollutes the error log from real errors and makes it hard to differentiate between the authentic errors and the intentional 404s.

### Reason 2 - Unnecessary Client-Side Error Handling Complications

There is added complexity in the client or consumer of the rest API. Instead of logging all errors the client has to make an exception for the 404 and what if there's a typo in the future? The error won't be caught then since it would be returning an authentic 404.

### Reason 3 - No Content 204 is a Better Alternative

One of the reasons I used 404 was because it made more sense from a language perspective of hey that resource doesn't exist! But this way of thing needs to be reframed. I know the endpoint exists, so the client is simply asking if there is anything to **report**.

A 204 is successful and and doesn't require an error message. The client can easily handle this status code without needing to change or make an exception to how they handle network errors.

## What is the Alternative?

Return a 204 status code is the alternative and works well when the mindset of thinking of the REST actions themselves as being the resources the client wants to interact with rather than the backend action being only a facilitator to a resource stored in the database.
