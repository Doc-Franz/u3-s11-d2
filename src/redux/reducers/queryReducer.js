import { QUERY } from "../actions";

const initialState = {
  query: ""
};

const queryReducer = (state = initialState, action) => {
  switch (action.type) {
    case QUERY:
      return { ...state, query: action.payload };

    default:
      return state;
  }
};

export default queryReducer;
