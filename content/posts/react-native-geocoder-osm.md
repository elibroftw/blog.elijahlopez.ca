---
title: "React Native Geocoder With OSM & Nominatim"
date: 2023-05-28T13:48:47-04:00
draft: false
hidden: true
tags:
  - tutorial
  - programming
  - javascript
  - webdev
  - mobile
  - react-native
---

I needed to add geocoding to a React Native app I am working on. I could've gone with Google Maps API or Mapbox, however Google Maps charges for search after a certain number of requests and Mapbox failed. Then I found out that OpenStreetMaps (OSM) and Nominatim have a big dataset and it's results were pretty good.

To add geocoding via OSM in React Native, you don't need to install any modules. Simply create some helper functions in your utilities or apis file that you can call from the UI code which would also need to error handle.

```js

const NOMINATIM_BASE = 'https://nominatim.openstreetmap.org/'

// use object destructuring to avoid accounting all possible parameters and ensuring
//  forward compatibility between UI and API code
export async function searchLocation({ query, acceptLanguage = 'en', limit = 10, addressdetails: addressDetails = true } = {}) {
    addressDetails = addressDetails ? '1' : '0';
    return await fetch(`${NOMINATIM_BASE}search?format=jsonv2&q=${encodeURIComponent(query)}&accept-language=${acceptLanguage}&limit=${limit}&addressdetails=${addressDetails}`).then(r => r.json());
}
```

```jsx
    const [searchQuery, setSearchQuery] = useState('');
    const searchTimer = useRef(null);
    const [searchResults, setSearchResults] = useState([]);

    function onChangeSearch(query) {
        setSearchQuery(query);
        clearTimeout(searchTimer.current);
        if (query === '') return setSearchResults([]);
        // delay searching for better UX and lower processing
        searchTimer.current = setTimeout(async () => {
            const thisTimerId = searchTimer.current;
            const results = await searchLocation({ query });
            // ensure that the request is valid
            if (thisTimerId === searchTimer.current) setSearchResults(results);
        }, 250);
    }
```
