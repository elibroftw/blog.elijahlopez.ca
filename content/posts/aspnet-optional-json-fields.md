---
title: "ASP.NET Optional Json Fields"
date: 2023-01-29T14:03:20-05:00
draft: false
tags: [
    "programming",
    "tutorial",
    "c#",
    "asp.net",
]
---

Also featured: enum to string.

<details>
<summary>Fields</summary>

Since System.Text.Json is only

|           Field             | Description  |
| ------------------------- | ---------------- |
Always                     | Property is always ignored.
Never                       | Property is always serialized and deserialized, regardless of IgnoreNullValues configuration.
WhenWritingDefault | Property is ignored only if it equals the default value for its type.
WhenWritingNull      | Property is ignored if its value is null. This is applied only to reference-type properties and fields.

For readers in a decade or so, see [JsonIgnoreCondition](https://learn.microsoft.com/en-us/dotnet/api/system.text.json.serialization.jsonignorecondition#fields)

</details>

```c#
using System.Text.Json.Serialization;

namespace MyApi.Models {
    public enum LoginErrors {
        InvalidEmail,
        TooManyRequests,
    }

    public class StartLoginResponse {
        [JsonConverter(typeof(JsonStringEnumConverter))]
        // this right here:
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
        public LoginErrors? Error { get; set; }
    }
}
```
