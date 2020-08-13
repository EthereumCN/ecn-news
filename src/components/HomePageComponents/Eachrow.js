import React from "react"
import { Heading, Box, Flex } from "@chakra-ui/core"
import Eachrowitem from "./Eachrowitem"

const Eachrow = ({ data,rowName }) => {
  return (
    <>
      <Box textAlign="center" mt={["2rem", "2rem", "2rem", "5rem"]} >
        <Heading
          color="#fff"
          borderBottom="8px solid #ff2e00"
          display="inline-block"
          lineHeight="90%"
          px="0.2rem"
          mb="2rem"
          fontSize="1.8rem"
        >
          {rowName}
        </Heading>
      </Box>
      <Flex  flexWrap="wrap" mt="4rem" paddingX="10rem">
        <Eachrowitem data={data[0]} />
        <Eachrowitem data={data[1]} /> 
         <Eachrowitem data={data[2]} />
      </Flex>
    </>
  )
}

export default Eachrow
