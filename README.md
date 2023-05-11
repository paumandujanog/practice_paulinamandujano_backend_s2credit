## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Swagger API 
# url
http://localhost:3000/api


## Running Migrations

The app auto-runs the migrations when is started for first time and the environment `MAIN_DB_RUN_MIGRATIONS` is set to `1`; because it runs the js files from de dist directory, you should run `yarn build` in order to generate the appropiate migration files before start the app.

Note that the `MIGRATIONS_PATH` env variable must be set to `'/dist/database/migration/*.{js,ts}'` in local and `/database/migration/*.{js,ts}` to other deployed environments.

In case that you want to run the migrations manually, run the next commands:

```bash
# First create the ormconfig.json file with
$ yarn pretypeorm
# to generate migration
$ yarn migrations:generate <migration_name>
# to run migrations:
$ yarn migrations:run
```