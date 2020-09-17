import React from "react"
import { Link, graphql } from "gatsby"
import SEO from "../components/seo"
import {
  Box,
  Heading,
  Stack,
  Avatar,
  Text,
  Divider,
  Flex,
  Image,
} from "@chakra-ui/core"
const ReactMarkdown = require("react-markdown")
const Article = ({ data }) => {
  const post = data.strapiArticles

  return (
    <Box>
      <SEO title={post.title} />
      <Box
        w="100%"
        maxW={800}
        mx="auto"
        px="30px"
        pt={["20px", "20px", "50px", "10vh"]}
        mb={["15vh", "15vh", "20vh", "40vh"]}
      >
        <Heading
          lineHeight="7vh"
          fontWeight="700"
          fontFamily="NotoSansSC-Medium"
          color="#fff"
        >
          {post.title}
        </Heading>

        <Text
          fontSize="1rem"
          color="#a8a9a6"
          mt="4vh"
          mb="4vh"
          lineHeight="3.25vh"
        >
          {post.summary}
        </Text>
        <Divider />

        <Stack isInline mt="1.5rem" mb="2rem">
          <Avatar
            w="25px"
            h="25px"
            name={post.author}
            src={post.authorImg.childImageSharp.fixed.src}
          />
          <Text lineHeight="25px" fontSize="0.8rem" color="#fff">
            {post.author}
          </Text>
        </Stack>

        <ReactMarkdown source={post.content} className="content" escapeHtml={false}/>


        <Divider />
      </Box>
    </Box>
  )
}

export default Article

export const query = graphql`
  query Article($id: String!) {
    strapiArticles(id: { eq: $id }) {
      title
      summary
      author
      authorImg {
        childImageSharp {
          fixed {
            src
          }
        }
      }
      content
    }
  }
`
