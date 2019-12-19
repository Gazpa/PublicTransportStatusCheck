import { combineReducers } from "redux";
import publicTransportReducer from "./publicTransport_reducer";
import bikesReducer from "./bikes_reducer";
import menuReducer from "./menu_reducer";

const rootReducer = combineReducers({
  publicTransport: publicTransportReducer,
  bikes: bikesReducer,
  menu: menuReducer
});

export default rootReducer;
