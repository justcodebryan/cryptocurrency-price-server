import type { MiddlewareFn } from '@/types/base'
import type Koa from 'koa'
import bodyParserMiddleware from './bodyParserMiddleware'
import corsMiddleware from './corsMiddleware'
import errorMiddleware from './errorMiddleware'
import loggerMiddleware from './loggerMiddleware'

const initMiddleware = (app: Koa) => {
  const middlewareQueue: MiddlewareFn[] = [loggerMiddleware, corsMiddleware, bodyParserMiddleware, errorMiddleware]

  middlewareQueue.forEach((middleware) => middleware(app))
}

export default initMiddleware
