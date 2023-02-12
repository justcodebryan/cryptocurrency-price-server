import type Router from 'koa-router'

export const loadSubRouterList = (rootRouter: Router, subRouterList: Router[]) => {
  if (!Array.isArray(subRouterList)) {
    throw new Error('Please check sub router list data type!')
  }

  for (const subRouter of subRouterList) {
    rootRouter.use(subRouter.routes(), subRouter.allowedMethods())
  }
}
