import React from "react"
import { Box } from "@chakra-ui/core"
import Search from "../components/search"
const searchIndices = [{ name: `Pages`, title: `Pages` }]

const test = () => {
  return (
    <Box>
      <Box float="right">
        <Search indices={searchIndices} />
      </Box>
    </Box>
  )
}

export default test
