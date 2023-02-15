import { ErrorCodeEnum, getErrorException } from '@/configs/exceptionConfig'
import resolver from '@/utils/resolver'

const requestCount = {}

const rateLimiter = (ctx, next) => {
  const clientIp = ctx.request.ip

  // can be stored in redis to avoid OOM problem
  if (!requestCount[clientIp]) {
    requestCount[clientIp] = 1
  } else if (requestCount[clientIp] <= 100) {
    requestCount[clientIp]++
  } else {
    // exceed the limit, return the result after 20 seconds.
    setTimeout(() => {
      requestCount[clientIp] = 0
    }, 10 * 1000)
  }

  if (requestCount[clientIp] > 100) {
    const errorCode = ErrorCodeEnum.TOO_MANY_REQUESTS
    const errorMsg = getErrorException(errorCode)
    ctx.body = resolver.fail(
      {
        name: errorMsg,
        message: `${errorMsg}`,
      },
      errorCode,
      errorMsg
    )
  } else {
    return next()
  }
}

export default rateLimiter
