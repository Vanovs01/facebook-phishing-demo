// netlify/functions/sendEmail.js

const sgMail = require('@sendgrid/mail');

// Set SendGrid API key from environment variable
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

exports.handler = async (event, context) => {
  // Prepare the email message
  const msg = {
    to: 'mwananchihuslerloans@gmail.com',        // <-- Replace with your email address
    from: 'noreply@yourdomain.com',       // <-- This must be a verified sender in SendGrid
    subject: 'Site Visit Notification',
    text: 'Someone visited your site!',
    html: '<strong>Alert:</strong> A visitor has just accessed your site.',
  };

  try {
    await sgMail.send(msg);
    return {
      statusCode: 200,
      body: JSON.stringify({ message: 'Notification email sent' }),
    };
  } catch (error) {
    console.error('Error sending email:', error);
    return {
      statusCode: 500,
      body: JSON.stringify({ message: 'Failed to send email' }),
    };
  }
};
