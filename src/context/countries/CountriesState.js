import React, { useReducer } from 'react';
import axios from 'axios';
import CountriesContext from './countriesContext';
import CountriesReducer from './countriesReducer';
import { GET_COUNTRIES, GET_COUNTRY_DETAIL, GET_COUNTRY_DETAIL_BORDERS } from '../types';

const CountriesState = (props) => {
  const initialState = {
    countries: [
      // Temporary data
      { name: 'Norway', population: 11000, capital: 'Oslo' },
      { name: 'Canada', population: 22000, capital: 'Ottawa' },
    ],
    countryDetail: {},
    countryDetailBorders: []
  };

  const [state, dispatch] = useReducer(CountriesReducer, initialState);

  // Get all countries
  const getAllCountries = async () => {
    const res = await axios.get('https://restcountries.eu/rest/v2/all');

    dispatch({
      type: GET_COUNTRIES,
      payload: res.data,
    });
  };

  // Get country detail
  const getCountryDetail = async (name) => {
    const res = await axios.get(`https://restcountries.eu/rest/v2/name/${name}`);

    console.log("country detail data:");
    console.log(res.data);

    dispatch({
      type: GET_COUNTRY_DETAIL,
      payload: res.data[0],
    });

    // let borderNames = res.data[0].borders.map((b) => {await getCountryNameFrCode(b)});

    console.log("borders:", res.data[0].borders);

    let borderNames = [];
    let borderCode = '';
    for (borderCode of res.data[0].borders){
      console.log('bordercode: ', borderCode);
      let borderName = await getCountryNameFrCode(borderCode);
      borderNames.push(borderName);
    }
    // res.data[0].borders.forEach(borderNames.push())

    console.log("borderNames: ", borderNames);

    dispatch({
      type: GET_COUNTRY_DETAIL_BORDERS,
      payload: borderNames
    });


  };

  const getCountryNameFrCode = async (code) => {

    console.log("code: ", code);

    const res = await axios.get(`https://restcountries.eu/rest/v2/alpha/${code}`);

    console.log("res.data: ", res.data);
    console.log("name: ", res.data.name);

    return res.data.name;

  }

  return (
    <CountriesContext.Provider
      value={{
        countries: state.countries,
        countryDetail: state.countryDetail,
        countryDetailBorders: state.countryDetailBorders,
        getAllCountries,
        getCountryDetail
      }}
    >
      {props.children}
    </CountriesContext.Provider>
  );
};

export default CountriesState;
