import React, { useContext } from 'react';
import MainContext from '../../context/mainContext';

const Alert = () => {
  const mainContext = useContext(MainContext);
  return (
    mainContext.alerts.length > 0 &&
    mainContext.alerts.map(alert => (
      <div key={alert.id} className="alert alert-dark" role="alert">
        <i className="fas fa-info" /> {alert.text}
      </div>
    ))
  );
};

export default Alert;
