import React from "react"
import "../components/css/layout.css"
import Header from "./HeaderComponents/Header"
import { Box, Link } from "@chakra-ui/core"

const Layout = ({ children }) => {
  return (
    <Box mx={["1rem", "1rem", "5rem", "5rem"]}>
      <Header />
      {children}
      <Box textAlign="center">
        <Link
          fontSize="0.9rem"
          color="#fff"
          href="http://beian.miit.gov.cn/"
          isExternal
        >
          {" "}
          蜀ICP备2021001286号
        </Link>{" "}
      </Box>
    </Box>
  )
}

export default Layout
