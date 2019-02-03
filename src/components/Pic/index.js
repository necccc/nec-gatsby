import React from 'react'
import styles from './pic.module.scss'

const Pic = ({ alt, src, title }) => {
  const pull = alt === 'left' ? 'left' : 'right'
  const classNames = [styles.image]

  classNames.push(styles[`image__pull_${pull}`])

  return (
    <span className={classNames.join(' ')}>
      <img src={src} alt={title} />
      <small className={styles.image_description}>{title}</small>
    </span>
  )
}

export default Pic
