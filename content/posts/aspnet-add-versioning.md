---
title: "ASP.NET Core Add Versioning"
date: 2024-03-07T02:05:53-05:00
draft: false
tags:
  - programming
  - tutorial
  - c-sharp
  - asp.net
---

### Introduction

This tutorial will save you 5 hours. I don't know when I started adding API version support to my ASP.NET project, but I can tell you that the current documentation is atrocious if you strive for perfection like I do.

As our mobile application is about to have an official MVP release, I wanted to fix the Stripe payment intent method "invoice." Currently, the invoice method would only return the client secret, but the official docs suggest to return the customer ID and a ephemeral key in addition to the payment intent client secret. I had two options. Either break current builds in use because you know its only beta testing anyways, or I can use this as an opportunity to add API versioning. There's two main ways to do API versioning in my eyes. The first way, which is what I thought I would've added in the future, is to be one of those companies with apis like `/v2/my-api` but then I found out about header APIs where the client can just add a header. This saves a lot of time because first of all, most of my apis were `/api` not `/v1/api` and the client was already calling without a version. I want an easy way to just switch the default version to `v2` so I went with reading the API version from the header.

After hours of consulting Gemini, the official docs, and examples, and personal touches, I present the absolutely bare minimum way to add versioning to your ASP.NET application.

### NuGet Packages

Either go to Manage Nuget Packages or use the CLI to install `Asp.Versioning.Mvc.ApiExplorer`

`nuget install Asp.Versioning.Mvc.ApiExplorer`

### Program.cs

Note that by default, ASP.NET will set each route as version 1 unless otherwise defined. Also note that if a client does not specify a version, the version 1 route will be used by default.

```cs
builder.Services.AddApiVersioning(options => {
    options.DefaultApiVersion = new ApiVersion(1, 0);
    options.AssumeDefaultVersionWhenUnspecified = true;
    options.ApiVersionReader = new HeaderApiVersionReader("x-ms-version");
    options.ReportApiVersions = true;
    options.UnsupportedApiVersionStatusCode = 501;
})
// format the version as "'v'major[.minor][-status]"
.AddApiExplorer(options => {
    options.GroupNameFormat = "'v'VVV";
});
```

### ProgramAuxiliary.cs

The following code allows the Swagger UI to work with the versioning.

Some of this code might be unused, this is because in my own `ProgramAuxiliary.cs`, I also have the code to enable [kebab case routes](/posts/aspnet-kebab-case-routes/).

```cs
// ProgramAuxiliary.cs is a supplementary to the startup code in Program.cs where this file contains some boilerplate to provide abstraction
using Asp.Versioning.ApiExplorer;
using Microsoft.AspNetCore.Mvc.ApiExplorer;
using Microsoft.AspNetCore.Mvc.ModelBinding;
using Microsoft.Extensions.Options;
using Microsoft.OpenApi.Models;
using Swashbuckle.AspNetCore.SwaggerGen;
using System.Text.Json;
using System.Text.RegularExpressions;

namespace SttApi;

// all I know is that this is related to making swagger work with different versions of the API
public class ConfigureSwaggerOptions(IApiVersionDescriptionProvider provider) : IConfigureOptions<SwaggerGenOptions> {
    readonly IApiVersionDescriptionProvider _provider = provider;
    readonly string _apiName = "Split The Tank";

    public void Configure(SwaggerGenOptions options) {
        foreach (var description in _provider.ApiVersionDescriptions) {
            options.SwaggerDoc(
              description.GroupName,
                new OpenApiInfo() {
                    Title = $"{_apiName} API {description.ApiVersion}",
                    Version = description.ApiVersion.ToString(),
                });
        }
    }
}

// All I know is that this bunch of code is related to making sure the API version is set in the header by default
public class SwaggerDefaultValues : IOperationFilter {
    /// <inheritdoc />
    public void Apply(OpenApiOperation operation, OperationFilterContext context) {
        var apiDescription = context.ApiDescription;

        operation.Deprecated |= apiDescription.IsDeprecated();

        // REF: https://github.com/domaindrivendev/Swashbuckle.AspNetCore/issues/1752#issue-663991077
        foreach (var responseType in context.ApiDescription.SupportedResponseTypes) {
            // REF: https://github.com/domaindrivendev/Swashbuckle.AspNetCore/blob/b7cf75e7905050305b115dd96640ddd6e74c7ac9/src/Swashbuckle.AspNetCore.SwaggerGen/SwaggerGenerator/SwaggerGenerator.cs#L383-L387
            var responseKey = responseType.IsDefaultResponse ? "default" : responseType.StatusCode.ToString();
            var response = operation.Responses[responseKey];

            foreach (var contentType in response.Content.Keys) {
                if (!responseType.ApiResponseFormats.Any(x => x.MediaType == contentType)) {
                    response.Content.Remove(contentType);
                }
            }
        }

        if (operation.Parameters == null) return;

        // REF: https://github.com/domaindrivendev/Swashbuckle.AspNetCore/issues/412
        // REF: https://github.com/domaindrivendev/Swashbuckle.AspNetCore/pull/413
        foreach (var parameter in operation.Parameters) {
            var description = apiDescription.ParameterDescriptions.First(p => p.Name == parameter.Name);

            parameter.Description ??= description.ModelMetadata?.Description;

            if (parameter.Schema.Default == null && description.DefaultValue != null &&
                 description.DefaultValue is not DBNull && description.ModelMetadata is ModelMetadata modelMetadata) {
                // REF: https://github.com/Microsoft/aspnet-api-versioning/issues/429#issuecomment-605402330
                var json = JsonSerializer.Serialize(description.DefaultValue, modelMetadata.ModelType);
                parameter.Schema.Default = OpenApiAnyFactory.CreateFromJson(json);
            }

            parameter.Required |= description.IsRequired;
        }
    }
}
```

### Controller Sample

```cs
[Route("[controller]/[action]")]
[ApiController]
[Authorize]
// since we are defining a version 2, we want to inform ASP.NET that the other routes are version 1, you can experiment without this at first just to see the result
[ApiVersion(1.0)]
public class PaymentController : ControllerBase {
  // this is Version 1
  [HttpGet]
  public async Task<ActionResult<string>> Invoice(string payee) {
      // implementation omitted
  }

  [HttpGet]
  [ApiVersion(2.0)]
  [ActionName(nameof(Invoice))]
  public async Task<ActionResult<PaymentSheetProps>> InvoiceV2(string payee) {
      // implementation omitted
  }
}
```

```cs
// gate-keep entire API to reduce possibility of unofficial clients
[Route("[controller]/[action]")]
[ApiController]
[Authorize]
public class CarsController : Controller {
    private readonly CarService _carService;

    public CarsController(CarService carService) {
        _carService = carService;
    }
    // this is implicitly Version 1
    [HttpGet]
    public async Task<List<OwnedCar>> Owned() {
        var cars = await _carService.GetOwned(User.FindFirstValue(ClaimTypes.Email)!);
        return cars!;
    }
}
```

### Client Sample

In the future, I will provide samples in Kotlin and Swift as well. For now, here's a JS implementation. Just use an LLM to get code for the language of the client you are writing.

```js
// note that jwtFetch is just a wrapper around fetch that does auto logging out and .json() conversion when application
export async function paymentInvoice(jwt, logout, payee) {
  const response = await jwtFetch(`payment/invoice?payee=${payee}`, logout, {
    method: 'GET',
    headers: { ...buildAuthHeader(jwt), 'x-ms-version': '2.0' },
  });
  return response;
}
```
