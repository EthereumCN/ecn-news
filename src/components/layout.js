import React from "react"
import "../components/css/layout.css"
import Header from "./HeaderComponents/Header"
import { Box } from "@chakra-ui/core"

const Layout = ({ children }) => {
  return (
    <Box mx={['1rem','1rem','5rem','5rem']}>
      <Header />
      {children}
    </Box>
  )
} 

export default Layout
