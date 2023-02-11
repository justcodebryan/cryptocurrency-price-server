import type Koa from 'koa'
import logger from 'koa-logger'

const loggerMiddleware = (app: Koa) => {
  app.use(
    logger({
      transporter: (str) => {
        console.log(`[http]: ${str}`)
      },
    })
  )
}

export default loggerMiddleware
