import React from "react"
import "./layout.css"
import Header from "./HeaderComponents/Header"
import { Box } from "@chakra-ui/core"

const Layout = ({ children }) => {
  return (
    <Box px="2vw">
      <Header />
      {children}
    </Box>
  )
}

export default Layout
