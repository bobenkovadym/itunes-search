import {
  GET_ARTISTS,
  GET_MUSIC,
  GET_MOVIES,
  SET_ALERT,
  REMOVE_ALERT,
  SET_LOADING
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
        artists: action.payload,
        loading: false
      };
    case GET_MOVIES:
      return {
        ...state,
        movies: action.payload,
        loading: false
      };
    case GET_MUSIC:
      return {
        ...state,
        music: action.payload,
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
    default:
  }
};
