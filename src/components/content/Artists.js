import React, { useEffect, useState } from 'react';
import ogs from 'open-graph-scraper';

const Artists = ({
  artist: { artistName, primaryGenreName, artistType, artistLinkUrl }
}) => {
  const [img, setImage] = useState('');

  useEffect(() => {
    const options = {
       'url': artistLinkUrl,
       'encoding': 'utf-8',
       'allMedia': true
     };

    ogs(options, (err, res) => {
        if(err) {
        console.log(err);
      } else {
        console.log(res.data);
        const x = res.data.ogImage[0].url;
        const image = x.substring(0, x.lastIndexOf("/") + 1) + "500x500.jpg";
        setImage(image);
      }
    });
  }, [artistLinkUrl]);


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
