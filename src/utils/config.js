const fs = require('fs');
const path = require('path');

module.exports = () => {
  let json;

  try {
    json = JSON.parse(fs.readFileSync(path.join(process.cwd(), 'config.json'), 'utf-8'));
    console.log(process.cwd().toString())
  } catch (e) {
    json = {};
  }

  return json ? json : require('../config.json');
};
