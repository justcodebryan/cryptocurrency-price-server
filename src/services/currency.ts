import cloudApiConfig from '@/configs/cloudApiConfig'
import { CurrencyQueryString } from '@/types/currency'
import redis, { runJob } from '@/utils/redis'
import fetch from 'node-fetch'

class CurrencyService {
  async getCurrencyInfo(assetIdList: string[]) {
    return new Promise<string[]>((resolve, reject) => {
      redis
        .mget(assetIdList || [])
        .then((result) => {
          resolve(result)
        })
        .catch((err) => {
          console.log(err)
          reject(err)
        })
    })
  }

  async getCloudAPICurrencyData() {
    const fetchCurrencyData = () => {
      console.log('---------------------')
      console.log('Running Cron Job')
      fetch(`${cloudApiConfig.url}/v1/assets?filter_asset_id=${CurrencyQueryString}`, {
        method: 'GET',
        headers: {
          'X-CoinAPI-Key': cloudApiConfig.apiKey,
        },
      })
        .then(function (res) {
          return res.json()
        })
        .then(function (res) {
          if (res && res['error']) throw new Error('Too many requests')

          const currencyArr = res.map((coin) => [coin.asset_id, JSON.stringify(coin)])
          redis.mset(new Map([...currencyArr]))
        })
        .catch(function (err) {
          console.log(err)
        })
    }

    await runJob(fetchCurrencyData)
  }
}

export default new CurrencyService()
