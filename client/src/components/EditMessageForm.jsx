// client/src/components/EditMessageForm.jsx
import React, { useState } from 'react';

const EditMessageForm = ({ message, onUpdate, onCancel }) => {
  const [text, setText] = useState(message.text);
  const [status, setStatus] = useState(message.status);

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch(`http://localhost:5000/api/messages/${message._id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ text, status }),
    })
    .then(() => onUpdate()); // Call the onUpdate function to refresh the list and exit edit mode
  };

  return (
    <form onSubmit={handleSubmit} className="edit-form">
      <input type="text" value={text} onChange={(e) => setText(e.target.value)} />
      <select value={status} onChange={(e) => setStatus(e.target.value)}>
        <option value="Normal">Normal</option>
        <option value="Important">Important</option>
      </select>
      <button type="submit">Save</button>
      <button type="button" onClick={onCancel}>Cancel</button>
    </form>
  );
};

export default EditMessageForm;