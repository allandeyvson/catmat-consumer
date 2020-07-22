# catmat-consumer

projeto para consumir os dados do catalogo de materiais disponibilizados pelo governo federal


Comandos para iniciar o banco de dados
```
docker exec -it mongodb \
    mongo --host localhost -u admin -p minhasenhaadmin --authenticationDatabase admin \
    --eval "db.getSiblingDB('catmat').createUser({user: 'dev', pwd: 'minhasenhadev', roles:[{role: 'readWrite', db: 'catmat'}]})"
```

```
docker exec -it CONTAINER_ID mongo -u dev -p minhasenhadev --authenticationDatabase catmat 
```
