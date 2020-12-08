import React from "react"
import { Flex, Box, Heading, Text, Divider,  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink, } from "@chakra-ui/core"
  import { Link } from "gatsby"
import SEO from "react-seo-component"
import { useStaticQuery, graphql } from "gatsby"
import Layout from "../components/layout"
// 引入video
import EachVideo from "../components/videoCompound/eachVideo"
import videoDealogModule from "../components/videoCompound/videoDialog.module.css"
// 底部
import Footer from "../components/FooterComponents/Footer"
import { FcFilmReel } from "react-icons/fc";


const C0llege = () => {
  const data = useStaticQuery(graphql`
    {
      allStrapiCollegeVideos(limit: 4, sort: { fields: date, order: DESC }) {
        nodes {
          date
          title
          videoSource
          author
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
      allStrapiTrivias {
        nodes {
          info
        }
      }
    }
  `)

  return (
    <Layout>
      <SEO
        title="零时学院"
        titleTemplate={data.site.siteMetadata.title}
        description={data.site.siteMetadata.description}
        image={"https://ethereum.cn"}
        pathname={"https://ethereum.cn/c0llege"}
        siteLanguage={data.site.siteMetadata.siteLanguage}
        siteLocale={data.site.siteMetadata.siteLocale}
        twitterUsername={data.site.siteMetadata.twitterUsername}
        author={data.site.siteMetadata.author}
        publishedDate={data.site.siteMetadata.lastBuildDate}
        modifiedDate={new Date(Date.now()).toISOString()}
      />
      {/* Breadcrumb */}
      <Breadcrumb color="#fff" mt="10rem" mb="3rem">
        <BreadcrumbItem>
          <BreadcrumbLink as={Link} to="/">首页</BreadcrumbLink>
        </BreadcrumbItem>

        <BreadcrumbItem isCurrentPage>
          <BreadcrumbLink as={Link} to="#">零时学院</BreadcrumbLink>
        </BreadcrumbItem>
      </Breadcrumb>
      {/* pc端 */}
      <Box  display={["none", "none", "inline", "inline"]}>
        <Box>
          {/* 第一行 */}
          <Flex  justifyContent="space-between" backgroundColor="#111415">
            {/* 左侧栏 */}
            <Box w="58%" backgroundColor="#191b1c">
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

              {/* 下一栏 */}
              <Heading color="#fff" mb="1rem">
              以太坊&nbsp;2.0
              </Heading>
              <Text color="#fff" mb="1rem">
              以太坊下一步的重要网络升级称为 Ethereum 2.0，eth2 或 Serenity，将带来权益证明共识机制 (Proof of Stake)、分片 (Sharding) 等重大改变。
              </Text>
              <Text color="#fff" mb="1rem">
              以太坊2.0于2020年开始分阶段推进，首先上线的是阶段0 (Phase 0)。
              </Text>
              <Text color="#fff" mb="1rem">
              每个阶段都将从不同方面对以太坊区块链的功能和性能进行优化，以提升网络的扩容性、吞吐量和安全性。根据最新的路线图，理论上以太坊2.0最终的吞吐量将达到10万/秒。
              </Text>

            </Box>

            {/* 右侧栏 */}
            <Box w="40%" backgroundColor="#0d0f11">
              {/* 右侧第一栏 */}
              <Flex justifyContent="space-between" h="50%">
                {/* 左侧/右侧 */}
                <Box w="49%" backgroundColor="#16191a">
                  <Heading color="#fff" mb="1rem">
                    目录
                  </Heading>
                  <Text color="#fff" mb="1rem">
                  <a href="https://knol.ethereum.cn/" target="_blank">Hello 以太坊</a>
                  </Text>
                  <Text color="#fff" mb="1rem">
                  <a href="https://dev.ethereum.cn/" target="_blank">开发者门户</a>
                  </Text>
                  <Text color="#fff" mb="1rem">
                  <a href="https://eth2.ethereum.cn/">  ETH 2.0 </a>
                  </Text>
                  <Text color="#fff" mb="1rem">
                  <a href="https://knol.ethereum.cn/glossary">  以太坊术语列表</a>
                  </Text>
                </Box>
                <Box w="49%" backgroundColor="#141618">
                  <Heading color="#fff" mb="1rem" textAlign="right">
                    冷知识
                  </Heading>
                  <Text color="#fff" mb="1rem" fontSize="1.5vw">
                    {data.allStrapiTrivias.nodes[0].info}
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
                <Text color="#fff" mb=".5rem" mt="1rem">
                  什么是以太坊2.0？
                </Text>
                <Text color="#fff" mb=".5rem">
                  以太坊2.0会带来哪些变化？
                </Text>
                <Text color="#fff" mb=".5rem">
                  以太坊2.0将从PoW工作量证明机制转向PoS权益证明机制。
                </Text>
                <Text color="#fff" mb=".5rem">
                  以太坊2.0和现在的以太坊有什么联系和区别？
                </Text>
                <Text color="#fff" mb=".5rem">
                  以太坊2.0和现在的以太坊有什么联系和区别？
                </Text>
                <Heading textAlign="right">FAQ</Heading>
              </Box>
            </Box>
          </Flex>

          {/* 第二栏 */}

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

           <Box mt="2rem" px={["","","4vw","5vw"]} >
            <Box  className={videoDealogModule.featured}>
              <EachVideo data={data.allStrapiCollegeVideos.nodes[0]}/>
              <EachVideo data={data.allStrapiCollegeVideos.nodes[1]} />
              <EachVideo data={data.allStrapiCollegeVideos.nodes[2]}/>
              <EachVideo data={data.allStrapiCollegeVideos.nodes[3]}/>
            </Box>
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
                不同于比特币，以太坊听过一系列的重新设计，包括EVM（以太坊虚拟机，
                Etheruem Virtual Machine）,
                账户系统，智能合约，释放了区块链前所未有的潜力。
              </Text>
              <Divider />
              {/* 新闻 */}
              <Heading color="#fff" mb="1rem" mt="3rem">
              以太坊&nbsp;2.0
              </Heading>
              <Text color="#fff" mb="1rem">
              以太坊下一步的重要网络升级称为 Ethereum 2.0，eth2 或 Serenity，将带来权益证明共识机制 (Proof of Stake)、分片 (Sharding) 等重大改变。
              </Text>
              <Text color="#fff" mb="1rem">
              以太坊2.0于2020年开始分阶段推进，首先上线的是阶段0 (Phase 0)。
              </Text>
              <Text color="#fff" mb="1rem">
              每个阶段都将从不同方面对以太坊区块链的功能和性能进行优化，以提升网络的扩容性、吞吐量和安全性。根据最新的路线图，理论上以太坊2.0最终的吞吐量将达到10万/秒。
              </Text>
              <Divider />
              {/* 目录 */}
              <Heading color="#fff" mb="1rem" mt="3rem">
                目录
              </Heading>
              <Text color="#fff" mb="1rem">
                <a href="https://knol.ethereum.cn/" >Hello 以太坊</a>
              </Text>
              <Text color="#fff" mb="1rem">
              <a href="https://dev.ethereum.cn/" target="_blank">  开发者门户</a>
              </Text>
              <Text color="#fff" mb="1rem">
              <a href="https://eth2.ethereum.cn/">   ETH 2.0</a>
              </Text>
              <Text color="#fff" mb="1rem">
              <a href="https://knol.ethereum.cn/glossary"> 以太坊术语列表</a>
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
            <EachVideo data={data.allStrapiCollegeVideos.nodes[0]}/>
            </Box>

            <Box mt="2rem">
            <EachVideo data={data.allStrapiCollegeVideos.nodes[1]}/>
            </Box>

            <Box mt="2rem">
            <EachVideo data={data.allStrapiCollegeVideos.nodes[2]}/>
            </Box>

            <Box mt="2rem">
            <EachVideo data={data.allStrapiCollegeVideos.nodes[3]}/>
            </Box>
          </Box>
        </Box>
      </Box>

      {/* 手机端end */}

      <Footer />
    </Layout>
  )
}

export default C0llege
