import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import CountriesContext from '../context/countries/countriesContext';

export const BorderCountryItem = ({ name }) => {
  const countriesContext = useContext(CountriesContext);
  const { getCountryDetail } = countriesContext;

  return (
    <Link to={`/CountryDetail/${name}`} style={{ textDecoration: 'none' }}>
      <div
        style={{
          borderStyle: 'solid',
          borderColor: 'blue',
          borderWidth: 'medium',
          width: '100px',
          margin: '5px',
          borderRadius: '5px',
        }}
      >
        <p>{name}</p>
      </div>
    </Link>
  );
};

export default BorderCountryItem;
