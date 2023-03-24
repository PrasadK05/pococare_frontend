import axios from "axios";
import { authSucc } from "../auth/auth.actions";
import { POST_LOADING, POST__ERROR, POST__SUCCESS } from "./post.type";
import Cookies from "js-cookie";

export const postSucc = (payload) => {
  return {
    type: POST__SUCCESS,
    payload,
  };
};

export const postFail = () => {
  return {
    type: POST__ERROR,
  };
};

export const postLoad = () => {
  return {
    type: POST_LOADING,
  };
};

export const getPost = (tk, rt) => async (dispatch) => {
  let config = {
    headers: {
      token: tk,
    },
  };
  try {
    dispatch(postLoad);
    let res = await axios.get("https://drab-tan-chick-vest.cyclic.app/post", config);

    // console.log(res);

    if (res.status == 200) {
      dispatch(postSucc(res.data));
      return true;
    }
  } catch (error) {
    // console.log(rt);

    let config1 = {
      headers: {
        refreshtoken: rt,
      },
    };
    try {
      let resp = await axios.get(
        "https://drab-tan-chick-vest.cyclic.app/user/refresh_token",
        config1,
        { withCredentials: true }
      );
      // console.log(resp);
      Cookies.set("token", resp.data.token);
      if (resp.status == 200) {
        dispatch(authSucc(resp.data));
        try {
          let re = await axios.get("https://drab-tan-chick-vest.cyclic.app/post", {
            headers: { token: resp.data.token },
          });
          if (re.status == 200) {
            dispatch(postSucc(re.data));
            return true;
          } else {
            dispatch(postFail());
            return false;
          }
        } catch (error) {
          // console.log(error);
          dispatch(postFail());
          return false;
        }
      }
    } catch (error) {
      // console.log(error);
      dispatch(postFail());
      return false;
    }
  }
};
