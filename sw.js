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
    "revision": "869820c0e175d98c1c100d2d00ea43f1"
  },
  {
    "url": "blog/google-academy-for-ads-achievements/index.html",
    "revision": "5cca4dce9fcdcaaff0304aabe6a81092"
  },
  {
    "url": "blog/google-web-designer-certification/index.html",
    "revision": "e1a19b0980a37fdffe0bb8de837f7879"
  },
  {
    "url": "blog/google-webfundamentals-contributions/index.html",
    "revision": "355e394e7e280d8cef1c421b885d2768"
  },
  {
    "url": "blog/index.html",
    "revision": "eeace225fb7399796190eacaa1e463eb"
  },
  {
    "url": "blog/kubernetes-contributions/index.html",
    "revision": "ad2e9403b85e4a00d203d1f69cb8d548"
  },
  {
    "url": "blog/linux-foundation-lfce-certification/index.html",
    "revision": "eea6c7ebdb6e8ef90fc5ab43cef5dacb"
  },
  {
    "url": "blog/mobile-web-specialist-nanodegree/index.html",
    "revision": "2ab271913216f732978154b704f13df6"
  },
  {
    "url": "blog/new-site/index.html",
    "revision": "2da02a70ec6f3087461cfbea91d7515a"
  },
  {
    "url": "blog/webfundamentals-contributions/index.html",
    "revision": "2c9b82e6839cd93b6b89546a72ab7a75"
  },
  {
    "url": "blog/website-improvements/index.html",
    "revision": "d09127bd2ec5862614b3c7bb1349a9e2"
  },
  {
    "url": "categories/ads/index.html",
    "revision": "909924603ed9d6be46b84a3858c30dab"
  },
  {
    "url": "categories/certifications/index.html",
    "revision": "8488ad5b2f1212c53248dec980de3e79"
  },
  {
    "url": "categories/contributions/index.html",
    "revision": "0545fcbd2eea6c6cdb9857899296442c"
  },
  {
    "url": "categories/docker/index.html",
    "revision": "6d87ff306f451601b42decf1632c370d"
  },
  {
    "url": "categories/google/index.html",
    "revision": "1716bcb50deb48a4d1db9c897aaad714"
  },
  {
    "url": "categories/index.html",
    "revision": "c18087ba2ca0f945266a77cd279124b2"
  },
  {
    "url": "categories/linux/index.html",
    "revision": "fd8490371ccaa21c10d4d155ec7e24b8"
  },
  {
    "url": "categories/localization/index.html",
    "revision": "ae873d8c30a5f5a4873d9ff1ca871c9f"
  },
  {
    "url": "categories/translations/index.html",
    "revision": "37b890407c2f0149a45b1858b6569db2"
  },
  {
    "url": "categories/udacity/index.html",
    "revision": "339f0cbe565c76f64130b6930a567c5f"
  },
  {
    "url": "categories/web/index.html",
    "revision": "66062eb9056bd75fbeab1df61fc40efb"
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
    "revision": "ec65e929ffaba9e79c78b5e9c15cdc3b"
  },
  {
    "url": "it/404.html",
    "revision": "e73c94fcaacec2312d8e617086c60da5"
  },
  {
    "url": "it/categories/index.html",
    "revision": "171ed5867848aaef592caf2dd6e9d9bf"
  },
  {
    "url": "it/index.html",
    "revision": "91e5a991c148437fb40aa322fdd8e423"
  },
  {
    "url": "it/tags/big-data/index.html",
    "revision": "8b9e800fe0db007c7413f05b42c4da3e"
  },
  {
    "url": "it/tags/cloud/index.html",
    "revision": "cdd70effc0a19565ef15e327bad3de52"
  },
  {
    "url": "it/tags/deep-learning/index.html",
    "revision": "a4aee90726cde24b8cc4d371890fe7e1"
  },
  {
    "url": "it/tags/index.html",
    "revision": "234602cc86d40e983ea24c90e62a9a0e"
  },
  {
    "url": "it/tags/internet-of-things/index.html",
    "revision": "860ec64d8c90ea67f64d019b211c7993"
  },
  {
    "url": "it/tags/iot/index.html",
    "revision": "cee313d6cb682b479589e15ccb12dddb"
  },
  {
    "url": "it/tags/linux/index.html",
    "revision": "b351b96dd2934f992b2d92fb14402b8e"
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
    "revision": "6519e352d0de9db1b38e0aa104336c29"
  },
  {
    "url": "tags/big-data/index.html",
    "revision": "6c98988559820200769c9af0a053f1f9"
  },
  {
    "url": "tags/certification/index.html",
    "revision": "54201da2c8fee6134194ed021cf53f4c"
  },
  {
    "url": "tags/cloud/index.html",
    "revision": "cf7c96dc06f8f2936db41d5a16f47d7f"
  },
  {
    "url": "tags/css3/index.html",
    "revision": "6405e87d536e55503fb1adaec66c3354"
  },
  {
    "url": "tags/deep-learning/index.html",
    "revision": "f63990b251548ecab432b25c3bdd1e28"
  },
  {
    "url": "tags/docker/index.html",
    "revision": "5f7756f971ad20a0d1cdd60b94d64c6a"
  },
  {
    "url": "tags/doubleclick/index.html",
    "revision": "641b9facd845bc18474428306a3dd0ce"
  },
  {
    "url": "tags/google/index.html",
    "revision": "11df9143e91a7fa0145648e7d45fff8d"
  },
  {
    "url": "tags/html5/index.html",
    "revision": "ce37a17c0178bc49c1702b2416d71874"
  },
  {
    "url": "tags/i18n/index.html",
    "revision": "383f38f926ca6fe170361da74e1d369c"
  },
  {
    "url": "tags/index.html",
    "revision": "9568d7beda0edf82b0d2dfc74dcdbbc9"
  },
  {
    "url": "tags/internet-of-things/index.html",
    "revision": "8bc7384b53a641242c416e104faa413e"
  },
  {
    "url": "tags/iot/index.html",
    "revision": "4c4a31f3483a70616cd73f7e68b43601"
  },
  {
    "url": "tags/italian/index.html",
    "revision": "d28b32511bd4b1af9390930c4299a31b"
  },
  {
    "url": "tags/javascript/index.html",
    "revision": "ae9c1a4f0583cacd1bf038b9200ae87f"
  },
  {
    "url": "tags/l10n/index.html",
    "revision": "c96ee2aae7b2897fc6bbbd4da4b1676a"
  },
  {
    "url": "tags/lfce/index.html",
    "revision": "a7becb68a53a550a57a5d9019289158e"
  },
  {
    "url": "tags/linux/index.html",
    "revision": "f824ca36999de2942ab08f85591ac656"
  },
  {
    "url": "tags/nanodegree/index.html",
    "revision": "bad5d75dad9257e43facb0987717745d"
  },
  {
    "url": "tags/udacity/index.html",
    "revision": "70e5587bcc55faed8be13fa3af1a6122"
  },
  {
    "url": "tags/web/index.html",
    "revision": "0bc50a7fd4ab5e9a5377553f3dfd3d14"
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
