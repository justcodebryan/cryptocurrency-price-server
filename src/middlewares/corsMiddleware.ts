import type Koa from 'koa'
import cors from 'koa2-cors'

const corsMiddleware = (app: Koa) => {
  app.use(cors())
}

export default corsMiddleware
