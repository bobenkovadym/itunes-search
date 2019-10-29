import {
  GET_ARTISTS,
  GET_MUSIC,
  GET_MOVIES,
  GET_ALL,
  SET_ALERT,
  REMOVE_ALERT,
  SET_LOADING,
  SET_TRACK_ID
} from './types';

export default (state, action) => {
  switch (action.type) {
    case SET_LOADING:
      return {
        ...state,
        loading: true
      };
    case GET_ARTISTS:
      return {
        ...state,
        music: [],
        movies: [],
        artists: action.payload,
        loading: false
      };
    case GET_MOVIES:
      return {
        ...state,
        artists: [],
        music: [],
        movies: action.payload,
        loading: false
      };
    case GET_MUSIC:
      return {
        ...state,
        artists: [],
        movies: [],
        music: action.payload,
        loading: false
      };
    case GET_ALL:
      return {
        ...state,
        artists: action.payload.artists.data.results,
        music: action.payload.music.data.results,
        movies: action.payload.movies.data.results,
        loading: false
      };
    case SET_ALERT:
      return {
        ...state,
        alerts: [action.payload, ...state.alerts]
      };
    case REMOVE_ALERT:
      return {
        ...state,
        alerts: state.alerts.filter(alert => alert.id !== action.payload)
      };
    case SET_TRACK_ID:
      return {
        ...state,
        track: action.payload
      };
    default:
  }
};
