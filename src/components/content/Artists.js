import React from 'react';

const Artists = ({
  artist: { artistName, primaryGenreName, artistType, artistLinkUrl }
}) => {
  return (
    <div className="card" style={{ width: '15rem' }}>
      <img src="..." className="card-img-top" alt="" />
      <div className="card-body">
        <h5 className="card-title">{artistName}</h5>

        <p className="text-monospace">{artistType}</p>
        <p> Genre: {primaryGenreName}</p>
        <a href={artistLinkUrl} className="btn btn-primary">
          More
        </a>
      </div>
    </div>
  );
};

export default Artists;
