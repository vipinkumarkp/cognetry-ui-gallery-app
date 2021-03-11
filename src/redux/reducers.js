import { combineReducers } from "redux";
import albumPhotoList from "./albumPhotoList/reducers.js";
import albumList from "./albumList/reducers.js";

export default combineReducers({
  albumList,
  albumPhotoList
});
