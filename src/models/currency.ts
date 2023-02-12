// import type { InferAttributes, InferCreationAttributes, Model } from 'sequelize'
// import { DataTypes } from 'sequelize'
// import sequelize from '@/utils/sequelize'
// import { Currency } from '@/types/currency'

// export interface CurrencyModel
//   extends Model<InferAttributes<CurrencyModel>, InferCreationAttributes<CurrencyModel>>,
//     Currency {}

// const Currency = sequelize.define<CurrencyModel>('currency', {
//   asset_id: {
//     type: DataTypes.STRING,
//     allowNull: false,
//   },
//   name: {
//     type: DataTypes.STRING,
//     allowNull: false,
//   },
//   type_is_crypto: {
//     type: DataTypes.INTEGER,
//     allowNull: false,
//   },
//   data_start: {
//     type: DataTypes.STRING,
//     allowNull: false,
//   },
//   data_end: {
//     type: DataTypes.STRING,
//     allowNull: false,
//   },
//   data_quote_start: {
//     type: DataTypes.STRING,
//     allowNull: false,
//   },
//   data_quote_end: {
//     type: DataTypes.STRING,
//     allowNull: false,
//   },
//   data_orderbook_start: {
//     type: DataTypes.STRING,
//     allowNull: false,
//   },
//   data_orderbook_end: {
//     type: DataTypes.STRING,
//     allowNull: false,
//   },
//   data_trade_start: {
//     type: DataTypes.STRING,
//     allowNull: false,
//   },
//   data_trade_end: {
//     type: DataTypes.STRING,
//     allowNull: false,
//   },
//   data_symbols_count: {
//     type: DataTypes.INTEGER,
//     allowNull: false,
//   },
//   volume_1hrs_usd: {
//     type: DataTypes.INTEGER,
//     allowNull: false,
//   },
//   volume_1day_usd: {
//     type: DataTypes.INTEGER,
//     allowNull: false,
//   },
//   volume_1mth_usd: {
//     type: DataTypes.INTEGER,
//     allowNull: false,
//   },
//   price_usd: {
//     type: DataTypes.INTEGER,
//     allowNull: false,
//   },
// })

// export default Currency
