# Project Tech Stack

## Main Package

- [Koa.js](https://koajs.com/)
  - [Koa Router](https://github.com/ZijianHe/koa-router)
  - [Koa CORS](https://github.com/koajs/cors)
  - [Koa Logger](https://github.com/koajs/logger)
  - [Koa BodyParser](https://github.com/koajs/bodyparser)
- [TypeScript](https://www.typescriptlang.org/)
- [Sequelize.js](https://sequelize.org/)
- [MySQL](https://www.mysql.com/)

## Dev Dependencies

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

After copy the dotenv file template, fill the corresponding config in the new dotenv file.

2. Install dependencies via pnpm.

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
