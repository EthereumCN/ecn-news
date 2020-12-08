require("dotenv").config()
module.exports = {
  siteMetadata: {
    title: `欢迎来到以太坊中国`,
    description: `在这里你可以学到很多`,
    author: `@ECN以太坊社区网络`,
    keywords: `blog, ECN`,
    lastBuildDate: new Date(Date.now()).toISOString(),
    siteUrl: `http://ethereum.cn/`,
    twitterUsername: `@EthereumCN`,
    siteLanguage: `zh-CN`,
    siteLocale: `zh-cn`,
  },
  plugins: [
    `gatsby-plugin-minify-html`,
    `gatsby-plugin-brotli`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-chakra-ui`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-plugin-algolia`,
      options: {
        appId: process.env.GATSBY_ALGOLIA_APP_ID,
        apiKey: process.env.ALGOLIA_ADMIN_KEY,
        queries: require("./src/utils/algolia-queries")
      },
    },
  
    { 
      resolve: `gatsby-plugin-baidu-analytics`,
      options: {
        // baidu analytics siteId
        siteId: "85cc73fc351572e76245f18278b32b0f",
        // Put analytics script in the head instead of the body [default:false]
        head: false,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-strapi`,
      options: {
        apiURL: "http://172.105.234.239:1337",
        queryLimit: 1000, // Default to 100
        contentTypes: [
          `articles`,
          `calendars`,
          `categories`,
          `college-videos`,
          `developer-videos`,
          `eco-system-videos`,
          `expresses`,
          `authors`,
          `trivias`,
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: "gatsby-plugin-feed",
      options: {
        query: `
          {
         site {
    siteMetadata {
      title
      siteUrl
      description
        }
        }
      }
        `,
        feeds: [
          {
            serialize: ({ query: { site, allStrapiArticles } }) =>
              allStrapiArticles.edges.map(edge =>
                Object.assign({}, edge.node, {
                  description: edge.node.summary,
                  date: edge.node.publishDate,
                  url: 'http://ethereum.cn/'+ edge.node.path,
                  guid: 'http://ethereum.cn/'+ edge.node.path,
                  custom_elements: [{ "content:encoded": edge.node.content }],
                })
              ),
            query: `
            {
              allStrapiArticles(sort: {order: DESC, fields: publishDate}, limit: 1000) {
              edges {
              node {
              content
              path
              title
              publishDate
              summary
                  }
                }
              }
            }
            `,
            output: "/rss.xml",
          },
        ],
      },
    },
    {
      resolve: "gatsby-plugin-mailchimp",
      options: {
        endpoint: "https://ethereum.us2.list-manage.com/subscribe/post?u=ab5eff800c44ca67b27f1581f&amp;id=b6319ace8c",
        timeout: 3500,
      }
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },  
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
