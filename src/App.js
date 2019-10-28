import React from 'react';
import MainState from './context/MainState';

import Header from './components/layout/Header';
import Alert from './components/layout/Alert';
import Search from './components/content/Search';
import Content from './components/content/Content';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

const App = () => {
  return (
    <MainState>
      <Header />
      <div className="container">
        <Alert />
        <Search />
        <Content />
      </div>
    </MainState>
  );
};

export default App;
