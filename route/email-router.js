const express = require("express");
const { sendEmail } = require("../controllers/email-controller");

const router = express.Router();
router.route("/").post(sendEmail);

module.exports = router;
