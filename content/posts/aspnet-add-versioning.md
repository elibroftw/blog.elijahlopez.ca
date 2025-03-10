---
title: "ASP.NET Core Add Versioning to Endpoints"
date: 2024-03-07T02:05:53-05:00
draft: false
tags:
  - programming
  - tutorial
  - c-sharp
  - asp.net
---

### Introduction

Applicable .NET versions: .NET 9, .NET 8.

- .NET 9 uses OpenAPI and Scaler (Swagger replacement) and requires hardcoding the versions in one file. I have provided a list of packages I installed in my project in case your project is missing a necessary package.
- .NET 8 does not need to hardcode the applicable versions, but does use Swagger.

This tutorial will save you ~5 hours. I don't know when I started adding API version support to my ASP.NET project, but I can tell you that the current documentation is atrocious if you strive for perfection like I do.

There are two main ways to do API versioning in my eyes. The first way, which is what I thought I would've added in the future, is to be one of those companies with apis like `/v2/my-api` but then I found out about header APIs where the client can select the version by using a header. This saves a lot of developing time because all of my endpoints were `/name` not `/v1/name` and there were already released/production clients which were calling them without a version specified in the header.

### NuGet Packages

In .NET 9, I needed the following Asp.Versioning packages

- Asp.Versioning.Http
- Asp.Versioning.Http.Client
- Asp.Versioning.Mvc.ApiExplorer
- Scalar.AspNetCore

You can either use VSCode's C# Dev Kit, Visual Studio's Nuget Packages UI, or the dotnet CLI to install these packages. For example, `dotnet add <PROJECT> package <PACKAGE_NAME>`

If you're using Visual Studio, you could also run `nuget install Asp.Versioning.Mvc.ApiExplorer`

## .NET 9 Versioning

In .NET 9, we no longer need a ProgramAuxiliary.cs.

<details><summary>OpenApi.Extensions.cs</summary>

```cs
using Asp.Versioning;
using Scalar.AspNetCore;

namespace SttApi;

public static partial class Extensions {
    public static IApplicationBuilder UseDefaultOpenApi(this WebApplication app) {
        var configuration = app.Configuration;
        var builder = app.MapOpenApi().CacheOutput();
        var scalerBuilder = app.MapScalarApiReference(options => {
            // Disable default fonts to avoid download unnecessary fonts
            options.DefaultFonts = false;
            options.Title = "Split The Tank API Reference";
            options.EnabledClients = [ScalarClient.Fetch, ScalarClient.HttpClient, ScalarClient.Nsurlsession, ScalarClient.OkHttp];
            // TODO: add default berar
            // TODO: order actions by
            //     options.OrderActionsBy(apiDesc => {
            //         var priority = apiDesc.ActionDescriptor.RouteValues["controller"]!.Contains("Debug") ? "_" : "";
            //         return $"{priority}{apiDesc.ActionDescriptor.RouteValues["controller"]}_{apiDesc.HttpMethod}";
            //     });
            // .WithHttpBearerAuthentication(bearer => bearer.Token = "");
        });
        if (app.Environment.IsDevelopment()) {
            app.MapGet("/", () => Results.Redirect("/scalar/v1")).ExcludeFromDescription();
        } else {
            // Return 404
            builder.RequireAuthorization("ApiDeveloperPolicy");
            scalerBuilder.RequireAuthorization  ("ApiDeveloperPolicy");
        }
        return app;
    }

    public static IHostApplicationBuilder AddDefaultOpenApi(
        this IHostApplicationBuilder builder,
        IApiVersioningBuilder? apiVersioning = default) {
        var openApi = builder.Configuration.GetSection("OpenApi");
        var identitySection = builder.Configuration.GetSection("Identity");

        var scopes = identitySection.Exists()
            ? identitySection.GetRequiredSection("Scopes").GetChildren().ToDictionary(p => p.Key, p => p.Value)
            : new Dictionary<string, string?>();

        if (apiVersioning is not null) {
            // the default format will just be ApiVersion.ToString(); for example, 1.0.
            // this will format the version as "'v'major[.minor][-status]"
            var versioned = apiVersioning.AddApiExplorer(options => options.GroupNameFormat = "'v'VVV");
            // Search code base for [ApiVersion(#.0)]
            string[] versions = ["v1", "v2"];
            foreach (var description in versions) {
                builder.Services.AddOpenApi(description, options => {
                    if (openApi.Exists()) {
                        options.ApplyApiVersionInfo(openApi.GetRequiredValue("Document:Title"), openApi.GetRequiredValue("Document:Description"));
                    }
                    options.ApplyAuthorizationChecks([.. scopes.Keys]);
                    options.ApplySecuritySchemeDefinitions();
                    options.ApplyOperationDeprecatedStatus();
                    options.ApplyApiVersionDescription();
                    options.ApplySchemaNullableFalse();
                    // Clear out the default servers so we can fallback to
                    // whatever ports have been allocated for the service by Aspire
                    options.AddDocumentTransformer((document, context, cancellationToken) => {
                        document.Servers = [];
                        return Task.CompletedTask;
                    });
                });
            }
        }

        return builder;
    }
}
```

