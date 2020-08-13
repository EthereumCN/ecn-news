import React from 'react'

const Category = (props) => {
    return (
        <div>
            {console.log(props)}
        </div>
    )
}

export default Category



export const pageQuery = graphql`
query IndexQuery($skip: Int!, $limit: Int!) {
  allStrapiCategories(
        limit: $limit
        skip: $skip
      ) {
        nodes {
            id
            articles{
              title
              id
            }
      }
    }
  }
`