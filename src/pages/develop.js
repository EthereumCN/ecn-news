import React from "react"
import { Flex, Box, Heading, PseudoBox, Grid, Text } from "@chakra-ui/core"
import SEO from "react-seo-component"
import buttom from "../components/css/buttom.module.css"
import Layout from "../components/layout"
import { useStaticQuery, graphql } from "gatsby"
import { FcFilmReel } from "react-icons/fc";
// 引入video
import EachVideo from "../components/videoCompound/eachVideo"
import videoDealogModule from "../components/videoCompound/videoDialog.module.css"
import videoDevelop from "../components/css/develop_video.module.css"
import { FcFinePrint } from "react-icons/fc"
// 底部
import Footer from "../components/FooterComponents/Footer"

const Developer = () => {
  const data = useStaticQuery(graphql`
    {
      allStrapiDeveloperVideos(limit: 4, sort: { fields: date, order: DESC }) {
        nodes {
          date
          title
          author
          videoSource
          cover {
            childImageSharp {
              fluid(maxWidth: 2000, quality: 100) {
                src
              }
            }
          }
        }
      }
      site {
        siteMetadata {
          title
          description
          author
          keywords
          siteLanguage
          siteLocale
          siteUrl
          twitterUsername
        }
      }
    }
  `)

  return (
    <Layout>
      <SEO
        title="开发者门户"
        titleTemplate={data.site.siteMetadata.title}
        description={data.site.siteMetadata.description}
        image={"https://ethereum.cn"}
        pathname={"https://ethereum.cn/develop"}
        siteLanguage={data.site.siteMetadata.siteLanguage}
        siteLocale={data.site.siteMetadata.siteLocale}
        twitterUsername={data.site.siteMetadata.twitterUsername}
        author={data.site.siteMetadata.author}
        publishedDate={data.site.siteMetadata.lastBuildDate}
        modifiedDate={new Date(Date.now()).toISOString()}
      />

      {/* pc */}
      <Box mt="5rem">
        <Grid
          boxShadow="rgba(0, 0, 0, 0.15) 0px 8px 17px"
          templateColumns={["repeat(1, 1fr)","repeat(1, 1fr)","repeat(3, 1fr)","repeat(3, 1fr)"]}
          gap="6rem"
          mt="5rem"
        >
          {/* 第一栏 */}
          <Box
            color="#fff"
            className={videoDevelop.shadow}
          backgroundColor="#212938"
          >
            <Box padding="2rem">
              📑
              <Heading
                m="2rem 0 1.45rem"
                lineHeight="1.1"
                fontWeight="500"
                fontSize="1.38316rem"
              >
                开发手册
              </Heading>
              <Text opacity="0.8" m="0 0 1.45rem">
                一个适合区块链新手的以太坊DApp开发教程
              </Text>
              <PseudoBox
                href="www.baidu.com"
                _hover={{ bg: "rgba(238,119,28,0.8)" }}
                backgroundColor="#ee771c"
                as="a"
                display="block"
                fontSize="1rem"
                whiteSpace="nowrap"
                p="0.5rem 0.75rem"
                borderRadius="0.25em"
                fontSize="1rem"
                border="1px solid transparent"
                textAlign="center"
              >
                阅读文档
              </PseudoBox>
            </Box>
          </Box>
          {/* 第二栏 */}
          <Box
            color="#fff"
            className={videoDevelop.shadow}
          backgroundColor="#212938"
          >
            <Box padding="2rem">
            🔮
              <Heading
                m="2rem 0 1.45rem"
                lineHeight="1.1"
                fontWeight="500"
                fontSize="1.38316rem"
              >
                Solidity
              </Heading>
              <Text opacity="0.8" m="0 0 1.45rem">
                一个适合区块链新手的以太坊DApp开发教程
              </Text>
              <PseudoBox
                href="www.baidu.com"
                _hover={{ bg: "rgba(238,119,28,0.8)" }}
                backgroundColor="#ee771c"
                as="a"
                display="block"
                fontSize="1rem"
                whiteSpace="nowrap"
                p="0.5rem 0.75rem"
                borderRadius="0.25em"
                fontSize="1rem"
                border="1px solid transparent"
                textAlign="center"
              >
                阅读文档
              </PseudoBox>
            </Box>
          </Box>
          {/* 第三栏、 */}
          <Box
            color="#fff"
            className={videoDevelop.shadow}
          backgroundColor="#212938"
          >
            <Box padding="2rem">
            💕
              <Heading
                m="2rem 0 1.45rem"
                lineHeight="1.1"
                fontWeight="500"
                fontSize="1.38316rem"
              >
                EIP/ERC
              </Heading>
              <Text opacity="0.8" m="0 0 1.45rem">
                一个适合区块链新手的以太坊DApp开发教程
              </Text>
              <PseudoBox
                href="www.baidu.com"
                _hover={{ bg: "rgba(238,119,28,0.8)" }}
                backgroundColor="#ee771c"
                as="a"
                display="block"
                fontSize="1rem"
                whiteSpace="nowrap"
                p="0.5rem 0.75rem"
                borderRadius="0.25em"
                fontSize="1rem"
                border="1px solid transparent"
                textAlign="center"
              >
                阅读文档
              </PseudoBox>
            </Box>
          </Box>
        </Grid>


        {/* 第二大栏 */}
        <Grid
          boxShadow="rgba(0, 0, 0, 0.15) 0px 8px 17px"
          templateColumns={["repeat(1, 1fr)","repeat(1, 1fr)","repeat(3, 1fr)","repeat(3, 1fr)"]}
          gap="6rem"
          mt="5rem"
        >
          {/* 第一栏 */}
          <Box
            color="#fff"
            className={videoDevelop.shadow}
          backgroundColor="#212938"
          >
            <Box padding="2rem">
              📑
              <Heading
                m="2rem 0 1.45rem"
                lineHeight="1.1"
                fontWeight="500"
                fontSize="1.38316rem"
              >
                开发手册
              </Heading>
              <Text opacity="0.8" m="0 0 1.45rem">
                一个适合区块链新手的以太坊DApp开发教程
              </Text>
              <PseudoBox
                href="www.baidu.com"
                _hover={{ bg: "rgba(238,119,28,0.8)" }}
                backgroundColor="#ee771c"
                as="a"
                display="block"
                fontSize="1rem"
                whiteSpace="nowrap"
                p="0.5rem 0.75rem"
                borderRadius="0.25em"
                fontSize="1rem"
                border="1px solid transparent"
                textAlign="center"
              >
                阅读文档
              </PseudoBox>
            </Box>
          </Box>
          {/* 第二栏 */}
          <Box
            color="#fff"
            className={videoDevelop.shadow}
          backgroundColor="#212938"
          >
            <Box padding="2rem">
              📑
              <Heading
                m="2rem 0 1.45rem"
                lineHeight="1.1"
                fontWeight="500"
                fontSize="1.38316rem"
              >
                开发手册
              </Heading>
              <Text opacity="0.8" m="0 0 1.45rem">
                一个适合区块链新手的以太坊DApp开发教程
              </Text>
              <PseudoBox
                href="www.baidu.com"
                _hover={{ bg: "rgba(238,119,28,0.8)" }}
                backgroundColor="#ee771c"
                as="a"
                display="block"
                fontSize="1rem"
                whiteSpace="nowrap"
                p="0.5rem 0.75rem"
                borderRadius="0.25em"
                fontSize="1rem"
                border="1px solid transparent"
                textAlign="center"
              >
                阅读文档
              </PseudoBox>
            </Box>
          </Box>
          {/* 第三栏、 */}
          <Box
            color="#fff"
            className={videoDevelop.shadow}
          backgroundColor="#212938"
          >
            <Box padding="2rem">
              📑
              <Heading
                m="2rem 0 1.45rem"
                lineHeight="1.1"
                fontWeight="500"
                fontSize="1.38316rem"
              >
                开发手册
              </Heading>
              <Text opacity="0.8" m="0 0 1.45rem">
                一个适合区块链新手的以太坊DApp开发教程
              </Text>
              <PseudoBox
                href="www.baidu.com"
                _hover={{ bg: "rgba(238,119,28,0.8)" }}
                backgroundColor="#ee771c"
                as="a"
                display="block"
                fontSize="1rem"
                whiteSpace="nowrap"
                p="0.5rem 0.75rem"
                borderRadius="0.25em"
                fontSize="1rem"
                border="1px solid transparent"
                textAlign="center"
              >
                阅读文档
              </PseudoBox>
            </Box>
          </Box>
        </Grid>



{/* 视频 */}
<Box mx="5vw" mt="8rem">
            <Heading color="#fff">
           <FcFilmReel style={{display:"inline"}}/>
              <Box
                ml="1rem"
                padding="0.5rem"
                borderRadius="50%"
                backgroundColor="#ff5000"
                display="inline-box"
              />{" "}
              <Box
                padding="0.5rem"
                borderRadius="50%"
                backgroundColor="#ff5000"
                display="inline-box"
              />
            </Heading>
          </Box>

  <Box mt="12vh">
              <Box className={videoDevelop.featured}>
                <EachVideo data={data.allStrapiDeveloperVideos.nodes[0]} />
                <EachVideo data={data.allStrapiDeveloperVideos.nodes[1]} />
                <EachVideo data={data.allStrapiDeveloperVideos.nodes[2]} />
                <EachVideo data={data.allStrapiDeveloperVideos.nodes[3]} />
              </Box>
            </Box>

      </Box>

      {/* Mobil */}
      <Box display={["inline", "inline", "none", "none"]}></Box>

      <Footer />
    </Layout>
  )
}

export default Developer
