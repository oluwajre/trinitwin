// require('dotenv').config();

const nodemailer = require('nodemailer');

exports.handler = async (event, context) => {
    // Ensure the request method is POST
    if (event.httpMethod !== 'POST') {
        return {
            statusCode: 405,
            body: JSON.stringify({ message: 'Only POST requests are allowed' }),
        };
    }

    const { name, email, message } = JSON.parse(event.body);

    try {
        // Create a transporter for sending emails
        const transporter = nodemailer.createTransport({
            service: 'gmail', // Replace with your email service (e.g., Gmail, SendGrid)
            auth: {
                user: process.env.EMAIL_USER, // Store email in environment variables
                pass: process.env.EMAIL_PASS, // Store password in environment variables
            },
        });

        // Set up email options
        const mailOptions = {
            from: email,
            to: process.env.EMAIL_USER, // The recipient email address
            subject: `Message from ${name}`,
            text: message,
        };

        // Send the email
        await transporter.sendMail(mailOptions);

        return {
            statusCode: 200,
            body: JSON.stringify({ success: true, message: 'Email sent successfully' }),
        };
    } catch (error) {
        console.error('Error sending email:', error);
        return {
            statusCode: 500,
            body: JSON.stringify({ success: false, message: 'Failed to send email' }),
        };
    }
};
