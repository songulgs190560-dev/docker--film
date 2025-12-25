FROM node:18-alpine
WORKDIR /usr/src/app

# Sadece mevcut tüm dosyaları kopyala (package.json aramayı bırakır)
COPY . .

# npm install satırını siliyoruz çünkü dosya yok
# RUN npm install 

EXPOSE 3000
CMD ["node", "main.js"]
