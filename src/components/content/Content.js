import React, { useContext, Fragment } from 'react';
import Artists from './Artists';
import Tracks from './Tracks';
import MainContext from '../../context/mainContext';
import Spinner from '../layout/Spinner';

const Content = () => {
  const mainContext = useContext(MainContext);
  const { artists, loading, music } = mainContext;

  return !loading ? <Spinner /> : <Fragment>
    {artists && (<Fragment>
        <span className="font-weight-bold">People</span>
        <hr/>
        <div className="grid-4">
          {artists.map(artist => (
            <Artists key={artist.artistId} artist={artist} />
          ))}
        </div>
      </Fragment>)}
    {music && (<Fragment>
        <span className="font-weight-bold">Music</span>
        <hr/>
        <div className="grid-4">
          {music.map(track => (
            <Tracks key={track.artistId} track={track} />
          ))}
        </div>
      </Fragment>)}
  </Fragment>
};

export default Content;
