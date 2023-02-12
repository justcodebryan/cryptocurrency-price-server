import { loadSubRouterList } from '@/utils/api'
import Router from 'koa-router'

import currencyRouter from './currency'

const router = new Router({
  prefix: '/v1',
})

const subRouterList = [currencyRouter]

loadSubRouterList(router, subRouterList)

export default router
