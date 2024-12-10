import { combineReducers, configureStore } from "@reduxjs/toolkit";
import favouritesReducer from "../reducers/favouritesReducer";
import CompanySearchReducer from "../reducers/CompanySearchReducer";
import queryReducer from "../reducers/queryReducer";
import jobsReducer from "../reducers/jobsReducer";

const rootReducer = combineReducers({
  favourites: favouritesReducer,
  companySearch: CompanySearchReducer,
  query: queryReducer,
  jobs: jobsReducer
});

const store = configureStore({
  reducer: rootReducer
});

export default store;
