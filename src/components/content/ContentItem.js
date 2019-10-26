import React from 'react';

const ContentItem = ({ artist: { artistName } }) => {
  return (
    <div className="card" style={{ width: '15rem' }}>
      <img src="..." className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{artistName}</h5>
        <p className="card-text">Card's content.</p>
        <a href="#" className="btn btn-primary">
          More
        </a>
      </div>
    </div>
  );
};

export default ContentItem;
