const CACHE_NAME = 'trendbuzz-v41';
const ASSETS_TO_CACHE = [
  './',
  './index.html',
  './manifest.webmanifest',
  './assets/bg/bg_cyber.mp4',
  './assets/audio/bgm_lofi.wav',
  './assets/audio/bgm_hyper.wav',
  './assets/audio/se_merge.wav',
  './assets/audio/voice_story_start.wav',
  './assets/audio/voice_ai_hack.wav',
  './assets/audio/voice_win.wav',
  './assets/audio/voice_lose.wav',
  './assets/img/char_normal.png',
  './assets/img/char_yami.png',
  './assets/img/hazard.png',
  './assets/img/item_1.png',
  './assets/img/item_2.png',
  './assets/img/item_3.png',
  './assets/img/item_4.png',
  './assets/img/item_5.png',
  './assets/img/item_6.png',
  './assets/img/item_7.png',
  './assets/img/icon-192.png',
  './assets/img/icon-512.png'
];

self.addEventListener('install', event => {
  event.waitUntil(caches.open(CACHE_NAME).then(cache => cache.addAll(ASSETS_TO_CACHE)));
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys => Promise.all(keys.filter(key => key !== CACHE_NAME).map(key => caches.delete(key))))
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(caches.match(event.request).then(response => response || fetch(event.request)));
});
