import React from 'react';
import './App.css';

import Countries from './components/Countries';
import CountriesState from './context/countries/CountriesState';

function App() {
  return (
    <CountriesState>
      <div className="App">
        <Countries />
      </div>
    </CountriesState>
  );
}

export default App;
