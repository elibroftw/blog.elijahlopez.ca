---
title: "ASP.NET Core Serve Embedded Resource"
date: 2023-06-02T14:09:28-04:00
tags:
  - programming
  - tutorial
  - c-sharp
  - asp.net
---

You really shouldn't be serving static files from the server but rather a reverse proxy like NGINX or something like an S3 bucket. However, what if you are just doing some debugging? In that case, here are three examples of reading an embedded resource in different contexts.

The embedded resource that needs to be accessed are `SttApi/Assets/SwaggerDark.css`
and `SttApi/Assets/getmakes.json` where SttApi is the project name.

First we need to make the resource embedded. You can either do this through the properties panel in Visual Studio or by manually editing the `Proj/Proj.csproj` like so:

```xml
<Project Sdk="Microsoft.NET.Sdk.Web">
    <!-- ... -->
    <ItemGroup>
        <!-- other embedded resources -->
        <EmbeddedResource Include="Assets/getmakes.json" />
        <EmbeddedResource Include="Assets/SwaggerDark.css" />
    </ItemGroup>
    <!-- ... -->
</Project>
```

At least on Windows, it doesn't matter if the path separator is \ or /.

### Example 1 Program.cs

```cs
// Program.cs
using System.Reflection;
// scope skipped for conciseness
            app.MapGet("/css/SwaggerDark.css", () => {
                var assembly = Assembly.GetExecutingAssembly();
                return Results.Stream(assembly.GetManifestResourceStream("SttApi.Assets.SwaggerDark.css")!, "text/css");
            }).ExcludeFromDescription();
```

### Example 2 Controller.cs

```cs
// ExampleController.cs
using System.Reflection;
// scope skipped for conciseness
    [HttpGet]
    public IResult EmbeddedResource() {
        var assembly = Assembly.GetExecutingAssembly();
        return Results.Stream(assembly.GetManifestResourceStream("SttApi.Assets.SwaggerDark.css")!, "text/css");
    }
```

### Example 3 Service.cs

```cs
// ExampleService.cs
using System.Reflection;
// scope skipped for conciseness
    var assembly = Assembly.GetExecutingAssembly();
    IEnumerable<CarMake> carMakes = JsonSerializer.Deserialize<IEnumerable<CarMake>>(assembly.GetManifestResourceStream("SttApi.Assets.getmakes.json")!)!;
```
