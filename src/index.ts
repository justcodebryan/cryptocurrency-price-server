require('module-alias/register')

import Koa from 'koa'
import siteConfig from './configs/siteConfig'
import { DEFAULT_CRON_TIME, DEFAULT_PORT } from './utils/constants'
import initRouter from './core/initRouter'
import initMiddleware from './core/initMiddleware'
import CurrencyService from '@/services/currency'

import { scheduledJob } from './utils/schedule'

const port = Number(siteConfig.port) || DEFAULT_PORT

const app = new Koa()

initMiddleware(app)
initRouter(app)

const server = app.listen(port)
console.log(`[server]: Server started at port ${port}...`)

export const job = scheduledJob(DEFAULT_CRON_TIME, CurrencyService.getCloudAPICurrencyData)
// job.start()
job.stop()

export default server
