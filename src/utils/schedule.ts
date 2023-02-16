import cron from 'node-cron'

// schedule tasks to be run on the server
// eslint-disable-next-line @typescript-eslint/ban-types
export const scheduledJob = (cronTime: string, jobFn: Function) => {
  /**
   * source: https://github.com/node-cron/node-cron
   */
  const job = cron.schedule(cronTime, jobFn, {
    timezone: 'Asia/Shanghai',
  })

  return job
}
