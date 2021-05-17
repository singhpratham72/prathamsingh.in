'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "e0e2d8721f99a351f0da302c6d5bd5f1",
"index.html": "479ecea116d9cd65bac856676af4a3c6",
"/": "479ecea116d9cd65bac856676af4a3c6",
"CNAME": "6e405e6cd1b3dde166950c84980e7377",
"main.dart.js": "563b8398797f2a164232b10442aaee43",
"favicon.png": "3b81e450d8e3218217369e504b62d575",
"manifest.json": "75ec01a8a327d5ef480e84085c0dedba",
".git/ORIG_HEAD": "713292513caa5e1d45ac959bca6d62df",
".git/config": "ccf75ac2933c052448461b44554c2dcf",
".git/objects/0d/521758457d0b2c19b78ac403cfc5d3193d1fd6": "51506996bc197aa4e79b9839ad150604",
".git/objects/0d/78eb25bd8cc79d4a7580b5cf505f00e7973f55": "57c34225801ed3a3f5f7e44b2adfcc1b",
".git/objects/04/00c4f5d3faa129ea444905b6f70171a8c312fb": "3f283c3a321ec073f7d560e1122f338f",
".git/objects/35/847672531253837287c0adcaaa66fdde29b511": "82545929e3ee9df08cb635b9efcb7da5",
".git/objects/69/eacc8a68da8e1109b70db97a157ca5c449cac6": "8b26b368d1830f85fd8a19302b3426a6",
".git/objects/3c/64224d41a73b329c8987b461412bc292fb2706": "ffe4edd71203a4699589cb78d93a750a",
".git/objects/51/eea993a1c074c10a671760c47b28cd810b9404": "c21023e6b98d6fd21c881377ba012a85",
".git/objects/93/2df4ae2c3cb34a716e21b478590eecaa2ae295": "e299ba2e68d97d0f661cc8ddccf9787a",
".git/objects/ad/fb9dee70c31455d3f72feeb2204a94d02e01da": "6ef9de9e5a26b790d03800890c2ae301",
".git/objects/d0/1287120d131dcd8eb1d48f568ed8732a5e2325": "fc07533ecc43eea1f4c005ddbd49d9b8",
".git/objects/df/930700784e856c237b1d6e1ba5e5b19420d56a": "f8ed499088f652b095892c47ea268d1b",
".git/objects/d6/3bf0e77431229c14ff0db5de65023fba0e2ffc": "e4507db30085c9161e2f63b88a0a2fc2",
".git/objects/ab/c7725a6e524fdb29e435d7e6633b91f2709fe1": "67256a4d06b46d942378d0d550b62c96",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/e5/5447d8c24b140dda1ba503ba755c872d394519": "3e7e881674aac0c2374ab68891d15505",
".git/objects/e2/5da238785ad4a101f7ed66f2abd767fc92f7f8": "d6f25585b5d70ae163e50e6df8acc12c",
".git/objects/e2/25b6796feac695ad4948df7ff4c6e42bd64c41": "172248740bad49a1b23b24c168050b9d",
".git/objects/fd/7ed8eaf52ea1a8261570452ae1fd30aad6cb87": "8caccfdb491b13b31fd7876a1af67ae8",
".git/objects/f2/5787c93ad00665f0f797a43ab397f0628a273e": "59e425d1456034072d902c75d18ec75f",
".git/objects/ca/34fb0114a49d7a5322a56e3f8702eda24b7bd7": "2834edb54a1310d0f2fae1420551bd5e",
".git/objects/ca/81444443079dca5ff97e98ab5964bd7cc69b68": "78ed0a275db847494d5307e91072e638",
".git/objects/fb/deb6ab0abf102d0b105a5c094d58f96c454e44": "2e3f6292f960355e5ecf39c4d550f593",
".git/objects/c6/f47e0cf342c283ead1e6a7eb5317b919d831d0": "f2b534ab3670c49313df1ae2d498bb38",
".git/objects/c6/928f9bbb9e6c6d3cf17ca79b732eb6ba8e0223": "b943eb93e9754e07e91c8051caf53d3d",
".git/objects/74/f1cbeeaa8b400f83071ce5b071f7fe9c53527f": "f7fa78f53bc9bc2bf26e85a36b88d135",
".git/objects/17/d081d206514854560d3e44012d75584a44056c": "146d7ea46c93f95b2207066f3ca53438",
".git/objects/8f/5a95bf3609130f9ccc84b3cc5c1d1102d8688f": "e1fe148c1a1de72a9ce26a7db3cc6f37",
".git/objects/8f/29948d26dbb922a0fde8b5bc91dcef72beaa84": "3057cf28119d6ddcb2baea1e8481c68f",
".git/objects/4c/57a4c8755373a911bfc4296483ed3f137dca6a": "adb5cff767672600c9b821d24845bf97",
".git/objects/43/46e2d9e671bf7a5a3287a3ddacf5f915a35d4f": "41b3d0d418188d18de1ec7daf79f5299",
".git/objects/88/e9502eb8daa2e4926bddea46711ec871aa3d3f": "8ae910cf61095fe0451f9e3353e46dc8",
".git/objects/00/57e57ca9ad14c4ed61a92fff19d7deb86fb624": "92b30efd7da701a45351a3bcad14d16f",
".git/objects/36/c3fa60324fe592d77b66c401f25976359a5d5b": "ce025027fe69b091bd70d7c422075519",
".git/objects/91/b8c3fdc57c1871274ca6b204b8746611885de4": "ea0ed49b2a3bc9f1abf4cdd14d2e51be",
".git/objects/3a/6d56ac75506cea6b43ddfe702eec331198943c": "edc44016c379e1a6b8e5207b02a2d4fc",
".git/objects/30/c92ac062732ef9cee9e0ea097ea4000da37535": "953fbe16f1a4b165e8bed3a7d7ca1f9c",
".git/objects/6d/e4bfb038cc4bbec87cab8c71aace327c9fa29a": "61eb6046756603fbc2cf8e22422e6d55",
".git/objects/39/669401b23138f2b83d78dd89aa769763689771": "d9bf5b38cd1d818823e7077634161c68",
".git/objects/55/112bf922758291cb728e3c8e4ecaa47d9beedb": "578bc1a4c7d2c36ea1cde951a17b21fe",
".git/objects/97/619313e6c85144118acacc9fae2c7ce772f66d": "56ed6225a51de04923b7eb46f0ed1aec",
".git/objects/0a/1a4eaf06bb6a5273b464457922b78168a9f9fc": "8311cc106383cd83a0a7887b65323000",
".git/objects/64/79b4bcb7795cafe3da359ee167b8cfad21634e": "cda44e9ba8576e9feeab20b2cb27e8f7",
".git/objects/a7/e76014179d9ce27c3d1810a33fb83a671692e4": "65f3fa6015c67e39e75ca323741414fc",
".git/objects/dd/43db65edcbfd810943d4270e20d3703447c26d": "b41f2c4cbaf5f3425cc1445d4e1e098e",
".git/objects/b6/771ba4796978ab698296bac19070498b26ffc5": "ab4121d7501e804fae3cf7da9abea444",
".git/objects/a8/c2cedebf3bb48473a0c57a17baa7adaf4b2873": "6e83c38140e9f4c4a41c29e6d76ae5c2",
".git/objects/a8/3a17d54b6dc2156c855c6580301cefc9c8d017": "6525101be8d70b808a809af9c83fa4ad",
".git/objects/a6/0584cdb225c131b6d47e6a5eef9cde9ebe1605": "c519869ea4357aa347e72dabb49a391a",
".git/objects/b9/04702d9a66016cc25aa2e55f2bc09718ddb629": "f1eb3b645cc0efee85a4bce809a2023a",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/ef/50a4acf5b722c2d0db80e7b28ae4001c333e81": "02a21b781c489570ba4f215780665820",
".git/objects/ef/dd3a5a43fa0b37a7bb9608e1f8bbede878ef3e": "6332d5a3223627716c033368c011b006",
".git/objects/c4/4986d07f548b8a04d9c6265324bfd50f68c6db": "e544f077272614713e79a039ab288ec7",
".git/objects/fa/d0a1a166f5bbf36df42976213b91d36fbc40d1": "e74dec3bcf0d617684b08f916e898158",
".git/objects/c2/a728121cc94290e0e8dbde82b1e5125d5465a6": "f2989bf1405fb660305820683b8ee53c",
".git/objects/f1/f37e0f99b806125ef9861adafa322fcc6b0f83": "5bcf9bba50f6386564ee5ab8998b92e9",
".git/objects/f1/7d5a5014e4ae9c7d9d5f8de26fec398f65e44c": "e8f04124372d550cb6c2b42e572f972f",
".git/objects/f8/4657af5ff632a85debd4a6484cd7b6e69ed570": "2b35901cbc2b44aedc108b9cae52f35e",
".git/objects/e0/b3544b56f402d8abf7e8000ac9e4129551ae95": "3d6d43b2297fb9c912fe5b035eb4455e",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/83/0f2fd5d07195cce28cebf53612569ddacc116d": "b15acd47700f6a5274b59b82e6d98f07",
".git/objects/23/59d3c10793d357ced6eca8ac327b4acdb6b045": "934b53aa6874218df4363249379289af",
".git/objects/23/637bc3573701e2ad80a6f8be31b82926b4715f": "5f84f5c437bb2791fdc8411523eae8ff",
".git/objects/12/ede6c35b40051fd60f4ec5b271457b5fab7d63": "d08527af9a438ec6891eb21b98618db8",
".git/objects/85/fe48d9b8562209c0152cab603450e35e2ea0ef": "6187a120e498bbd4e5614d6f2701ee25",
".git/objects/49/133379e7f803c60e4360a97bb3b2fcc041475c": "baa6f01df91de3b5ac0ab28b72385653",
".git/objects/2e/e888108d899e2b0c785b2e551e35d987d5d1f5": "c4033561d3a4bbc0de9777ca7701e496",
".git/objects/47/fad4604681ad8935da8d834c5a862a4d62fa52": "ae26b37f982939929ece318aec59c19e",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "d608e8b10573eb8f6b37053db53f9a10",
".git/logs/refs/heads/main": "8cb6f2bac26e3364ec1b41bce18690e2",
".git/logs/refs/remotes/origin/main": "f210ecbfe3f1724d44464e69571b8474",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/main": "35981e93159b982810b3e798f6eeb63b",
".git/refs/remotes/origin/main": "35981e93159b982810b3e798f6eeb63b",
".git/index": "4a5db31a0bc2160d265b2ba215ebe0cb",
".git/COMMIT_EDITMSG": "2858263d748f421eee44d135884e1fd1",
".git/FETCH_HEAD": "f4a2112e8fe5f029b421af3257a5ac08",
"assets/AssetManifest.json": "2c46126c20c4db05a7122b86c41dec83",
"assets/NOTICES": "da361ce5bc4d3efceb155f909b9004f7",
"assets/FontManifest.json": "5a32d4310a6f5d9a6b651e75ba0d7372",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "dffd9504fcb1894620fa41c700172994",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "4b6a9b7c20913279a3ad3dd9c96e155b",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "00bb2b684be61e89d1bc7d75dee30b58",
"assets/fonts/MaterialIcons-Regular.otf": "1288c9e28052e028aba623321f7826ac",
"assets/assets/images/pratham_outline.svg": "e92f295efe899b435b3ead364e8ae36e",
"assets/assets/images/prathamoutline.png": "3f0796b549b4168c0eb74b75638fb1f6",
"assets/assets/icons/xd.png": "a409c152e6fb8e5c5c7be5072e9bb8d2",
"assets/assets/icons/git.png": "748084c87bb70e6026852fe07b4b7085",
"assets/assets/icons/python.png": "e481383debbd6fb85c3be4f6c882c77b",
"assets/assets/icons/flutter.png": "dd07eb3c2c7f03251cea89f7f8f5d02b",
"assets/assets/icons/firebase.png": "0e4792f1b38576bce30728eec593a301",
"assets/assets/icons/java.png": "3eb9466f203c6ace52615616e09fa415",
"assets/assets/icons/javascript.png": "4715b1d788c7fede3d371f8616b893be",
"assets/assets/icons/figma.png": "b4c55febc9de8f3f2fea4cd2582ccfeb",
"assets/assets/icons/cplus.png": "75e6447caf30d8f899bca271bf802472",
"assets/assets/icons/html.png": "e9f60a30ae6c4744af76982a39b790ee",
"assets/assets/icons/photoshop.png": "3ea3a37dce062a8fd955fa3101bbf80f",
"assets/assets/icons/premiere.png": "67b722ed47b6c84483d0aee16af54c16",
"assets/assets/icons/css.png": "39a3bea9f914b8daa84a5030ed7a7bda",
"assets/assets/icons/dart.png": "0a4777b993a114d9b9870727398bcac6"
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
