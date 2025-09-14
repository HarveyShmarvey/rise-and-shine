// client/src/App.jsx
import React, { useState, useEffect } from 'react';
import MessageForm from './components/MessageForm'; // Import
import MessageList from './components/MessageList'; // Import
import './App.css';

function App() {
  const [messages, setMessages] = useState([]);
  const [isLoading, setIsLoading] = useState(false); // New state for loading
  const [error, setError] = useState(null);       // New state for errors

  const fetchMessages = () => {
    setIsLoading(true); // Start loading
    setError(null);     // Clear previous errors
    fetch('http://localhost:5000/api/messages')
      .then((res) => {
        if (!res.ok) {
          throw new Error('Network response was not ok');
        }
        return res.json();
      })
      .then((data) => setMessages(data))
      .catch((err) => setError(err.message)) // Set error state on failure
      .finally(() => setIsLoading(false));  // Stop loading, regardless of success or failure
  };

  useEffect(() => {
    fetchMessages();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Message Board</h1>
        <MessageForm onMessagePosted={fetchMessages} />
        
        {isLoading && <p>Loading messages...</p>}
        {error && <p style={{ color: 'red' }}>Error: {error}</p>}
        
        {!isLoading && !error && (
          <MessageList messages={messages} onMessageDeleted={fetchMessages} />
        )}
      </header>
    </div>
  );
}

export default App;