# Simple Wordpress docker setup
___

## Includes
* PHP-7.2.0 (apache)
* mysql (form official mysql container)
* phpmyadmin
* docker-sync
* Database persistence


## Setup
1. Copy your instalation into the project folder
2. run `make start`. This will create/start the docker-sync volume, start apache , start
mysql, start phpmyadmin )
3. you should now be able to surf to localhost and see a wordpress app and go to
localhost:8080  to access the phpmyadmin interface mysql is also exposed on the
default 3306 port if you prefer an other system for import/export db
your database will be persisted in the db folder ( by default docker doesn't
preserve state ) so don't delete this folder if you don't want to lose your db


## Needed software
* [Docker](https://www.docker.com/get-docker)
* [docker-sync](https://github.com/EugenMayer/docker-sync/wiki/1.-Installation)
* [Make](https://www.gnu.org/software/make/), installed by defauld on osx / linux

---
