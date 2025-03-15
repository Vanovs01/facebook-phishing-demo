const { Resend } = require('resend');

exports.handler = async (event, context) => {
    const resend = new Resend(process.env.RESEND_API_KEY); // Secure API Key

    try {
        const data = await resend.emails.send({
            from: 'noreply@yourdomain.com', // Must be verified on Resend
            to: 'mwananchihuslerloans@gmail.com',
            subject: 'Site Visit Notification',
            html: '<strong>Alert:</strong> A visitor has just accessed your site.'
        });

        return {
            statusCode: 200,
            body: JSON.stringify({ message: 'Email Sent Successfully!', data }),
        };
    } catch (error) {
        console.error('Error:', error);
        return {
            statusCode: 500,
            body: JSON.stringify({ message: 'Failed to send email', error }),
        };
    }
};
