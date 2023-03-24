import {
  legacy_createStore,
  compose,
  applyMiddleware,
  combineReducers,
} from "redux";
import thunk from "redux-thunk";
import { authReducer } from "./auth/auth.reducer";
import { postReducer } from "./post/post.reducer";

const rootReducer = combineReducers({
  auth: authReducer,
  post: postReducer,
});

const composer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

let enhanser = composer(applyMiddleware(thunk));

export const store = legacy_createStore(rootReducer, enhanser);
