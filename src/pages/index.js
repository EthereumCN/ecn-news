import React from "react"
import { Link } from "gatsby"
import { Flex, Box } from "@chakra-ui/core"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { useStaticQuery, graphql } from "gatsby"
import LastRow from '../components/HomePageComponents/LastRow'

// 第一栏
import News from "../components/HomePageComponents/News"
import Selected from "../components/HomePageComponents/Selected"

// 第二栏
import Swiper from "../components/HomePageComponents/Swiper"

// 第三栏
import Eachrow from "../components/HomePageComponents/Eachrow"

const IndexPage = () => {

  const data = useStaticQuery(graphql`
  {
    Ether2: allStrapiArticles(sort: {fields: publishDate, order: DESC}, limit: 3, filter: {mainTag: {eq: "Ether2"}}) {
      nodes {
        title
        publishDate
        summary                                                                                                                                                                                      
        author
        authorImg {
          childImageSharp {
            fixed(width: 32, height: 32) {
              ...GatsbyImageSharpFixed
            }
          }
        }
        cover {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
    Technology: allStrapiArticles(sort: {fields: publishDate, order: DESC}, limit: 3, filter: {mainTag: {eq: "Technology"}}) {
      nodes {
        title
        publishDate
        summary
        author
        authorImg {
          childImageSharp {
            fixed(width: 32, height: 32) {
              ...GatsbyImageSharpFixed
            }
          }
        }
        cover {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
    Staking: allStrapiArticles(sort: {fields: publishDate, order: DESC}, limit: 3, filter: {mainTag: {eq: "Staking"}}) {
      nodes {
        title
        publishDate
        summary
        author
        authorImg {
          childImageSharp {
            fixed(width: 32, height: 32) {
              ...GatsbyImageSharpFixed
            }
          }
        }
        cover {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
    DeFi: allStrapiArticles(sort: {fields: publishDate, order: DESC}, limit: 3, filter: {mainTag: {eq: "DeFi"}}) {
      nodes {
        title
        publishDate
        summary
        author
        authorImg {
          childImageSharp {
            fixed(width: 32, height: 32) {
              ...GatsbyImageSharpFixed
            }
          }
        }
        cover {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
    Ether1: allStrapiArticles(sort: {fields: publishDate, order: DESC}, limit: 3, filter: {mainTag: {eq: "Ether1"}}) {
      nodes {
        title
        publishDate
        summary
        author
        authorImg {
          childImageSharp {
            fixed(width: 32, height: 32) {
              ...GatsbyImageSharpFixed
            }
          }
        }
        cover {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
    Ecosystem: allStrapiArticles(sort: {fields: publishDate, order: DESC}, limit: 3, filter: {mainTag: {eq: "Ecosystem"}}) {
      nodes {
        title
        publishDate
        summary
        author
        authorImg {
          childImageSharp {
            fixed(width: 32, height: 32) {
              ...GatsbyImageSharpFixed
            }
          }
        }
        cover {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`)
 

  let Ether2 = data.Ether2.nodes
  let Technology = data.Technology.nodes
  let Staking = data.Staking.nodes
  let DeFi = data.DeFi.nodes
  let Ether1 = data.Ether1.nodes 
  let Ecosystem = data.Ecosystem.nodes

  return (
    <Layout>
      <SEO title="以太坊中文网,以太坊资讯" />
      {/* 第一栏 */}
      <Flex mt="6rem" flexWrap="wrap" justifyContent="space-between">
        <News />
        <Selected />
      </Flex>
      {/* 第二栏 */}
      <Box
        backgroundColor="#fff"
        w={["100%", "100%", "100%", "70%"]}
        margin="0 auto"
        mt={["2rem", "2rem", "2rem", "8rem"]}
      >
        <Swiper />
      </Box>
      {/* 第三栏 */}
      <Eachrow data={Ether2} rowName="ETH 2.0" />

      {/* 第四栏 */}
      <Eachrow data={Technology} rowName="技术" />
      {/* 第五栏 */}
      <Eachrow data={Staking} rowName="Staking" />
      {/* 第六栏 */}
      <Eachrow data={DeFi} rowName="DeFi" />
      {/* 第七栏 */}
      <Eachrow data={Ether1} rowName="ETH 1.X" />
      {/* 第八栏 */}
      <Eachrow data={Ecosystem} rowName="生态" />

      {/* 第九栏目 */}
      <LastRow />

      {/* last */}
      <Box mb="2rem" h="10rem">
        ETH China
        </Box>
    </Layout>
  )
}
export default IndexPage
