import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import Cookies from "js-cookie";
import { authSucc } from "../redux/auth/auth.actions";

export default function PrivateRoutes({ children }) {
  let { data } = useSelector((store) => store.auth);
  if (data.isAuthenticated == false) {
    return <Navigate to={"/login"} />;
  }
  return children;
}
