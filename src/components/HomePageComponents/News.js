import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import { Box, Heading, Text, PseudoBox } from "@chakra-ui/core"
import { Link } from "gatsby"
// 第一行左侧最新文章
const News = () => {
  const data = useStaticQuery(graphql`
    {
      allStrapiArticles(sort: { order: DESC, fields: publishDate }, limit: 1) {
        nodes {
          id
          title
          summary
          cover {
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid
              }
            }
          }
          publishDate(formatString: "YYYY-MM-DD")
        }
      }
    }
  `)

  let news = data.allStrapiArticles.nodes[0]

  return (
  
    <Box w={["100%", "100%", "48%", "48%"]} color="white">
        <Link to={"/"+news.id}>
      {/* 最新tag     */}
      <Heading as="h2" fontSize="0.9rem" color="#ff2e00">
        最新
      </Heading>
      <PseudoBox cursor="pointer" _hover={{ color: " #ff2e00 " }}>
        {/* title */}
        <Heading as="h1" size="xl" pt="0.1rem">
          {news.title}
        </Heading>
        {/* summary */}
        <Text pt="0.8rem" color="white">
          {news.summary}
        </Text>
      </PseudoBox>
      </Link>
      {/* 图片 */}
      <Box pt="1rem">
      <Link to={"/"+news.id}>
        <Img fluid={news.cover.childImageSharp.fluid} />
        </Link>
      </Box>
    </Box>

  )
}

export default News
