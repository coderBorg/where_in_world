import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import CountriesContext from '../context/countries/countriesContext';

export const BorderCountryItem = ({ name }) => {
  const countriesContext = useContext(CountriesContext);
  const { darkMode, getCountryDetail } = countriesContext;

  let cssClass = darkMode ? 'dark btn-dark' : 'light btn-light';

  return (
    <Link to={`/CountryDetail/${name}`} style={{ textDecoration: 'none' }}>
      <div
        className={cssClass}
      >
        <p style={{ textAlign: 'center' }}>{name}</p>
      </div>
    </Link>
  );
};

export default BorderCountryItem;
