---
title: "Google Maps Search and Get Coordinates"
date: 2023-10-02T18:10:33-04:00
draft: true
tags:
  - tutorial
---

When reading the documentation for Google Maps Places autocomplete, under "optimizations", Google recommends using their geocode service instead of [Text Search](https://developers.google.com/maps/documentation/places/web-service/search-text) if you want to get the coordinates of the place.

In their own example on that page, Google is using the autocomplete API to search for locations, when all I needed was the place search API, specifically text search.

```js
const GOOGLE_MAPS_BASE = 'https://maps.googleapis.com/maps/api';
const GOOGLE_MAPS_API_KEY = 'https://console.cloud.google.com/apis/credentials';

// example code, remember to add error handling for your code
async function searchAndGetCoordExample() {
    const results = await placeSearch('Fiera Capital Toronto');
    const coordinates = [results[0].geometry.location.lat, results[0].geometry.location.lng];
}

export async function placeSearch({ query, language = 'en', limit = 10, lat, lon } = {}) {
    /*
    https://developers.google.com/maps/documentation/places/web-service/search-text
    */
    const locationParam = (lat !== undefined && lon !== undefined) ? `&location=${lat},${lon}` : '';

    const params = new URLSearchParams({
        query,
        language,
        key: GOOGLE_MAPS_API_KEY,
    });

    return await fetchTimeout(`${GOOGLE_MAPS_BASE}/place/textsearch/json?input=${params.toString()}${locationParam}&key=${GOOGLE_MAPS_API_KEY}`).then(r => r.json());
}

async function fetchTimeout(resource, options = {}) {
    // set timeout to 8 seconds from 300 seconds
    // throws Timeout error (error.name === 'AbortError')
    const { timeout = 8000 } = options;
    options.headers = { 'User-Agent': 'MyApp', ...options.headers }
    const controller = new AbortController();
    const id = setTimeout(() => controller.abort(), timeout);
    const response = await fetch(resource, {
        ...options,
        signal: controller.signal
    });
    clearTimeout(id);
    return response;
}
```
