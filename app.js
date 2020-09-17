// require("dotenv-safe").config();

const createError = require("http-errors");
const express = require("express");
const helmet = require("helmet");
const cookieParser = require("cookie-parser");
const morgan = require("morgan");
const winston = require("./config/winston");

const indexRouter = require("./routes/index");

const app = express();
app.use(helmet());

app.use(morgan("combined", { stream: winston.stream }));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use("/", indexRouter);
app.use("/healthcheck", require("./routes/healthcheck.routes"));

app.use((req, res, next) => {
  next(createError(404));
});

app.use((err, req, res) => {
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  winston.error(
    `${err.status || 500} - ${err.message} - ${req.originalUrl} - ${
      req.method
    } - ${req.ip}`
  );

  res.status(err.status || 500);
  res.render("error");
});

module.exports = app;
