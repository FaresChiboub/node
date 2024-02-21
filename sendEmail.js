const nodemailer = require("nodemailer");
const generatePassword = require("generate-password");

// Generate a random password
const password = generatePassword.generate({
  length: 12,
  numbers: true,
  symbols: true,
  uppercase: true,
  lowercase: true,
});

console.log("Generated Password:", password); // Log the generated password

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "fareschiboub10@gmail.com",
    pass: password,
  },
  debug: true, // Enable debug logging
});

const mailOptions = {
  from: "fareschiboub10@gmail.com",
  to: "fareschiboub10@gmail.com",
  subject: "Test Email",
  text: "This is a test email sent from Node.js using Nodemailer.",
};

transporter.sendMail(mailOptions, (error, info) => {
  if (error) {
    console.log(error);
  } else {
    console.log("Email sent: " + info.response);
  }
});
