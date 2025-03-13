import { useState, useEffect } from 'react';
import Song from './Song';
import Podcast from './Podcast';

const Playlist = () => {
  const [playlistData, setPlaylistData] = useState([]); // State to store fetched playlist data
  const [shuffledItems, setShuffledItems] = useState([]); // State to store shuffled playlist

  // Fetch data from JSON server on component mount
  useEffect(() => {
    const fetchPlaylist = async () => {
      try {
        // Fetch data from the JSON server running on port 3001
        const response = await fetch('http://localhost:3001/audio'); // URL pointing to the JSON server
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json(); // Parse the JSON data
        setPlaylistData(data); // Update state with fetched data
      } catch (error) {
        console.error('Error fetching playlist data:', error);
      }
    };

    fetchPlaylist();
  }, []);

  // Shuffle the playlist only once and store the result in localStorage
  useEffect(() => {
    if (playlistData.length > 0) {
      // Check if we have a saved shuffled playlist in localStorage
      const savedShuffle = localStorage.getItem('shuffledPlaylist');
      if (savedShuffle) {
        // If it exists, set the shuffledItems from localStorage
        setShuffledItems(JSON.parse(savedShuffle));
      } else {
        // If not, shuffle the playlist and store it in localStorage
        const shuffled = [...playlistData].sort(() => Math.random() - 0.5);
        setShuffledItems(shuffled);
        localStorage.setItem('shuffledPlaylist', JSON.stringify(shuffled)); // Store the shuffled playlist in localStorage
      }
    }
  }, [playlistData]);

  return (
    <div className="playlist">
      <h2>🎵 Playlist </h2>
      {shuffledItems.length > 0 ? (
        shuffledItems.map((item, index) =>
          item.type === 'song' ? (
            <Song key={index} {...item} />
          ) : (
            <Podcast key={index} {...item} />
          )
        )
      ) : (
        <p>Loading playlist...</p> // Display loading message while data is being fetched
      )}
    </div>
  );
};

export default Playlist;
