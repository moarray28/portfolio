const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
require('dotenv').config();
const cors = require('cors');

const app = express();
const port = 3000; // Use the port from environment variables if available

app.use(cors({
  origin: process.env.VITE_FRONTEND_URL || '*', // Fallback to '*' if not defined
  credentials: true
}));

app.use(bodyParser.json());

// Endpoint to handle form submissions
app.post('/api/contact', async (req, res) => {
  const { name, email, message } = req.body;

  // Set up Nodemailer transport
  const transporter = nodemailer.createTransport({
    service: 'gmail', // or any other email service
    auth: {
      user: process.env.VITE_EMAIL,
      pass: process.env.VITE_EMAIL_PASSWORD // Google App password
    }
  });

  // Set up email data
  const mailOptions = {
    from: email,
    to: process.env.VITE_EMAIL,
    subject: `Contact form submission from ${name}`,
    text: message,
    html: `<p>From: ${name} (${email})</p><p>${message}</p>`
  };

  try {
    // Send email
    await transporter.sendMail(mailOptions);
    res.status(200).json({ message: 'Message sent successfully' });
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ message: 'Failed to send message' });
  }
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
