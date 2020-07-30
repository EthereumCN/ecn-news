import React from "react"
import { Link } from "gatsby"
import { Flex, } from "@chakra-ui/core"
import Layout from "../components/layout"
import SEO from "../components/seo"

// 第一栏
import News from "../components/HomePageComponents/News"
import Selected from '../components/HomePageComponents/Selected'


const IndexPage = () => (
  <Layout>
    <SEO title="以太坊中文网,以太坊资讯" />
    {/* 第一栏 */}
    <Flex
     mt="3rem"  
     flexWrap="wrap"
     justifyContent="space-between" 
    >
      <News />
      <Selected/>
    </Flex>
    {/* 第二栏 */}

    {/* 第三栏 */}

    {/* 第四栏 */}

    {/* 第五栏 */}
  </Layout>
)

export default IndexPage
