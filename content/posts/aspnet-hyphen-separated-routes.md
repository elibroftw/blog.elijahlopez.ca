---
title: "ASP.NET Core Hyphen Separated (Kebab) Routes"
date: 2023-01-29T14:37:16-05:00
draft: false
tags:
  - programming
  - tutorial
  - c-sharp
  - asp.net
aliases:
    - /posts/aspnet-kebab-case/
    - /posts/aspnet-kebab-case-routes/
    - /posts/aspnet-hyphen-separated-case/
    - /posts/aspnet-dash-case/
summary: "Implement hyphen-separated (kebab-case) routes in ASP.NET Core 7.0 by creating a custom parameter transformer and adding it to your MVC conventions."
---

See [docs](https://learn.microsoft.com/aspnet/core/mvc/controllers/routing#use-a-parameter-transformer-to-customize-token-replacement) for the latest way to do it. Here is how you would do it for ASP.NET Core 7.0:

```c#
// Program.cs
// EXISTING IMPORTS
using System.Text.RegularExpressions;

namespace YourApi;

public class Program {
    public static void Main(string[] args) {
        // replace builder.Services.AddControllers() with the following
        builder.Services.AddControllersWithViews(options => {
            options.Conventions.Add(new RouteTokenTransformerConvention(new SlugifyParameterTransformer()));
        });
        // EXISTING CODE
    }
}

// https://learn.microsoft.com/aspnet/core/mvc/controllers/routing#use-a-parameter-transformer-to-customize-token-replacement
public class SlugifyParameterTransformer : IOutboundParameterTransformer {
    public string? TransformOutbound(object? value) {
        if (value == null) { return null; }

        return Regex.Replace(value.ToString(),
                                "([a-z])([A-Z])",
                                "$1-$2",
                                RegexOptions.CultureInvariant,
                                TimeSpan.FromMilliseconds(100)).ToLowerInvariant();
    }

}
```
