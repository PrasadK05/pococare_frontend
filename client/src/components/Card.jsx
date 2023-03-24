import { Box, Text } from "@chakra-ui/react";
import React from "react";

export default function Card({ text, author }) {
  return (
    <Box
      w="90%"
      m="auto"
      py="20px"
      borderRadius={"10px"}
      p="20px"
      bg="#FFFFFF"
      boxShadow={"rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px"}
    >
      <Text>{text}</Text>
      <Text align={"right"} fontWeight="bold">
        - {author}
      </Text>
    </Box>
  );
}
