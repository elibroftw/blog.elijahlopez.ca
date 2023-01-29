---
title: "Aspnet Kebab Case"
date: 2023-01-29T14:37:16-05:00
draft: false
tags: [
    "programming",
    "tutorial",
    "c#",
    "asp.net",
]
---

See [docs](https://learn.microsoft.com/en-us/aspnet/core/mvc/controllers/routing#use-a-parameter-transformer-to-customize-token-replacement) for the latest way to do it. Here is how you would do it for ASP.NET Core 7.0:

```c#
// IMPORTS
using System.Text.RegularExpressions;

namespace YourApi {
    public class Program {
        public static void Main(string[] args) {
            // replace builder.Services.AddControllers() with the following
            builder.Services.AddControllersWithViews(options => {
                options.Conventions.Add(new RouteTokenTransformerConvention(
                                             new SlugifyParameterTransformer()));
            });
            // EXISTING CODE
        }
    }

    // https://learn.microsoft.com/en-us/aspnet/core/mvc/controllers/routing#use-a-parameter-transformer-to-customize-token-replacement
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
}
```
