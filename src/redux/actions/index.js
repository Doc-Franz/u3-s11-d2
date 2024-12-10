export const ADD_TO_FAVOURITES = "ADD_TO_FAVOURITES";
export const SEARCH_RESULTS = "SEARCH_RESULTS";
export const JOBS = "JOBS";
export const REMOVE_FROM_FAVOURITES = "REMOVE_FROM_FAVOURITES";

export const addToFavourites = (companyName) => ({ type: ADD_TO_FAVOURITES, payload: companyName });
export const removeFromFavourites = (companyName) => ({ type: REMOVE_FROM_FAVOURITES, payload: companyName });
export const searchResults = (index) => ({ type: SEARCH_RESULTS, payload: index });
export const setJobs = (jobs) => ({ type: JOBS, payload: jobs });

export const getJobs = (query) => {
  return async (dispatch) => {
    try {
      const response = await fetch("https://strive-benchmark.herokuapp.com/api/jobs?search=" + query + "&limit=20");
      if (response.ok) {
        const { data } = await response.json();
        dispatch(setJobs(data));
      } else {
        alert("Error fetching results");
      }
    } catch (error) {
      console.log(error);
    }
  };
};
