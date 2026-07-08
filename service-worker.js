const CACHE_NAME = "advice-v1";

const API_URLS = [
  "api.adviceslip.com",
  "api.mymemory.translated.net"
]

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
// Função para instalar o cache com os arquivos especificados
async function instalarCache() {
  const cache = await caches.open(CACHE_NAME);
  await cache.addAll(ASSETS);
}

// Função para buscar o arquivo no cache ou na rede
async function buscarArquivo(request) {
  const cache = await caches.match(request);

  if(cache) return cache;

  return fetch(request)
}

async function buscarAPI(request){
  try{
    const response = await fetch(request)
    return response
  }catch(error){
    const cache = await caches.match(request)
    if(cache)return cache
    return new Response("Você está offline.", {
      status: 503
    })
  }
}

function ehAPI(url) {
  return API_URLS.some(api => url.includes(api));
}

async function manterCacheAtual() {
  const cachesExistentes = await caches.keys();

  const cachesAntigos = cachesExistentes.filter(c => c !== CACHE_NAME)

  await Promise.all(cachesAntigos.map(c => caches.delete(c)))
}

// Evento de instalação do Service Worker para criar o cache
self.addEventListener("install", (event) => {
  event.waitUntil(instalarCache());
});

self.addEventListener("activate", (event) => {
  event.waitUntil(manterCacheAtual())
})

// Evento de fetch para interceptar as requisições e buscar no cache
self.addEventListener("fetch", (event) => {
  if(ehAPI(event.request.url)){
      event.respondWith(buscarAPI(event.request))
  }else {
    event.respondWith(buscarArquivo(event.request));
  }
});

