## Архитектура проекта 

├── backend/          
├── frontend/        
├── docker/         
└── docker-compose.yml

## Установка и запуск 

1. Клонирование репозитория

    ```bash
    git clone <repository-url>
    cd <project-directory>

2. Настройка переменных окружения
    
   ```bash
    cp .env.example .env
   
3. Настройка переменных окружения
    
    ```bash
    cd backend
    cp .env.example .env

4. Сборка и запуск контейнеров

    ```bash
    docker-compose up -d --build

5. Установка зависимостей backend  

    ```bash
    docker-compose exec backend composer install
    docker-compose exec backend php artisan key:generate
    docker-compose exec backend php artisan migrate

6. Запуск frontend

    ```bash
   cd frontend
   npm install
   npm run dev