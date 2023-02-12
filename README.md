# Architecture Design

## Purpose

Assuming this application will be served to millions of people. And assume we will be charged by [coinapi.io](https://docs.coinapi.io/) for the number of api calls made.

So minimizing charging fee for api calls and promising the scalability of the project in order to make sure further development job easier to go.

## Solution

### Brief Description

To minimize the times of api calls, we need to avoid the frontend requests the cloud api directly.

But the api need to show the realtime price of each cryptocurrency, we have to update the data in our database periodically.

So using the [Redis](https://redis.io/) to act as cache, and the server will request the latest data from [coinapi.io](https://docs.coinapi.io/) every **10 seconds** by running Linux **crontab** order.

The frontend request will go to this backend directly and we can modify the raw data from cloud api to fulfill our requirement.

### System Flow

```plantuml
@startuml
actor user
interface frontend
node backend
database redis
cloud cloud

user --> frontend
frontend --> backend
backend --> redis
backend --> cloud
redis --> cloud

@enduml
```

| Variable             | Description                                                                                |
| -------------------- | ------------------------------------------------------------------------------------------ |
| asset_id             | Our asset identifier. Superset of the ISO 4217 currency codes standard.                    |
| name                 | Display name of the asset.                                                                 |
| type_is_crypto       | Boolean value transported as integer; `1` for cryptocurrency assets, `0` otherwise.        |
| data_quote_start     | The date and time of first quote.                                                          |
| data_quote_end       | The date and time for last quote.                                                          |
| data_orderbook_start | The date and time for first order book.                                                    |
| data_orderbook_end   | The date and time for last order book.                                                     |
| data_trade_start     | The date and time for first trade.                                                         |
| data_trade_end       | The date and time for last trade.                                                          |
| data_quote_count     | The count of quotes.                                                                       |
| data_trade_count     | The count of trades.                                                                       |
| data_symbols_count   | The count of symbols for given asset.                                                      |
| volume_1hrs_usd      | The usd volume of all symbols associated with this asset from last 1 hour rolling period.  |
| volume_1day_usd      | The usd volume of all symbols associated with this asset from last 1 day rolling period.   |
| volume_1mth_usd      | The usd volume of all symbols associated with this asset from last 1 month rolling period. |
| price_usd            | The actual usd price.                                                                      |

## Folder Structure

```
 src
  ├── api
  │   └── v1
  ├── configs
  ├── controllers
  ├── core
  ├── middlewares
  ├── models
  ├── services
  ├── types
  └── utils
```

This server uses [M-V-C](https://en.wikipedia.org/wiki/Model%E2%80%93view%E2%80%93controller) structure and [Domain Driven Design](https://en.wikipedia.org/wiki/Domain-driven_design) to build up the folder structure.

- api -> store the routers, which are written in RESTful style.
- configs -> store some basic config, like http exception, site config and so on.
- controllers -> the controllers for corresponding routes in order to response the request.
- core -> the initializer of the whole application, including application, middleware and router loading.
- middleware -> the middleware to handle the request.
- models -> the models of data.
- services -> the services to get data from database.
- types -> the types for each domain.
- utils -> common utils function used in the project.

# Tech Stack

## Packages

- [Koa.js](https://koajs.com/)
  - [Koa Router](https://github.com/ZijianHe/koa-router)
  - [Koa CORS](https://github.com/koajs/cors)
  - [Koa Logger](https://github.com/koajs/logger)
  - [Koa BodyParser](https://github.com/koajs/bodyparser)
- [TypeScript](https://www.typescriptlang.org/)
- [Redis](https://redis.io/)

## Dev Dependencies

- [pnpm](https://pnpm.io/)
- [Nodemon](https://nodemon.io/)
- [ESLint](https://eslint.org/)
- [Prettier](https://prettier.io/)
- [CommitLint](https://commitlint.js.org/)
- [Husky](https://typicode.github.io/husky/)

# Startup

1. Run the following command under the project root path.

```bash
cp ./.env ./.env.development
```

After copying the dotenv file template, you need to fill the corresponding config in the new dotenv file.

2. Install dependencies via pnpm.

If you have not installed the pnpm as your node package manager, please install pnpm with global flag.

```bash
npm install -g pnpm
# yarn add -g pnpm
```

Install project dependencies in the project root folder.

```bash
pnpm i
```

3. Start the dev server.

```bash
pnpm dev
```

# FAQ

## Git hooks are not set as executable warning

If terminal console prints message: `hint: The '.husky/commit-msg' hook was ignored because it's not set as executable.`, pls run the following command in terminal. Let the package husky grants the access to run.

```bash
chmod ug+x .husky/*
chmod ug+x .git/hooks/*
```
