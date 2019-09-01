import "isomorphic-fetch";
const getDataFromAPI = url =>
  fetch(url)
    .then(response => response.json())
    .then(json => json);

const fetchError = url => fetch(url);
export { getDataFromAPI, fetchError };
