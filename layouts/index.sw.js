// sw = service worker
var cacheName = 'v1';

var isOnline = true;

window.addEventListener('online', () => { isOnline = true });
window.addEventListener('offline', () => { isOnline = false });
navigator.connection.onchange = e => {
  isOnline = navigator.onLine;
};

self.addEventListener('install', event => {
  self.skipWaiting();
  event.waitUntil(caches.open(cacheName).then(cache => {
    return cache.addAll([
      '/',
      '/posts/',
      '/tags/',
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

async function cacheFirstOverride(request) {
  var hostname = (new URL(request.url)).hostname;
  if (hostname == 'latex.codecogs.com') {
    const responseFromCache = await caches.match(request);
    if (responseFromCache) return responseFromCache;
  }
}

async function networkFirst(request) {
  try {
    const cacheFirstMaybe = cacheFirstOverride(request);
    if (cacheFirstMaybe !== undefined) return cacheFirstMaybe;

    const networkResponse = await fetch(request);
    if (networkResponse.ok) {
      const cache = await caches.open(cacheName);
      cache.put(request, networkResponse.clone());
    }
    return networkResponse;
  } catch (error) {
    const cachedResponse = await caches.match(request);
    return cachedResponse || Response.error();
  }
}

async function cacheFirstWithRefresh(request) {
  const cacheFirstMaybe = cacheFirstOverride(request);
  if (cacheFirstMaybe !== undefined) return cacheFirstMaybe;

  const fetchResponsePromise = fetch(request).then(async (networkResponse) => {
    if (networkResponse.ok) {
      const cache = await caches.open(cacheName);
      cache.put(request, networkResponse.clone());
      // ensure we are using the latest version
      if (document.visibilityState === 'visible') {
        window.location.reload();
      }
    }
    return networkResponse;
  });
  return (await caches.match(request)) || (await fetchResponsePromise);
}

self.addEventListener('fetch', function (event) {
  const requestUrl = new URL(event.request.url);
  const isLocal = requestUrl.host == 'localhost:1313'
  if (isOnline || isLocal || requestUrl.pathname == '/') {
    event.respondWith(networkFirst(event.request));
  } else {
    event.respondWith(cacheFirstWithRefresh(event.request));
  }
});
