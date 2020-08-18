import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import CountriesContext from '../context/countries/countriesContext';

export const CountryItem = ({
  country: { name, capital, population, flag, region },
  darkMode,
}) => {
  let cssClass = darkMode ? 'dark' : 'light';

  return (
    <Link to={`/CountryDetail/${name}`} style={{ textDecoration: 'none' }}>
      <div style={{ width: '205px', height: '300px', textAlign: 'justify' }}>
        <img src={flag} alt="" style={{ width: '200px' }} className={cssClass} />
        <div
          className={cssClass}
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'flex-start',
            textAlign: 'justify',
            margin: '0px 0px',
            padding: '0px 10px',
            width: '200px',
          }}
        >
          <p style={{ fontWeight: 'bold' }}>{name}</p>
          <p>
            <span className="ctry-detail-fld-name">Population:</span>{' '}
            {population}
          </p>
          <p>
            <span className="ctry-detail-fld-name">Region:</span> {region}
          </p>
          <p>
            <span className="ctry-detail-fld-name">Capital:</span> {capital}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default CountryItem;
