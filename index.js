const express = require("express");
require("dotenv").config();
const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: process.env.EmailUser,
    pass: process.env.EmailPass,
  },
});
const App = express();

App.post("/email", async (req, res) => {
  const info = await transporter.sendMail({
    to: "targetemail@gmail.com",
    from: "fromemail@gmail.com",
    subject: "Testing Nodemailer",
    text: "Good Morning JB, This is just but a test email",
  });
  res.send({
    message: `Email Sent Successfully, Check Your Inbox`,
  });
});

App.listen(3000, () => {
  console.log("App running on port 3000");
});
