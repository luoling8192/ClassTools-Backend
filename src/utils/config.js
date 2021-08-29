const fs = require('fs');
const path = require('path');

module.exports = () => {
  let json;

  try {
    json = JSON.parse(fs.readFileSync(path.join(process.cwd(), 'config.json'), 'utf-8'));
  } catch (e) {
    json = null;
  }

  return json ? json : require('../config.json');
};
