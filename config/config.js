const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  //   host: "smtp.mailtrap.io",
  service: "Gmail",
  port: 2525,
  auth: {
    user: process.env.EmailUser,
    pass: process.env.EmailPass,
  },
});

module.exports = transporter;
