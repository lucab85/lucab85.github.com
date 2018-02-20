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
    "revision": "f3338108bfeda880b2029910f938ad8c"
  },
  {
    "url": "blog/google-academy-for-ads-achievements/index.html",
    "revision": "9195f081203e7203bc31b28600fc300e"
  },
  {
    "url": "blog/google-web-designer-certification/index.html",
    "revision": "e1a19b0980a37fdffe0bb8de837f7879"
  },
  {
    "url": "blog/google-webfundamentals-contributions/index.html",
    "revision": "7046f1a3060b40c6da3d446bc73d07b4"
  },
  {
    "url": "blog/index.html",
    "revision": "cd07a6148822644dea2de93a860f27ac"
  },
  {
    "url": "blog/kubernetes-contributions/index.html",
    "revision": "644a53c1c1f8f2712ef346ada29f9094"
  },
  {
    "url": "blog/linux-foundation-lfce-certification/index.html",
    "revision": "81404d2d28e10f2438aae9db3b2966c6"
  },
  {
    "url": "blog/mobile-web-specialist-nanodegree/index.html",
    "revision": "0abb5aa6746156d2cb801690cf337e2d"
  },
  {
    "url": "blog/new-site/index.html",
    "revision": "d3e738a0fe103c5a0a0f162ac5ee7f70"
  },
  {
    "url": "blog/webfundamentals-contributions/index.html",
    "revision": "2c9b82e6839cd93b6b89546a72ab7a75"
  },
  {
    "url": "blog/website-improvements/index.html",
    "revision": "f933e0de62b364eecdfe8a6ee2259420"
  },
  {
    "url": "categories/ads/index.html",
    "revision": "11dc9e69c4db1d6c0a3988b284f29e04"
  },
  {
    "url": "categories/certifications/index.html",
    "revision": "3a50b618ed018ac1e053aeaa66b92932"
  },
  {
    "url": "categories/contributions/index.html",
    "revision": "8a5cf536e6b717e044c0ab0283417174"
  },
  {
    "url": "categories/docker/index.html",
    "revision": "d5f2d1be50b3066e7e6af2ff442d4492"
  },
  {
    "url": "categories/google/index.html",
    "revision": "1624b427b03cf8f6cd689691a882a7ef"
  },
  {
    "url": "categories/index.html",
    "revision": "d6238782e936a35d5b5d0db7ebb2f895"
  },
  {
    "url": "categories/linux/index.html",
    "revision": "9b75cfce64365a9421960822960255b7"
  },
  {
    "url": "categories/localization/index.html",
    "revision": "a3845718d58b33e615497adc449f46e3"
  },
  {
    "url": "categories/translations/index.html",
    "revision": "38fd3aa8a26ac6d7f314aca8a13943b9"
  },
  {
    "url": "categories/udacity/index.html",
    "revision": "19aaf8161f15b1957c7fa9863f32f016"
  },
  {
    "url": "categories/web/index.html",
    "revision": "0179514ac588653e7aac424e20e7ea19"
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
    "revision": "d6bd9cf1b8831b38fff85140d36a1968"
  },
  {
    "url": "it/404.html",
    "revision": "23e95b279748ff79416d5776b09e21b5"
  },
  {
    "url": "it/categories/index.html",
    "revision": "4dfa9b9bc5b5be19672ac8957c4a308a"
  },
  {
    "url": "it/index.html",
    "revision": "10f282232caed43cacfd95915c848f8b"
  },
  {
    "url": "it/tags/big-data/index.html",
    "revision": "d20a387d9f5bf818669bcb7472a6b48c"
  },
  {
    "url": "it/tags/cloud/index.html",
    "revision": "27faad91459f572c6f162746ff9e6c6c"
  },
  {
    "url": "it/tags/deep-learning/index.html",
    "revision": "2908c68e30e6b8fc6cf888a7d802a449"
  },
  {
    "url": "it/tags/index.html",
    "revision": "0beca0f10efea9c7f10e729fec15609f"
  },
  {
    "url": "it/tags/internet-of-things/index.html",
    "revision": "be802b9a5317945d42876b04d86117b9"
  },
  {
    "url": "it/tags/iot/index.html",
    "revision": "b7a3cf885880c31d04b3f138c5d88345"
  },
  {
    "url": "it/tags/linux/index.html",
    "revision": "a44a31cff7340b6e6e7a92a8ce866521"
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
    "revision": "f4015e22c7ee9dbc4e080809b88c15a9"
  },
  {
    "url": "tags/big-data/index.html",
    "revision": "76f10902fbb82ac400a1f5b372324bf6"
  },
  {
    "url": "tags/certification/index.html",
    "revision": "2e3784b68e5f939a9298877d890a0e87"
  },
  {
    "url": "tags/cloud/index.html",
    "revision": "fc3569dd1dfe8aec4ec887b93a89da2a"
  },
  {
    "url": "tags/css3/index.html",
    "revision": "b447303992c1ce85d3592c675305f0f6"
  },
  {
    "url": "tags/deep-learning/index.html",
    "revision": "1bbd0c8f1af68df7da17abbe541f53c4"
  },
  {
    "url": "tags/docker/index.html",
    "revision": "32d5d024cbd5b8c8f3a0a2f5af10bdb9"
  },
  {
    "url": "tags/doubleclick/index.html",
    "revision": "8a98fc26b7327e9e8360d930ea051ad7"
  },
  {
    "url": "tags/google/index.html",
    "revision": "662abeb6a0bc12c9d0afa6f1dad778eb"
  },
  {
    "url": "tags/html5/index.html",
    "revision": "8acfbcbd210ab703c78a59be796c9251"
  },
  {
    "url": "tags/i18n/index.html",
    "revision": "e4aea22f618b1f5267e13aeb652951e6"
  },
  {
    "url": "tags/index.html",
    "revision": "ad7333e413f3912c00e946f13218e54e"
  },
  {
    "url": "tags/internet-of-things/index.html",
    "revision": "a07ac061d454461c85756a71e7dc6734"
  },
  {
    "url": "tags/iot/index.html",
    "revision": "6e0c99d4b28f99d6ac9a5ee76cabce6f"
  },
  {
    "url": "tags/italian/index.html",
    "revision": "b1014851929edfa6bf8e3b2a1e144d42"
  },
  {
    "url": "tags/javascript/index.html",
    "revision": "5bb318144997ad21fbad8d7126d5c30b"
  },
  {
    "url": "tags/l10n/index.html",
    "revision": "ade26a837a878e1319d7233a309eee7d"
  },
  {
    "url": "tags/lfce/index.html",
    "revision": "a3f1b2089c84c331913f38eef7d59ed1"
  },
  {
    "url": "tags/linux/index.html",
    "revision": "c46f4e22752543a384c56ab41e3397fa"
  },
  {
    "url": "tags/nanodegree/index.html",
    "revision": "98ece6e67b488a5fab1e34406a99b7ab"
  },
  {
    "url": "tags/udacity/index.html",
    "revision": "104bb1dce629303a63ba57c841002439"
  },
  {
    "url": "tags/web/index.html",
    "revision": "da334f62160bff9658847cc97d1f1a2f"
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
