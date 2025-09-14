// client/src/components/MessageList.jsx
import React, { useState } from 'react';
import EditMessageForm from './EditMessageForm'; // Import the new component

const MessageList = ({ messages, onMessageDeleted, onMessageUpdated }) => {
  const [editingId, setEditingId] = useState(null); // Track which message is being edited

  const handleDelete = (id) => {
    fetch(`http://localhost:5000/api/messages/${id}`, {
      method: 'DELETE',
    }).then(() => onMessageDeleted());
  };

  const handleUpdate = () => {
    setEditingId(null); // Exit edit mode
    onMessageUpdated(); // Refresh the list
  };

  return (
    <div className="message-list">
      {messages.map((msg) => (
        <div key={msg._id} className="message-item">
          {editingId === msg._id ? (
            // If we're editing this message, show the form
            <EditMessageForm message={msg} onUpdate={handleUpdate} onCancel={() => setEditingId(null)} />
          ) : (
            // Otherwise, show the message text and buttons
            <>
              <span className={`status-${msg.status}`}>{msg.text} ({msg.status})</span>
              <div>
                <button onClick={() => setEditingId(msg._id)}>Edit</button>
                <button onClick={() => handleDelete(msg._id)} className="delete-btn">X</button>
              </div>
            </>
          )}
        </div>
      ))}
    </div>
  );
};

export default MessageList;