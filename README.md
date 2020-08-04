# catmat-consumer

Search Engine to federal government material/service catalog.

initial commands to database
```
docker exec -it mongodb \
    mongo --host localhost -u admin -p minhasenhaadmin --authenticationDatabase admin \
    --eval "db.getSiblingDB('catmat').createUser({user: 'dev', pwd: 'minhasenhadev', roles:[{role: 'readWrite', db: 'catmat'}]})"
```

```
docker exec -it CONTAINER_ID mongo -u dev -p minhasenhadev --authenticationDatabase catmat 
```

Archive format .env

File: `.env.dev`

```
MONGODB_URL=
```