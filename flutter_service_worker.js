'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "6f49399438bfcfe348fa61da70ba00d2",
"assets/assets/animations/bg_night.json": "cacfe4d1d254d8d9f98679c0e2b9620b",
"assets/assets/animations/bubbles.json": "7f3ca347ebb1a55e2a58cc6b88325c87",
"assets/assets/animations/christmas_bg.json": "873b86f443ea2bb77462bd276d19026a",
"assets/assets/animations/contact.json": "c6c1d8aa759bb8ef5e137f173336524f",
"assets/assets/animations/day_night.json": "e304ed64c54b823b6823e6603963417f",
"assets/assets/animations/developer.json": "0904c457725911112821b684efa1637a",
"assets/assets/animations/email.json": "56275d515bf85c0a6e23f82d48806a1b",
"assets/assets/animations/email_me.json": "34f53c197feea09e2913224a202d94d3",
"assets/assets/animations/facebook.json": "26c8ddd4a8b30130487da6a63692b75e",
"assets/assets/animations/fireworks.json": "b43391d5745d8bc10edfc441bea053da",
"assets/assets/animations/github_black.json": "122b9e4a9c57a3cef07704cf16685ea0",
"assets/assets/animations/github_white.json": "87560f339072fc15e3531d825eb97f91",
"assets/assets/animations/gradient_bg.json": "58bbd23299d5113ed52d5db8eed681b6",
"assets/assets/animations/hearts_bg.json": "616b2ac48516ed7d15b617f82ae4bf24",
"assets/assets/animations/hello.json": "cdbc6cacfec82fab33746d1911356e63",
"assets/assets/animations/instagram.json": "a48aab6508efa89cc998074bd5bd7e05",
"assets/assets/animations/linkedin.json": "497dab9c3874078a7088612e5753ea7c",
"assets/assets/animations/location.json": "8b3e7de2632792287826148c03d79ebf",
"assets/assets/animations/night.json": "cbc4d2abb6dbcfd942cf42202f1e8927",
"assets/assets/animations/shapes_bg.json": "809620f7c2aec6c6e0174de6e1359a49",
"assets/assets/animations/skyfall_ufo.json": "499eb98dd3c7c263b81aa29b2ade4c61",
"assets/assets/animations/sky_space.json": "60656c77cc13e4e128a74343fd04b755",
"assets/assets/animations/starry_bg.json": "24ad0253be2a48a06cd7448691c9e5c5",
"assets/assets/animations/switch_daynight.json": "c6aba44a865042e443b38966563c9ba5",
"assets/assets/animations/twitter.json": "b485cab12c12995f625927f3ea88368d",
"assets/assets/animations/welcome_one.json": "7732a109d7bccd72a9ac2163d7d099d4",
"assets/assets/animations/welcome_two.json": "b050db78fdc2d5dcd5ca235153dfe4bb",
"assets/assets/icons/behance.png": "8475fa3a497b6cb9ebe415168e8d417f",
"assets/assets/icons/discord.png": "b3c6afd7b12bdaac96f2680f68e95656",
"assets/assets/icons/dribbble.png": "0e8343544f286cdc9bd15498bdd9e83e",
"assets/assets/icons/facebook.png": "913b2eacf8118e706cc8b4ff13c63cc1",
"assets/assets/icons/instagram.png": "812405b84294c3a711da89aadb77fca2",
"assets/assets/icons/linkedin.png": "7a5bd8aa7d19880de32db433f242ab9b",
"assets/assets/icons/reddit.png": "395bcf9b609b52ae6d1455f93053851c",
"assets/assets/icons/telegram.png": "0bdd3de86d82a4cf52536654204762ac",
"assets/assets/icons/twitter.png": "0821d99118895f7b3dd2bc5cbf616276",
"assets/assets/img/coding.png": "25163958644518a2fb656dfd4ab8b6cd",
"assets/assets/img/favicon.ico": "d63aa4d93119c56e9c42ade156339fc8",
"assets/assets/img/flutter.png": "a39807a4878aa03a393a27e680ac1c94",
"assets/assets/img/logo.png": "be4b92e2c9ab729f79e2b4364c395496",
"assets/assets/img/mobile_app.png": "4d79f409509d6a70b4dfeca39c38de7b",
"assets/assets/img/mutify_banner.png": "beed8d8d0a7aaad47166debe5a7ab57f",
"assets/assets/img/mutify_logo.png": "172f0bce6c44dca2ee2c44b4c2aa40b4",
"assets/assets/img/portfolio_feedback.png": "d395ae5252d0467286db409c432daac0",
"assets/assets/img/programming.png": "b61c8a6823d4d51afc9788b3a428f9e9",
"assets/assets/img/social_media.png": "d8911ae5ef8d0d245e4e2184b8cef2f6",
"assets/assets/img/teekamsuthar_tattoo.jpg": "7a11fa9a390b1c77840eb1feb6dee49f",
"assets/assets/img/welcome_cats.png": "074fc00aa9b3e6dc66fb648765e4fdc7",
"assets/FontManifest.json": "5a32d4310a6f5d9a6b651e75ba0d7372",
"assets/fonts/MaterialIcons-Regular.otf": "1288c9e28052e028aba623321f7826ac",
"assets/NOTICES": "642cb2b699c331fb22cf626a0f8bab6c",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "00bb2b684be61e89d1bc7d75dee30b58",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "4b6a9b7c20913279a3ad3dd9c96e155b",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "dffd9504fcb1894620fa41c700172994",
"favicon.png": "d63aa4d93119c56e9c42ade156339fc8",
"icons/Icon-192.png": "8b542ddace6035374e22aae5cbb8f4d8",
"icons/Icon-512.png": "5f8db9c85983f9e2bd20d042da55b436",
"index.html": "e83f953d8ae1ba8a75aa0eaa00304649",
"/": "e83f953d8ae1ba8a75aa0eaa00304649",
"main.dart.js": "61978b88effb82a06f6e09bbc0bae253",
"manifest.json": "29ed74f095004080cd8e34cf4832e378",
"version.json": "49ccc44401fdd5554d017ba8c8cc1cbf"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value + '?revision=' + RESOURCES[value], {'cache': 'reload'})));
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
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
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
