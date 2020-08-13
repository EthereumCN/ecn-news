import React from "react"
import { Flex, Box, Text, Heading } from "@chakra-ui/core"
import { useStaticQuery, graphql } from "gatsby"

const LastRow = () => {
    const data = useStaticQuery(graphql`
    {
      Thinking: allStrapiArticles(sort: {fields: publishDate, order: DESC}, limit: 1, filter: {mainTag: {eq: "Thinking"}}) {
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
      Announcement: allStrapiArticles(sort: {fields: publishDate, order: DESC}, limit: 1, filter: {mainTag: {eq: "Announcement"}}) {
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
      Activity: allStrapiArticles(sort: {fields: publishDate, order: DESC}, limit: 1, filter: {mainTag: {eq: "Activity"}}) {
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


  let Thinking = data.Thinking.nodes
  let Announcement = data.Announcement.nodes 
  let Activity = data.Activity.nodes

  return (
    <Flex
      color="#fff"
      flexWrap="wrap"
      justifyContent="space-between"
      mb="2rem"
      paddingY="2rem"
      borderY="1px solid #ccc"
      marginX="10rem"
    >
      {/* 第一栏 */}
      <Flex justifyContent="flex-start" flexDir="column" w={["100%", "100%", "100%", "30%"]}>
        {/* tag */}
        <Box color="#ff2e00" fontSize="0.9rem" mb="0.3rem">思辨</Box>
        {/* title */}
        <Heading fontSize="1.5rem" mb="0.5rem">{Thinking[0].title}</Heading>
        {/* summary */}
        <Text>
        {Thinking[0].summary}
        </Text>
      </Flex>
      {/* 第二栏 */}
      <Box borderLeft="1px solid #aaa" />
      <Flex justifyContent="flex-start" flexDir="column" w={["100%", "100%", "100%", "30%"]}>
        {/* tag */}
        <Box color="#ff2e00" fontSize="0.9rem" mb="0.3rem">通告</Box>
        {/* title */}
        <Heading fontSize="1.5rem" mb="0.5rem">{Announcement[0].title}</Heading>
        {/* summary */}
        <Text>
        {Announcement[0].summary}
        </Text>
      </Flex>
      {/* 第三栏 */}
      <Box borderLeft="1px solid #aaa" />
      <Flex justifyContent="flex-start" flexDir="column" w={["100%", "100%", "100%", "30%"]}>
        {/* tag */}
        <Box color="#ff2e00" fontSize="0.9rem" mb="0.3rem">活动</Box>
        {/* title */}
        <Heading fontSize="1.5rem" mb="0.5rem">{Activity[0].title}</Heading>
        {/* summary */}
        <Text>
        {Activity[0].title}
        </Text>
      </Flex>
    </Flex>
  )
}

export default LastRow
