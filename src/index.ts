require('module-alias/register')

import Koa from 'koa'
import siteConfig from './configs/siteConfig'
import { DEFAULT_CRON_TIME, DEFAULT_PORT } from './utils/constants'
import CurrencyService from '@/services/currency'

import { scheduledJob } from './utils/schedule'
import cors from 'koa2-cors'
import bodyParser from 'koa-bodyparser'
import logger from 'koa-logger'
import errorHandler from './utils/errorHandler'
import rootRouter from './api'

const port = Number(siteConfig.port) || DEFAULT_PORT

const app = new Koa()

// Load Middleware
app.use(cors())
app.use(bodyParser())
app.use(errorHandler())
app.use(
  logger({
    transporter: (str) => {
      console.log(`[http]: ${str}`)
    },
  })
)
app.on('error', console.error)

// Init Router
app.use(rootRouter.routes()).use(rootRouter.allowedMethods())

// Start server
const server = app.listen(port)
console.log(`[server]: Server started at port ${port}...`)

// Cron Job
export const job = scheduledJob(DEFAULT_CRON_TIME, CurrencyService.getCloudAPICurrencyData)
job.start()

// Export server for unit test
export default server
