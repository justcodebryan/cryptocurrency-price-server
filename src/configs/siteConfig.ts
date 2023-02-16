export const isProd = process.env.NODE_ENV === 'production'
export const isStag = process.env.NODE_ENV === 'staging'
export const isDev = process.env.NODE_ENV === 'dev'
export const isDevelopment = process.env.NODE_ENV === 'development'

const siteConfig = {
  env: process.env.NODE_ENV,
  host: process.env.HOST,
  port: process.env.PORT,
}

export default siteConfig
