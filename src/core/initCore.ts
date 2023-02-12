import type Koa from 'koa'

const initCore = (app: Koa<Koa.DefaultState, Koa.DefaultContext>, port: number) => {
  console.log(`[server]: Init Core...`)

  app.listen(port)

  console.log(`[server]: Server started at port ${port}...`)
}

export default initCore
