import type { AnyObject, ErrorObject, ErrorResponse, Response, SuccessResponse } from '@/types/base'
import { defaultErrorObject } from '@/types/base'

class Resolver {
  public static _resolver: Resolver = new Resolver()

  private constructor() {
    if (Resolver._resolver) {
      throw new Error('[error]: Instantiation failed: Use Resolver.getInstance() instead of new.')
    }
    Resolver._resolver = this
  }

  public static getInstance(): Resolver {
    return Resolver._resolver
  }

  public fail<TError extends Error = ErrorObject>(
    err = defaultErrorObject,
    errorCode = 10001,
    msg = 'fail'
  ): ErrorResponse<TError> {
    return {
      err,
      errorCode,
      msg,
    }
  }

  public success<TData extends object | Array<object | string | number> = AnyObject>(
    data?: TData,
    msg = 'success',
    code = 200
  ): SuccessResponse<TData> {
    return {
      data,
      msg,
      code,
    }
  }

  public json<TData extends object = AnyObject, TError extends Error = ErrorObject>(
    code = 200,
    msg = 'success',
    data?: TData,
    err?: TError,
    errorCode?: number
  ): Response<TData> {
    return {
      code,
      msg,
      data,
      err,
      errorCode,
    }
  }
}

const resolver = Resolver.getInstance()

export default resolver
