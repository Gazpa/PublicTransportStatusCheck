import { SET_MENU_OPTION } from "./types";

export function setMenuOption(option) {
  return {
    type: SET_MENU_OPTION,
    payload: option
  };
}
