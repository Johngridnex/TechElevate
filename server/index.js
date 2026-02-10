const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');

// Load env vars
dotenv.config();

// Connect to database
connectDB();

const app = express();

const PORT = process.env.PORT || 5000;

// A simple welcome route
app.get('/api', (req, res) => {
  res.status(200).json({ message: 'Welcome to the TechElevate API!' });
});

app.listen(PORT, () => {
  console.log(`Server is running in ${process.env.NODE_ENV} mode on port ${PORT}`);
});
