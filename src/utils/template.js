const config = require('../config.json');
const system = require('./system');

module.exports = {
  homework: {
    ch: '',
    ma: '',
    en: '',
    phy: '',
    chem: '',
    bio: '',
    ban: '',
  },
  schedule: [config.schedule[system.today_day()]],
};
