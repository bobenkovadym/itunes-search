import React, { useReducer } from 'react';
import MainContext from './mainContext';
import mainReducer from './mainReducer';
// import { } from '../types';

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
    ],
    loading: true,
    alert: null
  };

  const [state, dispatch] = useReducer(mainReducer, initialState);

  // fetch artists

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
      loading: state.loading,
      alert: state.alert
    }}
  >
    {props.children}
  </MainContext.Provider>
};

export default MainState;
