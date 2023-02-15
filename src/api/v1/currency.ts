import * as CurrencyController from '@/controllers/currency'
import Router from 'koa-router'

const router = new Router({
  prefix: '/currency',
})

router.get('/', CurrencyController.getUserList)

export default router
