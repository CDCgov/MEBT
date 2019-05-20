#!/bin/sh

rm service-worker.js

echo """
//Adapted from https://serviceworke.rs/strategy-cache-and-update_service-worker_doc.html
var CACHE = '`date +%Y-%m-%d`';

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
      'favicon.ico',""" > service-worker.js

ls imgs | sed -e 's/^/imgs\//' | sed "s/.*/      '&',/" >> service-worker.js
ls *.png | sed "s/.*/      '&',/" >> service-worker.js

echo """    ]);
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
""" >> service-worker.js
