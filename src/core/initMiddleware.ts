import type { MiddlewareFn } from '@/types/base'
import { getAllFilesExport } from '@/utils/file'
import type Koa from 'koa'
import path from 'path'

const initMiddleware = (app: Koa) => {
  console.log(`[server]: Init Middleware...`)
  const dirPath = path.join(`${process.cwd()}/src/middlewares/`)
  getAllFilesExport(dirPath, (middleware: MiddlewareFn) => {
    middleware(app)
  })
}

export default initMiddleware
