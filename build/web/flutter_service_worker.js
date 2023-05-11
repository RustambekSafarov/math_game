'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/assets/gif/math-pair-intro.gif": "7dfba61a70a4acffa7ed95ad1986b92e",
"assets/assets/gif/picture-puzzle-intro.gif": "44f64597c597763e8c90552ce7b9f719",
"assets/assets/gif/quick-calculation-intro.gif": "0147e6dd4448889c11efbc0c231fddfc",
"assets/assets/gif/whats-the-sign-intro.gif": "31f4794c9040c94f98c885396fd3c188",
"assets/assets/gif/correct-answer.gif": "b89f105be978b586fc0e7e81228fc181",
"assets/assets/gif/magic-triangle-intro.gif": "8ccb900aa9dffd4907c554e8a4b82c97",
"assets/assets/gif/math-machine-intro.gif": "8a816d7d77864ff51e177cb516e8106f",
"assets/assets/gif/sqroot-intro.gif": "50eff03a65ce1c5a61375deba68d0ffb",
"assets/assets/gif/mental-arith-intro.gif": "772a28f79e5d8bd889976385dcdc1f98",
"assets/assets/gif/calculator-intro.gif": "4c19b153122679b0f2cd293e3de2a36d",
"assets/assets/gif/num-pyramid.gif": "639d2457d73772d0e29342c807daa574",
"assets/assets/fonts/Poppins-Black.ttf": "14d00dab1f6802e787183ecab5cce85e",
"assets/assets/fonts/Poppins-Regular.ttf": "093ee89be9ede30383f39a899c485a82",
"assets/assets/fonts/Montserrat-Regular.ttf": "ee6539921d713482b8ccd4d0d23961bb",
"assets/assets/fonts/Montserrat-Light.ttf": "409c7f79a42e56c785f50ed37535f0be",
"assets/assets/fonts/Montserrat-Medium.ttf": "c8b6e083af3f94009801989c3739425e",
"assets/assets/fonts/Montserrat-SemiBold.ttf": "c641dbee1d75892e4d88bdc31560c91b",
"assets/assets/images/ic_mathematical_pairs.svg": "3e66e0aebcf6cc22cd4ef23bb71afeee",
"assets/assets/images/ic_mental_arithmetic.svg": "df617617e3def36e1cc786357f635091",
"assets/assets/images/ic_square_root.svg": "57423b3240377a5b419c01124e00df74",
"assets/assets/images/ic_memory_puzzle.svg": "848be07d6d947377f6eb252a64b0b271",
"assets/assets/images/ic_3d_stairs_dark.svg": "a4efa2d29d24a4a0fa0c13875c22abf1",
"assets/assets/images/ic_quick_calculation.svg": "f2562487063c1accd3a513edabc2592d",
"assets/assets/images/bg_small_button_dark.png": "04d25e3811881864e8b3787fd17f6f48",
"assets/assets/images/ic_train_brain_outline.svg": "3281f89e63e7662ba6a2291bddb713d9",
"assets/assets/images/bg_large_button.png": "4ece65dd508ff39e8de24daa14cb9873",
"assets/assets/images/ic_correct_answer.svg": "45da5d2766a531035ca1d2e6ee77f91e",
"assets/assets/images/ic_guess_the_sign.svg": "c6423a9d75e93a95515b54e9bdf7b676",
"assets/assets/images/ic_math_puzzle.svg": "385b5ec7e26a1e1c92d3d55e576a45ba",
"assets/assets/images/app_icon.png": "a9ad2899aa430ffb33374bb06970a429",
"assets/assets/images/banner.png": "67b6e758aa19ca4e1306a04293701699",
"assets/assets/images/ic_3d_stairs_light.svg": "f04895472c0f8f7317ce5e59a60ce8b1",
"assets/assets/images/bg_small_button.png": "cf41dee0d5644f8d9e9ab3380dc11f7f",
"assets/assets/images/ic_dark_mode.svg": "98e9eee5c47db96fe9901f17eadf4a2a",
"assets/assets/images/ic_light_mode.svg": "e338aa2de506e91384bb0fefee05a382",
"assets/assets/images/ic_math_grid.svg": "f36980f83a5907d5478f7f8a0e659709",
"assets/assets/images/ic_play_circle_filled.svg": "d786bcaf33492444f71ff5a39f2ac096",
"assets/assets/images/ic_home_bg.svg": "35fa3fec5bf550b5983534770808beea",
"assets/assets/images/ic_magic_triangle.svg": "4d4e6af43ba5d8d87d411dbcc0f922ca",
"assets/assets/images/ic_math_puzzle_outline.svg": "9a399bb6ab3d2eb8810796cc2250275c",
"assets/assets/images/ic_number_pyramid.svg": "e5089041d0605cc9387e812349df8b61",
"assets/assets/images/ic_train_brain.svg": "dcba3aa44869eab6591f4287a1dc727d",
"assets/assets/images/ic_root.svg": "2f321b408a9eebff244c8aadf11b46b4",
"assets/assets/images/ic_memory_puzzle_outline.svg": "0a88afe960ef310da40d87a292a657cf",
"assets/assets/images/bg_large_button_dark.png": "b97c65e862804d774eba3d365c15f9dd",
"assets/assets/images/ic_picture_puzzle.svg": "fa6e9631ba2d834a5cdc77277ece0a75",
"assets/assets/images/ic_calculator.svg": "36a88b0a6d30403298ff57724aa9f67e",
"assets/assets/images/ic_trophy.svg": "adeb1aa5eb3aefc60bca67d8ad6c05cb",
"assets/assets/images/ic_coin.svg": "577a1bf392af1b392d25377f5e4ea8c5",
"assets/assets/images/ic_button_shape.svg": "2a10b061d276d0ddbe9e4acbb780b4cc",
"assets/fonts/MaterialIcons-Regular.otf": "e7069dfd19b331be16bed984668fe080",
"assets/NOTICES": "9ad4212edcf6c61780c67cd42829bb37",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/easy_localization/i18n/en.json": "5f5fda8715e8bf5116f77f469c5cf493",
"assets/packages/easy_localization/i18n/ar-DZ.json": "acc0a8eebb2fcee312764600f7cc41ec",
"assets/packages/easy_localization/i18n/ar.json": "acc0a8eebb2fcee312764600f7cc41ec",
"assets/packages/easy_localization/i18n/en-US.json": "5f5fda8715e8bf5116f77f469c5cf493",
"assets/FontManifest.json": "3e24f038b1e7239527759bc7cca6716b",
"assets/AssetManifest.json": "72694b25c631072b062ebf0355b7f4fd",
"index.html": "a244bfe2c873c096a1908bdea23457a2",
"/": "a244bfe2c873c096a1908bdea23457a2",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"manifest.json": "9c5cf55b3619e9d8e5359b0bf86f6f8f",
"version.json": "c34380be29bff4196157cbc3d9a08bee",
"flutter.js": "a85fcf6324d3c4d3ae3be1ae4931e9c5",
"main.dart.js": "faed48369c5ab2a5cd2dedfa2af2ec73",
"canvaskit/canvaskit.wasm": "3de12d898ec208a5f31362cc00f09b9e",
"canvaskit/profiling/canvaskit.wasm": "371bc4e204443b0d5e774d64a046eb99",
"canvaskit/profiling/canvaskit.js": "c21852696bc1cc82e8894d851c01921a",
"canvaskit/canvaskit.js": "97937cb4c2c2073c968525a3e08c86a3"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
