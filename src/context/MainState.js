import React, { useReducer } from 'react';
import MainContext from './mainContext';
import mainReducer from './mainReducer';
import {
  GET_ARTISTS,
  GET_MUSIC,
  GET_MOVIES,
  SET_ALERT,
  REMOVE_ALERT
} from './types';

const MainState = props => {
  const initialState = {
    artists: [
      {
        "wrapperType":"artist",
        "artistType":"Author",
        "artistName":"Jack London",
        "artistLinkUrl":"https://books.apple.com/us/author/jack-london/id2789674?uo=4",
        "artistId":2789674,
        "amgArtistId":1179765,
        "primaryGenreName":"Classics",
        "primaryGenreId":10042
      },
        {"wrapperType":"artist",
        "artistType":"Artist",
        "artistName":"David Guetta",
        "artistLinkUrl":"https://music.apple.com/us/artist/david-guetta/5557599?uo=4",
        "artistId":5557599,
        "amgArtistId":572357,
        "primaryGenreName":"Dance",
        "primaryGenreId":17
      },
    ],
    music:[
      {
        "wrapperType":"track",
        "kind":"song",
        "artistId":141881447,
        "collectionId":261126734,
        "trackId":261126771,
        "artistName":"Input",
        "collectionName":"A Radio With Guts",
        "trackName":"Welcome Back",
        "collectionCensoredName":"A Radio With Guts",
        "trackCensoredName":"Welcome Back",
        "artistViewUrl":"https://music.apple.com/us/artist/input/141881447?uo=4",
        "collectionViewUrl":"https://music.apple.com/us/album/welcome-back/261126734?i=261126771&uo=4",
        "trackViewUrl":"https://music.apple.com/us/album/welcome-back/261126734?i=261126771&uo=4",
        "previewUrl":"https://audio-ssl.itunes.apple.com/itunes-assets/Music/v4/33/23/14/332314c9-2e31-31fa-1091-bf9b8db131d9/mzaf_456673929193489044.plus.aac.p.m4a",
        "artworkUrl30":"https://is4-ssl.mzstatic.com/image/thumb/Music/v4/4e/f2/83/4ef28305-8e28-c2aa-39da-761a09013c2e/source/30x30bb.jpg",
        "artworkUrl60":"https://is4-ssl.mzstatic.com/image/thumb/Music/v4/4e/f2/83/4ef28305-8e28-c2aa-39da-761a09013c2e/source/60x60bb.jpg",
        "artworkUrl100":"https://is4-ssl.mzstatic.com/image/thumb/Music/v4/4e/f2/83/4ef28305-8e28-c2aa-39da-761a09013c2e/source/100x100bb.jpg",
        "collectionPrice":9.99,
        "trackPrice":0.99,
        "releaseDate":"2007-07-25T07:00:00Z",
        "collectionExplicitness":"notExplicit",
        "trackExplicitness":"notExplicit",
        "discCount":1, "discNumber":1,
        "trackCount":15,
        "trackNumber":2,
        "trackTimeMillis":180880,
        "country":"USA",
        "currency":"USD",
        "primaryGenreName":"Hip-Hop/Rap",
        "isStreamable":true
      },
      {
        "wrapperType":"track",
        "kind":"song",
        "artistId":5869117,
        "collectionId":1437591818,
        "trackId":1437592171,
        "artistName":"Lil Wayne",
        "collectionName":"Tha Carter V",
        "trackName":"Uproar (feat. Swizz Beatz)",
        "collectionCensoredName":"Tha Carter V",
        "trackCensoredName":"Uproar (feat. Swizz Beatz)",
        "artistViewUrl":"https://music.apple.com/us/artist/lil-wayne/5869117?uo=4",
        "collectionViewUrl":"https://music.apple.com/us/album/uproar-feat-swizz-beatz/1437591818?i=1437592171&uo=4",
        "trackViewUrl":"https://music.apple.com/us/album/uproar-feat-swizz-beatz/1437591818?i=1437592171&uo=4",
        "previewUrl":"https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview128/v4/f0/96/02/f09602fc-40df-8f2e-1a19-e69b7bf746aa/mzaf_4452217425399550549.plus.aac.p.m4a",
        "artworkUrl30":"https://is2-ssl.mzstatic.com/image/thumb/Music118/v4/92/da/dd/92dadd83-f9d2-3dde-b0b6-970611c36abe/source/30x30bb.jpg",
        "artworkUrl60":"https://is2-ssl.mzstatic.com/image/thumb/Music118/v4/92/da/dd/92dadd83-f9d2-3dde-b0b6-970611c36abe/source/60x60bb.jpg",
        "artworkUrl100":"https://is2-ssl.mzstatic.com/image/thumb/Music118/v4/92/da/dd/92dadd83-f9d2-3dde-b0b6-970611c36abe/source/100x100bb.jpg",
        "collectionPrice":13.99,
        "trackPrice":1.29,
        "releaseDate":"2018-09-28T12:00:00Z",
        "collectionExplicitness":"explicit",
        "trackExplicitness":"explicit",
        "discCount":1,
        "discNumber":1,
        "trackCount":23,
        "trackNumber":4,
        "trackTimeMillis":193959,
        "country":"USA",
        "currency":"USD",
        "primaryGenreName":"Hip-Hop/Rap",
        "contentAdvisoryRating":"Explicit",
        "isStreamable":true
      },
    ],
    movies: [
      {
        "wrapperType":"track",
        "kind":"feature-movie",
        "trackId":545892907,
        "artistName":"James Cameron",
        "trackName":"Titanic",
        "trackCensoredName":"Titanic",
        "trackViewUrl":"https://itunes.apple.com/us/movie/titanic/id545892907?uo=4",
        "previewUrl":"https://video-ssl.itunes.apple.com/itunes-assets/Video128/v4/c0/63/d3/c063d3d6-6f48-ff1d-8840-383155a565b8/mzvf_6905791057282445491.640x362.h264lc.U.p.m4v",
        "artworkUrl30":"https://is2-ssl.mzstatic.com/image/thumb/Video/v4/7c/78/e4/7c78e482-f2e5-f2ce-83b6-188b26c3706d/source/30x30bb.jpg",
        "artworkUrl60":"https://is2-ssl.mzstatic.com/image/thumb/Video/v4/7c/78/e4/7c78e482-f2e5-f2ce-83b6-188b26c3706d/source/60x60bb.jpg",
        "artworkUrl100":"https://is2-ssl.mzstatic.com/image/thumb/Video/v4/7c/78/e4/7c78e482-f2e5-f2ce-83b6-188b26c3706d/source/100x100bb.jpg",
        "collectionPrice":12.99,
        "trackPrice":12.99,
        "trackRentalPrice":3.99000,
        "collectionHdPrice":16.99000,
        "trackHdPrice":16.99000,
        "trackHdRentalPrice":3.99000,
        "releaseDate":"1997-12-19T08:00:00Z",
        "collectionExplicitness":"notExplicit",
        "trackExplicitness":"notExplicit",
        "trackTimeMillis":11691040,
        "country":"USA",
        "currency":"USD",
        "primaryGenreName":"Romance",
        "contentAdvisoryRating":"PG-13",
        "longDescription":"Experience Academy Award-winning director James Cameronʼs epic masterpiece Titanic like never before. Leonardo DiCaprio and Kate Winslet shine in this unforgettable love story born of tragedy that became a worldwide phenomenon. Take the journey and discover why critics declare Titanic “a magnificent motion picture that remains spellbinding.” * Roger Ebert, CHICAGO SUN-TIMES",
        "hasITunesExtras":true
      },
      {
        "wrapperType":"track",
        "kind":"feature-movie",
        "trackId":301950798,
        "artistName":"Jean Negulesco",
        "trackName":"Titanic",
        "trackCensoredName":"Titanic",
        "trackViewUrl":"https://itunes.apple.com/us/movie/titanic/id301950798?uo=4",
        "previewUrl":"https://video-ssl.itunes.apple.com/itunes-assets/Video128/v4/dd/14/dc/dd14dc80-8be3-a20b-c3b4-e6f55d228122/mzvf_3721493013007209325.640x480.h264lc.U.p.m4v",
        "artworkUrl30":"https://is4-ssl.mzstatic.com/image/thumb/Video/v4/27/f6/d4/27f6d4ae-96f8-82b3-3c3e-dbabc61f4e5c/source/30x30bb.jpg",
        "artworkUrl60":"https://is4-ssl.mzstatic.com/image/thumb/Video/v4/27/f6/d4/27f6d4ae-96f8-82b3-3c3e-dbabc61f4e5c/source/60x60bb.jpg",
        "artworkUrl100":"https://is4-ssl.mzstatic.com/image/thumb/Video/v4/27/f6/d4/27f6d4ae-96f8-82b3-3c3e-dbabc61f4e5c/source/100x100bb.jpg",
        "collectionPrice":9.99,
        "trackPrice":9.99,
        "trackRentalPrice":3.99000,
        "releaseDate":"2003-09-02T07:00:00Z",
        "collectionExplicitness":"notExplicit",
        "trackExplicitness":"notExplicit",
        "trackTimeMillis":5862653,
        "country":"USA",
        "currency":"USD",
        "primaryGenreName":"Drama",
        "contentAdvisoryRating":"NR",
        "longDescription":"Titanic is a poignant retelling of the 1912 sinking of the luxury liner and of the lives that were lost during its slow descent into the Atlantic. The film is a feast for the eyes, with lavish production values and a painstaking attention to detail, in particular to the authenticity of the design of the ship. The film's Oscar-winning screenplay is a deft blending of fact and fancy that poignantly explores the lives of those aboard this doomed vessel. The sinking of the Titanic serves as the backdrop for a several fictional subplots, chief of which involves snobby socialite Richard Sturges and his wife, Julia. Mrs. Sturges has booked passage on the ill-fated passenger ship with her daughter and son, leaving her husband far behind. Richard manages to board the ship at the last minute, but to no avail: immediately Julia reveals her plans to divorce him. When the Titanic sideswipes an iceberg, Richard shows considerable bravery, ensuring that the women and children aboard are ushered to safety. He is reunited and reconciled with his son, and poignantly the two face their final moments on earth together."
      },
    ],
    loading: true,
    alert: null
  };

  const [state, dispatch] = useReducer(mainReducer, initialState);

  // get artists
  const getArtists = async () => {
    const res = await axios.get()
  };
  // get Music
  const getMusic = () => {

  };
  // get movies
  const getMovies = () => {

  };

  const setAlert = () => {
    //clearAlert
  };


  // useEffect(() => {
  //   const options = {
  //      'url': 'https://music.apple.com/us/artist/justin-timberlake/398128?ign-mpt=uo%3D4',
  //      'encoding': 'utf-8'
  //    };
  //
  //   ogs(options, (err, res) => {
  //       if(err) {
  //       console.log(err)
  //     } else {
  //       const x = res.data.ogImage.url;
  //       const image = x.substring(0, x.lastIndexOf("/") + 1) + "600x600.jpg";
  //       setData({ img: image })
  //     }
  //   });
  // }, []);

  // set alert

  // set loading

  return <MainContext.Provider
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
};

export default MainState;
