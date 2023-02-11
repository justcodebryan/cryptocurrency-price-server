import CurrencyService from '@/services/currency'
import Pagination from '@/utils/pagination'
import resolver from '@/utils/resolver'
import type { Context } from 'koa'

export const getUserList = async (ctx: Context) => {
  const service = new CurrencyService()

  const {
    request: { query },
  } = ctx

  const { current, page_size } = query

  const total = await service.getCurrencyTotal()
  const page = Number(current)
  const pageSize = Number(page_size)

  const pagination = new Pagination(page, pageSize, total)

  const result = await service.getCurrencyList(pagination.startIndex, pagination.endIndex)

  ctx.body = resolver.success({
    items: result,
    total,
  })
}
