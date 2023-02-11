import Koa from 'koa'
import initCore from './app'
import siteConfig from './config/siteConfig'
import moduleAlias from 'module-alias'
import * as dotenv from 'dotenv'
import { DEFAULT_PORT } from './utils/constants'

// import module-alias to use module alias
moduleAlias()
// Load corresponding config from dotenv file
dotenv.config({ path: `.env.${process.env.NODE_ENV}` })

const port = Number(siteConfig.port) || DEFAULT_PORT

const app = new Koa()

initCore(app, port)
