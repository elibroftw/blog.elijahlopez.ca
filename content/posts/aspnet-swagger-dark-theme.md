---
title: "ASP.NET Core Swagger Dark Theme"
date: 2023-06-02T12:49:14-04:00
draft: false
tags: [
    "tutorial",
    "asp.net",
]
---

_For the SEO_: How to add dark theme to Swagger UI ASP.NET? Follow these instructions.

If you have guidelines for other frameworks, feel free to email me your code so I can add it to the [README.md](https://github.com/elibroftw/SwaggerDark/tree/master)

There's two ways to accomplish this. One is to use serve static files and the other is to only serve the static file (through embedded resource). I'll give instructions just in case.

### Serving From an Embedded Resource

Create [ProjectName/Assets/SwaggerDark.json](https://github.com/elibroftw/SwaggerDark/blob/master/SwaggerDark.css) in your project. You need to create the asset folder if they do not exist.

In Program.cs:

```cs
using System.Reflection;

if (app.Environment.IsDevelopment()) {
            app.UseHttpLogging();
            app.UseSwagger();
            app.UseSwaggerUI(c => {
                c.EnableTryItOutByDefault();
                c.InjectStylesheet("/css/SwaggerDark.css");  // ADD THIS LINE
            });
            // add this:
            app.MapGet("/css/SwaggerDark.css", () => {
                var assembly = Assembly.GetExecutingAssembly();
                // SttApi to ProjectName
                return Results.Stream(assembly.GetManifestResourceStream("SttApi.Assets.SwaggerDark.css")!, "text/css");
            }).ExcludeFromDescription();
        }
```

In `ProjectName/ProjectName.csproj`:

```xml
<Project Sdk="Microsoft.NET.Sdk.Web">
    <!-- ... -->
    <ItemGroup>
        <!-- other embedded resources -->
        <EmbeddedResource Include="Assets/SwaggerDark.css" />
    </ItemGroup>
    <!-- ... -->
</Project>
```

### Serving From Static Folder

Create [ProjectName/wwwroot/css/SwaggerDark.json](https://github.com/elibroftw/SwaggerDark/blob/master/SwaggerDark.css) in your project. You need to create these folders if they do not exist. If you have guidelines for other frameworks, feel free to email me your code so I can add it to the [README.md](https://github.com/elibroftw/SwaggerDark/tree/master)

In Program.cs:

```cs
app.UseStaticFiles();  // ADD THIS LINE
if (app.Environment.IsDevelopment()) {
            app.UseHttpLogging();
            app.UseSwagger();
            app.UseSwaggerUI(c => {
                c.EnableTryItOutByDefault();
                c.InjectStylesheet("/css/SwaggerDark.css");  // ADD THIS LINE
            });
        }
```

You may need to hard restart your app for the changes to take effect.

![Screenshot 1 of Swagger Dark Theme](https://raw.githubusercontent.com/Amoenus/SwaggerDark/master/SwaggerDark.png "Swagger Dark Theme Screenshot 1")

![Screenshot 2 of Swagger Dark Theme](https://raw.githubusercontent.com/elibroftw/SwaggerDark/master/SwaggerDark2.png "Swagger Dark Theme Screenshot 2")
