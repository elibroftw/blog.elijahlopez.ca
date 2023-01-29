---
title: "ASP.NET Serialize Enum as String"
date: 2023-01-29T14:05:19-05:00
draft: false
tags: [
    "programming",
    "tutorial",
    "c#",
    "asp.net",
]
---

```c#
using System.Text.Json.Serialization;

namespace MyApi.Models {
    public enum LoginErrors {
        InvalidEmail,
        TooManyRequests,
    }

    public class StartLoginResponse {
        // this right here:
        [JsonConverter(typeof(JsonStringEnumConverter))]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
        public LoginErrors? Error { get; set; }
    }
}
```
