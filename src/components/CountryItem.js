import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import CountriesContext from '../context/countries/countriesContext';

export const CountryItem = ({
  country: { name: countryName, capital, population, flag, region },
  darkMode,
}) => {
  let cssClass = darkMode ? 'dark' : 'light';

  const flexColFields = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    textAlign: 'justify',
    margin: '0px 0px',
    padding: '0px 10px',
    width: '267px',
    height: '176px',
  };

  return (
    <Link
      to={`/CountryDetail/${countryName}`}
      style={{ textDecoration: 'none' }}
    >
      <div
        style={{
          width: '267px',
          height: '336px',
          textAlign: 'justify',
          margin: '20px 0px',
        }}
      >
        <img
          src={flag}
          alt=""
          style={{ width: '267px', height: '160px' }}
          className={cssClass}
        />
        <div className={cssClass} style={flexColFields}>
          <div style={{margin: '0px 20px'}}>
            <p style={{ fontWeight: 'bold', margin: '20px 0px' }}>
              {countryName}
            </p>
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
      </div>
    </Link>
  );
};

export default CountryItem;
