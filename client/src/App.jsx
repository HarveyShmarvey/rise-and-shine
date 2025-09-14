// client/src/App.jsx
import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');

  // Function to fetch all messages
  const fetchMessages = () => {
    fetch('http://localhost:5000/api/messages')
      .then((res) => res.json())
      .then((data) => setMessages(data))
      .catch((err) => console.error("Failed to fetch messages:", err));
  };

  // Fetch messages on initial component load
  useEffect(() => {
    fetchMessages();
  }, []);

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent page reload
    fetch('http://localhost:5000/api/messages', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ text: newMessage }),
    })
    .then(() => {
      setNewMessage(''); // Clear the input box
      fetchMessages(); // Refresh the message list
    })
    .catch((err) => console.error("Failed to post message:", err));
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Message Board</h1>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            placeholder="Write a new message..."
          />
          <button type="submit">Post</button>
        </form>
        <div className="message-list">
          {messages.map((msg) => (
            <p key={msg._id}>{msg.text}</p>
          ))}
        </div>
      </header>
    </div>
  );
}

export default App;