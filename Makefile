start:
	docker-sync clean
	docker volume create --name=app-sync
	docker-compose -f docker-compose.yaml up -d
	docker-sync start
	yarn watch
stop:
	docker-compose down
	docker-sync stop
