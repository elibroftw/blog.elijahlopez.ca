---
title: "Rust: How to Make a Network Request"
date: 2022-12-06T16:56:25-05:00
draft: false
tags:
  - programming
  - tutorial
  - rust
  - rocket.rs
---

Add this to your [`Cargo.toml`](/posts/rust-getting-started.md) file

```toml
[dependencies]
reqwest = { version = "0.11.13", features = ["json"] }
serde_json = "1.0"
```

If you need to make a synchronous request, use the blocking feature and create a blocking client.
JSON is useful when you need to parse a JSON response with something like `serde_json::Value` or a Struct with the Deserialize derivation.

You should design your code to reuse clients as much as possible. In this code the

```rs
use serde_json::Value;
use reqwest;
use reqwest::Client;

// when making requests, try to use an existing client instead of creating a client or using the get method
async fn make_request(client: &Client) &rarr; Result<Value, reqwest::Error> {
    let url = "https://api.sampleapis.com/coffee/hot";
    let response = client.get(url).send().await?;
    let hot_coffees = response.json::<Value>().await;
    hot_coffees
}

// build a client with a user-agent since Client::new does not add a user-agent by default
// use a more sophisticated user-agent if you want to mimic a browser
let client = Client::builder().user_agent("reqwest").build().unwrap();
```

## Making Reqwest Within Rocket Backend

If you want to make outgoing requests while processing an incoming request in Rocket, you may want to use `State`. Here is an example.

<details>
<summary>Cargo.toml</summary>

```toml
[dependencies]
rocket = { version = "0.5.0-rc.2", features = ["json"] }
reqwest = { version = "0.11.13", features = ["json"] }
```

</details>

```rs
use serde_json::Value;
use rocket::State;
use rocket::response::status::NotFound;
use reqwest;
use reqwest::Client;

#[get("/")]
async fn index(client: &State<Client>) &rarr; Result<Value, NotFound<String>> {
    let url = "https://api.sampleapis.com/coffee/hot";
    let response = client.get(url).send().await.map_err(|e| Status::NotFound(e.to_string()))?;
    response.json::<Value>().await.map_err(|e| Status::NotFound(e.to_string()))
    // `result.map_err` is for E &rarr; F whereas `result.or_else` can turn an error into an ok
}

#[launch]
fn rocket() &rarr; _ {
    let client = reqwest::Client::builder().user_agent("reqwest").build().unwrap();
    rocket::build()
        .manage(client)
        .mount("/", routes![index])
}
```

I also recommend reading [json manipulation in Rust](/posts/rust-json-manipulation.md).
