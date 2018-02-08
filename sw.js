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
    "revision": "309b32e86c592cb3f49a8729eeceabf8"
  },
  {
    "url": "blog/google-academy-for-ads-achievements/index.html",
    "revision": "bb7a6b3f024e2802951d601b3e95b261"
  },
  {
    "url": "blog/google-web-designer-certification/index.html",
    "revision": "e1a19b0980a37fdffe0bb8de837f7879"
  },
  {
    "url": "blog/google-webfundamentals-contributions/index.html",
    "revision": "0468885713c7e570de87d6dcae45ecf9"
  },
  {
    "url": "blog/index.html",
    "revision": "f2ec16b51ef99a608316d7690ce718f3"
  },
  {
    "url": "blog/kubernetes-contributions/index.html",
    "revision": "e630ec8d3b523cfe1d42172bf29b93e4"
  },
  {
    "url": "blog/linux-foundation-lfce-certification/index.html",
    "revision": "e0b96527f81044323052a36821e1de37"
  },
  {
    "url": "blog/new-site/index.html",
    "revision": "d0d369396cf7e726770980ad04539338"
  },
  {
    "url": "blog/webfundamentals-contributions/index.html",
    "revision": "2c9b82e6839cd93b6b89546a72ab7a75"
  },
  {
    "url": "blog/website-improvements/index.html",
    "revision": "804678ff57dc273886f7b69e66a2d9cc"
  },
  {
    "url": "categories/ads/index.html",
    "revision": "9b4bd2a96c334b998209304e1dab3d74"
  },
  {
    "url": "categories/certifications/index.html",
    "revision": "41014b80882f911302c871bf4e92ec38"
  },
  {
    "url": "categories/contributions/index.html",
    "revision": "cfe7a5a8f0d256c27185355b3fd50e91"
  },
  {
    "url": "categories/docker/index.html",
    "revision": "c35a39a01ef4afb905652d14a9f322ac"
  },
  {
    "url": "categories/index.html",
    "revision": "69f604213a5c7334ab5692f95a548a74"
  },
  {
    "url": "categories/linux/index.html",
    "revision": "15f9a2e44f3a567d770c2e8dfec287ef"
  },
  {
    "url": "categories/localization/index.html",
    "revision": "fb15d666209d5c36f84df1ba090f5caf"
  },
  {
    "url": "categories/translations/index.html",
    "revision": "006c557d9d33b46342e9d2b5295cfb03"
  },
  {
    "url": "categories/web/index.html",
    "revision": "dd452caa7ab8e6d0f0e1095fbe906c46"
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
    "revision": "968c77590f19eae2bd2413c989269611"
  },
  {
    "url": "it/404.html",
    "revision": "48b40ccbcf3ecbdb77f64d9c611508e2"
  },
  {
    "url": "it/categories/index.html",
    "revision": "2e240c102675ae6dd6f31b05436a221b"
  },
  {
    "url": "it/index.html",
    "revision": "d4916f2d6776de753e7c73166bc7fbe9"
  },
  {
    "url": "it/tags/big-data/index.html",
    "revision": "34f18b88fce095e540a2c8e4b6d24060"
  },
  {
    "url": "it/tags/cloud/index.html",
    "revision": "d9b8a8fe8b263a487a230d22632c0261"
  },
  {
    "url": "it/tags/deep-learning/index.html",
    "revision": "809c259783df2033a4b0a26ba698977d"
  },
  {
    "url": "it/tags/index.html",
    "revision": "4d16c336f0cf7f152cfb19c8e40c3aa7"
  },
  {
    "url": "it/tags/internet-of-things/index.html",
    "revision": "18a269d7093c85368e9e8d8eb548ee16"
  },
  {
    "url": "it/tags/iot/index.html",
    "revision": "e13c3803b5f94555d0b357a6523bc3d1"
  },
  {
    "url": "it/tags/linux/index.html",
    "revision": "59194b44bd998c706bbafe1435e17dbb"
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
    "revision": "c2c900c2c035986e0b0ee27ef467f69f"
  },
  {
    "url": "tags/big-data/index.html",
    "revision": "253bc2a26b2130ff6c6f93f0bd3912a7"
  },
  {
    "url": "tags/certification/index.html",
    "revision": "4520f0f28e07afd01f974e67aeae2975"
  },
  {
    "url": "tags/cloud/index.html",
    "revision": "6e14886c9bc7f0da9b5a4a3ea60d3c6a"
  },
  {
    "url": "tags/css3/index.html",
    "revision": "91d484088f1fa57cfbd61da53529662e"
  },
  {
    "url": "tags/deep-learning/index.html",
    "revision": "e825fdeb7a6e627f4651af463338199e"
  },
  {
    "url": "tags/docker/index.html",
    "revision": "11d277e06491c73a2da1519560a86c5a"
  },
  {
    "url": "tags/doubleclick/index.html",
    "revision": "efaebc0202426e28ff081afb2e5b1d0d"
  },
  {
    "url": "tags/google/index.html",
    "revision": "fd260e79e44ca5b9605663110b595229"
  },
  {
    "url": "tags/html5/index.html",
    "revision": "09b9331f99eb89fe8dff2b649cd13bfa"
  },
  {
    "url": "tags/i18n/index.html",
    "revision": "42bfe0775da2519685408b98dcdb88f1"
  },
  {
    "url": "tags/index.html",
    "revision": "23a78a9e9516b99cff38aeac7a927b60"
  },
  {
    "url": "tags/internet-of-things/index.html",
    "revision": "cc111ed070fa9015e707ba48daa35337"
  },
  {
    "url": "tags/iot/index.html",
    "revision": "ac3825b01355d5a863fc635d3f515396"
  },
  {
    "url": "tags/italian/index.html",
    "revision": "16aa9a32ef3a4055e011f28a5c680cda"
  },
  {
    "url": "tags/javascript/index.html",
    "revision": "efd31291e518468352a151197e5bac74"
  },
  {
    "url": "tags/l10n/index.html",
    "revision": "ac71fa8d249bef6ca5f7b2666468b566"
  },
  {
    "url": "tags/lfce/index.html",
    "revision": "eaf2749ac8b864b7a1e40dbf798ef8f7"
  },
  {
    "url": "tags/linux/index.html",
    "revision": "638a6dd5cc87e4424e36a4c86c681975"
  },
  {
    "url": "tags/web/index.html",
    "revision": "885af00018776a8d35047b34e94b740b"
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
