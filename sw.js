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
    "revision": "e812190276c35e76ab97d6254d69c5c6"
  },
  {
    "url": "blog/google-web-designer-certification/index.html",
    "revision": "b4d4081e6d889f13a58a300b6b0418f5"
  },
  {
    "url": "blog/index.html",
    "revision": "9f14152bee86689d9b758307182b776f"
  },
  {
    "url": "blog/kubernetes-contributions/index.html",
    "revision": "08d4e6167995e48baf88b149e8e84094"
  },
  {
    "url": "blog/new-site/index.html",
    "revision": "30559097b2ed25b6d25f715ddecf11cc"
  },
  {
    "url": "blog/webfundamentals-contributions/index.html",
    "revision": "6e299d2cf22504f2c059057415170472"
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
    "revision": "80b540a3b5e731e6eb82ee54f2d3a87f"
  },
  {
    "url": "it/404.html",
    "revision": "58fb22e2f0a7c262656c064c73022deb"
  },
  {
    "url": "it/index.html",
    "revision": "d97b86d12603bd2b281eba234f80c680"
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
