import redis from '@/utils/redis'

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
}

export default new CurrencyService()
