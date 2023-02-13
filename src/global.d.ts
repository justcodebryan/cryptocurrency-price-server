declare global {
  namespace NodeJS {
    interface ProcessEnv {
      NODE_ENV: 'production' | 'staging' | 'dev' | 'development'

      HOST?: string
      PORT?: string

      DB?: string
      DB_USERNAME?: string
      DB_PASSWORD?: string
      DB_PORT?: string

      REDIS_PORT?: string
      REDIS_HOST?: string

      CLOUD_API?: string
      CLOUD_API_KEY?: string

      // more environment variables coming...
    }
  }
}

export {}
