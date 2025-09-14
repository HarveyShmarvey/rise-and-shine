// server/models/message.model.js
const mongoose = require('mongoose');

const MessageSchema = new mongoose.Schema({
  text: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  // --- NEW ---
  status: {
    type: String,
    enum: ['Normal', 'Important'], // Only allows these values
    default: 'Normal',
  },
  // --- END NEW ---
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('Message', MessageSchema);