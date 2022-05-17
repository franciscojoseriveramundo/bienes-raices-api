require('dotenv').config();
console.log(process.env.SENDGRID_API_KEY);

const sgMail = require('@sendgrid/mail')
sgMail.setApiKey(process.env.SENDGRID_API_KEY)
const msg = {
  to: 'pacoriveram2017@gmail.com', // Change to your recipient
  from: 'pacoriveram2017@gmail.com', // Change to your verified sender
  subject: 'Creación de nueva cuenta de usuario',
  text: 'and easy to do anywhere, even with Node.js',
  html: '<strong>and easy to do anywhere, even with Node.js</strong>',
}
sgMail
  .send(msg)
  .then(() => {
    console.log('Email sent')
  })
  .catch((error) => {
    console.error(error.response.body)
  })