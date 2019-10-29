import React, { useContext, useState, Fragment } from 'react';
import MainContext from '../../context/mainContext';

const Search = () => {
  const [text, setText] = useState('');
  const [value, setValue] = useState('All');

  const mainContext = useContext(MainContext);
  const { getArtists, getMusic, getMovies, setAlert, getAll } = mainContext;

  const onClick = () => {
    if (text === '') {
      setAlert("Request field should'nt be empty...");
    } else {
      if (value === 'All') {
        getAll(text);
      } else if (value === 'People') {
        getArtists(text);
      } else if (value === 'Music') {
        getMusic(text);
      } else if (value === 'Movies') getMovies(text);
    }
  };

  return (
    <Fragment>
      <div className="input-group mb-3">
        <input
          onChange={e => setText(e.target.value)}
          type="text"
          className="form-control"
          placeholder="Type your request here..."
        />
        <select
          className="custom-select"
          onChange={e => setValue(e.target.value)}
        >
          <option defaultValue="All">All</option>
          <option value="People">People</option>
          <option value="Music">Music</option>
          <option value="Movies">Movies</option>
        </select>
        <div className="input-group-append">
          <button
            className="btn btn-outline-secondary"
            type="submit"
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
