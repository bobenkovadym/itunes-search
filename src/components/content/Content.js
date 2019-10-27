import React, { useContext, Fragment } from 'react';
import Artists from './Artists';
import Tracks from './Tracks';
import Movies from './Movies';
import MainContext from '../../context/mainContext';
import Spinner from '../layout/Spinner';

const Content = () => {
  const mainContext = useContext(MainContext);
  const { artists, loading, music, movies } = mainContext;

  return loading ? (
    <Spinner />
  ) : (
    <Fragment>
      {artists.length > 0 && (
        <Fragment>
          <span className="font-weight-bold">People</span>
          <hr />
          <div className="grid-4">
            {artists.map(artist => (
              <Artists key={artist.artistId} artist={artist} />
            ))}
          </div>
        </Fragment>
      )}
      {music.length > 0 && (
        <Fragment>
          <span className="font-weight-bold">Music</span>
          <hr />
          <div className="grid-3">
            {music.map(track => (
              <Tracks key={track.artistId} track={track} />
            ))}
          </div>
        </Fragment>
      )}
      {movies.length > 0 && (
        <Fragment>
          <span className="font-weight-bold">Movies</span>
          <hr />
          <div className="grid-3">
            {movies.map(movie => (
              <Movies key={movie.artistId} movie={movie} />
            ))}
          </div>
        </Fragment>
      )}
    </Fragment>
  );
};

export default Content;
