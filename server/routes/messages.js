// server/routes/messages.js
const express = require('express');
const router = express.Router();
const {
  getAllMessages,
  createMessage,
  deleteMessage,
} = require('../controllers/messageController');

// GET all messages
router.get('/', getAllMessages);

// POST a new message
router.post('/', createMessage);

// DELETE a message
router.delete('/:id', deleteMessage);

module.exports = router;