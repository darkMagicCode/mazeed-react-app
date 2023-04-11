// // advanced Service Worker features
// self.addEventListener("install", (event) => {
//   event.waitUntil(
//     cacheResources([
//       "/index.html",
//       "/build/static/js/main.23a870f3.js",
//       "/build/static/css/main.1e8de448.css",
//     ])
//   );
// });

// self.addEventListener("fetch", (event) => {
//   event.respondWith(serveFromCacheOrFetch(event.request));
// });

// self.addEventListener("activate", (event) => {
//   event.waitUntil(deleteOldCaches());
// });

// // helper functions

// function registerServiceWorker() {
//   if ("serviceWorker" in navigator) {
//     navigator.serviceWorker
//       .register("/sw.js")
//       .then((registration) => {
//         console.log(
//           "Service Worker registered successfully:",
//           registration.scope
//         );
//       })
//       .catch((error) => {
//         console.error("Error registering Service Worker:", error);
//       });
//   }
// }

// function cacheResources(resources) {
//   return caches.open("my-cache").then((cache) => {
//     return cache.addAll(resources);
//   });
// }

// function serveFromCacheOrFetch(request) {
//   return caches.match(request).then((response) => {
//     if (response) {
//       return response;
//     }

//     // advanced caching strategies
//     const fetchRequest = request.clone();

//     return fetch(fetchRequest).then((response) => {
//       if (!response || response.status !== 200 || response.type !== "basic") {
//         return response;
//       }

//       const responseToCache = response.clone();
//       caches.open("my-cache").then((cache) => {
//         cache.put(request, responseToCache);
//       });

//       return response;
//     });
//   });
// }

// function deleteOldCaches() {
//   return caches.keys().then((cacheNames) => {
//     return Promise.all(
//       cacheNames.map((cacheName) => {
//         if (cacheName !== "my-cache") {
//           return caches.delete(cacheName);
//         }
//       })
//     );
//   });
// }
