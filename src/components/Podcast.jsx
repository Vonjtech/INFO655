import "react";

// eslint-disable-next-line react/prop-types
const Podcast = ({ season, episode, episodeTitle }) => {
  return (
    <div className="podcast">
      <h3>🎤 {episodeTitle}</h3>
      <p>
        {season !== undefined
          ? `Season ${season}, Episode ${episode}`
          : `Episode ${episode}`}
      </p>
    </div>
  );
};

export default Podcast;
