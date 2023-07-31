build:
	docker compose build

up:
	docker compose up

down:
	docker compose down --remove-orphans

bash:
	docker exec -it ogrine-rates_client /bin/bash
