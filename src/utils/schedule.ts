import cron from 'cron'
import cloudApiConfig from '@/configs/cloudApiConfig'
import fetch from 'node-fetch'
import redisClient, { runJob } from './redis'
import { CurrencyQueryString } from '@/types/currency'

// schedule tasks to be run on the server
export const realtimeSyncScheduleJob = () => {
  /**
   * constructor(cronTime, onTick, onComplete, start, timezone, context, runOnInit, utcOffset, unrefTimeout) - Of note, the first parameter here can be a JSON object that has the below names and associated types (see examples above).
   *  cronTime - [REQUIRED] - The time to fire off your job. This can be in the form of cron syntax or a JS Date object.
   *  onTick - [REQUIRED] - The function to fire at the specified time. If an onComplete callback was provided, onTick will receive it as an argument. onTick may call onComplete when it has finished its work.
   *  onComplete - [OPTIONAL] - A function that will fire when the job is stopped with job.stop(), and may also be called by onTick at the end of each run.
   *  start - [OPTIONAL] - Specifies whether to start the job just before exiting the constructor. By default this is set to false. If left at default you will need to call job.start() in order to start the job (assuming job is the variable you set the cronjob to). This does not immediately fire your onTick function, it just gives you more control over the behavior of your jobs.
   *  timeZone - [OPTIONAL] - Specify the timezone for the execution. This will modify the actual time relative to your timezone. If the timezone is invalid, an error is thrown. You can check all timezones available at Moment Timezone Website. Probably don't use both timeZone and utcOffset together or weird things may happen.
   *  context - [OPTIONAL] - The context within which to execute the onTick method. This defaults to the cronjob itself allowing you to call this.stop(). However, if you change this you'll have access to the functions and values within your context object.
   *  runOnInit - [OPTIONAL] - This will immediately fire your onTick function as soon as the requisite initialization has happened. This option is set to false by default for backwards compatibility.
   *  utcOffset - [OPTIONAL] - This allows you to specify the offset of your timezone rather than using the timeZone param. Probably don't use both timeZone and utcOffset together or weird things may happen.
   *  unrefTimeout - [OPTIONAL] - If you have code that keeps the event loop running and want to stop the node process when that finishes regardless of the state of your cronjob, you can do so making use of this parameter. This is off by default and cron will run as if it needs to control the event loop. For more information take a look at timers#timers_timeout_unref from the NodeJS docs.
   */
  new cron.CronJob(
    '*/3 * * * * *',
    async () => {
      const fetchCurrencyData = () => {
        console.log('---------------------')
        console.log('Running Cron Job')
        fetch(`${cloudApiConfig.url}/v1/assets?filter_asset_id=${CurrencyQueryString}`, {
          method: 'GET',
          headers: {
            'X-CoinAPI-Key': cloudApiConfig.apiKey,
          },
        })
          .then(function (res) {
            return res.json()
          })
          .then(function (res) {
            if (res && res['error']) throw new Error('Too many requests')

            const currencyArr = res.map((coin) => [coin.asset_id, JSON.stringify(coin)])
            redisClient.mset(new Map([...currencyArr]))
          })
          .catch(function (err) {
            console.log(err)
          })
      }

      await runJob(fetchCurrencyData)
    },
    null /* onComplete */,
    true,
    'Asia/Shanghai'
  )
}
