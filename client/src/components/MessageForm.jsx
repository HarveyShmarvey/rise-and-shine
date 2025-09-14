// client/src/components/MessageForm.jsx
import React, { useState } from 'react';

const MessageForm = ({ onMessagePosted }) => {
  const [newMessage, setNewMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch('http://localhost:5000/api/messages', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ text: newMessage }),
    })
    .then(() => {
      setNewMessage('');
      onMessagePosted(); // Call the function passed from the parent
    })
    .catch((err) => console.error("Failed to post message:", err));
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={newMessage}
        onChange={(e) => setNewMessage(e.target.value)}
        placeholder="Write a new message..."
      />
      <button type="submit">Post</button>
    </form>
  );
};

export default MessageForm;