import React, { useContext } from 'react';
import MainContext from '../../context/mainContext';

const Alert = () => {
  const mainContext = useContext(MainContext);
  return (
    mainContext.alert !== null && (
      <div className="alert alert-dark" role="alert">
        <i className="fas fa-info" /> {mainContext.alert}
      </div>
    )
  );
};

export default Alert;
