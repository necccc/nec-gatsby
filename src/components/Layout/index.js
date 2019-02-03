import React from 'react'
import styles from './layout.module.scss'
import Footer from '../Footer'

const Layout = ({ children }) => (
  <div className={styles.layout}>
    {children}
    <Footer />
  </div>
)

export default Layout
