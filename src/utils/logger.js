const chalk = require('chalk');
const getDate = require('./func/getDate');
let getCaller = require('./func/getCaller');

module.exports = print = {
  info: ($message) => {
    let date = getDate();
    console.log(`[${date}]${getCaller()}${chalk.blue('[INFO]')} ${$message}`);
  },
  warn: ($message) => {
    let date = getDate();
    console.warn(
      `[${date}]${getCaller()}${chalk.yellow(`[WARN] ` + $message)}`);
  },
  error: ($message) => {
    let date = getDate();
    if (typeof ($message) === 'object')
      console.error(
        `[${date}]${getCaller()}${chalk.red(`[ERROR] ${$message.stack}`)}`);
    else
      console.error(
        `[${date}]${getCaller()}${chalk.red(`[ERROR] ` + $message)}`);
  },
  fatal: ($message) => {
    let date = getDate();
    console.error(`[${date}]${getCaller()}${chalk.red(`[FATAL] ` + $message)}`);
    //setTimeout(() => process.exit(), 500);
  },
  success: ($message) => {
    let date = getDate();
    console.log(`[${date}]${getCaller()}${chalk.blue('[INFO]')} ${chalk.green(
      $message)}`);
  },
  message: ($message) => {
    let date = getDate();
    console.log(
      `[${date}]${getCaller()}${chalk.blue('[MESSAGE]')} ${$message}`);
  },
  json: ($json) => {
    let date = getDate();
    console.log(`[${date}]${getCaller()}${chalk.blue('[JSON]')}\n`, $json);
  },
};