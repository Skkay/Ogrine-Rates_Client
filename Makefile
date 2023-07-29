build:
	docker compose build

up:
	docker compose --env-file .env.dev.docker up

down:
	docker compose down --remove-orphans

tag:
	docker image tag ogrine-rates_client skkay/ogrine-rates_client:$(major)
	docker image tag ogrine-rates_client skkay/ogrine-rates_client:$(major).$(minor)
	docker image tag ogrine-rates_client skkay/ogrine-rates_client:$(major).$(minor).$(patch)
	docker image tag ogrine-rates_client skkay/ogrine-rates_client:latest

push:
	docker image push skkay/ogrine-rates_client:$(major)
	docker image push skkay/ogrine-rates_client:$(major).$(minor)
	docker image push skkay/ogrine-rates_client:$(major).$(minor).$(patch)
	docker image push skkay/ogrine-rates_client:latest

bash:
	docker exec -it ogrine-rates_client /bin/bash