</details>

This next file also includes Bearer Authentication information which is used by Scalar.

<details><summary>OpenApiOptionsExtensions.cs</summary>

```cs
using System.Text;
using Asp.Versioning.ApiExplorer;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc.ApiExplorer;
using Microsoft.AspNetCore.OpenApi;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Primitives;
using Microsoft.OpenApi.Any;
using Microsoft.OpenApi.Models;

namespace SttApi;

internal static class OpenApiOptionsExtensions
{
    public static OpenApiOptions ApplyApiVersionInfo(this OpenApiOptions options, string title, string description)
    {
        options.AddDocumentTransformer((document, context, cancellationToken) =>
        {
            var versionedDescriptionProvider = context.ApplicationServices.GetService<IApiVersionDescriptionProvider>();
            var apiDescription = versionedDescriptionProvider?.ApiVersionDescriptions
                .SingleOrDefault(description => description.GroupName == context.DocumentName);
            if (apiDescription is null)
            {
                return Task.CompletedTask;
            }
            document.Info.Version = apiDescription.ApiVersion.ToString();
            document.Info.Title = title;
            document.Info.Description = BuildDescription(apiDescription, description);
            return Task.CompletedTask;
        });
        return options;
    }

    private static string BuildDescription(ApiVersionDescription api, string description)
    {
        var text = new StringBuilder(description);

        if (api.IsDeprecated)
        {
            if (text.Length > 0)
            {
                if (text[^1] != '.')
                {
                    text.Append('.');
                }

                text.Append(' ');
            }

            text.Append("This API version has been deprecated.");
        }

        if (api.SunsetPolicy is { } policy)
        {
            if (policy.Date is { } when)
            {
                if (text.Length > 0)
                {
                    text.Append(' ');
                }

                text.Append("The API will be sunset on ")
                    .Append(when.Date.ToShortDateString())
                    .Append('.');
            }

            if (policy.HasLinks)
            {
                text.AppendLine();

                var rendered = false;

                foreach (var link in policy.Links.Where(l => l.Type == "text/html"))
                {
                    if (!rendered)
                    {
                        text.Append("<h4>Links</h4><ul>");
                        rendered = true;
                    }

                    text.Append("<li><a href=\"");
                    text.Append(link.LinkTarget.OriginalString);
                    text.Append("\">");
                    text.Append(
                        StringSegment.IsNullOrEmpty(link.Title)
                        ? link.LinkTarget.OriginalString
                        : link.Title.ToString());
                    text.Append("</a></li>");
                }

                if (rendered)
                {
                    text.Append("</ul>");
                }
            }
        }

        return text.ToString();
    }

    public static OpenApiOptions ApplySecuritySchemeDefinitions(this OpenApiOptions options)
    {
        options.AddDocumentTransformer<SecuritySchemeDefinitionsTransformer>();
        return options;
    }

    public static OpenApiOptions ApplyAuthorizationChecks(this OpenApiOptions options, string[] scopes)
    {
        options.AddOperationTransformer((operation, context, cancellationToken) =>
        {
            var metadata = context.Description.ActionDescriptor.EndpointMetadata;

            if (!metadata.OfType<IAuthorizeData>().Any())
            {
                return Task.CompletedTask;
            }

            operation.Responses.TryAdd("401", new OpenApiResponse { Description = "Unauthorized" });
            operation.Responses.TryAdd("403", new OpenApiResponse { Description = "Forbidden" });

            var oAuthScheme = new OpenApiSecurityScheme
            {
                Reference = new OpenApiReference { Type = ReferenceType.SecurityScheme, Id = "oauth2" }
            };

            operation.Security = new List<OpenApiSecurityRequirement>
            {
                new()
                {
                    [oAuthScheme] = scopes
                }
            };

            return Task.CompletedTask;
        });
        return options;
    }

    public static OpenApiOptions ApplyOperationDeprecatedStatus(this OpenApiOptions options)
    {
        options.AddOperationTransformer((operation, context, cancellationToken) =>
        {
            var apiDescription = context.Description;
            operation.Deprecated |= apiDescription.IsDeprecated();
            return Task.CompletedTask;
        });
        return options;
    }

    public static OpenApiOptions ApplyApiVersionDescription(this OpenApiOptions options)
    {
        options.AddOperationTransformer((operation, context, cancellationToken) =>
        {
            // Find parameter named "api-version" and add a description to it
            var apiVersionParameter = operation.Parameters.FirstOrDefault(p => p.Name == "api-version");
            if (apiVersionParameter is not null) {
                apiVersionParameter.Description = "The API version, in the format 'major.minor'.";
                var versionNumber = context.DocumentName.TrimStart('v');
                if (int.TryParse(versionNumber, out var version)) {
                    apiVersionParameter.Schema.Example = new OpenApiString($"{version}.0");
                } else {
                    throw new ArgumentException("got invalid document name {context.DocumentName}. Expected format v#");
                }
            }
            return Task.CompletedTask;
        });
        return options;
    }

    // This extension method adds a schema transformer that sets "nullable" to false for all optional properties.
    public static OpenApiOptions ApplySchemaNullableFalse(this OpenApiOptions options)
    {
        options.AddSchemaTransformer((schema, context, cancellationToken) =>
        {
            if (schema.Properties is not null)
            {
                foreach (var property in schema.Properties)
                {
                    if (schema.Required?.Contains(property.Key) != true)
                    {
                        property.Value.Nullable = false;
                    }
                }
            }

            return Task.CompletedTask;
        });
        return options;
    }

#pragma warning disable 9113
    private class SecuritySchemeDefinitionsTransformer(IConfiguration configuration) : IOpenApiDocumentTransformer {
#pragma warning restore 9113
        public Task TransformAsync(OpenApiDocument document, OpenApiDocumentTransformerContext context, CancellationToken cancellationToken) {
            document.Components ??= new();
            document.Components.SecuritySchemes.Add("Bearer", new OpenApiSecurityScheme {
                In = ParameterLocation.Header,
                Description = "Please enter a valid token",
                Name = "Authorization",
                Type = SecuritySchemeType.Http,
                BearerFormat = "JWT",
                Scheme = "Bearer"
            });
            return Task.CompletedTask;
        }
    }
}
```

