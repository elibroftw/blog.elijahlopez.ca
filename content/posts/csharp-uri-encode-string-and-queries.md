---
title: "C# How to Uri Encode Strings and Queries"
date: 2024-03-29T15:01:59-04:00
tags:
  - programming
  - tutorial
  - c-sharp
  - asp.net
summary: "Learn how to URI encode strings and query parameters in C# using `System.Uri.EscapeDataString`. This tutorial provides code examples for basic encoding and within an ASP.NET integration test."
---

Use [System.Uri.EscapeDateString](https://learn.microsoft.com/dotnet/api/system.uri.escapedatastring)

```cs
// using System;
var email = "email@gmail.com";
var url = $"/send-email?email={Uri.EscapeDataString(email)}";
```

In an ASP.NET Integration test:

```cs
[Fact]
public async Task TestPayouts() {
    var client = _factory.CreateClient();
    var url = $"/test/inc-payout?email={Uri.EscapeDataString(Constants.PAYOUT_TEST_ACCOUNT)}";
    var response = await client.PostAsync(url, null);

    response.EnsureSuccessStatusCode();
}
```
