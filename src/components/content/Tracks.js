import React, { useRef, useEffect, useContext } from 'react';
import MainContext from '../../context/mainContext';

const Tracks = ({
  track: {
    trackId,
    artistName,
    primaryGenreName,
    trackName,
    artworkUrl100,
    trackViewUrl,
    previewUrl,
    country,
    trackPrice
  }
}) => {
  const mainContext = useContext(MainContext);

  const { track, setTrackId } = mainContext;
  const img =
    artworkUrl100.substring(0, artworkUrl100.lastIndexOf('/') + 1) +
    '600x600bb.jpg';

  const audio = useRef();

  useEffect(() => {
      audio.current.id = trackId;
      if(track !== audio.current.id) {
        audio.current.pause();
      }
      audio.current.onplay = () => {
        console.log('setted id: ', audio.current.id);
        setTrackId(audio.current.id);
      };
      //eslint-disable-next-line
    });

  return (
    <div className="card" style={{ width: '100%' }}>
      <img src={img} className="card-img-top" alt="" />
      <div className="card-body">
        <h5 className="card-title">{trackName}</h5>
        <h6>
          <i className="fas fa-dollar-sign" />{' '}
          <span className="font-weight-bold">{trackPrice}</span>
        </h6>
        <audio ref={audio} controls controlsList="nodownload" src={previewUrl} type="audio/x-m4a"></audio>
        <hr />
        <span className="font-weight-bold">{artistName}</span>
        <br />
        <p> Genre: {primaryGenreName} <br/> Country: {country}</p>
        <a href={trackViewUrl} className="btn btn-primary">
          Show album
        </a>
      </div>
    </div>
  );
};

export default Tracks;
