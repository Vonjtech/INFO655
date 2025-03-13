import { useState } from "react";
import Playlist from "./components/Playlist";
import Player from "./components/Player";  // Import the Player component
import audioData from "../audio.json"; // Only use the audio.json import
import "./styles/styles.css"; // Import external stylesheet



function App() {
  const [status, setStatus] = useState(""); // State for play status

  return (
    <div className="App">
      <header className="header">
        <h1>📻 Music & Podcast Playlist</h1>
        <Playlist playlist={audioData} /> {/* Use audioData here */}
      </header>
      
      <Player playlist={audioData} setStatus={setStatus} /> {/* Pass audioData to Player component */}
      
      <footer className="footer">
        <p className="footer-text">Footer content here</p>
        {status && <p>Status: {status}</p>} {/* Display current status */}
      </footer>
    </div>
  );
}

export default App;
