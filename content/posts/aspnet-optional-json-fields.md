---
title: "ASP.NET Core Optional Json Fields"
date: 2023-01-29T14:03:20-05:00
draft: false
tags:
  - programming
  - tutorial
  - c-sharp
  - asp.net
summary: "Handle optional JSON fields and serialize enums as strings in ASP.NET Core. Configure `JsonSerializerOptions` globally or use attributes for precise control over JSON output."
---

Also featured in this article is enum to string converter.

## ASP.NET Backend

```cs
builder.Services.AddControllersWithViews(options => {
            options.Conventions.Add(new RouteTokenTransformerConvention(
                                         new SlugifyParameterTransformer()));

        }).AddJsonOptions(options => {
            options.JsonSerializerOptions.NumberHandling = JsonNumberHandling.AllowReadingFromString;
            options.JsonSerializerOptions.PropertyNamingPolicy = JsonNamingPolicy.CamelCase;               // JSON response is in  camelCase
            options.JsonSerializerOptions.DefaultIgnoreCondition = JsonIgnoreCondition.WhenWritingNull;  // null not serialized
            options.JsonSerializerOptions.Converters.Add(new JsonStringEnumConverter());                        // enums to string
            //  options.JsonSerializerOptions.IncludeFields = true;  // if you want to [de]serialize fields (i.e. get or set are omitted in the class)
        });
```

## Client Side

```cs
internal class Api {
    // Insert variables below here
    protected static HttpClient _client;
    protected static string BASE_URL = "http://10.0.2.2:5284/";
    // protected static string BASE_URL = "https://api.domain.com/";
    private static readonly ILogger _logger = typeof(Api).Log();
    private static JsonSerializerOptions _serializerOptions;

    static Api() {
        _client = new HttpClient();
        _serializerOptions = new() {
            PropertyNamingPolicy = JsonNamingPolicy.CamelCase,
            DefaultIgnoreCondition = JsonIgnoreCondition.WhenWritingNull
        };
        _serializerOptions.Converters.Add(new JsonStringEnumConverter());
    }

    public string serializePayload<T>(T value) {
        return JsonSerializer.Serialize(value, _serializerOptions);
    }

    public T deserializePayload<T>(string payload) {
        return JsonSerializer.Deserialize<T>(payload, _serializerOptions);
    }
}
```

### Generalized

<details>
<summary>Fields</summary>

|           Field               | Description  |
| --------------------------- | ---------------- |
| Always                      | Property is always ignored |
| Never                        | Property is always serialized and deserialized, regardless of IgnoreNullValues configuration |
| WhenWritingDefault  | Property is ignored only if it equals the default value for its type |
| WhenWritingNull       | Property is ignored if its value is null. This is applied only to reference-type properties and fields |

For readers in a decade or so, see [JsonIgnoreCondition](https://learn.microsoft.com/dotnet/api/system.text.json.serialization.jsonignorecondition#fields)

</details>

<br>

```c#
using System.Text.Json.Serialization;

namespace MyApi.Models;

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
```
