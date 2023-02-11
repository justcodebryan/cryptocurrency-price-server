import type Koa from 'koa'

const initCore = (app: Koa, port) => {
  app.listen(port)

  console.log(`[server]: Server started at port ${port}...`)
}

export default initCore
