---
title: "ASP.NET Core Global Json Options"
date: 2023-07-23T15:48:46-04:00
draft: false
tags:
  - tutorial
  - programming
  - c-sharp
  - asp.net
summary: "Explains how to access global JSON serializer options in ASP.NET Core using dependency injection for consistent serialization/deserialization outside of controllers."
---

When adding JSON options to an ASP.NET controller, these options do not apply to manual uses of the json serializer.
Therefore, if you want to use the same options for other serializing or deserializing, you can use dependency injection.

```cs
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Options;

namespace Api.Services;

public Constructor(IOptions<JsonOptions> jsonOptions) {
    var serializerOptions = jsonOptions.Value.JsonSerializerOptions;
}
```

If you don't know how to set default Json serializer options for the controller, read [ASP.NET Core Optional Json Fields](/posts/aspnet-optional-json-fields).

I'm not sure why this was a draft, but I made it public again.
