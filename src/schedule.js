const process = require('./utils/processData');
const retJSON = require('./utils/func/retJSON');

module.exports = {
  query: async () => {
    let data = await process.load();
    let ret = data.schedule;

    return retJSON("/schedule", 1, ret);
  },
};