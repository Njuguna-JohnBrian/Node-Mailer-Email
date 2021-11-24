const transporter = require("../config/config");
exports.sendEmail = async (req, res) => {
  const info = await transporter.sendMail({
    to: "njugunajohnbrian@gmail.com",
    from: {
      name: "John Brian ",
      address: "njugunajb96@gmail.com",
    },
    subject: "Testing Nodemailer",
    text: "Good Morning JB, This is just but a test email",
    html: `<html><body><h4>ATTENTION!!</h4><p>This is the final warning</p></body></html>`,
    attachments: [
      {
        filename: "hello.txt",
        content: "Hey there",
      },
    ],
  });
  res.send({
    message: `Email Sent Successfully, Check Your Inbox`,
  });
};


