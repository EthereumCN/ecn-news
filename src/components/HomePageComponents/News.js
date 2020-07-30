import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import { Box, Heading, Text, PseudoBox } from "@chakra-ui/core"

const News = () => {
  const data = useStaticQuery(graphql`
    {
      allStrapiArticles(sort: { order: DESC, fields: publishDate }, limit: 1) {
        nodes {
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
    <PseudoBox w={["100%","100%","100%","48%"]} cursor="pointer"  color="white"  _hover={{  color: " #ff2e00 " }} >
      {/* 最新tag     */}
      <Heading as="h2"  fontSize="1.2rem" color="#ff2e00" >
        最新
      </Heading>

      {/* title */}
      <Heading as="h1" size="xl"  pt="0.8rem" >
        {news.title}
      </Heading>
      {/* summary */}
      <Text  pt="1rem" color="white" >{news.summary}</Text>
      {/* 图片 */}
      <Box  pt="1rem">
        <Img fluid={news.cover.childImageSharp.fluid} />
      </Box>
    </PseudoBox>
  )
}

export default News
