import React, { useContext } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import './App.css';

import Countries from './components/Countries';
import CountriesState from './context/countries/CountriesState';
import CountryDetail from './components/CountryDetail';
import TitleBar from './components/TitleBar';

import CountriesContext from './context/countries/countriesContext';

function App() {
  const countriesContext = useContext(CountriesContext);

  const { darkMode } = countriesContext;

  let cssClass = darkMode ? 'dark' : 'light';
  cssClass += " App"

  return (
    <CountriesState>
      <Router>
        <div className={cssClass} style={{ margin: '20px 50px' }}>
          <TitleBar />
          <Switch>
            <Route exact path="/" component={Countries} />
            <Route
              exact
              path="/CountryDetail/:name"
              component={CountryDetail}
            />
          </Switch>
        </div>
      </Router>
    </CountriesState>
  );
}

export default App;
