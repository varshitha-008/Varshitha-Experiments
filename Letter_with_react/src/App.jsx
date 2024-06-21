import React, { useState } from 'react';
import Howler from 'react-howler';
import './App.css';
import envelopeClosed from './assets/envelope-closed.png'; 
import envelopeOpen from './assets/envelope-open.png'; 
// import letterImage from './assets/letter.png'; 
import backgroundMusic from './assets/background-music.mp3'; 
import letter from './assets/letter.jpeg'
function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);

  const toggleLetter = () => {
    setIsOpen((prev=>!prev));
    setIsPlaying((prev)=>!prev);
  };

  return (
    <div  className="App">
      <div  className="envelope" onClick={toggleLetter}>
        <img src={isOpen ? envelopeOpen : envelopeClosed} alt="Envelope" />
      </div>
      {isOpen && (
        <div className="letter">
          <img src={letter} alt="Letter" />
          <p > hey sumi , </p>
          <p>Happiest birthday sannapapa, I am  missing you like hell😭, I wish I could see your face every day. </p>
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
