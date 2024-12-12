import React from 'react';
import './items.css';

function DictionaryDisplay() {
  const items = {
    item1: { 
      title: "Embrace New Beginnings", 
      description: "Every morning brings a new opportunity to chase your dreams and embrace life with open arms." 
  },
  item2: { 
      title: "Cherish the Moments", 
      description: "Life is made up of fleeting moments. Pause, appreciate, and treasure the small joys around you." 
  },
  item3: { 
      title: "Learn and Grow", 
      description: "Each challenge in life is an opportunity to grow stronger, wiser, and more compassionate." 
  },
  item4: { 
      title: "Spread Kindness", 
      description: "A simple act of kindness can brighten someone's day and create a ripple of positivity in the world." 
  }
  };

  return (
    <>
    <h1 className='life'>Life Hacks!</h1>
    <div className="dictionary-container">
      {Object.entries(items).map(([key, value]) => (
        <div key={key} className="dictionary-card">
          <h3 className="dictionary-title">{value.title}</h3>
          <p className="dictionary-description">{value.description}</p>
        </div>
      ))}
    </div>
    <>
    
  );
}

export default DictionaryDisplay;
