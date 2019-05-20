
//Adapted from https://serviceworke.rs/strategy-cache-and-update_service-worker_doc.html
var CACHE = '2019-05-20';

self.addEventListener('install', function(evt) {
  evt.waitUntil(precache());
});

self.addEventListener('fetch', function(evt) {
  evt.respondWith(fromCache(evt.request));
  evt.waitUntil(update(evt.request));
});

function precache() {
  return caches.open(CACHE).then(function (cache) {
    return cache.addAll([
      '/',
      'index.html',
      'projects.json',
      'favicon.ico',
      'imgs/alignment.png',
      'imgs/bioseq.png',
      'imgs/bubbles.png',
      'imgs/csv2fasta.png',
      'imgs/fileto.png',
      'imgs/mebt.png',
      'imgs/microbetrace.png',
      'imgs/microbetraceshiny.png',
      'imgs/nn.png',
      'imgs/patristic.png',
      'imgs/proximate.png',
      'imgs/seqspawnr.png',
      'imgs/tidytree.png',
      'imgs/tn93java.png',
      'imgs/tn93.png',
      'android-chrome-192x192.png',
      'android-chrome-512x512.png',
      'apple-touch-icon.png',
      'favicon-16x16.png',
      'favicon-32x32.png',
      'mstile-144x144.png',
      'mstile-150x150.png',
      'mstile-310x150.png',
      'mstile-310x310.png',
      'mstile-70x70.png',
    ]);
  });
}

function fromCache(request) {
  return caches.open(CACHE).then(function (cache) {
    return cache.match(request).then(function (matching) {
      return matching || Promise.reject('no-match');
    });
  });
}

function update(request) {
  return caches.open(CACHE).then(function (cache) {
    return fetch(request).then(function (response) {
      return cache.put(request, response);
    });
  });
}

