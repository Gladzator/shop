import { FILE_UPLOAD, GET_IMAGES, SUBMIT_PRODUCT } from "../actions/types";

export default function(state = null, action) {
  switch (action.type) {
    case FILE_UPLOAD:
      return action.payload || false;
    case SUBMIT_PRODUCT:
      return action.payload || false;
    case GET_IMAGES:
      return action.payload || false;
    default:
      return state;
  }
}
