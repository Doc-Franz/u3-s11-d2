import { SEARCH_RESULTS } from "../actions";

const initialState = {
  companies: {
    content: []
  }
};

const CompanySearchReducer = (state = initialState, action) => {
  switch (action.type) {
    case SEARCH_RESULTS:
      return {
        ...state,
        companies: {
          ...state.companies,
          content: [...state.companies.content, action.payload]
        }
      };

    default:
      return state;
  }
};

export default CompanySearchReducer;
