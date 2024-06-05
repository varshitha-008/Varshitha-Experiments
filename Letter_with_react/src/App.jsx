import React, { useState } from 'react';
import Howler from 'react-howler';
import './App.css';
import envelopeClosed from './assets/envelope-closed.png'; // Add an envelope closed image to your assets
import envelopeOpen from './assets/envelope-open.png'; // Add an envelope open image to your assets
import letterImage from './assets/letter.png'; // Add a letter image to your assets
import backgroundMusic from './assets/background-music.mp3'; // Add a background music file to your assets

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);

  const toggleLetter = () => {
    setIsOpen((prev=>!prev));
    setIsPlaying((prev)=>!prev);
  };

  return (
    <div className="App">
      <div className="envelope" onClick={toggleLetter}>
        <img src={isOpen ? envelopeOpen : envelopeClosed} alt="Envelope" />
      </div>
      {isOpen && (
        <div className="letter">
          <img src={letterImage} alt="Letter" />
          <p>Dear [Friend's Name],</p>
          <p>I'm writing this letter to tell you how much I appreciate our friendship...</p>
          {/* Add more content to the letter here */}
        </div>
      )}
      <Howler
        src={backgroundMusic}
        playing={isPlaying}
        loop={true}
      />
    </div>
  );
}

export default App;
