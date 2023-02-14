import * as CurrencyController from '@/controllers/currency'
import rateLimiter from '@/utils/rateLimiter'
import Router from 'koa-router'

const router = new Router({
  prefix: '/currency',
})

router.get('/', rateLimiter, CurrencyController.getUserList)

export default router
