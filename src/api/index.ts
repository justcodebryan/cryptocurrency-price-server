import { loadSubRouterList } from '@/utils/api'
import Router from 'koa-router'

import routerV1 from './v1'

const rootRouter = new Router({
  prefix: '/api',
})

const subRouterList = [routerV1]

loadSubRouterList(rootRouter, subRouterList)

export default rootRouter
