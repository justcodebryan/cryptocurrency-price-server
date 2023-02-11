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

      // more environment variables coming...
    }
  }
}

export {}
