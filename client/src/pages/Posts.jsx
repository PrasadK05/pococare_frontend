import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPost } from "../redux/post/post.action";
import Cookies from "js-cookie";
import { Box, useColorModeValue } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { authFail } from "../redux/auth/auth.actions";
import Card from "../components/Card";

export default function Posts() {
  let dispatch = useDispatch();
  let navigate = useNavigate();
  let { posts } = useSelector((store) => store.post);
  let token = Cookies.get("token");
  let refreshToken = Cookies.get("refreshtoken");

  useEffect(() => {
    dispatch(getPost(token, refreshToken))
      .then((res) => {
        if (res == false) {
          alert("session expired");
          Cookies.remove('token')
          Cookies.remove('refreshtoken')
          navigate("/login");
        }
      })
      .catch((err) => {
        alert(err.massage);
        navigate("/login");
      });
  }, []);
  return (
    <Box
      w="60%"
      m="auto"
      mt="50px"
      boxShadow={"rgba(0, 0, 0, 0.35) 0px 5px 15px"}
      py="20px"
      borderRadius={"10px"}
      bg={"#f7fafc"}
      display="flex"
      flexDirection={"column"}
      gap="20px"
    >
      {posts.data &&
        posts.data.map((el) => {
          return <Card key={el._id} text={el.post} author={el.author} />;
        })}
    </Box>
  );
}
