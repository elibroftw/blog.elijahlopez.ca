---
title: "C# Partial Json Deserialization"
date: 2024-03-24T13:57:58-04:00
draft: true
tags:
  - programming
  - tutorial
  - c-sharp
  - asp.net
---

<!-- { {< youtube TODO >} } -->

Suppose we wan to consume a REST API that has extra data for paging or something else but we just want to mutate or use the data portion.

```jsonc
{
  "_request_": {
    "url": "/collection",
    "count": 50,
    "pages": 20,
    "total": 200,
    "next": "/collection?page=:number",
    "prev": "/collection?page=:number",
    "first": "/collection?page=:number",
    "last": "/collection?page=:number"
  },
  "data": [
    {
      "id": 0,
      "name": "string"
    }
  ]
}
```

How do we only deserialize the data portion? I'll be showing a tutorial in the context of a backend developer writing your own user-facing REST API.
