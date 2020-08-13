const path = require(`path`)
const { paginate } = require('gatsby-awesome-pagination')



exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions
  const blogPostTemplate = path.resolve(`src/template/article.js`)
  const technologyCategory = path.resolve(`src/template/technologyCategory.js`)

  // Query for markdown nodes to use in creating pages.
  // You can query for whatever data you want to create pages for e.g.
  // products, portfolio items, landing pages, etc.
  // Variables can be added as the second function parameter
  return graphql(`
  {
    articles: allStrapiArticles {
      nodes {
        id,
        strapiId
      }
    }
    technology: allStrapiCategories (filter: {strapiId: {eq: 1}}) {
      nodes {
        articles{
          id
        }
      }
    }
  }
  `).then(result => {
    if (result.errors) {
      throw result.errors
    }

    // Create blog post pages.
    result.data.articles.nodes.forEach(post => {
      createPage({
        // Path for this page — required
        path: `artilce_`+ post.strapiId,
        component: blogPostTemplate,
        context: {
          id: post.id,
        },
      })
    })



    paginate({
      createPage,
      items: result.data.technology.nodes[0].articles,
      itemsPerPage: 5,
      pathPrefix:  `/technology`,
      component: technologyCategory,
    })

  })
}
