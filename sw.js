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
    "revision": "8f71edd8ebb56c13a2bbd24c9cce0f8d"
  },
  {
    "url": "blog/google-web-designer-certification/index.html",
    "revision": "3bb7166f6df8013d69ff52b0f757f0e5"
  },
  {
    "url": "blog/index.html",
    "revision": "25cc51c1c104fc2e40327cad43e9163a"
  },
  {
    "url": "blog/kubernetes-contributions/index.html",
    "revision": "915122721e9653dacbd6f828dbf9f901"
  },
  {
    "url": "blog/new-site/index.html",
    "revision": "4101d7fffc18e37256881372c2e15570"
  },
  {
    "url": "blog/webfundamentals-contributions/index.html",
    "revision": "b776c82c1aad21aa722b38d8d779d3e8"
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
    "revision": "b373e8312eac01e59ad4a871191c0b58"
  },
  {
    "url": "it/404.html",
    "revision": "02830809f6a516cb94b8e623ff156fb2"
  },
  {
    "url": "it/index.html",
    "revision": "b4f61aa8bdb56895a9922dcfe25648bf"
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
