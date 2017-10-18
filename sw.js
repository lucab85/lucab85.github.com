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
    "revision": "d711b50422f41b4af322f3807d4fb638"
  },
  {
    "url": "blog/google-web-designer-certification/index.html",
    "revision": "ad4583e08955da7be048c361929ab7a7"
  },
  {
    "url": "blog/index.html",
    "revision": "cc92e6cdcbc98a4290d5e6861f07eb26"
  },
  {
    "url": "blog/kubernetes-contributions/index.html",
    "revision": "57698ee2cf0c82880fc9b5a0257f2504"
  },
  {
    "url": "blog/new-site/index.html",
    "revision": "a3c3b274b4fface36efe77c8219bd01f"
  },
  {
    "url": "blog/webfundamentals-contributions/index.html",
    "revision": "a53ad0043e6b1d139803cf8be935f9a5"
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
    "revision": "e33f7dbe5844eaacdf4b2dd224112db9"
  },
  {
    "url": "it/404.html",
    "revision": "df1b6fa9702ed5d1006c75dd9d4910b3"
  },
  {
    "url": "it/index.html",
    "revision": "bef4c30ce4f028f5c2984c2adcb63da3"
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
