import { Box, Button, Text } from "@chakra-ui/react";
import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export default function Navbar() {
  let { data } = useSelector((store) => store.auth);
  return (
    <Box
      w="100%"
      h="80px"
      boxShadow={"rgba(0, 0, 0, 0.35) 0px 5px 15px"}
      display="flex"
      alignItems={"center"}
      gap="20px"
      pl="30px"
    >
      <Link to={"/"}>
        <Text fontSize={"22px"} as="b">
          Pococare
        </Text>
      </Link>
      <Link to={"/posts"}>
        <Button>Posts</Button>
      </Link>
      <Link to={"/login"}>
        <Button>{data.isAuthenticated ? "Logout" : "Log in"}</Button>
      </Link>
    </Box>
  );
}
