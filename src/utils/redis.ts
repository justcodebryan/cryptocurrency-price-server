import redisConfig from '@/configs/redisConfig'
import { Redis } from 'ioredis'
import { DEFAULT_REDIS_PORT } from './constants'

const { port, host } = redisConfig

const client = new Redis({
  port: Number(port) || DEFAULT_REDIS_PORT,
  host,
})

export default client
