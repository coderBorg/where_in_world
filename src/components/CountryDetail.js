import React, { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';

import CountriesContext from '../context/countries/countriesContext';
import BorderCountryItem from './BorderCountryItem';
import CountryDetailFields1 from './CountryDetailFields1';
import CountryDetailFields2 from './CountryDetailFields2';

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
  let cssDarkModeClass = darkMode ? 'dark' : 'light';

  return (
    <div className={'topLvlPdg' + ' ' + cssDarkModeClass}>
      <Link to={'/'} style={{ textDecoration: 'none' }}>
        <div className={cssBtnClass}>
          <p>Back</p>
        </div>
      </Link>
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'space-around',
        }}
      >
        <div style={{ display: 'flex', flexWrap: 'wrap' }}>
          <div>
            <img src={countryDetail.flag} alt="" style={{ height: '300px' }} />
          </div>

          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-around',
              textAlign: 'justify',
              margin: '0px 60px',
              height: '300px',
            }}
          >
            <p style={{ fontWeight: 'bold' }}>{name}</p>
            <div
              style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'flex-start',
                textAlign: 'justify',
                margin: '0px 0px',
              }}
            >
              <CountryDetailFields1 />
              <CountryDetailFields2 />
            </div>
            <div>
              <div
                style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  flexDirection: 'row',
                }}
              >
                <p className="ctry-detail-fld-name">Border Countries:</p>
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
  );
};

export default CountryDetail;
