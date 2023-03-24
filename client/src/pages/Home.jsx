import { Box, Button } from "@chakra-ui/react";
import React from "react";
import Cookies from "js-cookie";
import { useDispatch } from "react-redux";
import { authSucc } from "../redux/auth/auth.actions";

export default function Home() {
  let dispatch = useDispatch();
  let token = Cookies.get("token");
  let refreshToken = Cookies.get("refreshtoken");
  if (token && refreshToken) {
    dispatch(authSucc({ token, refreshToken }));
  }

  return (
    <Box
      w="100%"
      h="80vh"
      display={"flex"}
      justifyContent="center"
      alignItems={"center"}
    >
      <Button>Home Page</Button>
    </Box>
  );
}
