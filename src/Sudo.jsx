import React, { useState } from 'react';
import './Sudo.css';

function Sudoo() {
  const [response, setResponse] = useState("");

  // Define moods and their corresponding responses
  const moods = {
    happy: "That's great to hear! Keep smiling 😊",
    sad: "I'm here for you. Things will get better 🌈",
    excited: "Awesome! What's got you so thrilled? 🎉",
    tired: "Take a break and recharge. You deserve it 💤",
    curious: "Curiosity is the key to discovery! Keep exploring 🤔"
  };

  return (
    <div className="button-container">
      <h1>What's up?</h1>
      <div className="button-group">
        {Object.entries(moods).map(([mood, text]) => (
          <button 
            key={mood} 
            className={`btn btn-${mood}`} 
            onClick={() => setResponse(text)}
          >
            {mood.charAt(0).toUpperCase() + mood.slice(1)}
          </button>
        ))}
      </div>
      {response && <p className="response-text">{response}</p>}
    </div>
  );
}

export default Sudoo;
