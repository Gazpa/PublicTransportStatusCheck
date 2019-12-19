import axios from "axios";

import {
  FETCH_BIKE_POINTS,
  CLEAR_BIKE_POINTS,
  CACHE_BIKE_API_CALL
} from "./types";

const ROOT_URL = `https://api.tfl.gov.uk/BikePoint`;

function cacheBikeApiCall(searchText, result) {
  return {
    type: CACHE_BIKE_API_CALL,
    payload: { searchText: searchText, data: result }
  };
}

export function setBikePointsFromCache(data) {
  return {
    type: FETCH_BIKE_POINTS,
    payload: data.data
  };
}

export function fetchBikePoints(searchText) {
  return function(dispatch) {
    axios.get(`${ROOT_URL}/Search?query=${searchText}`).then(response => {
      Promise.all([
        dispatch(cacheBikeApiCall(searchText.toLowerCase(), response.data)),
        dispatch({
          type: FETCH_BIKE_POINTS,
          payload: response.data
        })
      ]);
    });
  };
}

export function clearBikePoints() {
  return {
    type: CLEAR_BIKE_POINTS,
    payload: ""
  };
}
