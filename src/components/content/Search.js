import React, { useContext, useState } from 'react';
import MainContext from '../../context/mainContext';

const Search = () => {
  const [text, setText] = useState('');

  const mainContext = useContext(MainContext);
  const { getArtists } = mainContext;

  return (
    <div className="input-group mb-3">
      <input onChange={(e) => setText(e.target.value)} type="text" className="form-control" placeholder="your request..." />
      <div className="input-group-append">
        <button onClick={() => getArtists(text)} className="btn btn-outline-secondary" type="button">Search</button>
      </div>
    </div>
  );
};

export default Search;
