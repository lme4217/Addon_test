const https = require('https'), fs = require('fs'), path = require('path');
const ROOT = '/workspace/docs';
const MIME = { '.html':'text/html; charset=utf-8', '.md':'text/markdown; charset=utf-8', '.css':'text/css', '.js':'text/javascript', '.png':'image/png', '.svg':'image/svg+xml' };
https.createServer({
  key: fs.readFileSync('/workspace/.certs/key.pem'),
  cert: fs.readFileSync('/workspace/.certs/cert.pem')
}, (req, res) => {
  let p = decodeURIComponent(req.url.split('?')[0]);
  if (p === '/') p = '/index.html';
  const file = path.join(ROOT, path.normalize(p).replace(/^(\.\.[\/\\])+/, ''));
  if (!file.startsWith(ROOT)) { res.writeHead(403); return res.end(); }
  fs.readFile(file, (err, data) => {
    if (err) { res.writeHead(404); return res.end('No encontrado'); }
    res.writeHead(200, { 'Content-Type': MIME[path.extname(file)] || 'application/octet-stream' });
    res.end(data);
  });
}).listen(8443, '0.0.0.0', () => console.log('HTTPS listo en https://localhost:8443'));
