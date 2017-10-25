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
    "revision": "5168e038c16929a5b77af9c9cd12a257"
  },
  {
    "url": "blog/google-web-designer-certification/index.html",
    "revision": "b99b76e98241283da5640d9f6e073dc9"
  },
  {
    "url": "blog/index.html",
    "revision": "66d14ce81d92bf64ac1c1e1af4517f17"
  },
  {
    "url": "blog/kubernetes-contributions/index.html",
    "revision": "4144ce8f12f5cca9574642c12e47ce75"
  },
  {
    "url": "blog/new-site/index.html",
    "revision": "8871ab4b4ff7af68e259cc9c9c558096"
  },
  {
    "url": "blog/webfundamentals-contributions/index.html",
    "revision": "e3c14065cf636aa1d5090a164153d5b2"
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
    "revision": "dd0ef3a83c80f2037b6b8bcd86b90b6b"
  },
  {
    "url": "it/404.html",
    "revision": "6e4fb1cc63134be00c44747651e8e665"
  },
  {
    "url": "it/index.html",
    "revision": "71088c7f16e908b3cae560eca44e0acf"
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
