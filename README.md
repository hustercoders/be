# HUSTERCODERS Build with TypeORM

### My personal blog project

_For another programmer, make sure you already have mysql in your mechine!_

Steps to run this project:

1. Run `yarn install` command
2. Setup database settings inside `ormconfig.json` file

### Generate your database:

a. Create your empty database name if not exist.
b. Open terminal and enter this bash to create table and relationship:

```
$ yarn generate migration:run
```

3. Run `yarn start` command
