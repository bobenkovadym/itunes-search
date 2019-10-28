import React from 'react';

const Tracks = ({
  track: {
    artistName,
    primaryGenreName,
    trackName,
    artworkUrl100,
    trackViewUrl,
    previewUrl
  }
}) => {
  const img =
    artworkUrl100.substring(0, artworkUrl100.lastIndexOf('/') + 1) +
    '600x600bb.jpg';

  return (
    <div className="card" style={{ width: '100%' }}>
      <img src={img} className="card-img-top" alt="" />
      <div className="card-body">
        <h5 className="card-title">{trackName}</h5>
        <audio controls src={previewUrl} name="media" type="audio/x-m4a">
          Your browser does not support the
          <code>audio</code> element.
        </audio>
        <hr />
        <span className="font-weight-bold">{artistName}</span>
        <br />
        <p className=""> Genre: {primaryGenreName}</p>
        <a href={trackViewUrl} className="btn btn-primary">
          Show album
        </a>
      </div>
    </div>
  );
};

export default Tracks;
