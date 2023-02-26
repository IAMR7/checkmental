// Perform install steps
let CACHE_NAME = "my-cache";
let urlsToCache = [
  "./src/index.css",
  "logo192.png",
  "logo512.png",
  "./src/index.js",
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(urlsToCache))
  );
});

self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches
      .match(event.request)
      .then((response) => response || fetch(event.request))
      .catch(() => caches.match("/offline.html"))
  );
});
