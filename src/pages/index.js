import React from 'react'
import { graphql } from 'gatsby'
import { Link } from 'gatsby'

import Header from '../components/Header'

export default props => (
  <div>
    <Header />

    <ul>
      {props.data.allMdx.edges.map(({ node }) => (
        <li key={node.id}>
          <Link to={`/${node.parent.sourceInstanceName}/${node.parent.name}`}>
            {node.frontmatter.title}
          </Link>
        </li>
      ))}
    </ul>
  </div>
)

export const query = graphql`
  query MDXQuery {
    allMdx {
      edges {
        node {
          id
          parent {
            ... on File {
              name
              sourceInstanceName
            }
          }
          timeToRead
          frontmatter {
            title
            date
          }
        }
      }
    }
  }
`
