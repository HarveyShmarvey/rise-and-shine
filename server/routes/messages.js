// server/routes/messages.js
const express = require('express');
const router = express.Router();
const {
  getAllMessages,
  createMessage,
  deleteMessage,
  updateMessage,
} = require('../controllers/messageController');

// GET all messages
router.get('/', getAllMessages);

// POST a new message
router.post('/', createMessage);

// DELETE a message
router.delete('/:id', deleteMessage);

// PUT (Update) a message
router.put('/:id', updateMessage);

module.exports = router;