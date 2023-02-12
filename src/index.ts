require('module-alias/register')

import Koa from 'koa'
import siteConfig from './configs/siteConfig'
import * as dotenv from 'dotenv'
import { DEFAULT_PORT } from './utils/constants'
import initRouter from './core/initRouter'
import initMiddleware from './core/initMiddleware'
import initCore from './core/initCore'

// import module-alias to use module alias
// Load corresponding config from dotenv file
dotenv.config({ path: `.env.${process.env.NODE_ENV}` })

const port = Number(siteConfig.port) || DEFAULT_PORT

const app = new Koa()

initMiddleware(app)
initRouter(app)

initCore(app, port)
