"use strict";var precacheConfig=[["/portfolio/index.html","096a9fe7e2ea5d73d8943646f9b4a3bb"],["/portfolio/static/css/main.a57c23ad.css","6aadb3944f716ac05ee2e291ebeea02d"],["/portfolio/static/js/main.f93b7b4c.js","d339e58ed45510c50af67a0b16954dd6"],["/portfolio/static/media/GhostRevueSite.65348be2.png","65348be2d70861fc207c679c45184cb4"],["/portfolio/static/media/closed-envelope.c3e7fcf1.svg","c3e7fcf10ebb7b984cc6c2749a3b26f5"],["/portfolio/static/media/computer.6492c55e.svg","6492c55e654034003443ba0a357fe1b8"],["/portfolio/static/media/configHistory.aee16dd4.png","aee16dd45a58f683de0ff241300bdd24"],["/portfolio/static/media/github-logo.76d344f0.svg","76d344f08412543c74ccd1fb2493d607"],["/portfolio/static/media/github-logo.dec21930.svg","dec21930a1a4f59520b5c55bff21dc6f"],["/portfolio/static/media/linkedin-logo.7658ffb2.svg","7658ffb25432b6205a9594bf65a8ff16"],["/portfolio/static/media/list.3f701848.svg","3f701848ba6b99fc7e48c009f0596dc3"],["/portfolio/static/media/movietracker.8e4ed8f9.png","8e4ed8f9492334f28f0efa729509ab7f"],["/portfolio/static/media/onTour.c6ee733c.png","c6ee733c30f58a28dc4eb05be069f463"],["/portfolio/static/media/question-mark.b154a09b.svg","b154a09bd25fc26d36859a8d84c32c7d"],["/portfolio/static/media/showcommand.2ba27c60.png","2ba27c606c7ca2974532092812ef0031"],["/portfolio/static/media/symphony.71a31ac8.png","71a31ac8a980326337e390f86fa445f0"],["/portfolio/static/media/tron.7b06bfcd.png","7b06bfcd1d905124d5831548bae46674"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var n=new URL(e);return"/"===n.pathname.slice(-1)&&(n.pathname+=t),n.toString()},cleanResponse=function(t){return t.redirected?("body"in t?Promise.resolve(t.body):t.blob()).then(function(e){return new Response(e,{headers:t.headers,status:t.status,statusText:t.statusText})}):Promise.resolve(t)},createCacheKey=function(e,t,n,a){var r=new URL(e);return a&&r.pathname.match(a)||(r.search+=(r.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(n)),r.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var n=new URL(t).pathname;return e.some(function(e){return n.match(e)})},stripIgnoredUrlParameters=function(e,n){var t=new URL(e);return t.hash="",t.search=t.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(t){return n.every(function(e){return!e.test(t[0])})}).map(function(e){return e.join("=")}).join("&"),t.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],n=e[1],a=new URL(t,self.location),r=createCacheKey(a,hashParamName,n,/\.\w{8}\./);return[a.toString(),r]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(a){return setOfCachedUrls(a).then(function(n){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(t){if(!n.has(t)){var e=new Request(t,{credentials:"same-origin"});return fetch(e).then(function(e){if(!e.ok)throw new Error("Request for "+t+" returned a response with status "+e.status);return cleanResponse(e).then(function(e){return a.put(t,e)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var n=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(t){return t.keys().then(function(e){return Promise.all(e.map(function(e){if(!n.has(e.url))return t.delete(e)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(t){if("GET"===t.request.method){var e,n=stripIgnoredUrlParameters(t.request.url,ignoreUrlParametersMatching),a="index.html";(e=urlsToCacheKeys.has(n))||(n=addDirectoryIndex(n,a),e=urlsToCacheKeys.has(n));var r="/portfolio/index.html";!e&&"navigate"===t.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],t.request.url)&&(n=new URL(r,self.location).toString(),e=urlsToCacheKeys.has(n)),e&&t.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(n)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(e){return console.warn('Couldn\'t serve response for "%s" from cache: %O',t.request.url,e),fetch(t.request)}))}});