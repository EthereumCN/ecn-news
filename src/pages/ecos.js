import React from "react"
import { Box, Flex } from "@chakra-ui/core"
import { useStaticQuery, graphql } from "gatsby"
import SEO from 'react-seo-component'
import Layout from "../components/layout"
// 底部
import Footer from "../components/FooterComponents/Footer"
// 事件栏
import EcoSystemBox from "../components/ecoSystemBox/ecoSystemBox"

const Ecosystem = () => {
  // 获取数据
  const data = useStaticQuery(graphql`
    {
      event: allStrapiCalendars(sort: { order: ASC, fields: date }) {
        nodes {
          eventName
          date(formatString: "YYYY.MM")
          location
          eventPicture {
            childImageSharp {
              fluid(maxWidth: 2000, quality: 100) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
      video: allStrapiEcoSystemVideos(limit: 4, sort: { fields: date, order: DESC }) {
        nodes {
          date
          title
          videoSource
          cover {
            childImageSharp {
              fixed(width: 300, height: 180) {
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
    }
  `)

  return (
    <Box>
      <Layout>
      <SEO
        title="生态漫游"
        titleTemplate={data.site.siteMetadata.title}
        description={data.site.siteMetadata.description}
        image={'https://ethereum.cn'}
        pathname={'https://ethereum.cn/ecos'}
        siteLanguage={data.site.siteMetadata.siteLanguage}
        siteLocale={data.site.siteMetadata.siteLocale}
        twitterUsername={data.site.siteMetadata.twitterUsername}
        author={data.site.siteMetadata.author}
        publishedDate={data.site.siteMetadata.lastBuildDate}
        modifiedDate={new Date(Date.now()).toISOString()}
      />
        {/* pc端 */}
        <Box display={["none", "none", "inline", "inline"]}>
          {/* 活动 */}
          <Flex mt="2rem" justifyContent="space-around" flexWrap="wrap">
            <EcoSystemBox data={data.event.nodes[0]} />
            <EcoSystemBox data={data.event.nodes[1]} />
            <EcoSystemBox data={data.event.nodes[2]} />
            <EcoSystemBox data={data.event.nodes[3]} />
          </Flex>

          {/* 走马图 */}
        </Box>
        {/* 手机端 */}
        <Box></Box>
      </Layout>
      <Footer />
    </Box>
  )
}

export default Ecosystem
