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

  const setAlert = text => {
    dispatch({ type: SET_ALERT, payload: text });

    setTimeout(() => dispatch({ type: REMOVE_ALERT }), 5000);
  };

  const getArtists = async text => {
    try {
      const res = await axios.get(
        `https://itunes.apple.com/search?term=${text}&limit=12&entity=allArtist`
      );
      dispatch({ type: GET_ARTISTS, payload: res.data.results });
    } catch (err) {
      console.error(err.message);
    }
  };

  const getMusic = async text => {
    try {
      const res = await axios.get(
        `https://itunes.apple.com/search?term=${text}&limit=18&entity=musicTrack`
      );
      dispatch({ type: GET_MUSIC, payload: res.data.results });
    } catch (err) {
      console.error(err.message);
    }
  };

  const getMovies = async text => {
    try {
      const res = await axios.get(
        `https://itunes.apple.com/search?term=${text}&limit=18&entity=movie`
      );
      dispatch({ type: GET_MOVIES, payload: res.data.results });
    } catch (err) {
      console.error(err.message);
    }
  };

  const getAll = async text => {
    setLoading();
    try {
      await getArtists(text);
      await getMusic(text);
      await getMovies(text);
      if (
        state.artists.length === 0 &&
        state.music.length === 0 &&
        state.movies.length === 0
      ) {
        setAlert('Oops, it looks like nothing was found...');
      }
    } catch (err) {
      console.error(err.message);
    }
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
