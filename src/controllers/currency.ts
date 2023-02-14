import CurrencyService from '@/services/currency'
import resolver from '@/utils/resolver'
import { isString } from '@/utils/type'
import type { Context } from 'koa'

export const getUserList = async (ctx: Context) => {
  const {
    request: { query },
  } = ctx

  const { filter_assets_id } = query

  if (!filter_assets_id) {
    return (ctx.body = resolver.success([]))
  }

  if (!isString(filter_assets_id)) {
    return (ctx.body = resolver.success([]))
  }

  const assetIdList = filter_assets_id.indexOf(';') ? (filter_assets_id as string).split(';') : [filter_assets_id]

  const res = await CurrencyService.getCurrencyInfo(assetIdList as string[])

  const result = res.map((str) => {
    return JSON.parse(str)
  })

  ctx.body = resolver.success(result)
}
