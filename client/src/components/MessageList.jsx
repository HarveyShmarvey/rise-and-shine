// client/src/components/MessageList.jsx
import React from 'react';

const MessageList = ({ messages, onMessageDeleted }) => {
  const handleDelete = (id) => {
    fetch(`http://localhost:5000/api/messages/${id}`, {
      method: 'DELETE',
    })
    .then(() => {
      onMessageDeleted(); // Call the function passed from the parent
    })
    .catch((err) => console.error("Failed to delete message:", err));
  };

  return (
    <div className="message-list">
      {messages.map((msg) => (
        <div key={msg._id} className="message-item">
          <span>{msg.text}</span>
          <button onClick={() => handleDelete(msg._id)} className="delete-btn">
            X
          </button>
        </div>
      ))}
    </div>
  );
};

export default MessageList;