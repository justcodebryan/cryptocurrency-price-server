import type Koa from 'koa'
import { ErrorCodeEnum, getErrorException } from '@/configs/exceptionConfig'
import resolver from '@/utils/resolver'

const errorHandler = async (ctx: Koa.Context, next: () => Promise<any>) => {
  try {
    await next()
  } catch (error) {
    ctx.status = error.statusCode || error.status || ErrorCodeEnum.SEVER_INTERNAL_ERROR
    error.status = ctx.status
    ctx.body = resolver.fail(
      error,
      ErrorCodeEnum.SEVER_INTERNAL_ERROR,
      getErrorException(ErrorCodeEnum.SEVER_INTERNAL_ERROR)
    )
    ctx.app.emit('error', error, ctx)
  }
}

const errorMiddleware = (app: Koa) => {
  app.use(errorHandler)
  app.on('error', console.error)
}

export default errorMiddleware
