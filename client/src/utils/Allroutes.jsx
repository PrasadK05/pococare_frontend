import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Posts from "../pages/Posts";
import PrivateRoutes from "./PrivateRoutes";

export default function AllRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/login" element={<Login />}></Route>
      <Route
        path="/posts"
        element={
          <PrivateRoutes>
            <Posts />
          </PrivateRoutes>        }
      ></Route>
    </Routes>
  );
}
