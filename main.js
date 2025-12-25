const express = require('express');
const app = express();
const path = require('path');

// Docker için port 3000 olarak sabitlendi
const PORT = 3000;

// Statik dosyaları (index.html, style.css vb.) sunmak için
app.use(express.static(path.join(__dirname, '.')));

// ANA API - Ülke Bilgisi (Stateless)
app.get('/api/country', (req, res) => {
    res.json({
        service: "Location Service",
        status: "Online",
        data: { country: "Türkiye", code: "TR" }
    });
});

// İKİNCİ API - Zaman Bilgisi (Stateless)
app.get('/api/time', (req, res) => {
    res.json({
        service: "Time Service",
        status: "Online",
        time: new Date().toLocaleTimeString('tr-TR')
    });
});

// Sunucuyu başlatma (DOCKER İÇİN KRİTİK: 0.0.0.0)
app.listen(PORT, '0.0.0.0', () => {
    console.log(`-----------------------------------------`);
    console.log(`Sunucu başarıyla kalktı!`);
    console.log(`Docker İç Port: ${PORT}`);
    console.log(`Yerel erişim: http://localhost:8080`);
    console.log(`-----------------------------------------`);
});
