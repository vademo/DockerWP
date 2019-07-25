kill:
	@echo "\033[1;34m//////////////////////////////////////////"
	@echo "\033[1;34m-----------Available commands:----------- "
	@echo "\033[1;34m//////////////////////////////////////////"

	@echo "\033[1;32mstart\033[m			start development(starts docker, docker-sync & webpack )"
	@echo "\033[1;32mstop\033[m			Stop docker and sync"
	@echo "\033[1;32minstall\033[m			install"
	@echo "\033[1;33mby: Olivier Van den Mooter \033[m"
	@echo "\033[1;32m \033[m"

start:
	docker-sync clean
	docker volume create --name=VOLUMENAME
	docker-compose -f docker-compose.yaml up -d
	docker-sync start
	yarn watch
stop:
	docker-compose down
	docker-sync stop
