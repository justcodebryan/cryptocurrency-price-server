// import module-alias to use module alias
require('module-alias/register')

import Koa from 'koa'
import initCore from './app'

const PORT = 3000

const app = new Koa()

initCore(app, PORT)
