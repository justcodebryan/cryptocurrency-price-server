export type Currency = {
  asset_id: string
  name: string
  type_is_crypto: number
  data_start: string
  data_end: string
  data_quote_start: string
  data_quote_end: string
  data_orderbook_start: string
  data_orderbook_end: string
  data_trade_start: string
  data_trade_end: string
  data_symbols_count: number
  volume_1hrs_usd: number
  volume_1day_usd: number
  volume_1mth_usd: number
  price_usd: number
}

export type CurrencyRequestData = Partial<Currency>

export enum CoinEnum {
  BitCoin = 'BTC',
  Ether = 'ETH',
  LiteCoin = 'LTC',
  Monero = 'XMR',
  Ripple = 'XRP',
  DogeCoin = 'DOGE',
  Dash = 'DASH',
}

export const CurrencyQueryString = Object.keys(CoinEnum)
  .map((key) => {
    return CoinEnum[key]
  })
  .join(';')
