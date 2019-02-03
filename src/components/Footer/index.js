import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import styles from './footer.module.scss'

const Footer = ({ title = '' }) => (
  <StaticQuery
    query={graphql`
      query FooterQuery {
        site {
          siteMetadata {
            instagramUrl
            linkedinUrl
            githubUrl
            twitterUrl
            email
          }
        }
      }
    `}
    render={({ site: { siteMetadata } }) => (
      <footer className={styles.footer}>
        <div className={styles.footer_content}>
          <h3 className={styles.farewell}>
            Keep updated, contact, get in touch!
          </h3>

          <ul className={styles.about}>
            <li>
              Contact me via{' '}
              <a href="mailto:nec@shell8.net" title="email">
                email
              </a>
            </li>
            <li>
              <a href="/atom.xml">RSS feed</a> of my posts
            </li>
            <li>
              Check out my <a href="/working">resume</a>
            </li>
          </ul>

          <hr />

          <ul className={styles.links}>
            <li>
              <a href="/working" />
              <a href={siteMetadata.instagramUrl}>GitHub</a>
            </li>
            <li>
              <a href={siteMetadata.instagramUrl}>Instagram</a>
            </li>
            <li>
              <a href={siteMetadata.instagramUrl}>Twitter</a>
            </li>
            <li>
              <a href={siteMetadata.instagramUrl}>LinkedIn</a>
            </li>
          </ul>
        </div>

        <div className={styles.footer_bottom}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 340.2 340.2">
            <g>
              <path
                d="M297.3,278.8c25-29.3,40.2-67.2,40.2-108.8c0-33.3-9.7-64.4-26.5-90.4c3.3,8.1,5,17.3,5,27.6c0,10.8-0.9,23.8-2.8,38.8
                L297.3,278.8z"
              />
              <path
                d="M114.6,215l21.2-172.5h50.9l-2.3,20.1c20.2-13.4,40.6-20.1,61.3-20.1c19.2,0,34.9,4.7,47.3,14
                C262.4,23.4,218.7,2.7,170.1,2.7C77.6,2.7,2.7,77.6,2.7,170.1c0,15.7,2.2,30.9,6.2,45.3L114.6,215z"
              />
              <path
                d="M263,133c0.6-4.7,1-9,1.3-12.6c0.2-3.7,0.3-7,0.3-9.9c0-19.6-10.6-29.4-31.9-29.4c-13.1,0-24.4,4-33.7,11.9
                c-7.7,6.3-13.4,13.9-17.1,23c-2,4.6-3.7,10.2-5.1,16.9c-1.4,6.7-2.6,14.4-3.7,23.1l-12.9,104.3h-51.1l-80,0
                c29.7,46.4,81.8,77.2,141,77.2c25.3,0,49.4-5.6,70.9-15.7L263,133z"
              />
            </g>
          </svg>
          <p>
            {new Date().getFullYear()} © Szabolcs Szabolcsi-Toth. All rights
            reserved.
          </p>
          <p>
            Built using{' '}
            <a href="http://hexo.io/" target="_blank">
              Hexo
            </a>
            , deployed on{' '}
            <a href="https://netlify.com/" target="_blank">
              Netlify
            </a>
            .<br />
            if you're interested how,{' '}
            <a href="/writing/how-this-site-was-made/">
              I've wrote a post about it here!
            </a>
          </p>
        </div>
      </footer>
    )}
  />
)

export default Footer
