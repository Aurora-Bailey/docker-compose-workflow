# docker-compose-workflow

### Make directory
```
$ mkdir project-name
$ cd project-name
```

### Create git repository on github
Log in to github.com and create a new repository.

### Sync project to github
```
$ echo "# project-name" >> README.md
$ git init
$ git add README.md
$ git commit -m "init"
$ git branch -M main
$ git remote add origin git@github.com:Aurora-Bailey/project-name.git
$ git push -u origin main
```


## Running project

Dev
```
docker compose -f docker-compose.yml -f docker-compose.dev.yml up -d --build
```

Test nodejs one
```
docker compose -f docker-compose.yml -f docker-compose.dev.yml run --rm nodejs-one npm run test

```

Test nodejs two
```
docker compose -f docker-compose.yml -f docker-compose.dev.yml run --rm nodejs-two npm run test
```


Production
```
docker compose up -d --build
```

Push to docker hub
```
docker compose build
docker compose push
```

Pull from docker hub
```
docker compose pull
```