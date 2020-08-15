import React, { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';

import CountriesContext from '../context/countries/countriesContext';
import BorderCountryItem from './BorderCountryItem';

export const CountryDetail = ({ match }) => {
  const countriesContext = useContext(CountriesContext);

  const {
    darkMode,
    countryDetail,
    countryDetailBorders,
    countryDetailCurrencies,
    countryDetailLanguages,
    getCountryDetail,
  } = countriesContext;

  useEffect(() => {
    getCountryDetail(match.params.name);
    // eslint-disable-next-line
  }, [countryDetail]);

  const {
    name,
    nativeName,
    population,
    region,
    subregion,
    capital,
    topLevelDomain,
    currencies,
  } = countryDetail;

  let cssBtnClass = darkMode ? 'dark btn-dark' : 'light btn-light';

  return (
    <div>
      <div className={cssBtnClass}>
        <Link to={'/'} style={{ textDecoration: 'none' }}>
          Back
        </Link>
      </div>
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        <div>
          <img src={countryDetail.flag} alt="" style={{ width: '400px' }} />
        </div>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'flex-start',
            textAlign: 'justify',
            margin: '20px 20px',
          }}
        >
          <div
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'flex-start',
              textAlign: 'justify',
              margin: '20px 20px',
            }}
          >
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'flex-start',
                textAlign: 'justify',
                margin: '20px 20px',
              }}
            >
              <p style={{ fontWeight: 'bold' }}>{name}</p>
              <div style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'flex-start',
                textAlign: 'justify',
                margin: '20px 20px',
              }}>
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'flex-start',
                    textAlign: 'justify',
                    margin: '20px 20px',
                  }}
                >
                  <p>Native Name: {nativeName}</p>
                  <p>Population: {population}</p>
                  <p>Region: {region}</p>
                  <p>Sub Region: {subregion}</p>
                  <p>Capital: {capital}</p>
                </div>
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'flex-start',
                    textAlign: 'justify',
                    margin: '20px 20px',
                  }}
                >
                  <p>Top Level Domain: {topLevelDomain}</p>
                  <p>Currencies:</p>
                  {countryDetailCurrencies.map((cur) => (
                    <p>{cur}</p>
                  ))}
                  <p>Languages:</p>
                  {countryDetailLanguages.map((cur) => (
                    <p>{cur}</p>
                  ))}
                </div>
              </div>
              <div>
              <div
                style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  flexDirection: 'row',
                }}
              >
                <p>Border Countries:</p>
                <div
                  style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    flexDirection: 'row',
                  }}
                >
                  {countryDetailBorders.map((name) => (
                    <BorderCountryItem name={name} />
                  ))}
                </div>
              </div>
            </div>
            </div>

            
          </div>
        </div>
      </div>
    </div>
  );
};

export default CountryDetail;
