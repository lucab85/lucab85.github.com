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
    "revision": "270d84e4ec36ae3cdd47bdb77cbbbc57"
  },
  {
    "url": "blog/google-academy-for-ads-achievements/index.html",
    "revision": "56c1644f586318895f8af94d5ac5ea0b"
  },
  {
    "url": "blog/google-web-designer-certification/index.html",
    "revision": "e1a19b0980a37fdffe0bb8de837f7879"
  },
  {
    "url": "blog/google-webfundamentals-contributions/index.html",
    "revision": "6f03855b523294fa0562038589486f26"
  },
  {
    "url": "blog/index.html",
    "revision": "810905e3facf3816c4dd38ea00dbb3ad"
  },
  {
    "url": "blog/kubernetes-contributions/index.html",
    "revision": "a196ea6aa13d321bbf39af161852d123"
  },
  {
    "url": "blog/linux-foundation-lfce-certification/index.html",
    "revision": "0f1895465bb6fc8e3313950da8a3445b"
  },
  {
    "url": "blog/mobile-web-specialist-nanodegree/index.html",
    "revision": "4a4bc2e73d0f88910d84e3ef7eb20539"
  },
  {
    "url": "blog/new-site/index.html",
    "revision": "3784f37b10d2fd4d4ba382ac4b6fbe5a"
  },
  {
    "url": "blog/responsive-design-snippets/index.html",
    "revision": "e33ad4582994eea2ba4f3fc532c6938b"
  },
  {
    "url": "blog/webfundamentals-contributions/index.html",
    "revision": "2c9b82e6839cd93b6b89546a72ab7a75"
  },
  {
    "url": "blog/website-improvements/index.html",
    "revision": "0b07aa7a339229a76dc081d8b3ddc4f6"
  },
  {
    "url": "categories/ads/index.html",
    "revision": "e1533b0c99673ef14c5e295099f576ec"
  },
  {
    "url": "categories/certifications/index.html",
    "revision": "6daaae43e46bf0c745020c9e95555592"
  },
  {
    "url": "categories/contributions/index.html",
    "revision": "8016787d6ed79ac741fd358cd3f40085"
  },
  {
    "url": "categories/design/index.html",
    "revision": "31ccec2df028124294497d3d7cba37c0"
  },
  {
    "url": "categories/docker/index.html",
    "revision": "fce33937e60edeadd1aaafa864338fc1"
  },
  {
    "url": "categories/google/index.html",
    "revision": "00b96741dcf77ec98afc4d013a91535b"
  },
  {
    "url": "categories/index.html",
    "revision": "5c67f534f9b8abf81f8d325e7a672461"
  },
  {
    "url": "categories/linux/index.html",
    "revision": "a4efeb17686fd367ba7596ba3e6ebaba"
  },
  {
    "url": "categories/localization/index.html",
    "revision": "ab81e1b4379aad04638b4f51f1422917"
  },
  {
    "url": "categories/translations/index.html",
    "revision": "405c6a9520769120171f7dee78674021"
  },
  {
    "url": "categories/tutorial/index.html",
    "revision": "b24f4460737f058879e30befd9fe164f"
  },
  {
    "url": "categories/udacity/index.html",
    "revision": "9dfa7a0955982fa0990371438633fb60"
  },
  {
    "url": "categories/web/index.html",
    "revision": "4fa99770c97154367d2d8e1b7974a072"
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
    "revision": "2890ccbea0d613888962072fed3e9ad9"
  },
  {
    "url": "it/404.html",
    "revision": "ae17862e2d5254454e0c253fe5fb13a4"
  },
  {
    "url": "it/categories/index.html",
    "revision": "bcec281fc9703a652f29ceab33619267"
  },
  {
    "url": "it/index.html",
    "revision": "074d6fb9bfc53ea9bc632c403a0dc576"
  },
  {
    "url": "it/tags/big-data/index.html",
    "revision": "63c1f567487f30d2deed27cdd56e58ce"
  },
  {
    "url": "it/tags/cloud/index.html",
    "revision": "54d2363ab2155908e26d06dc81e914d6"
  },
  {
    "url": "it/tags/deep-learning/index.html",
    "revision": "4442a171db8c9b6ae89644da1b98a0b4"
  },
  {
    "url": "it/tags/index.html",
    "revision": "766b51a6832f8f855411094534ae6b12"
  },
  {
    "url": "it/tags/internet-of-things/index.html",
    "revision": "5b740f6e10007b81da00d196da541146"
  },
  {
    "url": "it/tags/iot/index.html",
    "revision": "9f3634d14b4b3a4a71072bf09cf5bc71"
  },
  {
    "url": "it/tags/linux/index.html",
    "revision": "02c6271b681baaa93201a12352ffb794"
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
    "revision": "632d5b8064a5290a3df634d4d909a540"
  },
  {
    "url": "tags/big-data/index.html",
    "revision": "aab1e82dcaee61f3032f9d22f10a2a75"
  },
  {
    "url": "tags/certification/index.html",
    "revision": "8fc15ffbb5b3533bec099baa860f7e82"
  },
  {
    "url": "tags/cloud/index.html",
    "revision": "daf4981fec9b46bc0807112f36b40958"
  },
  {
    "url": "tags/css3/index.html",
    "revision": "6c97ff5e626bc1ed9a182acfd066c067"
  },
  {
    "url": "tags/deep-learning/index.html",
    "revision": "a3cbe08d61602865d07279e90eebc08f"
  },
  {
    "url": "tags/docker/index.html",
    "revision": "a4376cdbc125bf877309449ab307d543"
  },
  {
    "url": "tags/doubleclick/index.html",
    "revision": "403438b51c95732c1b55be45ac4ebe02"
  },
  {
    "url": "tags/google/index.html",
    "revision": "77d8c6799648623cbbed1c3ceff66afc"
  },
  {
    "url": "tags/html5/index.html",
    "revision": "513537ec70c53136c0c16ccc728355af"
  },
  {
    "url": "tags/i18n/index.html",
    "revision": "58368ae8587731c5d33c48916b24eb7a"
  },
  {
    "url": "tags/index.html",
    "revision": "7bad5106180c848098f3510506900e6e"
  },
  {
    "url": "tags/internet-of-things/index.html",
    "revision": "0ae543b4bac5633c4c9d89f9540dde98"
  },
  {
    "url": "tags/iot/index.html",
    "revision": "f2b432a3483399a95ab8d807f9383349"
  },
  {
    "url": "tags/italian/index.html",
    "revision": "359e51f2f249f505d23f1d8ab2572304"
  },
  {
    "url": "tags/javascript/index.html",
    "revision": "ab3a963effe036172b94cb69a3bb5d96"
  },
  {
    "url": "tags/l10n/index.html",
    "revision": "023524f9fe76cab96900433b895046a4"
  },
  {
    "url": "tags/lfce/index.html",
    "revision": "a3ec4742ad8891407701296a246c6d87"
  },
  {
    "url": "tags/linux/index.html",
    "revision": "4a1490f6b02c1a4a90f44d2a786d1fe7"
  },
  {
    "url": "tags/nanodegree/index.html",
    "revision": "859bf1df3ed83ea7220c503ceb8e456c"
  },
  {
    "url": "tags/responsive/index.html",
    "revision": "67fbbe82f8043c0412e63f3e8efdd69f"
  },
  {
    "url": "tags/udacity/index.html",
    "revision": "8929b81f43e6f1875cc7685a767c8105"
  },
  {
    "url": "tags/web/index.html",
    "revision": "91b3c5d929993186d90e48af291f01b9"
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
