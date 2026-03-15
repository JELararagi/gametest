const CACHE_NAME = 'meltdown-v72-runtime-clean-pc-eq';
const ASSETS_TO_CACHE = [
  './',
  './index.html',
  './manifest.webmanifest',
  './assets/bg/bg_cyber.mp4',
  './assets/bg/bg_bigbuzz_loop.mp4',
  './assets/bg/overlay_gameover_glitch.mp4',
  './assets/audio/bgm_lofi.m4a',
  './assets/audio/bgm_hyper.m4a',
  './assets/audio/bgm_result_win.m4a',
  './assets/audio/bgm_result_lose.m4a',
  './assets/audio/se_clear_small_01.m4a',
  './assets/audio/se_clear_big_01.m4a',
  './assets/audio/se_drop_soft_01.m4a',
  './assets/audio/se_trend_shift.m4a',
  './assets/audio/se_trend_warning.m4a',
  './assets/audio/voice_mc_start_01.m4a',
  './assets/audio/voice_mc_fire_01.m4a',
  './assets/audio/voice_mc_win_01.m4a',
  './assets/audio/voice_mc_lose_01.m4a',
  './assets/img/title_logo.png',
  './assets/img/bg_cyber_loop_frame.png',
  './assets/img/char_normal.png',
  './assets/img/char_focus.png',
  './assets/img/char_hype.png',
  './assets/img/char_warning.png',
  './assets/img/char_panic.png',
  './assets/img/char_yami.png',
  './assets/img/char_apology.png',
  './assets/img/char_win.png',
  './assets/img/hazard.png',
  './assets/img/fire.png',
  './assets/img/buzz.png',
  './assets/img/item_1.png',
  './assets/img/item_2.png',
  './assets/img/item_3.png',
  './assets/img/item_4.png',
  './assets/img/item_5.png',
  './assets/img/item_6.png',
  './assets/img/icon-192.png',
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
