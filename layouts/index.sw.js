// sw = service worker
var cacheName = 'v1';

self.addEventListener('install', event => {
  self.skipWaiting();
  event.waitUntil(caches.open(cacheName).then(cache => {
    return cache.addAll([
      '/',
      '/posts/',
      {{- range $.Site.RegularPages }}
      '{{ .Permalink }}',
  {{- end }}
    ]);
  }));
});

self.addEventListener('activate', event => {
  event.waitUntil(caches.keys().then(cacheNames => {
    return Promise.all(cacheNames.map(currentCacheName => {
      if (cacheName.indexOf(currentCacheName) === -1) {
        return caches.delete(currentCacheName)
      };
    }));
  }));
});

async function cacheFirstWithRefresh(request) {
  var hostname = (new URL(request.url)).hostname;

  if (hostname == 'latex.codecogs.com') {
    const responseFromCache = await caches.match(request);
    if (responseFromCache) {
      return responseFromCache;
    }
  }

  const fetchResponsePromise = fetch(request).then(async (networkResponse) => {
    if (networkResponse.ok) {
      const cache = await caches.open(cacheName);
      cache.put(request, networkResponse.clone());
    }
    return networkResponse;
  });
  return (await caches.match(request)) || (await fetchResponsePromise);
}

self.addEventListener('fetch', function (event) {
  event.respondWith(cacheFirstWithRefresh(event.request));
});