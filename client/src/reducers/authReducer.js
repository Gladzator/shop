import { FETCH_USER, LOGIN_USER, LOGOUT_USER } from "../actions/types";

export default function(state = null, action) {
  switch (action.type) {
    case FETCH_USER:
      return action.payload || false;
    case LOGIN_USER:
      return action.payload || false;
    case LOGOUT_USER:
      return null;
    default:
      return state;
  }
}
