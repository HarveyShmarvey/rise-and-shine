// server/controllers/messageController.js
const Message = require('../models/message.model');

// Get all messages
const getAllMessages = async (req, res) => {
  try {
    const messages = await Message.find().sort({ createdAt: -1 });
    res.json(messages);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Create a new message
const createMessage = async (req, res) => {
  const message = new Message({ text: req.body.text });
  try {
    const newMessage = await message.save();
    res.status(201).json(newMessage);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Delete a message
const deleteMessage = async (req, res) => {
  try {
    const message = await Message.findByIdAndDelete(req.params.id);
    if (!message) return res.status(404).json({ message: 'Message not found' });
    res.json({ message: 'Message deleted successfully' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Update a message
const updateMessage = async (req, res) => {
  try {
    const { text, status } = req.body;
    const updatedMessage = await Message.findByIdAndUpdate(
      req.params.id,
      { text, status },
      { new: true, runValidators: true } // Options: return the new version, run schema validators
    );
    if (!updatedMessage) return res.status(404).json({ message: 'Message not found' });
    res.json(updatedMessage);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

module.exports = {
  getAllMessages,
  createMessage,
  deleteMessage,
  updateMessage,
};