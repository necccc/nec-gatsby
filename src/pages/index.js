import React from 'react'
import { graphql } from 'gatsby'
import { Link } from 'gatsby'

import Layout from '../components/Layout'
import styles from './index.module.scss'

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
  <Layout title="Hi, I'm Szabolcs!">
    <section className={styles.intro}>
      <p>
        Mostly online as _Nec, I'm a developer from Budapest, Hungary. Organizer
        and curator of <a href="http://jsconfbp.com/">JSConf Budapest</a> and{' '}
        <a href="http://cssconfbp.rocks/">CSSConf Budapest</a>, organizer of{' '}
        <a href="https://www.meetup.com/Frontend-Meetup-Budapest/">
          Frontend Meetup Budapest
        </a>{' '}
        occasional <a href="/speaking">speaker</a>, hobby hardware hacker,
        photographer and Lego nerd. Senior frontend engineer at{' '}
        <a href="https://video.ibm.com/">IBM Watson Media</a>.
      </p>
    </section>

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
  query IndexQuery {
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
