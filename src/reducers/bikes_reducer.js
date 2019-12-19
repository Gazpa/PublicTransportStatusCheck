import {
  FETCH_BIKE_POINTS,
  CLEAR_BIKE_POINTS,
  CACHE_BIKE_API_CALL
} from "../actions/types";

export default function(state = {}, action) {
  switch (action.type) {
    case FETCH_BIKE_POINTS:
      return { ...state, bikePoints: [...action.payload] };
    case CLEAR_BIKE_POINTS:
      let newStateBeforeRemoval = { ...state };
      delete newStateBeforeRemoval.bikePoints;
      return newStateBeforeRemoval;
    case CACHE_BIKE_API_CALL:
      let newStateBeforeCached = { ...state };
      let arrayCached = newStateBeforeCached.cachedBikeApiCalls;

      if (arrayCached instanceof Array) {
        let indexObj = arrayCached.findIndex(elem => {
          return elem.searchText === action.payload.searchText;
        });
        if (indexObj >= 0) {
          arrayCached.splice(indexObj, 1);
        }
        arrayCached.push(action.payload);
      } else {
        arrayCached = [];
      }

      arrayCached.push(action.payload);
      newStateBeforeCached.cachedBikeApiCalls = arrayCached;
      return newStateBeforeCached;
    default:
      return state;
  }
}
