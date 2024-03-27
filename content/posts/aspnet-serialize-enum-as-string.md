---
title: "ASP.NET Core Serialize Enum as String"
date: 2023-01-29T14:05:19-05:00
draft: false
tags:
  - programming
  - tutorial
  - c-sharp
  - asp.net
---

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

```c#
using System.Text.Json.Serialization;

namespace MyApi.Models;

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
```
