const fs = require('fs');
const system = require('./utils/system');
const logger = require('./utils/logger');
const data = require('./utils/processData');
const moment = require('moment');

module.exports = async () => {
  fs.mkdir(system.data_path, (err) => {
    if (err && err['code'] !== 'EEXIST')
      logger.error(err);
  });

  moment.locale('zh-cn');
  await data.create();
};
