import React from 'react';


import './App.css';

import Countries from './components/Countries';
import CountriesState from './context/countries/CountriesState';
import CountryDetail from './components/CountryDetail';
import TitleBar from './components/TitleBar';
import AppMain from './components/AppMain';

function App() {
  return (
    <CountriesState>
      <div className="App">
        <AppMain />
      </div>
    </CountriesState>
  );
}

export default App;
