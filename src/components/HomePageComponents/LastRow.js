import React from "react"
import { Flex, Box, Text, Heading } from "@chakra-ui/core"
import { useStaticQuery, graphql } from "gatsby"
import { Link } from "gatsby"
const LastRow = () => {
    const data = useStaticQuery(graphql`
    {
      Thinking: allStrapiArticles(sort: {fields: publishDate, order: DESC}, limit: 1, filter: {mainTag: {eq: "Thinking"}}) {
        nodes {
          id
          title
          mainTag
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
          id
          title
          mainTag
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
           id
          title
          mainTag
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
      marginX={["0rem","0rem","0rem","10rem"]}
    >
      {/* 第一栏 */}
      <Flex justifyContent="flex-start" flexDir="column" w={["100%", "100%", "30%", "30%"]}>
        {/* tag */}
        <Link to={Thinking[0].mainTag}>
        <Box color="#ff2e00" fontSize="0.9rem" mb="0.3rem">思辨</Box>
        </Link>
        {/* title */}
        <Link to={Thinking[0].id}>
        <Heading fontSize="1.5rem" mb="0.5rem">{Thinking[0].title}</Heading>
        {/* summary */}
        <Text>
        {Thinking[0].summary}
        </Text>
        </Link>
      </Flex>
      {/* 第二栏 */}
      <Box borderLeft="1px solid #aaa" />
      <Flex justifyContent="flex-start" flexDir="column" w={["100%", "100%", "30%", "30%"]}>
        {/* tag */}
        <Link to={Announcement[0].mainTag}>
        <Box color="#ff2e00" fontSize="0.9rem" mb="0.3rem">通告</Box>
        </Link>
        {/* title */}
        <Link to={Announcement[0].id}>
        <Heading fontSize="1.5rem" mb="0.5rem">{Announcement[0].title}</Heading>
        {/* summary */}
        <Text>
        {Announcement[0].summary}
        </Text>
        </Link>
      </Flex>
      {/* 第三栏 */}
      <Box borderLeft="1px solid #aaa" />
      <Flex justifyContent="flex-start" flexDir="column" w={["100%", "100%", "30%", "30%"]}>
        {/* tag */}
        <Link to={Activity[0].mainTag}>
        <Box color="#ff2e00" fontSize="0.9rem" mb="0.3rem">活动</Box>
        </Link>
        {/* title */}
        <Link to={Activity[0].id}>
        <Heading fontSize="1.5rem" mb="0.5rem">{Activity[0].title}</Heading>
        {/* summary */}
        <Text>
        {Activity[0].title}
        </Text>
        </Link> 
      </Flex>
    </Flex>
  )
}

export default LastRow
