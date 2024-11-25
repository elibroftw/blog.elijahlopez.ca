---
title: "C# Partial Json Deserialization"
date: 2024-11-24T23:56:41-05:00
tags:
  - programming
  - tutorial
  - c-sharp
  - asp.net
---

<!-- { {< youtube TODO >} } -->

I started writing this article all the way back in March but only got to finishing it now since I needed it for an XUnit test I was writing.

Suppose we want to consume a REST API that has extra data for paging or something else but we just want to mutate or use the data portion.

```jsonc
{
  "_request_": {
    "url": "/collection",
    "count": 50,
    "pages": 20,
    "total": 200,
    "next": "/collection?page=:number",
    "prev": "/collection?page=:number",
    "first": "/collection?page=:number",
    "last": "/collection?page=:number"
  },
  "data": [
    {
      "id": 0,
      "name": "string"
    }
  ]
}
```

How do we only deserialize the `data` portion?

Relevant methods:

- [JsonNode.ParseAsync](https://learn.microsoft.com/en-us/dotnet/api/system.text.json.nodes.jsonnode.parseasync)
- [JsonNode.AsArray](https://learn.microsoft.com/en-us/dotnet/api/system.text.json.nodes.jsonnode.asarray)
- [JsonNode.AsObject](https://learn.microsoft.com/en-us/dotnet/api/system.text.json.nodes.jsonnode.asobject)

After using these methods to navigate the JSON, you can use deserialization methods or object instantiation to use types for the data you actually care about.

Real code example (not related to sample JSON).

```cs
var jsonObject = await JsonNode.ParseAsync(response.Content.ReadAsStream());
foreach (var car in jsonObject!["data"]!.AsArray()) {
    carModels.Add(new CarModel {
        TrimId = car!["id"]!.Deserialize<uint>(),
        TrimName = car["description"]!.ToString(),
        ModelName = car["make_model"]!["name"]!.ToString()
    });
}
```

Some notes regarding the code above: `CarModel` is defined elsewhere, Visual Studio will automatically add the necessary import statements, and it assumes that you already know how to make a request with error handling. If you are interested in how I consumed all the pages of this API, here is some more code.

```cs
uint page = 1, totalPages = 1;
List<CarModel> carModels = [];
while (page <= totalPages) {
    var requestUrl = $"trims?&page={page}&verbose=yes&limit=50&year={year}&make_id={makeId}";
    var request = new HttpRequestMessage(HttpMethod.Get, requestUrl);
    var response = await CarApiRequest(request);

    var jsonObject = await JsonNode.ParseAsync(response.Content.ReadAsStream());
    foreach (var car in jsonObject!["data"]!.AsArray()) {
        carModels.Add(new CarModel {
            TrimId = car!["id"]!.Deserialize<uint>(),
            TrimName = car["description"]!.ToString(),
            ModelName = car["make_model"]!["name"]!.ToString()
        });
    }
    totalPages = jsonObject["collection"]!["pages"]!.Deserialize<uint>();
    // Normally I would use the "next" property to figure out the next "resource" to request. However, with this particular API, their next URL was not correct (infinite loop), so I built the URL instead since I'm not delaying the time to release..
    // if (jsonObject["collection"]!["next"]!.AsValue().ToString() == "") break;
    page++;
}
```
