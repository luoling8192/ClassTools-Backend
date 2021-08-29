const path = require('path');
const moment = require('moment');

const today_date = () => moment(Date.now()).format('YYYY-MM-DD');
const today_day = () => moment(Date.now()).weekday();

module.exports = {
  today_date: today_date,
  today_day: today_day,
  data_path: path.join(process.cwd(), 'data'),
  today_data_path: path.join(process.cwd(), 'data', `${today_date()}.json`),
};
