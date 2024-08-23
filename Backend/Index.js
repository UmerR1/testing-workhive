const express = require("express");
const nodemailer = require("nodemailer");
const bodyParser = require("body-parser");
const cors = require("cors");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());

app.post("/send-email", (req, res) => {
  const { name, email, mobile, message, category, quantity, date, time } =
    req.body;

  const transporter = nodemailer.createTransport({
    host: process.env.EMAIL_HOST,
    port: process.env.EMAIL_PORT,
    secure: true, // Use TLS
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
    tls: {
      rejectUnauthorized: false,
    },
  });

  const mailOptions = {
    from: email,
    to: process.env.RECIPIENT_EMAIL,
    subject: `New message from ${name}`,
    text:
      `You have received a new message from \n\n` +
      `Name: ${name} \n` +
      `Email: ${email}\n` +
      `Mobile: ${mobile}\n` +
      `Message: ${message}\n` +
      `Category: ${category}\n` +
      `Quantity: ${quantity}\n` +
      `Date: ${date}\n` +
      `Time: ${time}`,
  };

  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log("🚀 ~ error:", error);
      return res.status(500).send(error.toString());
    } else {
      console.log("🚀 ~  info.response:", info.response);
      res.status(200).send("Email sent: " + info.response);
    }
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
