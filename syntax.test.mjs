import {test} from 'node:test';
import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
import {Script} from 'node:vm';
test('inline application scripts parse',()=>{const html=readFileSync(new URL('../index.html',import.meta.url),'utf8');const scripts=[...html.matchAll(/<script(?:\s[^>]*)?>([\s\S]*?)<\/script>/gi)];assert.ok(scripts.length);for(const [,code] of scripts)new Script(code)});
test('manifest icons exist',()=>{const m=JSON.parse(readFileSync(new URL('../manifest.json',import.meta.url)));for(const i of m.icons)assert.ok(readFileSync(new URL('../'+i.src,import.meta.url)).length)});
