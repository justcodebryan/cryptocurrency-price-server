import type Koa from 'koa'
import type { RouterContext } from 'koa-router'

// Common Types
export type EmptyObject = Record<string | number | symbol, never>

export type AnyObject = Record<string | number | symbol, any>

export type ErrorObject = AnyObject & {
  name: string
  message: string
}

export const defaultErrorObject: ErrorObject = { name: 'Error', message: 'Request Failed' }

export type MiddlewareFn = (app: Koa) => void

export type ParsedUrlQueryParams = string | string[]

// Koa Context Data Type
export type BaseContext = Koa.Context

export type Context = BaseContext & RouterContext

// Response Data Type
export type BaseResponseData = AnyObject

export type PaginationResponseData<TData extends object = AnyObject> = BaseResponseData & {
  items: TData[]
  total?: number
}

export type BaseError = Error

type BaseResponse = {
  code?: number
  msg?: string
}

export type ErrorResponse<TError extends Error = ErrorObject> = BaseResponse & {
  errorCode: number
  err?: TError
}

export type SuccessResponse<TData extends BaseResponseData | PaginationResponseData = AnyObject> = BaseResponse & {
  data?: TData
}

export type Response<
  TData extends BaseResponseData | PaginationResponseData = AnyObject,
  TError extends Error = ErrorObject
> = BaseResponse & {
  errorCode?: number
  data?: TData
  err?: TError
}
