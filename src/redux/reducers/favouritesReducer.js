import { ADD_TO_FAVOURITES } from "../actions";

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
    default:
      return state;
  }
};

export default favouritesReducer;
