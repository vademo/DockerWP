#!/bin/sh

chown -R www-data:www-data /var/www/html/
docker-php-entrypoint "$@"
