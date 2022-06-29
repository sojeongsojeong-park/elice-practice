import { combineReducers } from "redux";
import counterReducer from "./counterReducer";

const rootReducer = combineReducers({
  //key: reducer이름
  //value: reducer 함수
  counterReducer,
  
});

export default rootReducer;