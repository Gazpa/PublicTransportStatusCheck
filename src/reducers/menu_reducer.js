import { SET_MENU_OPTION } from "../actions/types";

export default function(state = {}, action) {
  switch (action.type) {
    case SET_MENU_OPTION:
      return { ...state, menuOption: action.payload };
    default:
      return state;
  }
}
