const path = require("path");
const moment = require("moment");

const today_date = () => moment(Date.now()).format("YYYY-MM-DD");

module.exports = {
  today_date: today_date,
  data_path: path.join(process.cwd(), "data"),
  today_data_path: path.join(process.cwd(), "data", `${today_date()}.json`)
}
