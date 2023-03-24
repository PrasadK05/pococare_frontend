import { POST_LOADING, POST__ERROR, POST__SUCCESS } from "./post.type";

export const authInitalState = {
  loading: false,
  posts: [],
  error: false,
};

export const postReducer = (state = authInitalState, action) => {
  switch (action.type) {
    case POST__SUCCESS: {
      return {
        ...state,
        loading: false,
        error: false,
        posts: action.payload,
      };
    }

    case POST__ERROR: {
      return {
        ...state,
        loading: false,
        error: true,
        posts: [],
      };
    }
    case POST_LOADING: {
      return {
        ...state,
        loading: true,
        error: false,
        posts: [],
      };
    }

    default: {
      return state;
    }
  }
};
