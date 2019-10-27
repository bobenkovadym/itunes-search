import React, { useReducer } from 'react';
import MainContext from './mainContext';
import mainReducer from './mainReducer';
import axios from 'axios';
import {
  GET_ARTISTS,
  GET_MUSIC,
  GET_MOVIES,
  SET_ALERT,
  REMOVE_ALERT,
  SET_LOADING
} from './types';

const MainState = props => {
  const initialState = {
    artists: [],
    music: [],
    movies: [],
    loading: false,
    alert: null
  };

  const [state, dispatch] = useReducer(mainReducer, initialState);

  const setLoading = () => dispatch({ type: SET_LOADING });

  const getArtists = async text => {
    setLoading();
    try {
      const res = await axios.get(
        `https://itunes.apple.com/search?term=${text}&limit=12&entity=allArtist`
      );
      dispatch({ type: GET_ARTISTS, payload: res.data.results });
    } catch (err) {
      console.error(err.message);
    }
  };

  const getMusic = () => {};

  const getMovies = () => {};

  const setAlert = () => {
    //clearAlert
  };



  return (
    <MainContext.Provider
      value={{
        artists: state.artists,
        music: state.music,
        movies: state.movies,
        loading: state.loading,
        alert: state.alert,
        getArtists,
        getMusic,
        getMovies,
        setAlert
      }}
    >
      {props.children}
    </MainContext.Provider>
  );
};

export default MainState;
