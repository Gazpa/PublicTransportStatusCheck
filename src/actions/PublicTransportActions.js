import axios from "axios";

import {
  FETCH_PUBLIC_TRANSPORT_STATUSES,
  SET_PUBLIC_TRANSPORT_STATUS,
  CLEAR_PUBLIC_TRANSPORT_STATUS
} from "./types";

const ROOT_URL = `https://api.tfl.gov.uk/Line/Mode/tube,overground,dlr/Status?detail=true`;

function compare(a, b) {
  if (a.modeName === b.modeName) {
    if (a.name.toLowerCase() < b.name.toLowerCase()) return -1;
    if (a.name.toLowerCase() > b.name.toLowerCase()) return 1;
    return 0;
  } else {
    if (a.modeName.toLowerCase() < b.modeName.toLowerCase()) return -1;
    if (a.modeName.toLowerCase() > b.modeName.toLowerCase()) return 1;
    return 0;
  }
}

export function fetchPublicTransportStatuses(mode) {
  // We could use mode to change the values to get from the API
  return function(dispatch) {
    axios.get(`${ROOT_URL}`).then(response => {
      let list = response.data;
      if (list) {
        list.sort(compare);
      }

      dispatch({
        type: FETCH_PUBLIC_TRANSPORT_STATUSES,
        payload: response.data
      });
    });
  };
}

export function setActivePublicTransportStatus(status) {
  return {
    type: SET_PUBLIC_TRANSPORT_STATUS,
    payload: status
  };
}

export function clearActivePublicTransportStatus() {
  return {
    type: CLEAR_PUBLIC_TRANSPORT_STATUS,
    payload: ""
  };
}
