FROM node:18-alpine
WORKDIR /usr/src/app

# Sadece mevcut dosyaları kopyala
COPY . .

# npm install satırını tamamen sil veya başına # koy
# RUN npm install 

EXPOSE 3000
CMD ["node", "main.js"]
