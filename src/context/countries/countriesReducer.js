import {
  GET_COUNTRIES,
  GET_COUNTRY_DETAIL,
  GET_COUNTRY_DETAIL_BORDERS,
  UPDATE_SEARCH_TEXT,
  UPDATE_FILTER_VALUE,
  UPDATE_FILTERED_COUNTRIES,
  SET_DARK_MODE,
  GET_COUNTRY_DETAIL_CURRENCIES,
} from '../types';

export default (state, action) => {
  switch (action.type) {
    case GET_COUNTRIES:
      return {
        ...state,
        countries: action.payload,
      };
    case GET_COUNTRY_DETAIL:
      return {
        ...state,
        countryDetail: action.payload,
      };
    case GET_COUNTRY_DETAIL_BORDERS:
      return {
        ...state,
        countryDetailBorders: action.payload,
      };
    case UPDATE_SEARCH_TEXT:
      return {
        ...state,
        searchText: action.payload,
      };
    case UPDATE_FILTER_VALUE:
      return {
        ...state,
        filterValue: action.payload,
      };
    case UPDATE_FILTERED_COUNTRIES:
      return {
        ...state,
        filteredCountries: action.payload,
      };
    case SET_DARK_MODE:
      return {
        ...state,
        darkMode: action.payload,
      };
    case GET_COUNTRY_DETAIL_CURRENCIES:
      return {
        ...state,
        countryDetailCurrencies: action.payload,
      };
  }
};
