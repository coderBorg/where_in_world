import {
  GET_COUNTRIES,
  GET_COUNTRY_DETAIL,
  GET_COUNTRY_DETAIL_BORDERS,
  UPDATE_SEARCH_TEXT
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
  }
};
