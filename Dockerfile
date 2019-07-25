FROM php:7.2.0-apache

# RUN addgroup www-data && adduser -g www-data www-data

RUN apt-get update \
  && apt-get install -y --no-install-recommends libpq-dev \
  && docker-php-ext-install pdo_pgsql pdo_mysql  && docker-php-ext-install mysqli && a2enmod rewrite

RUN chown -R www-data:www-data $HOME

# COPY  entrypoint.sh /
# RUN chmod +x /entrypoint.sh
# ENTRYPOINT ["/entrypoint.sh", "apache2-foreground"]
