// server/server.js
require('dotenv').config();
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const messageRoutes = require('./routes/messages'); // Import the router

const app = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB connected successfully."))
  .catch(err => console.error("MongoDB connection error:", err));

// --- Use the API Routes ---
app.use('/api/messages', messageRoutes); // Tell Express to use these routes

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});