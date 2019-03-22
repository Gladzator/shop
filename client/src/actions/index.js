import axios from "axios";
import {
  FETCH_USER,
  LOGIN_USER,
  LOGOUT_USER,
  FILE_UPLOAD,
  GET_IMAGES,
  SUBMIT_PRODUCT
} from "./types";
import history from "../history";

export const createUser = user => async dispatch => {
  const res = await axios.post("/create", user);
  history.push("/");
  dispatch({ type: FETCH_USER, payload: res.data });
};

export const loginUser = user => async dispatch => {
  const res = await axios.post("/login", user);

  dispatch({ type: LOGIN_USER, payload: res.data });
};

export const fetchUser = user => async dispatch => {
  dispatch({ type: FETCH_USER, payload: user });
};

export const logoutUser = () => async dispatch => {
  const res = await axios.get("/logout");

  dispatch({ type: LOGOUT_USER, payload: res.data });
};

export const fileUpload = value => async dispatch => {
  const resImage = await axios.post("/upload_image", value.formData);

  const res = await axios.post("/upload", {
    userId: value.userId,
    imageName: resImage.data,
    productId: value.productId
  });

  dispatch({ type: FILE_UPLOAD, payload: res.data });
  history.push("/dashboard");
};

export const getImages = () => async dispatch => {
  const res = await axios.get("/images");

  dispatch({ type: GET_IMAGES, payload: res.data });
};

export const submitProduct = value => async dispatch => {
  const res = await axios.post("/product_submit", value);
  history.push("/image_new");
  dispatch({ type: SUBMIT_PRODUCT, payload: res.data });
};

export const fetchProducts = value => async dispatch => {
  const res = await axios.post("/fetch_products", value);

  dispatch({ type: FILE_UPLOAD, payload: res.data });
};
