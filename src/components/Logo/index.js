import React from 'react'
import styles from './styles.module.scss'

const Logo = ({ className }) => (
  <svg
    className={className}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 340.2 340.2"
  >
    <path
      id="n-path"
      d="M172.1,319.4c-82.5,0-149.3-66.9-149.3-149.3S89.6,20.8,172.1,20.8s149.3,66.9,149.3,149.3
			S254.5,319.4,172.1,319.4z M142.1,62.8l-19.4,157.3l-145.8,0.3v40.9l140.7,0h46.6l11.8-95c1-8,2.1-15,3.4-21
			c1.3-6.1,2.8-11.2,4.6-15.4c3.4-8.2,8.6-15.2,15.6-20.9c8.6-7.3,18.8-10.9,30.8-10.9c19.4,0,29.1,8.9,29.1,26.8
			c0,2.7-0.1,5.7-0.3,9c-0.2,3.4-0.6,7.2-1.2,11.5l-30.3,249.6h46.6l29.4-237.7c1.7-13.7,2.6-25.5,2.6-35.4
			c0-18.2-5.7-32.6-17.2-43.2c-11.8-10.6-27.4-15.8-46.8-15.8c-18.8,0-37.4,6.1-55.8,18.3l2.1-18.3H142.1z"
    />
    <clipPath id="n-clip-path" />
    <circle
      className={styles.logo_circle}
      cx="172.2"
      cy="170.8"
      r="148.2"
      style={{ clipPath: `url(#n-clip-path)`, fill: '#fff' }}
    />
  </svg>
)

export default Logo
