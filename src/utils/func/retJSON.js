const logger = require("../logger");

module.exports = (router, success, data, err = "") => {
  let json = {
    router: router,
    success: success,
    data: data,
    err: err
  };

  logger.json(json);
  return JSON.stringify(json);
}
