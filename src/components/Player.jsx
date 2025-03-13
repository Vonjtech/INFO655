import { useState } from 'react';
import PropTypes from 'prop-types';

const Song = ({ title }) => <div>{title}</div>;
const Podcast = ({ episodeTitle }) => <div>{episodeTitle}</div>;

Song.propTypes = {
  title: PropTypes.string.isRequired,  // Validate title prop for Song
};

Podcast.propTypes = {
  episodeTitle: PropTypes.string.isRequired,  // Validate episodeTitle prop for Podcast
};

const Player = ({ playlist, setStatus }) => {
  const [currentIndex, setCurrentIndex] = useState(0); // Track the current item index
  const [shuffledItems, setShuffledItems] = useState([...playlist].sort(() => Math.random() - 0.5)); // Shuffle playlist

  const handleDoubleClick = (item) => {
    setStatus(`Playing: ${item.title || item.episodeTitle}`);
  };

  const handleNext = () => {
    const nextIndex = (currentIndex + 1) % shuffledItems.length;
    setCurrentIndex(nextIndex);
    const nextItem = shuffledItems[nextIndex];
    setStatus(`Playing: ${nextItem.title || nextItem.episodeTitle}`);
  };

  const handlePrev = () => {
    const prevIndex = (currentIndex - 1 + shuffledItems.length) % shuffledItems.length;
    setCurrentIndex(prevIndex);
    const prevItem = shuffledItems[prevIndex];
    setStatus(`Playing: ${prevItem.title || prevItem.episodeTitle}`);
  };

  const handlePlayPause = () => {
    setStatus('Playing: ' + (shuffledItems[currentIndex].title || shuffledItems[currentIndex].episodeTitle));
  };

  const handleShuffle = () => {
    // Shuffle the playlist on button click
    const shuffled = [...playlist].sort(() => Math.random() - 0.5);
    setShuffledItems(shuffled); // Update shuffledItems
    setCurrentIndex(0); // Reset the index to the first item
    setStatus(`Playing: ${shuffled[0].title || shuffled[0].episodeTitle}`); // Set status to first item after shuffle
  };

  return (
    <div className="player">
      <div className="playlist">
        {shuffledItems.map((item, index) => (
          <div
            key={index}
            onDoubleClick={() => handleDoubleClick(item)} // Handle double-click event
            style={{ cursor: 'pointer' }}
          >
            {item.title ? (
              <Song title={item.title} />
            ) : (
              <Podcast episodeTitle={item.episodeTitle} />
            )}
          </div>
        ))}
      </div>
      <div className="controls">
        <button onClick={handlePrev}>Prev</button>
        <button onClick={handlePlayPause}>Play/Pause</button>
        <button onClick={handleNext}>Next</button>
        <button onClick={handleShuffle}>Shuffle</button> {/* Shuffle button */}
      </div>
    </div>
  );
};

Player.propTypes = {
  playlist: PropTypes.array.isRequired,
  setStatus: PropTypes.func.isRequired,
};

export default Player;
