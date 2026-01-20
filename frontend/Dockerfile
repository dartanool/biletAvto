FROM node:20-bookworm

WORKDIR /app

# Копируем package.json и package-lock.json
COPY package*.json ./

# Устанавливаем зависимости
RUN npm install --legacy-peer-deps

# Копируем исходный код
COPY . .

# Открываем порт
EXPOSE 3000

CMD ["npm", "run", "dev", "--", "--host", "0.0.0.0"]
