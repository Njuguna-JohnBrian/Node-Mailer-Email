const express = require("express");
require("dotenv").config();
const nodemailer = require("nodemailer");
const emailRouter = require("./route/email-router");

const App = express();

App.use("/email", emailRouter);

App.listen(3000, () => {
  console.log("App running on port 3000");
});
