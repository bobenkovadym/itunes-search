import React, { useEffect, useState } from 'react';
import ogs from 'open-graph-scraper';
import not_found from './not_found.png';
import PropTypes from 'prop-types';

const Artists = ({
  artist: { artistName, primaryGenreName, artistType, artistLinkUrl, artistId }
}) => {
  const [img, setImage] = useState('');
  const artistsUrl = artistLinkUrl.substring(0, artistLinkUrl.lastIndexOf('?'));

  useEffect(() => {
    const options = {
      url: artistsUrl,
      encoding: 'utf-8',
      allMedia: true
    };

    ogs(options, (err, res) => {
      if (err) {
        console.error(err);
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
        {primaryGenreName && <p> Genre: {primaryGenreName}</p>}
        <a href={artistLinkUrl} className="btn btn-primary">
          More
        </a>
      </div>
    </div>
  );
};

Artists.propTypes = {
  artist: PropTypes.object.isRequired
};

export default Artists;
