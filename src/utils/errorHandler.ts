import { ErrorCodeEnum, getErrorException } from '@/configs/exceptionConfig'
import type Koa from 'koa'
import resolver from './resolver'

const errorHandler = () => {
  return async function async(ctx: Koa.Context, next: () => Promise<any>) {
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
}

export default errorHandler
