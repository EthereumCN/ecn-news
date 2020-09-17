import React, { useState } from "react"
import { Flex, Box, Heading, Button, PseudoBox } from "@chakra-ui/core"
import SEO from "../components/seo"
import buttom from "../components/buttom.module.css"
import Layout from "../components/layout"
import { useStaticQuery, graphql } from "gatsby"
// 引入video
import VideoDialog from "../components/videoCompound/videoDevelopPage"
// 底部
import Footer from "../components/FooterComponents/Footer"

const Develop = () => {

  const [click, setCliock] = useState(true)

  const data = useStaticQuery(graphql`
    {
      allStrapiVideos(limit: 4, sort: { fields: date, order: DESC }) {
        nodes {
          date
          title
          videoSource
          cover {
            childImageSharp {
              fluid(maxWidth: 2000, quality: 100) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  `)

  return (
    <Layout>
      <SEO title="开发者门户" />
      {/* <Heading mt="5rem" color="#fff" textAlign="center"> */}
      <Heading
        mt="5rem"
        color="#fff"
        textAlign="center"
        textShadow="#db4500 1px 0 10px"
      >
        开发者门户
      </Heading>

      {/* pc */}
      <Box display={["none", "none", "inline", "inline"]}>
        <Flex  paddingX="3rem" mt="7rem" justifyContent="space-between">
          {/* 左侧 */}
          <Box w="27%">
            {/* 标题 */}
            <div className={buttom.filterActive}>
              <Heading>文档</Heading>
            </div>

            <Flex flexDirection="column" w="280px" mt="7rem">
              {/* 第一行 */}

              <PseudoBox
                paddingX="1rem"
                display="inline"
                borderRadius=".5rem"
                margin="0 .5rem 3rem"
                cursor="pointer"
                background="linear-gradient(145deg,hsla(240,2%,40%,.15) 15%,rgba(33,33,33,.4) 80%);"
                boxShadow="-4px -3px 2px 0 hsla(0,0%,98%,.13), 4px 4px 2px 0 rgba(0,0,0,.4);"
                color="#fff"
                _active={{
                  background:
                    "linear-gradient(145deg,hsl(240deg 4% 50% / 22%) 15%,rgba(33,33,33,.4) 80%)",
                  boxShadow:
                    "1px 1px 2px 0 hsla(0,0%,82%,.4), -1px -1px 2px rgba(0,0,0,.4), inset 3px 3px 2px 0 rgba(0,0,0,.4), inset -1px -2px 2px hsla(0,0%,82%,.4)",
                  color: "#ff073a",
                }}
              >
                <Heading fontSize="2rem" display="inline-block">
                  <i
                    style={{
                      color: "#ff6f00",
                      fontSize: "1.5rem",
                      marginRight: "10px",
                    }}
                    class="iconfont icon-user1"
                  ></i>
                  键就码林高手
                </Heading>
              </PseudoBox>
              {/* 第二行 */}
              <PseudoBox
                paddingX="1rem"
                display="inline-block"
                borderRadius=".5rem"
                margin="0 .5rem 3rem"
                cursor="pointer"
                background="linear-gradient(145deg,hsla(240,2%,40%,.15) 15%,rgba(33,33,33,.4) 80%)"
                boxShadow="-4px -3px 2px 0 hsla(0,0%,98%,.13), 4px 4px 2px 0 rgba(0,0,0,.4)"
                color="#fff"
                _active={{
                  background:
                    "linear-gradient(150deg,hsla(0,0%,8%,.4) 10%,hsla(0,0%,45%,.15) 80%)",
                  boxShadow:
                    "1px 1px 2px 0 hsla(0,0%,82%,.4), -1px -1px 2px rgba(0,0,0,.4), inset 3px 3px 2px 0 rgba(0,0,0,.4), inset -1px -2px 2px hsla(0,0%,82%,.4)",
                  color: "#ff073a",
                }}
              >
                <Heading fontSize="2rem">
                  <i
                    style={{
                      color: "#ff6f00",
                      fontSize: "1.5rem",
                      marginLeft: "0.1rem",
                      marginRight: "20px",
                    }}
                    class="iconfont icon-l-developer"
                  ></i>
                  开发者手册
                </Heading>
              </PseudoBox>
              {/* 第三行 */}
              <PseudoBox
                paddingX="1rem"
                display="inline-block"
                borderRadius=".5rem"
                margin="0 .5rem 3rem"
                cursor="pointer"
                background="linear-gradient(145deg,hsla(240,2%,40%,.15) 15%,rgba(33,33,33,.4) 80%)"
                boxShadow="-4px -3px 2px 0 hsla(0,0%,98%,.13), 4px 4px 2px 0 rgba(0,0,0,.4)"
                color="#fff"
                _active={{
                  background:
                    "linear-gradient(150deg,hsla(0,0%,8%,.4) 10%,hsla(0,0%,45%,.15) 80%)",
                  boxShadow:
                    "1px 1px 2px 0 hsla(0,0%,82%,.4), -1px -1px 2px rgba(0,0,0,.4), inset 3px 3px 2px 0 rgba(0,0,0,.4), inset -1px -2px 2px hsla(0,0%,82%,.4)",
                  color: "#ff073a",
                }}
              >
                <Heading fontSize="2rem">
                  <i
                    style={{
                      color: "#ff6f00",
                      fontSize: "1.5rem",
                      marginLeft: "0.1rem",
                      marginRight: "20px",
                    }}
                    class="iconfont icon-editor2"
                  ></i>
                  开发者工具{" "}
                </Heading>
              </PseudoBox>
              {/* 第四行 */}
              <PseudoBox
                paddingX="1rem"
                display="inline-block"
                borderRadius=".5rem"
                margin="0 .5rem 3rem"
                cursor="pointer"
                background="linear-gradient(145deg,hsla(240,2%,40%,.15) 15%,rgba(33,33,33,.4) 80%)"
                boxShadow="-4px -3px 2px 0 hsla(0,0%,98%,.13), 4px 4px 2px 0 rgba(0,0,0,.4)"
                color="#fff"
                _active={{
                  background:
                    "linear-gradient(150deg,hsla(0,0%,8%,.4) 10%,hsla(0,0%,45%,.15) 80%)",
                  boxShadow:
                    "1px 1px 2px 0 hsla(0,0%,82%,.4), -1px -1px 2px rgba(0,0,0,.4), inset 3px 3px 2px 0 rgba(0,0,0,.4), inset -1px -2px 2px hsla(0,0%,82%,.4)",
                  color: "#ff073a",
                }}
              >
                <Heading fontSize="2rem">
                  <i
                    style={{
                      color: "#ff6f00",
                      fontSize: "1.5rem",
                      marginLeft: "0.1rem",
                      marginRight: "20px",
                    }}
                    class="iconfont icon-14"
                  ></i>
                  开发者论坛{" "}
                </Heading>
              </PseudoBox>
              {/* 第五行 */}
              <PseudoBox
                paddingX="1rem"
                display="inline-block"
                borderRadius=".5rem"
                margin="0 .5rem 3rem"
                cursor="pointer"
                background="linear-gradient(145deg,hsla(240,2%,40%,.15) 15%,rgba(33,33,33,.4) 80%)"
                boxShadow="-4px -3px 2px 0 hsla(0,0%,98%,.13), 4px 4px 2px 0 rgba(0,0,0,.4)"
                color="#fff"
                _active={{
                  background:
                    "linear-gradient(150deg,hsla(0,0%,8%,.4) 10%,hsla(0,0%,45%,.15) 80%)",
                  boxShadow:
                    "1px 1px 2px 0 hsla(0,0%,82%,.4), -1px -1px 2px rgba(0,0,0,.4), inset 3px 3px 2px 0 rgba(0,0,0,.4), inset -1px -2px 2px hsla(0,0%,82%,.4)",
                  color: "#ff073a",
                }}
              >
                <Heading fontSize="2rem">
                  <i
                    style={{
                      color: "#ff6f00",
                      fontSize: "1.5rem",
                      marginLeft: "0.1rem",
                      marginRight: "20px",
                    }}
                    class="iconfont icon-ziliaoshouce-xianxing"
                  ></i>
                  开发者规范{" "}
                </Heading>
              </PseudoBox>
            </Flex>
          </Box>

          {/* 右侧 */}
          <Box w={["50%","50%","50%","70%"]}>
            <div className={buttom.filterActive}>
              <Heading>视频</Heading>
            </div>

            {/* 第一行 */}
            <Flex justifyContent="space-between" mt="3rem">
              <VideoDialog data={data.allStrapiVideos.nodes[0]} />
              <VideoDialog data={data.allStrapiVideos.nodes[1]} />
            </Flex>

            {/* 第二行 */}
            <Flex justifyContent="space-between" mt="3rem">
              <VideoDialog data={data.allStrapiVideos.nodes[2]} />
              <VideoDialog data={data.allStrapiVideos.nodes[3]} />
            </Flex>
          </Box>
        </Flex>
      </Box>

      {/* Mobil */}
      <Box display={["inline", "inline", "none", "none"]}>
        {/* 文档 */}
        <Box mt="5rem" paddingX="2rem">
          <div className={buttom.filterActive}>
            <Heading>文档</Heading>
          </div>

          <Flex flexDirection="column" w="280px" mt="3rem">
            {/* 第一行 */}
            <PseudoBox
              paddingX="1rem"
              display="inline"
              borderRadius=".5rem"
              margin="0 .5rem 3rem"
              cursor="pointer"
              background="linear-gradient(145deg,hsla(240,2%,40%,.15) 15%,rgba(33,33,33,.4) 80%);"
              boxShadow="-4px -3px 2px 0 hsla(0,0%,98%,.13), 4px 4px 2px 0 rgba(0,0,0,.4);"
              color="#fff"
              _active={{
                background:
                  "linear-gradient(145deg,hsl(240deg 4% 50% / 22%) 15%,rgba(33,33,33,.4) 80%)",
                boxShadow:
                  "1px 1px 2px 0 hsla(0,0%,82%,.4), -1px -1px 2px rgba(0,0,0,.4), inset 3px 3px 2px 0 rgba(0,0,0,.4), inset -1px -2px 2px hsla(0,0%,82%,.4)",
                color: "#ff073a",
              }}
            >
              <Heading fontSize="2rem" display="inline-block">
                <i
                  style={{
                    color: "#ff6f00",
                    fontSize: "1.5rem",
                    marginRight: "10px",
                  }}
                  class="iconfont icon-user1"
                ></i>
                键就码林高手
              </Heading>
            </PseudoBox>
            {/* 第二行 */}
            <PseudoBox
              paddingX="1rem"
              display="inline-block"
              borderRadius=".5rem"
              margin="0 .5rem 3rem"
              cursor="pointer"
              background="linear-gradient(145deg,hsla(240,2%,40%,.15) 15%,rgba(33,33,33,.4) 80%)"
              boxShadow="-4px -3px 2px 0 hsla(0,0%,98%,.13), 4px 4px 2px 0 rgba(0,0,0,.4)"
              color="#fff"
              _active={{
                background:
                  "linear-gradient(150deg,hsla(0,0%,8%,.4) 10%,hsla(0,0%,45%,.15) 80%)",
                boxShadow:
                  "1px 1px 2px 0 hsla(0,0%,82%,.4), -1px -1px 2px rgba(0,0,0,.4), inset 3px 3px 2px 0 rgba(0,0,0,.4), inset -1px -2px 2px hsla(0,0%,82%,.4)",
                color: "#ff073a",
              }}
            >
              <Heading fontSize="2rem">
                <i
                  style={{
                    color: "#ff6f00",
                    fontSize: "1.5rem",
                    marginLeft: "0.1rem",
                    marginRight: "20px",
                  }}
                  class="iconfont icon-l-developer"
                ></i>
                开发者手册
              </Heading>
            </PseudoBox>
            {/* 第三行 */}
            <PseudoBox
              paddingX="1rem"
              display="inline-block"
              borderRadius=".5rem"
              margin="0 .5rem 3rem"
              cursor="pointer"
              background="linear-gradient(145deg,hsla(240,2%,40%,.15) 15%,rgba(33,33,33,.4) 80%)"
              boxShadow="-4px -3px 2px 0 hsla(0,0%,98%,.13), 4px 4px 2px 0 rgba(0,0,0,.4)"
              color="#fff"
              _active={{
                background:
                  "linear-gradient(150deg,hsla(0,0%,8%,.4) 10%,hsla(0,0%,45%,.15) 80%)",
                boxShadow:
                  "1px 1px 2px 0 hsla(0,0%,82%,.4), -1px -1px 2px rgba(0,0,0,.4), inset 3px 3px 2px 0 rgba(0,0,0,.4), inset -1px -2px 2px hsla(0,0%,82%,.4)",
                color: "#ff073a",
              }}
            >
              <Heading fontSize="2rem">
                <i
                  style={{
                    color: "#ff6f00",
                    fontSize: "1.5rem",
                    marginLeft: "20px",
                  }}
                  class="iconfont icon-editor2"
                ></i>
                开发者工具{" "}
              </Heading>
            </PseudoBox>
            {/* 第四行 */}
            <PseudoBox
              paddingX="1rem"
              display="inline-block"
              borderRadius=".5rem"
              margin="0 .5rem 3rem"
              cursor="pointer"
              background="linear-gradient(145deg,hsla(240,2%,40%,.15) 15%,rgba(33,33,33,.4) 80%)"
              boxShadow="-4px -3px 2px 0 hsla(0,0%,98%,.13), 4px 4px 2px 0 rgba(0,0,0,.4)"
              color="#fff"
              _active={{
                background:
                  "linear-gradient(150deg,hsla(0,0%,8%,.4) 10%,hsla(0,0%,45%,.15) 80%)",
                boxShadow:
                  "1px 1px 2px 0 hsla(0,0%,82%,.4), -1px -1px 2px rgba(0,0,0,.4), inset 3px 3px 2px 0 rgba(0,0,0,.4), inset -1px -2px 2px hsla(0,0%,82%,.4)",
                color: "#ff073a",
              }}
            >
              <Heading fontSize="2rem">
                <i
                  style={{
                    color: "#ff6f00",
                    fontSize: "1.5rem",
                    marginLeft: "20px",
                  }}
                  class="iconfont icon-14"
                ></i>
                开发者论坛{" "}
              </Heading>
            </PseudoBox>
            {/* 第五行 */}
            <PseudoBox
              paddingX="1rem"
              display="inline-block"
              borderRadius=".5rem"
              margin="0 .5rem 3rem"
              cursor="pointer"
              background="linear-gradient(145deg,hsla(240,2%,40%,.15) 15%,rgba(33,33,33,.4) 80%)"
              boxShadow="-4px -3px 2px 0 hsla(0,0%,98%,.13), 4px 4px 2px 0 rgba(0,0,0,.4)"
              color="#fff"
              _active={{
                background:
                  "linear-gradient(150deg,hsla(0,0%,8%,.4) 10%,hsla(0,0%,45%,.15) 80%)",
                boxShadow:
                  "1px 1px 2px 0 hsla(0,0%,82%,.4), -1px -1px 2px rgba(0,0,0,.4), inset 3px 3px 2px 0 rgba(0,0,0,.4), inset -1px -2px 2px hsla(0,0%,82%,.4)",
                color: "#ff073a",
              }}
            >
              <Heading fontSize="2rem">
                <i
                  style={{
                    color: "#ff6f00",
                    fontSize: "1.5rem",
                    marginLeft: "20px",
                  }}
                  class="iconfont icon-ziliaoshouce-xianxing"
                ></i>
                开发者规范{" "}
              </Heading>
            </PseudoBox>
          </Flex>
        </Box>

        <Box mt="3rem" paddingX="2rem">
          <div className={buttom.filterActive}>
            <Heading>视频</Heading>
          </div>


          <Box mt="2rem">
              <VideoDialog data={data.allStrapiVideos.nodes[0]} />
            </Box>

            <Box mt="2rem">
              <VideoDialog data={data.allStrapiVideos.nodes[1]} />
            </Box>

            <Box mt="2rem">
              <VideoDialog data={data.allStrapiVideos.nodes[2]} />
            </Box>

            <Box mt="2rem">
              <VideoDialog data={data.allStrapiVideos.nodes[3]} />
            </Box>
        </Box>
      </Box>

      <Footer />
    </Layout>
  )
}

export default Develop
