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
    "revision": "9375f8d0d3865080e4e13384d1a47564"
  },
  {
    "url": "blog/google-academy-for-ads-achievements/index.html",
    "revision": "912c6b8e57e8e10fdfc1c2f6e56d6791"
  },
  {
    "url": "blog/google-web-designer-certification/index.html",
    "revision": "e1a19b0980a37fdffe0bb8de837f7879"
  },
  {
    "url": "blog/google-webfundamentals-contributions/index.html",
    "revision": "27eff0563e80caf9a0b128147067afd9"
  },
  {
    "url": "blog/index.html",
    "revision": "3af334cce5749752e7fe568bc7cce058"
  },
  {
    "url": "blog/kubernetes-contributions/index.html",
    "revision": "826a1066050ab4c926eb2106b0932d6a"
  },
  {
    "url": "blog/linux-foundation-lfce-certification/index.html",
    "revision": "df6e6ba62f4dda15e47e45919b8c7b00"
  },
  {
    "url": "blog/mobile-web-specialist-nanodegree/index.html",
    "revision": "a5bb1a2217c2fc00a24cce955269d7fb"
  },
  {
    "url": "blog/new-site/index.html",
    "revision": "ec7ee26931bad2ca96583f17cce281d2"
  },
  {
    "url": "blog/responsive-design-snippets/index.html",
    "revision": "283767fa59389e063bb68d4608bfec94"
  },
  {
    "url": "blog/webfundamentals-contributions/index.html",
    "revision": "2c9b82e6839cd93b6b89546a72ab7a75"
  },
  {
    "url": "blog/website-improvements/index.html",
    "revision": "8f2f00e39e486c0907afec43bdc9ba2b"
  },
  {
    "url": "categories/ads/index.html",
    "revision": "cd004d1455873954363585b155f8d62d"
  },
  {
    "url": "categories/certifications/index.html",
    "revision": "3a8940690ecc564b5c596745fe9086c5"
  },
  {
    "url": "categories/contributions/index.html",
    "revision": "d921c403ce47df527fe114a55d5e4275"
  },
  {
    "url": "categories/design/index.html",
    "revision": "26593bf7527800166d414833178e1f38"
  },
  {
    "url": "categories/docker/index.html",
    "revision": "ad4b1c48c0d4bfd3912132d43968c40f"
  },
  {
    "url": "categories/google/index.html",
    "revision": "c81aebf6870b1d962f00f715b8e7bffe"
  },
  {
    "url": "categories/index.html",
    "revision": "391cf8bd9594ea8f4423de38d96c7a7e"
  },
  {
    "url": "categories/linux/index.html",
    "revision": "7587bd9710c6cdcfaaad7ce78c5f4f35"
  },
  {
    "url": "categories/localization/index.html",
    "revision": "0814e42c0aa11efdfb79e023a18c137b"
  },
  {
    "url": "categories/translations/index.html",
    "revision": "53067b2bb7aaaf5eaa623a5de7827ec6"
  },
  {
    "url": "categories/tutorial/index.html",
    "revision": "48cfd4907f759d4aac308b6861a52342"
  },
  {
    "url": "categories/udacity/index.html",
    "revision": "e3c7b2e3ce26585500adaac9b4cfe85a"
  },
  {
    "url": "categories/web/index.html",
    "revision": "063466913e2c3bae90de6c3c8452e298"
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
    "revision": "a0e30f103d580aa7c22a07bf52ced264"
  },
  {
    "url": "it/404.html",
    "revision": "6ab4688d908682f95c90faf94e8f8f7d"
  },
  {
    "url": "it/categories/index.html",
    "revision": "60c6308ab9c6bbae05932e51508a1809"
  },
  {
    "url": "it/index.html",
    "revision": "2dfa279d2fb5195788937ae12e09cbd3"
  },
  {
    "url": "it/tags/big-data/index.html",
    "revision": "ea46616e8fa21ce9077afa3eae744668"
  },
  {
    "url": "it/tags/cloud/index.html",
    "revision": "8e2f1089c775657acafe3299fc8f43dc"
  },
  {
    "url": "it/tags/deep-learning/index.html",
    "revision": "1832d08267c14e5019f9032c84304a97"
  },
  {
    "url": "it/tags/index.html",
    "revision": "213ef157efb65633c55c9f6f3996ccc4"
  },
  {
    "url": "it/tags/internet-of-things/index.html",
    "revision": "ead096aa37d96944de63773c37228f6f"
  },
  {
    "url": "it/tags/iot/index.html",
    "revision": "3781440544a1b0ee0cdf1938ab4b27f9"
  },
  {
    "url": "it/tags/linux/index.html",
    "revision": "bc1e91a9ae82704506884c7c4bb72c47"
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
    "revision": "fae3d11274ab1d2a49f36a81332b98db"
  },
  {
    "url": "tags/big-data/index.html",
    "revision": "2bd00de192e85d5d380ab629e553764f"
  },
  {
    "url": "tags/certification/index.html",
    "revision": "f960e57456e380b6db5c9bdbece26b4a"
  },
  {
    "url": "tags/cloud/index.html",
    "revision": "688cb1b9fc25a22aab1a827e14feda08"
  },
  {
    "url": "tags/css3/index.html",
    "revision": "f57c315ed6474d348e657548cacd2c4b"
  },
  {
    "url": "tags/deep-learning/index.html",
    "revision": "84e38a61cb2b3ac1bf89915d55f2aa92"
  },
  {
    "url": "tags/docker/index.html",
    "revision": "a9c6b25ea9d6056aee1ea2fbd669e947"
  },
  {
    "url": "tags/doubleclick/index.html",
    "revision": "5ff19192db5c24d772bbd6bfa18bb963"
  },
  {
    "url": "tags/google/index.html",
    "revision": "7a8d1f33acf66499249f29318abecf76"
  },
  {
    "url": "tags/html5/index.html",
    "revision": "d42af4d5f19fa95f373cd9ccc83d3155"
  },
  {
    "url": "tags/i18n/index.html",
    "revision": "a349a1cb1a89ad002ddede51ba5e121f"
  },
  {
    "url": "tags/index.html",
    "revision": "ab53a8ec70095174deaacd3206d1944e"
  },
  {
    "url": "tags/internet-of-things/index.html",
    "revision": "79ccd365b346102600e45b47fb9dd24b"
  },
  {
    "url": "tags/iot/index.html",
    "revision": "16d77085e4bd9a9db42adb2eabcac34d"
  },
  {
    "url": "tags/italian/index.html",
    "revision": "1b8a1a8bf73034404bce73b5255a1c1d"
  },
  {
    "url": "tags/javascript/index.html",
    "revision": "4f868d84bcb1ea21deef1082d2d54d3b"
  },
  {
    "url": "tags/l10n/index.html",
    "revision": "c0037d63717bc30d7a5ffdbdb69166bb"
  },
  {
    "url": "tags/lfce/index.html",
    "revision": "84a6035596063cf452df831f48d8a506"
  },
  {
    "url": "tags/linux/index.html",
    "revision": "4872db5d20af294fa93cf72419bd1ae3"
  },
  {
    "url": "tags/nanodegree/index.html",
    "revision": "da0ee5f97b93d9fef3085f78640c3290"
  },
  {
    "url": "tags/responsive/index.html",
    "revision": "958677755fb756fdad771e525e7117e2"
  },
  {
    "url": "tags/udacity/index.html",
    "revision": "39fca52d7a815d9c4dff04a4a23e2d81"
  },
  {
    "url": "tags/web/index.html",
    "revision": "aed560cbbd25e1e4c1b93aab555bc1e3"
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
