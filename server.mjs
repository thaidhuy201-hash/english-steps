import http from 'node:http';
import {readFile} from 'node:fs/promises';
import {fileURLToPath} from 'node:url';
const root=new URL('./',import.meta.url);
const allowed=new Set(['index.html','styles.css','app.js','learning.js','content.js']);
const types={html:'text/html; charset=utf-8',css:'text/css; charset=utf-8',js:'text/javascript; charset=utf-8'};
http.createServer(async(req,res)=>{const name=new URL(req.url,'http://localhost').pathname.slice(1)||'index.html';if(!allowed.has(name)){res.writeHead(404);return res.end('Not found');}try{const data=await readFile(fileURLToPath(new URL(name,root)));res.writeHead(200,{'Content-Type':types[name.split('.').pop()],'X-Content-Type-Options':'nosniff'});res.end(data);}catch{res.writeHead(500);res.end('Unable to load file');}}).listen(4173,'127.0.0.1',()=>console.log('English Steps: http://localhost:4173'));
