import * as dotenv from 'dotenv'

dotenv.config({ path: `.env.${process.env.NODE_ENV}` })

const cloudApiConfig = {
  url: process.env.CLOUD_API,
  apiKey: process.env.CLOUD_API_KEY,
}

export default cloudApiConfig
