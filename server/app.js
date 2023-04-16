/*
 * @Copyright: Copyright© 2022 AOMEI
 * @Abstract: 
 * @Date: 2023-03-23 22:20:18
 * @Author: 
 * @LastEditors: Dorr-hlc 1726660621@qq.com
 * @LastEditTime: 2023-04-16 14:39:21
 * @RevisionHistory: 
 */
const createError = require("http-errors");
const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const cors = require("cors");
const backRouter = require("./routes/back/api/api");
const frontRouter = require("./routes/front/api/api");
const { requireToken } = require("./config/tokenConfig");
const app = express();
// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));
app.use(cors());
app.use(requireToken); //放在路由前，以便于对下面的路由api进行token验证
app.use("/back", backRouter);
app.use("/front", frontRouter);
// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

module.exports = app;
