import React from 'react'
import styles from './blockquote.module.scss'

const Blockquote = ({ children, by, link, linkText }) => (
  <blockquote className={styles.quote}>
    <p className={styles.body}>{children}</p>
    <footer className={styles.footer}>
      <strong className={styles.by}>{by}</strong>
      {linkText ? (
        <cite className={styles.cite}>
          <a href={link}>{linkText}</a>
        </cite>
      ) : (
        ''
      )}
    </footer>
  </blockquote>
)

export default Blockquote
