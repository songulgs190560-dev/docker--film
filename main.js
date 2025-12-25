const http = require('http');

const PORT = 3000;

const server = http.createServer((req, res) => {
    res.setHeader('Content-Type', 'application/json; charset=utf-8');
    
    if (req.url === '/api/country') {
        res.writeHead(200);
        res.end(JSON.stringify({ service: "Location", country: "Türkiye", code: "TR" }));
    } else if (req.url === '/api/time') {
        res.writeHead(200);
        res.end(JSON.stringify({ service: "Time", now: new Date().toLocaleString('tr-TR') }));
    } else {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end('<h1>Sunucu Calisiyor!</h1><p>API testleri: /api/country veya /api/time</p>');
    }
});

// DOCKER İÇİN KRİTİK: '0.0.0.0' eklenmelidir
server.listen(PORT, '0.0.0.0', () => {
    console.log(`Sunucu http://localhost:${PORT} uzerinde aktif.`);
});;
