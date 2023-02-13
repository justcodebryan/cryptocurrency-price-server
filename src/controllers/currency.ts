import CurrencyService from '@/services/currency'
import resolver from '@/utils/resolver'
import type { Context } from 'koa'

export const getUserList = async (ctx: Context) => {
  const service = new CurrencyService()

  const {
    request: { query },
  } = ctx

  const { filter_assets_id } = query

  const assetIdList = (filter_assets_id as string).split(';')

  const res = await service.getCurrencyInfo(assetIdList)

  const result = res.map((str) => {
    return JSON.parse(str)
  })

  ctx.body = resolver.success(result)
}
