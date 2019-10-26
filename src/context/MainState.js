import React, { useReducer } from 'react';
import MainContext from './mainContext';
import mainReducer from './mainReducer';
// import { } from '../types';

const MainState = props => {
  const initialState = {
    artists:[
      {"wrapperType":"artist", "artistType":"Artist", "artistName":"Justin Timberlake", "artistLinkUrl":"https://music.apple.com/us/artist/justin-timberlake/398128?uo=4", "artistId":398128, "amgArtistId":373055, "primaryGenreName":"Pop", "primaryGenreId":14},
      {"wrapperType":"artist", "artistType":"Artist", "artistName":"Post Malone", "artistLinkUrl":"https://music.apple.com/us/artist/post-malone/966309175?uo=4", "artistId":966309175, "amgArtistId":3128337, "primaryGenreName":"Hip-Hop/Rap", "primaryGenreId":18},
      {"wrapperType":"artist", "artistType":"Artist", "artistName":"Justin Moore", "artistLinkUrl":"https://music.apple.com/us/artist/justin-moore/272639185?uo=4", "artistId":272639185, "amgArtistId":1114558, "primaryGenreName":"Country", "primaryGenreId":6},
      {"wrapperType":"artist", "artistType":"Artist", "artistName":"Justin", "artistLinkUrl":"https://music.apple.com/us/artist/justin/1450522204?uo=4", "artistId":1450522204, "primaryGenreName":"Hip-Hop/Rap", "primaryGenreId":18},
      {"wrapperType":"artist", "artistType":"Artist", "artistName":"Justin Moore", "artistLinkUrl":"https://music.apple.com/us/artist/justin-moore/272639185?uo=4", "artistId":272639185, "amgArtistId":1114558, "primaryGenreName":"Country", "primaryGenreId":6},
      {"wrapperType":"artist", "artistType":"Artist", "artistName":"Justin", "artistLinkUrl":"https://music.apple.com/us/artist/justin/1450522204?uo=4", "artistId":1450522204, "primaryGenreName":"Hip-Hop/Rap", "primaryGenreId":18},
      {"wrapperType":"artist", "artistType":"Artist", "artistName":"Bon Iver", "artistLinkUrl":"https://music.apple.com/us/artist/bon-iver/273428126?uo=4", "artistId":273428126, "amgArtistId":991558, "primaryGenreName":"Alternative", "primaryGenreId":20},
      {"wrapperType":"artist", "artistType":"Artist", "artistName":"Austin Mahone", "artistLinkUrl":"https://music.apple.com/us/artist/austin-mahone/426978015?uo=4", "artistId":426978015, "amgArtistId":2696821, "primaryGenreName":"Pop", "primaryGenreId":14},
      {"wrapperType":"artist", "artistType":"Artist", "artistName":"Ross Lynch", "artistLinkUrl":"https://music.apple.com/us/artist/ross-lynch/502055401?uo=4", "artistId":502055401, "amgArtistId":2594128, "primaryGenreName":"Soundtrack", "primaryGenreId":16},
      {"wrapperType":"artist", "artistType":"Artist", "artistName":"Big K.R.I.T.", "artistLinkUrl":"https://music.apple.com/us/artist/big-k-r-i-t/159204910?uo=4", "artistId":159204910, "amgArtistId":794190, "primaryGenreName":"Hip-Hop/Rap", "primaryGenreId":18},
      {"wrapperType":"artist", "artistType":"Artist", "artistName":"Justin Nozuka", "artistLinkUrl":"https://music.apple.com/us/artist/justin-nozuka/200914712?uo=4", "artistId":200914712, "amgArtistId":887637, "primaryGenreName":"Pop", "primaryGenreId":14},
      {"wrapperType":"artist", "artistType":"Artist", "artistName":"Justin", "artistLinkUrl":"https://music.apple.com/us/artist/justin/6186376?uo=4", "artistId":6186376, "amgArtistId":939837, "primaryGenreName":"Rock", "primaryGenreId":21},
      {"wrapperType":"artist", "artistType":"Artist", "artistName":"Louis Tomlinson", "artistLinkUrl":"https://music.apple.com/us/artist/louis-tomlinson/471260295?uo=4", "artistId":471260295, "amgArtistId":2557380, "primaryGenreName":"Dance", "primaryGenreId":17},
      {"wrapperType":"artist", "artistType":"Artist", "artistName":"Jeffery Austin", "artistLinkUrl":"https://music.apple.com/us/artist/jeffery-austin/1042735454?uo=4", "artistId":1042735454, "amgArtistId":3164103, "primaryGenreName":"Pop", "primaryGenreId":14},
      {"wrapperType":"artist", "artistType":"Author", "artistName":"Justin Torres", "artistLinkUrl":"https://books.apple.com/us/author/justin-torres/id460170322?uo=4", "artistId":460170322, "primaryGenreName":"Fiction & Literature", "primaryGenreId":9031},
      {"wrapperType":"artist", "artistType":"Artist", "artistName":"Patti Austin", "artistLinkUrl":"https://music.apple.com/us/artist/patti-austin/40542?uo=4", "artistId":40542, "amgArtistId":3589, "primaryGenreName":"Jazz", "primaryGenreId":11},
      {"wrapperType":"artist", "artistType":"Artist", "artistName":"Justin Townes Earle", "artistLinkUrl":"https://music.apple.com/us/artist/justin-townes-earle/216060599?uo=4", "artistId":216060599, "amgArtistId":939890, "primaryGenreName":"Singer/Songwriter", "primaryGenreId":10},
      {"wrapperType":"artist", "artistType":"Artist", "artistName":"Landon Austin", "artistLinkUrl":"https://music.apple.com/us/artist/landon-austin/272739505?uo=4", "artistId":272739505, "amgArtistId":2988742, "primaryGenreName":"Singer/Songwriter", "primaryGenreId":10},
      {"wrapperType":"artist", "artistType":"Artist", "artistName":"3LAU", "artistLinkUrl":"https://music.apple.com/us/artist/3lau/519374658?uo=4", "artistId":519374658, "amgArtistId":2505404, "primaryGenreName":"Dance", "primaryGenreId":17},
      {"wrapperType":"artist", "artistType":"Author", "artistName":"Austin Wright", "artistLinkUrl":"https://books.apple.com/us/author/austin-wright/id429095130?uo=4", "artistId":429095130, "primaryGenreName":"Fiction & Literature", "primaryGenreId":9031},
      {"wrapperType":"artist", "artistType":"Author", "artistName":"Justin Jordan", "artistLinkUrl":"https://books.apple.com/us/author/justin-jordan/id269350084?uo=4", "artistId":269350084, "primaryGenreName":"Graphic Novels", "primaryGenreId":10015}
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
      loading: state.loading,
      alert: state.alert
    }}
  >
    {props.children}
  </MainContext.Provider>
};

export default MainState;
