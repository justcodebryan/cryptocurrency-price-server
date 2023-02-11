import type Koa from 'koa'
import rootRouter from '@/api'

const initRouter = (app: Koa) => {
  app.use(rootRouter.routes()).use(rootRouter.allowedMethods())
}

export default initRouter
