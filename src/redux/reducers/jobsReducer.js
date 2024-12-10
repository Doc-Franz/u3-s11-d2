import { JOBS } from "../actions";

const initialState = {
  job: []
};

const jobsReducer = (state = initialState, action) => {
  switch (action.type) {
    case JOBS:
      return { ...state, jobs: action.payload };
    default:
      return state;
  }
};

export default jobsReducer;
