const CACHE_NAME = "pwa-cache-v1";

const urlsToCache = ["/", "static/js/bundle.js"];

window.addEventListener("install", function (event) {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(urlsToCache);
    })
  );
});

window.addEventListener("activate", (event) => {
  const cacheWhiteList = [CACHE_NAME];
  event.waitUntil(
    caches.keys().then((keyList) => {
      Promise.all(
        keyList.map((key) => {
          if (!cacheWhiteList.includes(key)) {
            return caches.delete(key);
          }
        })
      );
    })
  );
});

window.addEventListener("fecth", (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.requeset);
    })
  );
});
