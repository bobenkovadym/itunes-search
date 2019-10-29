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
  SET_LOADING,
  GET_ALL,
  SET_TRACK_ID
} from './types';

const MainState = props => {
  const initialState = {
    artists: [],
    music: [
      {
        "wrapperType":"track",
        "kind":"song",
        "artistId":266740,
        "collectionId":205743706,
        "trackId":2055391,
        "artistName":"James Horner & Céline Dion",
        "collectionName":"Titanic (Music from the Motion Picture)",
        "trackName":"My Heart Will Go On (Love Theme from \"Titanic\")",
        "collectionCensoredName":"Titanic",
        "trackCensoredName":"My Heart Will Go On (Love Theme from \"Titanic\")",
        "collectionArtistName":"James Horner",
        "artistViewUrl":"https://music.apple.com/us/artist/james-horner/266740?uo=4",
        "collectionViewUrl":"https://music.apple.com/us/album/my-heart-will-go-on-love-theme-from-titanic/205743706?i=205745391&uo=4",
        "trackViewUrl":"https://music.apple.com/us/album/my-heart-will-go-on-love-theme-from-titanic/205743706?i=205745391&uo=4",
        "previewUrl":"https://audio-ssl.itunes.apple.com/itunes-assets/Music/48/0e/17/mzm.smzezyhc.aac.p.m4a",
        "artworkUrl30":"https://is1-ssl.mzstatic.com/image/thumb/Music/v4/04/72/1a/04721a51-8fe3-4a4e-5b8a-1c7dc230745e/source/30x30bb.jpg",
        "artworkUrl60":"https://is1-ssl.mzstatic.com/image/thumb/Music/v4/04/72/1a/04721a51-8fe3-4a4e-5b8a-1c7dc230745e/source/60x60bb.jpg",
        "artworkUrl100":"https://is1-ssl.mzstatic.com/image/thumb/Music/v4/04/72/1a/04721a51-8fe3-4a4e-5b8a-1c7dc230745e/source/100x100bb.jpg",
        "collectionPrice":9.99,
        "trackPrice":1.29,
        "releaseDate":"1997-11-18T08:00:00Z",
        "collectionExplicitness":"notExplicit",
        "trackExplicitness":"notExplicit",
        "discCount":1,
        "discNumber":1,
        "trackCount":15,
        "trackNumber":14,
        "trackTimeMillis":310733,
        "country":"USA",
        "currency":"USD",
        "primaryGenreName":"Soundtrack",
        "isStreamable":true
      },
      {
        "wrapperType":"track",
        "kind":"song",
        "artistId":266740,
        "collectionId":205743706,
        "trackId":2045391,
        "artistName":"James Horner & Céline Dion",
        "collectionName":"Titanic (Music from the Motion Picture)",
        "trackName":"My Heart Will Go On (Love Theme from \"Titanic\")",
        "collectionCensoredName":"Titanic",
        "trackCensoredName":"My Heart Will Go On (Love Theme from \"Titanic\")",
        "collectionArtistName":"James Horner",
        "artistViewUrl":"https://music.apple.com/us/artist/james-horner/266740?uo=4",
        "collectionViewUrl":"https://music.apple.com/us/album/my-heart-will-go-on-love-theme-from-titanic/205743706?i=205745391&uo=4",
        "trackViewUrl":"https://music.apple.com/us/album/my-heart-will-go-on-love-theme-from-titanic/205743706?i=205745391&uo=4",
        "previewUrl":"https://audio-ssl.itunes.apple.com/itunes-assets/Music/48/0e/17/mzm.smzezyhc.aac.p.m4a",
        "artworkUrl30":"https://is1-ssl.mzstatic.com/image/thumb/Music/v4/04/72/1a/04721a51-8fe3-4a4e-5b8a-1c7dc230745e/source/30x30bb.jpg",
        "artworkUrl60":"https://is1-ssl.mzstatic.com/image/thumb/Music/v4/04/72/1a/04721a51-8fe3-4a4e-5b8a-1c7dc230745e/source/60x60bb.jpg",
        "artworkUrl100":"https://is1-ssl.mzstatic.com/image/thumb/Music/v4/04/72/1a/04721a51-8fe3-4a4e-5b8a-1c7dc230745e/source/100x100bb.jpg",
        "collectionPrice":9.99,
        "trackPrice":1.29,
        "releaseDate":"1997-11-18T08:00:00Z",
        "collectionExplicitness":"notExplicit",
        "trackExplicitness":"notExplicit",
        "discCount":1,
        "discNumber":1,
        "trackCount":15,
        "trackNumber":14,
        "trackTimeMillis":310733,
        "country":"USA",
        "currency":"USD",
        "primaryGenreName":"Soundtrack",
        "isStreamable":true
      },
      {
        "wrapperType":"track",
        "kind":"song",
        "artistId":266740,
        "collectionId":205743706,
        "trackId":2057451,
        "artistName":"James Horner & Céline Dion",
        "collectionName":"Titanic (Music from the Motion Picture)",
        "trackName":"My Heart Will Go On (Love Theme from \"Titanic\")",
        "collectionCensoredName":"Titanic",
        "trackCensoredName":"My Heart Will Go On (Love Theme from \"Titanic\")",
        "collectionArtistName":"James Horner",
        "artistViewUrl":"https://music.apple.com/us/artist/james-horner/266740?uo=4",
        "collectionViewUrl":"https://music.apple.com/us/album/my-heart-will-go-on-love-theme-from-titanic/205743706?i=205745391&uo=4",
        "trackViewUrl":"https://music.apple.com/us/album/my-heart-will-go-on-love-theme-from-titanic/205743706?i=205745391&uo=4",
        "previewUrl":"https://audio-ssl.itunes.apple.com/itunes-assets/Music/48/0e/17/mzm.smzezyhc.aac.p.m4a",
        "artworkUrl30":"https://is1-ssl.mzstatic.com/image/thumb/Music/v4/04/72/1a/04721a51-8fe3-4a4e-5b8a-1c7dc230745e/source/30x30bb.jpg",
        "artworkUrl60":"https://is1-ssl.mzstatic.com/image/thumb/Music/v4/04/72/1a/04721a51-8fe3-4a4e-5b8a-1c7dc230745e/source/60x60bb.jpg",
        "artworkUrl100":"https://is1-ssl.mzstatic.com/image/thumb/Music/v4/04/72/1a/04721a51-8fe3-4a4e-5b8a-1c7dc230745e/source/100x100bb.jpg",
        "collectionPrice":9.99,
        "trackPrice":1.29,
        "releaseDate":"1997-11-18T08:00:00Z",
        "collectionExplicitness":"notExplicit",
        "trackExplicitness":"notExplicit",
        "discCount":1,
        "discNumber":1,
        "trackCount":15,
        "trackNumber":14,
        "trackTimeMillis":310733,
        "country":"USA",
        "currency":"USD",
        "primaryGenreName":"Soundtrack",
        "isStreamable":true
      },
      {
        "wrapperType":"track",
        "kind":"song",
        "artistId":266740,
        "collectionId":205743706,
        "trackId":2057453,
        "artistName":"James Horner & Céline Dion",
        "collectionName":"Titanic (Music from the Motion Picture)",
        "trackName":"My Heart Will Go On (Love Theme from \"Titanic\")",
        "collectionCensoredName":"Titanic",
        "trackCensoredName":"My Heart Will Go On (Love Theme from \"Titanic\")",
        "collectionArtistName":"James Horner",
        "artistViewUrl":"https://music.apple.com/us/artist/james-horner/266740?uo=4",
        "collectionViewUrl":"https://music.apple.com/us/album/my-heart-will-go-on-love-theme-from-titanic/205743706?i=205745391&uo=4",
        "trackViewUrl":"https://music.apple.com/us/album/my-heart-will-go-on-love-theme-from-titanic/205743706?i=205745391&uo=4",
        "previewUrl":"https://audio-ssl.itunes.apple.com/itunes-assets/Music/48/0e/17/mzm.smzezyhc.aac.p.m4a",
        "artworkUrl30":"https://is1-ssl.mzstatic.com/image/thumb/Music/v4/04/72/1a/04721a51-8fe3-4a4e-5b8a-1c7dc230745e/source/30x30bb.jpg",
        "artworkUrl60":"https://is1-ssl.mzstatic.com/image/thumb/Music/v4/04/72/1a/04721a51-8fe3-4a4e-5b8a-1c7dc230745e/source/60x60bb.jpg",
        "artworkUrl100":"https://is1-ssl.mzstatic.com/image/thumb/Music/v4/04/72/1a/04721a51-8fe3-4a4e-5b8a-1c7dc230745e/source/100x100bb.jpg",
        "collectionPrice":9.99,
        "trackPrice":1.29,
        "releaseDate":"1997-11-18T08:00:00Z",
        "collectionExplicitness":"notExplicit",
        "trackExplicitness":"notExplicit",
        "discCount":1,
        "discNumber":1,
        "trackCount":15,
        "trackNumber":14,
        "trackTimeMillis":310733,
        "country":"USA",
        "currency":"USD",
        "primaryGenreName":"Soundtrack",
        "isStreamable":true
      }
    ],
    movies: [],
    loading: false,
    alerts: [],
    track: null
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
    axios
      .all([
        axios.get(
          `https://itunes.apple.com/search?term=${text}&limit=12&entity=allArtist`
        ),
        axios.get(
          `https://itunes.apple.com/search?term=${text}&limit=18&entity=musicTrack`
        ),
        axios.get(
          `https://itunes.apple.com/search?term=${text}&limit=18&entity=movie`
        )
      ])
      .then(
        axios.spread((artists, music, movies) => {
          if (
            artists.data.results.length === 0 &&
            music.data.results.length === 0 &&
            movies.data.results.length === 0
          ) {
            setAlert('No results...');
          }
          dispatch({ type: GET_ALL, payload: { artists, music, movies } });
        })
      )
      .catch(err => console.error(err.message));
  };

  const setTrackId = id => {
    dispatch({ type: SET_TRACK_ID, payload: id });
  };

  return (
    <MainContext.Provider
      value={{
        artists: state.artists,
        music: state.music,
        movies: state.movies,
        loading: state.loading,
        alerts: state.alerts,
        track: state.track,
        setTrackId,
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
