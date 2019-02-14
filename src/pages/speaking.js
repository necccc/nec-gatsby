import React from 'react'
import { graphql } from 'gatsby'
import { Link } from 'gatsby'

import Layout from '../components/Layout'
import styles from './speaking.module.scss'

const getTalks = data => {
  return data.allMdx.edges.filter(
    ({
      node: {
        parent: { sourceInstanceName },
      },
    }) => sourceInstanceName === 'speaking'
  )
}

export default props => (
  <Layout title="Speaking">
    <ul className={styles.articles}>
      {getTalks(props.data).map(({ node }) => (
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
  query SpeakingQuery {
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
