// Song.jsx
import "react";

// eslint-disable-next-line react/prop-types
const Song = ({ title, artist, year }) => {
  return (
    <div className="song">
      <h3>🎶 {title}</h3>
      <p>
        <strong>Artist:</strong> {artist} | <strong>Year:</strong> {year}
      </p>
    </div>
  );
};

export default Song;
