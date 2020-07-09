import { GET_COUNTRIES } from '../types';

export default (state, action) => {
  switch (action.type) {
    case GET_COUNTRIES:
      return {
        ...state,
        countries: action.payload,
      };
  }
};

