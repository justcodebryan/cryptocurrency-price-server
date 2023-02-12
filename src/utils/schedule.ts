import schedule from 'node-schedule'

// schedule tasks to be run on the server
export const fetchRealtimeData = schedule.scheduleJob('*/10 * * * * *', function () {
  console.log('---------------------')
  console.log('Running Cron Job')
})
