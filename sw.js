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
    "revision": "078afe65a3f0d7c83e1c7cbd669e3cb9"
  },
  {
    "url": "blog/google-academy-for-ads-achievements/index.html",
    "revision": "d2557af3bad825b8b76432e07be0af0c"
  },
  {
    "url": "blog/google-web-designer-certification/index.html",
    "revision": "e1a19b0980a37fdffe0bb8de837f7879"
  },
  {
    "url": "blog/index.html",
    "revision": "b6c2ae7ad397b3704282dae1c2299295"
  },
  {
    "url": "blog/kubernetes-contributions/index.html",
    "revision": "48a8e1c771400408f60f2775003e6ed1"
  },
  {
    "url": "blog/new-site/index.html",
    "revision": "d055005cdd7ebec7632199173479b9e1"
  },
  {
    "url": "blog/webfundamentals-contributions/index.html",
    "revision": "d6b9da2dfcd99e861439fd5418b2e292"
  },
  {
    "url": "blog/website-improvements/index.html",
    "revision": "1caf884761f806c6b69fd2ae244a5400"
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
    "revision": "d78675ff62e8ffcfdfb63d606731a618"
  },
  {
    "url": "it/404.html",
    "revision": "7a0d936133dce3bdaf653a398f6a35b8"
  },
  {
    "url": "it/index.html",
    "revision": "9f0467fe0c684923bdc0bf1b70a691a8"
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

const workboxSW = new self.WorkboxSW();
workboxSW.precache(fileManifest);
workboxSW.router.registerRoute(/.(jpg|ico)$/, workboxSW.strategies.networkFirst({
  "cacheName": "image-cache",
  "cacheExpiration": {
    "maxEntries": 10
  }
}), 'GET');
