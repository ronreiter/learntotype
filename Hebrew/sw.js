self.addEventListener('install', function(e) {
    e.waitUntil(
        caches.open('learntotypepwa').then(function(cache) {
            return cache.addAll([
                '/learntotype',
                '/learntotype/Hebrew/index.html',
                '/learntotype/Hebrew/words.js',
                '/learntotype/favicon.ico',
                '/learntotype/confetti.min.js',
                '/learntotype/sounds/bell.wav',
                '/learntotype/sounds/error.wav',
                '/learntotype/sounds/success.wav',
                '/learntotype/sounds/success2.wav'
            ]);
        })
    );
});

self.addEventListener('fetch', function(event) {
    event.respondWith(
        caches.match(event.request).then(function(response) {
            return response || fetch(event.request);
        })
    );
});