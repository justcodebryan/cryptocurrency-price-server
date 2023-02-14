import { ErrorCodeEnum, getErrorException } from '@/configs/exceptionConfig'
import resolver from '@/utils/resolver'

const requestCount = {}

const rateLimitMiddleware = (ctx, next) => {
  const clientIp = ctx.request.ip

  if (!requestCount[clientIp]) {
    requestCount[clientIp] = 1
  } else {
    requestCount[clientIp]++
  }

  if (requestCount[clientIp] > 100) {
    const errorCode = ErrorCodeEnum.TOO_MANY_REQUESTS
    const errorMsg = getErrorException(errorCode)
    ctx.body = resolver.fail(
      {
        name: errorMsg,
        message: errorMsg,
      },
      errorCode,
      errorMsg
    )
  } else {
    return next()
  }
}

export default rateLimitMiddleware
