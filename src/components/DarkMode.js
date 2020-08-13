import React, { useContext } from 'react';

import CountriesContext from '../context/countries/countriesContext';

const DarkMode = () => {
  const countriesContext = useContext(CountriesContext);

  const { darkMode, setDarkMode } = countriesContext;

  const onClick = () => {
      console.log(`setting darkMode to ${!darkMode}`);
    setDarkMode(!darkMode);
  };

  return <div onClick={onClick}>Dark Mode</div>;
};

export default DarkMode;
