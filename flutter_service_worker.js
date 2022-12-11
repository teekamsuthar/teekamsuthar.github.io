'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "580d374ea841b65e04586c0179766ed6",
"index.html": "6dd2e347dcf7e8ee48ee90924a1b6563",
"/": "6dd2e347dcf7e8ee48ee90924a1b6563",
"main.dart.js": "fb977e0a0aa73750340d0d2db65927b4",
"favicon.png": "d63aa4d93119c56e9c42ade156339fc8",
"icons/Icon-192.png": "8b542ddace6035374e22aae5cbb8f4d8",
"icons/Icon-512.png": "5f8db9c85983f9e2bd20d042da55b436",
"manifest.json": "29ed74f095004080cd8e34cf4832e378",
"assets/AssetManifest.json": "a705dd6545b5c035becf821692cd0cc3",
"assets/NOTICES": "7993531677492c0d6ef29859322fdf08",
"assets/FontManifest.json": "3ba95e877e8d977ed295b7a8efefeff7",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_AMS-Regular.ttf": "657a5353a553777e270827bd1630e467",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Script-Regular.ttf": "55d2dcd4778875a53ff09320a85a5296",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Size3-Regular.ttf": "e87212c26bb86c21eb028aba2ac53ec3",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Typewriter-Regular.ttf": "87f56927f1ba726ce0591955c8b3b42d",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Caligraphic-Bold.ttf": "a9c8e437146ef63fcd6fae7cf65ca859",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_SansSerif-Bold.ttf": "ad0a28f28f736cf4c121bcb0e719b88a",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Main-Bold.ttf": "9eef86c1f9efa78ab93d41a0551948f7",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Fraktur-Regular.ttf": "dede6f2c7dad4402fa205644391b3a94",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Main-Regular.ttf": "5a5766c715ee765aa1398997643f1589",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_SansSerif-Italic.ttf": "d89b80e7bdd57d238eeaa80ed9a1013a",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Math-Italic.ttf": "a7732ecb5840a15be39e1eda377bc21d",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Main-Italic.ttf": "ac3b1882325add4f148f05db8cafd401",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Fraktur-Bold.ttf": "46b41c4de7a936d099575185a94855c4",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Size2-Regular.ttf": "959972785387fe35f7d47dbfb0385bc4",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_SansSerif-Regular.ttf": "b5f967ed9e4933f1c3165a12fe3436df",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Size1-Regular.ttf": "1e6a3368d660edc3a2fbbe72edfeaa85",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Caligraphic-Regular.ttf": "7ec92adfa4fe03eb8e9bfb60813df1fa",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Size4-Regular.ttf": "85554307b465da7eb785fd3ce52ad282",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Main-BoldItalic.ttf": "e3c361ea8d1c215805439ce0941a1c8d",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Math-BoldItalic.ttf": "946a26954ab7fbd7ea78df07795a6cbc",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "ffed6899ceb84c60a1efa51c809a57e4",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "eaed33dc9678381a55cb5c13edaf241d",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "3241d1d9c15448a4da96df05f3292ffe",
"assets/packages/wakelock_web/assets/no_sleep.js": "7748a45cd593f33280669b29c2c8919a",
"assets/shaders/ink_sparkle.frag": "75b328406c53a2b1f56f688edcd7c78a",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/assets/img/mutify_banner.png": "140eb46fd4f6b2cd36473e230217d6eb",
"assets/assets/img/SV_banner.png": "4fa216fddb8ba2807e34e9e6de9e2070",
"assets/assets/img/portfolio_feedback.png": "d395ae5252d0467286db409c432daac0",
"assets/assets/img/favicon.ico": "d63aa4d93119c56e9c42ade156339fc8",
"assets/assets/img/mail.png": "08b049bbb1b3f31d8055d305bb4f5bc3",
"assets/assets/img/mail_2.png": "7325ff66fc99f64d1cb24b79c09cf9d9",
"assets/assets/img/store.png": "db9b21a1c41f3dcd9731e1e7acfdbb57",
"assets/assets/img/flutter.png": "a39807a4878aa03a393a27e680ac1c94",
"assets/assets/img/sv.png": "8637ece48dceed92a74a7c28bbf60294",
"assets/assets/img/mail_sent.png": "f8be83ebb939d2c82326903e85d9cd1a",
"assets/assets/img/medicine.png": "9eaea6bc094756d9f7e03fda68bd211e",
"assets/assets/img/blinker.png": "eb31a4c0b4c8cff117654958d81d1ec4",
"assets/assets/img/mobile_app.png": "4d79f409509d6a70b4dfeca39c38de7b",
"assets/assets/img/solushify.png": "7c8fd514f2bc59520c84ccc836bd25be",
"assets/assets/img/Pokedex.png": "e28f398e497f076079271c642bc7cff1",
"assets/assets/img/Notes50.png": "bd5dd8bdbcf540b66fae6fc25b2aefd6",
"assets/assets/img/mutify_logo.png": "172f0bce6c44dca2ee2c44b4c2aa40b4",
"assets/assets/img/buycoffee.webp": "c4f05ba744c9b274b9630fe834f66895",
"assets/assets/img/Fiftygram.png": "5fb9c32c2a87091906f42696734ea5a1",
"assets/assets/img/logo.jpeg": "69ae3a9c25777232ceb48c96eb72945e",
"assets/assets/img/welcome_cats.png": "074fc00aa9b3e6dc66fb648765e4fdc7",
"assets/assets/img/programming.png": "b61c8a6823d4d51afc9788b3a428f9e9",
"assets/assets/img/def_app_icon.png": "8cd1b98c8c60a08a740563ae65976480",
"assets/assets/img/social_media.png": "d8911ae5ef8d0d245e4e2184b8cef2f6",
"assets/assets/img/coding.png": "25163958644518a2fb656dfd4ab8b6cd",
"assets/assets/icons/telegram.png": "0bdd3de86d82a4cf52536654204762ac",
"assets/assets/icons/instagram.png": "812405b84294c3a711da89aadb77fca2",
"assets/assets/icons/behance.png": "8475fa3a497b6cb9ebe415168e8d417f",
"assets/assets/icons/twitter.png": "0821d99118895f7b3dd2bc5cbf616276",
"assets/assets/icons/discord.png": "b3c6afd7b12bdaac96f2680f68e95656",
"assets/assets/icons/linkedin.png": "7a5bd8aa7d19880de32db433f242ab9b",
"assets/assets/icons/dribbble.png": "0e8343544f286cdc9bd15498bdd9e83e",
"assets/assets/icons/reddit.png": "395bcf9b609b52ae6d1455f93053851c",
"assets/assets/icons/facebook.png": "913b2eacf8118e706cc8b4ff13c63cc1",
"assets/assets/animations/bubbles.json": "7f3ca347ebb1a55e2a58cc6b88325c87",
"assets/assets/animations/sky_space.json": "60656c77cc13e4e128a74343fd04b755",
"assets/assets/animations/welcome_two.json": "b050db78fdc2d5dcd5ca235153dfe4bb",
"assets/assets/animations/developer.json": "0904c457725911112821b684efa1637a",
"assets/assets/animations/github_black.json": "122b9e4a9c57a3cef07704cf16685ea0",
"assets/assets/animations/skyfall_ufo.json": "499eb98dd3c7c263b81aa29b2ade4c61",
"assets/assets/animations/night.json": "cbc4d2abb6dbcfd942cf42202f1e8927",
"assets/assets/animations/christmas_bg.json": "873b86f443ea2bb77462bd276d19026a",
"assets/assets/animations/instagram.json": "a48aab6508efa89cc998074bd5bd7e05",
"assets/assets/animations/location.json": "8b3e7de2632792287826148c03d79ebf",
"assets/assets/animations/fireworks.json": "b43391d5745d8bc10edfc441bea053da",
"assets/assets/animations/github_white.json": "87560f339072fc15e3531d825eb97f91",
"assets/assets/animations/shapes_bg.json": "809620f7c2aec6c6e0174de6e1359a49",
"assets/assets/animations/hello.json": "cdbc6cacfec82fab33746d1911356e63",
"assets/assets/animations/gradient_bg.json": "58bbd23299d5113ed52d5db8eed681b6",
"assets/assets/animations/hearts_bg.json": "616b2ac48516ed7d15b617f82ae4bf24",
"assets/assets/animations/facebook.json": "26c8ddd4a8b30130487da6a63692b75e",
"assets/assets/animations/bg_night.json": "cacfe4d1d254d8d9f98679c0e2b9620b",
"assets/assets/animations/starry_bg.json": "24ad0253be2a48a06cd7448691c9e5c5",
"assets/assets/animations/contact.json": "c6c1d8aa759bb8ef5e137f173336524f",
"assets/assets/animations/email.json": "56275d515bf85c0a6e23f82d48806a1b",
"assets/assets/animations/day_night.json": "e304ed64c54b823b6823e6603963417f",
"assets/assets/animations/email_me.json": "34f53c197feea09e2913224a202d94d3",
"assets/assets/animations/twitter.json": "b485cab12c12995f625927f3ea88368d",
"assets/assets/animations/welcome_one.json": "7732a109d7bccd72a9ac2163d7d099d4",
"assets/assets/animations/switch_daynight.json": "c6aba44a865042e443b38966563c9ba5",
"assets/assets/animations/linkedin.json": "497dab9c3874078a7088612e5753ea7c"
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
