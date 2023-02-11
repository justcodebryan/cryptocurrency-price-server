import { DEFAULT_OFFSET } from '@/utils/constants'

class CurrencyService {
  async getCurrencyTotal() {
    return DEFAULT_OFFSET
  }

  async getCurrencyList(startIndex, endIndex) {
    return {
      startIndex,
      endIndex,
    }
  }
}

export default CurrencyService
