import React, { useReducer } from 'react';
import MainContext from './mainContext';
import mainReducer from './mainReducer';
import axios from 'axios';
import uuid from 'uuid';
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
    alerts: []
  };

  const [state, dispatch] = useReducer(mainReducer, initialState);

  const setLoading = () => dispatch({ type: SET_LOADING });

  const setAlert = text => {
    const id = uuid.v4();
    dispatch({ type: SET_ALERT, payload: { text, id } });

    setTimeout(() => dispatch({ type: REMOVE_ALERT, payload: id }), 5000);
  };

  const getArtists = async text => {
    setLoading();
    try {
      const res = await axios.get(
        `https://itunes.apple.com/search?term=${text}&limit=12&entity=allArtist`
      );
      if (res.data.results.length === 0) {
        setAlert('No artists...');
      }
      dispatch({ type: GET_ARTISTS, payload: res.data.results });
    } catch (err) {
      console.error(err.message);
    }
  };

  const getMusic = async text => {
    setLoading();
    try {
      const res = await axios.get(
        `https://itunes.apple.com/search?term=${text}&limit=18&entity=musicTrack`
      );
      if (res.data.results.length === 0) {
        setAlert('No music...');
      }
      dispatch({ type: GET_MUSIC, payload: res.data.results });
    } catch (err) {
      console.error(err.message);
    }
  };

  const getMovies = async text => {
    setLoading();
    try {
      const res = await axios.get(
        `https://itunes.apple.com/search?term=${text}&limit=18&entity=movie`
      );
      if (res.data.results.length === 0) {
        setAlert('No movies...');
      }
      dispatch({ type: GET_MOVIES, payload: res.data.results });
    } catch (err) {
      console.error(err.message);
    }
  };

  const getAll = text => {
    setLoading();
    getArtists(text);
    getMusic(text);
    getMovies(text);
  };

  return (
    <MainContext.Provider
      value={{
        artists: state.artists,
        music: state.music,
        movies: state.movies,
        loading: state.loading,
        alerts: state.alerts,
        getArtists,
        getMusic,
        getMovies,
        getAll,
        setAlert
      }}
    >
      {props.children}
    </MainContext.Provider>
  );
};

export default MainState;
