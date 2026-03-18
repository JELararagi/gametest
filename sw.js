const CACHE_NAME = "limit-meltdown-v134-perfmax-keepvisuals-v133base";
const PRECACHE = [
  "./",
  "./index.html",
  "./manifest.webmanifest",
  "./assets/bg/overlay_gameover_glitch.mp4",
  "./assets/audio/bgm_lofi.m4a",
  "./assets/audio/bgm_hyper.m4a",
  "./assets/audio/bgm_result_win.m4a",
  "./assets/audio/bgm_result_lose.m4a",
  "./assets/audio/se_clear_small_01.m4a",
  "./assets/audio/se_clear_big_01.m4a",
  "./assets/audio/se_chain_02.m4a",
  "./assets/audio/se_chain_03.m4a",
  "./assets/audio/se_chain_04.m4a",
  "./assets/audio/se_drop_soft_01.m4a",
  "./assets/audio/se_trend_warning.m4a",
  "./assets/audio/se_hazard_spawn.m4a",
  "./assets/audio/se_apology_ready.m4a",
  "./assets/audio/se_apology_fire.m4a",
  "./assets/audio/se_timer_hurry.m4a",
  "./assets/audio/se_gameover_blast.m4a",
  "./assets/audio/se_ui_item_select.m4a",
  "./assets/audio/se_ui_start_stream.m4a",
  "./assets/audio/se_ui_open_panel.m4a",
  "./assets/audio/se_ui_back.m4a",
  "./assets/audio/se_ui_pause_open.m4a",
  "./assets/audio/se_ui_pause_close.m4a",
  "./assets/audio/se_ui_retry.m4a",
  "./assets/audio/se_ui_copy_result.m4a",
  "./assets/audio/se_drop_blocked.m4a",
  "./assets/audio/se_chain_05.m4a",
  "./assets/audio/se_chain_06.m4a",
  "./assets/audio/se_chain_redsuper_fixed.m4a",
  "./assets/audio/se_bomb_clear.m4a",
  "./assets/audio/se_fire_start.m4a",
  "./assets/audio/se_fire_clear.m4a",
  "./assets/audio/se_buzz_spawn.m4a",
  "./assets/audio/se_buzz_clear_bigbuzz_start.m4a",
  "./assets/audio/se_bigbuzz_extend.m4a",
  "./assets/audio/se_crown_takeover.m4a",
  "./assets/audio/se_topline_warning.m4a",
  "./assets/audio/voice_mc_start_01.m4a",
  "./assets/audio/voice_mc_fire_01.m4a",
  "./assets/audio/voice_mc_win_01.m4a",
  "./assets/audio/voice_mc_lose_01.m4a",
  "./assets/img/title_logo.png",
  "./assets/img/bg_cyber_loop_frame.png",
  "./assets/img/char_normal.png",
  "./assets/img/char_focus.png",
  "./assets/img/char_hype.png",
  "./assets/img/char_warning.png",
  "./assets/img/char_panic.png",
  "./assets/img/char_yami.png",
  "./assets/img/char_apology.png",
  "./assets/img/char_win.png",
  "./assets/img/hazard.png",
  "./assets/img/fire.png",
  "./assets/img/buzz.png",
  "./assets/img/item_1.png",
  "./assets/img/item_2.png",
  "./assets/img/item_3.png",
  "./assets/img/item_4.png",
  "./assets/img/item_5.png",
  "./assets/img/item_6.png",
  "./assets/img/icon-192.png"
];

self.addEventListener("install", event => {
  self.skipWaiting();
  event.waitUntil(caches.open(CACHE_NAME).then(cache => cache.addAll(PRECACHE)).catch(() => {}));
});

self.addEventListener("activate", event => {
  event.waitUntil((async () => {
    const keys = await caches.keys();
    await Promise.all(keys.filter(key => key !== CACHE_NAME).map(key => caches.delete(key)));
    await self.clients.claim();
  })());
});

self.addEventListener("message", event => {
  if (event.data === "SKIP_WAITING") self.skipWaiting();
});

async function networkFirst(request) {
  const cache = await caches.open(CACHE_NAME);
  try {
    const response = await fetch(request, { cache: "no-store" });
    if (response && response.ok) cache.put(request, response.clone());
    return response;
  } catch (_) {
    return (await cache.match(request, { ignoreSearch: true })) || fetch(request);
  }
}

async function staleWhileRevalidate(request) {
  const cache = await caches.open(CACHE_NAME);
  const cached = await cache.match(request, { ignoreSearch: true });
  const networkPromise = fetch(request).then(response => {
    if (response && response.ok) cache.put(request, response.clone());
    return response;
  }).catch(() => cached);
  return cached || networkPromise;
}

self.addEventListener("fetch", event => {
  const request = event.request;
  if (request.method !== "GET") return;

  const url = new URL(request.url);
  const isSameOrigin = url.origin === self.location.origin;
  const isHtml = request.mode === "navigate" ||
    (request.headers.get("accept") || "").includes("text/html") ||
    url.pathname.endsWith("/index.html") ||
    url.pathname === "/" ||
    url.pathname.endsWith("/");

  if (isHtml) {
    event.respondWith(networkFirst(request));
    return;
  }

  if (isSameOrigin) event.respondWith(staleWhileRevalidate(request));
});
