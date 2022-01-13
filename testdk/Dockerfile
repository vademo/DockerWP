FROM php:7.4-apache
RUN echo "ServerName localhost" >> /etc/apache2/apache2.conf

RUN apt-get update \
  && apt-get install -y --no-install-recommends libpq-dev \
  && docker-php-ext-install pdo_pgsql pdo_mysql  && docker-php-ext-install mysqli && a2enmod rewrite

RUN chown -R www-data:www-data $HOME
