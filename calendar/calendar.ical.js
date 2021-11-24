const ical = require("ical-generator");
const moment = require('moment')

const content = ical({
  domain: "google.com",
  method: "REQUEST",
  prodId: "//Google Inc//Google Calendar 70.9054//EN",
  timezone: "UTC/GMT +3 hours",
  scale: "GREGORIAN",
  events: [
    {
      start: moment(),
      status: "CONFIRMED",
      end: moment().add(6, "hour"),
      summary: "Meet and Greet",
      transparency: "OPAQUE",
      organizer: {
        name: "John Brian",
        email: "njugunajb96@gmail.com",
        mailto: "njugunajohnbrian@gmail.com",
      },
      location: "Reels Gardens",
      attendees: [
        {
          email: "njugunajb96@gmail.com",
          name: "John Brian",
          status: "NEEDS-ACTION",
          rsvp: true,
          type: "INDIVIDUAL",
          role: "REQ-PARTICIPANT",
        },
        {
          email: "njugunajohnbrian@gmail.com",
          name: "John Brian Njuguna",
          status: "NEEDS-ACTION",
          rsvp:true,
          type: "INDIVIDUAL",
          role: "REQ-PARTICIPANT",
        },
        {
            email: "caleb.baraka@thejitu.com",
            name: "Caleb Baraka",
            status: "NEEDS-ACTION",
            rsvp:true,
            type: "INDIVIDUAL",
            role: "REQ-PARTICIPANT",
          },
          {
            email: "lucky.tsuma@thejitu.com",
            name: "Lucky Tsuma",
            status: "NEEDS-ACTION",
            rsvp:true,
            type: "INDIVIDUAL",
            role: "REQ-PARTICIPANT",
          },
      ],
    },
  ],
}).toString();

module.exports = content;
