const nodemailer = require('nodemailer');
require('dotenv').config();

const smtpConfig = nodemailer.createTransport({
  service: 'gmail',
  port: 46,
  secure: true,
  auth: {
      user: process.env.EMAIL_ADDRESS,
      pass: process.env.EMAIL_PASSWORD
  }
});

const message = {
  from: process.env.EMAIL_ADDRESS,
  to: process.env.EMAIL_ADDRESS,
  subject: 'テストです',
  text: 'サンプルメール送ってみたよ',
}

smtpConfig.sendMail(message, (error, data) => {
  if(error) console.log(error)
  console.log(data);
})
