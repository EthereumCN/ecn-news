import React from "react"
import {Text,  Box, Heading,Divider } from "@chakra-ui/core"
import SEO from "../components/seo"
import EachList from "../components/eachList"

const Category = (props) => {
  return (
    <Box >
       <SEO title="技术" />
      < Box mb="30vh">
      <Box
        w="100%"
        maxW={1080}
        mx="auto"
        px="30px"
        pt={["20px", "20px", "50px", "40px"]}
        mt="2vw"
      >
        <Heading fontSize="2.5rem" fontFamily="NotoSansSC-Regular" color="#fff">
        质押
        </Heading>
        <Text
          color="#969696"
          mt="1.2vw"
          fontWeight={500}
          fontSize="1.2rem"
          fontFamily="NotoSansSC-Regular"
        >
         质押最新技术页面
        </Text>
      </Box>
      <Divider w="100%" maxW={1018} borderColor="#ddd" mt="1vw" mx="auto" />
      {props.data.allStrapiArticles.nodes.map((value, index) => (
        <EachList value={value} key={index} />
      ))}
      </Box>
  
    </Box>
  )
}

export default Category

export const pageQuery = graphql`
  query staking($skip: Int!, $limit: Int!) {
    allStrapiArticles(
      skip: $skip
      limit: $limit
      sort: {fields: publishDate, order: DESC}
      filter: { mainTag: { eq: "Staking" } }
    ) {
      nodes {
        id
        title
        author
        summary
        authorImg {
          childImageSharp {
            fixed(width: 25, height: 25) {
              ...GatsbyImageSharpFixed
            }
          }
        }
        publishDate(formatString: "YYYY-MM-DD")
        cover {
          childImageSharp {
            fluid(maxWidth: 1000, maxHeight: 450) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`
