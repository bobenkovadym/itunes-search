import React from 'react';

const Search = () => {
  return (
    <div className="input-group mb-3">
      <input type="text" className="form-control" placeholder="Artist name..." />
      <div className="input-group-append">
        <button className="btn btn-outline-secondary" type="button">Search</button>
      </div>
    </div>
  );
};

export default Search;
