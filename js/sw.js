importScripts('workbox-sw.prod.v2.1.0.js');

/**
 * DO NOT EDIT THE FILE MANIFEST ENTRY
 *
 * The method precache() does the following:
 * 1. Cache URLs in the manifest to a local cache.
 * 2. When a network request is made for any of these URLs the response
 *    will ALWAYS comes from the cache, NEVER the network.
 * 3. When the service worker changes ONLY assets with a revision change are
 *    updated, old cache entries are left as is.
 *
 * By changing the file manifest manually, your users may end up not receiving
 * new versions of files because the revision hasn't changed.
 *
 * Please use workbox-build or some other tool / approach to generate the file
 * manifest which accounts for changes to local files and update the revision
 * accordingly.
 */
const fileManifest = [
  {
    "url": "404.html",
    "revision": "e10fa6bb97330f17562446dd0cb41bab"
  },
  {
    "url": "blog/google-web-designer-certification/index.html",
    "revision": "f02592f9eee5841c65f269352df4c5b2"
  },
  {
    "url": "blog/index.html",
    "revision": "99947af133cd1c140c13911c3435ca2e"
  },
  {
    "url": "blog/kubernetes-contributions/index.html",
    "revision": "65054b86da178aca03ccbd3b85974e12"
  },
  {
    "url": "blog/new-site/index.html",
    "revision": "9f8ab41dbb41f74890210f1e3f8a5bfb"
  },
  {
    "url": "blog/new-start/index.html",
    "revision": "d568465cd31d5daa8a88bdc0617e1208"
  },
  {
    "url": "blog/webfundamentals-contributions/index.html",
    "revision": "e7ddc3bf28433f3d8354a517c0ecec1c"
  },
  {
    "url": "css/candid.css",
    "revision": "72b69345c61c7deb3fa336634030835e"
  },
  {
    "url": "css/dark-style.css",
    "revision": "75b9cf0ab786a9c3ce8ea6159b698a02"
  },
  {
    "url": "css/light-style.css",
    "revision": "b1accc63a45b4d62a74a05391a638a60"
  },
  {
    "url": "en/index.html",
    "revision": "1fcc11bb4ffa6b7d8ef09a008f5b5f9b"
  },
  {
    "url": "img/fav.ico",
    "revision": "6433b14ba2c0b4405bd6d8e0a2d4f177"
  },
  {
    "url": "img/profile_Google_Web_Designer_certification.jpg",
    "revision": "09776b9014b4f44e70db5b68afe5cfa9"
  },
  {
    "url": "img/profile.jpg",
    "revision": "1895305582380e750583ebba5cfb26fe"
  },
  {
    "url": "index.html",
    "revision": "f15f789d509c3df4f04a1be0b1eecfb1"
  },
  {
    "url": "it/404.html",
    "revision": "2bbe3f357ed130b07edcf0bfa4cca9d5"
  },
  {
    "url": "it/index.html",
    "revision": "1d9c6152fb807a27714fca6b427346ff"
  },
  {
    "url": "js/moment-timezone-with-data-2012-2022.min.js",
    "revision": "d09d20cafc7298426a34837c02c94151"
  },
  {
    "url": "js/moment-timezone.min.js",
    "revision": "d9e120287489fc70dad72ba822fd5033"
  },
  {
    "url": "js/moment.min.js",
    "revision": "8d6ed01e5fc0fa7f07402193ca286d6b"
  }
];

const workboxSW = new self.WorkboxSW({
  "directoryIndex": "index.html"
});
workboxSW.precache(fileManifest);
workboxSW.router.registerRoute(/.(jpg|ico)$/, workboxSW.strategies.networkFirst({
  "cacheName": "image-cache",
  "cacheExpiration": {
    "maxEntries": 10
  }
}), 'GET');