</details>

<details><summary>Program.cs</summary>

```cs
    var apiVersioning = builder.Services.AddApiVersioning(options => {
                options.DefaultApiVersion = new ApiVersion(1, 0);
                options.AssumeDefaultVersionWhenUnspecified = true;
                options.ApiVersionReader = new HeaderApiVersionReader("x-ms-version");
                options.ReportApiVersions = true;
                options.UnsupportedApiVersionStatusCode = 501;
            });
    builder.AddDefaultOpenApi(apiVersioning);
    builder.Services.AddSingleton<IAuthorizationMiddlewareResultHandler, Show404AuthorizationMiddlewareResultHandler>();
    builder.Services.AddAuthorizationBuilder()
                .AddPolicy("ApiDeveloperPolicy", policy => policy.RequireRole(["developer"])
                .AddRequirements(new ProtectedEndpoint404()));
    // after app.MapControllers().WithStaticAssets();
    app.UseDefaultOpenApi();
```

</details>

<details><summary> ProgramAuxiliary</summary>

```cs
public class Show404AuthorizationMiddlewareResultHandler : IAuthorizationMiddlewareResultHandler {
    private readonly AuthorizationMiddlewareResultHandler defaultHandler = new();

    public async Task HandleAsync(
        RequestDelegate next,
        HttpContext context,
        AuthorizationPolicy policy,
        PolicyAuthorizationResult authorizeResult) {
        if (!authorizeResult.Succeeded && policy.Requirements.Any(p => p is ProtectedEndpoint404)) {
            // Return a 404 to make it appear as if the resource doesn't exist.
            context.Response.StatusCode = StatusCodes.Status404NotFound;
            return;
        }
        await defaultHandler.HandleAsync(next, context, policy, authorizeResult);
    }
}

public class ProtectedEndpoint404 : IAuthorizationRequirement { }
```

