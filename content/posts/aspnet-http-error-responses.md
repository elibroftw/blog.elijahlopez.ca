---
title: "ASP.NET Core HTTP Error Responses Best Practice?"
date: 2023-07-01T17:29:24-04:00
draft: false
tags:
  - programming
  - tutorial
  - c-sharp
  - asp.net
---

How do you return a bad request or an unauthorized response in ASP.NET while also being
able to return a strongly typed response? I present to you `ActionResult<T>`. Here
is an example of me using ActionResult to validate the request as well as to check authorization.
Since this is an example, is it not for copy-pasting but rather to show you how to use `ActionResult<T>` in practice.

```cs
// one of these is imports may be relevant
using System.Security.Claims;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

[HttpPost]
public async Task<ActionResult<string>> New(StartRideRequest startRideRequest) {
    var email = User.FindFirstValue(ClaimTypes.Email);
    if (email == null) return Unauthorized();
    if (!_dataValidationService.validCurrency(startRideRequest.Currency)) {
        HttpContext.Features.Set(new ArgumentException("invalid currency"));
        return BadRequest("invalid currency");
    }
    // ...
    return Ok("id");
}
```
