const express = require('express');
const app = express();

const PORT = process.env.PORT || 5000;

// A simple welcome route
app.get('/api', (req, res) => {
  res.status(200).json({ message: 'Welcome to the TechElevate API!' });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
