if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let s=Promise.resolve();return n[e]||(s=new Promise((async s=>{if("document"in self){const n=document.createElement("script");n.src=e,document.head.appendChild(n),n.onload=s}else importScripts(e),s()}))),s.then((()=>{if(!n[e])throw new Error(`Module ${e} didn’t register its module`);return n[e]}))},s=(s,n)=>{Promise.all(s.map(e)).then((e=>n(1===e.length?e[0]:e)))},n={require:Promise.resolve(s)};self.define=(s,a,i)=>{n[s]||(n[s]=Promise.resolve().then((()=>{let n={};const r={uri:location.origin+s.slice(1)};return Promise.all(a.map((s=>{switch(s){case"exports":return n;case"module":return r;default:return e(s)}}))).then((e=>{const s=i(...e);return n.default||(n.default=s),n}))})))}}define("./sw.js",["./workbox-21b21c9a"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/static/9DQrrPwPmOrzFTux6ZxzO/_buildManifest.js",revision:"9DQrrPwPmOrzFTux6ZxzO"},{url:"/_next/static/9DQrrPwPmOrzFTux6ZxzO/_ssgManifest.js",revision:"9DQrrPwPmOrzFTux6ZxzO"},{url:"/_next/static/chunks/254-585f287c0f24183fdec2.js",revision:"9DQrrPwPmOrzFTux6ZxzO"},{url:"/_next/static/chunks/36bcf0ca-a4150eb196fad7c9c899.js",revision:"9DQrrPwPmOrzFTux6ZxzO"},{url:"/_next/static/chunks/625-fc1c1604516d3a0204ff.js",revision:"9DQrrPwPmOrzFTux6ZxzO"},{url:"/_next/static/chunks/99-f711e1d80dfd08ed8b2c.js",revision:"9DQrrPwPmOrzFTux6ZxzO"},{url:"/_next/static/chunks/cb1608f2-0caa2659ba06063b59a0.js",revision:"9DQrrPwPmOrzFTux6ZxzO"},{url:"/_next/static/chunks/framework-0441fae7fd130f37dee1.js",revision:"9DQrrPwPmOrzFTux6ZxzO"},{url:"/_next/static/chunks/main-d1d5db16beae6974376a.js",revision:"9DQrrPwPmOrzFTux6ZxzO"},{url:"/_next/static/chunks/pages/_app-a4c87d7d04fb9e818a5a.js",revision:"9DQrrPwPmOrzFTux6ZxzO"},{url:"/_next/static/chunks/pages/_error-737a04e9a0da63c9d162.js",revision:"9DQrrPwPmOrzFTux6ZxzO"},{url:"/_next/static/chunks/pages/add-weight-bbfa5f0a12a752d7651d.js",revision:"9DQrrPwPmOrzFTux6ZxzO"},{url:"/_next/static/chunks/pages/index-0fa72eeb05b2c76eca90.js",revision:"9DQrrPwPmOrzFTux6ZxzO"},{url:"/_next/static/chunks/pages/meal-e2713ce0db4a3c470122.js",revision:"9DQrrPwPmOrzFTux6ZxzO"},{url:"/_next/static/chunks/pages/weight-24461e851c4abec6f00a.js",revision:"9DQrrPwPmOrzFTux6ZxzO"},{url:"/_next/static/chunks/polyfills-a54b4f32bdc1ef890ddd.js",revision:"9DQrrPwPmOrzFTux6ZxzO"},{url:"/_next/static/chunks/webpack-0e0f5c5c9fa5a29e0d78.js",revision:"9DQrrPwPmOrzFTux6ZxzO"},{url:"/_next/static/css/1576b7db6da346ecc41d.css",revision:"9DQrrPwPmOrzFTux6ZxzO"},{url:"/backup/bk_black_icon.png",revision:"765f1a5c4208237dbebe0b7cc09ea51c"},{url:"/backup/bk_white_icon.png",revision:"fcd16e276fa91ba5514c3942fa4e5100"},{url:"/bk_manifest/icon-192x192.png",revision:"d05c37caa05147fd758b6a9510f5c97f"},{url:"/bk_manifest/icon-256x256.png",revision:"168a7c26d1b24dc16eb73016e0c4ae2b"},{url:"/bk_manifest/icon-384x384.png",revision:"ee4b546131c3e62be7a8aae80233b6a1"},{url:"/bk_manifest/icon-512x512.png",revision:"c6b69b94f8f6739d2c2eb14d9650659c"},{url:"/bk_manifest/manifest.webmanifest",revision:"de65f309b69a33fe8a9efd4e1d9c5605"},{url:"/icon-192x192.png",revision:"d05c37caa05147fd758b6a9510f5c97f"},{url:"/icon-256x256.png",revision:"168a7c26d1b24dc16eb73016e0c4ae2b"},{url:"/icon-384x384.png",revision:"ee4b546131c3e62be7a8aae80233b6a1"},{url:"/icon-512x512.png",revision:"c6b69b94f8f6739d2c2eb14d9650659c"},{url:"/icon.png",revision:"d20da970018e3d911ed7d49c793236b7"},{url:"/manifest.json",revision:"d346531404a84aeb0056949d426e64dc"},{url:"/static/favicon.ico",revision:"765f1a5c4208237dbebe0b7cc09ea51c"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:s,event:n,state:a})=>s&&"opaqueredirect"===s.type?new Response(s.body,{status:200,statusText:"OK",headers:s.headers}):s}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const s=e.pathname;return!s.startsWith("/api/auth/")&&!!s.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));
