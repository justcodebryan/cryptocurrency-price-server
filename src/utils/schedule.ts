import cron from 'node-cron'

// schedule tasks to be run on the server
// eslint-disable-next-line @typescript-eslint/ban-types
export const runScheduleJob = (cronTime: string, job: Function) => {
  /**
   * source: https://github.com/node-cron/node-cron
   */
  cron.schedule(cronTime, job, {
    scheduled: true,
    timezone: 'Asia/Shanghai',
  })
}
