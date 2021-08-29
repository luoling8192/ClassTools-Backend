const config = require('./config.js')();
const system = require('./system');

module.exports = {
  homework: {
    ch: '',
    ma: '',
    en: '',
    phy: '',
    chem: '',
    bio: '',
    pol: '', // 政治
    his: '', // 历史
    geo: '', // 地理
    other: '',
    ban: '',
  },
  schedule: [config.schedule[system.today_day()]],
};