</details>

<details><summary>csproj Partial - Packages</summary>

```xml
<ItemGroup>
    <PackageReference Include="Asp.Versioning.Http" Version="8.1.0" />
    <PackageReference Include="Asp.Versioning.Http.Client" Version="8.1.0" />
    <PackageReference Include="Asp.Versioning.Mvc.ApiExplorer" Version="8.1.0" />
    <PackageReference Include="Microsoft.AspNet.WebApi.Client" Version="6.0.0" />
    <PackageReference Include="Microsoft.AspNetCore.Authentication.JwtBearer" Version="9.0.1" />
    <PackageReference Include="Microsoft.AspNetCore.Mvc.Testing" Version="9.0.1" />
    <PackageReference Include="Microsoft.AspNetCore.OpenApi" Version="9.0.1" />
    <PackageReference Include="Microsoft.Azure.AppConfiguration.AspNetCore" Version="8.0.0" />
    <PackageReference Include="Microsoft.Extensions.ApiDescription.Server" Version="9.0.1">
      <IncludeAssets>runtime; build; native; contentfiles; analyzers; buildtransitive</IncludeAssets>
      <PrivateAssets>all</PrivateAssets>
    </PackageReference>
    <PackageReference Include="Microsoft.Extensions.Configuration.Binder" Version="9.0.1" />
    <PackageReference Include="Microsoft.FeatureManagement.AspNetCore" Version="4.0.0" />
    <PackageReference Include="Microsoft.IdentityModel.Tokens" Version="8.3.1" />
    <PackageReference Include="Microsoft.VisualStudio.Azure.Containers.Tools.Targets" Version="1.21.0" />
    <PackageReference Include="MongoDB.Analyzer" Version="1.5.0" />
    <PackageReference Include="MongoDB.Driver" Version="3.1.0" />
    <PackageReference Include="Postmark" Version="5.2.0" />
    <PackageReference Include="Scalar.AspNetCore" Version="2.0.9" />
    <PackageReference Include="Stripe.net" Version="47.3.0" />
    <PackageReference Include="Swashbuckle.AspNetCore" Version="7.2.0" />
    <PackageReference Include="System.IdentityModel.Tokens.Jwt" Version="8.3.1" />
    <PackageReference Include="System.Text.Json" Version="9.0.1" />
  </ItemGroup>
```

</details>

## .NET 8 Versioning

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

### Controller Example

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

### Client Example

In the future, I will provide samples in Kotlin and Swift as well. For now, here's a JS implementation. Just use an LLM to get code for the language of the client you are writing.

```js
// note that jwtFetch is just a wrapper around fetch that does auto logging out and .json() conversion when applicable
export async function paymentInvoice(jwt, logout, payee) {
  const response = await jwtFetch(`payment/invoice?payee=${payee}`, logout, {
    method: 'GET',
    headers: { ...buildAuthHeader(jwt), 'x-ms-version': '2.0' },
  });
  return response;
}
```
