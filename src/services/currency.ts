import { DEFAULT_OFFSET } from '@/utils/constants'
import Redis from 'ioredis'

class CurrencyService {
  async getCurrencyTotal() {
    return DEFAULT_OFFSET
  }

  async getCurrencyTest() {
    const redis = new Redis()
    redis.set(
      'mykey',
      JSON.stringify({
        asset_id: 'BTC',
        name: 'Bitcoin',
        type_is_crypto: 1,
        data_start: '2010-07-17',
        data_end: '2019-11-03',
        data_quote_start: '2014-02-24T17:43:05.0000000Z',
        data_quote_end: '2019-11-03T17:55:07.6724523Z',
        data_orderbook_start: '2014-02-24T17:43:05.0000000Z',
        data_orderbook_end: '2019-11-03T17:55:17.8592413Z',
        data_trade_start: '2010-07-17T23:09:17.0000000Z',
        data_trade_end: '2019-11-03T17:55:11.8220000Z',
        data_symbols_count: 22711,
        volume_1hrs_usd: 102894431436.49,
        volume_1day_usd: 2086392323256.16,
        volume_1mth_usd: 57929168359984.54,
        price_usd: 9166.207274778093,
      })
    )
    const res = redis.get('mykey').then((result) => {
      console.log(result) // Prints "value"
    })
    console.log(res)
    return res
  }

  async getCurrencyList(startIndex, endIndex) {
    return {
      startIndex,
      endIndex,
    }
  }
}

export default CurrencyService
