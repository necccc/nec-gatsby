import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'
import css from './image.module.scss'

export default ({ image, className = '', align = 'left', alt = '' }) => (
  <StaticQuery
    query={graphql`
      query postImageQuery {
        source: allFile(filter: { sourceInstanceName: { eq: "writing" } }) {
          edges {
            node {
              extension
              absolutePath
              relativePath
              dir
              childImageSharp {
                fluid(maxWidth: 800) {
                  ...GatsbyImageSharpFluid_withWebp
                }
              }
            }
          }
        }
      }
    `}
    render={data => {
      const classNames = [css.image]
      classNames.push(css[`image__pull_${align}`])

      console.log(data)

      return data.source.edges
        .filter(({ node }) => {
          if (!node.childImageSharp) return false

          const { src } = node.childImageSharp.fluid
          return src.includes(image)
        })
        .map(({ node }, i) => (
          <span className={classNames.join(' ')} key={`${image}-${i}`}>
            <Img
              className={css.image}
              fluid={node.childImageSharp.fluid}
              alt={alt}
            />
            <small className={css.description}>{alt}</small>
          </span>
        ))
    }}
  />
)
