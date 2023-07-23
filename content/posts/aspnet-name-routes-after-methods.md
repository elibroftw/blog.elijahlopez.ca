---
title: "ASP.NET Core Name Routes After Methods"
date: 2023-05-28T18:10:09-04:00
draft: false
tags: [
    "programming",
    "tutorial",
    "c-sharp",
    "asp.net",
]
---

Suppose you want to avoid using decorators for every public method you write and you just want the route to following the same convention as your methods in your controller.
Adapt the following for your own use. The Route decorator indicates that the route for the following will be `auth/request-token` if your API is using the [kebab-case route configuration](/posts/aspnet-kebab-case-routes). If you aren't using kebab-case routing, then the expected route below would be something like `Auth/RequestToken`.

NOTE: If you are writing a backend that serves a frontend (HTML or a webapp), then I suggest using an "api" prefix like so: `[Route("api/[controller]/[action]")]`.

```cs
[ApiController]
[Route("[controller]/[action]")]
public class AuthController : ControllerBase {
    // CODE
    [HttpGet]
    public async Task<RequestTokenResponse> RequestToken(string email) {
        // CODE
    }
}
```
