import React from 'react'
import { graphql } from 'gatsby'
import { Link } from 'gatsby'

import Layout from '../components/Layout'
import styles from './speaking.module.scss'

const getPosts = data => {
  return data.allMdx.edges.filter(
    ({
      node: {
        parent: { sourceInstanceName },
      },
    }) => sourceInstanceName === 'writing'
  )
}

export default props => (
  <Layout title="Writing">
    <ul className={styles.articles}>
      {getPosts(props.data).map(({ node }) => (
        <li key={node.id}>
          <Link to={`/${node.parent.sourceInstanceName}/${node.fields.slug}`}>
            {node.frontmatter.title}
          </Link>
        </li>
      ))}
    </ul>
  </Layout>
)

export const query = graphql`
  query WritingQuery {
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
          fields {
            slug
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
