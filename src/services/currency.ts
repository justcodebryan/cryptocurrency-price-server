import Redis from 'ioredis'

class CurrencyService {
  async getCurrencyInfo(assetIdList: string[]) {
    const redis = new Redis()
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

export default CurrencyService
