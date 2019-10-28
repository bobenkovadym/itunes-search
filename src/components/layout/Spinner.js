import React, { Fragment } from 'react';
import spinner from './spinner.gif';

const Spinner = () => {
  const spinnerStyles = {
    display: 'block',
    width: '200px',
    margin: 'auto'
  };

  return (
    <Fragment>
      <img src={spinner} alt="Loading..." style={spinnerStyles} />
    </Fragment>
  );
};

export default Spinner;
