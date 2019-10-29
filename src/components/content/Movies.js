import React, { useState } from 'react';
import PropTypes from "prop-types";

const Movies = ({
  movie: {
    trackName,
    trackViewUrl,
    country,
    primaryGenreName,
    longDescription,
    artworkUrl100,
    releaseDate
  }
}) => {
  const [showDesc, toggleDesc] = useState(false);

  const img =
    artworkUrl100.substring(0, artworkUrl100.lastIndexOf('/') + 1) +
    '600x600bb.jpg';

  const date = new Date(releaseDate).getFullYear();

  return (
    <div className="card" style={{ width: '100%' }}>
      <img src={img} className="card-img-top" alt="" />
      <div className="card-body">
        <h5 className="card-title">{trackName}</h5>
        <span className="text-monospace">
          {country} {date}
        </span>
        <br />
        <span className=""> Genre: {primaryGenreName}</span>
        <br />
        {showDesc && <p>{longDescription}</p>}
        <button
          onClick={() => toggleDesc(!showDesc)}
          className="btn btn-secondary"
        >
          Show Description
        </button>
        <a href={trackViewUrl} className="btn btn-primary">
          More
        </a>
      </div>
    </div>
  );
};

Movies.propTypes = {
  movie: PropTypes.object.isRequired
};

export default Movies;
