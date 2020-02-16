const randomQuizApp = "random-quiz-v1";
const assets = [
  "/",
  "/index.html",
  "/css/*.css",
  "/js/*.js",
  "/favicon/*.png",
];

self.addEventListener("install", installEvent => {
  installEvent.waitUntil(
    caches.open(randomQuizApp).then(cache => {
      cache.addAll(assets);
    })
  );
});

self.addEventListener("fetch", fetchEvent => {
  fetchEvent.respondWith(
    caches.match(fetchEvent.request).then(res => {
      return res || fetch(fetchEvent.request);
    })
  );
});
