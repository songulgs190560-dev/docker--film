# Node.js'in hafif bir sürümünü kullanıyoruz
FROM node:18-alpine

# Uygulama dizinini oluştur
WORKDIR /usr/src/app

# Bağımlılıkları kopyala ve yükle
COPY package*.json ./
RUN npm install

# Tüm proje dosyalarını (services, index.html, main.js vb.) kopyala
COPY . .

# Uygulamanın çalışacağı port (Örn: 3000)
EXPOSE 3000

# Uygulamayı başlat
CMD ["node", "main.js"]
