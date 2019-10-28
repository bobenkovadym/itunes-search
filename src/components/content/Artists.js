import React, { useEffect, useState } from 'react';
import ogs from 'open-graph-scraper';
import not_found from './not_found.png';

const Artists = ({
  artist: { artistName, primaryGenreName, artistType, artistLinkUrl }
}) => {
  const [img, setImage] = useState('');

  useEffect(() => {
    const options = {
      url: artistLinkUrl,
      encoding: 'utf-8',
      allMedia: true
    };

    ogs(options, (err, res) => {
      if (err) {
        console.log(err);
      } else {
        const imgArray = res.data.ogImage;
        if (imgArray.length !== 0) {
          const img =
            imgArray[0].url.substring(0, imgArray[0].url.lastIndexOf('/') + 1) +
            '600x600bb.jpg';
          setImage(img);
        } else {
          setImage(not_found);
        }
      }
    });
  });

  return (
    <div className="card" style={{ width: '100%' }}>
      <img src={img} className="card-img-top" alt="" />
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
