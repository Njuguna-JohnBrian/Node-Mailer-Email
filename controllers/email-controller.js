const transporter = require("../config/config");
const eventDetails = require("../calendar/calendar.ical");
exports.sendEmail = async (req, res) => {
  const info = await transporter.sendMail({
    to: "john.brian@thejitu.com, njugunajohnbrian@gmail.com, caleb.baraka@thejitu.com, lucky.tsuma@thejitu.com, njugunajb96@gmail.com",
    from: {
      name: "John Brian ",
      address: "njugunajb96@gmail.com",
    },
    subject: "Testing Nodemailer",
    // text: "Good Morning JB, This is just but a test email",
    // // html: `<html><body><h4>ATTENTION!!</h4><p>INVITATION</p></body></html>`,
    // // attachments: [
    // //   {
    // //     filename: "hello.txt",
    // //     content: "Hey there",
    // //   },
    // // ],
    message: {
      headers: {
        "x-invite": {
          prepared: true,
        },
      },
    },
    icalEvent: {
      filename: "invite.ics",
      method: "REQUEST",
      content: eventDetails,
    },
  });
  res.send({
    message: `Email Sent Successfully, Check Your Inbox`,
  });
};
