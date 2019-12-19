import {
  FETCH_PUBLIC_TRANSPORT_STATUSES,
  SET_PUBLIC_TRANSPORT_STATUS,
  CLEAR_PUBLIC_TRANSPORT_STATUS
} from "../actions/types";

export default function(state = {}, action) {
  switch (action.type) {
    case FETCH_PUBLIC_TRANSPORT_STATUSES:
      return { ...state, tflStatuses: [...action.payload] };
    case SET_PUBLIC_TRANSPORT_STATUS:
      return { ...state, activeStatus: { ...action.payload } };
    case CLEAR_PUBLIC_TRANSPORT_STATUS:
      var newState = { ...state };
      delete newState.activeStatus;
      return newState;
    default:
      return state;
  }
}
