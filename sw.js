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
    "revision": "adcca49375d398f486463e1b4daef04a"
  },
  {
    "url": "blog/google-academy-for-ads-achievements/index.html",
    "revision": "417eac2ba2e40f229dfb556ff015863c"
  },
  {
    "url": "blog/google-web-designer-certification/index.html",
    "revision": "e1a19b0980a37fdffe0bb8de837f7879"
  },
  {
    "url": "blog/google-webfundamentals-contributions/index.html",
    "revision": "6d3ba58b23a105baaf9191cbc1fae8e7"
  },
  {
    "url": "blog/index.html",
    "revision": "5d057226c2163921a91850bfd045a24c"
  },
  {
    "url": "blog/kubernetes-contributions/index.html",
    "revision": "595a077614bb893f08167e3634c14c49"
  },
  {
    "url": "blog/linux-foundation-lfce-certification/index.html",
    "revision": "d1c02f134ef40ecb2b8fb70efceaad7d"
  },
  {
    "url": "blog/mobile-web-specialist-nanodegree/index.html",
    "revision": "584027a13c6b3456cb453ba696111d8d"
  },
  {
    "url": "blog/new-site/index.html",
    "revision": "a9ace7eca9f5e9e0bc18a370d1717d97"
  },
  {
    "url": "blog/webfundamentals-contributions/index.html",
    "revision": "2c9b82e6839cd93b6b89546a72ab7a75"
  },
  {
    "url": "blog/website-improvements/index.html",
    "revision": "53528d20a1ea2c0332bed89d832aee5c"
  },
  {
    "url": "categories/ads/index.html",
    "revision": "87ae5897404f0a13444002989f4a13fc"
  },
  {
    "url": "categories/certifications/index.html",
    "revision": "b76f37b3fca0105f7af1bfd26c11fb86"
  },
  {
    "url": "categories/contributions/index.html",
    "revision": "eb8180f9091f7db2c0deaea014160346"
  },
  {
    "url": "categories/docker/index.html",
    "revision": "d3889c9d26fd4e640c5c481c4fc21274"
  },
  {
    "url": "categories/google/index.html",
    "revision": "3570d14f81a142c59917f4586922cd61"
  },
  {
    "url": "categories/index.html",
    "revision": "29613ebade5d03c1c3d99bb5f36ea866"
  },
  {
    "url": "categories/linux/index.html",
    "revision": "7d812f29e548390485b824894325e331"
  },
  {
    "url": "categories/localization/index.html",
    "revision": "5cc3920138b829baaeafa27ee558d4da"
  },
  {
    "url": "categories/translations/index.html",
    "revision": "a42ac1023a9d1b70934dba3945033533"
  },
  {
    "url": "categories/udacity/index.html",
    "revision": "dd440ae923cfe4243858c029e9077997"
  },
  {
    "url": "categories/web/index.html",
    "revision": "8b3315ed42fa0cab989a4fd5c70c485c"
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
    "revision": "19df622b783c685b6f9c041fcbbdec90"
  },
  {
    "url": "it/404.html",
    "revision": "b8a750dc5fefb0ca9d14f757b78829ea"
  },
  {
    "url": "it/categories/index.html",
    "revision": "5eff2913582376f648678a2c8aa8aab0"
  },
  {
    "url": "it/index.html",
    "revision": "4788057f209b58a6636b5cbf22a26d00"
  },
  {
    "url": "it/tags/big-data/index.html",
    "revision": "6dd7c0cab554fb58d27bc94ebd7ca001"
  },
  {
    "url": "it/tags/cloud/index.html",
    "revision": "f7144b21c63e2b9fae1a8869a6f599e2"
  },
  {
    "url": "it/tags/deep-learning/index.html",
    "revision": "bbad40a7e6c23849b8efc94c247ec0b6"
  },
  {
    "url": "it/tags/index.html",
    "revision": "b6aebc84e89d12c5cf7c472d2c0eb363"
  },
  {
    "url": "it/tags/internet-of-things/index.html",
    "revision": "0ee392a8f2ef7a52f1a181e09c26e7b8"
  },
  {
    "url": "it/tags/iot/index.html",
    "revision": "43d5e9bf2a2f9b00f3b507045e9f5a68"
  },
  {
    "url": "it/tags/linux/index.html",
    "revision": "4d0d82c543b1cbc2a45525b521657ed3"
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
    "revision": "1f266e17ce0880629f750aba07531653"
  },
  {
    "url": "tags/big-data/index.html",
    "revision": "77a08284f96a716b96c5a006302c6ce8"
  },
  {
    "url": "tags/certification/index.html",
    "revision": "547f53545b6c07f26f290d8e053da16b"
  },
  {
    "url": "tags/cloud/index.html",
    "revision": "938e8b70c6dda3192b133621570dc37a"
  },
  {
    "url": "tags/css3/index.html",
    "revision": "fd0ca6cb9c887bf384f82bb096309a84"
  },
  {
    "url": "tags/deep-learning/index.html",
    "revision": "ae3f32412eda5c0eff3a725bc8e1c9d5"
  },
  {
    "url": "tags/docker/index.html",
    "revision": "92a7868eac30e26337905e1eacd8da79"
  },
  {
    "url": "tags/doubleclick/index.html",
    "revision": "eb9f46cebe2232af5b81510cc66fd9cf"
  },
  {
    "url": "tags/google/index.html",
    "revision": "f6ca170e23cdf06a1c299aff3c68489c"
  },
  {
    "url": "tags/html5/index.html",
    "revision": "11a7b24ee2d6e0fc4f35c4a124b1432b"
  },
  {
    "url": "tags/i18n/index.html",
    "revision": "4b8b0b07da70c59fc32a2ec4e65b4895"
  },
  {
    "url": "tags/index.html",
    "revision": "2aae3878cd72eb7506b93588fc8a4f43"
  },
  {
    "url": "tags/internet-of-things/index.html",
    "revision": "4851ea83ed3ecfca5248b6c9508e2818"
  },
  {
    "url": "tags/iot/index.html",
    "revision": "edadf9c27ad3e64bd02dcbc87f0ac637"
  },
  {
    "url": "tags/italian/index.html",
    "revision": "02d48be6796ce936f4fe2e0f5606622c"
  },
  {
    "url": "tags/javascript/index.html",
    "revision": "fd14876f78a9c347fb3916c29eb65d06"
  },
  {
    "url": "tags/l10n/index.html",
    "revision": "b2727ca5a94c42b7851b25416bad8007"
  },
  {
    "url": "tags/lfce/index.html",
    "revision": "4981c7cb00cdfb1511748c159c897999"
  },
  {
    "url": "tags/linux/index.html",
    "revision": "d54af2f74d356f181260d02ba873b6d9"
  },
  {
    "url": "tags/nanodegree/index.html",
    "revision": "d8f72ed16321d5eee65cf9da65d0f9af"
  },
  {
    "url": "tags/udacity/index.html",
    "revision": "44fba036417727d22e16fd581dcc5338"
  },
  {
    "url": "tags/web/index.html",
    "revision": "52ecc6f9e539abc9897fbe095e60b2d3"
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
