const C='sf-v20',A=['./','index.html','manifest.json','icon-180.png','icon-192.png','icon-512.png'];
self.addEventListener('message',e=>{if(e.data==='SKIP')self.skipWaiting()});
self.addEventListener('install',e=>e.waitUntil(caches.open(C).then(c=>c.addAll(A))));
self.addEventListener('activate',e=>e.waitUntil(caches.keys().then(k=>Promise.all(k.filter(x=>x.startsWith('sf-v')&&x!==C).map(x=>caches.delete(x)))).then(()=>self.clients.claim())));
self.addEventListener('fetch',e=>{const u=new URL(e.request.url);if(e.request.method!=='GET'||u.origin!==self.location.origin)return;const scope=self.registration.scope;if(!u.href.startsWith(scope))return;const rel=u.href.slice(scope.length);if(e.request.mode==='navigate'&&(rel===''||rel==='index.html')){e.respondWith(caches.match('index.html').then(r=>r||fetch(e.request)));return}if(A.includes(rel))e.respondWith(caches.match(e.request).then(r=>r||fetch(e.request)));});
