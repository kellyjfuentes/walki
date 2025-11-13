const CACHE_NAME = 'walki-v1';
const urlsToCache = [
  '/',
  '/index.html',
  '/style.css',
  '/js/main.js',
  '/js/data.js',
  '/js/icons.js',
  '/js/map.js',
  '/js/templates/SplashScreen.js',
  '/js/templates/OnboardingScreen.js',
  '/js/templates/MainApp.js',
  '/js/templates/ProfileScreen.js',
  '/js/templates/ExploreScreen.js',
  'https://cdn.tailwindcss.com'
];

// Instalación del Service Worker
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        console.log('Cache abierto');
        return cache.addAll(urlsToCache);
      })
  );
});

// Activación y limpieza de cachés antiguos
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheName !== CACHE_NAME) {
            console.log('Eliminando caché antiguo:', cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});

// Estrategia: Cache First, Network Fallback
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request)
      .then((response) => {
        // Si está en caché, devuélvelo
        if (response) {
          return response;
        }
        
        // Si no, fetch desde la red
        return fetch(event.request).then(
          (response) => {
            // Verifica si la respuesta es válida
            if (!response || response.status !== 200 || response.type !== 'basic') {
              return response;
            }

            // Clona la respuesta
            const responseToCache = response.clone();

            // Guarda en caché para la próxima vez
            caches.open(CACHE_NAME)
              .then((cache) => {
                cache.put(event.request, responseToCache);
              });

            return response;
          }
        );
      })
      .catch(() => {
        // Opcional: devuelve una página offline personalizada
        return caches.match('/index.html');
      })
  );
});