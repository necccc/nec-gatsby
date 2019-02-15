import React from 'react'
import { graphql } from 'gatsby'
import MDXRenderer from 'gatsby-mdx/mdx-renderer'
import Layout from '../components/Layout'
import ArticleContent from '../components/ArticleContent'
import ArticleMeta from '../components/ArticleMeta'

import Pic from '../components/Pic'

const components = {
  img: Pic,
}

function PostPageTemplate({ data: { mdx } }) {
  const { relativePath } = mdx.parent
  const { title, date, tags, dateTime } = mdx.frontmatter

  return (
    <Layout title={title}>
      <ArticleContent>
        <MDXRenderer components={components}>{mdx.code.body}</MDXRenderer>
      </ArticleContent>
    </Layout>
  )
}

export default PostPageTemplate

export const pageQuery = graphql`
  query($id: String!) {
    mdx(id: { eq: $id }) {
      parent {
        ... on File {
          relativePath
        }
      }
      frontmatter {
        title
        date(formatString: "MMMM Do, YYYY")
        tags
      }
      id
      code {
        body
      }
    }
  }
`
