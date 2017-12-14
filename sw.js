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
    "revision": "e9aabff06dbe8afcebd3ab12b4078e4c"
  },
  {
    "url": "blog/google-academy-for-ads-achievements/index.html",
    "revision": "b1b21c43b57c6f443f8810555f85cea1"
  },
  {
    "url": "blog/google-web-designer-certification/index.html",
    "revision": "e1a19b0980a37fdffe0bb8de837f7879"
  },
  {
    "url": "blog/google-webfundamentals-contributions/index.html",
    "revision": "7804cd5c073fe6eeb7f0c4e88fba1b97"
  },
  {
    "url": "blog/index.html",
    "revision": "2243cac1429a788cec4eb32db7e875e4"
  },
  {
    "url": "blog/kubernetes-contributions/index.html",
    "revision": "fcda8ba4debb4ff94e7d1cad74ac30a1"
  },
  {
    "url": "blog/linux-foundation-lfce-certification/index.html",
    "revision": "58836a06eef20cfb63852f1a36c2df34"
  },
  {
    "url": "blog/new-site/index.html",
    "revision": "3f26038a88a228693d6cd9e0c45c46aa"
  },
  {
    "url": "blog/webfundamentals-contributions/index.html",
    "revision": "2c9b82e6839cd93b6b89546a72ab7a75"
  },
  {
    "url": "blog/website-improvements/index.html",
    "revision": "7fd5b346a2fd1cfccd794d29f3beb376"
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
    "url": "img/google_ads_Creative_Core.png",
    "revision": "8609aeb6036de4cb97149ddfc1d36aad"
  },
  {
    "url": "img/google_ads_HTML5.png",
    "revision": "52d5fbe325da5d80ac863f4f305a99ad"
  },
  {
    "url": "img/google_ads_Studio.png",
    "revision": "39f9f964ee3c2585f5600d4efa360fe1"
  },
  {
    "url": "img/google_ads_web_designer.png",
    "revision": "cff7f9b6c9af7a59dd3e536005c7d6d5"
  },
  {
    "url": "img/google_web_designer_certification.png",
    "revision": "ab54b4905660b0a68579a259efc8b282"
  },
  {
    "url": "img/prj_n2w.png",
    "revision": "cb57413e4218e9c59e7cec34847cf171"
  },
  {
    "url": "img/prj_pdfprocessor.png",
    "revision": "ce72ad44f9252a0dc0be4bf32ecc867f"
  },
  {
    "url": "img/prj_tree_fuchsiaos.png",
    "revision": "99b8ca1b77e4e92afefb16ba835faba1"
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
    "revision": "727a928616d458fbe7967296296faffa"
  },
  {
    "url": "it/404.html",
    "revision": "850a88576d0985a4d8137fc4b1b01cd7"
  },
  {
    "url": "it/index.html",
    "revision": "b4a1e64b14e90692e22e6b4b2c136354"
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
workboxSW.router.registerRoute(/.(jpg|ico|png)$/, workboxSW.strategies.networkFirst({
  "cacheName": "image-cache",
  "cacheExpiration": {
    "maxEntries": 10
  }
}), 'GET');
