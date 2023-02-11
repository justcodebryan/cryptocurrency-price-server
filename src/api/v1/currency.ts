import Router from 'koa-router'

const router = new Router({
  prefix: '/currency',
})

router.get('/', async (ctx) => {
  console.log('Hello currency')
})

export default router
