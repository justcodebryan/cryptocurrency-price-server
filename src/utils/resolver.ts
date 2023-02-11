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
    errorCode = 10001,
    msg = 'fail',
    err = defaultErrorObject
  ): ErrorResponse<TError> {
    return {
      errorCode,
      msg,
      err,
    }
  }

  public success<TData extends object = AnyObject>(msg = 'success', code = 200, data?: TData): SuccessResponse<TData> {
    return {
      msg,
      code,
      data,
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
