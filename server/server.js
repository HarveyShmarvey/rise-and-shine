// server/server.js
const express = require('express');
const cors = require('cors');

const app = express();
const port = 5000; // Choose a port for your backend

app.use(cors()); // Enable CORS for all routes

// Define a simple route
app.get('/api/message', (req, res) => {
  res.json({ message: 'Hello from the backend! 👋' });
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});