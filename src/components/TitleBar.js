import React, { Fragment, useContext } from 'react';
import DarkMode from './DarkMode';
import CountriesContext from '../context/countries/countriesContext';

const TitleBar = () => {
  const countriesContext = useContext(CountriesContext);

  const { darkMode } = countriesContext;

  let cssClass = darkMode ? 'dark' : 'light';

  return (
    <Fragment>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
        }}
        className={cssClass + ' topLvlPdg'} 
      >
        <div>Where in the world?</div>
        <DarkMode />
      </div>
    </Fragment>
  );
};

export default TitleBar;
