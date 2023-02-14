import * as CurrencyController from '@/controllers/currency'
import rateLimitMiddleware from '@/middlewares/limitMiddleware'
import Router from 'koa-router'

const router = new Router({
  prefix: '/currency',
})

router.get('/', rateLimitMiddleware, CurrencyController.getUserList)

export default router
