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
    "revision": "4834a801c8140b3233964b81a1d1f9bc"
  },
  {
    "url": "blog/google-web-designer-certification/index.html",
    "revision": "2d5bd4da9934be72e2d4e49d4e2b6e5f"
  },
  {
    "url": "blog/index.html",
    "revision": "8fb107b3ec95a9fc700a5da7dcf5c330"
  },
  {
    "url": "blog/kubernetes-contributions/index.html",
    "revision": "b9df9cb24d6a42c46ca2a01551274911"
  },
  {
    "url": "blog/new-site/index.html",
    "revision": "ca3b4f79acc27cac0a62cb740b153cf7"
  },
  {
    "url": "blog/new-start/index.html",
    "revision": "d568465cd31d5daa8a88bdc0617e1208"
  },
  {
    "url": "blog/webfundamentals-contributions/index.html",
    "revision": "33c5a47b85e8bd792b6027097a6a10aa"
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
    "revision": "a69e9deb3132e6866faad1d23e3d5f7b"
  },
  {
    "url": "it/404.html",
    "revision": "2259d61becb992f5ba5bf9acfe89a245"
  },
  {
    "url": "it/index.html",
    "revision": "7fc966d2b376d663d60389a1d153339c"
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
