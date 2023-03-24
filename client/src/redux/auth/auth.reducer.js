import {
  AUTH_LOG_IN_ERROR,
  AUTH_LOG_IN_LOADING,
  AUTH_LOG_IN_SUCCESS,
} from "./auth.type";

export const authInitalState = {
  loading: false,
  data: {
    token: "",
    refreshtoken: "",
    isAuthenticated: false,
  },
  error: false,
};

export const authReducer = (state = authInitalState, action) => {
  switch (action.type) {
    case AUTH_LOG_IN_SUCCESS: {
      return {
        ...state,
        loading: false,
        error: false,
        data: {
          refreshtoken: action.payload.refreshToken,
          token: action.payload.token,
          isAuthenticated: true,
        },
      };
    }

    case AUTH_LOG_IN_ERROR: {
      return {
        ...state,
        loading: false,
        error: true,
        data: {
          refreshtoken: "",
          token: "",
          isAuthenticated: false,
        },
      };
    }
    case AUTH_LOG_IN_LOADING: {
      return {
        ...state,
        loading: true,
        error: false,
        data: {
          refreshtoken: "",
          token: "",
          isAuthenticated: false,
        },
      };
    }

    default: {
      return state;
    }
  }
};
