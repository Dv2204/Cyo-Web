import { combineReducers } from "redux";
import ExampleReducer from "./ExampleReducer";

//combine multiple reducers
export default combineReducers({
  //reducers!!
  Example: ExampleReducer,
});