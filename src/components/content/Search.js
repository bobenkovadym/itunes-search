import React, { useContext, useState, Fragment } from 'react';
import MainContext from '../../context/mainContext';

const Search = () => {
  const [text, setText] = useState('');
  const [value, setValue] = useState('All');

  const mainContext = useContext(MainContext);
  const { getArtists, getMusic, getMovies, setAlert, getAll } = mainContext;

  const onClick = () => {
    if (text === '') {
      setAlert('Nothing to search...');
    } else {
      if(value === 'All') {
        getAll(text);
      } else if (value === 'People') {
        getArtists(text);
      } else if (value === 'Music') {
        getMusic(text);
      } else if (value === 'Movies')
        getMovies(text);
    }
  };

  const onChange = e => {
    ;
  }

  return (
    <Fragment>
      <div className="input-group">
        <input
          onChange={e => setText(e.target.value)}
          type="text"
          className="form-control"
          placeholder="your request..."
          aria-label="Text input with dropdown button"
        />
        <select className="custom-select" onChange={e => setValue(e.target.value)}>
          <option defaultValue="All">
            All
          </option>
          <option value="People">
            People
          </option>
          <option value="Music">
            Music
          </option>
          <option value="Movies">
            Movies
          </option>
        </select>
        <div className="input-group-append">
          <button
            className="btn btn-outline-secondary"
            type="submit"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
            onClick={onClick}
          >
            Search
          </button>
        </div>
      </div>
    </Fragment>
  );
};

export default Search;
