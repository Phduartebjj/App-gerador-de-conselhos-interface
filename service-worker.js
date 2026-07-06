const CACHE_NAME = "advice-v1";

const ASSETS = [
  "/",
  "/manifest.json",

  "/src/css/reset.css",
  "/src/css/responsive.css",
  "/src/css/style.css",
  "/src/css/variables.css",

  "/src/images/favIcons/favicon-32x32.png",

  "/src/images/icons/icon-192x192.png",
  "/src/images/icons/icon-512x512.png",
  "/src/images/icons/bandeira-brasil.svg",
  "/src/images/icons/bandeira-espanha.svg",
  "/src/images/icons/icon-dice.svg",
  "/src/images/icons/menu.svg",
  "/src/images/icons/moon.svg",
  "/src/images/icons/sunny.svg",

  "/src/images/ui/pattern-divider-desktop.svg",
  "/src/images/ui/pattern-divider-mobile.svg",

  "/src/js/Api/advice.js",
  "/src/js/Api/translate.js",

  "/src/js/state/state.js",

  "/src/js/utils/storage.js",

  "/src/js/ui/error.js",
  "/src/js/ui/loading.js",
  "/src/js/ui/render.js",
  "/src/js/ui/theme.js",

  "/src/js/controller.js",
  "/src/js/script.js",
];

async function instalarCache() {
  const cache = await caches.open(CACHE_NAME);
  await cache.addAll(ASSETS);
}

async function buscarArquivo(request) {
  const cache = await caches.match(request);

  if(cache) return cache;

  return fetch(request)
}

self.addEventListener("install", (event) => {
  event.waitUntil(instalarCache());
});

self.addEventListener("fetch", (event) => {
  event.respondWith(buscarArquivo(event.request));
});
