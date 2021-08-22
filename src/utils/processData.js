const fs = require("fs");
const system = require("./system");
const logger = require("./logger");
const mergeObject = require("./func/mergeObject");

const create = async () => {
  let data = require("./template");

  try {
    fs.accessSync(system.today_data_path);
  } catch {
    try {
      fs.writeFileSync(system.today_data_path, JSON.stringify(data));
    } catch (e) {
      logger.error(e);
      return false;
    }
  }
}

const load = async () => {
  try {
    fs.accessSync(system.today_data_path);
  } catch {
    await create();
  }

  try {
    let ret = fs.readFileSync(system.today_data_path).toString();
    return JSON.parse(ret);
  } catch (e) {
    logger.error(e);
    return e;
  }
}

const write = async (data) => {
  try {
    fs.accessSync(system.today_data_path);
  } catch {
    await create();
  }

  let json = await load();
  json = mergeObject({}, json, data);
  
  try {
    fs.writeFileSync(system.today_data_path, JSON.stringify(json));
  } catch(e) {
    logger.error(e);
    return e;
  }

  return json;
}

module.exports = {
  create: create,
  load: load,
  write: write
}
