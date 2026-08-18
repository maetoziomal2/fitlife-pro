// Minimalny Service Worker wymagany do PWA
self.addEventListener('install', (e) => {
  console.log('[Service Worker] Zainstalowany');
});

self.addEventListener('fetch', (e) => {
  // Pozwala aplikacji działać, przepuszczając normalnie zapytania do sieci
});
