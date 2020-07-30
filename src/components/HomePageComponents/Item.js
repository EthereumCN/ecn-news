import React from "react"
import { Flex, Box, Heading, PseudoBox, Text } from "@chakra-ui/core"
import Img from "gatsby-image"

const Item = ({ data,order }) => {
  return (
    <PseudoBox color="white" cursor="pointer" _hover={{ color: " #ff2e00 " }} h="100%">
        {console.log(order)}
      <Flex justifyContent="space-between" minH="100%" alignItems="center">
        {/* {console.log(data.cover.childImageSharp.fluid)} */}
        {/* left side */}
        <Box w="60%" alignSelf={order}> 
          {/* tag     */}
          <Heading
            as="h2"
            fontSize="1rem"
            color="#000"
            borderRadius="2rem"
            p="0.3rem"
            backgroundColor="#ff2e00"
            display="inline-box"
          >
            {data.mainTag}
          </Heading>

          {/* title */}
          <Heading as="h1" fontSize="1.5rem" pt="0.8rem" whiteSpace="nowrap" style={{textOverflow:"ellipsis"}} overflow="hidden">
            {data.title}
          </Heading>

          {/* summary */}
          <Text color="#fff" fontSize="1rem" >{data.summary}</Text>
        </Box>
        {/* right side */}
        <Box w="30%"  alignSelf={order}>
          <Img fluid={data.cover.childImageSharp.fluid} />
        </Box>
      </Flex>
    </PseudoBox>
  )
}

export default Item
