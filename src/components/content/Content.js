import React, { useContext, Fragment } from 'react';
import Artists from './Artists';
import Tracks from './Tracks';
import Movies from './Movies';
import MainContext from '../../context/mainContext';
import Spinner from '../layout/Spinner';

const Content = () => {
  const mainContext = useContext(MainContext);
  const { artists, loading, music, movies } = mainContext;

  if (
    !loading &&
    artists.length === 0 &&
    music.length === 0 &&
    movies.length === 0
  ) {
    return (
      <div className="about">
        <h2 className="text-muted">About This App</h2>
        <hr />
        <p className="text-muted">
          Simple single page application for searching content (artists, music,
          movies) on iTunes.
        </p>
        <p className="text-muted">
          This project was written with{' '}
          <span className="font-weight-bold">
            ReactJS using Context API and Hooks.
          </span>
          <br /> Main configuration was set with{' '}
          <span className="font-weight-bold">'Create React App'.</span> I also
          used libraries like{' '}
          <span className="font-weight-bold">
            uuid, open graph srcaper, axios, bootstrap.
          </span>
        </p>
      </div>
    );
  }

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
              <Tracks key={track.trackId} track={track} />
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
              <Movies key={movie.trackId} movie={movie} />
            ))}
          </div>
        </Fragment>
      )}
    </Fragment>
  );
};

export default Content;
