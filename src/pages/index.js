import React from 'react'
import { graphql } from 'gatsby'
import { Link } from 'gatsby'

import Layout from '../components/Layout'
import ArticleContent from '../components/ArticleContent'

import styles from './index.module.scss'

export default props => (
  <Layout>
    <section className={styles.intro}>
	    <p>
        Mostly online as _Nec, I'm a developer from Budapest, Hungary.{' '}
        Organizer and curator of <a href="http://jsconfbp.com/">JSConf Budapest</a> and <a href="http://cssconfbp.rocks/">CSSConf Budapest</a>,{' '}
        organizer of <a href="https://www.meetup.com/Frontend-Meetup-Budapest/">Frontend Meetup Budapest</a>{' '}
        occasional <a href="/speaking">speaker</a>, hobby hardware hacker, photographer and Lego nerd.{' '}
        Senior frontend engineer at <a href="https://video.ibm.com/">IBM Cloud Video</a>.
	    </p>
    </section>

    <ul className={styles.articles}>
      {props.data.allMdx.edges.map(({ node }) => (
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
