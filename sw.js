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
    "revision": "c4082476f82c99de00207787279d98a3"
  },
  {
    "url": "blog/google-academy-for-ads-achievements/index.html",
    "revision": "1fe088009c40bd4e745c82ebe50fc02b"
  },
  {
    "url": "blog/google-web-designer-certification/index.html",
    "revision": "e1a19b0980a37fdffe0bb8de837f7879"
  },
  {
    "url": "blog/index.html",
    "revision": "e3237fadba297ae90aebf2250d6b3cd8"
  },
  {
    "url": "blog/kubernetes-contributions/index.html",
    "revision": "e49881e464e5282f198db19133d04142"
  },
  {
    "url": "blog/new-site/index.html",
    "revision": "022f8e1f5c0381db3022bb6d1ee7238a"
  },
  {
    "url": "blog/webfundamentals-contributions/index.html",
    "revision": "4d7bb9786e8aa1d95776a7a5e1380abc"
  },
  {
    "url": "blog/website-improvements/index.html",
    "revision": "c9dbd043c8df964e850900b223824698"
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
    "revision": "e263da3e1f3e8349a080a487db9f277e"
  },
  {
    "url": "it/404.html",
    "revision": "aa9361f28997fffa13cede3b6551a426"
  },
  {
    "url": "it/index.html",
    "revision": "ea6ca86ff05fb2ce6c54debf214b06ec"
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
