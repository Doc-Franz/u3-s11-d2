export const ADD_TO_FAVOURITES = "ADD_TO_FAVOURITES";
export const SEARCH_RESULTS = "SEARCH_RESULTS";
export const QUERY = "QUERY";
export const JOBS = "JOBS";

export const addToFavourites = (companyName) => ({ type: ADD_TO_FAVOURITES, payload: companyName });
export const searchResults = (companyName) => ({ type: SEARCH_RESULTS, payload: companyName });
export const setQuery = (query) => ({ type: QUERY, payload: query });
export const setJobs = (jobs) => ({ type: JOBS, payload: jobs });

export const handleSubmit = (query) => {
  return async (e, dispatch, getState) => {
    e.preventDefault();

    try {
      const response = await fetch("https://strive-benchmark.herokuapp.com/api/jobs?search=" + query + "&limit=20");
      if (response.ok) {
        const { data } = await response.json();
        dispatch(setJobs(data));
        data.map((job) => {
          dispatch(searchResults(job.company_name));
        });
      } else {
        alert("Error fetching results");
      }
    } catch (error) {
      console.log(error);
    }
  };
};
