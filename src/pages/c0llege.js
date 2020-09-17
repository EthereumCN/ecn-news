import React from "react"
import {
  Flex,
  Box,
  Heading,
  Text,
  Divider,
  AspectRatioBox,
} from "@chakra-ui/core"
import SEO from "../components/seo"
import { useStaticQuery, graphql } from "gatsby"
import Layout from "../components/layout"
// 引入video
import VideoDialog from "../components/videoCompound/videoDialog"
// 底部
import Footer from "../components/FooterComponents/Footer"

const C0llege = () => {
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
      <SEO title="零时学院" />
      {/* title */}
      <Heading mt="5rem" mb="4rem" color="#fff" textAlign="center">
        零时学院
      </Heading>
      {/* pc端 */}
      <Box display={["none", "none", "inline", "inline"]}>
        <Box paddingX="5rem">
          {/* 第一行 */}
          <Flex justifyContent="space-between" backgroundColor="#111415">
            {/* 左侧栏 */}
            <Box w="50%" backgroundColor="#191b1c">
              <Heading color="#fff" mb="1rem">
                简介
              </Heading>
              <Text color="#fff" mb="1rem">
                以太坊（Ethereum）是一个基于区块链技术，为去中心化应用程序而生的全球开源平台。在以太坊上，所有人都可以管理数字资产，编写智能合约，开发或者运行运行程序，而且不受地域的限制。
              </Text>
              <Text color="#fff" mb="1rem">
                以太坊主要创始人Vitalik
                Bulerin受到比特币及社区的启发，在2013年末发布了以太坊白皮书《以太坊：下一代加密货币与去中心化应用平台》，并在2014年1月宣布正式启动以太坊项目。
              </Text>
              <Text color="#fff" mb="1rem">
                不同于比特币的货币丁酉，以太坊听过一系列的重新设计，包括EVM（以太坊虚拟机，
                Etheruem Virtual Machine）,
                账户系统，智能合约，释放了区块链前所未有的潜力。
              </Text>

              <Heading color="#fff" mb="1rem">
                新闻
              </Heading>
              <Text color="#fff" mb="1rem">
                Eth2测试网Medalla在8月15日出现时间同步问题，目前正在逐步恢复网络。请Prysm客户端的节点更新到Alpha.23版本。
              </Text>
              <Text color="#fff" mb="1rem">
                DeFi智能合约中锁定的加密货币总值达60亿美元。Eth2测试网Medalla在8月15日出现时间同步问题，目前正在逐步恢复网络。请Prysm客户端的节点更新到Alpha.23版本。
              </Text>
              <Text color="#fff" mb="1rem">
                去中心化衍生品交易所dYdX计划集成StarkWare的Layer2扩容技术。
              </Text>
            </Box>

            {/* 右侧栏 */}
            <Box w="49%" backgroundColor="#0d0f11">
              {/* 右侧第一栏 */}
              <Flex justifyContent="space-between" h="50%">
                {/* 左侧/右侧 */}
                <Box w="49%" backgroundColor="#16191a">
                  <Heading color="#fff" mb="1rem">
                    目录
                  </Heading>
                  <Text color="#fff" mb="1rem">
                    Hello 以太坊
                  </Text>
                  <Text color="#fff" mb="1rem">
                    开发者门户
                  </Text>
                  <Text color="#fff" mb="1rem">
                    ETH 2.0
                  </Text>
                  <Text color="#fff" mb="1rem">
                    以太坊术语列表
                  </Text>
                </Box>
                <Box w="49%" backgroundColor="#141618">
                  <Heading color="#fff" mb="1rem" textAlign="right">
                    冷知识
                  </Heading>
                  <Text color="#fff" mb="1rem">
                    以太坊2.0将从PoW工作量证明机制转向PoS权益证明机制。
                  </Text>
                </Box>
              </Flex>
              {/* 第二栏 */}
              <Box
                mt="1%"
                backgroundColor="#121516"
                h="47%"
                color="#fff"
                position="realative"
              >
                <Text color="#fff" mb="1rem" mt="1rem">
                  什么是以太坊2.0？
                </Text>
                <Text color="#fff" mb="1rem">
                  以太坊2.0会带来哪些变化？
                </Text>
                <Text color="#fff" mb="1rem">
                  以太坊2.0将从PoW工作量证明机制转向PoS权益证明机制。
                </Text>
                <Text color="#fff" mb="1rem">
                  以太坊2.0和现在的以太坊有什么联系和区别？
                </Text>

                <Heading textAlign="right">FAQ</Heading>
              </Box>
            </Box>
          </Flex>

          {/* 第二栏 */}

          <Box mt="8rem">
            <Heading color="#fff">
              视频
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

          <Box>
            {/* 第一行 */}
            <Flex justifyContent="space-between"  mt="3rem">
              <VideoDialog data={data.allStrapiVideos.nodes[0]} />
              <VideoDialog data={data.allStrapiVideos.nodes[1]} />
            </Flex>

            {/* 第二行 */}
            <Flex justifyContent="space-between"  mt="3rem">
              <VideoDialog data={data.allStrapiVideos.nodes[2]} />
              <VideoDialog data={data.allStrapiVideos.nodes[3]} />
            </Flex>
          </Box>
        </Box>
      </Box>

      {/* 手机端 */}
      <Box display={["inline", "inline", "none", "none"]}>
        <Box paddingX="2rem">
          {/* 第一行 */}
          <Box backgroundColor="#111415">
            {/* 左侧栏 */}
            <Box>
              {/* 简介 */}
              <Heading color="#fff" mb="1rem">
                简介
              </Heading>
              <Text color="#fff" mb="1rem">
                以太坊（Ethereum）是一个基于区块链技术，为去中心化应用程序而生的全球开源平台。在以太坊上，所有人都可以管理数字资产，编写智能合约，开发或者运行运行程序，而且不受地域的限制。
              </Text>
              <Text color="#fff" mb="1rem">
                以太坊主要创始人Vitalik
                Bulerin受到比特币及社区的启发，在2013年末发布了以太坊白皮书《以太坊：下一代加密货币与去中心化应用平台》，并在2014年1月宣布正式启动以太坊项目。
              </Text>
              <Text color="#fff" mb="1rem">
                不同于比特币的货币丁酉，以太坊听过一系列的重新设计，包括EVM（以太坊虚拟机，
                Etheruem Virtual Machine）,
                账户系统，智能合约，释放了区块链前所未有的潜力。
              </Text>
              <Divider />
              {/* 新闻 */}
              <Heading color="#fff" mb="1rem" mt="3rem">
                新闻
              </Heading>
              <Text color="#fff" mb="1rem">
                Eth2测试网Medalla在8月15日出现时间同步问题，目前正在逐步恢复网络。请Prysm客户端的节点更新到Alpha.23版本。
              </Text>
              <Text color="#fff" mb="1rem">
                DeFi智能合约中锁定的加密货币总值达60亿美元。
              </Text>
              <Text color="#fff" mb="1rem">
                去中心化衍生品交易所dYdX计划集成StarkWare的Layer2扩容技术。
              </Text>
              <Divider />
              {/* 目录 */}
              <Heading color="#fff" mb="1rem" mt="3rem">
                目录
              </Heading>
              <Text color="#fff" mb="1rem">
                Hello 以太坊
              </Text>
              <Text color="#fff" mb="1rem">
                开发者门户
              </Text>
              <Text color="#fff" mb="1rem">
                ETH 2.0
              </Text>
              <Text color="#fff" mb="1rem">
                以太坊术语列表
              </Text>
              <Divider />
              {/* 冷知识 */}
              <Heading color="#fff" mb="1rem" mt="3rem">
                冷知识
              </Heading>
              <Text color="#fff" mb="1rem">
                以太坊2.0将从PoW工作量证明机制转向PoS权益证明机制。
              </Text>
              <Divider />
              {/* FAQ */}
              <Heading color="#fff" mb="1rem" mt="3rem">
                FAQ
              </Heading>
              <Text color="#fff" mb="1rem">
                什么是以太坊2.0？
              </Text>
              <Text color="#fff" mb="1rem">
                以太坊2.0会带来哪些变化？
              </Text>{" "}
              <Text color="#fff" mb="1rem">
                以太坊2.0和现在的以太坊有什么联系和区别？
              </Text>{" "}
              <Text color="#fff" mb="1rem">
                以太坊2.0的发展路线是什么？
              </Text>
            </Box>

            {/* 右侧栏 */}

            <Box mt="5rem" backgroundColor="#161a1f">
              <Heading color="#fff">
                视频
                <Box
                  ml="2rem"
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
      </Box>

      {/* 手机端end */}

    <Footer/>
    </Layout>
  )
}

export default C0llege
