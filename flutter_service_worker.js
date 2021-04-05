'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "ebc2808bf31dc0c6a7c5da365fd46d4c",
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
"assets/assets/img/favicon.ico": "d63aa4d93119c56e9c42ade156339fc8",
"assets/assets/img/logo.png": "be4b92e2c9ab729f79e2b4364c395496",
"assets/assets/img/mobile_app.png": "4d79f409509d6a70b4dfeca39c38de7b",
"assets/assets/img/portfolio_feedback.png": "d395ae5252d0467286db409c432daac0",
"assets/assets/img/teekamsuthar_tattoo.jpg": "7a11fa9a390b1c77840eb1feb6dee49f",
"assets/assets/img/welcome_cats.png": "b200f697b2d03863d355c568f7790962",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "1288c9e28052e028aba623321f7826ac",
"assets/NOTICES": "68700e356917c178a5d294917ef33276",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"index.html": "079d2db804e9a694366086a3f724ff33",
"/": "079d2db804e9a694366086a3f724ff33",
"main.dart.js": "c482e8d8fe992fa0a9877a79668180b5",
"manifest.json": "19048c388858d02a933e79a393fe1d38",
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
