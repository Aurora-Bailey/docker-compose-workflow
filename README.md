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

test
```
docker compose -f docker-compose.yml -f docker-compose.dev.yml run nodejs-one npm run test
```


Production
```
docker compose up -d --build
```