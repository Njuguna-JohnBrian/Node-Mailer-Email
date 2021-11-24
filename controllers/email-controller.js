const transporter = require("../config/config");
const eventDetails = require("../calendar/calendar.ical");
exports.sendEmail = async (req, res) => {
  const info = await transporter.sendMail({
    to: "njugunajohnbrian@gmail.com",
    cc: " caleb.baraka@thejitu.com, lucky.tsuma@thejitu.com, njugunajb96@gmail.com, evans.kibet@thejitu.com",
    from: {
      name: "John Brian ",
      address: "njugunajb96@gmail.com",
    },
    subject: "MEET AND GREET",
    html: `
    <div>
          <h4>Meet and Greet</h4>
          <p>Why not take a break after a long day of looking at the screen?</p>
          <br />
          <p>I know your concur with me and that is why I present to you this event</p>
          <br />
          <p>Don't Miss!!</p>
          <br />
          <br />
          <br />
          <p>Please Ignore, It's a test email on the Nodemailer assignment</p>
          <br />
          <img src="cid:uniqueID" alt"alt"/>
    <div/>`,
    attachments: [
      {
        filename: "meetgreet.png",
        path: "https://tinyurl.com/3xkyfcby",
        cid: "uniqueID",
      },
    ],
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
