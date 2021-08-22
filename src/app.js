const config = require("./config.json");
const logger = require("./src/utils/logger");
const bodyParser = require("body-parser");

module.exports = (app) => {
  app.use(bodyParser.urlencoded({ extended: true }));

  app.get("/", (req, res) => {
    res.send(`欢迎来到${config["class-name"]}API`);
  })

  app.get("/homework", async (req, res) => {
    res.send(await require("./homework").query(req.query));
  })

  app.post("/homework", async (req, res) => {
    res.send(await require("./homework").modify(req.body));
  })

  app.listen(config.port, () => {
    logger.success(`端口监听在：${config.port}`);
    require("./init")();
  })
}