FROM node:18-alpine
WORKDIR /usr/src/app

# Sadece iki nokta olmalı: "mevcut dizini" "çalışma dizinine" kopyala
COPY . .

# Uygulamanın dahili portu (main.js içinde hangi portu yazdıysan o olmalı)
EXPOSE 3000

CMD ["node", "main.js"]
