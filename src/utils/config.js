const fs = require('fs');
const path = require('path');
const mergeObject = require('./func/mergeObject');
const logger = require('./logger');

function get() {
  let json;
  const config_path = path.join(process.cwd(), 'config.json');

  try {
    json = JSON.parse(fs.readFileSync(config_path).toString());
  } catch (e) {
    json = null;
  }

  return json ? json : require('../config.json');
}

async function set(body) {
  let config = get();
  let ret = mergeObject({}, config, body);
  const config_path = path.join(process.cwd(), 'config.json');
  console.log(config_path)

  try {
    fs.writeFileSync(config_path, JSON.stringify(ret));
  } catch (e) {
    logger.error(e);
  }

  return ret;
}

module.exports = {
  get: get,
  set: set,
};