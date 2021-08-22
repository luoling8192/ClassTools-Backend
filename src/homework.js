const process = require("./utils/processData");
const logger = require("./utils/logger");
const retJSON = require("./utils/func/retJSON");

module.exports = {
  query: async (query) => {
    if (Object.keys(query).length === 0) {
      logger.error("Homework: 请输入查询条件！");
      return retJSON("/homework", 0, {}, "Homework: 请输入查询条件！");
    }

    let data = await process.load();
    let ret = {};

    for (let q in query) {
      ret[q] = data.homework[q];
    }

    return retJSON("/homework", 1, ret, "");
  },
  modify: async (body) => {
    const ret = await process.write({homework: {...body}});
    return retJSON("/homework", 1, ret, "");
  }
}
