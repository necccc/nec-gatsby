import React from 'react'
import styles from './pic.module.scss'

const Pic = ({ alt, src, title }) => {
  const classNames = [styles.image]

  classNames.push(styles[`image__pull_${alt}`])

  return (
    <span className={classNames.join(' ')}>
      <img src={src} alt={title} className={styles[`image__pull_${alt}`]} />
      <small className={styles.image_description}>{title}</small>
    </span>
  )
}

export default Pic
