import {
  AUTH_LOG_IN_ERROR,
  AUTH_LOG_IN_LOADING,
  AUTH_LOG_IN_SUCCESS,
  AUTH_LOG_OUT,
} from "./auth.type";
import axios from "axios";

export const authSucc = (payload) => {
  return {
    type: AUTH_LOG_IN_SUCCESS,
    payload,
  };
};

export const authFail = () => {
  return {
    type: AUTH_LOG_IN_ERROR,
  };
};

export const authLoad = () => {
  return {
    type: AUTH_LOG_IN_LOADING,
  };
};

export const loginProcess = (data) => async (dispatch) => {
  try {
    dispatch(authLoad);
    let res = await axios.post("https://drab-tan-chick-vest.cyclic.app/user/login", data, { withCredentials: true });
    console.log(res);

    if (res.data.status) {
      dispatch(authSucc(res.data));
      return true;
    } else {
      dispatch(authFail());
      return false;
    }
  } catch (error) {
    dispatch(authFail());
    return false;
  }
};
