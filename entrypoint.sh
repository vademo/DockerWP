#!/bin/bash -e
set -e

chown -R www-data:www-data /var/www/html/
exec "$@"

