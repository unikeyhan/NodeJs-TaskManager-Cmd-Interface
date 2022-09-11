import { combineReducers } from "redux";
import postReducer from "./posts/postReducer";

const rootReducers = combineReducers({
  postReducer,
});

export default rootReducers;
