import React, { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';

import CountriesContext from '../context/countries/countriesContext';

import CountryDetailFields1 from './CountryDetailFields1';
import CountryDetailFields2 from './CountryDetailFields2';
import CountryDetailBorders from './CountryDetailBorders';

import './CountryDetail.css';

export const CountryDetail = ({ match }) => {
  const countriesContext = useContext(CountriesContext);

  const { darkMode, countryDetail, getCountryDetail } = countriesContext;

  useEffect(() => {
    getCountryDetail(match.params.name);
    // eslint-disable-next-line
  }, [countryDetail]);

  const { name: countryName } = countryDetail;

  let cssBtnClass = darkMode ? 'dark btn-dark' : 'light btn-light';
  let cssDarkModeClass = darkMode ? 'dark' : 'light';

  return (
    <div className={'topLvlPdg phone' + ' ' + cssDarkModeClass}>
      <Link to={'/'} style={{ textDecoration: 'none' }}>
        <div className={cssBtnClass}>
          <p>Back</p>
        </div>
      </Link>
      <div className="flex_row_overall">
        <div style={{ display: 'flex', flexWrap: 'wrap' }} className="phone">
          <div>
            <img src={countryDetail.flag} alt="" id="flag" />
          </div>
          <div className="flex_col_dtl_info phone">
            <p style={{ fontWeight: 'bold' }}>{countryName}</p>
            <div className="flex_row_dtl_fields phone">
              <CountryDetailFields1 />
              <CountryDetailFields2 />
            </div>
            <CountryDetailBorders />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CountryDetail;
