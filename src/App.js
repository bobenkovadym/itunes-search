import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import MainState from './context/MainState';

import Navbar from './components/layout/Navbar';
import Alert from './components/layout/Alert';
import Home from './components/pages/Home';
import About from './components/pages/About';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

const App = () => {
  return (
    <MainState>
      <Router>
        <Navbar />
        <div className="container">
          <Alert />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/about" component={About} />
          </Switch>
        </div>
      </Router>
    </MainState>
  );
};

export default App;
