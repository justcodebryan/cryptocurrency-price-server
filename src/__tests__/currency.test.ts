import request from 'supertest'
import server, { job } from '@/index'
import { CurrencyQueryString } from '@/types/currency'
import redis from '@/utils/redis'

describe('GET /api/v1/currency', () => {
  test('Currency GET / with querystring', async () => {
    const query = {
      filter_assets_id: CurrencyQueryString,
    }
    const response = await request(server).get(`/api/v1/currency/`).query(query)
    expect(response.status).toBe(200)
    expect(response.body.code).toBe(200)
    expect(response.body.msg).toBe('success')
    expect(response.body.data).toHaveLength(7)
  })

  test('Currency GET / without querystring', async () => {
    const response = await request(server).get(`/api/v1/currency/`)
    expect(response.status).toBe(200)
    expect(response.body.code).toBe(200)
    expect(response.body.msg).toBe('success')
    expect(response.body.data).toHaveLength(0)
  })

  test('Currency GET / with wrong querystring', async () => {
    const response = await request(server).get(`/api/v1/currency/`).query('jkjdkal')
    expect(response.status).toBe(200)
    expect(response.body.code).toBe(200)
    expect(response.body.msg).toBe('success')
    expect(response.body.data).toHaveLength(0)
  })

  afterAll((done) => {
    job.stop()
    redis.quit()
    server.close(done)
  }, 5000)
})
