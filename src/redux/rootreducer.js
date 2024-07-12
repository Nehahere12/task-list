import { combineReducers } from "redux";
import { operations } from "./todoapp/reducers/operations";
// function to combine all the reducers
export const rootreducer = combineReducers({
  // operation reducer
  operations,
});
