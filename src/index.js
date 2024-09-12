const express = require("express");
const sequelize = require("./config/sequelize");
const model = require("./models");
const router = require("./routes");

const app = express();
app.use(express.json());

sequelize
  .authenticate()
  .then(() => {
    console.log("DB connected");
  })
  .catch((err) => console.log(err));

sequelize.sync();

app.use(router);

app.listen(9000, () => {
  console.log(9000);
});
