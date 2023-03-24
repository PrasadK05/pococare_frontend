import {
  AUTH_LOG_IN_ERROR,
  AUTH_LOG_IN_LOADING,
  AUTH_LOG_IN_SUCCESS,
} from "./auth.type";
import axios from "axios";
import Cookies from "js-cookie";

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
    let res = await axios.post(
      "https://drab-tan-chick-vest.cyclic.app/user/login",
      data,
      { withCredentials: true }
    );
    console.log(res);

    if (res.data.status) {
      dispatch(authSucc(res.data));
      Cookies.set("token", res.data.token);
      Cookies.set("refreshtoken", res.data.refreshToken);
      return true;
    } else {
      dispatch(authFail());
      return false;
    }
  } catch (error) {
    console.log(error);
    dispatch(authFail());
    return false;
  }
};
