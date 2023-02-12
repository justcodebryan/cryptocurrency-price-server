// import { Sequelize } from 'sequelize'
// import dbConfig, { sequelizeOptions } from '@/configs/dbConfig'
// import { DEFAULT_PORT } from './constants'

// const { database, username, password, host, port } = dbConfig

// const sequelize = new Sequelize(database, username, password, {
//   ...sequelizeOptions,
//   host,
//   port: Number(port) || DEFAULT_PORT,
// })

// // source: https://stackoverflow.com/a/74472643
// // Do not drop the table but all the tables updates.
// sequelize
//   .sync({ force: false, alter: true })
//   .then(() => {
//     console.log('[db]: All models were updated successfully.')
//   })
//   .catch((err) => {
//     console.log(`[db]: Database sync error.\n`)
//     console.log(`[error]: ${err}.`)
//   })

// sequelize
//   .authenticate()
//   .then(() => {
//     console.log('[db]: Database Connection has been established successfully.')
//   })
//   .catch((err) => {
//     console.error('[db]: Unable to connect to the database.', `\n[error]: ${err}.`)
//   })

// export default sequelize
