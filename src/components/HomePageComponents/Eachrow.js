import React from "react"
import { Heading, Box, Flex } from "@chakra-ui/core"
import Eachrowitem from "./Eachrowitem"
import { Link } from "gatsby"
const Eachrow = ({ data, rowName }) => {
  return (
    <>
      <Box textAlign="center" mt={["2rem", "2rem", "2rem", "5rem"]}>
        <Link to={data[0].mainTag}>
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
        </Link>
      </Box>
      <Flex
        flexWrap="wrap"
        mt="4rem"
        paddingX={["0rem", "0rem", "0rem", "10rem"]}
      >
        <Eachrowitem data={data[0]} />
        <Eachrowitem data={data[1]} />
        <Eachrowitem data={data[2]} />
      </Flex>
    </>
  )
}

export default Eachrow
