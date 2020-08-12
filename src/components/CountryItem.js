import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import CountriesContext from '../context/countries/countriesContext';

export const CountryItem = ({
  country: { name, capital, population, flag, region },
  darkMode,
}) => {
  return (
    <div style={{ width: '200px' }}>
      <img src={flag} alt="" style={{ width: '100px' }} />
      <p>{name}</p>
      <p className={darkMode ? 'dark' : 'light'}>Population: {population}</p>
      <p>Region: {region}</p>
      <p>Capital: {capital}</p>
      <Link to={`/CountryDetail/${name}`}>More</Link>
    </div>
  );
};

export default CountryItem;
