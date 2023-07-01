---
title: "ASP.NET Core JWT Authorization"
date: 2023-05-03T13:14:55-04:00
draft: false
tags: [
    "programming",
    "tutorial",
    "c#",
    "asp.net",
]
---

Don't feel like explaining my code, so just copy and modify it for yourself as I can assure you it's one of the cleanest you can find.

I removed my login handling code since you can do that yourself. My login code was send login code to email via postmark and verify it. I was also using a MongoDB database.

The project is called "SttApi" so replace that with your own project name.

<details><summary>appsettings.json</summary>

```json
{
    ...
    "Jwt": {
        "Key": "Generate 22-length secret using Python secrets or something",
        "Issuer": "https://localhost:44355/",           // url of the project, am using development settings
        "Audience": "https://localhost:44355/"
    }
}
```

</details>

<details><summary>Program.cs</summary>

```cs
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.IdentityModel.Tokens;
using Microsoft.OpenApi.Models;

//  ---------------- OTHER CODE ----------------

public static void Main(string[] args) {
        var builder = WebApplication.CreateBuilder(args);

        //  ---------------- OTHER CODE ----------------

        // Swagger UI Authorization
        builder.Services.AddSwaggerGen(option => {
            option.AddSecurityDefinition("Bearer", new OpenApiSecurityScheme {
                In = ParameterLocation.Header,
                Description = "Please enter a valid token",
                Name = "Authorization",
                Type = SecuritySchemeType.Http,
                BearerFormat = "JWT",
                Scheme = "Bearer"
            });
            option.AddSecurityRequirement(new OpenApiSecurityRequirement{{
                        new OpenApiSecurityScheme { Reference = new OpenApiReference {
                                Type=ReferenceType.SecurityScheme,
                                Id="Bearer"
                            }},
                        new string[]{}
                    }
                });
        });

        //JWT Authentication
        builder.Services.AddAuthentication(JwtBearerDefaults.AuthenticationScheme).AddJwtBearer(options => {
            options.TokenValidationParameters = new TokenValidationParameters {
                ValidateIssuer = true,
                ValidateAudience = true,
                ValidateLifetime = true,
                ValidateIssuerSigningKey = true,
                ValidIssuer = builder.Configuration["Jwt:Issuer"],
                ValidAudience = builder.Configuration["Jwt:Audience"],
                IssuerSigningKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(builder.Configuration["Jwt:Key"]))
            };
        });
    //  ---------------- OTHER CODE ----------------
    var app = builder.Build();
    //  ---------------- OTHER CODE ----------------
}
//  ---------------- OTHER CODE ----------------
```

</details>

<details><summary>AuthController.cs</summary>


```cs
// Controllers/AuthController.cs
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Security.Claims;
using System.Text;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.IdentityModel.Tokens;
using SttApi.Models;
using SttApi.Services;

// Controller for handling user signup and login with code sent to email
// https://learn.microsoft.com/en-ca/aspnet/core/tutorials/first-mongo-app?WT.mc_id=dotnet-35129-website&view=aspnetcore-7.0&tabs=visual-studio
// https://learn.microsoft.com/en-ca/aspnet/core/tutorials/first-web-api?view=aspnetcore-7.0&tabs=visual-studio

namespace SttApi.Controllers;

[ApiController]
[Route("[controller]/[action]")]
public class AuthController : ControllerBase {
    private readonly SigningCredentials credentials;
    private readonly string jwtIssuer;
    private readonly string jwtAudience;
    private readonly JwtSecurityTokenHandler jwtSecurityTokenHandler;

    public AuthController(IConfiguration config) {
        jwtIssuer = config["Jwt:Issuer"];
        jwtAudience = config["Jwt:Audience"];
        jwtSecurityTokenHandler = new JwtSecurityTokenHandler();
        var securityKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(config["Jwt:Key"]));
        credentials = new SigningCredentials(securityKey, SecurityAlgorithms.HmacSha256);
    }

    [HttpPost]
    public string Login() {
        // LOGIN VERIFICATION CODE GOES HERE
        //  in general you will have to add a RequestBody parameter (just a Class)
        //  and you will need to make the return type another class
        // you will also most likely need to return Task<ResponseType> because of await/async usages
        //  and JsonWebToken will be just a field of that type
        return GenerateToken("email");
    }

#if DEBUG
    [HttpGet]
    [Authorize(Roles = "User")]
    public string TestAuthorization() {
        var email = User.FindFirstValue(ClaimTypes.Email);
        return $"Your email is {email}";
    }
#endif

    private string GenerateToken(string email) {
        var claims = new[] { new Claim(ClaimTypes.Email, email), new Claim(ClaimTypes.Role, "User") };
        var token = new JwtSecurityToken(jwtIssuer, jwtAudience, claims, signingCredentials: credentials);
        // client needs to save JWT as well incldue it in the Authorization Bearer Token header of subsequent requests
        return jwtSecurityTokenHandler.WriteToken(token);
    }
}
```

DO NOT USE JwtRegisteredClaimNames AS YOU WILL SPEND OVER AN HOUR DEBUGGING ISSUES!!

</details>

## Gate-keeping Routes and Reading User Claims

I'm making this separate because it's a common issue and the following way is the best way to get a claim. You can use `[Authorize(Roles = "...")]` in order to gate keep a single route or all routes of a controller (put the macro before the controller in the latter case).

This is a method I have in my auth controller for faster debugging since I'm doing backend and frontend for a new project.

```cs
#if DEBUG
    [HttpGet]
    [Authorize(Roles = "User")]
    public string TestAuthorization() {
        // JwtRegisteredClaimNames
        var email = User.FindFirstValue(ClaimTypes.Email);
        return $"Your email is {email}";
    }
#endif
```
