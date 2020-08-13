import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import './App.css';

import Countries from './components/Countries';
import CountriesState from './context/countries/CountriesState';
import CountryDetail from './components/CountryDetail';
import TitleBar from './components/TitleBar';

function App() {
  return (
    <CountriesState>
      <Router>
        <div className="App" >
          <TitleBar />
          <Switch>
            <Route exact path="/" component={Countries} />
            <Route exact path="/CountryDetail/:name" component={CountryDetail} />
          </Switch>
        </div>
      </Router>
    </CountriesState>
  );
}

export default App;
