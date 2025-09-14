// client/src/App.jsx
import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [message, setMessage] = useState('');

  useEffect(() => {
    // Fetch the message from our backend API
    fetch('http://localhost:5000/api/message')
      .then((res) => res.json())
      .then((data) => setMessage(data.message))
      .catch((err) => console.error("Failed to fetch message:", err));
  }, []); // The empty array ensures this effect runs only once

  return (
    <div className="App">
      <header className="App-header">
        <h1>{message ? message : 'Loading...'}</h1>
      </header>
    </div>
  );
}

export default App;