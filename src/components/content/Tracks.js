import React from 'react';

const Tracks = ({
  track: { artistName, primaryGenreName, artistType, artistLinkUrl }
}) => {
  return (
    <div className="card" style={{ width: '15rem' }}>
      <img src="..." className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{artistName}</h5>

        <p className="text-monospace text-center">{artistType}</p>
        <p className=""> Genre: {primaryGenreName}</p>
        <a href={artistLinkUrl} className="btn btn-primary">
          More
        </a>
      </div>
    </div>
  );
};

export default Tracks;
