importScripts('workbox-v3.2.0/workbox-sw.js');
//importScripts('https://storage.googleapis.com/workbox-cdn/releases/3.2.0/workbox-sw.js');

self.workbox.skipWaiting();
self.workbox.clientsClaim();


console.log("SW Startup!");

/*
  This is our code to handle push events.
*/
self.addEventListener('push', (event) => {
  console.log('[Service Worker] Push Received.');
  console.log(`[Service Worker] Push had this data: "${event.data.text()}"`);

  const title = 'Push Notification';
  const options = {
    body: `${event.data.text()}`,
    icon: 'images/icon.png',
    badge: 'images/badge.png'
  };

  event.waitUntil(self.registration.showNotification(title, options));
});

self.workbox.precaching.precacheAndRoute([]);

// Service Worker Active
self.addEventListener('activate', (event) => {
  console.log(`activated! ${event.data.text()}`);
});
