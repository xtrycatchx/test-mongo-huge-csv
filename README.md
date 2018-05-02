# test-mongo-huge-csv

## run mongo instance
```sh
docker run - p 27017: 27017 --name some - mongo - d mongo--auth
```

## init db and user
```sh
docker exec - it some - mongo mongo admin

db.createUser({ user: 'jsmith', pwd: 'some-initial-password', roles: [{ role: "root", db: "admin" }] });
```

## import huge dataset
I got mine from these https://catalog.data.gov/dataset?res_format=CSV&page=1

## build
```sh
npm install
```

## run app
```sh
./run-locally.sh
```

## access huge dataset as stream
```sh
curl http://localhost:8080/api/test
```
