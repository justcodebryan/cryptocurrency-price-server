/**
 * Http Error Code Map
 *  500  Server Internal Error -- Server Internal Error
 *  550  No data -- You requested specific single item that we don't have at this moment.
 *  400  Bad Request -- There is something wrong with your request
 *  401  Unauthorized -- Your API key is wrong
 *  403  Forbidden -- Your API key doesn't have enough privileges to access this resource
 *  422  Unknown Error -- Unknown Error
 *  429  Too many requests -- You have exceeded your API key rate limits
 */
export enum ErrorCodeEnum {
  SEVER_INTERNAL_ERROR = 500,
  NO_DATA = 550,
  BAD_REQUEST = 400,
  UNAUTHORIZED = 401,
  FORBIDDEN = 403,
  UNKNOWN_ERROR = 422,
  TOO_MANY_REQUESTS = 429,
}

export const ErrorExceptionMap: Record<ErrorCodeEnum, string> = {
  [ErrorCodeEnum.SEVER_INTERNAL_ERROR]: 'Server Internal Error',
  [ErrorCodeEnum.NO_DATA]: "You requested specific single item that we don't have at this moment.",
  [ErrorCodeEnum.BAD_REQUEST]: 'There is something wrong with your request',
  [ErrorCodeEnum.UNAUTHORIZED]: 'Your API key is wrong',
  [ErrorCodeEnum.FORBIDDEN]: "Your API key doesn't have enough privileges to access this resource",
  [ErrorCodeEnum.UNKNOWN_ERROR]: 'Unknown Error',
  [ErrorCodeEnum.TOO_MANY_REQUESTS]: 'You have exceeded your API key rate limits',
}

export const getErrorException = (errorCode: ErrorCodeEnum) =>
  ErrorExceptionMap[errorCode] ? ErrorExceptionMap[errorCode] : 'Unknown'
