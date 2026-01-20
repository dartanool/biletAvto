FROM php:8.3-fpm

RUN apt-get update && apt-get install -y \
    git \
    curl \
    libpng-dev \
    libonig-dev \
    libxml2-dev \
    zip \
    unzip \
    libpq-dev \
    libzip-dev \
    cron \
    poppler-utils \
    pandoc

RUN apt-get clean && rm -rf /var/lib/apt/lists/*

RUN docker-php-ext-install pdo_pgsql mbstring exif pcntl bcmath gd sockets zip

COPY php/php.ini /usr/local/etc/php/conf.d/custom.ini

COPY --from=composer:latest /usr/bin/composer /usr/bin/composer

RUN echo "* * * * * cd /var/www/html && /usr/local/bin/php artisan schedule:run >> /var/log/cron.log 2>&1" | crontab -

RUN echo '#!/bin/bash\ncron\nphp-fpm' > /start.sh && chmod +x /start.sh

WORKDIR /var/www/html

CMD ["/start.sh"]
