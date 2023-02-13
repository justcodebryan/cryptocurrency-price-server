import redisConfig from '@/configs/redisConfig'
import { Redis } from 'ioredis'
import { DEFAULT_REDIS_PORT } from './constants'

const { port, host } = redisConfig

const redis = new Redis({
  port: Number(port) || DEFAULT_REDIS_PORT,
  host,
})

export default redis

const lockKey = 'cryptocurrency_price_server_lock_key'
const lockTtl = 1000 // time to live for the lock in milliseconds

const acquireLock = async (): Promise<boolean> => {
  const lockValue = Math.random().toString(36).substring(2, 15)
  const result = await redis.set(lockKey, lockValue, 'PX', lockTtl, 'NX')
  return result === 'OK'
}

const releaseLock = async (): Promise<void> => {
  await redis.del(lockKey)
}

// eslint-disable-next-line @typescript-eslint/ban-types
export const runJob = async (job: Function): Promise<void> => {
  const lockAcquired = await acquireLock()
  if (!lockAcquired) {
    console.log('[redis]: Another instance of the job is already running')
    return
  }

  try {
    // console.log('[redis]: Job is running')
    job()
  } finally {
    await releaseLock()
  }
}
