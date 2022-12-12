---
title: "Rust Json Manipulation"
date: 2022-12-06T17:23:13-05:00
draft: false
tags: [
    "programming",
    "tutorial",
    "rust",
]
---

We'll be doing this in the context of `rocket`.
If you are doing this outside the context of rocket replace `rocket::serde::json` with `serde_json` and add `serde_json` to you `Cargo.toml` file.

<details>
<summary>Cargo.toml</summary>

```toml
[dependencies]
rocket = { version = "0.5.0-rc.2", features = ["json"] }
serde = { version = "1.0", features = ["derive"] }
# serde_json = "1.0"
```

</details>

## Arbitrary JSON

```rs
use rocket::serde::json::{json, Value, Json};

#[get("/")]
fn index() -> Option<Value> {
    // Returns JSON if json manipulation succeeds, else 404

    // Assume that this response is from an API request
    let mut response = json!({
        "names": [
            {
                "first": "Elijah",
                "last": "Lopez",
            }
        ]
        // Assume there are a lot of extra fields we do not care about and thus to save time we do not bother with Structuring
    });
    // Let's add a name
    //      if the Structure already has a precise defintion, use Structs with the #[Serialize] macro to avoid .do_something()?
    response.as_object_mut()?["name"].as_array_mut()?.push(
        json!({
            // Disclosure: I made this name up. Turns out she is an actress.
            "first": "Rachel",
            "last": "Mathews"
        })
    );
    response
}

#[launch]
fn rocket() -> _ {
    rocket::build()
        .mount("/", routes![index])
}
```

## Defined Struct and Json

Assume that the API we are using only has a names field and that our endpoint just adds a name to that API.
Since the API response is very simple, we might as well create a Struct.

I tried to fiddle with using just &str for the Struct fields but got a lot of life time errors so I went with Cow (clone on write)
which takes care of cloning whenever we need to mutate a field.

```rs
use rocket::response::status::NotFound;
use rocket::serde::json::{json, Value, Json};
use serde::{Serialize, Deserialize};
use std::borrow::Cow;

#[derive(Serialize, Deserialize, Clone)]
struct Name<'r> {
    first: Cow<'r, str>,
    last: Cow<'r, str>
}

#[derive(Serialize, Deserialize, Clone)]
struct Names<'r>(Vec<Name<'r>>);

#[get("/get-api")]
async fn new_index(client: &State<Client>) -> Result<Json<Names<'_>>, NotFound<String>> {
    // make a request
    let response = client.get("url that returns a list of names").send().await.map_err(|e| NotFound(e.to_string()))?;
    let mut names = response.json::<Names<'_>>().await.map_err(|e| NotFound(e.to_string()))?;
    names.0.push(
        Name {
            first: "Rachel".into(),
            last: "Matthews".into()
        }
    );
    Ok(Json(names))
}

#[post("/post-api", data = "<names>")]
fn post_index(mut names: Json<Names<'_>>) -> Json<Names<'_>> {
    names.0.0.push(
        Name {
            first: "Rachel".into(),
            last: "Matthews".into()
        }
    );
    names
}

#[launch]
fn rocket() -> _ {
    rocket::build()
        .mount("/", routes![new_index, post_index])
}
```

TODO: use https://api.sampleapis.com/coffee/hot for a more complex example
