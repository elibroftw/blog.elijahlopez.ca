---
title: "ASP.NET Add Html to Web Api"
date: 2023-07-15T12:45:48-04:00
draft: false
tags: [
    "programming",
    "tutorial",
    "c-sharp",
    "asp.net",
    "html",
    "webdev",
]
---

Suppose you wanted to add html to your asp.net web api project, how would you go about it?

Sure you may just [write the HTML](https://stackoverflow.com/questions/26822277/return-html-from-asp-net-web-api) in the controller, but that's not good enough if you want to return an actual webpage.

We need to integrate Razor pages to our application. In `Program.cs`,

```cs
builder.Services.AddRazorPages();  // add this
builder.Services.AddHttpContextAccessor();  // add this
var app = builder.Build();

app.MapControllers();
app.MapRazorPages(); // add this, it doesn't matter if it is before or after MapControllers
app.Run();
```

Suppose we want to serve a page for website.com/about

In your project folder, create `Pages/About.cshtml`

```cshtml
@page
@inject Microsoft.AspNetCore.Http.IHttpContextAccessor HttpContextAccessor

<!DOCTYPE html>
<style>
    @Html.Raw("@")media only screen and (min-width: 950px) {
        .center {
            width: 30%;
        }
    }
</style>

<a href="@(HttpContextAccessor.HttpContext.Request.Path)@(HttpContextAccessor.HttpContext.Request.QueryString.ToUriComponent())">This pages url</a>
<p>a get request query for field name: @HttpContextAccessor.HttpContext.Request.Query["name"]</p>
```

### How to escape @ in Razor Pages (cshtml)

To escape the @ in Razor pages, use `@Html.Raw("@")`.
