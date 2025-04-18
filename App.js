
import React, { useState } from 'react';

function App() {
  const [messages, setMessages] = useState([
    { id: 1, text: "Imate li broj 40 u crnoj boji?", time: "12:41", platform: "Facebook" },
  ]);

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial' }}>
      <h1>AI Inbox Asistent</h1>
      <ul>
        {messages.map((msg) => (
          <li key={msg.id}>
            <strong>{msg.platform}:</strong> {msg.text} <em>({msg.time})</em>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
