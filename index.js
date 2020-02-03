const config = require("config");
const helmet = require("helmet");
const debug = require("debug")("app:startup");
const morgan = require("morgan");
const Joi = require("@hapi/joi");
const logger = require("./middleware/logger");
const course = require("./router/course");
const home = require("./router/home");
const express = require("express");
const app = express();

app.set("view engine", "pug");
app.set("views", "./views");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
app.use(helmet());

app.use("/api/course", course);
app.use("/", home);

//Configuration

console.log("App server " + config.get("name"));
console.log("Mail server " + config.get("mail.host"));
console.log("Password server " + config.get("mail.password"));

//setting environment
if (app.get("env") === "development") {
  app.use(morgan("tiny"));
  debug("morgan enabled..."); //console.log
}

app.use(logger);

//GET

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`App listening on port ${port}`));
