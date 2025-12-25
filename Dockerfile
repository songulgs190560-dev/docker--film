FROM node:18-alpine
WORKDIR /usr/src/app

# Sadece mevcut dosyaları kopyala
COPY . .

# Express kütüphanesini manuel yükle (Hata almamak için)
RUN npm install express

EXPOSE 3000
CMD ["node", "main.js"]
