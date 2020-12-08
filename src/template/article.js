import React from "react"
import { graphql } from "gatsby"
import SEO from "react-seo-component"
import { Box, Heading, Stack, Avatar, Text, Divider } from "@chakra-ui/core"

import Layout from "../components/layout"
// 底部
import Footer from "../components/FooterComponents/Footer"

const ReactMarkdown = require("react-markdown")

const Article = ({ location, data }) => {
  const post = data.strapiArticles
  const { siteMetadata } = data.site
  return (
    <Layout>
      <SEO
        title={post.title}
        titleTemplate={siteMetadata.title}
        description={post.summary}
        image={
          "https://ecnn.netlify.app" + post.cover.childImageSharp.resize.src
        }
        pathname={"https://ecnn.netlify.app" + location.pathname}
        article={true}
        siteLanguage={siteMetadata.siteLanguage}
        siteLocale={siteMetadata.siteLocale}
        twitterUsername={siteMetadata.twitterUsername}
        author={post.author}
        publishedDate={post.publishDate}
        modifiedDate={new Date(Date.now()).toISOString()}
      />

      <Box
        w="100%"
        maxW={800}
        mx="auto"
        px="30px"
        pt={["65px", "65px", "70px", "14vh"]}
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
          <Text
            lineHeight="25px"
            fontSize="0.8rem"
            color="#fff"
            cursor="pointer"
          >
            {post.author}
            &nbsp;
            &nbsp;
            &nbsp;
            &nbsp;
            {post.publishDate}
          </Text>
        </Stack>

        <ReactMarkdown
          source={post.content}
          className="content"
          escapeHtml={false}
        />

        <Divider />
        <Footer />
      </Box>
    </Layout>
  )
}

export default Article

export const query = graphql`
  query Article($id: String!) {
    strapiArticles(id: { eq: $id }) {
      title
      summary
      publishDate
      author
      authorImg {
        childImageSharp {
          fixed {
            src
          }
        }
      }
      content
      cover {
        childImageSharp {
          resize {
            src
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
`
