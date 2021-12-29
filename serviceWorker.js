var CACHE_NAME = 'LearnToType';
var urlsToCache = [
  "/index.html",
  "/index-en.html"
];

self.addEventListener('install', function(event) {
  // Perform install steps
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(function(cache) {
        console.log('Opened cache');
        return cache.addAll(urlsToCache);
      })
  );
});
self.addEventListener('fetch',() => console.log("fetch"));