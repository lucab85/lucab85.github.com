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
    "revision": "017f3fc30b9dd57c5597bed4ec27c317"
  },
  {
    "url": "blog/google-academy-for-ads-achievements/index.html",
    "revision": "3e81c79c5683ecf27c7ee397f9a8d93a"
  },
  {
    "url": "blog/google-web-designer-certification/index.html",
    "revision": "e1a19b0980a37fdffe0bb8de837f7879"
  },
  {
    "url": "blog/google-webfundamentals-contributions/index.html",
    "revision": "3ddd8e31821bbe08ef9b912ed717e68a"
  },
  {
    "url": "blog/index.html",
    "revision": "04be772f3622aa3acb319c204ae2291d"
  },
  {
    "url": "blog/kubernetes-contributions/index.html",
    "revision": "9f513399560d04b84a8e76166ba79d58"
  },
  {
    "url": "blog/linux-foundation-lfce-certification/index.html",
    "revision": "ccfefc21df92565995a2e2982dd2034e"
  },
  {
    "url": "blog/new-site/index.html",
    "revision": "6cbc70acf0f2f0a2dafe32c4568c53a4"
  },
  {
    "url": "blog/webfundamentals-contributions/index.html",
    "revision": "2c9b82e6839cd93b6b89546a72ab7a75"
  },
  {
    "url": "blog/website-improvements/index.html",
    "revision": "9b03e4b162b04c8a84fbff47b31756ee"
  },
  {
    "url": "categories/ads/index.html",
    "revision": "d44168a9c1be91019ae34537ed6c237f"
  },
  {
    "url": "categories/certifications/index.html",
    "revision": "e457eff06ccdf272d0df44c6ff72c252"
  },
  {
    "url": "categories/contributions/index.html",
    "revision": "3808c1ef718e15d5dab188b62ac542ac"
  },
  {
    "url": "categories/docker/index.html",
    "revision": "8349f030afec7cb96e8cd5113baae530"
  },
  {
    "url": "categories/linux/index.html",
    "revision": "759ba950929ca6e0c2cfeb558e3b7266"
  },
  {
    "url": "categories/localization/index.html",
    "revision": "ac22c0b796ae7b34b723deb31deae9cc"
  },
  {
    "url": "categories/translations/index.html",
    "revision": "3af32ff3ad264df1e828e98729a08cc6"
  },
  {
    "url": "categories/web/index.html",
    "revision": "0754b8a240d60ebc791f4185a22291dc"
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
    "revision": "0e6498d49bf2452c375be86673502d9b"
  },
  {
    "url": "it/404.html",
    "revision": "b678b97df7c75ec48bb5bfe4cc080562"
  },
  {
    "url": "it/index.html",
    "revision": "0272bf86fb63ccfa13d72dd1093ecc13"
  },
  {
    "url": "it/tags/big-data/index.html",
    "revision": "6cb4ee28fe489abc0bdac24f130a8964"
  },
  {
    "url": "it/tags/cloud/index.html",
    "revision": "5afaf81d1585aa85817e998364a599fb"
  },
  {
    "url": "it/tags/deep-learning/index.html",
    "revision": "b967eaefe95ad839f064863011207ab0"
  },
  {
    "url": "it/tags/internet-of-things/index.html",
    "revision": "77ca04290b402d5107b51dd5cb0347da"
  },
  {
    "url": "it/tags/iot/index.html",
    "revision": "59ef28ab9cce3e0296cecb46a4fe8481"
  },
  {
    "url": "it/tags/linux/index.html",
    "revision": "dde16ad342cd10f159d650f91308af9c"
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
    "revision": "8cc5c9a874a85b8b8a32beca0ab6bf93"
  },
  {
    "url": "tags/big-data/index.html",
    "revision": "7747a0504bb8791d60f350c31b66713b"
  },
  {
    "url": "tags/certification/index.html",
    "revision": "a2d506b8486be47cd71a4d272d16bcb5"
  },
  {
    "url": "tags/cloud/index.html",
    "revision": "aca0c5c22d436f731e7a5f3d2b40e948"
  },
  {
    "url": "tags/css3/index.html",
    "revision": "fd2ea0afa75f90b4606204a6071a7752"
  },
  {
    "url": "tags/deep-learning/index.html",
    "revision": "448a50c0a0fa9354b1faad6d4224526b"
  },
  {
    "url": "tags/docker/index.html",
    "revision": "772c9669b9ea3574c867d7d67d0687be"
  },
  {
    "url": "tags/doubleclick/index.html",
    "revision": "86754024ecc1c09d235b1c4f6176759a"
  },
  {
    "url": "tags/google/index.html",
    "revision": "868679120217f092a0c19cd0c5e95874"
  },
  {
    "url": "tags/html5/index.html",
    "revision": "873f74c1e8611fd2b65c3a5f1107d420"
  },
  {
    "url": "tags/i18n/index.html",
    "revision": "afcb52fc3d8460e4b7488b23445bf94c"
  },
  {
    "url": "tags/internet-of-things/index.html",
    "revision": "1d184e36f062f1e5fbf7dd7639685c9a"
  },
  {
    "url": "tags/iot/index.html",
    "revision": "9e96717e376f36bc2d4a49cd8d5c2885"
  },
  {
    "url": "tags/italian/index.html",
    "revision": "7cef1d7d498999cbba5696177f2bf161"
  },
  {
    "url": "tags/javascript/index.html",
    "revision": "fa438cb07ebbc8664967b2efa7a3b32f"
  },
  {
    "url": "tags/l10n/index.html",
    "revision": "9bbb13f87417621b63d9ef187c37e692"
  },
  {
    "url": "tags/lfce/index.html",
    "revision": "b19074cac508550ab84e3823c2f605db"
  },
  {
    "url": "tags/linux/index.html",
    "revision": "4b3acd4b3c54fc5f34906d4090b57fe3"
  },
  {
    "url": "tags/web/index.html",
    "revision": "a46d4e2c20f6fe69f5025a2b3877c3fd"
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
