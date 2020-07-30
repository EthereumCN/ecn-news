import React from "react"
import {
  Flex,
  Box,
  PseudoBox,
  useDisclosure,
  DrawerOverlay,
  DrawerContent,
  DrawerBody,
  Drawer,
} from "@chakra-ui/core"
import Img from "gatsby-image"
import { useStaticQuery, graphql } from "gatsby"

const Header = () => {
  // local src 提取
  const data = useStaticQuery(graphql`
    query MyQuery {
      file(relativePath: { eq: "eco_logo.png" }) {
        childImageSharp {
          fixed(width: 100) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)

  // 设定拉上拉下菜单
  const { isOpen, onOpen, onClose } = useDisclosure()
  const btnRef = React.useRef()

  let navList = ["新闻资讯", "零时学院", "开发者门户", "生态漫游", "DApp"]

  return (
    <Flex justifyContent="space-between" pt="2vh">
      {/* header左侧 */}
      <Flex justifyContent="space-between">
        {/* logo */}
        <Img fixed={data.file.childImageSharp.fixed} alt="logo" />
        {/* pc nav-bar */}
        <Box display={["none", "none", "none", "inline"]}>
          <nav>
            <ul style={{ listStyleType: "none" }}>
              {/* 循环 */}
              {navList.map((item, index) => (
                <li style={{ float: "left", marginLeft: "3rem" }} key={index}>
                  <PseudoBox
                    _hover={{ color: "#ff2e00" }}
                    fontSize="1.5rem"
                    cursor="pointer"
                    color="#fff"
                  >
                    {item}
                  </PseudoBox>
                </li>
              ))}
            </ul>
          </nav>
        </Box>
      </Flex>

      {/* header右侧 */}
      <Box>
        {/* 搜索 */}

        {/* phone nav-bar */}
        <PseudoBox
          display={["inline", "inline", "inline", "none"]}
          _hover={{ color: "#ff2e00" }}
          fontSize="2rem"
          cursor="pointer"
          mr="2rem"
          ref={btnRef}
          variantColor="teal"
          onClick={onOpen}
          color="#fff"
        >
          Ξ
        </PseudoBox>
        <>
          <Drawer
            isOpen={isOpen}
            placement="top"
            onClose={onClose}
            finalFocusRef={btnRef}
          >
            <DrawerOverlay />
            <DrawerContent>
              <DrawerBody>
                {navList.map((item, index) => (
                  <PseudoBox
                    cursor="pointer"
                    _active={{ color: "#ff2e00" }}
                    fontSize="1.5rem"
                    key={index}
                    textAlign="center"
                    py="0.4rem"
                  >
                    {item}
                  </PseudoBox>
                ))}
              </DrawerBody>
            </DrawerContent>
          </Drawer>
        </>
      </Box>
    </Flex>
  )
}

export default Header
