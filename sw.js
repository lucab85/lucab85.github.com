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
    "revision": "a882e40f396f30ac7d37bfa1bbd1f6e3"
  },
  {
    "url": "blog/google-academy-for-ads-achievements/index.html",
    "revision": "8a3dfa6bf98c7586157da1dfae7a7a12"
  },
  {
    "url": "blog/google-web-designer-certification/index.html",
    "revision": "e1a19b0980a37fdffe0bb8de837f7879"
  },
  {
    "url": "blog/google-webfundamentals-contributions/index.html",
    "revision": "64b77c2a38b0f37c56c5ad641e43727d"
  },
  {
    "url": "blog/index.html",
    "revision": "de6f8b2867e75336bc2950f734128677"
  },
  {
    "url": "blog/kubernetes-contributions/index.html",
    "revision": "c16c508c8a154d3ac66120e20b865f9b"
  },
  {
    "url": "blog/linux-foundation-lfce-certification/index.html",
    "revision": "4f0d673a2a200689129272bee1cd221c"
  },
  {
    "url": "blog/mobile-web-specialist-nanodegree/index.html",
    "revision": "5d5fa18b8fd0bc39709a143383cf6848"
  },
  {
    "url": "blog/new-site/index.html",
    "revision": "10a3f0a097ab504be4fb98b8d2a5afcd"
  },
  {
    "url": "blog/webfundamentals-contributions/index.html",
    "revision": "2c9b82e6839cd93b6b89546a72ab7a75"
  },
  {
    "url": "blog/website-improvements/index.html",
    "revision": "8f02af6e21dd8aabfca2f2966461480d"
  },
  {
    "url": "categories/ads/index.html",
    "revision": "c68114d01caac7b61eb4afcadfca1df9"
  },
  {
    "url": "categories/certifications/index.html",
    "revision": "15fbf13d9d4db5a5aa6eca9731282630"
  },
  {
    "url": "categories/contributions/index.html",
    "revision": "916161ccdf93490407139c6cf86ea6ee"
  },
  {
    "url": "categories/docker/index.html",
    "revision": "41e3299c89d77f3a49bc82db0cd60a74"
  },
  {
    "url": "categories/google/index.html",
    "revision": "23914005322cdd07ac53e87f7920d801"
  },
  {
    "url": "categories/index.html",
    "revision": "24b42fbbae8b99890075188873f8df9d"
  },
  {
    "url": "categories/linux/index.html",
    "revision": "70231a62b6c1041790a9a6f770cf0684"
  },
  {
    "url": "categories/localization/index.html",
    "revision": "f5554bcf3a1bc5be2fd235ebd6aa9fe4"
  },
  {
    "url": "categories/translations/index.html",
    "revision": "a2d63839823d6fc00bde32d22398020b"
  },
  {
    "url": "categories/udacity/index.html",
    "revision": "d666c654a99b6b31b99516d8dd0edb41"
  },
  {
    "url": "categories/web/index.html",
    "revision": "1c7a8b534d043c7be690706ff5871fce"
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
    "url": "img/Google-Dev-EMEA-Badge.png",
    "revision": "4eabcb8d24990312af0918b565afdd89"
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
    "revision": "2fd48e5b790c31d2afefa06e85c596de"
  },
  {
    "url": "it/404.html",
    "revision": "6a97d9d5d94190418d570a6a5488ea87"
  },
  {
    "url": "it/categories/index.html",
    "revision": "02d1e69f48692917ec6ff94ea71e8bdb"
  },
  {
    "url": "it/index.html",
    "revision": "8a3bf2c8d96f7332abc2e40011e69167"
  },
  {
    "url": "it/tags/big-data/index.html",
    "revision": "1e975a58f159fe0ef71dc57091ca581e"
  },
  {
    "url": "it/tags/cloud/index.html",
    "revision": "8f4a3832c52169b9fca3b27cb7432bba"
  },
  {
    "url": "it/tags/deep-learning/index.html",
    "revision": "c7ded1568fb899cf1d83ada8f63a64d1"
  },
  {
    "url": "it/tags/index.html",
    "revision": "9d576a0cf4daae082a415a4190211e83"
  },
  {
    "url": "it/tags/internet-of-things/index.html",
    "revision": "b4639bc0e22acfcda2a531704fb97342"
  },
  {
    "url": "it/tags/iot/index.html",
    "revision": "4bee0f3f8e7aec03daf1ecac08e768d7"
  },
  {
    "url": "it/tags/linux/index.html",
    "revision": "454d91ce5966922b2bc6f6e4d89f2aa9"
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
  },
  {
    "url": "tags/ads/index.html",
    "revision": "9bd086ea83c0499609a0b2591da76d3c"
  },
  {
    "url": "tags/big-data/index.html",
    "revision": "a06a15984c0eb84a736b65da774e3a07"
  },
  {
    "url": "tags/certification/index.html",
    "revision": "30278e5fd9f7a4ed064384ab3c71f9df"
  },
  {
    "url": "tags/cloud/index.html",
    "revision": "e6fe24d8b04ede848018b70bba7c0175"
  },
  {
    "url": "tags/css3/index.html",
    "revision": "0915c4b0a8ea94369ff9aa248ba63d21"
  },
  {
    "url": "tags/deep-learning/index.html",
    "revision": "f145b775bae01fff265eba5f0aee6466"
  },
  {
    "url": "tags/docker/index.html",
    "revision": "638d212014e006a3511f1f7cc4c54bf0"
  },
  {
    "url": "tags/doubleclick/index.html",
    "revision": "d47ecb215286f9f0a0a16a2b9d36e444"
  },
  {
    "url": "tags/google/index.html",
    "revision": "cb699fc0262b4ada69b6f31860349a3e"
  },
  {
    "url": "tags/html5/index.html",
    "revision": "26652baabbb6b84fadea1650b60f9e2f"
  },
  {
    "url": "tags/i18n/index.html",
    "revision": "d36172d2e92d709dcc6bdaa5cf652e6d"
  },
  {
    "url": "tags/index.html",
    "revision": "fcde21cfc9ca78b2b641237784e89b43"
  },
  {
    "url": "tags/internet-of-things/index.html",
    "revision": "40e6c94a881438d9685f2a027ca2e025"
  },
  {
    "url": "tags/iot/index.html",
    "revision": "cc06cd4a0f62e220d469df6b948213ff"
  },
  {
    "url": "tags/italian/index.html",
    "revision": "b76f2f65527fb875e39a45da8a55523e"
  },
  {
    "url": "tags/javascript/index.html",
    "revision": "2000b7038e8c4b0fad18f758a7d394c6"
  },
  {
    "url": "tags/l10n/index.html",
    "revision": "1e3439ea0a8c4d8dc28e7376b46156c6"
  },
  {
    "url": "tags/lfce/index.html",
    "revision": "b029bcde59215c1b99d89ddfa22341c4"
  },
  {
    "url": "tags/linux/index.html",
    "revision": "9ae2dcd6fecdf5601f0ce22945149347"
  },
  {
    "url": "tags/nanodegree/index.html",
    "revision": "f9f8b53903046e91756d0cb8c563f1bc"
  },
  {
    "url": "tags/udacity/index.html",
    "revision": "17b9d4a6b073305343bc74774abf0e78"
  },
  {
    "url": "tags/web/index.html",
    "revision": "4766a6c7202cf84e5430838322eba2ee"
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
