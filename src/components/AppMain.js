import React, { useContext } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Countries from './Countries';
import CountriesContext from '../context/countries/countriesContext';

import CountryDetail from './CountryDetail';
import TitleBar from './TitleBar';

const AppMain = () => {
  const countriesContext = useContext(CountriesContext);

  const { darkMode } = countriesContext;

  let cssClass = darkMode ? 'dark' : 'light';

  return (
    <div className={cssClass}>
      <Router>
        <div>
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
    </div>
  );
};

export default AppMain;
