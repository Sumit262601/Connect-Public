const express = require('express');
const cors = require('cors');
const connectToMongo = require('./database/db');
const nodemailer = require('nodemailer');
const path = require('path'); // <-- Import path here
require('dotenv').config();

// Initialize the app and set the port
const app = express();
const port = process.env.PORT || 5000;

// Connect to MongoDB
connectToMongo().then(() => {
  console.log('Connected to MongoDB');
}).catch(err => {
  console.error('Failed to connect to MongoDB', err);
});

// Middleware
app.use(cors());
app.use(express.json());

// Upload Images
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// API routes
app.use('/blogs', require('./routes/blog'));

// API endpoint to send email
app.post('/api/send-email', async (req, res) => {
  const { name, email, phone, address, state, pincode } = req.body;

  // Nodemailer configuration
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS
    }
  });

  const mailOptions = {
    from: email,
    to: process.env.EMAIL_USER,
    subject: `Connect Publics! Here is a new user: ${name}`,
    html: `
          <h1>Public connect with us.</h1>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Phone:</strong> ${phone}</p>
          <p><strong>Address:</strong> ${address}</p>
          <p><strong>State:</strong> ${state}</p>
          <p><strong>Pincode:</strong> ${pincode}</p> `
  };

  try {
    const result = await transporter.sendMail(mailOptions);
    console.log('sent successfully:', result.response);
    res.status(200).json({ message: 'Email sent successfully' });
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ message: 'Error sending email', error: error.message });
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
