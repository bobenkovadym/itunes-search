import React, { useReducer } from 'react';
import MainContext from './mainContext';
import mainReducer from './mainReducer';
// import { } from '../types';

const MainState = props => {
  const initialState = {
    artist:[],
    loading: true,
    alert: null
  };

  const [state, dispatch] = useReducer(mainReducer, initialState);

  // fetch artists

  // set alert

  // set loading
  
  return <MainContext.Provider
    value={{}}
  >
    {props.children}
  </MainContext.Provider>
};

export default MainState;
