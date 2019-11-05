import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import css from './video.module.scss'

export default ({ video, className = '', align = 'left', alt = '' }) => (
  <StaticQuery
    query={graphql`
      query postVideoQuery {
        source: allFile(filter: { sourceInstanceName: { eq: "postvideos" } }) {
          edges {
            node {
              extension
              absolutePath
              relativePath
              dir
              publicURL
            }
          }
        }
      }
    `}
    render={data => {
      const classNames = [css.video]
      classNames.push(css[`video__pull_${align}`])

      return data.source.edges
        .filter(({ node }) => {
          const { relativePath } = node
          return relativePath.includes(video)
        })
        .map(({ node }, i) => (<span className={classNames.join(' ')} key={`${video}-${i}`}>
          <video 
            src={node.publicURL} 
            autoplay={true} 
            loop={true} 
            muted={true} 
            playsinline={true} 
            title={ alt }>
          </video>
          <small className={css.description}>{alt}</small>
        </span>))
    }}
  />
)
