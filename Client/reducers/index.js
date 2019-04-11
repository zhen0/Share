import { combineReducers } from "redux";
import kitReducer from "./kit";
import userReducer from "./user";

const rootReducer = combineReducers({
  kitReducer,
  userReducer
});

export default rootReducer;
