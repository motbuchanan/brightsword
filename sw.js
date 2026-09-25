/* Bright Sword office service worker. Cache key tracks the app version so a push always updates. */
var VERSION="office v3.4";
var CACHE="bsa-office-v3.4";
var SHELL=["brightsword-office.html","bsa-office.webmanifest","icon-192.png","icon-512.png","icon-512-maskable.png","apple-touch-icon.png","bsa-logo.png","bsa-logo-dark.png","bsa-qr-booth.png"];
self.addEventListener("install", function(e){
  self.skipWaiting();
  e.waitUntil(caches.open(CACHE).then(function(c){ return c.addAll(SHELL).catch(function(){}); }));
});
self.addEventListener("activate", function(e){
  e.waitUntil((async function(){
    var keys=await caches.keys();
    await Promise.all(keys.map(function(k){ return k!==CACHE ? caches.delete(k) : null; }));
    await self.clients.claim();
  })());
});
self.addEventListener("fetch", function(e){
  var req=e.request;
  if (req.method!=="GET") return;
  var url=new URL(req.url);
  if (url.origin!==location.origin) return;
  var accept=req.headers.get("accept")||"";
  if (req.mode==="navigate" || accept.indexOf("text/html")!==-1){
    /* network-first: newest HTML whenever online, cached shell when offline */
    e.respondWith((async function(){
      try{
        var net=await fetch(req.url, {cache:"no-store"});
        var c=await caches.open(CACHE); c.put(req, net.clone());
        return net;
      }catch(err){
        var cached=await caches.match(req);
        return cached || (await caches.match("brightsword-office.html"));
      }
    })());
    return;
  }
  /* stale-while-revalidate for same-origin assets */
  e.respondWith((async function(){
    var cached=await caches.match(req);
    var fetchP=fetch(req).then(function(net){ caches.open(CACHE).then(function(c){ c.put(req, net.clone()); }); return net; }).catch(function(){ return null; });
    return cached || (await fetchP) || new Response("", {status:504});
  })());
});
