const express = require("express");
const config = require("./config.json");
const logger = require("./src/utils/logger");
const bodyParser = require('body-parser');

let app = express();
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send(`欢迎来到${config["class-name"]}API`);
})

app.get("/homework", async (req, res) => {
  res.send(await require("./src/homework").query(req.query));
})

app.post("/homework", async (req, res) => {
  res.send(await require("./src/homework").modify(req.body));
})

app.listen(config.port, () => {
  logger.success(`端口监听在：${config.port}`);
  require("./src/init")();
})
