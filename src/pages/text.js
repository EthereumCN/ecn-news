import React from "react"
import {
  Box,
} from "@chakra-ui/core"
import { useStaticQuery, graphql } from "gatsby"
import BackgroundImage from "gatsby-background-image"
import videoModule from '../components/videoCompound/video.module.css'


const Ademo = () => {
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
    <Box color="white" className={videoModule.aaa}>
      {console.log(data.allStrapiVideos.nodes[0].cover.childImageSharp.src)}
      <BackgroundImage
        Tag="section"
        style={{width:"500px", height:"200px"}}
        // className={className}
        fluid={data.allStrapiVideos.nodes[0].cover.childImageSharp.fluid}
        // backgroundColor={`#040e18`}
      >
        <h2>gatsby-background-image</h2>
      </BackgroundImage>
    </Box>
  )
}

export default Ademo
