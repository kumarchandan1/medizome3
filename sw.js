const staticDevCoffee = "Medi-zome-site-v1"
const assets = [
  "/",
  "/index.html",
  "style.css",
  "index.js",
  "app.js",
  "pic4.jpg",
  "pic5.jpg",
  "logo.png",
  "logo1.png",
  "logo2.png",
  "logo3.png",
  "logo4.png",
  "logo5.webp",
  "pic1.jpg",
  "sli1.jpg",
  "sli2.jpg",
  "sli3.jpg",
  "sli4.jpg",
 
]

self.addEventListener("install", installEvent => {
  installEvent.waitUntil(
    caches.open(staticDevCoffee).then(cache => {
      cache.addAll(assets)
    })
  )
})
self.addEventListener("fetch", fetchEvent => {
    fetchEvent.respondWith(
      caches.match(fetchEvent.request).then(res => {
        return res || fetch(fetchEvent.request)
      })
    )
  })