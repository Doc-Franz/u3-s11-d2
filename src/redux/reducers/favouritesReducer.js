import { ADD_TO_FAVOURITES, REMOVE_FROM_FAVOURITES } from "../actions";

const initialState = {
  favouritesCompanies: {
    content: []
  }
};

const favouritesReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_FAVOURITES:
      return {
        ...state,
        favouritesCompanies: {
          ...state.favouritesCompanies,
          content: [...state.favouritesCompanies.content, action.payload]
        }
      };

    case REMOVE_FROM_FAVOURITES:
      return {
        ...state,
        favouritesCompanies: {
          ...state.favouritesCompanies,
          content: state.favouritesCompanies.content.filter((_, i) => i !== action.payload)
        }
      };

    default:
      return state;
  }
};

export default favouritesReducer;
