import { combineReducers } from "redux";
import { reducer as reduxForm } from "redux-form";
import authReducer from "./authReducer";
import fileReducer from "./fileReducer";

export default combineReducers({
  auth: authReducer,
  file: fileReducer,
  form: reduxForm
});
