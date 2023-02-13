require('module-alias/register')

import Koa from 'koa'
import siteConfig from './configs/siteConfig'
import { DEFAULT_CRON_TIME, DEFAULT_PORT } from './utils/constants'
import initRouter from './core/initRouter'
import initMiddleware from './core/initMiddleware'
import initCore from './core/initCore'
import CurrencyService from '@/services/currency'

import { runScheduleJob } from './utils/schedule'

const port = Number(siteConfig.port) || DEFAULT_PORT

const app = new Koa()

initMiddleware(app)
initRouter(app)

initCore(app, port)

runScheduleJob(DEFAULT_CRON_TIME, CurrencyService.getCurrencyData)
