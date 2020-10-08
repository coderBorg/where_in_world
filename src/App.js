import React from 'react';


import './App.css';

import CountriesState from './context/countries/CountriesState';
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
