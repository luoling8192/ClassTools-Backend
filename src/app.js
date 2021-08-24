const config = require('./config.json');
const logger = require('./utils/logger');
const bodyParser = require('body-parser');
const retJSON = require('./utils/func/retJSON');
const cors = require('cors');

module.exports = (app) => {
  app.use(bodyParser.urlencoded({extended: true}));
  app.use(cors());

  app.get('/', (req, res) => {
    res.send(`欢迎来到${config['class-name']}API`);
  });

  app.get('/homework', async (req, res) => {
    res.send(await require('./homework').query(req.query));
  });

  app.post('/homework', async (req, res) => {
    res.send(await require('./homework').modify(req.body));
  });

  app.get('/schedule', async (req, res) => {
    res.send(await require("./schedule").query());
  });

  app.get('/gaokao', (req, res) => {
    let date = new Date();
    let gaokao_date = Date.parse(config['gaokao-date']);
    let date_span = gaokao_date - date;
    let ret_span = Math.floor(date_span / (60 * 60 * 24 * 1000));

    res.send(retJSON('/gaokao', 1, {
      date: config['gaokao-date'],
      span: ret_span,
    }));
  });

  app.listen(config.port, () => {
    logger.success(`端口监听在：${config.port}`);
    require('./init')();
  });
};