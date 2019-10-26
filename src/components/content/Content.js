import React, { useContext } from 'react';
import ContentItem from './ContentItem';
import MainContext from '../../context/mainContext';
import Spinner from '../layout/Spinner';

const Content = () => {
  const mainContext = useContext(MainContext);
  const { artists, loading } = mainContext;

  return !loading ? (
    <Spinner />
  ) : (
    <div className="grid-4">
      {artists.map(artist => (
        <ContentItem key={artist.artistId} artist={artist} />
      ))}
    </div>
  );
};

export default Content;
